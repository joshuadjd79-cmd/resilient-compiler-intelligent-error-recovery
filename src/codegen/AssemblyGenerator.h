#ifndef ASSEMBLY_GENERATOR_H
#define ASSEMBLY_GENERATOR_H

#include "../ir/TAC.h"
#include <string>
#include <vector>
#include <unordered_map>

class AssemblyGenerator {
private:
    std::unordered_map<std::string, int> stackOffsets;
    int nextOffset;

    int getOffset(const std::string& name);
    std::string operandToX86(const std::string& operand);
    bool isNumber(const std::string& str) const;

public:
    AssemblyGenerator();

    // Generates authentic x86-32 AT&T assembly (MinGW GCC / GNU as compatible)
    std::string generateX86(const std::vector<TACInstruction>& tacInstructions);

    // Generates educational register-based assembly (R0..R7 load-store ISA)
    std::string generateEducational(const std::vector<TACInstruction>& tacInstructions);

    // Helper to write generated assembly to disk
    static bool writeAssemblyFile(const std::string& filename, const std::string& asmCode);

    // Assembles generated assembly with GCC and runs native executable, returning output
    static bool assembleAndRun(const std::string& asmCode, std::string& programOutput, int& exitCode);
};

#endif
