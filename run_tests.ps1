# Comprehensive Automated Test Suite for Resilient Compiler Review
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "   Resilient Compiler - Comprehensive Test Suite       " -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

$tests = @(
    @{ Name = "Test 01: Valid Program";           File = "tests/01_valid_program.txt";           ExpectedExit = 0; Description = "Clean compilation with no errors" },
    @{ Name = "Test 02: Missing Expression";       File = "tests/02_missing_expression.txt";       ExpectedExit = 0; Description = "Intelligent Insertion of default literal '0'" },
    @{ Name = "Test 03: Extra Semicolon";          File = "tests/03_extra_semicolon.txt";          ExpectedExit = 0; Description = "Intelligent Deletion of redundant semicolons" },
    @{ Name = "Test 04: Missing Delimiter ')'";    File = "tests/04_missing_delimiter.txt";        ExpectedExit = 0; Description = "Intelligent Insertion of missing ')' before block '{'" },
    @{ Name = "Test 05: Multiple Syntax Errors";   File = "tests/05_multiple_errors.txt";          ExpectedExit = 0; Description = "Multi-strategy recovery across 4 distinct syntax errors" },
    @{ Name = "Test 06: Panic Mode Recovery";      File = "tests/06_panic_mode_recovery.txt";      ExpectedExit = 0; Description = "Panic mode synchronization on illegal characters" },
    @{ Name = "Test 07: Undeclared Variable";      File = "tests/07_undeclared_variable.txt";      ExpectedExit = 1; Description = "Semantic rejection of undeclared variable 'y'" },
    @{ Name = "Test 08: Duplicate Declaration";    File = "tests/08_duplicate_declaration.txt";    ExpectedExit = 1; Description = "Semantic rejection of re-declaring 'a' in same scope" },
    @{ Name = "Test 09: Type Mismatch";            File = "tests/09_type_mismatch.txt";            ExpectedExit = 1; Description = "Semantic rejection of assigning float to int" },
    @{ Name = "Test 10: Nested Scope Shadowing";   File = "tests/10_nested_scopes.txt";            ExpectedExit = 0; Description = "Proper block scoping and variable shadowing" },
    @{ Name = "Test 11: Constant Folding";         File = "tests/11_constant_folding.txt";         ExpectedExit = 0; Description = "Compile-time arithmetic constant folding" },
    @{ Name = "Test 12: End-to-End VM Execution";  File = "tests/12_end_to_end_exec.txt";          ExpectedExit = 0; Description = "Full pipeline execution with while loop sum on VM" },
    @{ Name = "Test 13: Operator Precedence";      File = "examples/arithmetic_demo.txt";          ExpectedExit = 0; Description = "Correct AST hierarchy for *, +, relational, and &&" },
    @{ Name = "Test 14: Fibonacci Algorithm";      File = "examples/fibonacci.txt";                ExpectedExit = 0; Description = "Complex control flow and variable updates" }
)

$passedCount = 0
$failedCount = 0

foreach ($t in $tests) {
    Write-Host "--------------------------------------------------------" -ForegroundColor DarkGray
    Write-Host "RUNNING: $($t.Name)" -ForegroundColor Yellow
    Write-Host "Target: $($t.File) | Expectation: $($t.Description)" -ForegroundColor DarkGray
    
    $output = & .\resilientc.exe $t.File 2>&1
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
Write-Host "TEST SUMMARY: $passedCount PASSED, $failedCount FAILED (Total: $($tests.Count))" -ForegroundColor $summaryColor
Write-Host "========================================================" -ForegroundColor Cyan

if ($failedCount -gt 0) {
    exit 1
} else {
    exit 0
}
