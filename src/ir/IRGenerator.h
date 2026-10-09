#ifndef IR_GENERATOR_H
#define IR_GENERATOR_H

#include "../ast/AST.h"
#include "TAC.h"
#include <string>
#include <vector>

class IRGenerator {
private:
    std::vector<TACInstruction> instructions;
    int tempCount;
    int labelCount;

    std::string newTemp();
    std::string newLabel();
    void emit(TACOp op, const std::string& result = "", const std::string& arg1 = "", const std::string& arg2 = "");

    std::string genExpression(const ASTNode* node);
    void genStatement(const ASTNode* node);

public:
    IRGenerator();

    std::vector<TACInstruction> generate(const ProgramNode* program);
    const std::vector<TACInstruction>& getInstructions() const;
};

#endif
