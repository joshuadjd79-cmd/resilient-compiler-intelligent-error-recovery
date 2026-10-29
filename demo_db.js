// Pre-compiled real compiler output database for instant and offline demonstrations
window.DEMO_DATABASE = {
  "fibonacci": {
    "source": "// Category F: Fibonacci Sequence Iterative Algorithm\nint count = 6;\nint t1 = 0;\nint t2 = 1;\nint next = 0;\n\nwhile (count > 0) {\n    print t1;\n    next = t1 + t2;\n    t1 = t2;\n    t2 = next;\n    count = count - 1;\n}\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\06_fibonacci.txt\n\n=== Source Code ===\n// Category F: Fibonacci Sequence Iterative Algorithm\nint count = 6;\nint t1 = 0;\nint t2 = 1;\nint next = 0;\n\nwhile (count > 0) {\n    print t1;\n    next = t1 + t2;\n    t1 = t2;\n    t2 = next;\n    count = count - 1;\n}\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (52 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (52 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'count'\n[2] Line 2, Col 11 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 13 | Type: NUMBER | Lexeme: '6'\n[4] Line 2, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 't1'\n[7] Line 3, Col 8 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 10 | Type: NUMBER | Lexeme: '0'\n[9] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[11] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 't2'\n[12] Line 4, Col 8 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 10 | Type: NUMBER | Lexeme: '1'\n[14] Line 4, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[15] Line 5, Col 1 | Type: INT | Lexeme: 'int'\n[16] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'next'\n[17] Line 5, Col 10 | Type: ASSIGN | Lexeme: '='\n[18] Line 5, Col 12 | Type: NUMBER | Lexeme: '0'\n[19] Line 5, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[20] Line 7, Col 1 | Type: WHILE | Lexeme: 'while'\n[21] Line 7, Col 7 | Type: LEFT_PAREN | Lexeme: '('\n[22] Line 7, Col 8 | Type: IDENTIFIER | Lexeme: 'count'\n[23] Line 7, Col 14 | Type: GREATER | Lexeme: '>'\n[24] Line 7, Col 16 | Type: NUMBER | Lexeme: '0'\n[25] Line 7, Col 17 | Type: RIGHT_PAREN | Lexeme: ')'\n[26] Line 7, Col 19 | Type: LEFT_BRACE | Lexeme: '{'\n[27] Line 8, Col 5 | Type: PRINT | Lexeme: 'print'\n[28] Line 8, Col 11 | Type: IDENTIFIER | Lexeme: 't1'\n[29] Line 8, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[30] Line 9, Col 5 | Type: IDENTIFIER | Lexeme: 'next'\n[31] Line 9, Col 10 | Type: ASSIGN | Lexeme: '='\n[32] Line 9, Col 12 | Type: IDENTIFIER | Lexeme: 't1'\n[33] Line 9, Col 15 | Type: PLUS | Lexeme: '+'\n[34] Line 9, Col 17 | Type: IDENTIFIER | Lexeme: 't2'\n[35] Line 9, Col 19 | Type: SEMICOLON | Lexeme: ';'\n[36] Line 10, Col 5 | Type: IDENTIFIER | Lexeme: 't1'\n[37] Line 10, Col 8 | Type: ASSIGN | Lexeme: '='\n[38] Line 10, Col 10 | Type: IDENTIFIER | Lexeme: 't2'\n[39] Line 10, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[40] Line 11, Col 5 | Type: IDENTIFIER | Lexeme: 't2'\n[41] Line 11, Col 8 | Type: ASSIGN | Lexeme: '='\n[42] Line 11, Col 10 | Type: IDENTIFIER | Lexeme: 'next'\n[43] Line 11, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[44] Line 12, Col 5 | Type: IDENTIFIER | Lexeme: 'count'\n[45] Line 12, Col 11 | Type: ASSIGN | Lexeme: '='\n[46] Line 12, Col 13 | Type: IDENTIFIER | Lexeme: 'count'\n[47] Line 12, Col 19 | Type: MINUS | Lexeme: '-'\n[48] Line 12, Col 21 | Type: NUMBER | Lexeme: '1'\n[49] Line 12, Col 22 | Type: SEMICOLON | Lexeme: ';'\n[50] Line 13, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[51] Line 14, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int count\n    Literal: 6\n  Declaration: int t1\n    Literal: 0\n  Declaration: int t2\n    Literal: 1\n  Declaration: int next\n    Literal: 0\n  While\n    Condition\n      Binary Expression: >\n        Identifier: count\n        Literal: 0\n    Body\n      Block\n        Print\n          Identifier: t1\n        Assignment: next\n          Binary Expression: +\n            Identifier: t1\n            Identifier: t2\n        Assignment: t1\n          Identifier: t2\n        Assignment: t2\n          Identifier: next\n        Assignment: count\n          Binary Expression: -\n            Identifier: count\n            Literal: 1\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\ncount           int       0       L2:5        \nt1              int       0       L3:5        \nt2              int       0       L4:5        \nnext            int       0       L5:5        \n\n=== Three-Address Code (TAC) ===\n    count = 6\n    t1 = 0\n    t2 = 1\n    next = 0\nL0:\n    _t0 = count > 0\n    ifFalse _t0 goto L1\n    print t1\n    _t1 = t1 + t2\n    next = _t1\n    t1 = t2\n    t2 = next\n    _t2 = count - 1\n    count = _t2\n    goto L0\nL1:\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 0\n  Constant Operands Propagated   : 0\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 0\n\n=== Optimized Three-Address Code ===\n    count = 6\n    t1 = 0\n    t2 = 1\n    next = 0\nL0:\n    _t0 = count > 0\n    ifFalse _t0 goto L1\n    print t1\n    _t1 = t1 + t2\n    next = _t1\n    t1 = t2\n    t2 = next\n    _t2 = count - 1\n    count = _t2\n    goto L0\nL1:\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: count = 6\n    movl    $6, -4(%ebp)\n\n    # TAC: t1 = 0\n    movl    $0, -8(%ebp)\n\n    # TAC: t2 = 1\n    movl    $1, -12(%ebp)\n\n    # TAC: next = 0\n    movl    $0, -16(%ebp)\n\n    # TAC: L0:\n.L0:\n\n    # TAC: _t0 = count > 0\n    movl    -4(%ebp), %eax\n    cmpl    $0, %eax\n    setg    %al\n    movzbl  %al, %eax\n    movl    %eax, -20(%ebp)\n\n    # TAC: ifFalse _t0 goto L1\n    movl    -20(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L1\n\n    # TAC: print t1\n    movl    -8(%ebp), %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: _t1 = t1 + t2\n    movl    -8(%ebp), %eax\n    addl    -12(%ebp), %eax\n    movl    %eax, -24(%ebp)\n\n    # TAC: next = _t1\n    movl    -24(%ebp), %eax\n    movl    %eax, -16(%ebp)\n\n    # TAC: t1 = t2\n    movl    -12(%ebp), %eax\n    movl    %eax, -8(%ebp)\n\n    # TAC: t2 = next\n    movl    -16(%ebp), %eax\n    movl    %eax, -12(%ebp)\n\n    # TAC: _t2 = count - 1\n    movl    -4(%ebp), %eax\n    subl    $1, %eax\n    movl    %eax, -28(%ebp)\n\n    # TAC: count = _t2\n    movl    -28(%ebp), %eax\n    movl    %eax, -4(%ebp)\n\n    # TAC: goto L0\n    jmp     .L0\n\n    # TAC: L1:\n.L1:\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   6\n0001:  STORE_VAR    count\n0002:  PUSH_CONST   0\n0003:  STORE_VAR    t1\n0004:  PUSH_CONST   1\n0005:  STORE_VAR    t2\n0006:  PUSH_CONST   0\n0007:  STORE_VAR    next\n0008:  LOAD_VAR     count\n0009:  PUSH_CONST   0\n0010:  GT\n0011:  STORE_VAR    _t0\n0012:  LOAD_VAR     _t0\n0013:  JUMP_IF_ZERO ->0033\n0014:  LOAD_VAR     t1\n0015:  PRINT\n0016:  LOAD_VAR     t1\n0017:  LOAD_VAR     t2\n0018:  ADD\n0019:  STORE_VAR    _t1\n0020:  LOAD_VAR     _t1\n0021:  STORE_VAR    next\n0022:  LOAD_VAR     t2\n0023:  STORE_VAR    t1\n0024:  LOAD_VAR     next\n0025:  STORE_VAR    t2\n0026:  LOAD_VAR     count\n0027:  PUSH_CONST   1\n0028:  SUB\n0029:  STORE_VAR    _t2\n0030:  LOAD_VAR     _t2\n0031:  STORE_VAR    count\n0032:  JUMP         ->0008\n0033:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 0\n[VM Output] 1\n[VM Output] 1\n[VM Output] 2\n[VM Output] 3\n[VM Output] 5\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ncount           0           \nt1              8           \nt2              13          \nnext            13          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (52 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'count'\n[2] Line 2, Col 11 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 13 | Type: NUMBER | Lexeme: '6'\n[4] Line 2, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 't1'\n[7] Line 3, Col 8 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 10 | Type: NUMBER | Lexeme: '0'\n[9] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[11] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 't2'\n[12] Line 4, Col 8 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 10 | Type: NUMBER | Lexeme: '1'\n[14] Line 4, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[15] Line 5, Col 1 | Type: INT | Lexeme: 'int'\n[16] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'next'\n[17] Line 5, Col 10 | Type: ASSIGN | Lexeme: '='\n[18] Line 5, Col 12 | Type: NUMBER | Lexeme: '0'\n[19] Line 5, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[20] Line 7, Col 1 | Type: WHILE | Lexeme: 'while'\n[21] Line 7, Col 7 | Type: LEFT_PAREN | Lexeme: '('\n[22] Line 7, Col 8 | Type: IDENTIFIER | Lexeme: 'count'\n[23] Line 7, Col 14 | Type: GREATER | Lexeme: '>'\n[24] Line 7, Col 16 | Type: NUMBER | Lexeme: '0'\n[25] Line 7, Col 17 | Type: RIGHT_PAREN | Lexeme: ')'\n[26] Line 7, Col 19 | Type: LEFT_BRACE | Lexeme: '{'\n[27] Line 8, Col 5 | Type: PRINT | Lexeme: 'print'\n[28] Line 8, Col 11 | Type: IDENTIFIER | Lexeme: 't1'\n[29] Line 8, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[30] Line 9, Col 5 | Type: IDENTIFIER | Lexeme: 'next'\n[31] Line 9, Col 10 | Type: ASSIGN | Lexeme: '='\n[32] Line 9, Col 12 | Type: IDENTIFIER | Lexeme: 't1'\n[33] Line 9, Col 15 | Type: PLUS | Lexeme: '+'\n[34] Line 9, Col 17 | Type: IDENTIFIER | Lexeme: 't2'\n[35] Line 9, Col 19 | Type: SEMICOLON | Lexeme: ';'\n[36] Line 10, Col 5 | Type: IDENTIFIER | Lexeme: 't1'\n[37] Line 10, Col 8 | Type: ASSIGN | Lexeme: '='\n[38] Line 10, Col 10 | Type: IDENTIFIER | Lexeme: 't2'\n[39] Line 10, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[40] Line 11, Col 5 | Type: IDENTIFIER | Lexeme: 't2'\n[41] Line 11, Col 8 | Type: ASSIGN | Lexeme: '='\n[42] Line 11, Col 10 | Type: IDENTIFIER | Lexeme: 'next'\n[43] Line 11, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[44] Line 12, Col 5 | Type: IDENTIFIER | Lexeme: 'count'\n[45] Line 12, Col 11 | Type: ASSIGN | Lexeme: '='\n[46] Line 12, Col 13 | Type: IDENTIFIER | Lexeme: 'count'\n[47] Line 12, Col 19 | Type: MINUS | Lexeme: '-'\n[48] Line 12, Col 21 | Type: NUMBER | Lexeme: '1'\n[49] Line 12, Col 22 | Type: SEMICOLON | Lexeme: ';'\n[50] Line 13, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[51] Line 14, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int count\n    Literal: 6\n  Declaration: int t1\n    Literal: 0\n  Declaration: int t2\n    Literal: 1\n  Declaration: int next\n    Literal: 0\n  While\n    Condition\n      Binary Expression: >\n        Identifier: count\n        Literal: 0\n    Body\n      Block\n        Print\n          Identifier: t1\n        Assignment: next\n          Binary Expression: +\n            Identifier: t1\n            Identifier: t2\n        Assignment: t1\n          Identifier: t2\n        Assignment: t2\n          Identifier: next\n        Assignment: count\n          Binary Expression: -\n            Identifier: count\n            Literal: 1",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\ncount           int       0       L2:5        \nt1              int       0       L3:5        \nt2              int       0       L4:5        \nnext            int       0       L5:5",
      "tac": "count = 6\n    t1 = 0\n    t2 = 1\n    next = 0\nL0:\n    _t0 = count > 0\n    ifFalse _t0 goto L1\n    print t1\n    _t1 = t1 + t2\n    next = _t1\n    t1 = t2\n    t2 = next\n    _t2 = count - 1\n    count = _t2\n    goto L0\nL1:",
      "opt": "Constant Operations Folded     : 0\n  Constant Operands Propagated   : 0\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 0",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: count = 6\n    movl    $6, -4(%ebp)\n\n    # TAC: t1 = 0\n    movl    $0, -8(%ebp)\n\n    # TAC: t2 = 1\n    movl    $1, -12(%ebp)\n\n    # TAC: next = 0\n    movl    $0, -16(%ebp)\n\n    # TAC: L0:\n.L0:\n\n    # TAC: _t0 = count > 0\n    movl    -4(%ebp), %eax\n    cmpl    $0, %eax\n    setg    %al\n    movzbl  %al, %eax\n    movl    %eax, -20(%ebp)\n\n    # TAC: ifFalse _t0 goto L1\n    movl    -20(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L1\n\n    # TAC: print t1\n    movl    -8(%ebp), %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: _t1 = t1 + t2\n    movl    -8(%ebp), %eax\n    addl    -12(%ebp), %eax\n    movl    %eax, -24(%ebp)\n\n    # TAC: next = _t1\n    movl    -24(%ebp), %eax\n    movl    %eax, -16(%ebp)\n\n    # TAC: t1 = t2\n    movl    -12(%ebp), %eax\n    movl    %eax, -8(%ebp)\n\n    # TAC: t2 = next\n    movl    -16(%ebp), %eax\n    movl    %eax, -12(%ebp)\n\n    # TAC: _t2 = count - 1\n    movl    -4(%ebp), %eax\n    subl    $1, %eax\n    movl    %eax, -28(%ebp)\n\n    # TAC: count = _t2\n    movl    -28(%ebp), %eax\n    movl    %eax, -4(%ebp)\n\n    # TAC: goto L0\n    jmp     .L0\n\n    # TAC: L1:\n.L1:\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   6\n0001:  STORE_VAR    count\n0002:  PUSH_CONST   0\n0003:  STORE_VAR    t1\n0004:  PUSH_CONST   1\n0005:  STORE_VAR    t2\n0006:  PUSH_CONST   0\n0007:  STORE_VAR    next\n0008:  LOAD_VAR     count\n0009:  PUSH_CONST   0\n0010:  GT\n0011:  STORE_VAR    _t0\n0012:  LOAD_VAR     _t0\n0013:  JUMP_IF_ZERO ->0033\n0014:  LOAD_VAR     t1\n0015:  PRINT\n0016:  LOAD_VAR     t1\n0017:  LOAD_VAR     t2\n0018:  ADD\n0019:  STORE_VAR    _t1\n0020:  LOAD_VAR     _t1\n0021:  STORE_VAR    next\n0022:  LOAD_VAR     t2\n0023:  STORE_VAR    t1\n0024:  LOAD_VAR     next\n0025:  STORE_VAR    t2\n0026:  LOAD_VAR     count\n0027:  PUSH_CONST   1\n0028:  SUB\n0029:  STORE_VAR    _t2\n0030:  LOAD_VAR     _t2\n0031:  STORE_VAR    count\n0032:  JUMP         ->0008\n0033:  HALT",
      "vm": "[VM Output] 0\n[VM Output] 1\n[VM Output] 1\n[VM Output] 2\n[VM Output] 3\n[VM Output] 5\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ncount           0           \nt1              8           \nt2              13          \nnext            13          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "count"
        },
        {
          "index": 2,
          "line": 2,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "6"
        },
        {
          "index": 4,
          "line": 2,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 6,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "t1"
        },
        {
          "index": 7,
          "line": 3,
          "column": 8,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 8,
          "line": 3,
          "column": 10,
          "type": "NUMBER",
          "lexeme": "0"
        },
        {
          "index": 9,
          "line": 3,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 4,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 11,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "t2"
        },
        {
          "index": 12,
          "line": 4,
          "column": 8,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 13,
          "line": 4,
          "column": 10,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 14,
          "line": 4,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 15,
          "line": 5,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 16,
          "line": 5,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "next"
        },
        {
          "index": 17,
          "line": 5,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 18,
          "line": 5,
          "column": 12,
          "type": "NUMBER",
          "lexeme": "0"
        },
        {
          "index": 19,
          "line": 5,
          "column": 13,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 20,
          "line": 7,
          "column": 1,
          "type": "WHILE",
          "lexeme": "while"
        },
        {
          "index": 21,
          "line": 7,
          "column": 7,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 22,
          "line": 7,
          "column": 8,
          "type": "IDENTIFIER",
          "lexeme": "count"
        },
        {
          "index": 23,
          "line": 7,
          "column": 14,
          "type": "GREATER",
          "lexeme": ">"
        },
        {
          "index": 24,
          "line": 7,
          "column": 16,
          "type": "NUMBER",
          "lexeme": "0"
        },
        {
          "index": 25,
          "line": 7,
          "column": 17,
          "type": "RIGHT_PAREN",
          "lexeme": ")"
        },
        {
          "index": 26,
          "line": 7,
          "column": 19,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 27,
          "line": 8,
          "column": 5,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 28,
          "line": 8,
          "column": 11,
          "type": "IDENTIFIER",
          "lexeme": "t1"
        },
        {
          "index": 29,
          "line": 8,
          "column": 13,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 30,
          "line": 9,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "next"
        },
        {
          "index": 31,
          "line": 9,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 32,
          "line": 9,
          "column": 12,
          "type": "IDENTIFIER",
          "lexeme": "t1"
        },
        {
          "index": 33,
          "line": 9,
          "column": 15,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 34,
          "line": 9,
          "column": 17,
          "type": "IDENTIFIER",
          "lexeme": "t2"
        },
        {
          "index": 35,
          "line": 9,
          "column": 19,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 36,
          "line": 10,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "t1"
        },
        {
          "index": 37,
          "line": 10,
          "column": 8,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 38,
          "line": 10,
          "column": 10,
          "type": "IDENTIFIER",
          "lexeme": "t2"
        },
        {
          "index": 39,
          "line": 10,
          "column": 12,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 40,
          "line": 11,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "t2"
        },
        {
          "index": 41,
          "line": 11,
          "column": 8,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 42,
          "line": 11,
          "column": 10,
          "type": "IDENTIFIER",
          "lexeme": "next"
        },
        {
          "index": 43,
          "line": 11,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 44,
          "line": 12,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "count"
        },
        {
          "index": 45,
          "line": 12,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 46,
          "line": 12,
          "column": 13,
          "type": "IDENTIFIER",
          "lexeme": "count"
        },
        {
          "index": 47,
          "line": 12,
          "column": 19,
          "type": "MINUS",
          "lexeme": "-"
        },
        {
          "index": 48,
          "line": 12,
          "column": 21,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 49,
          "line": 12,
          "column": 22,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 50,
          "line": 13,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 51,
          "line": 14,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "count",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "t1",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        },
        {
          "name": "t2",
          "type": "int",
          "scope": "0",
          "declaredAt": "L4:5"
        },
        {
          "name": "next",
          "type": "int",
          "scope": "0",
          "declaredAt": "L5:5"
        }
      ],
      "optSummary": {
        "folded": 0,
        "propagated": 0,
        "algebraic": 0,
        "deadEliminated": 0,
        "total": 0
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "6"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "count"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "t1"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "t2"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0007",
          "opcode": "STORE_VAR",
          "arg": "next"
        },
        {
          "address": "0008",
          "opcode": "LOAD_VAR",
          "arg": "count"
        },
        {
          "address": "0009",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0010",
          "opcode": "GT",
          "arg": ""
        },
        {
          "address": "0011",
          "opcode": "STORE_VAR",
          "arg": "_t0"
        },
        {
          "address": "0012",
          "opcode": "LOAD_VAR",
          "arg": "_t0"
        },
        {
          "address": "0013",
          "opcode": "JUMP_IF_ZERO",
          "arg": "->0033"
        },
        {
          "address": "0014",
          "opcode": "LOAD_VAR",
          "arg": "t1"
        },
        {
          "address": "0015",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0016",
          "opcode": "LOAD_VAR",
          "arg": "t1"
        },
        {
          "address": "0017",
          "opcode": "LOAD_VAR",
          "arg": "t2"
        },
        {
          "address": "0018",
          "opcode": "ADD",
          "arg": ""
        },
        {
          "address": "0019",
          "opcode": "STORE_VAR",
          "arg": "_t1"
        },
        {
          "address": "0020",
          "opcode": "LOAD_VAR",
          "arg": "_t1"
        },
        {
          "address": "0021",
          "opcode": "STORE_VAR",
          "arg": "next"
        },
        {
          "address": "0022",
          "opcode": "LOAD_VAR",
          "arg": "t2"
        },
        {
          "address": "0023",
          "opcode": "STORE_VAR",
          "arg": "t1"
        },
        {
          "address": "0024",
          "opcode": "LOAD_VAR",
          "arg": "next"
        },
        {
          "address": "0025",
          "opcode": "STORE_VAR",
          "arg": "t2"
        },
        {
          "address": "0026",
          "opcode": "LOAD_VAR",
          "arg": "count"
        },
        {
          "address": "0027",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0028",
          "opcode": "SUB",
          "arg": ""
        },
        {
          "address": "0029",
          "opcode": "STORE_VAR",
          "arg": "_t2"
        },
        {
          "address": "0030",
          "opcode": "LOAD_VAR",
          "arg": "_t2"
        },
        {
          "address": "0031",
          "opcode": "STORE_VAR",
          "arg": "count"
        },
        {
          "address": "0032",
          "opcode": "JUMP",
          "arg": "->0008"
        },
        {
          "address": "0033",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "0",
        "1",
        "1",
        "2",
        "3",
        "5"
      ],
      "vmVariables": [
        {
          "name": "count",
          "value": "0"
        },
        {
          "name": "t1",
          "value": "8"
        },
        {
          "name": "t2",
          "value": "13"
        },
        {
          "name": "next",
          "value": "13"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "count = 6\n    t1 = 0\n    t2 = 1\n    next = 0\nL0:\n    _t0 = count > 0\n    ifFalse _t0 goto L1\n    print t1\n    _t1 = t1 + t2\n    next = _t1\n    t1 = t2\n    t2 = next\n    _t2 = count - 1\n    count = _t2\n    goto L0\nL1:"
    }
  },
  "valid_arithmetic": {
    "source": "// Category A: Valid Arithmetic Program\nint a = 15;\nint b = 4;\nint sum = a + b;\nint diff = a - b;\nint prod = a * b;\nint quot = a / b;\nint rem = a % b;\nprint sum;\nprint diff;\nprint prod;\nprint quot;\nprint rem;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\01_valid_arithmetic.txt\n\n=== Source Code ===\n// Category A: Valid Arithmetic Program\nint a = 15;\nint b = 4;\nint sum = a + b;\nint diff = a - b;\nint prod = a * b;\nint quot = a / b;\nint rem = a % b;\nprint sum;\nprint diff;\nprint prod;\nprint quot;\nprint rem;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (61 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (61 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '15'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[7] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 9 | Type: NUMBER | Lexeme: '4'\n[9] Line 3, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[11] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'sum'\n[12] Line 4, Col 9 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 11 | Type: IDENTIFIER | Lexeme: 'a'\n[14] Line 4, Col 13 | Type: PLUS | Lexeme: '+'\n[15] Line 4, Col 15 | Type: IDENTIFIER | Lexeme: 'b'\n[16] Line 4, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[17] Line 5, Col 1 | Type: INT | Lexeme: 'int'\n[18] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'diff'\n[19] Line 5, Col 10 | Type: ASSIGN | Lexeme: '='\n[20] Line 5, Col 12 | Type: IDENTIFIER | Lexeme: 'a'\n[21] Line 5, Col 14 | Type: MINUS | Lexeme: '-'\n[22] Line 5, Col 16 | Type: IDENTIFIER | Lexeme: 'b'\n[23] Line 5, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[24] Line 6, Col 1 | Type: INT | Lexeme: 'int'\n[25] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'prod'\n[26] Line 6, Col 10 | Type: ASSIGN | Lexeme: '='\n[27] Line 6, Col 12 | Type: IDENTIFIER | Lexeme: 'a'\n[28] Line 6, Col 14 | Type: MULTIPLY | Lexeme: '*'\n[29] Line 6, Col 16 | Type: IDENTIFIER | Lexeme: 'b'\n[30] Line 6, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[31] Line 7, Col 1 | Type: INT | Lexeme: 'int'\n[32] Line 7, Col 5 | Type: IDENTIFIER | Lexeme: 'quot'\n[33] Line 7, Col 10 | Type: ASSIGN | Lexeme: '='\n[34] Line 7, Col 12 | Type: IDENTIFIER | Lexeme: 'a'\n[35] Line 7, Col 14 | Type: DIVIDE | Lexeme: '/'\n[36] Line 7, Col 16 | Type: IDENTIFIER | Lexeme: 'b'\n[37] Line 7, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[38] Line 8, Col 1 | Type: INT | Lexeme: 'int'\n[39] Line 8, Col 5 | Type: IDENTIFIER | Lexeme: 'rem'\n[40] Line 8, Col 9 | Type: ASSIGN | Lexeme: '='\n[41] Line 8, Col 11 | Type: IDENTIFIER | Lexeme: 'a'\n[42] Line 8, Col 13 | Type: MODULO | Lexeme: '%'\n[43] Line 8, Col 15 | Type: IDENTIFIER | Lexeme: 'b'\n[44] Line 8, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[45] Line 9, Col 1 | Type: PRINT | Lexeme: 'print'\n[46] Line 9, Col 7 | Type: IDENTIFIER | Lexeme: 'sum'\n[47] Line 9, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[48] Line 10, Col 1 | Type: PRINT | Lexeme: 'print'\n[49] Line 10, Col 7 | Type: IDENTIFIER | Lexeme: 'diff'\n[50] Line 10, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[51] Line 11, Col 1 | Type: PRINT | Lexeme: 'print'\n[52] Line 11, Col 7 | Type: IDENTIFIER | Lexeme: 'prod'\n[53] Line 11, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[54] Line 12, Col 1 | Type: PRINT | Lexeme: 'print'\n[55] Line 12, Col 7 | Type: IDENTIFIER | Lexeme: 'quot'\n[56] Line 12, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[57] Line 13, Col 1 | Type: PRINT | Lexeme: 'print'\n[58] Line 13, Col 7 | Type: IDENTIFIER | Lexeme: 'rem'\n[59] Line 13, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[60] Line 14, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Literal: 15\n  Declaration: int b\n    Literal: 4\n  Declaration: int sum\n    Binary Expression: +\n      Identifier: a\n      Identifier: b\n  Declaration: int diff\n    Binary Expression: -\n      Identifier: a\n      Identifier: b\n  Declaration: int prod\n    Binary Expression: *\n      Identifier: a\n      Identifier: b\n  Declaration: int quot\n    Binary Expression: /\n      Identifier: a\n      Identifier: b\n  Declaration: int rem\n    Binary Expression: %\n      Identifier: a\n      Identifier: b\n  Print\n    Identifier: sum\n  Print\n    Identifier: diff\n  Print\n    Identifier: prod\n  Print\n    Identifier: quot\n  Print\n    Identifier: rem\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nsum             int       0       L4:5        \ndiff            int       0       L5:5        \nprod            int       0       L6:5        \nquot            int       0       L7:5        \nrem             int       0       L8:5        \n\n=== Three-Address Code (TAC) ===\n    a = 15\n    b = 4\n    _t0 = a + b\n    sum = _t0\n    _t1 = a - b\n    diff = _t1\n    _t2 = a * b\n    prod = _t2\n    _t3 = a / b\n    quot = _t3\n    _t4 = a % b\n    rem = _t4\n    print sum\n    print diff\n    print prod\n    print quot\n    print rem\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 5\n  Constant Operands Propagated   : 20\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 5\n  Total Optimizations Applied    : 30\n\n=== Optimized Three-Address Code ===\n    a = 15\n    b = 4\n    sum = 19\n    diff = 11\n    prod = 60\n    quot = 3\n    rem = 3\n    print 19\n    print 11\n    print 60\n    print 3\n    print 3\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 15\n    movl    $15, -4(%ebp)\n\n    # TAC: b = 4\n    movl    $4, -8(%ebp)\n\n    # TAC: sum = 19\n    movl    $19, -12(%ebp)\n\n    # TAC: diff = 11\n    movl    $11, -16(%ebp)\n\n    # TAC: prod = 60\n    movl    $60, -20(%ebp)\n\n    # TAC: quot = 3\n    movl    $3, -24(%ebp)\n\n    # TAC: rem = 3\n    movl    $3, -28(%ebp)\n\n    # TAC: print 19\n    movl    $19, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 11\n    movl    $11, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 60\n    movl    $60, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 3\n    movl    $3, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 3\n    movl    $3, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   15\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   4\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   19\n0005:  STORE_VAR    sum\n0006:  PUSH_CONST   11\n0007:  STORE_VAR    diff\n0008:  PUSH_CONST   60\n0009:  STORE_VAR    prod\n0010:  PUSH_CONST   3\n0011:  STORE_VAR    quot\n0012:  PUSH_CONST   3\n0013:  STORE_VAR    rem\n0014:  PUSH_CONST   19\n0015:  PRINT\n0016:  PUSH_CONST   11\n0017:  PRINT\n0018:  PUSH_CONST   60\n0019:  PRINT\n0020:  PUSH_CONST   3\n0021:  PRINT\n0022:  PUSH_CONST   3\n0023:  PRINT\n0024:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 19\n[VM Output] 11\n[VM Output] 60\n[VM Output] 3\n[VM Output] 3\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nrem             3           \na               15          \nb               4           \nquot            3           \nsum             19          \nprod            60          \ndiff            11          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (61 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '15'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[7] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 9 | Type: NUMBER | Lexeme: '4'\n[9] Line 3, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[11] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'sum'\n[12] Line 4, Col 9 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 11 | Type: IDENTIFIER | Lexeme: 'a'\n[14] Line 4, Col 13 | Type: PLUS | Lexeme: '+'\n[15] Line 4, Col 15 | Type: IDENTIFIER | Lexeme: 'b'\n[16] Line 4, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[17] Line 5, Col 1 | Type: INT | Lexeme: 'int'\n[18] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'diff'\n[19] Line 5, Col 10 | Type: ASSIGN | Lexeme: '='\n[20] Line 5, Col 12 | Type: IDENTIFIER | Lexeme: 'a'\n[21] Line 5, Col 14 | Type: MINUS | Lexeme: '-'\n[22] Line 5, Col 16 | Type: IDENTIFIER | Lexeme: 'b'\n[23] Line 5, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[24] Line 6, Col 1 | Type: INT | Lexeme: 'int'\n[25] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'prod'\n[26] Line 6, Col 10 | Type: ASSIGN | Lexeme: '='\n[27] Line 6, Col 12 | Type: IDENTIFIER | Lexeme: 'a'\n[28] Line 6, Col 14 | Type: MULTIPLY | Lexeme: '*'\n[29] Line 6, Col 16 | Type: IDENTIFIER | Lexeme: 'b'\n[30] Line 6, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[31] Line 7, Col 1 | Type: INT | Lexeme: 'int'\n[32] Line 7, Col 5 | Type: IDENTIFIER | Lexeme: 'quot'\n[33] Line 7, Col 10 | Type: ASSIGN | Lexeme: '='\n[34] Line 7, Col 12 | Type: IDENTIFIER | Lexeme: 'a'\n[35] Line 7, Col 14 | Type: DIVIDE | Lexeme: '/'\n[36] Line 7, Col 16 | Type: IDENTIFIER | Lexeme: 'b'\n[37] Line 7, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[38] Line 8, Col 1 | Type: INT | Lexeme: 'int'\n[39] Line 8, Col 5 | Type: IDENTIFIER | Lexeme: 'rem'\n[40] Line 8, Col 9 | Type: ASSIGN | Lexeme: '='\n[41] Line 8, Col 11 | Type: IDENTIFIER | Lexeme: 'a'\n[42] Line 8, Col 13 | Type: MODULO | Lexeme: '%'\n[43] Line 8, Col 15 | Type: IDENTIFIER | Lexeme: 'b'\n[44] Line 8, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[45] Line 9, Col 1 | Type: PRINT | Lexeme: 'print'\n[46] Line 9, Col 7 | Type: IDENTIFIER | Lexeme: 'sum'\n[47] Line 9, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[48] Line 10, Col 1 | Type: PRINT | Lexeme: 'print'\n[49] Line 10, Col 7 | Type: IDENTIFIER | Lexeme: 'diff'\n[50] Line 10, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[51] Line 11, Col 1 | Type: PRINT | Lexeme: 'print'\n[52] Line 11, Col 7 | Type: IDENTIFIER | Lexeme: 'prod'\n[53] Line 11, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[54] Line 12, Col 1 | Type: PRINT | Lexeme: 'print'\n[55] Line 12, Col 7 | Type: IDENTIFIER | Lexeme: 'quot'\n[56] Line 12, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[57] Line 13, Col 1 | Type: PRINT | Lexeme: 'print'\n[58] Line 13, Col 7 | Type: IDENTIFIER | Lexeme: 'rem'\n[59] Line 13, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[60] Line 14, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Literal: 15\n  Declaration: int b\n    Literal: 4\n  Declaration: int sum\n    Binary Expression: +\n      Identifier: a\n      Identifier: b\n  Declaration: int diff\n    Binary Expression: -\n      Identifier: a\n      Identifier: b\n  Declaration: int prod\n    Binary Expression: *\n      Identifier: a\n      Identifier: b\n  Declaration: int quot\n    Binary Expression: /\n      Identifier: a\n      Identifier: b\n  Declaration: int rem\n    Binary Expression: %\n      Identifier: a\n      Identifier: b\n  Print\n    Identifier: sum\n  Print\n    Identifier: diff\n  Print\n    Identifier: prod\n  Print\n    Identifier: quot\n  Print\n    Identifier: rem",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nsum             int       0       L4:5        \ndiff            int       0       L5:5        \nprod            int       0       L6:5        \nquot            int       0       L7:5        \nrem             int       0       L8:5",
      "tac": "a = 15\n    b = 4\n    _t0 = a + b\n    sum = _t0\n    _t1 = a - b\n    diff = _t1\n    _t2 = a * b\n    prod = _t2\n    _t3 = a / b\n    quot = _t3\n    _t4 = a % b\n    rem = _t4\n    print sum\n    print diff\n    print prod\n    print quot\n    print rem",
      "opt": "Constant Operations Folded     : 5\n  Constant Operands Propagated   : 20\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 5\n  Total Optimizations Applied    : 30",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 15\n    movl    $15, -4(%ebp)\n\n    # TAC: b = 4\n    movl    $4, -8(%ebp)\n\n    # TAC: sum = 19\n    movl    $19, -12(%ebp)\n\n    # TAC: diff = 11\n    movl    $11, -16(%ebp)\n\n    # TAC: prod = 60\n    movl    $60, -20(%ebp)\n\n    # TAC: quot = 3\n    movl    $3, -24(%ebp)\n\n    # TAC: rem = 3\n    movl    $3, -28(%ebp)\n\n    # TAC: print 19\n    movl    $19, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 11\n    movl    $11, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 60\n    movl    $60, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 3\n    movl    $3, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 3\n    movl    $3, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   15\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   4\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   19\n0005:  STORE_VAR    sum\n0006:  PUSH_CONST   11\n0007:  STORE_VAR    diff\n0008:  PUSH_CONST   60\n0009:  STORE_VAR    prod\n0010:  PUSH_CONST   3\n0011:  STORE_VAR    quot\n0012:  PUSH_CONST   3\n0013:  STORE_VAR    rem\n0014:  PUSH_CONST   19\n0015:  PRINT\n0016:  PUSH_CONST   11\n0017:  PRINT\n0018:  PUSH_CONST   60\n0019:  PRINT\n0020:  PUSH_CONST   3\n0021:  PRINT\n0022:  PUSH_CONST   3\n0023:  PRINT\n0024:  HALT",
      "vm": "[VM Output] 19\n[VM Output] 11\n[VM Output] 60\n[VM Output] 3\n[VM Output] 3\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nrem             3           \na               15          \nb               4           \nquot            3           \nsum             19          \nprod            60          \ndiff            11          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "15"
        },
        {
          "index": 4,
          "line": 2,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 6,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 7,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 8,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "4"
        },
        {
          "index": 9,
          "line": 3,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 4,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 11,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "sum"
        },
        {
          "index": 12,
          "line": 4,
          "column": 9,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 13,
          "line": 4,
          "column": 11,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 14,
          "line": 4,
          "column": 13,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 15,
          "line": 4,
          "column": 15,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 16,
          "line": 4,
          "column": 16,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 17,
          "line": 5,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 18,
          "line": 5,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "diff"
        },
        {
          "index": 19,
          "line": 5,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 20,
          "line": 5,
          "column": 12,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 21,
          "line": 5,
          "column": 14,
          "type": "MINUS",
          "lexeme": "-"
        },
        {
          "index": 22,
          "line": 5,
          "column": 16,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 23,
          "line": 5,
          "column": 17,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 24,
          "line": 6,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 25,
          "line": 6,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "prod"
        },
        {
          "index": 26,
          "line": 6,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 27,
          "line": 6,
          "column": 12,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 28,
          "line": 6,
          "column": 14,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 29,
          "line": 6,
          "column": 16,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 30,
          "line": 6,
          "column": 17,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 31,
          "line": 7,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 32,
          "line": 7,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "quot"
        },
        {
          "index": 33,
          "line": 7,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 34,
          "line": 7,
          "column": 12,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 35,
          "line": 7,
          "column": 14,
          "type": "DIVIDE",
          "lexeme": "/"
        },
        {
          "index": 36,
          "line": 7,
          "column": 16,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 37,
          "line": 7,
          "column": 17,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 38,
          "line": 8,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 39,
          "line": 8,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "rem"
        },
        {
          "index": 40,
          "line": 8,
          "column": 9,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 41,
          "line": 8,
          "column": 11,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 42,
          "line": 8,
          "column": 13,
          "type": "MODULO",
          "lexeme": "%"
        },
        {
          "index": 43,
          "line": 8,
          "column": 15,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 44,
          "line": 8,
          "column": 16,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 45,
          "line": 9,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 46,
          "line": 9,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "sum"
        },
        {
          "index": 47,
          "line": 9,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 48,
          "line": 10,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 49,
          "line": 10,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "diff"
        },
        {
          "index": 50,
          "line": 10,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 51,
          "line": 11,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 52,
          "line": 11,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "prod"
        },
        {
          "index": 53,
          "line": 11,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 54,
          "line": 12,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 55,
          "line": 12,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "quot"
        },
        {
          "index": 56,
          "line": 12,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 57,
          "line": 13,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 58,
          "line": 13,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "rem"
        },
        {
          "index": 59,
          "line": 13,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 60,
          "line": 14,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "b",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        },
        {
          "name": "sum",
          "type": "int",
          "scope": "0",
          "declaredAt": "L4:5"
        },
        {
          "name": "diff",
          "type": "int",
          "scope": "0",
          "declaredAt": "L5:5"
        },
        {
          "name": "prod",
          "type": "int",
          "scope": "0",
          "declaredAt": "L6:5"
        },
        {
          "name": "quot",
          "type": "int",
          "scope": "0",
          "declaredAt": "L7:5"
        },
        {
          "name": "rem",
          "type": "int",
          "scope": "0",
          "declaredAt": "L8:5"
        }
      ],
      "optSummary": {
        "folded": 5,
        "propagated": 20,
        "algebraic": 0,
        "deadEliminated": 5,
        "total": 30
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "15"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "4"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "19"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "sum"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "11"
        },
        {
          "address": "0007",
          "opcode": "STORE_VAR",
          "arg": "diff"
        },
        {
          "address": "0008",
          "opcode": "PUSH_CONST",
          "arg": "60"
        },
        {
          "address": "0009",
          "opcode": "STORE_VAR",
          "arg": "prod"
        },
        {
          "address": "0010",
          "opcode": "PUSH_CONST",
          "arg": "3"
        },
        {
          "address": "0011",
          "opcode": "STORE_VAR",
          "arg": "quot"
        },
        {
          "address": "0012",
          "opcode": "PUSH_CONST",
          "arg": "3"
        },
        {
          "address": "0013",
          "opcode": "STORE_VAR",
          "arg": "rem"
        },
        {
          "address": "0014",
          "opcode": "PUSH_CONST",
          "arg": "19"
        },
        {
          "address": "0015",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0016",
          "opcode": "PUSH_CONST",
          "arg": "11"
        },
        {
          "address": "0017",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0018",
          "opcode": "PUSH_CONST",
          "arg": "60"
        },
        {
          "address": "0019",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0020",
          "opcode": "PUSH_CONST",
          "arg": "3"
        },
        {
          "address": "0021",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0022",
          "opcode": "PUSH_CONST",
          "arg": "3"
        },
        {
          "address": "0023",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0024",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "19",
        "11",
        "60",
        "3",
        "3"
      ],
      "vmVariables": [
        {
          "name": "rem",
          "value": "3"
        },
        {
          "name": "a",
          "value": "15"
        },
        {
          "name": "b",
          "value": "4"
        },
        {
          "name": "quot",
          "value": "3"
        },
        {
          "name": "sum",
          "value": "19"
        },
        {
          "name": "prod",
          "value": "60"
        },
        {
          "name": "diff",
          "value": "11"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "a = 15\n    b = 4\n    sum = 19\n    diff = 11\n    prod = 60\n    quot = 3\n    rem = 3\n    print 19\n    print 11\n    print 60\n    print 3\n    print 3"
    }
  },
  "loop_factorial": {
    "source": "// Category E: Loop / Repeated Computation (Factorial)\nint n = 5;\nint fact = 1;\nwhile (n > 1) {\n    fact = fact * n;\n    n = n - 1;\n}\nprint fact;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\05_loop_computation.txt\n\n=== Source Code ===\n// Category E: Loop / Repeated Computation (Factorial)\nint n = 5;\nint fact = 1;\nwhile (n > 1) {\n    fact = fact * n;\n    n = n - 1;\n}\nprint fact;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (34 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (34 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'n'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '5'\n[4] Line 2, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'fact'\n[7] Line 3, Col 10 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 12 | Type: NUMBER | Lexeme: '1'\n[9] Line 3, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: WHILE | Lexeme: 'while'\n[11] Line 4, Col 7 | Type: LEFT_PAREN | Lexeme: '('\n[12] Line 4, Col 8 | Type: IDENTIFIER | Lexeme: 'n'\n[13] Line 4, Col 10 | Type: GREATER | Lexeme: '>'\n[14] Line 4, Col 12 | Type: NUMBER | Lexeme: '1'\n[15] Line 4, Col 13 | Type: RIGHT_PAREN | Lexeme: ')'\n[16] Line 4, Col 15 | Type: LEFT_BRACE | Lexeme: '{'\n[17] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'fact'\n[18] Line 5, Col 10 | Type: ASSIGN | Lexeme: '='\n[19] Line 5, Col 12 | Type: IDENTIFIER | Lexeme: 'fact'\n[20] Line 5, Col 17 | Type: MULTIPLY | Lexeme: '*'\n[21] Line 5, Col 19 | Type: IDENTIFIER | Lexeme: 'n'\n[22] Line 5, Col 20 | Type: SEMICOLON | Lexeme: ';'\n[23] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'n'\n[24] Line 6, Col 7 | Type: ASSIGN | Lexeme: '='\n[25] Line 6, Col 9 | Type: IDENTIFIER | Lexeme: 'n'\n[26] Line 6, Col 11 | Type: MINUS | Lexeme: '-'\n[27] Line 6, Col 13 | Type: NUMBER | Lexeme: '1'\n[28] Line 6, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[29] Line 7, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[30] Line 8, Col 1 | Type: PRINT | Lexeme: 'print'\n[31] Line 8, Col 7 | Type: IDENTIFIER | Lexeme: 'fact'\n[32] Line 8, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[33] Line 9, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int n\n    Literal: 5\n  Declaration: int fact\n    Literal: 1\n  While\n    Condition\n      Binary Expression: >\n        Identifier: n\n        Literal: 1\n    Body\n      Block\n        Assignment: fact\n          Binary Expression: *\n            Identifier: fact\n            Identifier: n\n        Assignment: n\n          Binary Expression: -\n            Identifier: n\n            Literal: 1\n  Print\n    Identifier: fact\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nn               int       0       L2:5        \nfact            int       0       L3:5        \n\n=== Three-Address Code (TAC) ===\n    n = 5\n    fact = 1\nL0:\n    _t0 = n > 1\n    ifFalse _t0 goto L1\n    _t1 = fact * n\n    fact = _t1\n    _t2 = n - 1\n    n = _t2\n    goto L0\nL1:\n    print fact\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 0\n  Constant Operands Propagated   : 0\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 0\n\n=== Optimized Three-Address Code ===\n    n = 5\n    fact = 1\nL0:\n    _t0 = n > 1\n    ifFalse _t0 goto L1\n    _t1 = fact * n\n    fact = _t1\n    _t2 = n - 1\n    n = _t2\n    goto L0\nL1:\n    print fact\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: n = 5\n    movl    $5, -4(%ebp)\n\n    # TAC: fact = 1\n    movl    $1, -8(%ebp)\n\n    # TAC: L0:\n.L0:\n\n    # TAC: _t0 = n > 1\n    movl    -4(%ebp), %eax\n    cmpl    $1, %eax\n    setg    %al\n    movzbl  %al, %eax\n    movl    %eax, -12(%ebp)\n\n    # TAC: ifFalse _t0 goto L1\n    movl    -12(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L1\n\n    # TAC: _t1 = fact * n\n    movl    -8(%ebp), %eax\n    imull   -4(%ebp), %eax\n    movl    %eax, -16(%ebp)\n\n    # TAC: fact = _t1\n    movl    -16(%ebp), %eax\n    movl    %eax, -8(%ebp)\n\n    # TAC: _t2 = n - 1\n    movl    -4(%ebp), %eax\n    subl    $1, %eax\n    movl    %eax, -20(%ebp)\n\n    # TAC: n = _t2\n    movl    -20(%ebp), %eax\n    movl    %eax, -4(%ebp)\n\n    # TAC: goto L0\n    jmp     .L0\n\n    # TAC: L1:\n.L1:\n\n    # TAC: print fact\n    movl    -8(%ebp), %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   5\n0001:  STORE_VAR    n\n0002:  PUSH_CONST   1\n0003:  STORE_VAR    fact\n0004:  LOAD_VAR     n\n0005:  PUSH_CONST   1\n0006:  GT\n0007:  STORE_VAR    _t0\n0008:  LOAD_VAR     _t0\n0009:  JUMP_IF_ZERO ->0023\n0010:  LOAD_VAR     fact\n0011:  LOAD_VAR     n\n0012:  MUL\n0013:  STORE_VAR    _t1\n0014:  LOAD_VAR     _t1\n0015:  STORE_VAR    fact\n0016:  LOAD_VAR     n\n0017:  PUSH_CONST   1\n0018:  SUB\n0019:  STORE_VAR    _t2\n0020:  LOAD_VAR     _t2\n0021:  STORE_VAR    n\n0022:  JUMP         ->0004\n0023:  LOAD_VAR     fact\n0024:  PRINT\n0025:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 120\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nn               1           \nfact            120         \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (34 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'n'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '5'\n[4] Line 2, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'fact'\n[7] Line 3, Col 10 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 12 | Type: NUMBER | Lexeme: '1'\n[9] Line 3, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: WHILE | Lexeme: 'while'\n[11] Line 4, Col 7 | Type: LEFT_PAREN | Lexeme: '('\n[12] Line 4, Col 8 | Type: IDENTIFIER | Lexeme: 'n'\n[13] Line 4, Col 10 | Type: GREATER | Lexeme: '>'\n[14] Line 4, Col 12 | Type: NUMBER | Lexeme: '1'\n[15] Line 4, Col 13 | Type: RIGHT_PAREN | Lexeme: ')'\n[16] Line 4, Col 15 | Type: LEFT_BRACE | Lexeme: '{'\n[17] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'fact'\n[18] Line 5, Col 10 | Type: ASSIGN | Lexeme: '='\n[19] Line 5, Col 12 | Type: IDENTIFIER | Lexeme: 'fact'\n[20] Line 5, Col 17 | Type: MULTIPLY | Lexeme: '*'\n[21] Line 5, Col 19 | Type: IDENTIFIER | Lexeme: 'n'\n[22] Line 5, Col 20 | Type: SEMICOLON | Lexeme: ';'\n[23] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'n'\n[24] Line 6, Col 7 | Type: ASSIGN | Lexeme: '='\n[25] Line 6, Col 9 | Type: IDENTIFIER | Lexeme: 'n'\n[26] Line 6, Col 11 | Type: MINUS | Lexeme: '-'\n[27] Line 6, Col 13 | Type: NUMBER | Lexeme: '1'\n[28] Line 6, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[29] Line 7, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[30] Line 8, Col 1 | Type: PRINT | Lexeme: 'print'\n[31] Line 8, Col 7 | Type: IDENTIFIER | Lexeme: 'fact'\n[32] Line 8, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[33] Line 9, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int n\n    Literal: 5\n  Declaration: int fact\n    Literal: 1\n  While\n    Condition\n      Binary Expression: >\n        Identifier: n\n        Literal: 1\n    Body\n      Block\n        Assignment: fact\n          Binary Expression: *\n            Identifier: fact\n            Identifier: n\n        Assignment: n\n          Binary Expression: -\n            Identifier: n\n            Literal: 1\n  Print\n    Identifier: fact",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nn               int       0       L2:5        \nfact            int       0       L3:5",
      "tac": "n = 5\n    fact = 1\nL0:\n    _t0 = n > 1\n    ifFalse _t0 goto L1\n    _t1 = fact * n\n    fact = _t1\n    _t2 = n - 1\n    n = _t2\n    goto L0\nL1:\n    print fact",
      "opt": "Constant Operations Folded     : 0\n  Constant Operands Propagated   : 0\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 0",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: n = 5\n    movl    $5, -4(%ebp)\n\n    # TAC: fact = 1\n    movl    $1, -8(%ebp)\n\n    # TAC: L0:\n.L0:\n\n    # TAC: _t0 = n > 1\n    movl    -4(%ebp), %eax\n    cmpl    $1, %eax\n    setg    %al\n    movzbl  %al, %eax\n    movl    %eax, -12(%ebp)\n\n    # TAC: ifFalse _t0 goto L1\n    movl    -12(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L1\n\n    # TAC: _t1 = fact * n\n    movl    -8(%ebp), %eax\n    imull   -4(%ebp), %eax\n    movl    %eax, -16(%ebp)\n\n    # TAC: fact = _t1\n    movl    -16(%ebp), %eax\n    movl    %eax, -8(%ebp)\n\n    # TAC: _t2 = n - 1\n    movl    -4(%ebp), %eax\n    subl    $1, %eax\n    movl    %eax, -20(%ebp)\n\n    # TAC: n = _t2\n    movl    -20(%ebp), %eax\n    movl    %eax, -4(%ebp)\n\n    # TAC: goto L0\n    jmp     .L0\n\n    # TAC: L1:\n.L1:\n\n    # TAC: print fact\n    movl    -8(%ebp), %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   5\n0001:  STORE_VAR    n\n0002:  PUSH_CONST   1\n0003:  STORE_VAR    fact\n0004:  LOAD_VAR     n\n0005:  PUSH_CONST   1\n0006:  GT\n0007:  STORE_VAR    _t0\n0008:  LOAD_VAR     _t0\n0009:  JUMP_IF_ZERO ->0023\n0010:  LOAD_VAR     fact\n0011:  LOAD_VAR     n\n0012:  MUL\n0013:  STORE_VAR    _t1\n0014:  LOAD_VAR     _t1\n0015:  STORE_VAR    fact\n0016:  LOAD_VAR     n\n0017:  PUSH_CONST   1\n0018:  SUB\n0019:  STORE_VAR    _t2\n0020:  LOAD_VAR     _t2\n0021:  STORE_VAR    n\n0022:  JUMP         ->0004\n0023:  LOAD_VAR     fact\n0024:  PRINT\n0025:  HALT",
      "vm": "[VM Output] 120\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nn               1           \nfact            120         \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "n"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "5"
        },
        {
          "index": 4,
          "line": 2,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 6,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "fact"
        },
        {
          "index": 7,
          "line": 3,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 8,
          "line": 3,
          "column": 12,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 9,
          "line": 3,
          "column": 13,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 4,
          "column": 1,
          "type": "WHILE",
          "lexeme": "while"
        },
        {
          "index": 11,
          "line": 4,
          "column": 7,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 12,
          "line": 4,
          "column": 8,
          "type": "IDENTIFIER",
          "lexeme": "n"
        },
        {
          "index": 13,
          "line": 4,
          "column": 10,
          "type": "GREATER",
          "lexeme": ">"
        },
        {
          "index": 14,
          "line": 4,
          "column": 12,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 15,
          "line": 4,
          "column": 13,
          "type": "RIGHT_PAREN",
          "lexeme": ")"
        },
        {
          "index": 16,
          "line": 4,
          "column": 15,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 17,
          "line": 5,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "fact"
        },
        {
          "index": 18,
          "line": 5,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 19,
          "line": 5,
          "column": 12,
          "type": "IDENTIFIER",
          "lexeme": "fact"
        },
        {
          "index": 20,
          "line": 5,
          "column": 17,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 21,
          "line": 5,
          "column": 19,
          "type": "IDENTIFIER",
          "lexeme": "n"
        },
        {
          "index": 22,
          "line": 5,
          "column": 20,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 23,
          "line": 6,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "n"
        },
        {
          "index": 24,
          "line": 6,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 25,
          "line": 6,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "n"
        },
        {
          "index": 26,
          "line": 6,
          "column": 11,
          "type": "MINUS",
          "lexeme": "-"
        },
        {
          "index": 27,
          "line": 6,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 28,
          "line": 6,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 29,
          "line": 7,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 30,
          "line": 8,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 31,
          "line": 8,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "fact"
        },
        {
          "index": 32,
          "line": 8,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 33,
          "line": 9,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "n",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "fact",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        }
      ],
      "optSummary": {
        "folded": 0,
        "propagated": 0,
        "algebraic": 0,
        "deadEliminated": 0,
        "total": 0
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "5"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "n"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "fact"
        },
        {
          "address": "0004",
          "opcode": "LOAD_VAR",
          "arg": "n"
        },
        {
          "address": "0005",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0006",
          "opcode": "GT",
          "arg": ""
        },
        {
          "address": "0007",
          "opcode": "STORE_VAR",
          "arg": "_t0"
        },
        {
          "address": "0008",
          "opcode": "LOAD_VAR",
          "arg": "_t0"
        },
        {
          "address": "0009",
          "opcode": "JUMP_IF_ZERO",
          "arg": "->0023"
        },
        {
          "address": "0010",
          "opcode": "LOAD_VAR",
          "arg": "fact"
        },
        {
          "address": "0011",
          "opcode": "LOAD_VAR",
          "arg": "n"
        },
        {
          "address": "0012",
          "opcode": "MUL",
          "arg": ""
        },
        {
          "address": "0013",
          "opcode": "STORE_VAR",
          "arg": "_t1"
        },
        {
          "address": "0014",
          "opcode": "LOAD_VAR",
          "arg": "_t1"
        },
        {
          "address": "0015",
          "opcode": "STORE_VAR",
          "arg": "fact"
        },
        {
          "address": "0016",
          "opcode": "LOAD_VAR",
          "arg": "n"
        },
        {
          "address": "0017",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0018",
          "opcode": "SUB",
          "arg": ""
        },
        {
          "address": "0019",
          "opcode": "STORE_VAR",
          "arg": "_t2"
        },
        {
          "address": "0020",
          "opcode": "LOAD_VAR",
          "arg": "_t2"
        },
        {
          "address": "0021",
          "opcode": "STORE_VAR",
          "arg": "n"
        },
        {
          "address": "0022",
          "opcode": "JUMP",
          "arg": "->0004"
        },
        {
          "address": "0023",
          "opcode": "LOAD_VAR",
          "arg": "fact"
        },
        {
          "address": "0024",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0025",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "120"
      ],
      "vmVariables": [
        {
          "name": "n",
          "value": "1"
        },
        {
          "name": "fact",
          "value": "120"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "n = 5\n    fact = 1\nL0:\n    _t0 = n > 1\n    ifFalse _t0 goto L1\n    _t1 = fact * n\n    fact = _t1\n    _t2 = n - 1\n    n = _t2\n    goto L0\nL1:\n    print fact"
    }
  },
  "vars_and_assignments": {
    "source": "// Category B: Variable Declarations and Assignments\nint x = 10;\nfloat rate = 3.5;\nbool active = true;\nx = 25;\nrate = rate + 1.5;\nactive = false;\nprint x;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\02_vars_and_assignments.txt\n\n=== Source Code ===\n// Category B: Variable Declarations and Assignments\nint x = 10;\nfloat rate = 3.5;\nbool active = true;\nx = 25;\nrate = rate + 1.5;\nactive = false;\nprint x;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (33 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (33 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: FLOAT | Lexeme: 'float'\n[6] Line 3, Col 7 | Type: IDENTIFIER | Lexeme: 'rate'\n[7] Line 3, Col 12 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 14 | Type: NUMBER | Lexeme: '3.5'\n[9] Line 3, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: BOOL | Lexeme: 'bool'\n[11] Line 4, Col 6 | Type: IDENTIFIER | Lexeme: 'active'\n[12] Line 4, Col 13 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 15 | Type: TRUE | Lexeme: 'true'\n[14] Line 4, Col 19 | Type: SEMICOLON | Lexeme: ';'\n[15] Line 5, Col 1 | Type: IDENTIFIER | Lexeme: 'x'\n[16] Line 5, Col 3 | Type: ASSIGN | Lexeme: '='\n[17] Line 5, Col 5 | Type: NUMBER | Lexeme: '25'\n[18] Line 5, Col 7 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 6, Col 1 | Type: IDENTIFIER | Lexeme: 'rate'\n[20] Line 6, Col 6 | Type: ASSIGN | Lexeme: '='\n[21] Line 6, Col 8 | Type: IDENTIFIER | Lexeme: 'rate'\n[22] Line 6, Col 13 | Type: PLUS | Lexeme: '+'\n[23] Line 6, Col 15 | Type: NUMBER | Lexeme: '1.5'\n[24] Line 6, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[25] Line 7, Col 1 | Type: IDENTIFIER | Lexeme: 'active'\n[26] Line 7, Col 8 | Type: ASSIGN | Lexeme: '='\n[27] Line 7, Col 10 | Type: FALSE | Lexeme: 'false'\n[28] Line 7, Col 15 | Type: SEMICOLON | Lexeme: ';'\n[29] Line 8, Col 1 | Type: PRINT | Lexeme: 'print'\n[30] Line 8, Col 7 | Type: IDENTIFIER | Lexeme: 'x'\n[31] Line 8, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[32] Line 9, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int x\n    Literal: 10\n  Declaration: float rate\n    Literal: 3.5\n  Declaration: bool active\n    Literal: true\n  Assignment: x\n    Literal: 25\n  Assignment: rate\n    Binary Expression: +\n      Identifier: rate\n      Literal: 1.5\n  Assignment: active\n    Literal: false\n  Print\n    Identifier: x\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L2:5        \nrate            float     0       L3:7        \nactive          bool      0       L4:6        \n\n=== Three-Address Code (TAC) ===\n    x = 10\n    rate = 3.5\n    active = true\n    x = 25\n    _t0 = rate + 1.5\n    rate = _t0\n    active = false\n    print x\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 3\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 5\n\n=== Optimized Three-Address Code ===\n    x = 10\n    rate = 3.5\n    active = true\n    x = 25\n    rate = 5.0\n    active = false\n    print 25\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: rate = 3.5\n    movl    $3, -8(%ebp)\n\n    # TAC: active = true\n    movl    $1, -12(%ebp)\n\n    # TAC: x = 25\n    movl    $25, -4(%ebp)\n\n    # TAC: rate = 5.0\n    movl    $5, -8(%ebp)\n\n    # TAC: active = false\n    movl    $0, -12(%ebp)\n\n    # TAC: print 25\n    movl    $25, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   10\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   3.5\n0003:  STORE_VAR    rate\n0004:  PUSH_CONST   1\n0005:  STORE_VAR    active\n0006:  PUSH_CONST   25\n0007:  STORE_VAR    x\n0008:  PUSH_CONST   5\n0009:  STORE_VAR    rate\n0010:  PUSH_CONST   0\n0011:  STORE_VAR    active\n0012:  PUSH_CONST   25\n0013:  PRINT\n0014:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 25\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nactive          0           \nrate            5           \nx               25          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (33 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: FLOAT | Lexeme: 'float'\n[6] Line 3, Col 7 | Type: IDENTIFIER | Lexeme: 'rate'\n[7] Line 3, Col 12 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 14 | Type: NUMBER | Lexeme: '3.5'\n[9] Line 3, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: BOOL | Lexeme: 'bool'\n[11] Line 4, Col 6 | Type: IDENTIFIER | Lexeme: 'active'\n[12] Line 4, Col 13 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 15 | Type: TRUE | Lexeme: 'true'\n[14] Line 4, Col 19 | Type: SEMICOLON | Lexeme: ';'\n[15] Line 5, Col 1 | Type: IDENTIFIER | Lexeme: 'x'\n[16] Line 5, Col 3 | Type: ASSIGN | Lexeme: '='\n[17] Line 5, Col 5 | Type: NUMBER | Lexeme: '25'\n[18] Line 5, Col 7 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 6, Col 1 | Type: IDENTIFIER | Lexeme: 'rate'\n[20] Line 6, Col 6 | Type: ASSIGN | Lexeme: '='\n[21] Line 6, Col 8 | Type: IDENTIFIER | Lexeme: 'rate'\n[22] Line 6, Col 13 | Type: PLUS | Lexeme: '+'\n[23] Line 6, Col 15 | Type: NUMBER | Lexeme: '1.5'\n[24] Line 6, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[25] Line 7, Col 1 | Type: IDENTIFIER | Lexeme: 'active'\n[26] Line 7, Col 8 | Type: ASSIGN | Lexeme: '='\n[27] Line 7, Col 10 | Type: FALSE | Lexeme: 'false'\n[28] Line 7, Col 15 | Type: SEMICOLON | Lexeme: ';'\n[29] Line 8, Col 1 | Type: PRINT | Lexeme: 'print'\n[30] Line 8, Col 7 | Type: IDENTIFIER | Lexeme: 'x'\n[31] Line 8, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[32] Line 9, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int x\n    Literal: 10\n  Declaration: float rate\n    Literal: 3.5\n  Declaration: bool active\n    Literal: true\n  Assignment: x\n    Literal: 25\n  Assignment: rate\n    Binary Expression: +\n      Identifier: rate\n      Literal: 1.5\n  Assignment: active\n    Literal: false\n  Print\n    Identifier: x",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L2:5        \nrate            float     0       L3:7        \nactive          bool      0       L4:6",
      "tac": "x = 10\n    rate = 3.5\n    active = true\n    x = 25\n    _t0 = rate + 1.5\n    rate = _t0\n    active = false\n    print x",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 3\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 5",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: rate = 3.5\n    movl    $3, -8(%ebp)\n\n    # TAC: active = true\n    movl    $1, -12(%ebp)\n\n    # TAC: x = 25\n    movl    $25, -4(%ebp)\n\n    # TAC: rate = 5.0\n    movl    $5, -8(%ebp)\n\n    # TAC: active = false\n    movl    $0, -12(%ebp)\n\n    # TAC: print 25\n    movl    $25, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   10\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   3.5\n0003:  STORE_VAR    rate\n0004:  PUSH_CONST   1\n0005:  STORE_VAR    active\n0006:  PUSH_CONST   25\n0007:  STORE_VAR    x\n0008:  PUSH_CONST   5\n0009:  STORE_VAR    rate\n0010:  PUSH_CONST   0\n0011:  STORE_VAR    active\n0012:  PUSH_CONST   25\n0013:  PRINT\n0014:  HALT",
      "vm": "[VM Output] 25\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nactive          0           \nrate            5           \nx               25          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 4,
          "line": 2,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "FLOAT",
          "lexeme": "float"
        },
        {
          "index": 6,
          "line": 3,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "rate"
        },
        {
          "index": 7,
          "line": 3,
          "column": 12,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 8,
          "line": 3,
          "column": 14,
          "type": "NUMBER",
          "lexeme": "3.5"
        },
        {
          "index": 9,
          "line": 3,
          "column": 17,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 4,
          "column": 1,
          "type": "BOOL",
          "lexeme": "bool"
        },
        {
          "index": 11,
          "line": 4,
          "column": 6,
          "type": "IDENTIFIER",
          "lexeme": "active"
        },
        {
          "index": 12,
          "line": 4,
          "column": 13,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 13,
          "line": 4,
          "column": 15,
          "type": "TRUE",
          "lexeme": "true"
        },
        {
          "index": 14,
          "line": 4,
          "column": 19,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 15,
          "line": 5,
          "column": 1,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 16,
          "line": 5,
          "column": 3,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 17,
          "line": 5,
          "column": 5,
          "type": "NUMBER",
          "lexeme": "25"
        },
        {
          "index": 18,
          "line": 5,
          "column": 7,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 19,
          "line": 6,
          "column": 1,
          "type": "IDENTIFIER",
          "lexeme": "rate"
        },
        {
          "index": 20,
          "line": 6,
          "column": 6,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 21,
          "line": 6,
          "column": 8,
          "type": "IDENTIFIER",
          "lexeme": "rate"
        },
        {
          "index": 22,
          "line": 6,
          "column": 13,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 23,
          "line": 6,
          "column": 15,
          "type": "NUMBER",
          "lexeme": "1.5"
        },
        {
          "index": 24,
          "line": 6,
          "column": 18,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 25,
          "line": 7,
          "column": 1,
          "type": "IDENTIFIER",
          "lexeme": "active"
        },
        {
          "index": 26,
          "line": 7,
          "column": 8,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 27,
          "line": 7,
          "column": 10,
          "type": "FALSE",
          "lexeme": "false"
        },
        {
          "index": 28,
          "line": 7,
          "column": 15,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 29,
          "line": 8,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 30,
          "line": 8,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 31,
          "line": 8,
          "column": 8,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 32,
          "line": 9,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "x",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "rate",
          "type": "float",
          "scope": "0",
          "declaredAt": "L3:7"
        },
        {
          "name": "active",
          "type": "bool",
          "scope": "0",
          "declaredAt": "L4:6"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 3,
        "algebraic": 0,
        "deadEliminated": 1,
        "total": 5
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "10"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "3.5"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "rate"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "active"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "25"
        },
        {
          "address": "0007",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0008",
          "opcode": "PUSH_CONST",
          "arg": "5"
        },
        {
          "address": "0009",
          "opcode": "STORE_VAR",
          "arg": "rate"
        },
        {
          "address": "0010",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0011",
          "opcode": "STORE_VAR",
          "arg": "active"
        },
        {
          "address": "0012",
          "opcode": "PUSH_CONST",
          "arg": "25"
        },
        {
          "address": "0013",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0014",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "25"
      ],
      "vmVariables": [
        {
          "name": "active",
          "value": "0"
        },
        {
          "name": "rate",
          "value": "5"
        },
        {
          "name": "x",
          "value": "25"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "x = 10\n    rate = 3.5\n    active = true\n    x = 25\n    rate = 5.0\n    active = false\n    print 25"
    }
  },
  "precedence_nested": {
    "source": "// Category C: Nested Expressions Demonstrating Operator Precedence\nint a = 2;\nint b = 3;\nint c = 4;\nint result1 = a + b * c;\nint result2 = (a + b) * c;\nbool test = a < b && c > b;\nprint result1;\nprint result2;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\03_precedence_nested.txt\n\n=== Source Code ===\n// Category C: Nested Expressions Demonstrating Operator Precedence\nint a = 2;\nint b = 3;\nint c = 4;\nint result1 = a + b * c;\nint result2 = (a + b) * c;\nbool test = a < b && c > b;\nprint result1;\nprint result2;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (53 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (53 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '2'\n[4] Line 2, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[7] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 9 | Type: NUMBER | Lexeme: '3'\n[9] Line 3, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[11] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'c'\n[12] Line 4, Col 7 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 9 | Type: NUMBER | Lexeme: '4'\n[14] Line 4, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[15] Line 5, Col 1 | Type: INT | Lexeme: 'int'\n[16] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'result1'\n[17] Line 5, Col 13 | Type: ASSIGN | Lexeme: '='\n[18] Line 5, Col 15 | Type: IDENTIFIER | Lexeme: 'a'\n[19] Line 5, Col 17 | Type: PLUS | Lexeme: '+'\n[20] Line 5, Col 19 | Type: IDENTIFIER | Lexeme: 'b'\n[21] Line 5, Col 21 | Type: MULTIPLY | Lexeme: '*'\n[22] Line 5, Col 23 | Type: IDENTIFIER | Lexeme: 'c'\n[23] Line 5, Col 24 | Type: SEMICOLON | Lexeme: ';'\n[24] Line 6, Col 1 | Type: INT | Lexeme: 'int'\n[25] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'result2'\n[26] Line 6, Col 13 | Type: ASSIGN | Lexeme: '='\n[27] Line 6, Col 15 | Type: LEFT_PAREN | Lexeme: '('\n[28] Line 6, Col 16 | Type: IDENTIFIER | Lexeme: 'a'\n[29] Line 6, Col 18 | Type: PLUS | Lexeme: '+'\n[30] Line 6, Col 20 | Type: IDENTIFIER | Lexeme: 'b'\n[31] Line 6, Col 21 | Type: RIGHT_PAREN | Lexeme: ')'\n[32] Line 6, Col 23 | Type: MULTIPLY | Lexeme: '*'\n[33] Line 6, Col 25 | Type: IDENTIFIER | Lexeme: 'c'\n[34] Line 6, Col 26 | Type: SEMICOLON | Lexeme: ';'\n[35] Line 7, Col 1 | Type: BOOL | Lexeme: 'bool'\n[36] Line 7, Col 6 | Type: IDENTIFIER | Lexeme: 'test'\n[37] Line 7, Col 11 | Type: ASSIGN | Lexeme: '='\n[38] Line 7, Col 13 | Type: IDENTIFIER | Lexeme: 'a'\n[39] Line 7, Col 15 | Type: LESS | Lexeme: '<'\n[40] Line 7, Col 17 | Type: IDENTIFIER | Lexeme: 'b'\n[41] Line 7, Col 19 | Type: AND | Lexeme: '&&'\n[42] Line 7, Col 22 | Type: IDENTIFIER | Lexeme: 'c'\n[43] Line 7, Col 24 | Type: GREATER | Lexeme: '>'\n[44] Line 7, Col 26 | Type: IDENTIFIER | Lexeme: 'b'\n[45] Line 7, Col 27 | Type: SEMICOLON | Lexeme: ';'\n[46] Line 8, Col 1 | Type: PRINT | Lexeme: 'print'\n[47] Line 8, Col 7 | Type: IDENTIFIER | Lexeme: 'result1'\n[48] Line 8, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[49] Line 9, Col 1 | Type: PRINT | Lexeme: 'print'\n[50] Line 9, Col 7 | Type: IDENTIFIER | Lexeme: 'result2'\n[51] Line 9, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[52] Line 10, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Literal: 2\n  Declaration: int b\n    Literal: 3\n  Declaration: int c\n    Literal: 4\n  Declaration: int result1\n    Binary Expression: +\n      Identifier: a\n      Binary Expression: *\n        Identifier: b\n        Identifier: c\n  Declaration: int result2\n    Binary Expression: *\n      Binary Expression: +\n        Identifier: a\n        Identifier: b\n      Identifier: c\n  Declaration: bool test\n    Binary Expression: &&\n      Binary Expression: <\n        Identifier: a\n        Identifier: b\n      Binary Expression: >\n        Identifier: c\n        Identifier: b\n  Print\n    Identifier: result1\n  Print\n    Identifier: result2\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nc               int       0       L4:5        \nresult1         int       0       L5:5        \nresult2         int       0       L6:5        \ntest            bool      0       L7:6        \n\n=== Three-Address Code (TAC) ===\n    a = 2\n    b = 3\n    c = 4\n    _t0 = b * c\n    _t1 = a + _t0\n    result1 = _t1\n    _t2 = a + b\n    _t3 = _t2 * c\n    result2 = _t3\n    _t4 = a < b\n    _t5 = c > b\n    _t6 = _t4 && _t5\n    test = _t6\n    print result1\n    print result2\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 7\n  Constant Operands Propagated   : 19\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 7\n  Total Optimizations Applied    : 33\n\n=== Optimized Three-Address Code ===\n    a = 2\n    b = 3\n    c = 4\n    result1 = 14\n    result2 = 20\n    test = 1\n    print 14\n    print 20\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 2\n    movl    $2, -4(%ebp)\n\n    # TAC: b = 3\n    movl    $3, -8(%ebp)\n\n    # TAC: c = 4\n    movl    $4, -12(%ebp)\n\n    # TAC: result1 = 14\n    movl    $14, -16(%ebp)\n\n    # TAC: result2 = 20\n    movl    $20, -20(%ebp)\n\n    # TAC: test = 1\n    movl    $1, -24(%ebp)\n\n    # TAC: print 14\n    movl    $14, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 20\n    movl    $20, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   2\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   3\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   4\n0005:  STORE_VAR    c\n0006:  PUSH_CONST   14\n0007:  STORE_VAR    result1\n0008:  PUSH_CONST   20\n0009:  STORE_VAR    result2\n0010:  PUSH_CONST   1\n0011:  STORE_VAR    test\n0012:  PUSH_CONST   14\n0013:  PRINT\n0014:  PUSH_CONST   20\n0015:  PRINT\n0016:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 14\n[VM Output] 20\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ntest            1           \nresult2         20          \nb               3           \na               2           \nresult1         14          \nc               4           \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (53 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '2'\n[4] Line 2, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[7] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 9 | Type: NUMBER | Lexeme: '3'\n[9] Line 3, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[11] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'c'\n[12] Line 4, Col 7 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 9 | Type: NUMBER | Lexeme: '4'\n[14] Line 4, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[15] Line 5, Col 1 | Type: INT | Lexeme: 'int'\n[16] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'result1'\n[17] Line 5, Col 13 | Type: ASSIGN | Lexeme: '='\n[18] Line 5, Col 15 | Type: IDENTIFIER | Lexeme: 'a'\n[19] Line 5, Col 17 | Type: PLUS | Lexeme: '+'\n[20] Line 5, Col 19 | Type: IDENTIFIER | Lexeme: 'b'\n[21] Line 5, Col 21 | Type: MULTIPLY | Lexeme: '*'\n[22] Line 5, Col 23 | Type: IDENTIFIER | Lexeme: 'c'\n[23] Line 5, Col 24 | Type: SEMICOLON | Lexeme: ';'\n[24] Line 6, Col 1 | Type: INT | Lexeme: 'int'\n[25] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'result2'\n[26] Line 6, Col 13 | Type: ASSIGN | Lexeme: '='\n[27] Line 6, Col 15 | Type: LEFT_PAREN | Lexeme: '('\n[28] Line 6, Col 16 | Type: IDENTIFIER | Lexeme: 'a'\n[29] Line 6, Col 18 | Type: PLUS | Lexeme: '+'\n[30] Line 6, Col 20 | Type: IDENTIFIER | Lexeme: 'b'\n[31] Line 6, Col 21 | Type: RIGHT_PAREN | Lexeme: ')'\n[32] Line 6, Col 23 | Type: MULTIPLY | Lexeme: '*'\n[33] Line 6, Col 25 | Type: IDENTIFIER | Lexeme: 'c'\n[34] Line 6, Col 26 | Type: SEMICOLON | Lexeme: ';'\n[35] Line 7, Col 1 | Type: BOOL | Lexeme: 'bool'\n[36] Line 7, Col 6 | Type: IDENTIFIER | Lexeme: 'test'\n[37] Line 7, Col 11 | Type: ASSIGN | Lexeme: '='\n[38] Line 7, Col 13 | Type: IDENTIFIER | Lexeme: 'a'\n[39] Line 7, Col 15 | Type: LESS | Lexeme: '<'\n[40] Line 7, Col 17 | Type: IDENTIFIER | Lexeme: 'b'\n[41] Line 7, Col 19 | Type: AND | Lexeme: '&&'\n[42] Line 7, Col 22 | Type: IDENTIFIER | Lexeme: 'c'\n[43] Line 7, Col 24 | Type: GREATER | Lexeme: '>'\n[44] Line 7, Col 26 | Type: IDENTIFIER | Lexeme: 'b'\n[45] Line 7, Col 27 | Type: SEMICOLON | Lexeme: ';'\n[46] Line 8, Col 1 | Type: PRINT | Lexeme: 'print'\n[47] Line 8, Col 7 | Type: IDENTIFIER | Lexeme: 'result1'\n[48] Line 8, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[49] Line 9, Col 1 | Type: PRINT | Lexeme: 'print'\n[50] Line 9, Col 7 | Type: IDENTIFIER | Lexeme: 'result2'\n[51] Line 9, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[52] Line 10, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Literal: 2\n  Declaration: int b\n    Literal: 3\n  Declaration: int c\n    Literal: 4\n  Declaration: int result1\n    Binary Expression: +\n      Identifier: a\n      Binary Expression: *\n        Identifier: b\n        Identifier: c\n  Declaration: int result2\n    Binary Expression: *\n      Binary Expression: +\n        Identifier: a\n        Identifier: b\n      Identifier: c\n  Declaration: bool test\n    Binary Expression: &&\n      Binary Expression: <\n        Identifier: a\n        Identifier: b\n      Binary Expression: >\n        Identifier: c\n        Identifier: b\n  Print\n    Identifier: result1\n  Print\n    Identifier: result2",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nc               int       0       L4:5        \nresult1         int       0       L5:5        \nresult2         int       0       L6:5        \ntest            bool      0       L7:6",
      "tac": "a = 2\n    b = 3\n    c = 4\n    _t0 = b * c\n    _t1 = a + _t0\n    result1 = _t1\n    _t2 = a + b\n    _t3 = _t2 * c\n    result2 = _t3\n    _t4 = a < b\n    _t5 = c > b\n    _t6 = _t4 && _t5\n    test = _t6\n    print result1\n    print result2",
      "opt": "Constant Operations Folded     : 7\n  Constant Operands Propagated   : 19\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 7\n  Total Optimizations Applied    : 33",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 2\n    movl    $2, -4(%ebp)\n\n    # TAC: b = 3\n    movl    $3, -8(%ebp)\n\n    # TAC: c = 4\n    movl    $4, -12(%ebp)\n\n    # TAC: result1 = 14\n    movl    $14, -16(%ebp)\n\n    # TAC: result2 = 20\n    movl    $20, -20(%ebp)\n\n    # TAC: test = 1\n    movl    $1, -24(%ebp)\n\n    # TAC: print 14\n    movl    $14, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 20\n    movl    $20, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   2\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   3\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   4\n0005:  STORE_VAR    c\n0006:  PUSH_CONST   14\n0007:  STORE_VAR    result1\n0008:  PUSH_CONST   20\n0009:  STORE_VAR    result2\n0010:  PUSH_CONST   1\n0011:  STORE_VAR    test\n0012:  PUSH_CONST   14\n0013:  PRINT\n0014:  PUSH_CONST   20\n0015:  PRINT\n0016:  HALT",
      "vm": "[VM Output] 14\n[VM Output] 20\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ntest            1           \nresult2         20          \nb               3           \na               2           \nresult1         14          \nc               4           \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "2"
        },
        {
          "index": 4,
          "line": 2,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 6,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 7,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 8,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "3"
        },
        {
          "index": 9,
          "line": 3,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 4,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 11,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 12,
          "line": 4,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 13,
          "line": 4,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "4"
        },
        {
          "index": 14,
          "line": 4,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 15,
          "line": 5,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 16,
          "line": 5,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "result1"
        },
        {
          "index": 17,
          "line": 5,
          "column": 13,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 18,
          "line": 5,
          "column": 15,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 19,
          "line": 5,
          "column": 17,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 20,
          "line": 5,
          "column": 19,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 21,
          "line": 5,
          "column": 21,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 22,
          "line": 5,
          "column": 23,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 23,
          "line": 5,
          "column": 24,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 24,
          "line": 6,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 25,
          "line": 6,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "result2"
        },
        {
          "index": 26,
          "line": 6,
          "column": 13,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 27,
          "line": 6,
          "column": 15,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 28,
          "line": 6,
          "column": 16,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 29,
          "line": 6,
          "column": 18,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 30,
          "line": 6,
          "column": 20,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 31,
          "line": 6,
          "column": 21,
          "type": "RIGHT_PAREN",
          "lexeme": ")"
        },
        {
          "index": 32,
          "line": 6,
          "column": 23,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 33,
          "line": 6,
          "column": 25,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 34,
          "line": 6,
          "column": 26,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 35,
          "line": 7,
          "column": 1,
          "type": "BOOL",
          "lexeme": "bool"
        },
        {
          "index": 36,
          "line": 7,
          "column": 6,
          "type": "IDENTIFIER",
          "lexeme": "test"
        },
        {
          "index": 37,
          "line": 7,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 38,
          "line": 7,
          "column": 13,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 39,
          "line": 7,
          "column": 15,
          "type": "LESS",
          "lexeme": "<"
        },
        {
          "index": 40,
          "line": 7,
          "column": 17,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 41,
          "line": 7,
          "column": 19,
          "type": "AND",
          "lexeme": "&&"
        },
        {
          "index": 42,
          "line": 7,
          "column": 22,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 43,
          "line": 7,
          "column": 24,
          "type": "GREATER",
          "lexeme": ">"
        },
        {
          "index": 44,
          "line": 7,
          "column": 26,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 45,
          "line": 7,
          "column": 27,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 46,
          "line": 8,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 47,
          "line": 8,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "result1"
        },
        {
          "index": 48,
          "line": 8,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 49,
          "line": 9,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 50,
          "line": 9,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "result2"
        },
        {
          "index": 51,
          "line": 9,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 52,
          "line": 10,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "b",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        },
        {
          "name": "c",
          "type": "int",
          "scope": "0",
          "declaredAt": "L4:5"
        },
        {
          "name": "result1",
          "type": "int",
          "scope": "0",
          "declaredAt": "L5:5"
        },
        {
          "name": "result2",
          "type": "int",
          "scope": "0",
          "declaredAt": "L6:5"
        },
        {
          "name": "test",
          "type": "bool",
          "scope": "0",
          "declaredAt": "L7:6"
        }
      ],
      "optSummary": {
        "folded": 7,
        "propagated": 19,
        "algebraic": 0,
        "deadEliminated": 7,
        "total": 33
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "2"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "3"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "4"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "c"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "14"
        },
        {
          "address": "0007",
          "opcode": "STORE_VAR",
          "arg": "result1"
        },
        {
          "address": "0008",
          "opcode": "PUSH_CONST",
          "arg": "20"
        },
        {
          "address": "0009",
          "opcode": "STORE_VAR",
          "arg": "result2"
        },
        {
          "address": "0010",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0011",
          "opcode": "STORE_VAR",
          "arg": "test"
        },
        {
          "address": "0012",
          "opcode": "PUSH_CONST",
          "arg": "14"
        },
        {
          "address": "0013",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0014",
          "opcode": "PUSH_CONST",
          "arg": "20"
        },
        {
          "address": "0015",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0016",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "14",
        "20"
      ],
      "vmVariables": [
        {
          "name": "test",
          "value": "1"
        },
        {
          "name": "result2",
          "value": "20"
        },
        {
          "name": "b",
          "value": "3"
        },
        {
          "name": "a",
          "value": "2"
        },
        {
          "name": "result1",
          "value": "14"
        },
        {
          "name": "c",
          "value": "4"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "a = 2\n    b = 3\n    c = 4\n    result1 = 14\n    result2 = 20\n    test = 1\n    print 14\n    print 20"
    }
  },
  "conditional_statement": {
    "source": "// Category D: Conditional Statements (if-else)\nint score = 85;\nint grade = 0;\nif (score >= 90) {\n    grade = 1;\n} else {\n    if (score >= 80) {\n        grade = 2;\n    } else {\n        grade = 3;\n    }\n}\nprint grade;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\04_conditional_statement.txt\n\n=== Source Code ===\n// Category D: Conditional Statements (if-else)\nint score = 85;\nint grade = 0;\nif (score >= 90) {\n    grade = 1;\n} else {\n    if (score >= 80) {\n        grade = 2;\n    } else {\n        grade = 3;\n    }\n}\nprint grade;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (48 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (48 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'score'\n[2] Line 2, Col 11 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 13 | Type: NUMBER | Lexeme: '85'\n[4] Line 2, Col 15 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'grade'\n[7] Line 3, Col 11 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 13 | Type: NUMBER | Lexeme: '0'\n[9] Line 3, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: IF | Lexeme: 'if'\n[11] Line 4, Col 4 | Type: LEFT_PAREN | Lexeme: '('\n[12] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'score'\n[13] Line 4, Col 11 | Type: GREATER_EQUAL | Lexeme: '>='\n[14] Line 4, Col 14 | Type: NUMBER | Lexeme: '90'\n[15] Line 4, Col 16 | Type: RIGHT_PAREN | Lexeme: ')'\n[16] Line 4, Col 18 | Type: LEFT_BRACE | Lexeme: '{'\n[17] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'grade'\n[18] Line 5, Col 11 | Type: ASSIGN | Lexeme: '='\n[19] Line 5, Col 13 | Type: NUMBER | Lexeme: '1'\n[20] Line 5, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[21] Line 6, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[22] Line 6, Col 3 | Type: ELSE | Lexeme: 'else'\n[23] Line 6, Col 8 | Type: LEFT_BRACE | Lexeme: '{'\n[24] Line 7, Col 5 | Type: IF | Lexeme: 'if'\n[25] Line 7, Col 8 | Type: LEFT_PAREN | Lexeme: '('\n[26] Line 7, Col 9 | Type: IDENTIFIER | Lexeme: 'score'\n[27] Line 7, Col 15 | Type: GREATER_EQUAL | Lexeme: '>='\n[28] Line 7, Col 18 | Type: NUMBER | Lexeme: '80'\n[29] Line 7, Col 20 | Type: RIGHT_PAREN | Lexeme: ')'\n[30] Line 7, Col 22 | Type: LEFT_BRACE | Lexeme: '{'\n[31] Line 8, Col 9 | Type: IDENTIFIER | Lexeme: 'grade'\n[32] Line 8, Col 15 | Type: ASSIGN | Lexeme: '='\n[33] Line 8, Col 17 | Type: NUMBER | Lexeme: '2'\n[34] Line 8, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[35] Line 9, Col 5 | Type: RIGHT_BRACE | Lexeme: '}'\n[36] Line 9, Col 7 | Type: ELSE | Lexeme: 'else'\n[37] Line 9, Col 12 | Type: LEFT_BRACE | Lexeme: '{'\n[38] Line 10, Col 9 | Type: IDENTIFIER | Lexeme: 'grade'\n[39] Line 10, Col 15 | Type: ASSIGN | Lexeme: '='\n[40] Line 10, Col 17 | Type: NUMBER | Lexeme: '3'\n[41] Line 10, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[42] Line 11, Col 5 | Type: RIGHT_BRACE | Lexeme: '}'\n[43] Line 12, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[44] Line 13, Col 1 | Type: PRINT | Lexeme: 'print'\n[45] Line 13, Col 7 | Type: IDENTIFIER | Lexeme: 'grade'\n[46] Line 13, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[47] Line 14, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int score\n    Literal: 85\n  Declaration: int grade\n    Literal: 0\n  If\n    Condition\n      Binary Expression: >=\n        Identifier: score\n        Literal: 90\n    Then\n      Block\n        Assignment: grade\n          Literal: 1\n    Else\n      Block\n        If\n          Condition\n            Binary Expression: >=\n              Identifier: score\n              Literal: 80\n          Then\n            Block\n              Assignment: grade\n                Literal: 2\n          Else\n            Block\n              Assignment: grade\n                Literal: 3\n  Print\n    Identifier: grade\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nscore           int       0       L2:5        \ngrade           int       0       L3:5        \n\n=== Three-Address Code (TAC) ===\n    score = 85\n    grade = 0\n    _t0 = score >= 90\n    ifFalse _t0 goto L0\n    grade = 1\n    goto L1\nL0:\n    _t1 = score >= 80\n    ifFalse _t1 goto L2\n    grade = 2\n    goto L3\nL2:\n    grade = 3\nL3:\nL1:\n    print grade\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 1\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 2\n\n=== Optimized Three-Address Code ===\n    score = 85\n    grade = 0\n    _t0 = 0\n    ifFalse _t0 goto L0\n    grade = 1\n    goto L1\nL0:\n    _t1 = score >= 80\n    ifFalse _t1 goto L2\n    grade = 2\n    goto L3\nL2:\n    grade = 3\nL3:\nL1:\n    print grade\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: score = 85\n    movl    $85, -4(%ebp)\n\n    # TAC: grade = 0\n    movl    $0, -8(%ebp)\n\n    # TAC: _t0 = 0\n    movl    $0, -12(%ebp)\n\n    # TAC: ifFalse _t0 goto L0\n    movl    -12(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L0\n\n    # TAC: grade = 1\n    movl    $1, -8(%ebp)\n\n    # TAC: goto L1\n    jmp     .L1\n\n    # TAC: L0:\n.L0:\n\n    # TAC: _t1 = score >= 80\n    movl    -4(%ebp), %eax\n    cmpl    $80, %eax\n    setge    %al\n    movzbl  %al, %eax\n    movl    %eax, -16(%ebp)\n\n    # TAC: ifFalse _t1 goto L2\n    movl    -16(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L2\n\n    # TAC: grade = 2\n    movl    $2, -8(%ebp)\n\n    # TAC: goto L3\n    jmp     .L3\n\n    # TAC: L2:\n.L2:\n\n    # TAC: grade = 3\n    movl    $3, -8(%ebp)\n\n    # TAC: L3:\n.L3:\n\n    # TAC: L1:\n.L1:\n\n    # TAC: print grade\n    movl    -8(%ebp), %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   85\n0001:  STORE_VAR    score\n0002:  PUSH_CONST   0\n0003:  STORE_VAR    grade\n0004:  PUSH_CONST   0\n0005:  STORE_VAR    _t0\n0006:  LOAD_VAR     _t0\n0007:  JUMP_IF_ZERO ->0011\n0008:  PUSH_CONST   1\n0009:  STORE_VAR    grade\n0010:  JUMP         ->0022\n0011:  LOAD_VAR     score\n0012:  PUSH_CONST   80\n0013:  GE\n0014:  STORE_VAR    _t1\n0015:  LOAD_VAR     _t1\n0016:  JUMP_IF_ZERO ->0020\n0017:  PUSH_CONST   2\n0018:  STORE_VAR    grade\n0019:  JUMP         ->0022\n0020:  PUSH_CONST   3\n0021:  STORE_VAR    grade\n0022:  LOAD_VAR     grade\n0023:  PRINT\n0024:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 2\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ngrade           2           \nscore           85          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (48 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'score'\n[2] Line 2, Col 11 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 13 | Type: NUMBER | Lexeme: '85'\n[4] Line 2, Col 15 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'grade'\n[7] Line 3, Col 11 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 13 | Type: NUMBER | Lexeme: '0'\n[9] Line 3, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: IF | Lexeme: 'if'\n[11] Line 4, Col 4 | Type: LEFT_PAREN | Lexeme: '('\n[12] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'score'\n[13] Line 4, Col 11 | Type: GREATER_EQUAL | Lexeme: '>='\n[14] Line 4, Col 14 | Type: NUMBER | Lexeme: '90'\n[15] Line 4, Col 16 | Type: RIGHT_PAREN | Lexeme: ')'\n[16] Line 4, Col 18 | Type: LEFT_BRACE | Lexeme: '{'\n[17] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'grade'\n[18] Line 5, Col 11 | Type: ASSIGN | Lexeme: '='\n[19] Line 5, Col 13 | Type: NUMBER | Lexeme: '1'\n[20] Line 5, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[21] Line 6, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[22] Line 6, Col 3 | Type: ELSE | Lexeme: 'else'\n[23] Line 6, Col 8 | Type: LEFT_BRACE | Lexeme: '{'\n[24] Line 7, Col 5 | Type: IF | Lexeme: 'if'\n[25] Line 7, Col 8 | Type: LEFT_PAREN | Lexeme: '('\n[26] Line 7, Col 9 | Type: IDENTIFIER | Lexeme: 'score'\n[27] Line 7, Col 15 | Type: GREATER_EQUAL | Lexeme: '>='\n[28] Line 7, Col 18 | Type: NUMBER | Lexeme: '80'\n[29] Line 7, Col 20 | Type: RIGHT_PAREN | Lexeme: ')'\n[30] Line 7, Col 22 | Type: LEFT_BRACE | Lexeme: '{'\n[31] Line 8, Col 9 | Type: IDENTIFIER | Lexeme: 'grade'\n[32] Line 8, Col 15 | Type: ASSIGN | Lexeme: '='\n[33] Line 8, Col 17 | Type: NUMBER | Lexeme: '2'\n[34] Line 8, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[35] Line 9, Col 5 | Type: RIGHT_BRACE | Lexeme: '}'\n[36] Line 9, Col 7 | Type: ELSE | Lexeme: 'else'\n[37] Line 9, Col 12 | Type: LEFT_BRACE | Lexeme: '{'\n[38] Line 10, Col 9 | Type: IDENTIFIER | Lexeme: 'grade'\n[39] Line 10, Col 15 | Type: ASSIGN | Lexeme: '='\n[40] Line 10, Col 17 | Type: NUMBER | Lexeme: '3'\n[41] Line 10, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[42] Line 11, Col 5 | Type: RIGHT_BRACE | Lexeme: '}'\n[43] Line 12, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[44] Line 13, Col 1 | Type: PRINT | Lexeme: 'print'\n[45] Line 13, Col 7 | Type: IDENTIFIER | Lexeme: 'grade'\n[46] Line 13, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[47] Line 14, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int score\n    Literal: 85\n  Declaration: int grade\n    Literal: 0\n  If\n    Condition\n      Binary Expression: >=\n        Identifier: score\n        Literal: 90\n    Then\n      Block\n        Assignment: grade\n          Literal: 1\n    Else\n      Block\n        If\n          Condition\n            Binary Expression: >=\n              Identifier: score\n              Literal: 80\n          Then\n            Block\n              Assignment: grade\n                Literal: 2\n          Else\n            Block\n              Assignment: grade\n                Literal: 3\n  Print\n    Identifier: grade",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nscore           int       0       L2:5        \ngrade           int       0       L3:5",
      "tac": "score = 85\n    grade = 0\n    _t0 = score >= 90\n    ifFalse _t0 goto L0\n    grade = 1\n    goto L1\nL0:\n    _t1 = score >= 80\n    ifFalse _t1 goto L2\n    grade = 2\n    goto L3\nL2:\n    grade = 3\nL3:\nL1:\n    print grade",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 1\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 2",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: score = 85\n    movl    $85, -4(%ebp)\n\n    # TAC: grade = 0\n    movl    $0, -8(%ebp)\n\n    # TAC: _t0 = 0\n    movl    $0, -12(%ebp)\n\n    # TAC: ifFalse _t0 goto L0\n    movl    -12(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L0\n\n    # TAC: grade = 1\n    movl    $1, -8(%ebp)\n\n    # TAC: goto L1\n    jmp     .L1\n\n    # TAC: L0:\n.L0:\n\n    # TAC: _t1 = score >= 80\n    movl    -4(%ebp), %eax\n    cmpl    $80, %eax\n    setge    %al\n    movzbl  %al, %eax\n    movl    %eax, -16(%ebp)\n\n    # TAC: ifFalse _t1 goto L2\n    movl    -16(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L2\n\n    # TAC: grade = 2\n    movl    $2, -8(%ebp)\n\n    # TAC: goto L3\n    jmp     .L3\n\n    # TAC: L2:\n.L2:\n\n    # TAC: grade = 3\n    movl    $3, -8(%ebp)\n\n    # TAC: L3:\n.L3:\n\n    # TAC: L1:\n.L1:\n\n    # TAC: print grade\n    movl    -8(%ebp), %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   85\n0001:  STORE_VAR    score\n0002:  PUSH_CONST   0\n0003:  STORE_VAR    grade\n0004:  PUSH_CONST   0\n0005:  STORE_VAR    _t0\n0006:  LOAD_VAR     _t0\n0007:  JUMP_IF_ZERO ->0011\n0008:  PUSH_CONST   1\n0009:  STORE_VAR    grade\n0010:  JUMP         ->0022\n0011:  LOAD_VAR     score\n0012:  PUSH_CONST   80\n0013:  GE\n0014:  STORE_VAR    _t1\n0015:  LOAD_VAR     _t1\n0016:  JUMP_IF_ZERO ->0020\n0017:  PUSH_CONST   2\n0018:  STORE_VAR    grade\n0019:  JUMP         ->0022\n0020:  PUSH_CONST   3\n0021:  STORE_VAR    grade\n0022:  LOAD_VAR     grade\n0023:  PRINT\n0024:  HALT",
      "vm": "[VM Output] 2\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ngrade           2           \nscore           85          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "score"
        },
        {
          "index": 2,
          "line": 2,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "85"
        },
        {
          "index": 4,
          "line": 2,
          "column": 15,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 6,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "grade"
        },
        {
          "index": 7,
          "line": 3,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 8,
          "line": 3,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "0"
        },
        {
          "index": 9,
          "line": 3,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 4,
          "column": 1,
          "type": "IF",
          "lexeme": "if"
        },
        {
          "index": 11,
          "line": 4,
          "column": 4,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 12,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "score"
        },
        {
          "index": 13,
          "line": 4,
          "column": 11,
          "type": "GREATER_EQUAL",
          "lexeme": ">="
        },
        {
          "index": 14,
          "line": 4,
          "column": 14,
          "type": "NUMBER",
          "lexeme": "90"
        },
        {
          "index": 15,
          "line": 4,
          "column": 16,
          "type": "RIGHT_PAREN",
          "lexeme": ")"
        },
        {
          "index": 16,
          "line": 4,
          "column": 18,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 17,
          "line": 5,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "grade"
        },
        {
          "index": 18,
          "line": 5,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 19,
          "line": 5,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 20,
          "line": 5,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 21,
          "line": 6,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 22,
          "line": 6,
          "column": 3,
          "type": "ELSE",
          "lexeme": "else"
        },
        {
          "index": 23,
          "line": 6,
          "column": 8,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 24,
          "line": 7,
          "column": 5,
          "type": "IF",
          "lexeme": "if"
        },
        {
          "index": 25,
          "line": 7,
          "column": 8,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 26,
          "line": 7,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "score"
        },
        {
          "index": 27,
          "line": 7,
          "column": 15,
          "type": "GREATER_EQUAL",
          "lexeme": ">="
        },
        {
          "index": 28,
          "line": 7,
          "column": 18,
          "type": "NUMBER",
          "lexeme": "80"
        },
        {
          "index": 29,
          "line": 7,
          "column": 20,
          "type": "RIGHT_PAREN",
          "lexeme": ")"
        },
        {
          "index": 30,
          "line": 7,
          "column": 22,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 31,
          "line": 8,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "grade"
        },
        {
          "index": 32,
          "line": 8,
          "column": 15,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 33,
          "line": 8,
          "column": 17,
          "type": "NUMBER",
          "lexeme": "2"
        },
        {
          "index": 34,
          "line": 8,
          "column": 18,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 35,
          "line": 9,
          "column": 5,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 36,
          "line": 9,
          "column": 7,
          "type": "ELSE",
          "lexeme": "else"
        },
        {
          "index": 37,
          "line": 9,
          "column": 12,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 38,
          "line": 10,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "grade"
        },
        {
          "index": 39,
          "line": 10,
          "column": 15,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 40,
          "line": 10,
          "column": 17,
          "type": "NUMBER",
          "lexeme": "3"
        },
        {
          "index": 41,
          "line": 10,
          "column": 18,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 42,
          "line": 11,
          "column": 5,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 43,
          "line": 12,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 44,
          "line": 13,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 45,
          "line": 13,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "grade"
        },
        {
          "index": 46,
          "line": 13,
          "column": 12,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 47,
          "line": 14,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "score",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "grade",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 1,
        "algebraic": 0,
        "deadEliminated": 0,
        "total": 2
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "85"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "score"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "grade"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "_t0"
        },
        {
          "address": "0006",
          "opcode": "LOAD_VAR",
          "arg": "_t0"
        },
        {
          "address": "0007",
          "opcode": "JUMP_IF_ZERO",
          "arg": "->0011"
        },
        {
          "address": "0008",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0009",
          "opcode": "STORE_VAR",
          "arg": "grade"
        },
        {
          "address": "0010",
          "opcode": "JUMP",
          "arg": "->0022"
        },
        {
          "address": "0011",
          "opcode": "LOAD_VAR",
          "arg": "score"
        },
        {
          "address": "0012",
          "opcode": "PUSH_CONST",
          "arg": "80"
        },
        {
          "address": "0013",
          "opcode": "GE",
          "arg": ""
        },
        {
          "address": "0014",
          "opcode": "STORE_VAR",
          "arg": "_t1"
        },
        {
          "address": "0015",
          "opcode": "LOAD_VAR",
          "arg": "_t1"
        },
        {
          "address": "0016",
          "opcode": "JUMP_IF_ZERO",
          "arg": "->0020"
        },
        {
          "address": "0017",
          "opcode": "PUSH_CONST",
          "arg": "2"
        },
        {
          "address": "0018",
          "opcode": "STORE_VAR",
          "arg": "grade"
        },
        {
          "address": "0019",
          "opcode": "JUMP",
          "arg": "->0022"
        },
        {
          "address": "0020",
          "opcode": "PUSH_CONST",
          "arg": "3"
        },
        {
          "address": "0021",
          "opcode": "STORE_VAR",
          "arg": "grade"
        },
        {
          "address": "0022",
          "opcode": "LOAD_VAR",
          "arg": "grade"
        },
        {
          "address": "0023",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0024",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "2"
      ],
      "vmVariables": [
        {
          "name": "grade",
          "value": "2"
        },
        {
          "name": "score",
          "value": "85"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "score = 85\n    grade = 0\n    _t0 = 0\n    ifFalse _t0 goto L0\n    grade = 1\n    goto L1\nL0:\n    _t1 = score >= 80\n    ifFalse _t1 goto L2\n    grade = 2\n    goto L3\nL2:\n    grade = 3\nL3:\nL1:\n    print grade"
    }
  },
  "tac_and_assembly": {
    "source": "// Category M: Source to Three-Address Code (TAC) and Target Assembly\nint a = 10;\nint b = 20;\nint c = a + b * 2;\nprint c;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\13_tac_and_assembly.txt\n\n=== Source Code ===\n// Category M: Source to Three-Address Code (TAC) and Target Assembly\nint a = 10;\nint b = 20;\nint c = a + b * 2;\nprint c;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (23 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (23 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[7] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 9 | Type: NUMBER | Lexeme: '20'\n[9] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[11] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'c'\n[12] Line 4, Col 7 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[14] Line 4, Col 11 | Type: PLUS | Lexeme: '+'\n[15] Line 4, Col 13 | Type: IDENTIFIER | Lexeme: 'b'\n[16] Line 4, Col 15 | Type: MULTIPLY | Lexeme: '*'\n[17] Line 4, Col 17 | Type: NUMBER | Lexeme: '2'\n[18] Line 4, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 5, Col 1 | Type: PRINT | Lexeme: 'print'\n[20] Line 5, Col 7 | Type: IDENTIFIER | Lexeme: 'c'\n[21] Line 5, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[22] Line 6, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Literal: 10\n  Declaration: int b\n    Literal: 20\n  Declaration: int c\n    Binary Expression: +\n      Identifier: a\n      Binary Expression: *\n        Identifier: b\n        Literal: 2\n  Print\n    Identifier: c\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nc               int       0       L4:5        \n\n=== Three-Address Code (TAC) ===\n    a = 10\n    b = 20\n    _t0 = b * 2\n    _t1 = a + _t0\n    c = _t1\n    print c\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 2\n  Constant Operands Propagated   : 5\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 2\n  Total Optimizations Applied    : 9\n\n=== Optimized Three-Address Code ===\n    a = 10\n    b = 20\n    c = 50\n    print 50\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: b = 20\n    movl    $20, -8(%ebp)\n\n    # TAC: c = 50\n    movl    $50, -12(%ebp)\n\n    # TAC: print 50\n    movl    $50, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   10\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   20\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   50\n0005:  STORE_VAR    c\n0006:  PUSH_CONST   50\n0007:  PRINT\n0008:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 50\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nc               50          \nb               20          \na               10          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (23 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[6] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[7] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[8] Line 3, Col 9 | Type: NUMBER | Lexeme: '20'\n[9] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[11] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'c'\n[12] Line 4, Col 7 | Type: ASSIGN | Lexeme: '='\n[13] Line 4, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[14] Line 4, Col 11 | Type: PLUS | Lexeme: '+'\n[15] Line 4, Col 13 | Type: IDENTIFIER | Lexeme: 'b'\n[16] Line 4, Col 15 | Type: MULTIPLY | Lexeme: '*'\n[17] Line 4, Col 17 | Type: NUMBER | Lexeme: '2'\n[18] Line 4, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 5, Col 1 | Type: PRINT | Lexeme: 'print'\n[20] Line 5, Col 7 | Type: IDENTIFIER | Lexeme: 'c'\n[21] Line 5, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[22] Line 6, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Literal: 10\n  Declaration: int b\n    Literal: 20\n  Declaration: int c\n    Binary Expression: +\n      Identifier: a\n      Binary Expression: *\n        Identifier: b\n        Literal: 2\n  Print\n    Identifier: c",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nc               int       0       L4:5",
      "tac": "a = 10\n    b = 20\n    _t0 = b * 2\n    _t1 = a + _t0\n    c = _t1\n    print c",
      "opt": "Constant Operations Folded     : 2\n  Constant Operands Propagated   : 5\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 2\n  Total Optimizations Applied    : 9",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: b = 20\n    movl    $20, -8(%ebp)\n\n    # TAC: c = 50\n    movl    $50, -12(%ebp)\n\n    # TAC: print 50\n    movl    $50, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   10\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   20\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   50\n0005:  STORE_VAR    c\n0006:  PUSH_CONST   50\n0007:  PRINT\n0008:  HALT",
      "vm": "[VM Output] 50\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nc               50          \nb               20          \na               10          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 4,
          "line": 2,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 6,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 7,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 8,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "20"
        },
        {
          "index": 9,
          "line": 3,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 4,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 11,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 12,
          "line": 4,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 13,
          "line": 4,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 14,
          "line": 4,
          "column": 11,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 15,
          "line": 4,
          "column": 13,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 16,
          "line": 4,
          "column": 15,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 17,
          "line": 4,
          "column": 17,
          "type": "NUMBER",
          "lexeme": "2"
        },
        {
          "index": 18,
          "line": 4,
          "column": 18,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 19,
          "line": 5,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 20,
          "line": 5,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 21,
          "line": 5,
          "column": 8,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 22,
          "line": 6,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "b",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        },
        {
          "name": "c",
          "type": "int",
          "scope": "0",
          "declaredAt": "L4:5"
        }
      ],
      "optSummary": {
        "folded": 2,
        "propagated": 5,
        "algebraic": 0,
        "deadEliminated": 2,
        "total": 9
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "10"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "20"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "c"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0007",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0008",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "50"
      ],
      "vmVariables": [
        {
          "name": "c",
          "value": "50"
        },
        {
          "name": "b",
          "value": "20"
        },
        {
          "name": "a",
          "value": "10"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "a = 10\n    b = 20\n    c = 50\n    print 50"
    }
  },
  "optimization_demo": {
    "source": "// Category L: Constant Folding, Propagation & Algebraic Simplification\nint base = 10 + 20 * 2;\nint mult = base * 1;\nint zero = mult * 0;\nint addZero = base + 0;\nint unused = 999;\nprint addZero;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\12_optimization_demo.txt\n\n=== Source Code ===\n// Category L: Constant Folding, Propagation & Algebraic Simplification\nint base = 10 + 20 * 2;\nint mult = base * 1;\nint zero = mult * 0;\nint addZero = base + 0;\nint unused = 999;\nprint addZero;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (39 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (39 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'base'\n[2] Line 2, Col 10 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 12 | Type: NUMBER | Lexeme: '10'\n[4] Line 2, Col 15 | Type: PLUS | Lexeme: '+'\n[5] Line 2, Col 17 | Type: NUMBER | Lexeme: '20'\n[6] Line 2, Col 20 | Type: MULTIPLY | Lexeme: '*'\n[7] Line 2, Col 22 | Type: NUMBER | Lexeme: '2'\n[8] Line 2, Col 23 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[10] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'mult'\n[11] Line 3, Col 10 | Type: ASSIGN | Lexeme: '='\n[12] Line 3, Col 12 | Type: IDENTIFIER | Lexeme: 'base'\n[13] Line 3, Col 17 | Type: MULTIPLY | Lexeme: '*'\n[14] Line 3, Col 19 | Type: NUMBER | Lexeme: '1'\n[15] Line 3, Col 20 | Type: SEMICOLON | Lexeme: ';'\n[16] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[17] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'zero'\n[18] Line 4, Col 10 | Type: ASSIGN | Lexeme: '='\n[19] Line 4, Col 12 | Type: IDENTIFIER | Lexeme: 'mult'\n[20] Line 4, Col 17 | Type: MULTIPLY | Lexeme: '*'\n[21] Line 4, Col 19 | Type: NUMBER | Lexeme: '0'\n[22] Line 4, Col 20 | Type: SEMICOLON | Lexeme: ';'\n[23] Line 5, Col 1 | Type: INT | Lexeme: 'int'\n[24] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'addZero'\n[25] Line 5, Col 13 | Type: ASSIGN | Lexeme: '='\n[26] Line 5, Col 15 | Type: IDENTIFIER | Lexeme: 'base'\n[27] Line 5, Col 20 | Type: PLUS | Lexeme: '+'\n[28] Line 5, Col 22 | Type: NUMBER | Lexeme: '0'\n[29] Line 5, Col 23 | Type: SEMICOLON | Lexeme: ';'\n[30] Line 6, Col 1 | Type: INT | Lexeme: 'int'\n[31] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'unused'\n[32] Line 6, Col 12 | Type: ASSIGN | Lexeme: '='\n[33] Line 6, Col 14 | Type: NUMBER | Lexeme: '999'\n[34] Line 6, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[35] Line 7, Col 1 | Type: PRINT | Lexeme: 'print'\n[36] Line 7, Col 7 | Type: IDENTIFIER | Lexeme: 'addZero'\n[37] Line 7, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[38] Line 8, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int base\n    Binary Expression: +\n      Literal: 10\n      Binary Expression: *\n        Literal: 20\n        Literal: 2\n  Declaration: int mult\n    Binary Expression: *\n      Identifier: base\n      Literal: 1\n  Declaration: int zero\n    Binary Expression: *\n      Identifier: mult\n      Literal: 0\n  Declaration: int addZero\n    Binary Expression: +\n      Identifier: base\n      Literal: 0\n  Declaration: int unused\n    Literal: 999\n  Print\n    Identifier: addZero\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nbase            int       0       L2:5        \nmult            int       0       L3:5        \nzero            int       0       L4:5        \naddZero         int       0       L5:5        \nunused          int       0       L6:5        \n\n=== Three-Address Code (TAC) ===\n    _t0 = 20 * 2\n    _t1 = 10 + _t0\n    base = _t1\n    _t2 = base * 1\n    mult = _t2\n    _t3 = mult * 0\n    zero = _t3\n    _t4 = base + 0\n    addZero = _t4\n    unused = 999\n    print addZero\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 5\n  Constant Operands Propagated   : 9\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 5\n  Total Optimizations Applied    : 19\n\n=== Optimized Three-Address Code ===\n    base = 50\n    mult = 50\n    zero = 0\n    addZero = 50\n    unused = 999\n    print 50\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: base = 50\n    movl    $50, -4(%ebp)\n\n    # TAC: mult = 50\n    movl    $50, -8(%ebp)\n\n    # TAC: zero = 0\n    movl    $0, -12(%ebp)\n\n    # TAC: addZero = 50\n    movl    $50, -16(%ebp)\n\n    # TAC: unused = 999\n    movl    $999, -20(%ebp)\n\n    # TAC: print 50\n    movl    $50, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   50\n0001:  STORE_VAR    base\n0002:  PUSH_CONST   50\n0003:  STORE_VAR    mult\n0004:  PUSH_CONST   0\n0005:  STORE_VAR    zero\n0006:  PUSH_CONST   50\n0007:  STORE_VAR    addZero\n0008:  PUSH_CONST   999\n0009:  STORE_VAR    unused\n0010:  PUSH_CONST   50\n0011:  PRINT\n0012:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 50\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nunused          999         \nbase            50          \nzero            0           \nmult            50          \naddZero         50          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (39 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'base'\n[2] Line 2, Col 10 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 12 | Type: NUMBER | Lexeme: '10'\n[4] Line 2, Col 15 | Type: PLUS | Lexeme: '+'\n[5] Line 2, Col 17 | Type: NUMBER | Lexeme: '20'\n[6] Line 2, Col 20 | Type: MULTIPLY | Lexeme: '*'\n[7] Line 2, Col 22 | Type: NUMBER | Lexeme: '2'\n[8] Line 2, Col 23 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[10] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'mult'\n[11] Line 3, Col 10 | Type: ASSIGN | Lexeme: '='\n[12] Line 3, Col 12 | Type: IDENTIFIER | Lexeme: 'base'\n[13] Line 3, Col 17 | Type: MULTIPLY | Lexeme: '*'\n[14] Line 3, Col 19 | Type: NUMBER | Lexeme: '1'\n[15] Line 3, Col 20 | Type: SEMICOLON | Lexeme: ';'\n[16] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[17] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'zero'\n[18] Line 4, Col 10 | Type: ASSIGN | Lexeme: '='\n[19] Line 4, Col 12 | Type: IDENTIFIER | Lexeme: 'mult'\n[20] Line 4, Col 17 | Type: MULTIPLY | Lexeme: '*'\n[21] Line 4, Col 19 | Type: NUMBER | Lexeme: '0'\n[22] Line 4, Col 20 | Type: SEMICOLON | Lexeme: ';'\n[23] Line 5, Col 1 | Type: INT | Lexeme: 'int'\n[24] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'addZero'\n[25] Line 5, Col 13 | Type: ASSIGN | Lexeme: '='\n[26] Line 5, Col 15 | Type: IDENTIFIER | Lexeme: 'base'\n[27] Line 5, Col 20 | Type: PLUS | Lexeme: '+'\n[28] Line 5, Col 22 | Type: NUMBER | Lexeme: '0'\n[29] Line 5, Col 23 | Type: SEMICOLON | Lexeme: ';'\n[30] Line 6, Col 1 | Type: INT | Lexeme: 'int'\n[31] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'unused'\n[32] Line 6, Col 12 | Type: ASSIGN | Lexeme: '='\n[33] Line 6, Col 14 | Type: NUMBER | Lexeme: '999'\n[34] Line 6, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[35] Line 7, Col 1 | Type: PRINT | Lexeme: 'print'\n[36] Line 7, Col 7 | Type: IDENTIFIER | Lexeme: 'addZero'\n[37] Line 7, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[38] Line 8, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int base\n    Binary Expression: +\n      Literal: 10\n      Binary Expression: *\n        Literal: 20\n        Literal: 2\n  Declaration: int mult\n    Binary Expression: *\n      Identifier: base\n      Literal: 1\n  Declaration: int zero\n    Binary Expression: *\n      Identifier: mult\n      Literal: 0\n  Declaration: int addZero\n    Binary Expression: +\n      Identifier: base\n      Literal: 0\n  Declaration: int unused\n    Literal: 999\n  Print\n    Identifier: addZero",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nbase            int       0       L2:5        \nmult            int       0       L3:5        \nzero            int       0       L4:5        \naddZero         int       0       L5:5        \nunused          int       0       L6:5",
      "tac": "_t0 = 20 * 2\n    _t1 = 10 + _t0\n    base = _t1\n    _t2 = base * 1\n    mult = _t2\n    _t3 = mult * 0\n    zero = _t3\n    _t4 = base + 0\n    addZero = _t4\n    unused = 999\n    print addZero",
      "opt": "Constant Operations Folded     : 5\n  Constant Operands Propagated   : 9\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 5\n  Total Optimizations Applied    : 19",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: base = 50\n    movl    $50, -4(%ebp)\n\n    # TAC: mult = 50\n    movl    $50, -8(%ebp)\n\n    # TAC: zero = 0\n    movl    $0, -12(%ebp)\n\n    # TAC: addZero = 50\n    movl    $50, -16(%ebp)\n\n    # TAC: unused = 999\n    movl    $999, -20(%ebp)\n\n    # TAC: print 50\n    movl    $50, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   50\n0001:  STORE_VAR    base\n0002:  PUSH_CONST   50\n0003:  STORE_VAR    mult\n0004:  PUSH_CONST   0\n0005:  STORE_VAR    zero\n0006:  PUSH_CONST   50\n0007:  STORE_VAR    addZero\n0008:  PUSH_CONST   999\n0009:  STORE_VAR    unused\n0010:  PUSH_CONST   50\n0011:  PRINT\n0012:  HALT",
      "vm": "[VM Output] 50\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nunused          999         \nbase            50          \nzero            0           \nmult            50          \naddZero         50          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "base"
        },
        {
          "index": 2,
          "line": 2,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 12,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 4,
          "line": 2,
          "column": 15,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 5,
          "line": 2,
          "column": 17,
          "type": "NUMBER",
          "lexeme": "20"
        },
        {
          "index": 6,
          "line": 2,
          "column": 20,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 7,
          "line": 2,
          "column": 22,
          "type": "NUMBER",
          "lexeme": "2"
        },
        {
          "index": 8,
          "line": 2,
          "column": 23,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 9,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 10,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "mult"
        },
        {
          "index": 11,
          "line": 3,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 12,
          "line": 3,
          "column": 12,
          "type": "IDENTIFIER",
          "lexeme": "base"
        },
        {
          "index": 13,
          "line": 3,
          "column": 17,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 14,
          "line": 3,
          "column": 19,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 15,
          "line": 3,
          "column": 20,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 16,
          "line": 4,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 17,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "zero"
        },
        {
          "index": 18,
          "line": 4,
          "column": 10,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 19,
          "line": 4,
          "column": 12,
          "type": "IDENTIFIER",
          "lexeme": "mult"
        },
        {
          "index": 20,
          "line": 4,
          "column": 17,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 21,
          "line": 4,
          "column": 19,
          "type": "NUMBER",
          "lexeme": "0"
        },
        {
          "index": 22,
          "line": 4,
          "column": 20,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 23,
          "line": 5,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 24,
          "line": 5,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "addZero"
        },
        {
          "index": 25,
          "line": 5,
          "column": 13,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 26,
          "line": 5,
          "column": 15,
          "type": "IDENTIFIER",
          "lexeme": "base"
        },
        {
          "index": 27,
          "line": 5,
          "column": 20,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 28,
          "line": 5,
          "column": 22,
          "type": "NUMBER",
          "lexeme": "0"
        },
        {
          "index": 29,
          "line": 5,
          "column": 23,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 30,
          "line": 6,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 31,
          "line": 6,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "unused"
        },
        {
          "index": 32,
          "line": 6,
          "column": 12,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 33,
          "line": 6,
          "column": 14,
          "type": "NUMBER",
          "lexeme": "999"
        },
        {
          "index": 34,
          "line": 6,
          "column": 17,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 35,
          "line": 7,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 36,
          "line": 7,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "addZero"
        },
        {
          "index": 37,
          "line": 7,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 38,
          "line": 8,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "base",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "mult",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        },
        {
          "name": "zero",
          "type": "int",
          "scope": "0",
          "declaredAt": "L4:5"
        },
        {
          "name": "addZero",
          "type": "int",
          "scope": "0",
          "declaredAt": "L5:5"
        },
        {
          "name": "unused",
          "type": "int",
          "scope": "0",
          "declaredAt": "L6:5"
        }
      ],
      "optSummary": {
        "folded": 5,
        "propagated": 9,
        "algebraic": 0,
        "deadEliminated": 5,
        "total": 19
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "base"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "mult"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "zero"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0007",
          "opcode": "STORE_VAR",
          "arg": "addZero"
        },
        {
          "address": "0008",
          "opcode": "PUSH_CONST",
          "arg": "999"
        },
        {
          "address": "0009",
          "opcode": "STORE_VAR",
          "arg": "unused"
        },
        {
          "address": "0010",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0011",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0012",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "50"
      ],
      "vmVariables": [
        {
          "name": "unused",
          "value": "999"
        },
        {
          "name": "base",
          "value": "50"
        },
        {
          "name": "zero",
          "value": "0"
        },
        {
          "name": "mult",
          "value": "50"
        },
        {
          "name": "addZero",
          "value": "50"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "base = 50\n    mult = 50\n    zero = 0\n    addZero = 50\n    unused = 999\n    print 50"
    }
  },
  "syntax_recovery": {
    "source": "// Category K: Multi-Strategy Error Recovery on Malformed Source\nint a = ;\nfloat b = 25;;\nif (b > 10 {\n    b = b + 5;\n    a = 99\n}\nwhile (a > 0) {\n    a = a - 1;\n}\nprint a;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\11_multiple_errors_recovery.txt\n\n=== Source Code ===\n// Category K: Multi-Strategy Error Recovery on Malformed Source\nint a = ;\nfloat b = 25;;\nif (b > 10 {\n    b = b + 5;\n    a = 99\n}\nwhile (a > 0) {\n    a = a - 1;\n}\nprint a;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (44 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report (4 recovery actions) ===\n[1] [INSERTION] Inserted missing '0' at line 2, column 9\n    Recovery Cost : 2 | Confidence: MEDIUM\n    Rationale     : Missing expression after '='; inserted default literal '0'\n[2] [DELETION] Deleted unexpected token ';' at line 3, column 14\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Deleted redundant semicolon ';'\n[3] [INSERTION] Inserted missing ')' at line 4, column 12\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Inserted missing ')' before block delimiter '{'\n[4] [INSERTION] Inserted missing ';' at line 7, column 1\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Inserted missing ';' before next statement token '}'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 5\n\n=== Lexical Tokens (44 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: SEMICOLON | Lexeme: ';'\n[4] Line 3, Col 1 | Type: FLOAT | Lexeme: 'float'\n[5] Line 3, Col 7 | Type: IDENTIFIER | Lexeme: 'b'\n[6] Line 3, Col 9 | Type: ASSIGN | Lexeme: '='\n[7] Line 3, Col 11 | Type: NUMBER | Lexeme: '25'\n[8] Line 3, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 3, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: IF | Lexeme: 'if'\n[11] Line 4, Col 4 | Type: LEFT_PAREN | Lexeme: '('\n[12] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[13] Line 4, Col 7 | Type: GREATER | Lexeme: '>'\n[14] Line 4, Col 9 | Type: NUMBER | Lexeme: '10'\n[15] Line 4, Col 12 | Type: LEFT_BRACE | Lexeme: '{'\n[16] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[17] Line 5, Col 7 | Type: ASSIGN | Lexeme: '='\n[18] Line 5, Col 9 | Type: IDENTIFIER | Lexeme: 'b'\n[19] Line 5, Col 11 | Type: PLUS | Lexeme: '+'\n[20] Line 5, Col 13 | Type: NUMBER | Lexeme: '5'\n[21] Line 5, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[22] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[23] Line 6, Col 7 | Type: ASSIGN | Lexeme: '='\n[24] Line 6, Col 9 | Type: NUMBER | Lexeme: '99'\n[25] Line 7, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[26] Line 8, Col 1 | Type: WHILE | Lexeme: 'while'\n[27] Line 8, Col 7 | Type: LEFT_PAREN | Lexeme: '('\n[28] Line 8, Col 8 | Type: IDENTIFIER | Lexeme: 'a'\n[29] Line 8, Col 10 | Type: GREATER | Lexeme: '>'\n[30] Line 8, Col 12 | Type: NUMBER | Lexeme: '0'\n[31] Line 8, Col 13 | Type: RIGHT_PAREN | Lexeme: ')'\n[32] Line 8, Col 15 | Type: LEFT_BRACE | Lexeme: '{'\n[33] Line 9, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[34] Line 9, Col 7 | Type: ASSIGN | Lexeme: '='\n[35] Line 9, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[36] Line 9, Col 11 | Type: MINUS | Lexeme: '-'\n[37] Line 9, Col 13 | Type: NUMBER | Lexeme: '1'\n[38] Line 9, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[39] Line 10, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[40] Line 11, Col 1 | Type: PRINT | Lexeme: 'print'\n[41] Line 11, Col 7 | Type: IDENTIFIER | Lexeme: 'a'\n[42] Line 11, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[43] Line 12, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Literal: 0\n  Declaration: float b\n    Literal: 25\n  If\n    Condition\n      Binary Expression: >\n        Identifier: b\n        Literal: 10\n    Then\n      Block\n        Assignment: b\n          Binary Expression: +\n            Identifier: b\n            Literal: 5\n        Assignment: a\n          Literal: 99\n  While\n    Condition\n      Binary Expression: >\n        Identifier: a\n        Literal: 0\n    Body\n      Block\n        Assignment: a\n          Binary Expression: -\n            Identifier: a\n            Literal: 1\n  Print\n    Identifier: a\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               float     0       L3:7        \n\n=== Three-Address Code (TAC) ===\n    a = 0\n    b = 25\n    _t0 = b > 10\n    ifFalse _t0 goto L1\n    _t1 = b + 5\n    b = _t1\n    a = 99\nL1:\nL2:\n    _t2 = a > 0\n    ifFalse _t2 goto L3\n    _t3 = a - 1\n    a = _t3\n    goto L2\nL3:\n    print a\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 1\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 2\n\n=== Optimized Three-Address Code ===\n    a = 0\n    b = 25\n    _t0 = 1\n    ifFalse _t0 goto L1\n    _t1 = b + 5\n    b = _t1\n    a = 99\nL1:\nL2:\n    _t2 = a > 0\n    ifFalse _t2 goto L3\n    _t3 = a - 1\n    a = _t3\n    goto L2\nL3:\n    print a\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 0\n    movl    $0, -4(%ebp)\n\n    # TAC: b = 25\n    movl    $25, -8(%ebp)\n\n    # TAC: _t0 = 1\n    movl    $1, -12(%ebp)\n\n    # TAC: ifFalse _t0 goto L1\n    movl    -12(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L1\n\n    # TAC: _t1 = b + 5\n    movl    -8(%ebp), %eax\n    addl    $5, %eax\n    movl    %eax, -16(%ebp)\n\n    # TAC: b = _t1\n    movl    -16(%ebp), %eax\n    movl    %eax, -8(%ebp)\n\n    # TAC: a = 99\n    movl    $99, -4(%ebp)\n\n    # TAC: L1:\n.L1:\n\n    # TAC: L2:\n.L2:\n\n    # TAC: _t2 = a > 0\n    movl    -4(%ebp), %eax\n    cmpl    $0, %eax\n    setg    %al\n    movzbl  %al, %eax\n    movl    %eax, -20(%ebp)\n\n    # TAC: ifFalse _t2 goto L3\n    movl    -20(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L3\n\n    # TAC: _t3 = a - 1\n    movl    -4(%ebp), %eax\n    subl    $1, %eax\n    movl    %eax, -24(%ebp)\n\n    # TAC: a = _t3\n    movl    -24(%ebp), %eax\n    movl    %eax, -4(%ebp)\n\n    # TAC: goto L2\n    jmp     .L2\n\n    # TAC: L3:\n.L3:\n\n    # TAC: print a\n    movl    -4(%ebp), %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   0\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   25\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   1\n0005:  STORE_VAR    _t0\n0006:  LOAD_VAR     _t0\n0007:  JUMP_IF_ZERO ->0016\n0008:  LOAD_VAR     b\n0009:  PUSH_CONST   5\n0010:  ADD\n0011:  STORE_VAR    _t1\n0012:  LOAD_VAR     _t1\n0013:  STORE_VAR    b\n0014:  PUSH_CONST   99\n0015:  STORE_VAR    a\n0016:  LOAD_VAR     a\n0017:  PUSH_CONST   0\n0018:  GT\n0019:  STORE_VAR    _t2\n0020:  LOAD_VAR     _t2\n0021:  JUMP_IF_ZERO ->0029\n0022:  LOAD_VAR     a\n0023:  PUSH_CONST   1\n0024:  SUB\n0025:  STORE_VAR    _t3\n0026:  LOAD_VAR     _t3\n0027:  STORE_VAR    a\n0028:  JUMP         ->0016\n0029:  LOAD_VAR     a\n0030:  PRINT\n0031:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 0\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\na               0           \nb               30          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (44 tokens generated)\nParser : SUCCESS",
      "recovery": "[1] [INSERTION] Inserted missing '0' at line 2, column 9\n    Recovery Cost : 2 | Confidence: MEDIUM\n    Rationale     : Missing expression after '='; inserted default literal '0'\n[2] [DELETION] Deleted unexpected token ';' at line 3, column 14\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Deleted redundant semicolon ';'\n[3] [INSERTION] Inserted missing ')' at line 4, column 12\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Inserted missing ')' before block delimiter '{'\n[4] [INSERTION] Inserted missing ';' at line 7, column 1\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Inserted missing ';' before next statement token '}'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 5",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: SEMICOLON | Lexeme: ';'\n[4] Line 3, Col 1 | Type: FLOAT | Lexeme: 'float'\n[5] Line 3, Col 7 | Type: IDENTIFIER | Lexeme: 'b'\n[6] Line 3, Col 9 | Type: ASSIGN | Lexeme: '='\n[7] Line 3, Col 11 | Type: NUMBER | Lexeme: '25'\n[8] Line 3, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 3, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 4, Col 1 | Type: IF | Lexeme: 'if'\n[11] Line 4, Col 4 | Type: LEFT_PAREN | Lexeme: '('\n[12] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[13] Line 4, Col 7 | Type: GREATER | Lexeme: '>'\n[14] Line 4, Col 9 | Type: NUMBER | Lexeme: '10'\n[15] Line 4, Col 12 | Type: LEFT_BRACE | Lexeme: '{'\n[16] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[17] Line 5, Col 7 | Type: ASSIGN | Lexeme: '='\n[18] Line 5, Col 9 | Type: IDENTIFIER | Lexeme: 'b'\n[19] Line 5, Col 11 | Type: PLUS | Lexeme: '+'\n[20] Line 5, Col 13 | Type: NUMBER | Lexeme: '5'\n[21] Line 5, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[22] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[23] Line 6, Col 7 | Type: ASSIGN | Lexeme: '='\n[24] Line 6, Col 9 | Type: NUMBER | Lexeme: '99'\n[25] Line 7, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[26] Line 8, Col 1 | Type: WHILE | Lexeme: 'while'\n[27] Line 8, Col 7 | Type: LEFT_PAREN | Lexeme: '('\n[28] Line 8, Col 8 | Type: IDENTIFIER | Lexeme: 'a'\n[29] Line 8, Col 10 | Type: GREATER | Lexeme: '>'\n[30] Line 8, Col 12 | Type: NUMBER | Lexeme: '0'\n[31] Line 8, Col 13 | Type: RIGHT_PAREN | Lexeme: ')'\n[32] Line 8, Col 15 | Type: LEFT_BRACE | Lexeme: '{'\n[33] Line 9, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[34] Line 9, Col 7 | Type: ASSIGN | Lexeme: '='\n[35] Line 9, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[36] Line 9, Col 11 | Type: MINUS | Lexeme: '-'\n[37] Line 9, Col 13 | Type: NUMBER | Lexeme: '1'\n[38] Line 9, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[39] Line 10, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[40] Line 11, Col 1 | Type: PRINT | Lexeme: 'print'\n[41] Line 11, Col 7 | Type: IDENTIFIER | Lexeme: 'a'\n[42] Line 11, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[43] Line 12, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Literal: 0\n  Declaration: float b\n    Literal: 25\n  If\n    Condition\n      Binary Expression: >\n        Identifier: b\n        Literal: 10\n    Then\n      Block\n        Assignment: b\n          Binary Expression: +\n            Identifier: b\n            Literal: 5\n        Assignment: a\n          Literal: 99\n  While\n    Condition\n      Binary Expression: >\n        Identifier: a\n        Literal: 0\n    Body\n      Block\n        Assignment: a\n          Binary Expression: -\n            Identifier: a\n            Literal: 1\n  Print\n    Identifier: a",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               float     0       L3:7",
      "tac": "a = 0\n    b = 25\n    _t0 = b > 10\n    ifFalse _t0 goto L1\n    _t1 = b + 5\n    b = _t1\n    a = 99\nL1:\nL2:\n    _t2 = a > 0\n    ifFalse _t2 goto L3\n    _t3 = a - 1\n    a = _t3\n    goto L2\nL3:\n    print a",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 1\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 2",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 0\n    movl    $0, -4(%ebp)\n\n    # TAC: b = 25\n    movl    $25, -8(%ebp)\n\n    # TAC: _t0 = 1\n    movl    $1, -12(%ebp)\n\n    # TAC: ifFalse _t0 goto L1\n    movl    -12(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L1\n\n    # TAC: _t1 = b + 5\n    movl    -8(%ebp), %eax\n    addl    $5, %eax\n    movl    %eax, -16(%ebp)\n\n    # TAC: b = _t1\n    movl    -16(%ebp), %eax\n    movl    %eax, -8(%ebp)\n\n    # TAC: a = 99\n    movl    $99, -4(%ebp)\n\n    # TAC: L1:\n.L1:\n\n    # TAC: L2:\n.L2:\n\n    # TAC: _t2 = a > 0\n    movl    -4(%ebp), %eax\n    cmpl    $0, %eax\n    setg    %al\n    movzbl  %al, %eax\n    movl    %eax, -20(%ebp)\n\n    # TAC: ifFalse _t2 goto L3\n    movl    -20(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L3\n\n    # TAC: _t3 = a - 1\n    movl    -4(%ebp), %eax\n    subl    $1, %eax\n    movl    %eax, -24(%ebp)\n\n    # TAC: a = _t3\n    movl    -24(%ebp), %eax\n    movl    %eax, -4(%ebp)\n\n    # TAC: goto L2\n    jmp     .L2\n\n    # TAC: L3:\n.L3:\n\n    # TAC: print a\n    movl    -4(%ebp), %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   0\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   25\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   1\n0005:  STORE_VAR    _t0\n0006:  LOAD_VAR     _t0\n0007:  JUMP_IF_ZERO ->0016\n0008:  LOAD_VAR     b\n0009:  PUSH_CONST   5\n0010:  ADD\n0011:  STORE_VAR    _t1\n0012:  LOAD_VAR     _t1\n0013:  STORE_VAR    b\n0014:  PUSH_CONST   99\n0015:  STORE_VAR    a\n0016:  LOAD_VAR     a\n0017:  PUSH_CONST   0\n0018:  GT\n0019:  STORE_VAR    _t2\n0020:  LOAD_VAR     _t2\n0021:  JUMP_IF_ZERO ->0029\n0022:  LOAD_VAR     a\n0023:  PUSH_CONST   1\n0024:  SUB\n0025:  STORE_VAR    _t3\n0026:  LOAD_VAR     _t3\n0027:  STORE_VAR    a\n0028:  JUMP         ->0016\n0029:  LOAD_VAR     a\n0030:  PRINT\n0031:  HALT",
      "vm": "[VM Output] 0\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\na               0           \nb               30          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 4,
          "line": 3,
          "column": 1,
          "type": "FLOAT",
          "lexeme": "float"
        },
        {
          "index": 5,
          "line": 3,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 6,
          "line": 3,
          "column": 9,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 7,
          "line": 3,
          "column": 11,
          "type": "NUMBER",
          "lexeme": "25"
        },
        {
          "index": 8,
          "line": 3,
          "column": 13,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 9,
          "line": 3,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 4,
          "column": 1,
          "type": "IF",
          "lexeme": "if"
        },
        {
          "index": 11,
          "line": 4,
          "column": 4,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 12,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 13,
          "line": 4,
          "column": 7,
          "type": "GREATER",
          "lexeme": ">"
        },
        {
          "index": 14,
          "line": 4,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 15,
          "line": 4,
          "column": 12,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 16,
          "line": 5,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 17,
          "line": 5,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 18,
          "line": 5,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 19,
          "line": 5,
          "column": 11,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 20,
          "line": 5,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "5"
        },
        {
          "index": 21,
          "line": 5,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 22,
          "line": 6,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 23,
          "line": 6,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 24,
          "line": 6,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "99"
        },
        {
          "index": 25,
          "line": 7,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 26,
          "line": 8,
          "column": 1,
          "type": "WHILE",
          "lexeme": "while"
        },
        {
          "index": 27,
          "line": 8,
          "column": 7,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 28,
          "line": 8,
          "column": 8,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 29,
          "line": 8,
          "column": 10,
          "type": "GREATER",
          "lexeme": ">"
        },
        {
          "index": 30,
          "line": 8,
          "column": 12,
          "type": "NUMBER",
          "lexeme": "0"
        },
        {
          "index": 31,
          "line": 8,
          "column": 13,
          "type": "RIGHT_PAREN",
          "lexeme": ")"
        },
        {
          "index": 32,
          "line": 8,
          "column": 15,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 33,
          "line": 9,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 34,
          "line": 9,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 35,
          "line": 9,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 36,
          "line": 9,
          "column": 11,
          "type": "MINUS",
          "lexeme": "-"
        },
        {
          "index": 37,
          "line": 9,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 38,
          "line": 9,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 39,
          "line": 10,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 40,
          "line": 11,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 41,
          "line": 11,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 42,
          "line": 11,
          "column": 8,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 43,
          "line": 12,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [
        {
          "id": 1,
          "strategy": "INSERTION",
          "message": "Inserted missing '0'",
          "line": 2,
          "column": 9,
          "cost": 2,
          "confidence": "MEDIUM",
          "rationale": "Missing expression after '='; inserted default literal '0'"
        },
        {
          "id": 2,
          "strategy": "DELETION",
          "message": "Deleted unexpected token ';'",
          "line": 3,
          "column": 14,
          "cost": 1,
          "confidence": "HIGH",
          "rationale": "Deleted redundant semicolon ';'"
        },
        {
          "id": 3,
          "strategy": "INSERTION",
          "message": "Inserted missing ')'",
          "line": 4,
          "column": 12,
          "cost": 1,
          "confidence": "HIGH",
          "rationale": "Inserted missing ')' before block delimiter '{'"
        },
        {
          "id": 4,
          "strategy": "INSERTION",
          "message": "Inserted missing ';'",
          "line": 7,
          "column": 1,
          "cost": 1,
          "confidence": "HIGH",
          "rationale": "Inserted missing ';' before next statement token '}'"
        }
      ],
      "recoveryTotalCost": 5,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "b",
          "type": "float",
          "scope": "0",
          "declaredAt": "L3:7"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 1,
        "algebraic": 0,
        "deadEliminated": 0,
        "total": 2
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "25"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "_t0"
        },
        {
          "address": "0006",
          "opcode": "LOAD_VAR",
          "arg": "_t0"
        },
        {
          "address": "0007",
          "opcode": "JUMP_IF_ZERO",
          "arg": "->0016"
        },
        {
          "address": "0008",
          "opcode": "LOAD_VAR",
          "arg": "b"
        },
        {
          "address": "0009",
          "opcode": "PUSH_CONST",
          "arg": "5"
        },
        {
          "address": "0010",
          "opcode": "ADD",
          "arg": ""
        },
        {
          "address": "0011",
          "opcode": "STORE_VAR",
          "arg": "_t1"
        },
        {
          "address": "0012",
          "opcode": "LOAD_VAR",
          "arg": "_t1"
        },
        {
          "address": "0013",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0014",
          "opcode": "PUSH_CONST",
          "arg": "99"
        },
        {
          "address": "0015",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0016",
          "opcode": "LOAD_VAR",
          "arg": "a"
        },
        {
          "address": "0017",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0018",
          "opcode": "GT",
          "arg": ""
        },
        {
          "address": "0019",
          "opcode": "STORE_VAR",
          "arg": "_t2"
        },
        {
          "address": "0020",
          "opcode": "LOAD_VAR",
          "arg": "_t2"
        },
        {
          "address": "0021",
          "opcode": "JUMP_IF_ZERO",
          "arg": "->0029"
        },
        {
          "address": "0022",
          "opcode": "LOAD_VAR",
          "arg": "a"
        },
        {
          "address": "0023",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0024",
          "opcode": "SUB",
          "arg": ""
        },
        {
          "address": "0025",
          "opcode": "STORE_VAR",
          "arg": "_t3"
        },
        {
          "address": "0026",
          "opcode": "LOAD_VAR",
          "arg": "_t3"
        },
        {
          "address": "0027",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0028",
          "opcode": "JUMP",
          "arg": "->0016"
        },
        {
          "address": "0029",
          "opcode": "LOAD_VAR",
          "arg": "a"
        },
        {
          "address": "0030",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0031",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "0"
      ],
      "vmVariables": [
        {
          "name": "a",
          "value": "0"
        },
        {
          "name": "b",
          "value": "30"
        }
      ],
      "hasRecovery": true,
      "hasSemanticErrors": false,
      "optTac": "a = 0\n    b = 25\n    _t0 = 1\n    ifFalse _t0 goto L1\n    _t1 = b + 5\n    b = _t1\n    a = 99\nL1:\nL2:\n    _t2 = a > 0\n    ifFalse _t2 goto L3\n    _t3 = a - 1\n    a = _t3\n    goto L2\nL3:\n    print a"
    }
  },
  "missing_semicolon": {
    "source": "// Category G: Syntax Recovery - Missing Semicolon\nint a = 100\nint b = 200;\nint sum = a + b;\nprint sum;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\07_missing_semicolon.txt\n\n=== Source Code ===\n// Category G: Syntax Recovery - Missing Semicolon\nint a = 100\nint b = 200;\nint sum = a + b;\nprint sum;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (20 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report (1 recovery action) ===\n[1] [INSERTION] Inserted missing ';' at line 3, column 1\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Inserted missing ';' before next statement token 'int'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 1\n\n=== Lexical Tokens (20 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '100'\n[4] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[5] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[6] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[7] Line 3, Col 9 | Type: NUMBER | Lexeme: '200'\n[8] Line 3, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[10] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'sum'\n[11] Line 4, Col 9 | Type: ASSIGN | Lexeme: '='\n[12] Line 4, Col 11 | Type: IDENTIFIER | Lexeme: 'a'\n[13] Line 4, Col 13 | Type: PLUS | Lexeme: '+'\n[14] Line 4, Col 15 | Type: IDENTIFIER | Lexeme: 'b'\n[15] Line 4, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[16] Line 5, Col 1 | Type: PRINT | Lexeme: 'print'\n[17] Line 5, Col 7 | Type: IDENTIFIER | Lexeme: 'sum'\n[18] Line 5, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 6, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Literal: 100\n  Declaration: int b\n    Literal: 200\n  Declaration: int sum\n    Binary Expression: +\n      Identifier: a\n      Identifier: b\n  Print\n    Identifier: sum\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nsum             int       0       L4:5        \n\n=== Three-Address Code (TAC) ===\n    a = 100\n    b = 200\n    _t0 = a + b\n    sum = _t0\n    print sum\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 4\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 6\n\n=== Optimized Three-Address Code ===\n    a = 100\n    b = 200\n    sum = 300\n    print 300\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 100\n    movl    $100, -4(%ebp)\n\n    # TAC: b = 200\n    movl    $200, -8(%ebp)\n\n    # TAC: sum = 300\n    movl    $300, -12(%ebp)\n\n    # TAC: print 300\n    movl    $300, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   100\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   200\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   300\n0005:  STORE_VAR    sum\n0006:  PUSH_CONST   300\n0007:  PRINT\n0008:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 300\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nsum             300         \nb               200         \na               100         \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (20 tokens generated)\nParser : SUCCESS",
      "recovery": "[1] [INSERTION] Inserted missing ';' at line 3, column 1\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Inserted missing ';' before next statement token 'int'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 1",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '100'\n[4] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[5] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[6] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[7] Line 3, Col 9 | Type: NUMBER | Lexeme: '200'\n[8] Line 3, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[10] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'sum'\n[11] Line 4, Col 9 | Type: ASSIGN | Lexeme: '='\n[12] Line 4, Col 11 | Type: IDENTIFIER | Lexeme: 'a'\n[13] Line 4, Col 13 | Type: PLUS | Lexeme: '+'\n[14] Line 4, Col 15 | Type: IDENTIFIER | Lexeme: 'b'\n[15] Line 4, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[16] Line 5, Col 1 | Type: PRINT | Lexeme: 'print'\n[17] Line 5, Col 7 | Type: IDENTIFIER | Lexeme: 'sum'\n[18] Line 5, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 6, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Literal: 100\n  Declaration: int b\n    Literal: 200\n  Declaration: int sum\n    Binary Expression: +\n      Identifier: a\n      Identifier: b\n  Print\n    Identifier: sum",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nsum             int       0       L4:5",
      "tac": "a = 100\n    b = 200\n    _t0 = a + b\n    sum = _t0\n    print sum",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 4\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 6",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 100\n    movl    $100, -4(%ebp)\n\n    # TAC: b = 200\n    movl    $200, -8(%ebp)\n\n    # TAC: sum = 300\n    movl    $300, -12(%ebp)\n\n    # TAC: print 300\n    movl    $300, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   100\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   200\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   300\n0005:  STORE_VAR    sum\n0006:  PUSH_CONST   300\n0007:  PRINT\n0008:  HALT",
      "vm": "[VM Output] 300\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nsum             300         \nb               200         \na               100         \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "100"
        },
        {
          "index": 4,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 5,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 6,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 7,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "200"
        },
        {
          "index": 8,
          "line": 3,
          "column": 12,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 9,
          "line": 4,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 10,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "sum"
        },
        {
          "index": 11,
          "line": 4,
          "column": 9,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 12,
          "line": 4,
          "column": 11,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 13,
          "line": 4,
          "column": 13,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 14,
          "line": 4,
          "column": 15,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 15,
          "line": 4,
          "column": 16,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 16,
          "line": 5,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 17,
          "line": 5,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "sum"
        },
        {
          "index": 18,
          "line": 5,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 19,
          "line": 6,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [
        {
          "id": 1,
          "strategy": "INSERTION",
          "message": "Inserted missing ';'",
          "line": 3,
          "column": 1,
          "cost": 1,
          "confidence": "HIGH",
          "rationale": "Inserted missing ';' before next statement token 'int'"
        }
      ],
      "recoveryTotalCost": 1,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "b",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        },
        {
          "name": "sum",
          "type": "int",
          "scope": "0",
          "declaredAt": "L4:5"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 4,
        "algebraic": 0,
        "deadEliminated": 1,
        "total": 6
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "100"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "200"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "300"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "sum"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "300"
        },
        {
          "address": "0007",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0008",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "300"
      ],
      "vmVariables": [
        {
          "name": "sum",
          "value": "300"
        },
        {
          "name": "b",
          "value": "200"
        },
        {
          "name": "a",
          "value": "100"
        }
      ],
      "hasRecovery": true,
      "hasSemanticErrors": false,
      "optTac": "a = 100\n    b = 200\n    sum = 300\n    print 300"
    }
  },
  "unexpected_token": {
    "source": "// Category H: Syntax Recovery - Unexpected Token Deletion\nint a = 50;;\nint b = 25;\nint c = a + b;\nprint c;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\08_unexpected_token.txt\n\n=== Source Code ===\n// Category H: Syntax Recovery - Unexpected Token Deletion\nint a = 50;;\nint b = 25;\nint c = a + b;\nprint c;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (22 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report (1 recovery action) ===\n[1] [DELETION] Deleted unexpected token ';' at line 2, column 12\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Deleted redundant semicolon ';'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 1\n\n=== Lexical Tokens (22 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '50'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[6] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[7] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[8] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[9] Line 3, Col 9 | Type: NUMBER | Lexeme: '25'\n[10] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[11] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[12] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'c'\n[13] Line 4, Col 7 | Type: ASSIGN | Lexeme: '='\n[14] Line 4, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[15] Line 4, Col 11 | Type: PLUS | Lexeme: '+'\n[16] Line 4, Col 13 | Type: IDENTIFIER | Lexeme: 'b'\n[17] Line 4, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[18] Line 5, Col 1 | Type: PRINT | Lexeme: 'print'\n[19] Line 5, Col 7 | Type: IDENTIFIER | Lexeme: 'c'\n[20] Line 5, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[21] Line 6, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Literal: 50\n  Declaration: int b\n    Literal: 25\n  Declaration: int c\n    Binary Expression: +\n      Identifier: a\n      Identifier: b\n  Print\n    Identifier: c\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nc               int       0       L4:5        \n\n=== Three-Address Code (TAC) ===\n    a = 50\n    b = 25\n    _t0 = a + b\n    c = _t0\n    print c\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 4\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 6\n\n=== Optimized Three-Address Code ===\n    a = 50\n    b = 25\n    c = 75\n    print 75\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 50\n    movl    $50, -4(%ebp)\n\n    # TAC: b = 25\n    movl    $25, -8(%ebp)\n\n    # TAC: c = 75\n    movl    $75, -12(%ebp)\n\n    # TAC: print 75\n    movl    $75, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   50\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   25\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   75\n0005:  STORE_VAR    c\n0006:  PUSH_CONST   75\n0007:  PRINT\n0008:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 75\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nc               75          \nb               25          \na               50          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (22 tokens generated)\nParser : SUCCESS",
      "recovery": "[1] [DELETION] Deleted unexpected token ';' at line 2, column 12\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Deleted redundant semicolon ';'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 1",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '50'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[6] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[7] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[8] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[9] Line 3, Col 9 | Type: NUMBER | Lexeme: '25'\n[10] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[11] Line 4, Col 1 | Type: INT | Lexeme: 'int'\n[12] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'c'\n[13] Line 4, Col 7 | Type: ASSIGN | Lexeme: '='\n[14] Line 4, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[15] Line 4, Col 11 | Type: PLUS | Lexeme: '+'\n[16] Line 4, Col 13 | Type: IDENTIFIER | Lexeme: 'b'\n[17] Line 4, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[18] Line 5, Col 1 | Type: PRINT | Lexeme: 'print'\n[19] Line 5, Col 7 | Type: IDENTIFIER | Lexeme: 'c'\n[20] Line 5, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[21] Line 6, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Literal: 50\n  Declaration: int b\n    Literal: 25\n  Declaration: int c\n    Binary Expression: +\n      Identifier: a\n      Identifier: b\n  Print\n    Identifier: c",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \nb               int       0       L3:5        \nc               int       0       L4:5",
      "tac": "a = 50\n    b = 25\n    _t0 = a + b\n    c = _t0\n    print c",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 4\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 6",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 50\n    movl    $50, -4(%ebp)\n\n    # TAC: b = 25\n    movl    $25, -8(%ebp)\n\n    # TAC: c = 75\n    movl    $75, -12(%ebp)\n\n    # TAC: print 75\n    movl    $75, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   50\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   25\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   75\n0005:  STORE_VAR    c\n0006:  PUSH_CONST   75\n0007:  PRINT\n0008:  HALT",
      "vm": "[VM Output] 75\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nc               75          \nb               25          \na               50          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "50"
        },
        {
          "index": 4,
          "line": 2,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 2,
          "column": 12,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 6,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 7,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 8,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 9,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "25"
        },
        {
          "index": 10,
          "line": 3,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 11,
          "line": 4,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 12,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 13,
          "line": 4,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 14,
          "line": 4,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 15,
          "line": 4,
          "column": 11,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 16,
          "line": 4,
          "column": 13,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 17,
          "line": 4,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 18,
          "line": 5,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 19,
          "line": 5,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 20,
          "line": 5,
          "column": 8,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 21,
          "line": 6,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [
        {
          "id": 1,
          "strategy": "DELETION",
          "message": "Deleted unexpected token ';'",
          "line": 2,
          "column": 12,
          "cost": 1,
          "confidence": "HIGH",
          "rationale": "Deleted redundant semicolon ';'"
        }
      ],
      "recoveryTotalCost": 1,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "b",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        },
        {
          "name": "c",
          "type": "int",
          "scope": "0",
          "declaredAt": "L4:5"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 4,
        "algebraic": 0,
        "deadEliminated": 1,
        "total": 6
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "25"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "75"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "c"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "75"
        },
        {
          "address": "0007",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0008",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "75"
      ],
      "vmVariables": [
        {
          "name": "c",
          "value": "75"
        },
        {
          "name": "b",
          "value": "25"
        },
        {
          "name": "a",
          "value": "50"
        }
      ],
      "hasRecovery": true,
      "hasSemanticErrors": false,
      "optTac": "a = 50\n    b = 25\n    c = 75\n    print 75"
    }
  },
  "missing_delimiter": {
    "source": "int x = 10;\nif (x > 5 {\n    x = x + 2;\n}\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\tests\\04_missing_delimiter.txt\n\n=== Source Code ===\nint x = 10;\nif (x > 5 {\n    x = x + 2;\n}\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (19 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report (1 recovery action) ===\n[1] [INSERTION] Inserted missing ')' at line 2, column 11\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Inserted missing ')' before block delimiter '{'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 1\n\n=== Lexical Tokens (19 tokens) ===\n[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 1, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 1 | Type: IF | Lexeme: 'if'\n[6] Line 2, Col 4 | Type: LEFT_PAREN | Lexeme: '('\n[7] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[8] Line 2, Col 7 | Type: GREATER | Lexeme: '>'\n[9] Line 2, Col 9 | Type: NUMBER | Lexeme: '5'\n[10] Line 2, Col 11 | Type: LEFT_BRACE | Lexeme: '{'\n[11] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[12] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[13] Line 3, Col 9 | Type: IDENTIFIER | Lexeme: 'x'\n[14] Line 3, Col 11 | Type: PLUS | Lexeme: '+'\n[15] Line 3, Col 13 | Type: NUMBER | Lexeme: '2'\n[16] Line 3, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[17] Line 4, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[18] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int x\n    Literal: 10\n  If\n    Condition\n      Binary Expression: >\n        Identifier: x\n        Literal: 5\n    Then\n      Block\n        Assignment: x\n          Binary Expression: +\n            Identifier: x\n            Literal: 2\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \n\n=== Three-Address Code (TAC) ===\n    x = 10\n    _t0 = x > 5\n    ifFalse _t0 goto L1\n    _t1 = x + 2\n    x = _t1\nL1:\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 1\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 2\n\n=== Optimized Three-Address Code ===\n    x = 10\n    _t0 = 1\n    ifFalse _t0 goto L1\n    _t1 = x + 2\n    x = _t1\nL1:\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: _t0 = 1\n    movl    $1, -8(%ebp)\n\n    # TAC: ifFalse _t0 goto L1\n    movl    -8(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L1\n\n    # TAC: _t1 = x + 2\n    movl    -4(%ebp), %eax\n    addl    $2, %eax\n    movl    %eax, -12(%ebp)\n\n    # TAC: x = _t1\n    movl    -12(%ebp), %eax\n    movl    %eax, -4(%ebp)\n\n    # TAC: L1:\n.L1:\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   10\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   1\n0003:  STORE_VAR    _t0\n0004:  LOAD_VAR     _t0\n0005:  JUMP_IF_ZERO ->0012\n0006:  LOAD_VAR     x\n0007:  PUSH_CONST   2\n0008:  ADD\n0009:  STORE_VAR    _t1\n0010:  LOAD_VAR     _t1\n0011:  STORE_VAR    x\n0012:  HALT\n\n=== Virtual Machine Execution ===\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nx               12          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (19 tokens generated)\nParser : SUCCESS",
      "recovery": "[1] [INSERTION] Inserted missing ')' at line 2, column 11\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Inserted missing ')' before block delimiter '{'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 1",
      "tokens": "[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 1, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 1 | Type: IF | Lexeme: 'if'\n[6] Line 2, Col 4 | Type: LEFT_PAREN | Lexeme: '('\n[7] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[8] Line 2, Col 7 | Type: GREATER | Lexeme: '>'\n[9] Line 2, Col 9 | Type: NUMBER | Lexeme: '5'\n[10] Line 2, Col 11 | Type: LEFT_BRACE | Lexeme: '{'\n[11] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[12] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[13] Line 3, Col 9 | Type: IDENTIFIER | Lexeme: 'x'\n[14] Line 3, Col 11 | Type: PLUS | Lexeme: '+'\n[15] Line 3, Col 13 | Type: NUMBER | Lexeme: '2'\n[16] Line 3, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[17] Line 4, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[18] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int x\n    Literal: 10\n  If\n    Condition\n      Binary Expression: >\n        Identifier: x\n        Literal: 5\n    Then\n      Block\n        Assignment: x\n          Binary Expression: +\n            Identifier: x\n            Literal: 2",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5",
      "tac": "x = 10\n    _t0 = x > 5\n    ifFalse _t0 goto L1\n    _t1 = x + 2\n    x = _t1\nL1:",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 1\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 2",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: _t0 = 1\n    movl    $1, -8(%ebp)\n\n    # TAC: ifFalse _t0 goto L1\n    movl    -8(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L1\n\n    # TAC: _t1 = x + 2\n    movl    -4(%ebp), %eax\n    addl    $2, %eax\n    movl    %eax, -12(%ebp)\n\n    # TAC: x = _t1\n    movl    -12(%ebp), %eax\n    movl    %eax, -4(%ebp)\n\n    # TAC: L1:\n.L1:\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   10\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   1\n0003:  STORE_VAR    _t0\n0004:  LOAD_VAR     _t0\n0005:  JUMP_IF_ZERO ->0012\n0006:  LOAD_VAR     x\n0007:  PUSH_CONST   2\n0008:  ADD\n0009:  STORE_VAR    _t1\n0010:  LOAD_VAR     _t1\n0011:  STORE_VAR    x\n0012:  HALT",
      "vm": "=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nx               12          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 1,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 1,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 2,
          "line": 1,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 1,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 4,
          "line": 1,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 2,
          "column": 1,
          "type": "IF",
          "lexeme": "if"
        },
        {
          "index": 6,
          "line": 2,
          "column": 4,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 7,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 8,
          "line": 2,
          "column": 7,
          "type": "GREATER",
          "lexeme": ">"
        },
        {
          "index": 9,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "5"
        },
        {
          "index": 10,
          "line": 2,
          "column": 11,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 11,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 12,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 13,
          "line": 3,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 14,
          "line": 3,
          "column": 11,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 15,
          "line": 3,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "2"
        },
        {
          "index": 16,
          "line": 3,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 17,
          "line": 4,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 18,
          "line": 5,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [
        {
          "id": 1,
          "strategy": "INSERTION",
          "message": "Inserted missing ')'",
          "line": 2,
          "column": 11,
          "cost": 1,
          "confidence": "HIGH",
          "rationale": "Inserted missing ')' before block delimiter '{'"
        }
      ],
      "recoveryTotalCost": 1,
      "symbolsList": [
        {
          "name": "x",
          "type": "int",
          "scope": "0",
          "declaredAt": "L1:5"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 1,
        "algebraic": 0,
        "deadEliminated": 0,
        "total": 2
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "10"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "_t0"
        },
        {
          "address": "0004",
          "opcode": "LOAD_VAR",
          "arg": "_t0"
        },
        {
          "address": "0005",
          "opcode": "JUMP_IF_ZERO",
          "arg": "->0012"
        },
        {
          "address": "0006",
          "opcode": "LOAD_VAR",
          "arg": "x"
        },
        {
          "address": "0007",
          "opcode": "PUSH_CONST",
          "arg": "2"
        },
        {
          "address": "0008",
          "opcode": "ADD",
          "arg": ""
        },
        {
          "address": "0009",
          "opcode": "STORE_VAR",
          "arg": "_t1"
        },
        {
          "address": "0010",
          "opcode": "LOAD_VAR",
          "arg": "_t1"
        },
        {
          "address": "0011",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0012",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [],
      "vmVariables": [
        {
          "name": "x",
          "value": "12"
        }
      ],
      "hasRecovery": true,
      "hasSemanticErrors": false,
      "optTac": "x = 10\n    _t0 = 1\n    ifFalse _t0 goto L1\n    _t1 = x + 2\n    x = _t1\nL1:"
    }
  },
  "panic_mode": {
    "source": "int a = 10;\n@#$% illegal garbage tokens here ;\nint b = 20;\nb = b + a;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\tests\\06_panic_mode_recovery.txt\n\n=== Source Code ===\nint a = 10;\n@#$% illegal garbage tokens here ;\nint b = 20;\nb = b + a;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (26 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report (1 recovery action) ===\n[1] [PANIC MODE] Skipped 9 token(s) to synchronize on safe boundary (';') at line 2, column 1\n    Recovery Cost : 5 | Confidence: LOW\n    Rationale     : Unexpected token '@' at line 2, column 1\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 5\n\n=== Lexical Tokens (26 tokens) ===\n[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 1, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 1 | Type: UNKNOWN | Lexeme: '@'\n[6] Line 2, Col 2 | Type: UNKNOWN | Lexeme: '#'\n[7] Line 2, Col 3 | Type: UNKNOWN | Lexeme: '$'\n[8] Line 2, Col 4 | Type: MODULO | Lexeme: '%'\n[9] Line 2, Col 6 | Type: IDENTIFIER | Lexeme: 'illegal'\n[10] Line 2, Col 14 | Type: IDENTIFIER | Lexeme: 'garbage'\n[11] Line 2, Col 22 | Type: IDENTIFIER | Lexeme: 'tokens'\n[12] Line 2, Col 29 | Type: IDENTIFIER | Lexeme: 'here'\n[13] Line 2, Col 34 | Type: SEMICOLON | Lexeme: ';'\n[14] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[15] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[16] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[17] Line 3, Col 9 | Type: NUMBER | Lexeme: '20'\n[18] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 4, Col 1 | Type: IDENTIFIER | Lexeme: 'b'\n[20] Line 4, Col 3 | Type: ASSIGN | Lexeme: '='\n[21] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[22] Line 4, Col 7 | Type: PLUS | Lexeme: '+'\n[23] Line 4, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[24] Line 4, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[25] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Literal: 10\n  Declaration: int b\n    Literal: 20\n  Assignment: b\n    Binary Expression: +\n      Identifier: b\n      Identifier: a\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L1:5        \nb               int       0       L3:5        \n\n=== Three-Address Code (TAC) ===\n    a = 10\n    b = 20\n    _t0 = b + a\n    b = _t0\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 3\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 5\n\n=== Optimized Three-Address Code ===\n    a = 10\n    b = 20\n    b = 30\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: b = 20\n    movl    $20, -8(%ebp)\n\n    # TAC: b = 30\n    movl    $30, -8(%ebp)\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   10\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   20\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   30\n0005:  STORE_VAR    b\n0006:  HALT\n\n=== Virtual Machine Execution ===\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nb               30          \na               10          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (26 tokens generated)\nParser : SUCCESS",
      "recovery": "[1] [PANIC MODE] Skipped 9 token(s) to synchronize on safe boundary (';') at line 2, column 1\n    Recovery Cost : 5 | Confidence: LOW\n    Rationale     : Unexpected token '@' at line 2, column 1\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 5",
      "tokens": "[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 1, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 1 | Type: UNKNOWN | Lexeme: '@'\n[6] Line 2, Col 2 | Type: UNKNOWN | Lexeme: '#'\n[7] Line 2, Col 3 | Type: UNKNOWN | Lexeme: '$'\n[8] Line 2, Col 4 | Type: MODULO | Lexeme: '%'\n[9] Line 2, Col 6 | Type: IDENTIFIER | Lexeme: 'illegal'\n[10] Line 2, Col 14 | Type: IDENTIFIER | Lexeme: 'garbage'\n[11] Line 2, Col 22 | Type: IDENTIFIER | Lexeme: 'tokens'\n[12] Line 2, Col 29 | Type: IDENTIFIER | Lexeme: 'here'\n[13] Line 2, Col 34 | Type: SEMICOLON | Lexeme: ';'\n[14] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[15] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[16] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[17] Line 3, Col 9 | Type: NUMBER | Lexeme: '20'\n[18] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 4, Col 1 | Type: IDENTIFIER | Lexeme: 'b'\n[20] Line 4, Col 3 | Type: ASSIGN | Lexeme: '='\n[21] Line 4, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[22] Line 4, Col 7 | Type: PLUS | Lexeme: '+'\n[23] Line 4, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[24] Line 4, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[25] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Literal: 10\n  Declaration: int b\n    Literal: 20\n  Assignment: b\n    Binary Expression: +\n      Identifier: b\n      Identifier: a",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L1:5        \nb               int       0       L3:5",
      "tac": "a = 10\n    b = 20\n    _t0 = b + a\n    b = _t0",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 3\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 5",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: b = 20\n    movl    $20, -8(%ebp)\n\n    # TAC: b = 30\n    movl    $30, -8(%ebp)\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   10\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   20\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   30\n0005:  STORE_VAR    b\n0006:  HALT",
      "vm": "=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nb               30          \na               10          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 1,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 1,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 1,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 1,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 4,
          "line": 1,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 2,
          "column": 1,
          "type": "UNKNOWN",
          "lexeme": "@"
        },
        {
          "index": 6,
          "line": 2,
          "column": 2,
          "type": "UNKNOWN",
          "lexeme": "#"
        },
        {
          "index": 7,
          "line": 2,
          "column": 3,
          "type": "UNKNOWN",
          "lexeme": "$"
        },
        {
          "index": 8,
          "line": 2,
          "column": 4,
          "type": "MODULO",
          "lexeme": "%"
        },
        {
          "index": 9,
          "line": 2,
          "column": 6,
          "type": "IDENTIFIER",
          "lexeme": "illegal"
        },
        {
          "index": 10,
          "line": 2,
          "column": 14,
          "type": "IDENTIFIER",
          "lexeme": "garbage"
        },
        {
          "index": 11,
          "line": 2,
          "column": 22,
          "type": "IDENTIFIER",
          "lexeme": "tokens"
        },
        {
          "index": 12,
          "line": 2,
          "column": 29,
          "type": "IDENTIFIER",
          "lexeme": "here"
        },
        {
          "index": 13,
          "line": 2,
          "column": 34,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 14,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 15,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 16,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 17,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "20"
        },
        {
          "index": 18,
          "line": 3,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 19,
          "line": 4,
          "column": 1,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 20,
          "line": 4,
          "column": 3,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 21,
          "line": 4,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 22,
          "line": 4,
          "column": 7,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 23,
          "line": 4,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 24,
          "line": 4,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 25,
          "line": 5,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [
        {
          "id": 1,
          "strategy": "PANIC MODE",
          "message": "Skipped 9 token(s) to synchronize on safe boundary (';')",
          "line": 2,
          "column": 1,
          "cost": 5,
          "confidence": "LOW",
          "rationale": "Unexpected token '@' at line 2, column 1"
        }
      ],
      "recoveryTotalCost": 5,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L1:5"
        },
        {
          "name": "b",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 3,
        "algebraic": 0,
        "deadEliminated": 1,
        "total": 5
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "10"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "20"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "30"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0006",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [],
      "vmVariables": [
        {
          "name": "b",
          "value": "30"
        },
        {
          "name": "a",
          "value": "10"
        }
      ],
      "hasRecovery": true,
      "hasSemanticErrors": false,
      "optTac": "a = 10\n    b = 20\n    b = 30"
    }
  },
  "nested_scopes": {
    "source": "int x = 100;\n{\n    int x = 50;\n    int y = 20;\n    print x;\n}\nprint x;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\tests\\10_nested_scopes.txt\n\n=== Source Code ===\nint x = 100;\n{\n    int x = 50;\n    int y = 20;\n    print x;\n}\nprint x;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (24 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (24 tokens) ===\n[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '100'\n[4] Line 1, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 1 | Type: LEFT_BRACE | Lexeme: '{'\n[6] Line 3, Col 5 | Type: INT | Lexeme: 'int'\n[7] Line 3, Col 9 | Type: IDENTIFIER | Lexeme: 'x'\n[8] Line 3, Col 11 | Type: ASSIGN | Lexeme: '='\n[9] Line 3, Col 13 | Type: NUMBER | Lexeme: '50'\n[10] Line 3, Col 15 | Type: SEMICOLON | Lexeme: ';'\n[11] Line 4, Col 5 | Type: INT | Lexeme: 'int'\n[12] Line 4, Col 9 | Type: IDENTIFIER | Lexeme: 'y'\n[13] Line 4, Col 11 | Type: ASSIGN | Lexeme: '='\n[14] Line 4, Col 13 | Type: NUMBER | Lexeme: '20'\n[15] Line 4, Col 15 | Type: SEMICOLON | Lexeme: ';'\n[16] Line 5, Col 5 | Type: PRINT | Lexeme: 'print'\n[17] Line 5, Col 11 | Type: IDENTIFIER | Lexeme: 'x'\n[18] Line 5, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 6, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[20] Line 7, Col 1 | Type: PRINT | Lexeme: 'print'\n[21] Line 7, Col 7 | Type: IDENTIFIER | Lexeme: 'x'\n[22] Line 7, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[23] Line 8, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int x\n    Literal: 100\n  Block\n    Declaration: int x\n      Literal: 50\n    Declaration: int y\n      Literal: 20\n    Print\n      Identifier: x\n  Print\n    Identifier: x\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \nx               int       1       L3:9        \ny               int       1       L4:9        \n\n=== Three-Address Code (TAC) ===\n    x = 100\n    x = 50\n    y = 20\n    print x\n    print x\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 0\n  Constant Operands Propagated   : 2\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 2\n\n=== Optimized Three-Address Code ===\n    x = 100\n    x = 50\n    y = 20\n    print 50\n    print 50\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 100\n    movl    $100, -4(%ebp)\n\n    # TAC: x = 50\n    movl    $50, -4(%ebp)\n\n    # TAC: y = 20\n    movl    $20, -8(%ebp)\n\n    # TAC: print 50\n    movl    $50, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 50\n    movl    $50, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   100\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   50\n0003:  STORE_VAR    x\n0004:  PUSH_CONST   20\n0005:  STORE_VAR    y\n0006:  PUSH_CONST   50\n0007:  PRINT\n0008:  PUSH_CONST   50\n0009:  PRINT\n0010:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 50\n[VM Output] 50\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ny               20          \nx               50          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (24 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '100'\n[4] Line 1, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 1 | Type: LEFT_BRACE | Lexeme: '{'\n[6] Line 3, Col 5 | Type: INT | Lexeme: 'int'\n[7] Line 3, Col 9 | Type: IDENTIFIER | Lexeme: 'x'\n[8] Line 3, Col 11 | Type: ASSIGN | Lexeme: '='\n[9] Line 3, Col 13 | Type: NUMBER | Lexeme: '50'\n[10] Line 3, Col 15 | Type: SEMICOLON | Lexeme: ';'\n[11] Line 4, Col 5 | Type: INT | Lexeme: 'int'\n[12] Line 4, Col 9 | Type: IDENTIFIER | Lexeme: 'y'\n[13] Line 4, Col 11 | Type: ASSIGN | Lexeme: '='\n[14] Line 4, Col 13 | Type: NUMBER | Lexeme: '20'\n[15] Line 4, Col 15 | Type: SEMICOLON | Lexeme: ';'\n[16] Line 5, Col 5 | Type: PRINT | Lexeme: 'print'\n[17] Line 5, Col 11 | Type: IDENTIFIER | Lexeme: 'x'\n[18] Line 5, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 6, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[20] Line 7, Col 1 | Type: PRINT | Lexeme: 'print'\n[21] Line 7, Col 7 | Type: IDENTIFIER | Lexeme: 'x'\n[22] Line 7, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[23] Line 8, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int x\n    Literal: 100\n  Block\n    Declaration: int x\n      Literal: 50\n    Declaration: int y\n      Literal: 20\n    Print\n      Identifier: x\n  Print\n    Identifier: x",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \nx               int       1       L3:9        \ny               int       1       L4:9",
      "tac": "x = 100\n    x = 50\n    y = 20\n    print x\n    print x",
      "opt": "Constant Operations Folded     : 0\n  Constant Operands Propagated   : 2\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 0\n  Total Optimizations Applied    : 2",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 100\n    movl    $100, -4(%ebp)\n\n    # TAC: x = 50\n    movl    $50, -4(%ebp)\n\n    # TAC: y = 20\n    movl    $20, -8(%ebp)\n\n    # TAC: print 50\n    movl    $50, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # TAC: print 50\n    movl    $50, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   100\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   50\n0003:  STORE_VAR    x\n0004:  PUSH_CONST   20\n0005:  STORE_VAR    y\n0006:  PUSH_CONST   50\n0007:  PRINT\n0008:  PUSH_CONST   50\n0009:  PRINT\n0010:  HALT",
      "vm": "[VM Output] 50\n[VM Output] 50\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ny               20          \nx               50          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 1,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 1,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 2,
          "line": 1,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 1,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "100"
        },
        {
          "index": 4,
          "line": 1,
          "column": 12,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 2,
          "column": 1,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 6,
          "line": 3,
          "column": 5,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 7,
          "line": 3,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 8,
          "line": 3,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 9,
          "line": 3,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "50"
        },
        {
          "index": 10,
          "line": 3,
          "column": 15,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 11,
          "line": 4,
          "column": 5,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 12,
          "line": 4,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "y"
        },
        {
          "index": 13,
          "line": 4,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 14,
          "line": 4,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "20"
        },
        {
          "index": 15,
          "line": 4,
          "column": 15,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 16,
          "line": 5,
          "column": 5,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 17,
          "line": 5,
          "column": 11,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 18,
          "line": 5,
          "column": 12,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 19,
          "line": 6,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 20,
          "line": 7,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 21,
          "line": 7,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 22,
          "line": 7,
          "column": 8,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 23,
          "line": 8,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "x",
          "type": "int",
          "scope": "0",
          "declaredAt": "L1:5"
        },
        {
          "name": "x",
          "type": "int",
          "scope": "1",
          "declaredAt": "L3:9"
        },
        {
          "name": "y",
          "type": "int",
          "scope": "1",
          "declaredAt": "L4:9"
        }
      ],
      "optSummary": {
        "folded": 0,
        "propagated": 2,
        "algebraic": 0,
        "deadEliminated": 0,
        "total": 2
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "100"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "20"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "y"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0007",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0008",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0009",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0010",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "50",
        "50"
      ],
      "vmVariables": [
        {
          "name": "y",
          "value": "20"
        },
        {
          "name": "x",
          "value": "50"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "x = 100\n    x = 50\n    y = 20\n    print 50\n    print 50"
    }
  },
  "semantic_undeclared": {
    "source": "// Category I: Semantic Analysis - Undeclared Identifier Rejection\nint a = 10;\na = b + 5;\nprint a;\n",
    "success": false,
    "exitCode": 1,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\09_undeclared_identifier.txt\n\n=== Source Code ===\n// Category I: Semantic Analysis - Undeclared Identifier Rejection\nint a = 10;\na = b + 5;\nprint a;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (15 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (15 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: IDENTIFIER | Lexeme: 'a'\n[6] Line 3, Col 3 | Type: ASSIGN | Lexeme: '='\n[7] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[8] Line 3, Col 7 | Type: PLUS | Lexeme: '+'\n[9] Line 3, Col 9 | Type: NUMBER | Lexeme: '5'\n[10] Line 3, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[11] Line 4, Col 1 | Type: PRINT | Lexeme: 'print'\n[12] Line 4, Col 7 | Type: IDENTIFIER | Lexeme: 'a'\n[13] Line 4, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[14] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Literal: 10\n  Assignment: a\n    Binary Expression: +\n      Identifier: b\n      Literal: 5\n  Print\n    Identifier: a\n\n=== Semantic Analysis Report ===\nStatus: FAILED (1 semantic error)\n[1] [Semantic Error] Line 3, Col 5: Undeclared identifier 'b' used in expression\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5        \n\n\n[Compilation Stopped]: Code contains semantic errors. IR and Code Generation skipped.\n",
    "sections": {
      "status": "Lexer  : SUCCESS (15 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: IDENTIFIER | Lexeme: 'a'\n[6] Line 3, Col 3 | Type: ASSIGN | Lexeme: '='\n[7] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[8] Line 3, Col 7 | Type: PLUS | Lexeme: '+'\n[9] Line 3, Col 9 | Type: NUMBER | Lexeme: '5'\n[10] Line 3, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[11] Line 4, Col 1 | Type: PRINT | Lexeme: 'print'\n[12] Line 4, Col 7 | Type: IDENTIFIER | Lexeme: 'a'\n[13] Line 4, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[14] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Literal: 10\n  Assignment: a\n    Binary Expression: +\n      Identifier: b\n      Literal: 5\n  Print\n    Identifier: a",
      "semantics": "Status: FAILED (1 semantic error)\n[1] [Semantic Error] Line 3, Col 5: Undeclared identifier 'b' used in expression\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L2:5\n\n[Compilation Stopped]: Code contains semantic errors. IR and Code Generation skipped.\n",
      "tac": "",
      "opt": "",
      "assembly": "",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "",
      "vm": "",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 4,
          "line": 2,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 6,
          "line": 3,
          "column": 3,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 7,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 8,
          "line": 3,
          "column": 7,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 9,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "5"
        },
        {
          "index": 10,
          "line": 3,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 11,
          "line": 4,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 12,
          "line": 4,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 13,
          "line": 4,
          "column": 8,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 14,
          "line": 5,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        }
      ],
      "optSummary": {
        "folded": 0,
        "propagated": 0,
        "algebraic": 0,
        "deadEliminated": 0,
        "total": 0
      },
      "targetList": [],
      "vmOutputLines": [],
      "vmVariables": [],
      "hasRecovery": false,
      "hasSemanticErrors": true
    }
  },
  "semantic_type_mismatch": {
    "source": "// Category J: Semantic Analysis - Static Type Mismatch\nint total = 100;\ntotal = 3.14159;\nprint total;\n",
    "success": false,
    "exitCode": 1,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\10_type_mismatch.txt\n\n=== Source Code ===\n// Category J: Semantic Analysis - Static Type Mismatch\nint total = 100;\ntotal = 3.14159;\nprint total;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (13 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (13 tokens) ===\n[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'total'\n[2] Line 2, Col 11 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 13 | Type: NUMBER | Lexeme: '100'\n[4] Line 2, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: IDENTIFIER | Lexeme: 'total'\n[6] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[7] Line 3, Col 9 | Type: NUMBER | Lexeme: '3.14159'\n[8] Line 3, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 4, Col 1 | Type: PRINT | Lexeme: 'print'\n[10] Line 4, Col 7 | Type: IDENTIFIER | Lexeme: 'total'\n[11] Line 4, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[12] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int total\n    Literal: 100\n  Assignment: total\n    Literal: 3.14159\n  Print\n    Identifier: total\n\n=== Semantic Analysis Report ===\nStatus: FAILED (1 semantic error)\n[1] [Semantic Error] Line 3, Col 1: Type mismatch in assignment to 'total': cannot assign 'float' to 'int'\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\ntotal           int       0       L2:5        \n\n\n[Compilation Stopped]: Code contains semantic errors. IR and Code Generation skipped.\n",
    "sections": {
      "status": "Lexer  : SUCCESS (13 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'total'\n[2] Line 2, Col 11 | Type: ASSIGN | Lexeme: '='\n[3] Line 2, Col 13 | Type: NUMBER | Lexeme: '100'\n[4] Line 2, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 3, Col 1 | Type: IDENTIFIER | Lexeme: 'total'\n[6] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[7] Line 3, Col 9 | Type: NUMBER | Lexeme: '3.14159'\n[8] Line 3, Col 16 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 4, Col 1 | Type: PRINT | Lexeme: 'print'\n[10] Line 4, Col 7 | Type: IDENTIFIER | Lexeme: 'total'\n[11] Line 4, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[12] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int total\n    Literal: 100\n  Assignment: total\n    Literal: 3.14159\n  Print\n    Identifier: total",
      "semantics": "Status: FAILED (1 semantic error)\n[1] [Semantic Error] Line 3, Col 1: Type mismatch in assignment to 'total': cannot assign 'float' to 'int'\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\ntotal           int       0       L2:5\n\n[Compilation Stopped]: Code contains semantic errors. IR and Code Generation skipped.\n",
      "tac": "",
      "opt": "",
      "assembly": "",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "",
      "vm": "",
      "tokensList": [
        {
          "index": 0,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "total"
        },
        {
          "index": 2,
          "line": 2,
          "column": 11,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 2,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "100"
        },
        {
          "index": 4,
          "line": 2,
          "column": 16,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 3,
          "column": 1,
          "type": "IDENTIFIER",
          "lexeme": "total"
        },
        {
          "index": 6,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 7,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "3.14159"
        },
        {
          "index": 8,
          "line": 3,
          "column": 16,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 9,
          "line": 4,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 10,
          "line": 4,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "total"
        },
        {
          "index": 11,
          "line": 4,
          "column": 12,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 12,
          "line": 5,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "total",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        }
      ],
      "optSummary": {
        "folded": 0,
        "propagated": 0,
        "algebraic": 0,
        "deadEliminated": 0,
        "total": 0
      },
      "targetList": [],
      "vmOutputLines": [],
      "vmVariables": [],
      "hasRecovery": false,
      "hasSemanticErrors": true
    }
  },
  "constant_folding": {
    "source": "int a = 2 + 3 * 4;\nint b = 100 / 4 - 5;\nint c = a + b;\nprint c;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\tests\\11_constant_folding.txt\n\n=== Source Code ===\nint a = 2 + 3 * 4;\nint b = 100 / 4 - 5;\nint c = a + b;\nprint c;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (29 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (29 tokens) ===\n[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '2'\n[4] Line 1, Col 11 | Type: PLUS | Lexeme: '+'\n[5] Line 1, Col 13 | Type: NUMBER | Lexeme: '3'\n[6] Line 1, Col 15 | Type: MULTIPLY | Lexeme: '*'\n[7] Line 1, Col 17 | Type: NUMBER | Lexeme: '4'\n[8] Line 1, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[10] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[11] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[12] Line 2, Col 9 | Type: NUMBER | Lexeme: '100'\n[13] Line 2, Col 13 | Type: DIVIDE | Lexeme: '/'\n[14] Line 2, Col 15 | Type: NUMBER | Lexeme: '4'\n[15] Line 2, Col 17 | Type: MINUS | Lexeme: '-'\n[16] Line 2, Col 19 | Type: NUMBER | Lexeme: '5'\n[17] Line 2, Col 20 | Type: SEMICOLON | Lexeme: ';'\n[18] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[19] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'c'\n[20] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[21] Line 3, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[22] Line 3, Col 11 | Type: PLUS | Lexeme: '+'\n[23] Line 3, Col 13 | Type: IDENTIFIER | Lexeme: 'b'\n[24] Line 3, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[25] Line 4, Col 1 | Type: PRINT | Lexeme: 'print'\n[26] Line 4, Col 7 | Type: IDENTIFIER | Lexeme: 'c'\n[27] Line 4, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[28] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int a\n    Binary Expression: +\n      Literal: 2\n      Binary Expression: *\n        Literal: 3\n        Literal: 4\n  Declaration: int b\n    Binary Expression: -\n      Binary Expression: /\n        Literal: 100\n        Literal: 4\n      Literal: 5\n  Declaration: int c\n    Binary Expression: +\n      Identifier: a\n      Identifier: b\n  Print\n    Identifier: c\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L1:5        \nb               int       0       L2:5        \nc               int       0       L3:5        \n\n=== Three-Address Code (TAC) ===\n    _t0 = 3 * 4\n    _t1 = 2 + _t0\n    a = _t1\n    _t2 = 100 / 4\n    _t3 = _t2 - 5\n    b = _t3\n    _t4 = a + b\n    c = _t4\n    print c\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 5\n  Constant Operands Propagated   : 8\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 5\n  Total Optimizations Applied    : 18\n\n=== Optimized Three-Address Code ===\n    a = 14\n    b = 20\n    c = 34\n    print 34\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 14\n    movl    $14, -4(%ebp)\n\n    # TAC: b = 20\n    movl    $20, -8(%ebp)\n\n    # TAC: c = 34\n    movl    $34, -12(%ebp)\n\n    # TAC: print 34\n    movl    $34, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   14\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   20\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   34\n0005:  STORE_VAR    c\n0006:  PUSH_CONST   34\n0007:  PRINT\n0008:  HALT\n\n=== Virtual Machine Execution ===\n[VM Output] 34\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nc               34          \nb               20          \na               14          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (29 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'a'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '2'\n[4] Line 1, Col 11 | Type: PLUS | Lexeme: '+'\n[5] Line 1, Col 13 | Type: NUMBER | Lexeme: '3'\n[6] Line 1, Col 15 | Type: MULTIPLY | Lexeme: '*'\n[7] Line 1, Col 17 | Type: NUMBER | Lexeme: '4'\n[8] Line 1, Col 18 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[10] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'b'\n[11] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[12] Line 2, Col 9 | Type: NUMBER | Lexeme: '100'\n[13] Line 2, Col 13 | Type: DIVIDE | Lexeme: '/'\n[14] Line 2, Col 15 | Type: NUMBER | Lexeme: '4'\n[15] Line 2, Col 17 | Type: MINUS | Lexeme: '-'\n[16] Line 2, Col 19 | Type: NUMBER | Lexeme: '5'\n[17] Line 2, Col 20 | Type: SEMICOLON | Lexeme: ';'\n[18] Line 3, Col 1 | Type: INT | Lexeme: 'int'\n[19] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'c'\n[20] Line 3, Col 7 | Type: ASSIGN | Lexeme: '='\n[21] Line 3, Col 9 | Type: IDENTIFIER | Lexeme: 'a'\n[22] Line 3, Col 11 | Type: PLUS | Lexeme: '+'\n[23] Line 3, Col 13 | Type: IDENTIFIER | Lexeme: 'b'\n[24] Line 3, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[25] Line 4, Col 1 | Type: PRINT | Lexeme: 'print'\n[26] Line 4, Col 7 | Type: IDENTIFIER | Lexeme: 'c'\n[27] Line 4, Col 8 | Type: SEMICOLON | Lexeme: ';'\n[28] Line 5, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int a\n    Binary Expression: +\n      Literal: 2\n      Binary Expression: *\n        Literal: 3\n        Literal: 4\n  Declaration: int b\n    Binary Expression: -\n      Binary Expression: /\n        Literal: 100\n        Literal: 4\n      Literal: 5\n  Declaration: int c\n    Binary Expression: +\n      Identifier: a\n      Identifier: b\n  Print\n    Identifier: c",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\na               int       0       L1:5        \nb               int       0       L2:5        \nc               int       0       L3:5",
      "tac": "_t0 = 3 * 4\n    _t1 = 2 + _t0\n    a = _t1\n    _t2 = 100 / 4\n    _t3 = _t2 - 5\n    b = _t3\n    _t4 = a + b\n    c = _t4\n    print c",
      "opt": "Constant Operations Folded     : 5\n  Constant Operands Propagated   : 8\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 5\n  Total Optimizations Applied    : 18",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: a = 14\n    movl    $14, -4(%ebp)\n\n    # TAC: b = 20\n    movl    $20, -8(%ebp)\n\n    # TAC: c = 34\n    movl    $34, -12(%ebp)\n\n    # TAC: print 34\n    movl    $34, %eax\n    pushl   %eax\n    pushl   $.LC_fmt_int\n    call    _printf\n    addl    $8, %esp\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   14\n0001:  STORE_VAR    a\n0002:  PUSH_CONST   20\n0003:  STORE_VAR    b\n0004:  PUSH_CONST   34\n0005:  STORE_VAR    c\n0006:  PUSH_CONST   34\n0007:  PRINT\n0008:  HALT",
      "vm": "[VM Output] 34\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nc               34          \nb               20          \na               14          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 1,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 1,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 2,
          "line": 1,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 1,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "2"
        },
        {
          "index": 4,
          "line": 1,
          "column": 11,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 5,
          "line": 1,
          "column": 13,
          "type": "NUMBER",
          "lexeme": "3"
        },
        {
          "index": 6,
          "line": 1,
          "column": 15,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 7,
          "line": 1,
          "column": 17,
          "type": "NUMBER",
          "lexeme": "4"
        },
        {
          "index": 8,
          "line": 1,
          "column": 18,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 9,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 10,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 11,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 12,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "100"
        },
        {
          "index": 13,
          "line": 2,
          "column": 13,
          "type": "DIVIDE",
          "lexeme": "/"
        },
        {
          "index": 14,
          "line": 2,
          "column": 15,
          "type": "NUMBER",
          "lexeme": "4"
        },
        {
          "index": 15,
          "line": 2,
          "column": 17,
          "type": "MINUS",
          "lexeme": "-"
        },
        {
          "index": 16,
          "line": 2,
          "column": 19,
          "type": "NUMBER",
          "lexeme": "5"
        },
        {
          "index": 17,
          "line": 2,
          "column": 20,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 18,
          "line": 3,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 19,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 20,
          "line": 3,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 21,
          "line": 3,
          "column": 9,
          "type": "IDENTIFIER",
          "lexeme": "a"
        },
        {
          "index": 22,
          "line": 3,
          "column": 11,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 23,
          "line": 3,
          "column": 13,
          "type": "IDENTIFIER",
          "lexeme": "b"
        },
        {
          "index": 24,
          "line": 3,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 25,
          "line": 4,
          "column": 1,
          "type": "PRINT",
          "lexeme": "print"
        },
        {
          "index": 26,
          "line": 4,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "c"
        },
        {
          "index": 27,
          "line": 4,
          "column": 8,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 28,
          "line": 5,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "a",
          "type": "int",
          "scope": "0",
          "declaredAt": "L1:5"
        },
        {
          "name": "b",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        },
        {
          "name": "c",
          "type": "int",
          "scope": "0",
          "declaredAt": "L3:5"
        }
      ],
      "optSummary": {
        "folded": 5,
        "propagated": 8,
        "algebraic": 0,
        "deadEliminated": 5,
        "total": 18
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "14"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "a"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "20"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "b"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "34"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "c"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "34"
        },
        {
          "address": "0007",
          "opcode": "PRINT",
          "arg": ""
        },
        {
          "address": "0008",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [
        "34"
      ],
      "vmVariables": [
        {
          "name": "c",
          "value": "34"
        },
        {
          "name": "b",
          "value": "20"
        },
        {
          "name": "a",
          "value": "14"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "a = 14\n    b = 20\n    c = 34\n    print 34"
    }
  },
  "arithmetic_demo": {
    "source": "int x = 15;\nfloat y = 4.5;\nfloat result = x + y * 2.0;\n\nif (result >= 20.0 && x != 0) {\n    result = result / 2.0;\n} else {\n    result = 0.0;\n}\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\examples\\arithmetic_demo.txt\n\n=== Source Code ===\nint x = 15;\nfloat y = 4.5;\nfloat result = x + y * 2.0;\n\nif (result >= 20.0 && x != 0) {\n    result = result / 2.0;\n} else {\n    result = 0.0;\n}\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (45 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report ===\nStatus: Clean compilation. No recovery actions were required.\n\n=== Lexical Tokens (45 tokens) ===\n[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '15'\n[4] Line 1, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 1 | Type: FLOAT | Lexeme: 'float'\n[6] Line 2, Col 7 | Type: IDENTIFIER | Lexeme: 'y'\n[7] Line 2, Col 9 | Type: ASSIGN | Lexeme: '='\n[8] Line 2, Col 11 | Type: NUMBER | Lexeme: '4.5'\n[9] Line 2, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 3, Col 1 | Type: FLOAT | Lexeme: 'float'\n[11] Line 3, Col 7 | Type: IDENTIFIER | Lexeme: 'result'\n[12] Line 3, Col 14 | Type: ASSIGN | Lexeme: '='\n[13] Line 3, Col 16 | Type: IDENTIFIER | Lexeme: 'x'\n[14] Line 3, Col 18 | Type: PLUS | Lexeme: '+'\n[15] Line 3, Col 20 | Type: IDENTIFIER | Lexeme: 'y'\n[16] Line 3, Col 22 | Type: MULTIPLY | Lexeme: '*'\n[17] Line 3, Col 24 | Type: NUMBER | Lexeme: '2.0'\n[18] Line 3, Col 27 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 5, Col 1 | Type: IF | Lexeme: 'if'\n[20] Line 5, Col 4 | Type: LEFT_PAREN | Lexeme: '('\n[21] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'result'\n[22] Line 5, Col 12 | Type: GREATER_EQUAL | Lexeme: '>='\n[23] Line 5, Col 15 | Type: NUMBER | Lexeme: '20.0'\n[24] Line 5, Col 20 | Type: AND | Lexeme: '&&'\n[25] Line 5, Col 23 | Type: IDENTIFIER | Lexeme: 'x'\n[26] Line 5, Col 25 | Type: NOT_EQUAL | Lexeme: '!='\n[27] Line 5, Col 28 | Type: NUMBER | Lexeme: '0'\n[28] Line 5, Col 29 | Type: RIGHT_PAREN | Lexeme: ')'\n[29] Line 5, Col 31 | Type: LEFT_BRACE | Lexeme: '{'\n[30] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'result'\n[31] Line 6, Col 12 | Type: ASSIGN | Lexeme: '='\n[32] Line 6, Col 14 | Type: IDENTIFIER | Lexeme: 'result'\n[33] Line 6, Col 21 | Type: DIVIDE | Lexeme: '/'\n[34] Line 6, Col 23 | Type: NUMBER | Lexeme: '2.0'\n[35] Line 6, Col 26 | Type: SEMICOLON | Lexeme: ';'\n[36] Line 7, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[37] Line 7, Col 3 | Type: ELSE | Lexeme: 'else'\n[38] Line 7, Col 8 | Type: LEFT_BRACE | Lexeme: '{'\n[39] Line 8, Col 5 | Type: IDENTIFIER | Lexeme: 'result'\n[40] Line 8, Col 12 | Type: ASSIGN | Lexeme: '='\n[41] Line 8, Col 14 | Type: NUMBER | Lexeme: '0.0'\n[42] Line 8, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[43] Line 9, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[44] Line 10, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int x\n    Literal: 15\n  Declaration: float y\n    Literal: 4.5\n  Declaration: float result\n    Binary Expression: +\n      Identifier: x\n      Binary Expression: *\n        Identifier: y\n        Literal: 2.0\n  If\n    Condition\n      Binary Expression: &&\n        Binary Expression: >=\n          Identifier: result\n          Literal: 20.0\n        Binary Expression: !=\n          Identifier: x\n          Literal: 0\n    Then\n      Block\n        Assignment: result\n          Binary Expression: /\n            Identifier: result\n            Literal: 2.0\n    Else\n      Block\n        Assignment: result\n          Literal: 0.0\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \ny               float     0       L2:7        \nresult          float     0       L3:7        \n\n=== Three-Address Code (TAC) ===\n    x = 15\n    y = 4.5\n    _t0 = y * 2.0\n    _t1 = x + _t0\n    result = _t1\n    _t2 = result >= 20.0\n    _t3 = x != 0\n    _t4 = _t2 && _t3\n    ifFalse _t4 goto L0\n    _t5 = result / 2.0\n    result = _t5\n    goto L1\nL0:\n    result = 0.0\nL1:\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 5\n  Constant Operands Propagated   : 8\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 4\n  Total Optimizations Applied    : 17\n\n=== Optimized Three-Address Code ===\n    x = 15\n    y = 4.5\n    result = 24.0\n    _t4 = 1\n    ifFalse _t4 goto L0\n    _t5 = result / 2.0\n    result = _t5\n    goto L1\nL0:\n    result = 0.0\nL1:\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 15\n    movl    $15, -4(%ebp)\n\n    # TAC: y = 4.5\n    movl    $4, -8(%ebp)\n\n    # TAC: result = 24.0\n    movl    $24, -12(%ebp)\n\n    # TAC: _t4 = 1\n    movl    $1, -16(%ebp)\n\n    # TAC: ifFalse _t4 goto L0\n    movl    -16(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L0\n\n    # TAC: _t5 = result / 2.0\n    movl    -12(%ebp), %eax\n    cltd\n    movl    $2, %ecx\n    idivl   %ecx\n    movl    %eax, -20(%ebp)\n\n    # TAC: result = _t5\n    movl    -20(%ebp), %eax\n    movl    %eax, -12(%ebp)\n\n    # TAC: goto L1\n    jmp     .L1\n\n    # TAC: L0:\n.L0:\n\n    # TAC: result = 0.0\n    movl    $0, -12(%ebp)\n\n    # TAC: L1:\n.L1:\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   15\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   4.5\n0003:  STORE_VAR    y\n0004:  PUSH_CONST   24\n0005:  STORE_VAR    result\n0006:  PUSH_CONST   1\n0007:  STORE_VAR    _t4\n0008:  LOAD_VAR     _t4\n0009:  JUMP_IF_ZERO ->0017\n0010:  LOAD_VAR     result\n0011:  PUSH_CONST   2\n0012:  DIV\n0013:  STORE_VAR    _t5\n0014:  LOAD_VAR     _t5\n0015:  STORE_VAR    result\n0016:  JUMP         ->0019\n0017:  PUSH_CONST   0\n0018:  STORE_VAR    result\n0019:  HALT\n\n=== Virtual Machine Execution ===\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nx               15          \ny               4.5         \nresult          12          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (45 tokens generated)\nParser : SUCCESS",
      "recovery": "Status: Clean compilation. No recovery actions were required.",
      "tokens": "[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '15'\n[4] Line 1, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 2, Col 1 | Type: FLOAT | Lexeme: 'float'\n[6] Line 2, Col 7 | Type: IDENTIFIER | Lexeme: 'y'\n[7] Line 2, Col 9 | Type: ASSIGN | Lexeme: '='\n[8] Line 2, Col 11 | Type: NUMBER | Lexeme: '4.5'\n[9] Line 2, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[10] Line 3, Col 1 | Type: FLOAT | Lexeme: 'float'\n[11] Line 3, Col 7 | Type: IDENTIFIER | Lexeme: 'result'\n[12] Line 3, Col 14 | Type: ASSIGN | Lexeme: '='\n[13] Line 3, Col 16 | Type: IDENTIFIER | Lexeme: 'x'\n[14] Line 3, Col 18 | Type: PLUS | Lexeme: '+'\n[15] Line 3, Col 20 | Type: IDENTIFIER | Lexeme: 'y'\n[16] Line 3, Col 22 | Type: MULTIPLY | Lexeme: '*'\n[17] Line 3, Col 24 | Type: NUMBER | Lexeme: '2.0'\n[18] Line 3, Col 27 | Type: SEMICOLON | Lexeme: ';'\n[19] Line 5, Col 1 | Type: IF | Lexeme: 'if'\n[20] Line 5, Col 4 | Type: LEFT_PAREN | Lexeme: '('\n[21] Line 5, Col 5 | Type: IDENTIFIER | Lexeme: 'result'\n[22] Line 5, Col 12 | Type: GREATER_EQUAL | Lexeme: '>='\n[23] Line 5, Col 15 | Type: NUMBER | Lexeme: '20.0'\n[24] Line 5, Col 20 | Type: AND | Lexeme: '&&'\n[25] Line 5, Col 23 | Type: IDENTIFIER | Lexeme: 'x'\n[26] Line 5, Col 25 | Type: NOT_EQUAL | Lexeme: '!='\n[27] Line 5, Col 28 | Type: NUMBER | Lexeme: '0'\n[28] Line 5, Col 29 | Type: RIGHT_PAREN | Lexeme: ')'\n[29] Line 5, Col 31 | Type: LEFT_BRACE | Lexeme: '{'\n[30] Line 6, Col 5 | Type: IDENTIFIER | Lexeme: 'result'\n[31] Line 6, Col 12 | Type: ASSIGN | Lexeme: '='\n[32] Line 6, Col 14 | Type: IDENTIFIER | Lexeme: 'result'\n[33] Line 6, Col 21 | Type: DIVIDE | Lexeme: '/'\n[34] Line 6, Col 23 | Type: NUMBER | Lexeme: '2.0'\n[35] Line 6, Col 26 | Type: SEMICOLON | Lexeme: ';'\n[36] Line 7, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[37] Line 7, Col 3 | Type: ELSE | Lexeme: 'else'\n[38] Line 7, Col 8 | Type: LEFT_BRACE | Lexeme: '{'\n[39] Line 8, Col 5 | Type: IDENTIFIER | Lexeme: 'result'\n[40] Line 8, Col 12 | Type: ASSIGN | Lexeme: '='\n[41] Line 8, Col 14 | Type: NUMBER | Lexeme: '0.0'\n[42] Line 8, Col 17 | Type: SEMICOLON | Lexeme: ';'\n[43] Line 9, Col 1 | Type: RIGHT_BRACE | Lexeme: '}'\n[44] Line 10, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int x\n    Literal: 15\n  Declaration: float y\n    Literal: 4.5\n  Declaration: float result\n    Binary Expression: +\n      Identifier: x\n      Binary Expression: *\n        Identifier: y\n        Literal: 2.0\n  If\n    Condition\n      Binary Expression: &&\n        Binary Expression: >=\n          Identifier: result\n          Literal: 20.0\n        Binary Expression: !=\n          Identifier: x\n          Literal: 0\n    Then\n      Block\n        Assignment: result\n          Binary Expression: /\n            Identifier: result\n            Literal: 2.0\n    Else\n      Block\n        Assignment: result\n          Literal: 0.0",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \ny               float     0       L2:7        \nresult          float     0       L3:7",
      "tac": "x = 15\n    y = 4.5\n    _t0 = y * 2.0\n    _t1 = x + _t0\n    result = _t1\n    _t2 = result >= 20.0\n    _t3 = x != 0\n    _t4 = _t2 && _t3\n    ifFalse _t4 goto L0\n    _t5 = result / 2.0\n    result = _t5\n    goto L1\nL0:\n    result = 0.0\nL1:",
      "opt": "Constant Operations Folded     : 5\n  Constant Operands Propagated   : 8\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 4\n  Total Optimizations Applied    : 17",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 15\n    movl    $15, -4(%ebp)\n\n    # TAC: y = 4.5\n    movl    $4, -8(%ebp)\n\n    # TAC: result = 24.0\n    movl    $24, -12(%ebp)\n\n    # TAC: _t4 = 1\n    movl    $1, -16(%ebp)\n\n    # TAC: ifFalse _t4 goto L0\n    movl    -16(%ebp), %eax\n    cmpl    $0, %eax\n    je      .L0\n\n    # TAC: _t5 = result / 2.0\n    movl    -12(%ebp), %eax\n    cltd\n    movl    $2, %ecx\n    idivl   %ecx\n    movl    %eax, -20(%ebp)\n\n    # TAC: result = _t5\n    movl    -20(%ebp), %eax\n    movl    %eax, -12(%ebp)\n\n    # TAC: goto L1\n    jmp     .L1\n\n    # TAC: L0:\n.L0:\n\n    # TAC: result = 0.0\n    movl    $0, -12(%ebp)\n\n    # TAC: L1:\n.L1:\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   15\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   4.5\n0003:  STORE_VAR    y\n0004:  PUSH_CONST   24\n0005:  STORE_VAR    result\n0006:  PUSH_CONST   1\n0007:  STORE_VAR    _t4\n0008:  LOAD_VAR     _t4\n0009:  JUMP_IF_ZERO ->0017\n0010:  LOAD_VAR     result\n0011:  PUSH_CONST   2\n0012:  DIV\n0013:  STORE_VAR    _t5\n0014:  LOAD_VAR     _t5\n0015:  STORE_VAR    result\n0016:  JUMP         ->0019\n0017:  PUSH_CONST   0\n0018:  STORE_VAR    result\n0019:  HALT",
      "vm": "=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\nx               15          \ny               4.5         \nresult          12          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 1,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 1,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 2,
          "line": 1,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 1,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "15"
        },
        {
          "index": 4,
          "line": 1,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 2,
          "column": 1,
          "type": "FLOAT",
          "lexeme": "float"
        },
        {
          "index": 6,
          "line": 2,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "y"
        },
        {
          "index": 7,
          "line": 2,
          "column": 9,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 8,
          "line": 2,
          "column": 11,
          "type": "NUMBER",
          "lexeme": "4.5"
        },
        {
          "index": 9,
          "line": 2,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 10,
          "line": 3,
          "column": 1,
          "type": "FLOAT",
          "lexeme": "float"
        },
        {
          "index": 11,
          "line": 3,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "result"
        },
        {
          "index": 12,
          "line": 3,
          "column": 14,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 13,
          "line": 3,
          "column": 16,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 14,
          "line": 3,
          "column": 18,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 15,
          "line": 3,
          "column": 20,
          "type": "IDENTIFIER",
          "lexeme": "y"
        },
        {
          "index": 16,
          "line": 3,
          "column": 22,
          "type": "MULTIPLY",
          "lexeme": "*"
        },
        {
          "index": 17,
          "line": 3,
          "column": 24,
          "type": "NUMBER",
          "lexeme": "2.0"
        },
        {
          "index": 18,
          "line": 3,
          "column": 27,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 19,
          "line": 5,
          "column": 1,
          "type": "IF",
          "lexeme": "if"
        },
        {
          "index": 20,
          "line": 5,
          "column": 4,
          "type": "LEFT_PAREN",
          "lexeme": "("
        },
        {
          "index": 21,
          "line": 5,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "result"
        },
        {
          "index": 22,
          "line": 5,
          "column": 12,
          "type": "GREATER_EQUAL",
          "lexeme": ">="
        },
        {
          "index": 23,
          "line": 5,
          "column": 15,
          "type": "NUMBER",
          "lexeme": "20.0"
        },
        {
          "index": 24,
          "line": 5,
          "column": 20,
          "type": "AND",
          "lexeme": "&&"
        },
        {
          "index": 25,
          "line": 5,
          "column": 23,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 26,
          "line": 5,
          "column": 25,
          "type": "NOT_EQUAL",
          "lexeme": "!="
        },
        {
          "index": 27,
          "line": 5,
          "column": 28,
          "type": "NUMBER",
          "lexeme": "0"
        },
        {
          "index": 28,
          "line": 5,
          "column": 29,
          "type": "RIGHT_PAREN",
          "lexeme": ")"
        },
        {
          "index": 29,
          "line": 5,
          "column": 31,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 30,
          "line": 6,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "result"
        },
        {
          "index": 31,
          "line": 6,
          "column": 12,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 32,
          "line": 6,
          "column": 14,
          "type": "IDENTIFIER",
          "lexeme": "result"
        },
        {
          "index": 33,
          "line": 6,
          "column": 21,
          "type": "DIVIDE",
          "lexeme": "/"
        },
        {
          "index": 34,
          "line": 6,
          "column": 23,
          "type": "NUMBER",
          "lexeme": "2.0"
        },
        {
          "index": 35,
          "line": 6,
          "column": 26,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 36,
          "line": 7,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 37,
          "line": 7,
          "column": 3,
          "type": "ELSE",
          "lexeme": "else"
        },
        {
          "index": 38,
          "line": 7,
          "column": 8,
          "type": "LEFT_BRACE",
          "lexeme": "{"
        },
        {
          "index": 39,
          "line": 8,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "result"
        },
        {
          "index": 40,
          "line": 8,
          "column": 12,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 41,
          "line": 8,
          "column": 14,
          "type": "NUMBER",
          "lexeme": "0.0"
        },
        {
          "index": 42,
          "line": 8,
          "column": 17,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 43,
          "line": 9,
          "column": 1,
          "type": "RIGHT_BRACE",
          "lexeme": "}"
        },
        {
          "index": 44,
          "line": 10,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [],
      "recoveryTotalCost": 0,
      "symbolsList": [
        {
          "name": "x",
          "type": "int",
          "scope": "0",
          "declaredAt": "L1:5"
        },
        {
          "name": "y",
          "type": "float",
          "scope": "0",
          "declaredAt": "L2:7"
        },
        {
          "name": "result",
          "type": "float",
          "scope": "0",
          "declaredAt": "L3:7"
        }
      ],
      "optSummary": {
        "folded": 5,
        "propagated": 8,
        "algebraic": 0,
        "deadEliminated": 4,
        "total": 17
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "15"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "4.5"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "y"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "24"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "result"
        },
        {
          "address": "0006",
          "opcode": "PUSH_CONST",
          "arg": "1"
        },
        {
          "address": "0007",
          "opcode": "STORE_VAR",
          "arg": "_t4"
        },
        {
          "address": "0008",
          "opcode": "LOAD_VAR",
          "arg": "_t4"
        },
        {
          "address": "0009",
          "opcode": "JUMP_IF_ZERO",
          "arg": "->0017"
        },
        {
          "address": "0010",
          "opcode": "LOAD_VAR",
          "arg": "result"
        },
        {
          "address": "0011",
          "opcode": "PUSH_CONST",
          "arg": "2"
        },
        {
          "address": "0012",
          "opcode": "DIV",
          "arg": ""
        },
        {
          "address": "0013",
          "opcode": "STORE_VAR",
          "arg": "_t5"
        },
        {
          "address": "0014",
          "opcode": "LOAD_VAR",
          "arg": "_t5"
        },
        {
          "address": "0015",
          "opcode": "STORE_VAR",
          "arg": "result"
        },
        {
          "address": "0016",
          "opcode": "JUMP",
          "arg": "->0019"
        },
        {
          "address": "0017",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0018",
          "opcode": "STORE_VAR",
          "arg": "result"
        },
        {
          "address": "0019",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [],
      "vmVariables": [
        {
          "name": "x",
          "value": "15"
        },
        {
          "name": "y",
          "value": "4.5"
        },
        {
          "name": "result",
          "value": "12"
        }
      ],
      "hasRecovery": false,
      "hasSemanticErrors": false,
      "optTac": "x = 15\n    y = 4.5\n    result = 24.0\n    _t4 = 1\n    ifFalse _t4 goto L0\n    _t5 = result / 2.0\n    result = _t5\n    goto L1\nL0:\n    result = 0.0\nL1:"
    }
  },
  "missing_expression": {
    "source": "int x = ;\nint y = 50;\ny = y + 10;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\tests\\02_missing_expression.txt\n\n=== Source Code ===\nint x = ;\nint y = 50;\ny = y + 10;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (16 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report (1 recovery action) ===\n[1] [INSERTION] Inserted missing '0' at line 1, column 9\n    Recovery Cost : 2 | Confidence: MEDIUM\n    Rationale     : Missing expression after '='; inserted default literal '0'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 2\n\n=== Lexical Tokens (16 tokens) ===\n[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: SEMICOLON | Lexeme: ';'\n[4] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[5] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'y'\n[6] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[7] Line 2, Col 9 | Type: NUMBER | Lexeme: '50'\n[8] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 3, Col 1 | Type: IDENTIFIER | Lexeme: 'y'\n[10] Line 3, Col 3 | Type: ASSIGN | Lexeme: '='\n[11] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'y'\n[12] Line 3, Col 7 | Type: PLUS | Lexeme: '+'\n[13] Line 3, Col 9 | Type: NUMBER | Lexeme: '10'\n[14] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[15] Line 4, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int x\n    Literal: 0\n  Declaration: int y\n    Literal: 50\n  Assignment: y\n    Binary Expression: +\n      Identifier: y\n      Literal: 10\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \ny               int       0       L2:5        \n\n=== Three-Address Code (TAC) ===\n    x = 0\n    y = 50\n    _t0 = y + 10\n    y = _t0\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 2\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 4\n\n=== Optimized Three-Address Code ===\n    x = 0\n    y = 50\n    y = 60\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 0\n    movl    $0, -4(%ebp)\n\n    # TAC: y = 50\n    movl    $50, -8(%ebp)\n\n    # TAC: y = 60\n    movl    $60, -8(%ebp)\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   0\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   50\n0003:  STORE_VAR    y\n0004:  PUSH_CONST   60\n0005:  STORE_VAR    y\n0006:  HALT\n\n=== Virtual Machine Execution ===\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ny               60          \nx               0           \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (16 tokens generated)\nParser : SUCCESS",
      "recovery": "[1] [INSERTION] Inserted missing '0' at line 1, column 9\n    Recovery Cost : 2 | Confidence: MEDIUM\n    Rationale     : Missing expression after '='; inserted default literal '0'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 2",
      "tokens": "[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: SEMICOLON | Lexeme: ';'\n[4] Line 2, Col 1 | Type: INT | Lexeme: 'int'\n[5] Line 2, Col 5 | Type: IDENTIFIER | Lexeme: 'y'\n[6] Line 2, Col 7 | Type: ASSIGN | Lexeme: '='\n[7] Line 2, Col 9 | Type: NUMBER | Lexeme: '50'\n[8] Line 2, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[9] Line 3, Col 1 | Type: IDENTIFIER | Lexeme: 'y'\n[10] Line 3, Col 3 | Type: ASSIGN | Lexeme: '='\n[11] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'y'\n[12] Line 3, Col 7 | Type: PLUS | Lexeme: '+'\n[13] Line 3, Col 9 | Type: NUMBER | Lexeme: '10'\n[14] Line 3, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[15] Line 4, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int x\n    Literal: 0\n  Declaration: int y\n    Literal: 50\n  Assignment: y\n    Binary Expression: +\n      Identifier: y\n      Literal: 10",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \ny               int       0       L2:5",
      "tac": "x = 0\n    y = 50\n    _t0 = y + 10\n    y = _t0",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 2\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 4",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 0\n    movl    $0, -4(%ebp)\n\n    # TAC: y = 50\n    movl    $50, -8(%ebp)\n\n    # TAC: y = 60\n    movl    $60, -8(%ebp)\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   0\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   50\n0003:  STORE_VAR    y\n0004:  PUSH_CONST   60\n0005:  STORE_VAR    y\n0006:  HALT",
      "vm": "=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ny               60          \nx               0           \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 1,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 1,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 2,
          "line": 1,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 1,
          "column": 9,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 4,
          "line": 2,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 5,
          "line": 2,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "y"
        },
        {
          "index": 6,
          "line": 2,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 7,
          "line": 2,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "50"
        },
        {
          "index": 8,
          "line": 2,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 9,
          "line": 3,
          "column": 1,
          "type": "IDENTIFIER",
          "lexeme": "y"
        },
        {
          "index": 10,
          "line": 3,
          "column": 3,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 11,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "y"
        },
        {
          "index": 12,
          "line": 3,
          "column": 7,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 13,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 14,
          "line": 3,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 15,
          "line": 4,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [
        {
          "id": 1,
          "strategy": "INSERTION",
          "message": "Inserted missing '0'",
          "line": 1,
          "column": 9,
          "cost": 2,
          "confidence": "MEDIUM",
          "rationale": "Missing expression after '='; inserted default literal '0'"
        }
      ],
      "recoveryTotalCost": 2,
      "symbolsList": [
        {
          "name": "x",
          "type": "int",
          "scope": "0",
          "declaredAt": "L1:5"
        },
        {
          "name": "y",
          "type": "int",
          "scope": "0",
          "declaredAt": "L2:5"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 2,
        "algebraic": 0,
        "deadEliminated": 1,
        "total": 4
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "0"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "50"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "y"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "60"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "y"
        },
        {
          "address": "0006",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [],
      "vmVariables": [
        {
          "name": "y",
          "value": "60"
        },
        {
          "name": "x",
          "value": "0"
        }
      ],
      "hasRecovery": true,
      "hasSemanticErrors": false,
      "optTac": "x = 0\n    y = 50\n    y = 60"
    }
  },
  "extra_semicolon": {
    "source": "int x = 10;;\nfloat y = 30;;\nx = x + 1;\n",
    "success": true,
    "exitCode": 0,
    "rawOutput": "========================================================\n Resilient Compiler with Intelligent Error Recovery   \n========================================================\n\n[Input Source File]: C:\\Users\\Steven\\OneDrive\\Desktop\\ResilientCompiler\\tests\\03_extra_semicolon.txt\n\n=== Source Code ===\nint x = 10;;\nfloat y = 30;;\nx = x + 1;\n\n=== Resilient Compiler Status ===\nLexer  : SUCCESS (19 tokens generated)\nParser : SUCCESS\n\n=== Error Recovery Report (2 recovery actions) ===\n[1] [DELETION] Deleted unexpected token ';' at line 1, column 12\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Deleted redundant semicolon ';'\n[2] [DELETION] Deleted unexpected token ';' at line 2, column 14\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Deleted redundant semicolon ';'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 2\n\n=== Lexical Tokens (19 tokens) ===\n[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 1, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 1, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[6] Line 2, Col 1 | Type: FLOAT | Lexeme: 'float'\n[7] Line 2, Col 7 | Type: IDENTIFIER | Lexeme: 'y'\n[8] Line 2, Col 9 | Type: ASSIGN | Lexeme: '='\n[9] Line 2, Col 11 | Type: NUMBER | Lexeme: '30'\n[10] Line 2, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[11] Line 2, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[12] Line 3, Col 1 | Type: IDENTIFIER | Lexeme: 'x'\n[13] Line 3, Col 3 | Type: ASSIGN | Lexeme: '='\n[14] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[15] Line 3, Col 7 | Type: PLUS | Lexeme: '+'\n[16] Line 3, Col 9 | Type: NUMBER | Lexeme: '1'\n[17] Line 3, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[18] Line 4, Col 1 | Type: END_OF_FILE | Lexeme: ''\n\n=== Abstract Syntax Tree (AST) ===\n\nProgram\n  Declaration: int x\n    Literal: 10\n  Declaration: float y\n    Literal: 30\n  Assignment: x\n    Binary Expression: +\n      Identifier: x\n      Literal: 1\n\n=== Semantic Analysis Report ===\nStatus: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \ny               float     0       L2:7        \n\n=== Three-Address Code (TAC) ===\n    x = 10\n    y = 30\n    _t0 = x + 1\n    x = _t0\n\n=== Optimization Summary ===\n  Constant Operations Folded     : 1\n  Constant Operands Propagated   : 2\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 4\n\n=== Optimized Three-Address Code ===\n    x = 10\n    y = 30\n    x = 11\n\n=== Target Assembly Code (x86-32 AT&T) ===\n# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: y = 30\n    movl    $30, -8(%ebp)\n\n    # TAC: x = 11\n    movl    $11, -4(%ebp)\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret\n\n=== Target Bytecode Instructions ===\n0000:  PUSH_CONST   10\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   30\n0003:  STORE_VAR    y\n0004:  PUSH_CONST   11\n0005:  STORE_VAR    x\n0006:  HALT\n\n=== Virtual Machine Execution ===\n\n=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ny               30          \nx               11          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n",
    "sections": {
      "status": "Lexer  : SUCCESS (19 tokens generated)\nParser : SUCCESS",
      "recovery": "[1] [DELETION] Deleted unexpected token ';' at line 1, column 12\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Deleted redundant semicolon ';'\n[2] [DELETION] Deleted unexpected token ';' at line 2, column 14\n    Recovery Cost : 1 | Confidence: HIGH\n    Rationale     : Deleted redundant semicolon ';'\n--------------------------------------------------------\nTotal Recovery Cost Incurred: 2",
      "tokens": "[0] Line 1, Col 1 | Type: INT | Lexeme: 'int'\n[1] Line 1, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[2] Line 1, Col 7 | Type: ASSIGN | Lexeme: '='\n[3] Line 1, Col 9 | Type: NUMBER | Lexeme: '10'\n[4] Line 1, Col 11 | Type: SEMICOLON | Lexeme: ';'\n[5] Line 1, Col 12 | Type: SEMICOLON | Lexeme: ';'\n[6] Line 2, Col 1 | Type: FLOAT | Lexeme: 'float'\n[7] Line 2, Col 7 | Type: IDENTIFIER | Lexeme: 'y'\n[8] Line 2, Col 9 | Type: ASSIGN | Lexeme: '='\n[9] Line 2, Col 11 | Type: NUMBER | Lexeme: '30'\n[10] Line 2, Col 13 | Type: SEMICOLON | Lexeme: ';'\n[11] Line 2, Col 14 | Type: SEMICOLON | Lexeme: ';'\n[12] Line 3, Col 1 | Type: IDENTIFIER | Lexeme: 'x'\n[13] Line 3, Col 3 | Type: ASSIGN | Lexeme: '='\n[14] Line 3, Col 5 | Type: IDENTIFIER | Lexeme: 'x'\n[15] Line 3, Col 7 | Type: PLUS | Lexeme: '+'\n[16] Line 3, Col 9 | Type: NUMBER | Lexeme: '1'\n[17] Line 3, Col 10 | Type: SEMICOLON | Lexeme: ';'\n[18] Line 4, Col 1 | Type: END_OF_FILE | Lexeme: ''",
      "ast": "Program\n  Declaration: int x\n    Literal: 10\n  Declaration: float y\n    Literal: 30\n  Assignment: x\n    Binary Expression: +\n      Identifier: x\n      Literal: 1",
      "semantics": "Status: SUCCESS (0 semantic errors)\n\n=== Symbol Table Audit ===\nIdentifier      Type      Scope   Declared At \n----------------------------------------------\nx               int       0       L1:5        \ny               float     0       L2:7",
      "tac": "x = 10\n    y = 30\n    _t0 = x + 1\n    x = _t0",
      "opt": "Constant Operations Folded     : 1\n  Constant Operands Propagated   : 2\n  Algebraic Simplifications      : 0\n  Dead Instructions Eliminated   : 1\n  Total Optimizations Applied    : 4",
      "assembly": "# ==========================================================================\n# Target Assembly: x86-32 AT&T (GNU as / MinGW GCC)\n# Generated by Resilient Compiler Target Code Generator\n# Stack Frame Size: 32 bytes (aligned to 16 bytes)\n# Variables & Temporaries Mapped to (%ebp) Stack Offsets\n# ==========================================================================\n\n    .file   \"resilientc_out.s\"\n    .section .rdata,\"dr\"\n.LC_fmt_int:\n    .ascii  \"%d\\12\\0\"\n    .text\n    .globl  _main\n    .def    _main; .scl 2; .type 32; .endef\n_main:\n    # --- Function Prologue ---\n    pushl   %ebp\n    movl    %esp, %ebp\n    andl    $-16, %esp\n    subl    $32, %esp\n\n    # TAC: x = 10\n    movl    $10, -4(%ebp)\n\n    # TAC: y = 30\n    movl    $30, -8(%ebp)\n\n    # TAC: x = 11\n    movl    $11, -4(%ebp)\n\n    # --- Function Epilogue ---\n    movl    $0, %eax\n    leave\n    ret",
      "eduAssembly": "",
      "nativeExecution": "",
      "target": "0000:  PUSH_CONST   10\n0001:  STORE_VAR    x\n0002:  PUSH_CONST   30\n0003:  STORE_VAR    y\n0004:  PUSH_CONST   11\n0005:  STORE_VAR    x\n0006:  HALT",
      "vm": "=== VM Execution State (Final Variable Store) ===\nVariable        Final Value \n----------------------------\ny               30          \nx               11          \n\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)",
      "tokensList": [
        {
          "index": 0,
          "line": 1,
          "column": 1,
          "type": "INT",
          "lexeme": "int"
        },
        {
          "index": 1,
          "line": 1,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 2,
          "line": 1,
          "column": 7,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 3,
          "line": 1,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "10"
        },
        {
          "index": 4,
          "line": 1,
          "column": 11,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 5,
          "line": 1,
          "column": 12,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 6,
          "line": 2,
          "column": 1,
          "type": "FLOAT",
          "lexeme": "float"
        },
        {
          "index": 7,
          "line": 2,
          "column": 7,
          "type": "IDENTIFIER",
          "lexeme": "y"
        },
        {
          "index": 8,
          "line": 2,
          "column": 9,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 9,
          "line": 2,
          "column": 11,
          "type": "NUMBER",
          "lexeme": "30"
        },
        {
          "index": 10,
          "line": 2,
          "column": 13,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 11,
          "line": 2,
          "column": 14,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 12,
          "line": 3,
          "column": 1,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 13,
          "line": 3,
          "column": 3,
          "type": "ASSIGN",
          "lexeme": "="
        },
        {
          "index": 14,
          "line": 3,
          "column": 5,
          "type": "IDENTIFIER",
          "lexeme": "x"
        },
        {
          "index": 15,
          "line": 3,
          "column": 7,
          "type": "PLUS",
          "lexeme": "+"
        },
        {
          "index": 16,
          "line": 3,
          "column": 9,
          "type": "NUMBER",
          "lexeme": "1"
        },
        {
          "index": 17,
          "line": 3,
          "column": 10,
          "type": "SEMICOLON",
          "lexeme": ";"
        },
        {
          "index": 18,
          "line": 4,
          "column": 1,
          "type": "END_OF_FILE",
          "lexeme": ""
        }
      ],
      "recoveryActions": [
        {
          "id": 1,
          "strategy": "DELETION",
          "message": "Deleted unexpected token ';'",
          "line": 1,
          "column": 12,
          "cost": 1,
          "confidence": "HIGH",
          "rationale": "Deleted redundant semicolon ';'"
        },
        {
          "id": 2,
          "strategy": "DELETION",
          "message": "Deleted unexpected token ';'",
          "line": 2,
          "column": 14,
          "cost": 1,
          "confidence": "HIGH",
          "rationale": "Deleted redundant semicolon ';'"
        }
      ],
      "recoveryTotalCost": 2,
      "symbolsList": [
        {
          "name": "x",
          "type": "int",
          "scope": "0",
          "declaredAt": "L1:5"
        },
        {
          "name": "y",
          "type": "float",
          "scope": "0",
          "declaredAt": "L2:7"
        }
      ],
      "optSummary": {
        "folded": 1,
        "propagated": 2,
        "algebraic": 0,
        "deadEliminated": 1,
        "total": 4
      },
      "targetList": [
        {
          "address": "0000",
          "opcode": "PUSH_CONST",
          "arg": "10"
        },
        {
          "address": "0001",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0002",
          "opcode": "PUSH_CONST",
          "arg": "30"
        },
        {
          "address": "0003",
          "opcode": "STORE_VAR",
          "arg": "y"
        },
        {
          "address": "0004",
          "opcode": "PUSH_CONST",
          "arg": "11"
        },
        {
          "address": "0005",
          "opcode": "STORE_VAR",
          "arg": "x"
        },
        {
          "address": "0006",
          "opcode": "HALT",
          "arg": ""
        }
      ],
      "vmOutputLines": [],
      "vmVariables": [
        {
          "name": "y",
          "value": "30"
        },
        {
          "name": "x",
          "value": "11"
        }
      ],
      "hasRecovery": true,
      "hasSemanticErrors": false,
      "optTac": "x = 10\n    y = 30\n    x = 11"
    }
  }
};
