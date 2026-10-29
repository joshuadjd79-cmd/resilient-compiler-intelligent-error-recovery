#include "Optimizer.h"
#include <sstream>
#include <cmath>
#include <unordered_map>
#include <unordered_set>
#include <iostream>

Optimizer::Optimizer() : stats{0, 0, 0, 0} {}

bool Optimizer::isNumber(const std::string& str) const {
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

bool Optimizer::isFloat(const std::string& str) const {
    return str.find('.') != std::string::npos;
}

double Optimizer::parseNumber(const std::string& str) const {
    return std::stod(str);
}

std::string Optimizer::formatNumber(double val, bool asFloat) const {
    if (asFloat) {
        std::string s = std::to_string(val);
        s.erase(s.find_last_not_of('0') + 1, std::string::npos);
        if (s.back() == '.') s += "0";
        return s;
    }
    return std::to_string(static_cast<long long>(val));
}

std::vector<TACInstruction> Optimizer::optimize(const std::vector<TACInstruction>& input) {
    stats = {0, 0, 0, 0};
    std::vector<TACInstruction> current = input;

    // Pass 1: Constant Folding, Propagation, and Algebraic Simplification
    std::vector<TACInstruction> pass1;
    std::unordered_map<std::string, std::string> knownConstants;

    for (const auto& inst : current) {
        // Reset constants at control flow boundaries
        if (inst.op == TACOp::LABEL || inst.op == TACOp::GOTO ||
            inst.op == TACOp::IF_TRUE || inst.op == TACOp::IF_FALSE) {
            knownConstants.clear();
            pass1.push_back(inst);
            continue;
        }

        TACInstruction folded = inst;

        // Propagate constants to arg1
        if (!folded.arg1.empty() && knownConstants.find(folded.arg1) != knownConstants.end()) {
            folded.arg1 = knownConstants[folded.arg1];
            stats.propagatedConstants++;
        }

        // Propagate constants to arg2
        if (!folded.arg2.empty() && knownConstants.find(folded.arg2) != knownConstants.end()) {
            folded.arg2 = knownConstants[folded.arg2];
            stats.propagatedConstants++;
        }

        // Attempt Constant Folding
        if (folded.op == TACOp::NEG && isNumber(folded.arg1)) {
            double v = -parseNumber(folded.arg1);
            folded.op = TACOp::ASSIGN;
            folded.arg1 = formatNumber(v, isFloat(folded.arg1));
            folded.arg2 = "";
            stats.foldedConstants++;
        } else if (isNumber(folded.arg1) && isNumber(folded.arg2)) {
            double v1 = parseNumber(folded.arg1);
            double v2 = parseNumber(folded.arg2);
            bool resultIsFloat = isFloat(folded.arg1) || isFloat(folded.arg2);
            double resVal = 0.0;
            bool foldedOk = true;

            switch (folded.op) {
                case TACOp::ADD: resVal = v1 + v2; break;
                case TACOp::SUB: resVal = v1 - v2; break;
                case TACOp::MUL: resVal = v1 * v2; break;
                case TACOp::DIV:
                    if (v2 != 0.0) resVal = v1 / v2;
                    else foldedOk = false;
                    break;
                case TACOp::MOD:
                    if (static_cast<long long>(v2) != 0) {
                        resVal = static_cast<long long>(v1) % static_cast<long long>(v2);
                        resultIsFloat = false;
                    } else foldedOk = false;
                    break;
                case TACOp::EQ: resVal = (v1 == v2) ? 1.0 : 0.0; resultIsFloat = false; break;
                case TACOp::NE: resVal = (v1 != v2) ? 1.0 : 0.0; resultIsFloat = false; break;
                case TACOp::LT: resVal = (v1 < v2) ? 1.0 : 0.0; resultIsFloat = false; break;
                case TACOp::GT: resVal = (v1 > v2) ? 1.0 : 0.0; resultIsFloat = false; break;
                case TACOp::LE: resVal = (v1 <= v2) ? 1.0 : 0.0; resultIsFloat = false; break;
                case TACOp::GE: resVal = (v1 >= v2) ? 1.0 : 0.0; resultIsFloat = false; break;
                case TACOp::AND: resVal = (v1 != 0.0 && v2 != 0.0) ? 1.0 : 0.0; resultIsFloat = false; break;
                case TACOp::OR:  resVal = (v1 != 0.0 || v2 != 0.0) ? 1.0 : 0.0; resultIsFloat = false; break;
                default: foldedOk = false; break;
            }

            if (foldedOk) {
                folded.op = TACOp::ASSIGN;
                folded.arg1 = formatNumber(resVal, resultIsFloat);
                folded.arg2 = "";
                stats.foldedConstants++;
            }
        } else {
            // Algebraic Simplification (Identity Laws & Zero Laws)
            if (folded.op == TACOp::ADD) {
                if (folded.arg1 == "0" || folded.arg1 == "0.0") {
                    folded.op = TACOp::ASSIGN;
                    folded.arg1 = folded.arg2;
                    folded.arg2 = "";
                    stats.algebraicSimplifications++;
                } else if (folded.arg2 == "0" || folded.arg2 == "0.0") {
                    folded.op = TACOp::ASSIGN;
                    folded.arg2 = "";
                    stats.algebraicSimplifications++;
                }
            } else if (folded.op == TACOp::SUB) {
                if (folded.arg2 == "0" || folded.arg2 == "0.0") {
                    folded.op = TACOp::ASSIGN;
                    folded.arg2 = "";
                    stats.algebraicSimplifications++;
                } else if (folded.arg1 == folded.arg2) {
                    folded.op = TACOp::ASSIGN;
                    folded.arg1 = "0";
                    folded.arg2 = "";
                    stats.algebraicSimplifications++;
                }
            } else if (folded.op == TACOp::MUL) {
                if (folded.arg1 == "1" || folded.arg1 == "1.0") {
                    folded.op = TACOp::ASSIGN;
                    folded.arg1 = folded.arg2;
                    folded.arg2 = "";
                    stats.algebraicSimplifications++;
                } else if (folded.arg2 == "1" || folded.arg2 == "1.0") {
                    folded.op = TACOp::ASSIGN;
                    folded.arg2 = "";
                    stats.algebraicSimplifications++;
                } else if (folded.arg1 == "0" || folded.arg1 == "0.0" ||
                           folded.arg2 == "0" || folded.arg2 == "0.0") {
                    folded.op = TACOp::ASSIGN;
                    folded.arg1 = "0";
                    folded.arg2 = "";
                    stats.algebraicSimplifications++;
                }
            } else if (folded.op == TACOp::DIV) {
                if (folded.arg2 == "1" || folded.arg2 == "1.0") {
                    folded.op = TACOp::ASSIGN;
                    folded.arg2 = "";
                    stats.algebraicSimplifications++;
                }
            }
        }

        // Track constants for downstream propagation
        if (folded.op == TACOp::ASSIGN && isNumber(folded.arg1)) {
            knownConstants[folded.result] = folded.arg1;
        } else if (!folded.result.empty()) {
            knownConstants.erase(folded.result);
        }

        pass1.push_back(folded);
    }

    // Pass 2: Dead Temporary Elimination & Identity Assignment Removal
    std::unordered_set<std::string> readVariables;
    for (const auto& inst : pass1) {
        if (!inst.arg1.empty() && !isNumber(inst.arg1)) {
            readVariables.insert(inst.arg1);
        }
        if (!inst.arg2.empty() && !isNumber(inst.arg2)) {
            readVariables.insert(inst.arg2);
        }
    }

    std::vector<TACInstruction> pass2;
    for (const auto& inst : pass1) {
        // Remove identity assignment (x = x)
        if (inst.op == TACOp::ASSIGN && inst.result == inst.arg1) {
            stats.eliminatedDeadInstructions++;
            continue;
        }

        // If a temporary '_tX' is assigned but never read anywhere, it's dead
        if (!inst.result.empty() && inst.result.rfind("_t", 0) == 0 &&
            readVariables.find(inst.result) == readVariables.end()) {
            stats.eliminatedDeadInstructions++;
            continue;
        }

        pass2.push_back(inst);
    }

    return pass2;
}

const OptimizationStats& Optimizer::getStats() const {
    return stats;
}

void Optimizer::printReport() const {
    std::cout << "\n=== Optimization Summary ===\n";
    std::cout << "  Constant Operations Folded     : " << stats.foldedConstants << "\n";
    std::cout << "  Constant Operands Propagated   : " << stats.propagatedConstants << "\n";
    std::cout << "  Algebraic Simplifications      : " << stats.algebraicSimplifications << "\n";
    std::cout << "  Dead Instructions Eliminated   : " << stats.eliminatedDeadInstructions << "\n";
    std::cout << "  Total Optimizations Applied    : "
              << (stats.foldedConstants + stats.propagatedConstants + stats.algebraicSimplifications + stats.eliminatedDeadInstructions)
              << "\n";
}
