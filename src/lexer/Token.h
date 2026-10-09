#ifndef TOKEN_H
#define TOKEN_H

#include <string>

enum class TokenType {
    INT,
    FLOAT,
    BOOL,
    IF,
    ELSE,
    WHILE,
    PRINT,

    IDENTIFIER,
    NUMBER,

    PLUS,
    MINUS,
    MULTIPLY,
    DIVIDE,
    MODULO,

    ASSIGN,

    EQUAL,
    NOT_EQUAL,
    LESS,
    GREATER,
    LESS_EQUAL,
    GREATER_EQUAL,

    AND,
    OR,

    LEFT_PAREN,
    RIGHT_PAREN,
    LEFT_BRACE,
    RIGHT_BRACE,
    SEMICOLON,

    END_OF_FILE,
    UNKNOWN
};

struct Token {
    TokenType type;
    std::string lexeme;
    int line;
    int column;
};

#endif