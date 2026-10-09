#include "VM.h"
#include <iostream>
#include <iomanip>
#include <cmath>

std::string VMInstruction::disassemble(int index) const {
    std::ostringstream ss;
    ss << std::setw(4) << std::setfill('0') << index << ":  ";

    switch (op) {
        case OpCode::PUSH_CONST:
            ss << "PUSH_CONST   " << constVal;
            break;
        case OpCode::LOAD_VAR:
            ss << "LOAD_VAR     " << strOperand;
            break;
        case OpCode::STORE_VAR:
            ss << "STORE_VAR    " << strOperand;
            break;
        case OpCode::ADD:          ss << "ADD"; break;
        case OpCode::SUB:          ss << "SUB"; break;
        case OpCode::MUL:          ss << "MUL"; break;
        case OpCode::DIV:          ss << "DIV"; break;
        case OpCode::MOD:          ss << "MOD"; break;
        case OpCode::EQ:           ss << "EQ"; break;
        case OpCode::NE:           ss << "NE"; break;
        case OpCode::LT:           ss << "LT"; break;
        case OpCode::GT:           ss << "GT"; break;
        case OpCode::LE:           ss << "LE"; break;
        case OpCode::GE:           ss << "GE"; break;
        case OpCode::AND:          ss << "AND"; break;
        case OpCode::OR:           ss << "OR"; break;
        case OpCode::NEG:          ss << "NEG"; break;
        case OpCode::JUMP:
            ss << "JUMP         ->" << std::setw(4) << std::setfill('0') << targetAddr;
            break;
        case OpCode::JUMP_IF_ZERO:
            ss << "JUMP_IF_ZERO ->" << std::setw(4) << std::setfill('0') << targetAddr;
            break;
        case OpCode::PRINT:        ss << "PRINT"; break;
        case OpCode::HALT:         ss << "HALT"; break;
    }
    return ss.str();
}

VM::VM() : pc(0) {}

void VM::load(const std::vector<VMInstruction>& instructions) {
    program = instructions;
    stack.clear();
    memory.clear();
    pc = 0;
}

void VM::run() {
    pc = 0;
    stack.clear();

    while (pc >= 0 && pc < static_cast<int>(program.size())) {
        const auto& inst = program[pc];

        if (inst.op == OpCode::HALT) {
            break;
        }

        switch (inst.op) {
            case OpCode::PUSH_CONST:
                stack.push_back(inst.constVal);
                break;

            case OpCode::LOAD_VAR:
                stack.push_back(memory[inst.strOperand]);
                break;

            case OpCode::STORE_VAR:
                if (!stack.empty()) {
                    memory[inst.strOperand] = stack.back();
                    stack.pop_back();
                }
                break;

            case OpCode::ADD: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a + b);
                }
                break;
            }

            case OpCode::SUB: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a - b);
                }
                break;
            }

            case OpCode::MUL: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a * b);
                }
                break;
            }

            case OpCode::DIV: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(b != 0.0 ? (a / b) : 0.0);
                }
                break;
            }

            case OpCode::MOD: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    long long ia = static_cast<long long>(a);
                    long long ib = static_cast<long long>(b);
                    stack.push_back(ib != 0 ? (ia % ib) : 0);
                }
                break;
            }

            case OpCode::EQ: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a == b ? 1.0 : 0.0);
                }
                break;
            }

            case OpCode::NE: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a != b ? 1.0 : 0.0);
                }
                break;
            }

            case OpCode::LT: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a < b ? 1.0 : 0.0);
                }
                break;
            }

            case OpCode::GT: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a > b ? 1.0 : 0.0);
                }
                break;
            }

            case OpCode::LE: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a <= b ? 1.0 : 0.0);
                }
                break;
            }

            case OpCode::GE: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(a >= b ? 1.0 : 0.0);
                }
                break;
            }

            case OpCode::AND: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back((a != 0.0 && b != 0.0) ? 1.0 : 0.0);
                }
                break;
            }

            case OpCode::OR: {
                if (stack.size() >= 2) {
                    double b = stack.back(); stack.pop_back();
                    double a = stack.back(); stack.pop_back();
                    stack.push_back((a != 0.0 || b != 0.0) ? 1.0 : 0.0);
                }
                break;
            }

            case OpCode::NEG: {
                if (!stack.empty()) {
                    double a = stack.back(); stack.pop_back();
                    stack.push_back(-a);
                }
                break;
            }

            case OpCode::JUMP:
                pc = inst.targetAddr;
                continue;

            case OpCode::JUMP_IF_ZERO: {
                if (!stack.empty()) {
                    double cond = stack.back(); stack.pop_back();
                    if (cond == 0.0) {
                        pc = inst.targetAddr;
                        continue;
                    }
                }
                break;
            }

            case OpCode::PRINT: {
                if (!stack.empty()) {
                    double val = stack.back(); stack.pop_back();
                    if (std::floor(val) == val) {
                        std::cout << "[VM Output] " << static_cast<long long>(val) << "\n";
                    } else {
                        std::cout << "[VM Output] " << val << "\n";
                    }
                }
                break;
            }

            case OpCode::HALT:
                return;
        }

        pc++;
    }
}

const std::unordered_map<std::string, double>& VM::getMemory() const {
    return memory;
}

void VM::printDisassembly() const {
    std::cout << "\n=== Target Bytecode Instructions ===\n";
    if (program.empty()) {
        std::cout << "<no instructions>\n";
        return;
    }
    for (int i = 0; i < static_cast<int>(program.size()); ++i) {
        std::cout << program[i].disassemble(i) << "\n";
    }
}

void VM::printMemory() const {
    std::cout << "\n=== VM Execution State (Final Variable Store) ===\n";
    if (memory.empty()) {
        std::cout << "No variables stored in memory.\n";
        return;
    }

    std::cout << std::left << std::setw(16) << "Variable" << std::setw(12) << "Final Value" << "\n";
    std::cout << std::string(28, '-') << "\n";

    for (const auto& pair : memory) {
        // Skip compiler temporaries (starting with '_t') from user variable display
        if (pair.first.rfind("_t", 0) == 0) {
            continue;
        }
        std::cout << std::left << std::setw(16) << pair.first;
        if (std::floor(pair.second) == pair.second) {
            std::cout << std::setw(12) << static_cast<long long>(pair.second) << "\n";
        } else {
            std::cout << std::setw(12) << pair.second << "\n";
        }
    }
}
