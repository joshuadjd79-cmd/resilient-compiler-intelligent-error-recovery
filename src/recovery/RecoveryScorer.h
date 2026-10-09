#ifndef RECOVERY_SCORER_H
#define RECOVERY_SCORER_H

#include "RecoveryTypes.h"
#include <string>

struct RecoveryScore {
    RecoveryStrategy strategy;
    int cost;
    std::string confidence;
    std::string reason;
};

class RecoveryScorer {
public:
    static RecoveryScore score(
        RecoveryStrategy strategy
    );

    static RecoveryScore scoreInsertion(const RecoveryContext& context);
    static RecoveryScore scoreDeletion(const RecoveryContext& context);
    static RecoveryScore scorePanicMode(const RecoveryContext& context);

    static RecoveryDecision evaluate(const RecoveryContext& context);

    static RecoveryDecision chooseBest(
        RecoveryStrategy first,
        RecoveryStrategy second,
        RecoveryStrategy third
    );

    static std::string strategyName(
        RecoveryStrategy strategy
    );
};

#endif