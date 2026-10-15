# Resilient Compiler with Intelligent Error Recovery

[![C++17](https://img.shields.io/badge/C%2B%2B-17-blue.svg)](https://en.cppreference.com/w/cpp/17)
[![Tests Passing](https://img.shields.io/badge/Automated%20Tests-14%2F14%20PASS-brightgreen.svg)](run_tests.ps1)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Cross--Platform-lightgrey.svg)](server.py)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An end-to-end, resilient compiler and interactive developer IDE implemented in modern **C++17** and **Vanilla Web Technologies**. The system features lexical tokenization, recursive-descent parsing with intelligent multi-strategy syntax error recovery, scope-aware semantic analysis, linear Three-Address Code (TAC) intermediate representation, constant-folding optimization, and a target bytecode virtual machine (VM).

---

## 1. Compiler Pipeline Architecture

The compiler implements a complete 7-stage pipeline with an integrated developer workbench:

```text
Source Code (.rc / .txt)
       │
       ▼
[1. Lexer] ─────────────► Tokens (with line & column tracking, --tokens)
       │
       ▼
[2. Parser & Recovery] ──► Intelligent Error Recovery (Insertion / Deletion / Panic)
       │
       ▼
[3. AST Generator] ─────► Abstract Syntax Tree (Object-Oriented, Null-Safe, Indented)
       │
       ▼
[4. Semantic Analyzer] ─► Symbol Table (Hierarchical Scope Stack, Type Check, Redeclaration)
       │
       ▼
[5. IR Generator] ──────► Three-Address Code (TAC) with Temporaries & Branch Labels
       │
       ▼
[6. TAC Optimizer] ─────► Constant Folding, Constant Propagation & Dead Code Elimination
       │
       ▼
[7. Target Code & VM] ──► Stack Bytecode Disassembly & Execution on Virtual Machine
```

---

## 2. Key Highlights & Academic Novelty

### A. Intelligent Error Recovery (Core Highlight)
Unlike conventional compilers that terminate on the first syntax error or produce cascading false-positive diagnostics, the **Resilient Compiler** utilizes a **context-aware 1-token lookahead heuristic scoring manager** ([RecoveryScorer](src/recovery/RecoveryScorer.h)):
- **Synthetic Insertion (Cost 1–2, Confidence: HIGH/MEDIUM):** Inserts missing tokens (such as missing `)` before `{`, missing `;` before closing delimiters, or default literals `0` after `=`).
- **Extraneous Deletion (Cost 1–2, Confidence: HIGH):** Discards redundant tokens (such as duplicate semicolons `;;`).
- **Panic Mode Synchronization (Cost 5, Confidence: LOW):** Synchronizes to statement boundaries (`;`, `}`) only when localized single-token repair is impossible, preventing error cascades.
- **Continuous Execution:** Repaired programs construct a valid AST and successfully proceed to semantic analysis, TAC generation, optimization, and VM execution.

### B. Hierarchical Semantic Analysis & Scoping
- Stack-based scope frames supporting arbitrary nested `{ ... }` blocks.
- Block-level variable shadowing with automatic scope cleanup.
- Static type compatibility enforcement for assignments (`int`, `float`, `bool`).
- Semantic rejection of undeclared variables and duplicate declarations within the same scope.

### C. Three-Address Code & Constant Optimization
- Linear intermediate representation using clean temporaries (`_t0`, `_t1`) and branch labels (`L0`, `L1`).
- Compile-time arithmetic constant expression folding (`2 + 3 * 4` $\to$ `14`).
- Local constant operand propagation across basic blocks.
- Dead code and self-assignment elimination.

### D. Stack Bytecode Virtual Machine
- Stack-based instructions: `PUSH_CONST`, `LOAD_VAR`, `STORE_VAR`, `ADD`, `SUB`, `MUL`, `DIV`, `MOD`, `EQ`, `NE`, `LT`, `GT`, `LE`, `GE`, `AND`, `OR`, `NEG`, `JUMP`, `JUMP_IF_ZERO`, `PRINT`, `HALT`.
- Execution output stream and inspection of final runtime operand and variable memory stores.

---

## 3. Web IDE Workspace

The repository includes a modern, IDE-inspired developer dashboard:
- **Source Editor:** Monaco Editor integration with C-subset syntax highlighting (`int`, `float`, `bool`, `if`, `else`, `while`, `print`), line numbers, and cursor coordinate tracking.
- **Connected Pipeline Visualization:** Live status breadcrumbs indicating pass/recovery/fail states across each compiler phase.
- **Dedicated Error Recovery Dashboard:** Visual cards detailing each repair action, location (line/col), heuristic cost, confidence rating, and rationale.
- **Interactive AST Explorer:** Collapsible tree view of the syntax hierarchy.
- **Symbol Table Inspector:** Variable names, types, scope levels, and declaration coordinates.
- **Side-by-Side Optimizer Diff:** Raw TAC compared against Optimized TAC with folding and propagation counts.
- **VM Terminal Console:** Live program output stream and final variable store values.
- **Live Test Suite Dashboard:** Instant execution and verification of all 14 test cases.

---

## 4. Project Structure

```text
ResilientCompiler/
├── src/
│   ├── ast/               # Abstract Syntax Tree nodes & printers
│   │   ├── AST.h
│   │   └── AST.cpp
│   ├── lexer/             # Token definition & Lexer implementation
│   │   ├── Token.h
│   │   ├── Lexer.h
│   │   └── Lexer.cpp
│   ├── parser/            # Recursive-descent parser
│   │   ├── Parser.h
│   │   └── Parser.cpp
│   ├── recovery/          # Intelligent recovery manager & heuristic scorer
│   │   ├── RecoveryTypes.h
│   │   ├── RecoveryScorer.h
│   │   ├── RecoveryScorer.cpp
│   │   ├── RecoveryManager.h
│   │   └── RecoveryManager.cpp
│   ├── semantics/         # Symbol table & semantic type checker
│   │   ├── SymbolTable.h
│   │   ├── SymbolTable.cpp
│   │   ├── SemanticAnalyzer.h
│   │   └── SemanticAnalyzer.cpp
│   ├── ir/                # Three-Address Code (TAC) generation
│   │   ├── TAC.h
│   │   ├── TAC.cpp
│   │   ├── IRGenerator.h
│   │   └── IRGenerator.cpp
│   ├── optimizer/         # Constant folding & propagation optimizer
│   │   ├── Optimizer.h
│   │   └── Optimizer.cpp
│   ├── vm/                # Bytecode generator & Virtual Machine
│   │   ├── VM.h
│   │   ├── VM.cpp
│   │   ├── CodeGenerator.h
│   │   └── CodeGenerator.cpp
│   └── main.cpp           # Main compiler driver & CLI
├── tests/                 # 12 automated test cases (.txt)
├── examples/              # Demonstration algorithms (Fibonacci, logic)
├── server.py              # Lightweight Python 3 HTTP & process backend
├── index.html             # Web IDE user interface
├── style.css              # Dark charcoal design system
├── script.js              # Web IDE application controller
├── demo_db.js             # Pre-compiled database for instant demo preview
├── run_tests.ps1          # Automated test suite runner (PowerShell)
├── start_compiler_ui.bat  # One-click Windows startup script
└── README.md              # Project documentation
```

---

## 5. Build & Run Instructions

### Prerequisites
- **C++ Compiler:** `g++` supporting C++17 (MinGW-w64 on Windows, GCC, or Clang).
- **Backend (Optional for Web IDE):** Python 3.7+ (uses standard library only; zero `pip` dependencies).

### A. Quick Start: Web IDE (Windows)
Double-click `start_compiler_ui.bat` or run:
```powershell
python server.py
```
Open **`http://localhost:8080`** in your browser to access the full compiler IDE.

### B. Compile the C++ Binary
```powershell
g++ -std=c++17 -O2 src/main.cpp src/lexer/Lexer.cpp src/ast/AST.cpp src/parser/Parser.cpp src/recovery/RecoveryManager.cpp src/recovery/RecoveryScorer.cpp src/semantics/SymbolTable.cpp src/semantics/SemanticAnalyzer.cpp src/ir/TAC.cpp src/ir/IRGenerator.cpp src/optimizer/Optimizer.cpp src/vm/VM.cpp src/vm/CodeGenerator.cpp -o resilientc.exe
```

### C. CLI Usage Flags
```powershell
# Run full pipeline on source code
.\resilientc.exe examples/fibonacci.txt

# Inspect specific compiler phases
.\resilientc.exe tests/01_valid_program.txt --tokens    # Lexical token stream
.\resilientc.exe tests/01_valid_program.txt --ast       # Abstract Syntax Tree
.\resilientc.exe tests/01_valid_program.txt --symbols   # Symbol Table & Semantics
.\resilientc.exe tests/01_valid_program.txt --tac       # Three-Address Code
.\resilientc.exe tests/01_valid_program.txt --opt       # Optimization diff & stats
.\resilientc.exe tests/01_valid_program.txt --target    # Disassembled bytecode
.\resilientc.exe tests/01_valid_program.txt --run       # Execute on VM
.\resilientc.exe tests/01_valid_program.txt --all       # Full pipeline output
```

---

## 6. Automated Test Suite

Run the 14 verified automated test cases:
```powershell
powershell -ExecutionPolicy Bypass -File .\run_tests.ps1
```

### Test Case Overview:
| # | Test Name | Target File | Expected Exit | Description |
|---|---|---|:---:|---|
| 01 | Valid Program | `tests/01_valid_program.txt` | 0 | Clean compilation with zero errors |
| 02 | Missing Expression | `tests/02_missing_expression.txt` | 0 | Intelligent insertion of default literal `'0'` |
| 03 | Extra Semicolon | `tests/03_extra_semicolon.txt` | 0 | Intelligent deletion of redundant semicolons |
| 04 | Missing Delimiter ')' | `tests/04_missing_delimiter.txt` | 0 | Intelligent insertion of missing `')'` before `{` |
| 05 | Multiple Syntax Errors | `tests/05_multiple_errors.txt` | 0 | Multi-strategy recovery across 4 distinct errors |
| 06 | Panic Mode Recovery | `tests/06_panic_mode_recovery.txt` | 0 | Panic mode synchronization on illegal characters |
| 07 | Undeclared Variable | `tests/07_undeclared_variable.txt` | 1 | Semantic rejection of undeclared variable `'y'` |
| 08 | Duplicate Declaration | `tests/08_duplicate_declaration.txt` | 1 | Semantic rejection of re-declaring variable in same scope |
| 09 | Type Mismatch | `tests/09_type_mismatch.txt` | 1 | Semantic rejection of assigning float to int |
| 10 | Nested Scopes | `tests/10_nested_scopes.txt` | 0 | Proper block scoping and variable shadowing |
| 11 | Constant Folding | `tests/11_constant_folding.txt` | 0 | Compile-time arithmetic constant folding |
| 12 | End-to-End VM Exec | `tests/12_end_to_end_exec.txt` | 0 | Full pipeline execution with while loop on VM |
| 13 | Operator Precedence | `examples/arithmetic_demo.txt` | 0 | Correct AST hierarchy for `*`, `+`, relational, `&&` |
| 14 | Fibonacci Algorithm | `examples/fibonacci.txt` | 0 | Complex control flow and variable updates |

**Result:** All 14 tests pass with 100% success rate.

---

## 7. Sample Program & Recovery Output

### Deliberately Malformed Source Input:
```c
int a = ;
float b = 25;;
if (b > 10 {
    b = b + 5;
    a = 99
}
while (a > 0) {
    a = a - 1;
}
```

### Compiler Recovery Report:
```text
=== Resilient Compiler Status ===
Lexer  : SUCCESS (41 tokens generated)
Parser : SUCCESS

=== Error Recovery Report (4 recovery actions) ===
[1] [INSERTION] Inserted missing '0' at line 1, column 9
    Recovery Cost : 2 | Confidence: MEDIUM
    Rationale     : Missing expression after '='; inserted default literal '0'
[2] [DELETION] Deleted unexpected token ';' at line 2, column 14
    Recovery Cost : 1 | Confidence: HIGH
    Rationale     : Deleted redundant semicolon ';'
[3] [INSERTION] Inserted missing ')' at line 3, column 12
    Recovery Cost : 1 | Confidence: HIGH
    Rationale     : Inserted missing ')' before block delimiter '{'
[4] [INSERTION] Inserted missing ';' at line 6, column 1
    Recovery Cost : 1 | Confidence: HIGH
    Rationale     : Inserted missing ';' before next statement token '}'
--------------------------------------------------------
Total Recovery Cost Incurred: 5
```

---

## 8. License & Attribution

This project is open-source under the [MIT License](LICENSE). Developed as an advanced compiler engineering demonstration for academic and educational review.
