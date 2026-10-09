#include "RecoveryManager.h"
#include "RecoveryScorer.h"
#include <iostream>

void RecoveryManager::recordInsertion(
    const Token& location,
    const std::string& expected,
    int cost,
    const std::string& confidence,
    const std::string& reason
) {
    RecoveryAction action;

    action.strategy = RecoveryStrategy::INSERTION;
    action.message = "Inserted missing '" + expected + "'";
    action.reason = reason.empty() ? ("Inserted synthetic token '" + expected + "'") : reason;
    action.cost = cost;
    action.confidence = confidence;
    action.line = location.line;
    action.column = location.column;

    actions.push_back(action);
}

void RecoveryManager::recordDeletion(
    const Token& unexpected,
    int cost,
    const std::string& confidence,
    const std::string& reason
) {
    RecoveryAction action;

    action.strategy = RecoveryStrategy::DELETION;
    action.message = "Deleted unexpected token '" + unexpected.lexeme + "'";
    action.reason = reason.empty() ? ("Discarded extraneous token '" + unexpected.lexeme + "'") : reason;
    action.cost = cost;
    action.confidence = confidence;
    action.line = unexpected.line;
    action.column = unexpected.column;

    actions.push_back(action);
}

void RecoveryManager::recordPanicMode(
    const Token& location,
    int skippedTokens,
    const std::string& syncToken,
    int cost,
    const std::string& confidence,
    const std::string& reason
) {
    RecoveryAction action;

    action.strategy = RecoveryStrategy::PANIC_MODE;
    if (skippedTokens > 0) {
        action.message = "Skipped " + std::to_string(skippedTokens) +
                         " token(s) to synchronize on safe boundary";
    } else {
        action.message = "Skipped token(s) until a safe synchronization point";
    }

    if (!syncToken.empty()) {
        action.message += " ('" + syncToken + "')";
    }

    action.reason = reason.empty() ? "Panic-mode synchronization to prevent error cascade" : reason;
    action.cost = cost;
    action.confidence = confidence;
    action.line = location.line;
    action.column = location.column;

    actions.push_back(action);
}

RecoveryDecision RecoveryManager::evaluate(
    const RecoveryContext& context
) {
    return RecoveryScorer::evaluate(context);
}

RecoveryDecision RecoveryManager::chooseRecovery(
    RecoveryStrategy primary,
    RecoveryStrategy secondary,
    RecoveryStrategy fallback
) {
    return RecoveryScorer::chooseBest(
        primary,
        secondary,
        fallback
    );
}

const std::vector<RecoveryAction>&
RecoveryManager::getActions() const {
    return actions;
}

void RecoveryManager::printReport() const {
    if (actions.empty()) {
        std::cout << "\n=== Error Recovery Report ===\n";
        std::cout << "Status: Clean compilation. No recovery actions were required.\n";
        return;
    }

    std::cout << "\n=== Error Recovery Report (" << actions.size()
              << " recovery action" << (actions.size() > 1 ? "s" : "") << ") ===\n";

    int totalCost = 0;

    for (std::size_t i = 0; i < actions.size(); ++i) {
        const auto& action = actions[i];
        totalCost += action.cost;

        std::string strategy = RecoveryScorer::strategyName(action.strategy);

        std::cout << "[" << (i + 1) << "] [" << strategy << "] "
                  << action.message
                  << " at line "
                  << action.line
                  << ", column "
                  << action.column
                  << "\n";

        std::cout << "    Recovery Cost : "
                  << action.cost
                  << " | Confidence: "
                  << action.confidence
                  << "\n";

        if (!action.reason.empty()) {
            std::cout << "    Rationale     : "
                      << action.reason
                      << "\n";
        }
    }

    std::cout << "--------------------------------------------------------\n";
    std::cout << "Total Recovery Cost Incurred: " << totalCost << "\n";
}