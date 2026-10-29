# ==============================================================================
# Comprehensive Automated Test Suite - Resilient Compiler Final Review
# Covers: Lexer, Parser, Recovery, AST, Semantics, TAC, Optimizer, Target Assembly, VM & Native Execution
# ==============================================================================
Write-Host "========================================================" -ForegroundColor DarkYellow
Write-Host "   Resilient Compiler - Comprehensive Verification Suite" -ForegroundColor DarkYellow
Write-Host "   Student: D JOSHUA DANIEL | Reg No: 24BCE0436        " -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor DarkYellow
Write-Host ""

$tests = @(
    @{ Name = "Test 01: Valid Program";             File = "tests/01_valid_program.txt";              Flags = "";                 ExpectedExit = 0; Description = "Clean compilation with no errors" },
    @{ Name = "Test 02: Missing Expression";         File = "tests/02_missing_expression.txt";         Flags = "";                 ExpectedExit = 0; Description = "Intelligent Insertion of default literal '0'" },
    @{ Name = "Test 03: Extra Semicolon";            File = "tests/03_extra_semicolon.txt";            Flags = "";                 ExpectedExit = 0; Description = "Intelligent Deletion of redundant semicolons" },
    @{ Name = "Test 04: Missing Delimiter ')'";      File = "tests/04_missing_delimiter.txt";          Flags = "";                 ExpectedExit = 0; Description = "Intelligent Insertion of missing ')' before block '{'" },
    @{ Name = "Test 05: Multiple Syntax Errors";     File = "tests/05_multiple_errors.txt";            Flags = "";                 ExpectedExit = 0; Description = "Multi-strategy recovery across 4 distinct syntax errors" },
    @{ Name = "Test 06: Panic Mode Recovery";        File = "tests/06_panic_mode_recovery.txt";        Flags = "";                 ExpectedExit = 0; Description = "Panic mode synchronization on illegal characters" },
    @{ Name = "Test 07: Undeclared Variable";        File = "tests/07_undeclared_variable.txt";        Flags = "";                 ExpectedExit = 1; Description = "Semantic rejection of undeclared variable 'y'" },
    @{ Name = "Test 08: Duplicate Declaration";      File = "tests/08_duplicate_declaration.txt";      Flags = "";                 ExpectedExit = 1; Description = "Semantic rejection of re-declaring in same scope" },
    @{ Name = "Test 09: Type Mismatch";              File = "tests/09_type_mismatch.txt";              Flags = "";                 ExpectedExit = 1; Description = "Semantic rejection of assigning float to int" },
    @{ Name = "Test 10: Nested Scope Shadowing";     File = "tests/10_nested_scopes.txt";              Flags = "";                 ExpectedExit = 0; Description = "Proper block scoping and variable shadowing" },
    @{ Name = "Test 11: Constant Folding";           File = "tests/11_constant_folding.txt";           Flags = "";                 ExpectedExit = 0; Description = "Compile-time arithmetic constant folding" },
    @{ Name = "Test 12: End-to-End VM Execution";    File = "tests/12_end_to_end_exec.txt";            Flags = "--run";            ExpectedExit = 0; Description = "Full pipeline execution with while loop sum on VM" },
    @{ Name = "Test 13: Operator Precedence";        File = "examples/arithmetic_demo.txt";            Flags = "--ast";            ExpectedExit = 0; Description = "Correct AST hierarchy for *, +, relational, &&" },
    @{ Name = "Test 14: Fibonacci Algorithm";        File = "examples/fibonacci.txt";                  Flags = "--run";            ExpectedExit = 0; Description = "Iterative Fibonacci sequence on Virtual Machine" },
    @{ Name = "Test 15: Valid Arithmetic Suite";     File = "examples/01_valid_arithmetic.txt";        Flags = "--all";            ExpectedExit = 0; Description = "Full arithmetic operators (+, -, *, /, %) with TAC & ASM" },
    @{ Name = "Test 16: Conditional Branching";      File = "examples/04_conditional_statement.txt";   Flags = "--all";            ExpectedExit = 0; Description = "Nested if-else branches lowering to TAC and assembly" },
    @{ Name = "Test 17: Loop Factorial";             File = "examples/05_loop_computation.txt";        Flags = "--all";            ExpectedExit = 0; Description = "While loop condition and backward jump in assembly & VM" },
    @{ Name = "Test 18: x86 Target Assembly";        File = "examples/13_tac_and_assembly.txt";        Flags = "--asm";            ExpectedExit = 0; Description = "Real x86-32 AT&T assembly emission with stack frames" },
    @{ Name = "Test 19: Educational Assembly";       File = "examples/13_tac_and_assembly.txt";        Flags = "--edu-asm";        ExpectedExit = 0; Description = "Educational ISA-32 load-store register assembly" },
    @{ Name = "Test 20: Native GCC Asm & Exec";      File = "examples/06_fibonacci.txt";               Flags = "--compile-native"; ExpectedExit = 0; Description = "Direct machine execution using MinGW GCC assembler" }
)

$passedCount = 0
$failedCount = 0

foreach ($t in $tests) {
    Write-Host "--------------------------------------------------------" -ForegroundColor DarkGray
    Write-Host "RUNNING: $($t.Name)" -ForegroundColor Yellow
    Write-Host "Target: $($t.File) $($t.Flags) | Expectation: $($t.Description)" -ForegroundColor DarkGray

    $cmd = ".\resilientc.exe $($t.File) $($t.Flags)"
    $output = Invoke-Expression "$cmd 2>&1"
    $actualExit = $LASTEXITCODE

    if ($actualExit -eq $t.ExpectedExit) {
        Write-Host "RESULT: PASS (Exit code: $actualExit as expected)" -ForegroundColor Green
        $passedCount++
    } else {
        Write-Host "RESULT: FAIL (Expected exit code $($t.ExpectedExit), got $actualExit)" -ForegroundColor Red
        $failedCount++
    }
}

$summaryColor = "Green"
if ($failedCount -gt 0) {
    $summaryColor = "Red"
}
Write-Host "========================================================" -ForegroundColor DarkYellow
Write-Host "TEST SUMMARY: $passedCount PASSED, $failedCount FAILED (Total: $($tests.Count))" -ForegroundColor $summaryColor
Write-Host "Pass Rate   : $([math]::Round(($passedCount / $tests.Count) * 100, 1))%" -ForegroundColor $summaryColor
Write-Host "========================================================" -ForegroundColor DarkYellow

if ($failedCount -gt 0) {
    exit 1
} else {
    exit 0
}
