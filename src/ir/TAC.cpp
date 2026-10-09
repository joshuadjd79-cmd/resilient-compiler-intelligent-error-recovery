#include "TAC.h"
#include <iostream>
#include <iomanip>

std::string TACInstruction::toString() const {
    switch (op) {
        case TACOp::ADD:     return result + " = " + arg1 + " + " + arg2;
        case TACOp::SUB:     return result + " = " + arg1 + " - " + arg2;
        case TACOp::MUL:     return result + " = " + arg1 + " * " + arg2;
        case TACOp::DIV:     return result + " = " + arg1 + " / " + arg2;
        case TACOp::MOD:     return result + " = " + arg1 + " % " + arg2;
        case TACOp::AND:     return result + " = " + arg1 + " && " + arg2;
        case TACOp::OR:      return result + " = " + arg1 + " || " + arg2;
        case TACOp::EQ:      return result + " = " + arg1 + " == " + arg2;
        case TACOp::NE:      return result + " = " + arg1 + " != " + arg2;
        case TACOp::LT:      return result + " = " + arg1 + " < " + arg2;
        case TACOp::GT:      return result + " = " + arg1 + " > " + arg2;
        case TACOp::LE:      return result + " = " + arg1 + " <= " + arg2;
        case TACOp::GE:      return result + " = " + arg1 + " >= " + arg2;
        case TACOp::NEG:     return result + " = -" + arg1;
        case TACOp::ASSIGN:  return result + " = " + arg1;
        case TACOp::LABEL:   return result + ":";
        case TACOp::GOTO:    return "goto " + result;
        case TACOp::IF_TRUE: return "if " + arg1 + " goto " + result;
        case TACOp::IF_FALSE:return "ifFalse " + arg1 + " goto " + result;
        case TACOp::PRINT:   return "print " + arg1;
    }
    return "";
}

void printTAC(const std::vector<TACInstruction>& instructions) {
    if (instructions.empty()) {
        std::cout << "<empty TAC>\n";
        return;
    }

    for (std::size_t i = 0; i < instructions.size(); ++i) {
        const auto& inst = instructions[i];
        if (inst.op == TACOp::LABEL) {
            std::cout << inst.toString() << "\n";
        } else {
            std::cout << "    " << inst.toString() << "\n";
        }
    }
}
