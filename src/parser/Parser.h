#ifndef PARSER_H
#define PARSER_H

#include "../lexer/Token.h"
#include "../ast/AST.h"
#include "../recovery/RecoveryManager.h"
#include <vector>
#include <memory>
#include <string>

class Parser {
private:
    std::vector<Token> tokens;
    std::size_t current;
    RecoveryManager& recoveryManager;

    Token& peek();
    Token& previous();

    bool isAtEnd();
    bool check(TokenType type);
    bool match(TokenType type);

    Token consume(TokenType type, const std::string& expected);

    ASTNodePtr parseStatement();
    ASTNodePtr parseDeclaration();
    ASTNodePtr parseAssignment();
    ASTNodePtr parseIf();
    ASTNodePtr parseWhile();
    ASTNodePtr parsePrint();
    ASTNodePtr parseBlock();

    ASTNodePtr parseExpression();
    ASTNodePtr parseLogicalOr();
    ASTNodePtr parseLogicalAnd();
    ASTNodePtr parseEquality();
    ASTNodePtr parseRelational();
    ASTNodePtr parseAdditive();
    ASTNodePtr parseTerm();
    ASTNodePtr parseFactor();
    ASTNodePtr parsePrimary();

    int synchronize();

public:
    Parser(
        const std::vector<Token>& tokens,
        RecoveryManager& recoveryManager
    );

    std::unique_ptr<ProgramNode> parse();
};

#endif