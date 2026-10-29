#include "Parser.h"
#include "../recovery/RecoveryScorer.h"
#include <stdexcept>

Parser::Parser(
    const std::vector<Token>& inputTokens,
    RecoveryManager& manager
)
    : tokens(inputTokens),
      current(0),
      recoveryManager(manager) {}

Token& Parser::peek() {
    if (current >= tokens.size()) {
        return tokens.back();
    }
    return tokens[current];
}

Token& Parser::previous() {
    if (current == 0) {
        return tokens[0];
    }
    return tokens[current - 1];
}

bool Parser::isAtEnd() {
    return peek().type == TokenType::END_OF_FILE;
}

bool Parser::check(TokenType type) {
    if (isAtEnd()) {
        return type == TokenType::END_OF_FILE;
    }

    return peek().type == type;
}

bool Parser::match(TokenType type) {
    if (!check(type)) {
        return false;
    }

    current++;
    return true;
}

Token Parser::consume(
    TokenType type,
    const std::string& expected
) {
    if (check(type)) {
        return tokens[current++];
    }

    RecoveryContext context;
    context.expectedType = type;
    context.expectedLexeme = expected;
    context.actualToken = peek();
    if (current + 1 < tokens.size()) {
        context.nextToken = tokens[current + 1];
        context.hasNextToken = true;
    }

    RecoveryDecision decision = recoveryManager.evaluate(context);

    if (decision.strategy == RecoveryStrategy::DELETION) {
        recoveryManager.recordDeletion(
            peek(),
            decision.cost,
            decision.confidence,
            decision.reason
        );
        current++;

        if (check(type)) {
            return tokens[current++];
        }
    } else if (decision.strategy == RecoveryStrategy::INSERTION) {
        recoveryManager.recordInsertion(
            peek(),
            expected,
            decision.cost,
            decision.confidence,
            decision.reason
        );

        return {
            type,
            expected,
            peek().line,
            peek().column
        };
    }

    // Fallback: Panic Mode
    Token errorToken = peek();
    int skipped = synchronize();
    recoveryManager.recordPanicMode(
        errorToken,
        skipped,
        ";",
        5,
        "LOW",
        decision.strategy == RecoveryStrategy::PANIC_MODE ? decision.reason : "Panic mode: fallback synchronization after unrecoverable token"
    );

    return {
        type,
        expected,
        errorToken.line,
        errorToken.column
    };
}

std::unique_ptr<ProgramNode> Parser::parse() {
    auto program = std::make_unique<ProgramNode>();

    while (!isAtEnd()) {
        try {
            ASTNodePtr statement = parseStatement();

            if (statement) {
                program->statements.push_back(
                    std::move(statement)
                );
            }
        }
        catch (const std::exception& e) {
            Token errLoc = peek();
            int skipped = synchronize();
            recoveryManager.recordPanicMode(
                errLoc,
                skipped,
                ";",
                5,
                "LOW",
                std::string(e.what())
            );
        }
    }

    return program;
}

ASTNodePtr Parser::parseStatement() {
    if (check(TokenType::SEMICOLON)) {
        recoveryManager.recordDeletion(
            peek(),
            1,
            "HIGH",
            "Deleted redundant semicolon ';'"
        );
        current++;
        return nullptr;
    }

    if (check(TokenType::INT) ||
        check(TokenType::FLOAT) ||
        check(TokenType::BOOL)) {
        return parseDeclaration();
    }

    if (check(TokenType::IF)) {
        return parseIf();
    }

    if (check(TokenType::WHILE)) {
        return parseWhile();
    }

    if (check(TokenType::PRINT)) {
        return parsePrint();
    }

    if (check(TokenType::LEFT_BRACE)) {
        return parseBlock();
    }

    if (check(TokenType::IDENTIFIER)) {
        return parseAssignment();
    }

    throw std::runtime_error(
        "Unexpected token '" + peek().lexeme +
        "' at line " + std::to_string(peek().line) +
        ", column " + std::to_string(peek().column)
    );
}

ASTNodePtr Parser::parsePrint() {
    Token printTok = consume(TokenType::PRINT, "print");
    ASTNodePtr expression = parseExpression();
    consume(TokenType::SEMICOLON, ";");
    return std::make_unique<PrintNode>(std::move(expression), printTok.line, printTok.column);
}

