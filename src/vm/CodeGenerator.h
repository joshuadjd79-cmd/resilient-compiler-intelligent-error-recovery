#ifndef CODE_GENERATOR_H
#define CODE_GENERATOR_H

#include "../ir/TAC.h"
#include "VM.h"
#include <vector>
#include <string>
#include <unordered_map>

class CodeGenerator {
private:
    bool isNumber(const std::string& str) const;
    double parseNumber(const std::string& str) const;

public:
    CodeGenerator();

    std::vector<VMInstruction> generate(const std::vector<TACInstruction>& tacInstructions);
};

#endif
