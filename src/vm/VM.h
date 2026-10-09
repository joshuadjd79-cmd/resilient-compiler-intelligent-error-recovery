#ifndef VM_H
#define VM_H

#include <string>
#include <vector>
#include <unordered_map>

enum class OpCode {
    PUSH_CONST,
    LOAD_VAR,
    STORE_VAR,
    ADD, SUB, MUL, DIV, MOD,
    EQ, NE, LT, GT, LE, GE,
    AND, OR, NEG,
    JUMP,
    JUMP_IF_ZERO,
    PRINT,
    HALT
};

struct VMInstruction {
    OpCode op;
    double constVal = 0.0;
    std::string strOperand = "";
    int targetAddr = -1;

    std::string disassemble(int index) const;
};

class VM {
private:
    std::vector<VMInstruction> program;
    std::vector<double> stack;
    std::unordered_map<std::string, double> memory;
    int pc;

public:
    VM();

    void load(const std::vector<VMInstruction>& instructions);
    void run();

    const std::unordered_map<std::string, double>& getMemory() const;
    void printDisassembly() const;
    void printMemory() const;
};

#endif