ASTNodePtr Parser::parseDeclaration() {
    std::string type;

    if (match(TokenType::INT)) {
        type = "int";
    } else if (match(TokenType::FLOAT)) {
        type = "float";
    } else if (match(TokenType::BOOL)) {
        type = "bool";
    } else {
        throw std::runtime_error("Expected type");
    }

    Token name = consume(
        TokenType::IDENTIFIER,
        "identifier"
    );

    ASTNodePtr initializer = nullptr;

    if (match(TokenType::ASSIGN)) {
        try {
            initializer = parseExpression();
        } catch (const std::exception&) {
            Token errToken = peek();
            recoveryManager.recordInsertion(
                errToken,
                "0",
                2,
                "MEDIUM",
                "Missing expression after '='; inserted default literal '0'"
            );
            initializer = std::make_unique<LiteralNode>("0", errToken.line, errToken.column);
            if (!check(TokenType::SEMICOLON)) {
                synchronize();
            }
        }
    }

    consume(
        TokenType::SEMICOLON,
        ";"
    );

    return std::make_unique<DeclarationNode>(
        type,
        name.lexeme,
        std::move(initializer),
        name.line,
        name.column
    );
}

ASTNodePtr Parser::parseAssignment() {
    Token name = consume(
        TokenType::IDENTIFIER,
        "identifier"
    );

    consume(
        TokenType::ASSIGN,
        "="
    );

    ASTNodePtr value = nullptr;
    try {
        value = parseExpression();
    } catch (const std::exception&) {
        Token errToken = peek();
        recoveryManager.recordInsertion(
            errToken,
            "0",
            2,
            "MEDIUM",
            "Missing expression in assignment; inserted default literal '0'"
        );
        value = std::make_unique<LiteralNode>("0", errToken.line, errToken.column);
        if (!check(TokenType::SEMICOLON)) {
            synchronize();
        }
    }

    consume(
        TokenType::SEMICOLON,
        ";"
    );

    return std::make_unique<AssignmentNode>(
        name.lexeme,
        std::move(value),
        name.line,
        name.column
    );
}

ASTNodePtr Parser::parseIf() {
    Token ifTok = consume(
        TokenType::IF,
        "if"
    );

    consume(
        TokenType::LEFT_PAREN,
        "("
    );

    ASTNodePtr condition = nullptr;
    try {
        condition = parseExpression();
    } catch (const std::exception&) {
        Token errToken = peek();
        recoveryManager.recordInsertion(
            errToken,
            "1",
            2,
            "MEDIUM",
            "Missing condition in if statement; inserted default condition '1'"
        );
        condition = std::make_unique<LiteralNode>("1", errToken.line, errToken.column);
    }

    consume(
        TokenType::RIGHT_PAREN,
        ")"
    );

    ASTNodePtr thenBranch = parseStatement();

    ASTNodePtr elseBranch = nullptr;

    if (match(TokenType::ELSE)) {
        elseBranch = parseStatement();
    }

    return std::make_unique<IfNode>(
        std::move(condition),
        std::move(thenBranch),
        std::move(elseBranch),
        ifTok.line,
        ifTok.column
    );
}

ASTNodePtr Parser::parseWhile() {
    Token whileTok = consume(
        TokenType::WHILE,
        "while"
    );

    consume(
        TokenType::LEFT_PAREN,
        "("
    );

    ASTNodePtr condition = nullptr;
    try {
        condition = parseExpression();
    } catch (const std::exception&) {
        Token errToken = peek();
        recoveryManager.recordInsertion(
            errToken,
            "1",
            2,
            "MEDIUM",
            "Missing condition in while loop; inserted default condition '1'"
        );
        condition = std::make_unique<LiteralNode>("1", errToken.line, errToken.column);
    }

    consume(
        TokenType::RIGHT_PAREN,
        ")"
    );

    ASTNodePtr body = parseStatement();

    return std::make_unique<WhileNode>(
        std::move(condition),
        std::move(body),
        whileTok.line,
        whileTok.column
    );
}

ASTNodePtr Parser::parseBlock() {
    Token braceTok = consume(
        TokenType::LEFT_BRACE,
        "{"
    );

    auto block = std::make_unique<BlockNode>(braceTok.line, braceTok.column);

    while (!check(TokenType::RIGHT_BRACE) &&
           !isAtEnd()) {

        try {
            ASTNodePtr statement = parseStatement();

            if (statement) {
                block->statements.push_back(
                    std::move(statement)
                );
            }
        }
        catch (const std::exception& e) {
            Token errLoc = peek();
            int skipped = synchronize();
            recoveryManager.recordPanicMode(
                errLoc,
                skipped,
                ";",
                5,
                "LOW",
                std::string(e.what())
            );
        }
    }

    consume(
        TokenType::RIGHT_BRACE,
        "}"
    );

    return block;
}

ASTNodePtr Parser::parseExpression() {
    return parseLogicalOr();
}

