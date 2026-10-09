#ifndef SEMANTIC_ANALYZER_H
#define SEMANTIC_ANALYZER_H

#include "../ast/AST.h"
#include "SymbolTable.h"
#include <string>
#include <vector>

struct SemanticError {
    std::string message;
    int line;
    int column;
};

class SemanticAnalyzer {
private:
    SymbolTable symbolTable;
    std::vector<SemanticError> errors;

    void addError(const std::string& message, int line = 0, int column = 0);

    // Expression type evaluation
    std::string analyzeExpression(const ASTNode* node);

    // Statement visitors
    void analyzeStatement(const ASTNode* node);
    void analyzeDeclaration(const DeclarationNode* node);
    void analyzeAssignment(const AssignmentNode* node);
    void analyzeIf(const IfNode* node);
    void analyzeWhile(const WhileNode* node);
    void analyzePrint(const PrintNode* node);
    void analyzeBlock(const BlockNode* node);

public:
    SemanticAnalyzer();

    bool analyze(const ProgramNode* program);

    const SymbolTable& getSymbolTable() const;
    const std::vector<SemanticError>& getErrors() const;
    bool hasErrors() const;

    void printReport() const;
};

#endif
