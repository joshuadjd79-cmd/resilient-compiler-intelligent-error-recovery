#include "Lexer.h"
#include <cctype>
#include <stdexcept>
#include <unordered_map>

Lexer::Lexer(const std::string& sourceCode)
    : source(sourceCode), position(0), line(1), column(1) {}

char Lexer::currentChar() {
    if (position >= source.length()) {
        return '\0';
    }
    return source[position];
}

char Lexer::peekChar() {
    if (position + 1 >= source.length()) {
        return '\0';
    }
    return source[position + 1];
}

void Lexer::advance() {
    if (currentChar() == '\n') {
        line++;
        column = 1;
    } else {
        column++;
    }

    position++;
}

void Lexer::skipWhitespace() {
    while (std::isspace(static_cast<unsigned char>(currentChar()))) {
        advance();
    }
}

void Lexer::skipComment() {
    if (currentChar() == '/' && peekChar() == '/') {
        while (currentChar() != '\n' && currentChar() != '\0') {
            advance();
        }
    }
}

Token Lexer::readIdentifierOrKeyword() {
    int startLine = line;
    int startColumn = column;
    std::string value;

    while (std::isalnum(static_cast<unsigned char>(currentChar())) ||
           currentChar() == '_') {
        value += currentChar();
        advance();
    }

    static const std::unordered_map<std::string, TokenType> keywords = {
        {"int", TokenType::INT},
        {"float", TokenType::FLOAT},
        {"bool", TokenType::BOOL},
        {"if", TokenType::IF},
        {"else", TokenType::ELSE},
        {"while", TokenType::WHILE},
        {"print", TokenType::PRINT}
    };

    auto it = keywords.find(value);

    if (it != keywords.end()) {
        return {it->second, value, startLine, startColumn};
    }

    return {TokenType::IDENTIFIER, value, startLine, startColumn};
}

Token Lexer::readNumber() {
    int startLine = line;
    int startColumn = column;
    std::string value;
    bool hasDecimal = false;

    while (std::isdigit(static_cast<unsigned char>(currentChar())) ||
           currentChar() == '.') {

        if (currentChar() == '.') {
            if (hasDecimal) {
                break;
            }
            hasDecimal = true;
        }

        value += currentChar();
        advance();
    }

    return {TokenType::NUMBER, value, startLine, startColumn};
}

Token Lexer::readOperatorOrDelimiter() {
    int startLine = line;
    int startColumn = column;

    char current = currentChar();
    char next = peekChar();

    if (current == '=' && next == '=') {
        advance();
        advance();
        return {TokenType::EQUAL, "==", startLine, startColumn};
    }

    if (current == '!' && next == '=') {
        advance();
        advance();
        return {TokenType::NOT_EQUAL, "!=", startLine, startColumn};
    }

    if (current == '<' && next == '=') {
        advance();
        advance();
        return {TokenType::LESS_EQUAL, "<=", startLine, startColumn};
    }

    if (current == '>' && next == '=') {
        advance();
        advance();
        return {TokenType::GREATER_EQUAL, ">=", startLine, startColumn};
    }

    if (current == '&' && next == '&') {
        advance();
        advance();
        return {TokenType::AND, "&&", startLine, startColumn};
    }

    if (current == '|' && next == '|') {
        advance();
        advance();
        return {TokenType::OR, "||", startLine, startColumn};
    }

    advance();

    switch (current) {
        case '+': return {TokenType::PLUS, "+", startLine, startColumn};
        case '-': return {TokenType::MINUS, "-", startLine, startColumn};
        case '*': return {TokenType::MULTIPLY, "*", startLine, startColumn};
        case '/': return {TokenType::DIVIDE, "/", startLine, startColumn};
        case '%': return {TokenType::MODULO, "%", startLine, startColumn};
        case '=': return {TokenType::ASSIGN, "=", startLine, startColumn};
        case '<': return {TokenType::LESS, "<", startLine, startColumn};
        case '>': return {TokenType::GREATER, ">", startLine, startColumn};
        case '(': return {TokenType::LEFT_PAREN, "(", startLine, startColumn};
        case ')': return {TokenType::RIGHT_PAREN, ")", startLine, startColumn};
        case '{': return {TokenType::LEFT_BRACE, "{", startLine, startColumn};
        case '}': return {TokenType::RIGHT_BRACE, "}", startLine, startColumn};
        case ';': return {TokenType::SEMICOLON, ";", startLine, startColumn};
        default: return {TokenType::UNKNOWN, std::string(1, current), startLine, startColumn};
    }
}

std::vector<Token> Lexer::tokenize() {
    std::vector<Token> tokens;

    while (currentChar() != '\0') {
        if (std::isspace(static_cast<unsigned char>(currentChar()))) {
            skipWhitespace();
            continue;
        }

        if (currentChar() == '/' && peekChar() == '/') {
            skipComment();
            continue;
        }

        if (std::isalpha(static_cast<unsigned char>(currentChar())) ||
            currentChar() == '_') {
            tokens.push_back(readIdentifierOrKeyword());
            continue;
        }

        if (std::isdigit(static_cast<unsigned char>(currentChar()))) {
            tokens.push_back(readNumber());
            continue;
        }

        tokens.push_back(readOperatorOrDelimiter());
    }

    tokens.push_back({TokenType::END_OF_FILE, "", line, column});

    return tokens;
}