#ifndef LEXER_H
#define LEXER_H

#include "Token.h"
#include <string>
#include <vector>

class Lexer {
private:
    std::string source;
    std::size_t position;
    int line;
    int column;

    char currentChar();
    char peekChar();
    void advance();

    void skipWhitespace();
    void skipComment();

    Token readIdentifierOrKeyword();
    Token readNumber();
    Token readOperatorOrDelimiter();

public:
    explicit Lexer(const std::string& sourceCode);

    std::vector<Token> tokenize();
};

#endif