#ifndef TAC_H
#define TAC_H

#include <string>
#include <vector>

enum class TACOp {
    ADD, SUB, MUL, DIV, MOD,
    AND, OR,
    EQ, NE, LT, GT, LE, GE,
    NEG,
    ASSIGN,
    LABEL,
    GOTO,
    IF_TRUE,
    IF_FALSE,
    PRINT
};

struct TACInstruction {
    TACOp op;
    std::string result;
    std::string arg1;
    std::string arg2;

    std::string toString() const;
};

void printTAC(const std::vector<TACInstruction>& instructions);

#endif
