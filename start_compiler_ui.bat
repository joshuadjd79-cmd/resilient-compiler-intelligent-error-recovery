@echo off
echo ========================================================
echo    Resilient Compiler - Starting Web IDE Server
echo ========================================================
echo.
echo Checking compiler executable...
if not exist "resilientc.exe" (
    echo Building resilientc.exe with g++...
    g++ -std=c++17 -Wall -Wextra src/main.cpp src/lexer/Lexer.cpp src/ast/AST.cpp src/parser/Parser.cpp src/recovery/RecoveryManager.cpp src/recovery/RecoveryScorer.cpp src/semantics/SymbolTable.cpp src/semantics/SemanticAnalyzer.cpp src/ir/TAC.cpp src/ir/IRGenerator.cpp src/optimizer/Optimizer.cpp src/vm/VM.cpp src/vm/CodeGenerator.cpp -o resilientc.exe
    if errorlevel 1 (
        echo [ERROR] Compilation failed!
        pause
        exit /b 1
    )
    echo [OK] resilientc.exe built successfully!
)

echo Starting Python server on http://localhost:8080 ...
start "" "http://localhost:8080"
python server.py
pause
