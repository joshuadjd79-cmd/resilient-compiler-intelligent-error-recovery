#include "IRGenerator.h"

IRGenerator::IRGenerator() : tempCount(0), labelCount(0) {}

std::string IRGenerator::newTemp() {
    return "_t" + std::to_string(tempCount++);
}

std::string IRGenerator::newLabel() {
    return "L" + std::to_string(labelCount++);
}

void IRGenerator::emit(TACOp op, const std::string& result, const std::string& arg1, const std::string& arg2) {
    instructions.push_back({op, result, arg1, arg2});
}

std::vector<TACInstruction> IRGenerator::generate(const ProgramNode* program) {
    instructions.clear();
    tempCount = 0;
    labelCount = 0;

    if (!program) return instructions;

    for (const auto& stmt : program->statements) {
        if (stmt) {
            genStatement(stmt.get());
        }
    }

    return instructions;
}

const std::vector<TACInstruction>& IRGenerator::getInstructions() const {
    return instructions;
}

void IRGenerator::genStatement(const ASTNode* node) {
    if (!node) return;

    if (auto decl = dynamic_cast<const DeclarationNode*>(node)) {
        if (decl->initializer) {
            std::string val = genExpression(decl->initializer.get());
            emit(TACOp::ASSIGN, decl->name, val);
        }
    } else if (auto assign = dynamic_cast<const AssignmentNode*>(node)) {
        if (assign->value) {
            std::string val = genExpression(assign->value.get());
            emit(TACOp::ASSIGN, assign->name, val);
        }
    } else if (auto ifNode = dynamic_cast<const IfNode*>(node)) {
        std::string cond = genExpression(ifNode->condition.get());
        std::string elseLabel = newLabel();
        std::string endLabel = newLabel();

        if (ifNode->elseBranch) {
            emit(TACOp::IF_FALSE, elseLabel, cond);
            genStatement(ifNode->thenBranch.get());
            emit(TACOp::GOTO, endLabel);
            emit(TACOp::LABEL, elseLabel);
            genStatement(ifNode->elseBranch.get());
            emit(TACOp::LABEL, endLabel);
        } else {
            emit(TACOp::IF_FALSE, endLabel, cond);
            genStatement(ifNode->thenBranch.get());
            emit(TACOp::LABEL, endLabel);
        }
    } else if (auto whileNode = dynamic_cast<const WhileNode*>(node)) {
        std::string loopStart = newLabel();
        std::string loopEnd = newLabel();

        emit(TACOp::LABEL, loopStart);
        std::string cond = genExpression(whileNode->condition.get());
        emit(TACOp::IF_FALSE, loopEnd, cond);
        genStatement(whileNode->body.get());
        emit(TACOp::GOTO, loopStart);
        emit(TACOp::LABEL, loopEnd);
    } else if (auto printNode = dynamic_cast<const PrintNode*>(node)) {
        std::string val = genExpression(printNode->expression.get());
        emit(TACOp::PRINT, "", val);
    } else if (auto blockNode = dynamic_cast<const BlockNode*>(node)) {
        for (const auto& stmt : blockNode->statements) {
            if (stmt) {
                genStatement(stmt.get());
            }
        }
    }
}

std::string IRGenerator::genExpression(const ASTNode* node) {
    if (!node) return "0";

    if (auto lit = dynamic_cast<const LiteralNode*>(node)) {
        return lit->value;
    }

    if (auto id = dynamic_cast<const IdentifierNode*>(node)) {
        return id->name;
    }

    if (auto bin = dynamic_cast<const BinaryExpressionNode*>(node)) {
        const std::string& op = bin->operatorSymbol;

        if (op == "unary-") {
            const ASTNode* operandNode = bin->right ? bin->right.get() : bin->left.get();
            std::string operand = genExpression(operandNode);
            std::string temp = newTemp();
            emit(TACOp::NEG, temp, operand);
            return temp;
        }

        std::string left = genExpression(bin->left.get());
        std::string right = genExpression(bin->right.get());
        std::string temp = newTemp();

        TACOp tacOp = TACOp::ADD;
        if (op == "+") tacOp = TACOp::ADD;
        else if (op == "-") tacOp = TACOp::SUB;
        else if (op == "*") tacOp = TACOp::MUL;
        else if (op == "/") tacOp = TACOp::DIV;
        else if (op == "%") tacOp = TACOp::MOD;
        else if (op == "&&") tacOp = TACOp::AND;
        else if (op == "||") tacOp = TACOp::OR;
        else if (op == "==") tacOp = TACOp::EQ;
        else if (op == "!=") tacOp = TACOp::NE;
        else if (op == "<") tacOp = TACOp::LT;
        else if (op == ">") tacOp = TACOp::GT;
        else if (op == "<=") tacOp = TACOp::LE;
        else if (op == ">=") tacOp = TACOp::GE;

        emit(tacOp, temp, left, right);
        return temp;
    }

    return "0";
}
