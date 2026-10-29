#include "CodeGenerator.h"

CodeGenerator::CodeGenerator() {}

bool CodeGenerator::isNumber(const std::string& str) const {
    if (str.empty()) return false;
    std::size_t start = (str[0] == '-') ? 1 : 0;
    if (start >= str.length()) return false;

    bool hasDot = false;
    for (std::size_t i = start; i < str.length(); ++i) {
        if (str[i] == '.') {
            if (hasDot) return false;
            hasDot = true;
        } else if (!std::isdigit(static_cast<unsigned char>(str[i]))) {
            return false;
        }
    }
    return true;
}

double CodeGenerator::parseNumber(const std::string& str) const {
    return std::stod(str);
}

std::vector<VMInstruction> CodeGenerator::generate(const std::vector<TACInstruction>& tacInstructions) {
    std::vector<VMInstruction> bytecode;
    std::unordered_map<std::string, int> labelTargets;
    std::vector<std::pair<int, std::string>> pendingJumps; // <bytecodeIndex, labelName>

    auto pushOperand = [&](const std::string& operand) {
        if (operand == "true") {
            VMInstruction inst;
            inst.op = OpCode::PUSH_CONST;
            inst.constVal = 1.0;
            bytecode.push_back(inst);
        } else if (operand == "false") {
            VMInstruction inst;
            inst.op = OpCode::PUSH_CONST;
            inst.constVal = 0.0;
            bytecode.push_back(inst);
        } else if (isNumber(operand)) {
            VMInstruction inst;
            inst.op = OpCode::PUSH_CONST;
            inst.constVal = parseNumber(operand);
            bytecode.push_back(inst);
        } else {
            VMInstruction inst;
            inst.op = OpCode::LOAD_VAR;
            inst.strOperand = operand;
            bytecode.push_back(inst);
        }
    };

    for (const auto& tac : tacInstructions) {
        switch (tac.op) {
            case TACOp::LABEL: {
                labelTargets[tac.result] = static_cast<int>(bytecode.size());
                break;
            }

            case TACOp::ASSIGN: {
                pushOperand(tac.arg1);
                VMInstruction store;
                store.op = OpCode::STORE_VAR;
                store.strOperand = tac.result;
                bytecode.push_back(store);
                break;
            }

            case TACOp::NEG: {
                pushOperand(tac.arg1);
                VMInstruction neg;
                neg.op = OpCode::NEG;
                bytecode.push_back(neg);

                VMInstruction store;
                store.op = OpCode::STORE_VAR;
                store.strOperand = tac.result;
                bytecode.push_back(store);
                break;
            }

            case TACOp::ADD:
            case TACOp::SUB:
            case TACOp::MUL:
            case TACOp::DIV:
            case TACOp::MOD:
            case TACOp::EQ:
            case TACOp::NE:
            case TACOp::LT:
            case TACOp::GT:
            case TACOp::LE:
            case TACOp::GE:
            case TACOp::AND:
            case TACOp::OR: {
                pushOperand(tac.arg1);
                pushOperand(tac.arg2);

                VMInstruction binOp;
                if (tac.op == TACOp::ADD) binOp.op = OpCode::ADD;
                else if (tac.op == TACOp::SUB) binOp.op = OpCode::SUB;
                else if (tac.op == TACOp::MUL) binOp.op = OpCode::MUL;
                else if (tac.op == TACOp::DIV) binOp.op = OpCode::DIV;
                else if (tac.op == TACOp::MOD) binOp.op = OpCode::MOD;
                else if (tac.op == TACOp::EQ)  binOp.op = OpCode::EQ;
                else if (tac.op == TACOp::NE)  binOp.op = OpCode::NE;
                else if (tac.op == TACOp::LT)  binOp.op = OpCode::LT;
                else if (tac.op == TACOp::GT)  binOp.op = OpCode::GT;
                else if (tac.op == TACOp::LE)  binOp.op = OpCode::LE;
                else if (tac.op == TACOp::GE)  binOp.op = OpCode::GE;
                else if (tac.op == TACOp::AND) binOp.op = OpCode::AND;
                else if (tac.op == TACOp::OR)  binOp.op = OpCode::OR;

                bytecode.push_back(binOp);

                VMInstruction store;
                store.op = OpCode::STORE_VAR;
                store.strOperand = tac.result;
                bytecode.push_back(store);
                break;
            }

            case TACOp::GOTO: {
                VMInstruction jmp;
                jmp.op = OpCode::JUMP;
                pendingJumps.push_back({static_cast<int>(bytecode.size()), tac.result});
                bytecode.push_back(jmp);
                break;
            }

            case TACOp::IF_FALSE: {
                pushOperand(tac.arg1);
                VMInstruction jmp;
                jmp.op = OpCode::JUMP_IF_ZERO;
                pendingJumps.push_back({static_cast<int>(bytecode.size()), tac.result});
                bytecode.push_back(jmp);
                break;
            }

            case TACOp::IF_TRUE: {
                pushOperand(tac.arg1);
                // If not zero: negate then JUMP_IF_ZERO? Or push 0, EQ, JUMP_IF_ZERO
                // Push 0, EQ -> 1 if zero, 0 if not zero
                VMInstruction pushZero;
                pushZero.op = OpCode::PUSH_CONST;
                pushZero.constVal = 0.0;
                bytecode.push_back(pushZero);

                VMInstruction eqOp;
                eqOp.op = OpCode::EQ;
                bytecode.push_back(eqOp);

                // Now stack has 1 if cond was 0, and 0 if cond was != 0
                // Jump if this value is 0 (meaning cond was != 0)
                VMInstruction jmp;
                jmp.op = OpCode::JUMP_IF_ZERO;
                pendingJumps.push_back({static_cast<int>(bytecode.size()), tac.result});
                bytecode.push_back(jmp);
                break;
            }

            case TACOp::PRINT: {
                pushOperand(tac.arg1);
                VMInstruction prt;
                prt.op = OpCode::PRINT;
                bytecode.push_back(prt);
                break;
            }
        }
    }

    // Append HALT
    VMInstruction halt;
    halt.op = OpCode::HALT;
    bytecode.push_back(halt);

    // Resolve jump label addresses
    for (const auto& pending : pendingJumps) {
        int instIndex = pending.first;
        const std::string& label = pending.second;
        if (labelTargets.find(label) != labelTargets.end()) {
            bytecode[instIndex].targetAddr = labelTargets[label];
        } else {
            // Target was not found, jump to HALT
            bytecode[instIndex].targetAddr = static_cast<int>(bytecode.size() - 1);
        }
    }

    return bytecode;
}
