#ifndef OPTIMIZER_H
#define OPTIMIZER_H

#include "../ir/TAC.h"
#include <vector>
#include <string>

struct OptimizationStats {
    int foldedConstants;
    int propagatedConstants;
    int eliminatedDeadInstructions;
    int algebraicSimplifications;
};

class Optimizer {
private:
    OptimizationStats stats;

    bool isNumber(const std::string& str) const;
    bool isFloat(const std::string& str) const;
    double parseNumber(const std::string& str) const;
    std::string formatNumber(double val, bool asFloat) const;

public:
    Optimizer();

    std::vector<TACInstruction> optimize(const std::vector<TACInstruction>& input);
    const OptimizationStats& getStats() const;
    void printReport() const;
};

#endif
