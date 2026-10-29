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
#include "codegen/AssemblyGenerator.h"

static const char* getTokenTypeName(TokenType type) {
    switch (type) {
        case TokenType::INT: return "INT";
        case TokenType::FLOAT: return "FLOAT";
        case TokenType::BOOL: return "BOOL";
        case TokenType::IF: return "IF";
        case TokenType::ELSE: return "ELSE";
        case TokenType::WHILE: return "WHILE";
        case TokenType::PRINT: return "PRINT";
        case TokenType::TRUE: return "TRUE";
        case TokenType::FALSE: return "FALSE";
        case TokenType::IDENTIFIER: return "IDENTIFIER";
        case TokenType::NUMBER: return "NUMBER";
        case TokenType::PLUS: return "PLUS";
        case TokenType::MINUS: return "MINUS";
        case TokenType::MULTIPLY: return "MULTIPLY";
        case TokenType::DIVIDE: return "DIVIDE";
        case TokenType::MODULO: return "MODULO";
        case TokenType::ASSIGN: return "ASSIGN";
        case TokenType::EQUAL: return "EQUAL";
        case TokenType::NOT_EQUAL: return "NOT_EQUAL";
        case TokenType::LESS: return "LESS";
        case TokenType::GREATER: return "GREATER";
        case TokenType::LESS_EQUAL: return "LESS_EQUAL";
        case TokenType::GREATER_EQUAL: return "GREATER_EQUAL";
        case TokenType::AND: return "AND";
        case TokenType::OR: return "OR";
        case TokenType::LEFT_PAREN: return "LEFT_PAREN";
        case TokenType::RIGHT_PAREN: return "RIGHT_PAREN";
        case TokenType::LEFT_BRACE: return "LEFT_BRACE";
        case TokenType::RIGHT_BRACE: return "RIGHT_BRACE";
        case TokenType::SEMICOLON: return "SEMICOLON";
        case TokenType::END_OF_FILE: return "END_OF_FILE";
        default: return "UNKNOWN";
    }
}

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
    bool showTokens  = showAll || flags.count("--tokens") > 0;
    bool showAst     = showAll || flags.count("--ast") > 0;
    bool showSymbols = showAll || flags.count("--symbols") > 0;
    bool showTac     = showAll || flags.count("--tac") > 0;
    bool showOpt     = showAll || flags.count("--opt") > 0;
    bool showTarget  = showAll || flags.count("--target") > 0;
    bool showAsm     = showAll || flags.count("--asm") > 0 || flags.count("--assembly") > 0;
    bool showEduAsm  = flags.count("--edu-asm") > 0;
    bool runVm       = showAll || flags.count("--run") > 0;
    bool runNative   = flags.count("--compile-native") > 0 || flags.count("--run-native") > 0;

    // If no specific flag was given, enable standard full-pipeline output
    if (!showTokens && !showAst && !showSymbols && !showTac && !showOpt &&
        !showTarget && !showAsm && !showEduAsm && !runVm && !runNative) {
        showTokens = true;
        showAst = true;
        showSymbols = true;
        showTac = true;
        showOpt = true;
        showTarget = true;
        showAsm = true;
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

    // 2b. Lexical Tokens Stream
    if (showTokens) {
        std::cout << "\n=== Lexical Tokens (" << tokens.size() << " tokens) ===\n";
        for (std::size_t i = 0; i < tokens.size(); ++i) {
            std::cout << "[" << i << "] Line " << tokens[i].line << ", Col " << tokens[i].column
                      << " | Type: " << getTokenTypeName(tokens[i].type)
                      << " | Lexeme: '" << tokens[i].lexeme << "'\n";
        }
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

    // 7. Target Assembly Generation (x86-32 AT&T and Educational)
    AssemblyGenerator asmGen;
    std::string x86Asm = asmGen.generateX86(optTac);
    std::string eduAsm = asmGen.generateEducational(optTac);

    if (showAsm) {
        std::cout << "\n=== Target Assembly Code (x86-32 AT&T) ===\n";
        std::cout << x86Asm;
    }

    if (showEduAsm) {
        std::cout << "\n=== Target Educational Assembly (ISA-32) ===\n";
        std::cout << eduAsm;
    }

    // Optional Native Execution via GCC
    if (runNative) {
        std::cout << "\n=== Native Assembly Execution (via GCC Toolchain) ===\n";
        std::string nativeOut;
        int nativeExit = 0;
        bool ok = AssemblyGenerator::assembleAndRun(x86Asm, nativeOut, nativeExit);
        if (ok) {
            std::cout << nativeOut;
            std::cout << "[Native Exit Code]: " << nativeExit << "\n";
        } else {
            std::cout << "[Native Run Failed]: " << nativeOut << "\n";
        }
    }

    // 8. Target Bytecode & Virtual Machine
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
