#ifndef RECOVERY_TYPES_H
#define RECOVERY_TYPES_H

#include "../lexer/Token.h"
#include <string>

enum class RecoveryStrategy {
    INSERTION,
    DELETION,
    PANIC_MODE
};

struct RecoveryDecision {
    RecoveryStrategy strategy;
    int cost;
    std::string confidence;
    std::string reason;
};

struct RecoveryContext {
    TokenType expectedType;
    std::string expectedLexeme;
    Token actualToken;
    Token nextToken;
    bool hasNextToken = false;
};

#endif
