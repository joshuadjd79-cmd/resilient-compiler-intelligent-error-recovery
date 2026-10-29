#!/usr/bin/env python3
"""
Resilient Compiler - Local Backend Server & Analysis Engine
Uses Python standard library only (no external dependencies required).
Serves the developer web IDE and provides a secure compilation API connecting to resilientc.exe.
"""

import http.server
import json
import os
import re
import subprocess
import sys
import tempfile
import time
import urllib.parse

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
EXECUTABLE = os.path.join(BASE_DIR, "resilientc.exe")

TEST_DEFINITIONS = [
    {"id": "test_01", "name": "Test 01: Valid Program", "file": "tests/01_valid_program.txt", "flags": "", "expectedExit": 0, "description": "Clean compilation with no errors"},
    {"id": "test_02", "name": "Test 02: Missing Expression", "file": "tests/02_missing_expression.txt", "flags": "", "expectedExit": 0, "description": "Intelligent Insertion of default literal '0'"},
    {"id": "test_03", "name": "Test 03: Extra Semicolon", "file": "tests/03_extra_semicolon.txt", "flags": "", "expectedExit": 0, "description": "Intelligent Deletion of redundant semicolons"},
    {"id": "test_04", "name": "Test 04: Missing Delimiter ')'", "file": "tests/04_missing_delimiter.txt", "flags": "", "expectedExit": 0, "description": "Intelligent Insertion of missing ')' before block '{'"},
    {"id": "test_05", "name": "Test 05: Multiple Syntax Errors", "file": "tests/05_multiple_errors.txt", "flags": "", "expectedExit": 0, "description": "Multi-strategy recovery across 4 distinct syntax errors"},
    {"id": "test_06", "name": "Test 06: Panic Mode Recovery", "file": "tests/06_panic_mode_recovery.txt", "flags": "", "expectedExit": 0, "description": "Panic mode synchronization on illegal characters"},
    {"id": "test_07", "name": "Test 07: Undeclared Variable", "file": "tests/07_undeclared_variable.txt", "flags": "", "expectedExit": 1, "description": "Semantic rejection of undeclared variable 'y'"},
    {"id": "test_08", "name": "Test 08: Duplicate Declaration", "file": "tests/08_duplicate_declaration.txt", "flags": "", "expectedExit": 1, "description": "Semantic rejection of re-declaring in same scope"},
    {"id": "test_09", "name": "Test 09: Type Mismatch", "file": "tests/09_type_mismatch.txt", "flags": "", "expectedExit": 1, "description": "Semantic rejection of assigning float to int"},
    {"id": "test_10", "name": "Test 10: Nested Scope Shadowing", "file": "tests/10_nested_scopes.txt", "flags": "", "expectedExit": 0, "description": "Proper block scoping and variable shadowing"},
    {"id": "test_11", "name": "Test 11: Constant Folding", "file": "tests/11_constant_folding.txt", "flags": "", "expectedExit": 0, "description": "Compile-time arithmetic constant folding"},
    {"id": "test_12", "name": "Test 12: End-to-End VM Execution", "file": "tests/12_end_to_end_exec.txt", "flags": "--run", "expectedExit": 0, "description": "Full pipeline execution with while loop sum on VM"},
    {"id": "test_13", "name": "Test 13: Operator Precedence", "file": "examples/arithmetic_demo.txt", "flags": "--ast", "expectedExit": 0, "description": "Correct AST hierarchy for *, +, relational, &&"},
    {"id": "test_14", "name": "Test 14: Fibonacci Algorithm", "file": "examples/fibonacci.txt", "flags": "--run", "expectedExit": 0, "description": "Iterative Fibonacci sequence on Virtual Machine"},
    {"id": "test_15", "name": "Test 15: Valid Arithmetic Suite", "file": "examples/01_valid_arithmetic.txt", "flags": "--all", "expectedExit": 0, "description": "Full arithmetic operators (+, -, *, /, %) with TAC & ASM"},
    {"id": "test_16", "name": "Test 16: Conditional Branching", "file": "examples/04_conditional_statement.txt", "flags": "--all", "expectedExit": 0, "description": "Nested if-else branches lowering to TAC and assembly"},
    {"id": "test_17", "name": "Test 17: Loop Factorial", "file": "examples/05_loop_computation.txt", "flags": "--all", "expectedExit": 0, "description": "While loop condition and backward jump in assembly & VM"},
    {"id": "test_18", "name": "Test 18: x86 Target Assembly", "file": "examples/13_tac_and_assembly.txt", "flags": "--asm", "expectedExit": 0, "description": "Real x86-32 AT&T assembly emission with stack frames"},
    {"id": "test_19", "name": "Test 19: Educational Assembly", "file": "examples/13_tac_and_assembly.txt", "flags": "--edu-asm", "expectedExit": 0, "description": "Educational ISA-32 load-store register assembly"},
    {"id": "test_20", "name": "Test 20: Native GCC Asm & Exec", "file": "examples/06_fibonacci.txt", "flags": "--compile-native", "expectedExit": 0, "description": "Direct machine execution using MinGW GCC assembler"}
]

class CompilerRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        # Enable CORS for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == "/api/samples":
            self.handle_get_samples()
        elif parsed_url.path == "/api/status":
            self.handle_get_status()
        elif parsed_url.path == "/api/tests":
            self.handle_get_tests()
        else:
            # Default to serving static files from BASE_DIR
            super().do_GET()

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == "/api/compile":
            self.handle_post_compile()
        elif parsed_url.path == "/api/build":
            self.handle_post_build()
        else:
            self.send_error(404, "Endpoint not found")

    def handle_get_status(self):
        exe_exists = os.path.isfile(EXECUTABLE)
        exe_size = os.path.getsize(EXECUTABLE) if exe_exists else 0
        data = {
            "online": True,
            "executableFound": exe_exists,
            "executablePath": EXECUTABLE,
            "executableSize": exe_size,
            "platform": sys.platform,
            "version": "3.0.0",
            "assemblerAvailable": True,
            "targetArch": "x86-32 AT&T / ISA-32"
        }
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def handle_get_samples(self):
        samples = {}
        samples_dir = os.path.join(BASE_DIR, "examples")
        tests_dir = os.path.join(BASE_DIR, "tests")

        sample_files = [
            ("fibonacci", os.path.join(samples_dir, "06_fibonacci.txt"), "A. Fibonacci Sequence (Iterative Control Flow)", "Algorithms & Native Execution"),
            ("valid_arithmetic", os.path.join(samples_dir, "01_valid_arithmetic.txt"), "B. Valid Arithmetic (+, -, *, /, %)", "Algorithms & Native Execution"),
            ("loop_factorial", os.path.join(samples_dir, "05_loop_computation.txt"), "C. Factorial Loop (While Condition & Jump)", "Algorithms & Native Execution"),
            ("vars_and_assignments", os.path.join(samples_dir, "02_vars_and_assignments.txt"), "D. Variables & Types (int, float, bool)", "Language Constructs"),
            ("precedence_nested", os.path.join(samples_dir, "03_precedence_nested.txt"), "E. Precedence & Logic (&&, ||, *, +)", "Language Constructs"),
            ("conditional_statement", os.path.join(samples_dir, "04_conditional_statement.txt"), "F. Nested Conditionals (if-else branching)", "Language Constructs"),
            ("tac_and_assembly", os.path.join(samples_dir, "13_tac_and_assembly.txt"), "G. TAC to x86 Assembly Translation", "Intermediate & Assembly Code"),
            ("optimization_demo", os.path.join(samples_dir, "12_optimization_demo.txt"), "H. Optimizer (Fold, Propagate & Simplify)", "Intermediate & Assembly Code"),
            ("syntax_recovery", os.path.join(samples_dir, "11_multiple_errors_recovery.txt"), "I. Multi-Error Recovery (4 Mixed Errors)", "Intelligent Error Recovery"),
            ("missing_semicolon", os.path.join(samples_dir, "07_missing_semicolon.txt"), "J. Missing Semicolon Insertion", "Intelligent Error Recovery"),
            ("unexpected_token", os.path.join(samples_dir, "08_unexpected_token.txt"), "K. Unexpected Semicolon Deletion", "Intelligent Error Recovery"),
            ("missing_delimiter", os.path.join(tests_dir, "04_missing_delimiter.txt"), "L. Missing Delimiter ')' Insertion", "Intelligent Error Recovery"),
            ("panic_mode", os.path.join(tests_dir, "06_panic_mode_recovery.txt"), "M. Panic Mode Synchronization Set", "Intelligent Error Recovery"),
            ("nested_scopes", os.path.join(tests_dir, "10_nested_scopes.txt"), "N. Nested Scopes & Variable Shadowing", "Semantics & Symbol Table"),
            ("semantic_undeclared", os.path.join(samples_dir, "09_undeclared_identifier.txt"), "O. Semantic Error: Undeclared Variable", "Semantics & Symbol Table"),
            ("semantic_type_mismatch", os.path.join(samples_dir, "10_type_mismatch.txt"), "P. Semantic Error: Type Incompatibility", "Semantics & Symbol Table")
        ]

        for key, filepath, desc, category in sample_files:
            if os.path.isfile(filepath):
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        samples[key] = {
                            "name": desc,
                            "category": category,
                            "code": f.read()
                        }
                except Exception:
                    pass

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(samples).encode('utf-8'))

    def handle_get_tests(self):
        """
        Executes the real automated test suite against resilientc.exe and returns live results.
        """
        if not os.path.isfile(EXECUTABLE):
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Compiler executable not found."}).encode('utf-8'))
            return

        results = []
        passed_count = 0
        total_time_ms = 0

        for t in TEST_DEFINITIONS:
            file_path = os.path.join(BASE_DIR, t["file"].replace("/", os.sep))
            start_t = time.time()
            if not os.path.isfile(file_path):
                results.append({
                    "id": t["id"],
                    "name": t["name"],
                    "file": t["file"],
                    "description": t["description"],
                    "expectedExit": t["expectedExit"],
                    "actualExit": -1,
                    "passed": False,
                    "durationMs": 0,
                    "error": "Test file missing"
                })
                continue

            try:
                cmd = [EXECUTABLE, file_path]
                if t.get("flags"):
                    cmd.extend(t["flags"].split())
                else:
                    cmd.append("--all")

                proc = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=5,
                    cwd=BASE_DIR
                )
                duration = round((time.time() - start_t) * 1000, 1)
                total_time_ms += duration
                is_pass = (proc.returncode == t["expectedExit"])
                if is_pass:
                    passed_count += 1

                results.append({
                    "id": t["id"],
                    "name": t["name"],
                    "file": t["file"],
                    "description": t["description"],
                    "expectedExit": t["expectedExit"],
                    "actualExit": proc.returncode,
                    "passed": is_pass,
                    "durationMs": duration,
                    "outputSnippet": (proc.stdout[:300] if proc.stdout else "")
                })
            except Exception as e:
                results.append({
                    "id": t["id"],
                    "name": t["name"],
                    "file": t["file"],
                    "description": t["description"],
                    "expectedExit": t["expectedExit"],
                    "actualExit": -1,
                    "passed": False,
                    "durationMs": 0,
                    "error": str(e)
                })

        summary = {
            "total": len(TEST_DEFINITIONS),
            "passed": passed_count,
            "failed": len(TEST_DEFINITIONS) - passed_count,
            "allPassed": (passed_count == len(TEST_DEFINITIONS)),
            "totalTimeMs": round(total_time_ms, 1),
            "tests": results
        }

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(summary).encode('utf-8'))

    def handle_post_build(self):
        """
        Recompiles the compiler C++17 sources into resilientc.exe safely.
        """
        build_res = self.build_compiler()
        self.send_response(200 if build_res["success"] else 500)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(build_res).encode('utf-8'))

    def handle_post_compile(self):
        content_length = int(self.headers.get('Content-Length', 0))
        if content_length > 100 * 1024:  # 100 KB limit
            self.send_error(413, "Input code exceeds 100KB limit")
            return

        body = self.rfile.read(content_length).decode('utf-8')
        try:
            req_data = json.loads(body)
        except json.JSONDecodeError:
            self.send_error(400, "Invalid JSON payload")
            return

        source = req_data.get("source", "")
        if not source.strip():
            self.send_error(400, "Source code cannot be empty")
            return

        flag = req_data.get("flag", "--all")
        # Validate flag against allowlist
        allowed_flags = {"--all", "--tokens", "--ast", "--symbols", "--tac", "--opt", "--target", "--asm", "--assembly", "--edu-asm", "--compile-native", "--run"}
        if flag not in allowed_flags:
            flag = "--all"

        if not os.path.isfile(EXECUTABLE):
            self.build_compiler()

        if not os.path.isfile(EXECUTABLE):
            res = {
                "success": False,
                "error": "Compiler executable (resilientc.exe) not found. Please compile it first.",
                "rawOutput": "Compiler executable not found."
            }
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
            return

        # Write to temporary file safely
        temp_file_path = os.path.join(BASE_DIR, "temp_code_run.txt")
        try:
            with open(temp_file_path, "w", encoding="utf-8") as f:
                f.write(source)

            # Invoke compiler safely with 5-second timeout
            cmd = [EXECUTABLE, temp_file_path, flag]
            start_time = time.time()
            proc = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=5,
                cwd=BASE_DIR
            )
            elapsed_ms = round((time.time() - start_time) * 1000, 2)

            stdout = proc.stdout
            stderr = proc.stderr
            exit_code = proc.returncode

            sections = parse_compiler_output(stdout, stderr)

            response = {
                "success": (exit_code == 0),
                "exitCode": exit_code,
                "elapsedMs": elapsed_ms,
                "rawOutput": stdout + ("\n" + stderr if stderr else ""),
                "sections": sections
            }

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response).encode('utf-8'))

        except subprocess.TimeoutExpired:
            self.send_response(200)
            self.send_headers()
            self.wfile.write(json.dumps({
                "success": False,
                "error": "Execution timed out (5s limit exceeded). Possible infinite loop in user code.",
                "rawOutput": "Timeout exceeded."
            }).encode('utf-8'))
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({
                "success": False,
                "error": str(e),
                "rawOutput": str(e)
            }).encode('utf-8'))
        finally:
            if os.path.exists(temp_file_path):
                try:
                    os.remove(temp_file_path)
                except Exception:
                    pass

    def build_compiler(self):
        try:
            cpp_files = [
                "src/main.cpp", "src/lexer/Lexer.cpp", "src/ast/AST.cpp",
                "src/parser/Parser.cpp", "src/recovery/RecoveryManager.cpp",
                "src/recovery/RecoveryScorer.cpp", "src/semantics/SymbolTable.cpp",
                "src/semantics/SemanticAnalyzer.cpp", "src/ir/TAC.cpp",
                "src/ir/IRGenerator.cpp", "src/optimizer/Optimizer.cpp",
                "src/codegen/AssemblyGenerator.cpp",
                "src/vm/VM.cpp", "src/vm/CodeGenerator.cpp"
            ]
            cmd = ["g++", "-std=c++17", "-O2"] + cpp_files + ["-o", "resilientc.exe"]
            proc = subprocess.run(cmd, cwd=BASE_DIR, capture_output=True, text=True, timeout=30)
            return {
                "success": (proc.returncode == 0),
                "exitCode": proc.returncode,
                "stdout": proc.stdout,
                "stderr": proc.stderr
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e)
            }


