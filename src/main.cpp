#include <iostream>
#include <string>
#include <vector>
#include <memory>
#include <fstream>
#include <sstream>
#include <unordered_set>

#include "lexer/Lexer.h"
#include "parser/Parser.h"
#include "recovery/RecoveryManager.h"
#include "recovery/RecoveryScorer.h"
#include "semantics/SemanticAnalyzer.h"
#include "ir/TAC.h"
#include "ir/IRGenerator.h"
#include "optimizer/Optimizer.h"
#include "vm/VM.h"
#include "vm/CodeGenerator.h"

int main(int argc, char* argv[]) {
    std::cout << "========================================================\n";
    std::cout << " Resilient Compiler with Intelligent Error Recovery   \n";
    std::cout << "========================================================\n\n";

    std::string filename = "";
    std::unordered_set<std::string> flags;

    for (int i = 1; i < argc; ++i) {
        std::string arg = argv[i];
        if (arg.rfind("--", 0) == 0) {
            flags.insert(arg);
        } else if (filename.empty()) {
            filename = arg;
        }
    }

    bool showAll     = flags.count("--all") > 0;
    bool showAst     = showAll || flags.count("--ast") > 0;
    bool showSymbols = showAll || flags.count("--symbols") > 0;
    bool showTac     = showAll || flags.count("--tac") > 0;
    bool showOpt     = showAll || flags.count("--opt") > 0;
    bool showTarget  = showAll || flags.count("--target") > 0;
    bool runVm       = showAll || flags.count("--run") > 0;

    // If no specific flag was given, enable standard full-pipeline output
    if (!showAst && !showSymbols && !showTac && !showOpt && !showTarget && !runVm) {
        showAst = true;
        showSymbols = true;
        showTac = true;
        showOpt = true;
        showTarget = true;
        runVm = true;
    }

    std::string source;

    if (!filename.empty()) {
        std::ifstream file(filename);
        if (!file.is_open()) {
            std::cerr << "Error: Could not open file: " << filename << "\n";
            return 1;
        }
        std::stringstream buffer;
        buffer << file.rdbuf();
        source = buffer.str();
        std::cout << "[Input Source File]: " << filename << "\n\n";
    } else {
        std::cout << "[Notice]: No input file provided. Running default demonstration.\n\n";
        source = R"(
        int x = 10;
        int y = 5;
        int result = x + y * 2;
        print result;

        if (result > 15) {
            result = result + 1;
        }
        print result;
        )";
    }

    std::cout << "=== Source Code ===\n" << source << "\n";

    // 1. Lexical Analysis
    Lexer lexer(source);
    std::vector<Token> tokens = lexer.tokenize();

    // 2. Parsing with Intelligent Error Recovery
    RecoveryManager recoveryManager;
    std::unique_ptr<ProgramNode> program = nullptr;

    try {
        Parser parser(tokens, recoveryManager);
        program = parser.parse();

        std::cout << "=== Resilient Compiler Status ===\n";
        std::cout << "Lexer  : SUCCESS (" << tokens.size() << " tokens generated)\n";
        std::cout << "Parser : SUCCESS\n";

        recoveryManager.printReport();
    }
    catch (const std::exception& error) {
        std::cout << "Fatal Compilation Error: " << error.what() << "\n";
        return 1;
    }

    // 3. Abstract Syntax Tree
    if (showAst) {
        std::cout << "\n=== Abstract Syntax Tree (AST) ===\n\n";
        if (program) {
            program->print();
        } else {
            std::cout << "<null AST>\n";
        }
    }

    // 4. Semantic Analysis & Symbol Table
    SemanticAnalyzer semanticAnalyzer;
    bool semanticOk = semanticAnalyzer.analyze(program.get());

    if (showSymbols || !semanticOk) {
        semanticAnalyzer.printReport();
    }

    if (!semanticOk) {
        std::cerr << "\n[Compilation Stopped]: Code contains semantic errors. IR and Code Generation skipped.\n";
        return 1; // Non-zero exit code for semantic errors
    }

    // 5. Intermediate Representation (Three-Address Code)
    IRGenerator irGen;
    std::vector<TACInstruction> rawTac = irGen.generate(program.get());

    if (showTac) {
        std::cout << "\n=== Three-Address Code (TAC) ===\n";
        printTAC(rawTac);
    }

    // 6. Code Optimization
    Optimizer optimizer;
    std::vector<TACInstruction> optTac = optimizer.optimize(rawTac);

    if (showOpt) {
        optimizer.printReport();
        std::cout << "\n=== Optimized Three-Address Code ===\n";
        printTAC(optTac);
    }

    // 7. Target Code Generation & VM Execution
    CodeGenerator codeGen;
    std::vector<VMInstruction> bytecode = codeGen.generate(optTac);

    if (showTarget) {
        VM vm;
        vm.load(bytecode);
        vm.printDisassembly();
    }

    if (runVm) {
        std::cout << "\n=== Virtual Machine Execution ===\n";
        VM vm;
        vm.load(bytecode);
        vm.run();
        vm.printMemory();
    }

    std::cout << "\n[Compilation Status]: SUCCESS (Pipeline Completed Successfully)\n";
    return 0;
}