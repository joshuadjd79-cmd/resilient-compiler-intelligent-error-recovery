#!/usr/bin/env python3
"""
Resilient Compiler - Local Backend Server
Uses Python standard library only (no external dependencies required).
Serves the web UI and provides a secure compilation API connecting to resilientc.exe.
"""

import http.server
import json
import os
import subprocess
import sys
import tempfile
import urllib.parse

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
EXECUTABLE = os.path.join(BASE_DIR, "resilientc.exe")

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
        else:
            # Default to serving static files from BASE_DIR
            super().do_GET()

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == "/api/compile":
            self.handle_post_compile()
        else:
            self.send_error(404, "Endpoint not found")

    def handle_get_status(self):
        exe_exists = os.path.isfile(EXECUTABLE)
        data = {
            "online": True,
            "executableFound": exe_exists,
            "executablePath": EXECUTABLE,
            "version": "1.0.0"
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
            ("fibonacci", os.path.join(samples_dir, "fibonacci.txt"), "Fibonacci Algorithm (Loops & VM Output)"),
            ("arithmetic_demo", os.path.join(samples_dir, "arithmetic_demo.txt"), "Precedence & Logic (&&, ||, *, +)"),
            ("syntax_recovery", os.path.join(tests_dir, "05_multiple_errors.txt"), "Intelligent Error Recovery (4 Errors)"),
            ("missing_delimiter", os.path.join(tests_dir, "04_missing_delimiter.txt"), "Missing Delimiter ')' Recovery"),
            ("constant_folding", os.path.join(tests_dir, "11_constant_folding.txt"), "Constant Folding & Propagation"),
            ("nested_scopes", os.path.join(tests_dir, "10_nested_scopes.txt"), "Nested Block Scopes & Shadowing"),
            ("semantic_undeclared", os.path.join(tests_dir, "07_undeclared_variable.txt"), "Semantic Error: Undeclared Var"),
            ("semantic_type_mismatch", os.path.join(tests_dir, "09_type_mismatch.txt"), "Semantic Error: Type Mismatch")
        ]

        for key, filepath, desc in sample_files:
            if os.path.isfile(filepath):
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        samples[key] = {
                            "name": desc,
                            "code": f.read()
                        }
                except Exception:
                    pass

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(samples).encode('utf-8'))

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
        allowed_flags = {"--all", "--ast", "--symbols", "--tac", "--opt", "--target", "--run"}
        if flag not in allowed_flags:
            flag = "--all"

        if not os.path.isfile(EXECUTABLE):
            # Attempt to auto-compile resilientc.exe if missing
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

            # Invoke the compiler safely with 5-second timeout
            cmd = [EXECUTABLE, temp_file_path, flag]
            proc = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=5,
                cwd=BASE_DIR
            )

            stdout = proc.stdout
            stderr = proc.stderr
            exit_code = proc.returncode

            sections = parse_compiler_output(stdout, stderr)

            response = {
                "success": (exit_code == 0),
                "exitCode": exit_code,
                "rawOutput": stdout + ("\n" + stderr if stderr else ""),
                "sections": sections
            }

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response).encode('utf-8'))

        except subprocess.TimeoutExpired:
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
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
                "src/vm/VM.cpp", "src/vm/CodeGenerator.cpp"
            ]
            cmd = ["g++", "-std=c++17", "-O2"] + cpp_files + ["-o", "resilientc.exe"]
            subprocess.run(cmd, cwd=BASE_DIR, capture_output=True, timeout=15)
        except Exception:
            pass


def parse_compiler_output(stdout, stderr):
    """
    Parses resilientc output sections into structured UI data blocks.
    """
    sections = {
        "status": "",
        "recovery": "",
        "ast": "",
        "semantics": "",
        "tac": "",
        "opt": "",
        "target": "",
        "vm": "",
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
            sections["hasRecovery"] = True
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

    return sections


def main():
    print("=" * 60)
    print(" Resilient Compiler - Local Web Server")
    print(f" URL: http://localhost:{PORT}")
    print(f" Root Directory: {BASE_DIR}")
    print(f" Compiler Binary: {'READY' if os.path.isfile(EXECUTABLE) else 'NEEDS BUILD'}")
    print("=" * 60)
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
