# Resilient Compiler with Intelligent Error Recovery

[![C++17](https://img.shields.io/badge/C%2B%2B-17-blue.svg)](https://en.cppreference.com/w/cpp/17)
[![Tests Passing](https://img.shields.io/badge/Automated%20Tests-20%2F20%20PASS-brightgreen.svg)](run_tests.ps1)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Cross--Platform-lightgrey.svg)](server.py)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Student:** D JOSHUA DANIEL  
**Registration Number:** 24BCE0436  
**Institution:** Vellore Institute of Technology (VIT), Vellore  
**Course:** BCSE307P — Compiler Design Laboratory  
**Faculty In-Charge:** Prof. RANJITH KUMAR S  

An end-to-end, resilient compiler and developer IDE implemented from first principles in **ISO C++17** and **Vanilla Web Technologies**. The system features deterministic lexical scanning, recursive-descent parsing with a **1-Token Lookahead Heuristic Error Recovery Engine**, scope-aware semantic analysis with coordinate tracking, linear Three-Address Code (TAC) intermediate representation, multi-pass optimization with algebraic simplifications, authentic **x86-32 AT&T target assembly generation**, native **MinGW GCC assembling and execution verification (`--compile-native`)**, and an educational RISC load-store ISA-32 simulator.

---

## 1. End-to-End 9-Stage Compiler Pipeline

```text
Source Code (.rc / .txt)
       │
       ▼
[Stage 1: Lexical Analyzer] ──────► 25 Token Types, Line/Col Tracking (Lexer.cpp)
       │
       ▼
[Stage 2: Recovery Manager] ──────► 1-Token Lookahead Scoring (Insertion, Deletion, Panic)
       │
       ▼
[Stage 3: Recursive Parser] ──────► Layered Operator Precedence, LL(1) Lookahead
       │
       ▼
[Stage 4: AST Construction] ──────► Polymorphic AST Nodes with Exact Coordinates
       │
       ▼
[Stage 5: Semantic Analyzer] ─────► Hierarchical Symbol Table Stack, Scope Shadowing, Type Safety
       │
       ▼
[Stage 6: Intermediate Rep] ──────► Three-Address Code (TAC) Quadruples (IRGenerator.cpp)
       │
       ▼
[Stage 7: Code Optimizer] ────────► Constant Folding, Propagation, Algebraic Simplification, DCE
       │
       ▼
[Stage 8: Target Code Gen] ───────► x86-32 AT&T GNU Assembly & Educational ISA-32 (AssemblyGenerator.cpp)
       │
       ▼
[Stage 9: Target Execution] ──────► Native PE Executable via MinGW GCC (--compile-native) & Stack VM
```

---

## 2. Key Academic & Engineering Highlights

### A. Intelligent Error Recovery Engine
- **Non-Fatal Continuation:** Repairs syntax errors in real time so that Abstract Syntax Trees, semantic validation, TAC intermediate code, and target assembly can be generated.
- **1-Token Lookahead Scoring:** Evaluates candidate repairs using a calibrated heuristic cost function:
  - **Synthetic Token Insertion (Cost 1):** Injects expected missing tokens (e.g. missing `)` before `{`, default literal `0` after `=`).
  - **Extraneous Token Deletion (Cost 2):** Discards redundant tokens (e.g. duplicate semicolons `;;`).
  - **Panic-Mode Synchronization (Cost 5):** Synchronizes to statement boundaries (`;`, `}`) with guaranteed **monotonic stream advancement** (preventing infinite recovery loops).

### B. Hierarchical Semantic Analysis & Scoped Symbol Tables
- Explicit scope frame stack (`std::vector<std::unordered_map<std::string, Symbol>>`) supporting block nesting (`{ ... }`).
- Proper variable shadowing without identifier collisions.
- Resolved coordinate tracking (`Declared At: L1:5` instead of `L0:0`) by embedding source positions into all AST nodes.
- Strict static type checking: incompatible assignments and undeclared identifiers are rejected before code generation with exit code 1.

### C. Three-Address Code (TAC) & Multi-Pass Optimizer
- Linearized intermediate representation using clean temporaries (`t1, t2, ...`) and branch labels (`L1, L2, ...`).
- **Constant Folding:** Evaluates arithmetic constants at compile time (`2 + 3 * 4` $\to$ `14`).
- **Constant Propagation:** Forward-substitutes known constants across basic blocks.
- **Algebraic Simplifications:** Identifies and rewrites mathematical identities (`x + 0 -> x`, `x - 0 -> x`, `x * 1 -> x`, `x * 0 -> 0`, `x / 1 -> x`, `x - x -> 0`).
- **Dead Code Elimination:** Prunes unused temporaries and dead assignments, reducing instruction counts by 40% to 66%.

### D. Authentic x86-32 Target Assembly & Native GCC Toolchain
- Generates valid x86-32 AT&T GNU syntax assembly with standard cdecl activation records (`pushl %ebp; movl %esp, %ebp; subl $N, %esp`).
- Allocates stack slots relative to `%ebp` (`-4(%ebp)`, `-8(%ebp)`).
- Lowers conditional branches into `cmpl` and conditional jumps (`je`, `jne`, `jg`, `jl`).
- Binds `print` statements directly to C runtime `_printf` calls.
- **`--compile-native` Verification:** Assembles and links the emitted assembly with MinGW GCC (`gcc -m32 temp.s -o temp.exe`), executes the native Windows binary, and captures real console stdout.

---

## 3. Phase 1 & Phase 2 Audit Matrices

### Phase 1 Audit Matrix
| Requirement / Proposal | Original Claim | Current Implementation | Status | Corrective Action |
|---|---|---|:---:|---|
| **Language Grammar** | Micro-C grammar with types, loops, if-else, print | Supports `int`, `float`, `bool`, `while`, `if-else`, `print`, block scoping | **IMPLEMENTED** | Added `true`/`false` boolean literals to avoid false undeclared identifier errors. |
| **Lexical Analysis** | Token scanning with line/col coordinates | Scans 25 token types, exact 1-indexed coordinates | **IMPLEMENTED** | Added multi-line comment `/* ... */` support alongside `//`. |
| **Recursive-Descent Parser** | Top-down predictive LL(1) parser | Layered precedence parsing in `Parser.cpp` | **IMPLEMENTED** | Hardened precedence hierarchy and lookahead checking. |
| **AST Representation** | Hierarchical AST node trees | Polymorphic `ASTNode` hierarchy in `AST.h`/`AST.cpp` | **IMPLEMENTED** | Added `line` and `column` fields to all AST nodes for accurate coordinate tracking. |
| **Symbol Table & Scopes** | Scoped symbol resolution | Stack of scope hash maps with shadowing support | **IMPLEMENTED** | Resolved `L0:0` display bug by using node coordinates. |
| **Intelligent Error Recovery** | Non-fatal recovery proposal | 1-token lookahead heuristic cost scorer | **IMPLEMENTED** | Calibrated insertion, deletion, and panic-mode fallback costs. |
| **Intermediate Code (TAC)** | Planned for future phases | TAC quadruples with temporaries `t1..tn` and labels | **IMPLEMENTED** | Fully implemented in Phase 3 with multi-pass optimizer. |
| **AI / Machine Learning** | Heuristic recovery described as AI | Deterministic heuristic lookahead cost function | **HONESTLY RECLASSIFIED** | Reclassified from "AI/ML" to deterministic lookahead scoring. |
| **Target Assembly** | Proposed bytecode execution | x86-32 AT&T assembly + Educational ISA-32 | **IMPLEMENTED** | Implemented `AssemblyGenerator.cpp` with MinGW GCC native linking. |

### Phase 2 Audit Matrix
| Component | Inspected Artifacts | Identified Issue / Defect | Resolution / Corrective Action | Status |
|---|---|---|---|:---:|
| **Token Scanning** | `Token.h`, `Lexer.cpp` | Missing boolean literals caused `true` to be treated as undeclared variable | Added `TokenType::TRUE` and `FALSE`, mapped in keyword dictionary | **FIXED & VERIFIED** |
| **AST Coordinates** | `AST.h`, `AST.cpp`, `Parser.cpp` | AST nodes lacked line/col fields; symbol table reported `Declared At: L0:0` | Refactored all AST constructors to store line/column; passed token coordinates | **FIXED & VERIFIED** |
| **Infinite Loop Guard** | `Parser.cpp`, `RecoveryManager.cpp` | Potential parser stall if `synchronize()` does not advance token stream | Enforced monotonic stream advancement: consume at least 1 token per recovery cycle | **FIXED & VERIFIED** |
| **Multi-Error Repair** | `RecoveryScorer.cpp` | Cascading diagnostics when multiple syntax errors appear in single block | Implemented lookahead validation before committing insertion/deletion candidates | **FIXED & VERIFIED** |
| **Semantic Enforcement** | `SemanticAnalyzer.cpp` | Invalid programs must never proceed to code generation | Enforced strict exit code 1 on semantic violations (type mismatch, undeclared var) | **FIXED & VERIFIED** |
| **C++17 Compatibility** | `AssemblyGenerator.cpp` | `_popen` and `_pclose` not declared in strict ANSI C++17 mode on MinGW | Replaced with standard ISO C++ `std::system` and redirected log file execution | **FIXED & VERIFIED** |
| **Memory Management** | `Parser.cpp`, `AST.h` | Raw pointer leaks during parse tree construction | Used `std::unique_ptr` across all AST nodes to guarantee RAII ownership cleanup | **FIXED & VERIFIED** |

---

## 4. Phase 3 Technical Completion Matrix

| Pillar | Module / Files | Implemented Architecture | Status |
|---|---|---|:---:|
| **1. Intermediate Representation (TAC)** | `src/ir/TAC.cpp`, `IRGenerator.cpp` | Quadruple structures with temporaries (`t1..tn`) and labels (`L1..Ln`) for expressions and control flow | **100% COMPLETE** |
| **2. Multi-Pass Code Optimizer** | `src/optimizer/Optimizer.cpp` | Constant folding, constant propagation, algebraic simplification (`x+0`, `x*1`, `x*0`, `x-x`), dead code elimination | **100% COMPLETE** |
| **3. Target Assembly (x86-32 AT&T)** | `src/codegen/AssemblyGenerator.cpp` | Authentic x86-32 AT&T assembly with cdecl activation frames, stack offsets, conditional jumps, `_printf` | **100% COMPLETE** |
| **4. Educational ISA-32 Target** | `src/codegen/AssemblyGenerator.cpp` | RISC load-store 32-register simulation target (`LOAD`, `STORE`, `ADD`, `SUB`, `MUL`, `DIV`, `CMP`, `JMP`, `PRINT`) | **100% COMPLETE** |
| **5. Native GCC Execution (`--compile-native`)** | `AssemblyGenerator.cpp`, `main.cpp` | Compiles emitted assembly via MinGW GCC, executes native PE binary, captures stdout | **100% COMPLETE** |
| **6. Automated Regression Suite (20 Tests)** | `run_tests.ps1`, `server.py` | 20 comprehensive test cases verifying all 9 pipeline stages | **100% COMPLETE (20/20 PASS)** |
| **7. Warm UI Redesign** | `style.css`, `index.html`, `script.js` | Warm aesthetic (espresso, charcoal, burnt orange, terracotta, amber/gold), interactive AST graph, Assembly tab | **100% COMPLETE** |

---

## 5. Curated Sample Programs (A through M)

All 13 standard sample program categories are curated in `examples/`:

- **Category A (Valid Arithmetic):** `examples/01_valid_arithmetic.txt` — Precedence, arithmetic operators, and prints.
- **Category B (Variables & Assignments):** `examples/02_vars_and_assignments.txt` — Multi-type declarations (`int`, `float`, `bool`).
- **Category C (Precedence & Associativity):** `examples/03_precedence_nested.txt` — Complex expressions with `&&`, `||`, `*`, `+`.
- **Category D (Conditional Branching):** `examples/04_conditional_statement.txt` — Nested `if-else` branching.
- **Category E (Loop Computation):** `examples/05_loop_computation.txt` — Factorial while loop with decrements.
- **Category F (Algorithm & Control Flow):** `examples/06_fibonacci.txt` — Fibonacci sequence generation.
- **Category G (Missing Semicolon Recovery):** `examples/07_missing_semicolon.txt` — Insertion of missing statement terminators.
- **Category H (Unexpected Token Recovery):** `examples/08_unexpected_token.txt` — Deletion of redundant semicolons `;;`.
- **Category I (Undeclared Identifier):** `examples/09_undeclared_identifier.txt` — Clean semantic rejection of undeclared variables.
- **Category J (Type Incompatibility):** `examples/10_type_mismatch.txt` — Clean semantic rejection of assigning float to int.
- **Category K (Multi-Error Recovery):** `examples/11_multiple_errors_recovery.txt` — Repair of 4 mixed syntax defects in one run.
- **Category L (Optimization Subsystem):** `examples/12_optimization_demo.txt` — Constant folding and algebraic identities.
- **Category M (TAC & Target Assembly):** `examples/13_tac_and_assembly.txt` — Translation from source to TAC to x86-32 assembly.

---

## 6. Automated Regression Test Suite (20 Tests)

Run the test suite from PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\run_tests.ps1
```

| ID | Test Name | Target File | Expected Exit | Description | Pass Status |
|---|---|---|:---:|---|:---:|
| **T01** | Valid Program | `tests/01_valid_program.txt` | 0 | Clean compilation with zero errors | **PASS** |
| **T02** | Missing Expression | `tests/02_missing_expression.txt` | 0 | Synthetic insertion of default literal `'0'` | **PASS** |
| **T03** | Extra Semicolon | `tests/03_extra_semicolon.txt` | 0 | Extraneous deletion of redundant semicolons | **PASS** |
| **T04** | Missing Delimiter ')' | `tests/04_missing_delimiter.txt` | 0 | Synthetic insertion of missing `')'` before `{` | **PASS** |
| **T05** | Multiple Syntax Errors | `tests/05_multiple_errors.txt` | 0 | Multi-strategy recovery across 4 distinct errors | **PASS** |
| **T06** | Panic Mode Recovery | `tests/06_panic_mode_recovery.txt` | 0 | Panic-mode boundary synchronization | **PASS** |
| **T07** | Undeclared Variable | `tests/07_undeclared_variable.txt` | 1 | Semantic rejection of undeclared identifier `'y'` | **PASS** |
| **T08** | Duplicate Declaration | `tests/08_duplicate_declaration.txt` | 1 | Semantic rejection of re-declaring variable in same scope | **PASS** |
| **T09** | Type Mismatch | `tests/09_type_mismatch.txt` | 1 | Semantic rejection of assigning float to int | **PASS** |
| **T10** | Nested Scopes | `tests/10_nested_scopes.txt` | 0 | Proper block scoping and variable shadowing | **PASS** |
| **T11** | Constant Folding | `tests/11_constant_folding.txt` | 0 | Compile-time arithmetic constant reduction | **PASS** |
| **T12** | End-to-End VM Exec | `tests/12_end_to_end_exec.txt` | 0 | Full pipeline execution with while loop on VM | **PASS** |
| **T13** | Operator Precedence | `examples/03_precedence_nested.txt` | 0 | Correct AST hierarchy for `*`, `+`, relational, `&&` | **PASS** |
| **T14** | Fibonacci Algorithm | `examples/06_fibonacci.txt` | 0 | Complex control flow and variable updates | **PASS** |
| **T15** | Factorial While Loop | `examples/05_loop_computation.txt` | 0 | Loop condition evaluation, decrement, and accumulator | **PASS** |
| **T16** | Three-Address Code | `examples/13_tac_and_assembly.txt` | 0 | Linear IR generation with temporaries `t1, t2` | **PASS** |
| **T17** | Algebraic Simplification | `examples/12_optimization_demo.txt` | 0 | Algebraic rules (`x+0->x`, `x*1->x`) with folding | **PASS** |
| **T18** | x86-32 AT&T Assembly | `examples/13_tac_and_assembly.txt` | 0 | Native x86 AT&T assembly with stack frame and printf | **PASS** |
| **T19** | Educational ISA-32 | `examples/01_valid_arithmetic.txt` | 0 | RISC load-store 32-register assembly generation | **PASS** |
| **T20** | Native GCC Asm Exec | `examples/06_fibonacci.txt` | 0 | MinGW GCC assembling, linking, and native execution | **PASS** |

**Summary: 20 Passed, 0 Failed (100% Pass Rate). Cumulative latency: ~54 ms.**

---

## 7. Build and Execution Instructions

### A. Compile the Compiler Binary
```powershell
g++ -std=c++17 -Wall -Wextra -O2 src/main.cpp src/lexer/Lexer.cpp src/ast/AST.cpp src/parser/Parser.cpp src/recovery/RecoveryManager.cpp src/recovery/RecoveryScorer.cpp src/semantics/SymbolTable.cpp src/semantics/SemanticAnalyzer.cpp src/ir/TAC.cpp src/ir/IRGenerator.cpp src/optimizer/Optimizer.cpp src/codegen/AssemblyGenerator.cpp src/vm/VM.cpp src/vm/CodeGenerator.cpp -o resilientc.exe
```

### B. CLI Usage Flags
```powershell
# Run full pipeline with VM execution
.\resilientc.exe examples/06_fibonacci.txt

# Inspect intermediate representation (Three-Address Code)
.\resilientc.exe examples/13_tac_and_assembly.txt --tac

# Inspect optimization diff and statistics
.\resilientc.exe examples/12_optimization_demo.txt --opt

# Inspect emitted x86-32 AT&T Target Assembly
.\resilientc.exe examples/13_tac_and_assembly.txt --asm

# Inspect Educational ISA-32 Load-Store Assembly
.\resilientc.exe examples/01_valid_arithmetic.txt --edu-asm

# Assemble & Execute natively via MinGW GCC
.\resilientc.exe examples/06_fibonacci.txt --compile-native

# Inspect all pipeline stages
.\resilientc.exe examples/11_multiple_errors_recovery.txt --all
```

### C. Launch the Web IDE
```powershell
python server.py
```
Open **`http://localhost:8080`** in any browser.

---

## 8. Academic Deliverables

The repository includes the complete documentation suite:

1. **Complete Technical Explanation PDF:** [`Resilient_Compiler_Complete_Explanation.pdf`](Resilient_Compiler_Complete_Explanation.pdf) (14 pages, 36 chapters, viva voce Q&A, presentation script, glossary).
2. **Final Project Academic Report PDF:** [`Resilient_Compiler_Final_Project_Report.pdf`](Resilient_Compiler_Final_Project_Report.pdf) (15 pages, 37 academic sections, VIT cover page, certificate, Phase 1/2/3 audit matrices, 20 test results).
3. **Final Project Academic Report DOCX:** [`Resilient_Compiler_Final_Project_Report.docx`](Resilient_Compiler_Final_Project_Report.docx) (Editable Microsoft Word format).

---

## 9. 5-Minute Presentation & Demonstration Script

1. **[0:00 - 1:00] Overview & Problem Statement:** Introduce yourself (D JOSHUA DANIEL, 24BCE0436). Explain that conventional compilers abort on syntax errors, breaking IDEs.
2. **[1:00 - 2:00] Intelligent Error Recovery Live Demo:** Select Sample `I. Multi-Error Recovery (4 Mixed Errors)` in the Web IDE. Click *Compile & Run*. Show the 4 recovery cards (Insertion, Deletion) repairing the code with zero crashes.
3. **[2:00 - 3:00] Symbol Table & Intermediate Representation (TAC):** Switch to the *Symbols* tab to show scope tracking and accurate coordinates (`L1:5`). Switch to the *TAC* tab to demonstrate linearized quadruples and temporaries.
4. **[3:00 - 4:00] Optimization & Target Assembly:** Switch to the *Optimizer* tab to show Constant Folding and Algebraic Simplifications. Switch to the *Assembly* tab to show x86-32 AT&T assembly. Click *Assemble & Run Native (GCC)* to demonstrate native Windows machine execution.
5. **[4:00 - 5:00] Automated Test Suite & Conclusion:** Switch to the *Test Suite* tab. Click *Run Tests* to demonstrate all 20 tests passing (100% pass rate). Conclude with architectural takeaways.

---

## 10. License & Attribution

This project is open-source under the [MIT License](LICENSE). Developed by **D JOSHUA DANIEL (24BCE0436)** at **Vellore Institute of Technology (VIT)** for academic evaluation in **Compiler Design Laboratory (BCSE307P)**.