ASTNodePtr Parser::parseLogicalOr() {
    ASTNodePtr expression = parseLogicalAnd();

    while (check(TokenType::OR)) {
        Token operation = tokens[current++];
        ASTNodePtr right = parseLogicalAnd();

        expression = std::make_unique<BinaryExpressionNode>(
            operation.lexeme,
            std::move(expression),
            std::move(right),
            operation.line,
            operation.column
        );
    }

    return expression;
}

ASTNodePtr Parser::parseLogicalAnd() {
    ASTNodePtr expression = parseEquality();

    while (check(TokenType::AND)) {
        Token operation = tokens[current++];
        ASTNodePtr right = parseEquality();

        expression = std::make_unique<BinaryExpressionNode>(
            operation.lexeme,
            std::move(expression),
            std::move(right),
            operation.line,
            operation.column
        );
    }

    return expression;
}

ASTNodePtr Parser::parseEquality() {
    ASTNodePtr expression = parseRelational();

    while (check(TokenType::EQUAL) ||
           check(TokenType::NOT_EQUAL)) {
        Token operation = tokens[current++];
        ASTNodePtr right = parseRelational();

        expression = std::make_unique<BinaryExpressionNode>(
            operation.lexeme,
            std::move(expression),
            std::move(right),
            operation.line,
            operation.column
        );
    }

    return expression;
}

ASTNodePtr Parser::parseRelational() {
    ASTNodePtr expression = parseAdditive();

    while (check(TokenType::LESS) ||
           check(TokenType::GREATER) ||
           check(TokenType::LESS_EQUAL) ||
           check(TokenType::GREATER_EQUAL)) {
        Token operation = tokens[current++];
        ASTNodePtr right = parseAdditive();

        expression = std::make_unique<BinaryExpressionNode>(
            operation.lexeme,
            std::move(expression),
            std::move(right),
            operation.line,
            operation.column
        );
    }

    return expression;
}

ASTNodePtr Parser::parseAdditive() {
    ASTNodePtr expression = parseTerm();

    while (check(TokenType::PLUS) ||
           check(TokenType::MINUS)) {
        Token operation = tokens[current++];
        ASTNodePtr right = parseTerm();

        expression = std::make_unique<BinaryExpressionNode>(
            operation.lexeme,
            std::move(expression),
            std::move(right),
            operation.line,
            operation.column
        );
    }

    return expression;
}

ASTNodePtr Parser::parseTerm() {
    ASTNodePtr expression = parseFactor();

    while (check(TokenType::MULTIPLY) ||
           check(TokenType::DIVIDE) ||
           check(TokenType::MODULO)) {

        Token operation = tokens[current++];
        ASTNodePtr right = parseFactor();

        expression = std::make_unique<BinaryExpressionNode>(
            operation.lexeme,
            std::move(expression),
            std::move(right),
            operation.line,
            operation.column
        );
    }

    return expression;
}

ASTNodePtr Parser::parseFactor() {
    if (match(TokenType::MINUS)) {
        Token minusTok = previous();
        ASTNodePtr operand = parseFactor();

        return std::make_unique<BinaryExpressionNode>(
            "unary-",
            std::make_unique<LiteralNode>("0", minusTok.line, minusTok.column),
            std::move(operand),
            minusTok.line,
            minusTok.column
        );
    }

    return parsePrimary();
}

ASTNodePtr Parser::parsePrimary() {
    if (match(TokenType::NUMBER) || match(TokenType::TRUE) || match(TokenType::FALSE)) {
        return std::make_unique<LiteralNode>(
            previous().lexeme,
            previous().line,
            previous().column
        );
    }

    if (match(TokenType::IDENTIFIER)) {
        return std::make_unique<IdentifierNode>(
            previous().lexeme,
            previous().line,
            previous().column
        );
    }

    if (match(TokenType::LEFT_PAREN)) {
        ASTNodePtr expression = parseExpression();

        consume(
            TokenType::RIGHT_PAREN,
            ")"
        );

        return expression;
    }

    throw std::runtime_error(
        "Expected expression at line " +
        std::to_string(peek().line) +
        ", column " +
        std::to_string(peek().column)
    );
}

int Parser::synchronize() {
    int skipped = 0;
    while (!isAtEnd()) {
        if (check(TokenType::SEMICOLON)) {
            current++;
            skipped++;
            return skipped;
        }

        if (check(TokenType::INT) ||
            check(TokenType::FLOAT) ||
            check(TokenType::BOOL) ||
            check(TokenType::IF) ||
            check(TokenType::WHILE) ||
            check(TokenType::PRINT) ||
            check(TokenType::RIGHT_BRACE)) {
            if (skipped == 0) {
                current++;
                skipped++;
            }
            return skipped;
        }

        current++;
        skipped++;
    }
    return skipped;
}