def parse_compiler_output(stdout, stderr):
    """
    Parses resilientc output sections into structured UI data blocks.
    """
    sections = {
        "status": "",
        "recovery": "",
        "tokens": "",
        "ast": "",
        "semantics": "",
        "tac": "",
        "opt": "",
        "assembly": "",
        "eduAssembly": "",
        "nativeExecution": "",
        "target": "",
        "vm": "",
        "tokensList": [],
        "recoveryActions": [],
        "recoveryTotalCost": 0,
        "symbolsList": [],
        "optSummary": {"folded": 0, "propagated": 0, "algebraic": 0, "deadEliminated": 0, "total": 0},
        "targetList": [],
        "vmOutputLines": [],
        "vmVariables": [],
        "hasRecovery": False,
        "hasSemanticErrors": False
    }

    lines = stdout.splitlines()
    current_section = None
    buf = []

    def commit_section():
        nonlocal current_section, buf
        if current_section and buf:
            sections[current_section] = "\n".join(buf).strip()
            buf = []

    for line in lines:
        if "=== Resilient Compiler Status ===" in line:
            commit_section()
            current_section = "status"
        elif "=== Error Recovery Report" in line:
            commit_section()
            current_section = "recovery"
        elif "=== Lexical Tokens" in line:
            commit_section()
            current_section = "tokens"
        elif "=== Abstract Syntax Tree (AST) ===" in line:
            commit_section()
            current_section = "ast"
        elif "=== Semantic Analysis Report ===" in line:
            commit_section()
            current_section = "semantics"
        elif "=== Three-Address Code (TAC) ===" in line:
            commit_section()
            current_section = "tac"
        elif "=== Optimization Summary ===" in line:
            commit_section()
            current_section = "opt"
        elif "=== Optimized Three-Address Code ===" in line:
            commit_section()
            current_section = "optTac"
        elif "=== Target Assembly Code (x86-32 AT&T) ===" in line:
            commit_section()
            current_section = "assembly"
        elif "=== Target Educational Assembly (ISA-32) ===" in line:
            commit_section()
            current_section = "eduAssembly"
        elif "=== Native Assembly Execution" in line:
            commit_section()
            current_section = "nativeExecution"
        elif "=== Target Bytecode Instructions ===" in line:
            commit_section()
            current_section = "target"
        elif "=== Virtual Machine Execution ===" in line:
            commit_section()
            current_section = "vm"
        elif "[Compilation Stopped]" in line or "[Semantic Error]" in line:
            sections["hasSemanticErrors"] = True
            if current_section:
                buf.append(line)
        else:
            if current_section:
                buf.append(line)

    commit_section()

    if stderr:
        if sections["semantics"]:
            sections["semantics"] += "\n" + stderr
        else:
            sections["semantics"] = stderr

    # Parse Tokens List
    if sections["tokens"]:
        token_pattern = re.compile(r"\[(\d+)\]\s+Line\s+(\d+),\s+Col\s+(\d+)\s+\|\s+Type:\s+(\w+)\s+\|\s+Lexeme:\s+'(.*)'")
        for line in sections["tokens"].splitlines():
            m = token_pattern.search(line)
            if m:
                sections["tokensList"].append({
                    "index": int(m.group(1)),
                    "line": int(m.group(2)),
                    "column": int(m.group(3)),
                    "type": m.group(4),
                    "lexeme": m.group(5)
                })

    # Parse Recovery Actions
    rec_text = sections["recovery"]
    if rec_text and "No recovery actions were required" not in rec_text:
        sections["hasRecovery"] = True
        cost_match = re.search(r"Total Recovery Cost Incurred:\s*(\d+)", rec_text)
        if cost_match:
            sections["recoveryTotalCost"] = int(cost_match.group(1))

        action_blocks = re.findall(r"\[(\d+)\]\s+\[([A-Z_ ]+)\]\s+(.*?)(?=\[\d+\]|$|---|Total)", rec_text, re.DOTALL)
        for act_id, strategy, body in action_blocks:
            loc_match = re.search(r"(.*?)\s+at line\s+(\d+),\s+column\s+(\d+)", body)
            msg = loc_match.group(1).strip() if loc_match else body.splitlines()[0].strip()
            line_no = int(loc_match.group(2)) if loc_match else 0
            col_no = int(loc_match.group(3)) if loc_match else 0

            cost_m = re.search(r"Recovery Cost\s*:\s*(\d+)", body)
            conf_m = re.search(r"Confidence\s*:\s*([A-Za-z]+)", body)
            rat_m = re.search(r"Rationale\s*:\s*(.*?)(?=\n\s*\w|$)", body, re.DOTALL)

            cost = int(cost_m.group(1)) if cost_m else 1
            conf = conf_m.group(1).strip() if conf_m else "HIGH"
            rationale = rat_m.group(1).strip() if rat_m else ""

            sections["recoveryActions"].append({
                "id": int(act_id),
                "strategy": strategy.strip(),
                "message": msg,
                "line": line_no,
                "column": col_no,
                "cost": cost,
                "confidence": conf,
                "rationale": rationale
            })

    # Parse Symbol Table
    if sections["semantics"]:
        sym_lines = sections["semantics"].splitlines()
        in_table = False
        for sl in sym_lines:
            if "Identifier" in sl and "Type" in sl:
                in_table = True
                continue
            if in_table and "---" in sl:
                continue
            if in_table:
                parts = sl.split()
                if len(parts) >= 4:
                    sections["symbolsList"].append({
                        "name": parts[0],
                        "type": parts[1],
                        "scope": parts[2],
                        "declaredAt": parts[3]
                    })
                elif not sl.strip():
                    in_table = False

    # Parse Optimization Summary
    if sections["opt"]:
        f_m = re.search(r"Constant Operations Folded\s*:\s*(\d+)", sections["opt"])
        p_m = re.search(r"Constant Operands Propagated\s*:\s*(\d+)", sections["opt"])
        a_m = re.search(r"Algebraic Simplifications\s*:\s*(\d+)", sections["opt"])
        d_m = re.search(r"Dead Instructions Eliminated\s*:\s*(\d+)", sections["opt"])
        t_m = re.search(r"Total Optimizations Applied\s*:\s*(\d+)", sections["opt"])
        sections["optSummary"] = {
            "folded": int(f_m.group(1)) if f_m else 0,
            "propagated": int(p_m.group(1)) if p_m else 0,
            "algebraic": int(a_m.group(1)) if a_m else 0,
            "deadEliminated": int(d_m.group(1)) if d_m else 0,
            "total": int(t_m.group(1)) if t_m else 0
        }

    # Parse Target Bytecode
    if sections["target"]:
        for line in sections["target"].splitlines():
            m = re.match(r"(\d{4}):\s+(\w+)(?:\s+(.*))?", line.strip())
            if m:
                sections["targetList"].append({
                    "address": m.group(1),
                    "opcode": m.group(2),
                    "arg": m.group(3).strip() if m.group(3) else ""
                })

    # Parse VM Execution & Variables
    if sections["vm"]:
        for line in sections["vm"].splitlines():
            if line.startswith("[VM Output]"):
                sections["vmOutputLines"].append(line.replace("[VM Output]", "").strip())
        if "=== VM Execution State" in sections["vm"]:
            var_part = sections["vm"].split("=== VM Execution State")[1]
            in_vars = False
            for vl in var_part.splitlines():
                if "Variable" in vl and "Value" in vl:
                    in_vars = True
                    continue
                if in_vars and "---" in vl:
                    continue
                if in_vars:
                    parts = vl.split()
                    if len(parts) >= 2:
                        sections["vmVariables"].append({
                            "name": parts[0],
                            "value": parts[1]
                        })
                    elif not vl.strip() or "Compilation" in vl:
                        in_vars = False

    return sections


def main():
    print("=" * 65)
    print(" Resilient Compiler - Intelligent Error Recovery & Analysis Server")
    print(f" URL: http://localhost:{PORT}")
    print(f" Root Directory: {BASE_DIR}")
    print(f" Compiler Binary: {'READY' if os.path.isfile(EXECUTABLE) else 'NEEDS BUILD'}")
    print(f" Automated Tests: {len(TEST_DEFINITIONS)} verified test cases available")
    print("=" * 65)
    print("Press Ctrl+C to stop the server.\n")

    http.server.ThreadingHTTPServer.allow_reuse_address = True
    server = http.server.ThreadingHTTPServer(("", PORT), CompilerRequestHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        server.server_close()


if __name__ == "__main__":
    main()
