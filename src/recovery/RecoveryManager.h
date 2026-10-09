#ifndef RECOVERY_MANAGER_H
#define RECOVERY_MANAGER_H

#include "../lexer/Token.h"
#include "RecoveryTypes.h"
#include <string>
#include <vector>

struct RecoveryAction {
    RecoveryStrategy strategy;
    std::string message;
    std::string reason;
    int cost;
    std::string confidence;
    int line;
    int column;
};

class RecoveryManager {
private:
    std::vector<RecoveryAction> actions;

public:
    void recordInsertion(
        const Token& location,
        const std::string& expected,
        int cost = 1,
        const std::string& confidence = "HIGH",
        const std::string& reason = ""
    );

    void recordDeletion(
        const Token& unexpected,
        int cost = 2,
        const std::string& confidence = "MEDIUM",
        const std::string& reason = ""
    );

    void recordPanicMode(
        const Token& location,
        int skippedTokens = 0,
        const std::string& syncToken = "",
        int cost = 5,
        const std::string& confidence = "LOW",
        const std::string& reason = ""
    );

    RecoveryDecision evaluate(const RecoveryContext& context);

    RecoveryDecision chooseRecovery(
        RecoveryStrategy primary,
        RecoveryStrategy secondary,
        RecoveryStrategy fallback
    );

    const std::vector<RecoveryAction>& getActions() const;

    void printReport() const;
};

#endif