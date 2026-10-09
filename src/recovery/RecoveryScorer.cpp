#include "RecoveryScorer.h"

RecoveryScore RecoveryScorer::score(
    RecoveryStrategy strategy
) {
    RecoveryScore result;
    result.strategy = strategy;

    switch (strategy) {
        case RecoveryStrategy::INSERTION:
            result.cost = 1;
            result.confidence = "HIGH";
            result.reason = "Fixed baseline insertion.";
            break;

        case RecoveryStrategy::DELETION:
            result.cost = 2;
            result.confidence = "MEDIUM";
            result.reason = "Fixed baseline deletion.";
            break;

        case RecoveryStrategy::PANIC_MODE:
            result.cost = 5;
            result.confidence = "LOW";
            result.reason = "Fixed baseline panic mode.";
            break;
    }

    return result;
}

RecoveryScore RecoveryScorer::scoreInsertion(const RecoveryContext& context) {
    RecoveryScore result;
    result.strategy = RecoveryStrategy::INSERTION;

    // Case 1: Missing semicolon before another statement or at EOF
    if (context.expectedType == TokenType::SEMICOLON) {
        TokenType actual = context.actualToken.type;
        if (actual == TokenType::INT || actual == TokenType::FLOAT ||
            actual == TokenType::BOOL || actual == TokenType::IF ||
            actual == TokenType::WHILE || actual == TokenType::PRINT ||
            actual == TokenType::RIGHT_BRACE || actual == TokenType::END_OF_FILE ||
            actual == TokenType::IDENTIFIER) {
            result.cost = 1;
            result.confidence = "HIGH";
            result.reason = "Inserted missing ';' before next statement token '" + context.actualToken.lexeme + "'";
            return result;
        }
    }

    // Case 2: Missing closing delimiter ')' before block opening '{'
    if (context.expectedType == TokenType::RIGHT_PAREN) {
        if (context.actualToken.type == TokenType::LEFT_BRACE) {
            result.cost = 1;
            result.confidence = "HIGH";
            result.reason = "Inserted missing ')' before block delimiter '{'";
            return result;
        }
        if (context.actualToken.type == TokenType::SEMICOLON) {
            result.cost = 2;
            result.confidence = "MEDIUM";
            result.reason = "Inserted missing ')' before ';'";
            return result;
        }
    }

    // Case 3: Missing closing brace '}' at EOF or next top-level token
    if (context.expectedType == TokenType::RIGHT_BRACE) {
        result.cost = 2;
        result.confidence = "MEDIUM";
        result.reason = "Inserted missing '}'";
        return result;
    }

    // Default insertion cost
    result.cost = 3;
    result.confidence = "MEDIUM";
    result.reason = "Inserted synthetic token '" + context.expectedLexeme + "'";
    return result;
}

RecoveryScore RecoveryScorer::scoreDeletion(const RecoveryContext& context) {
    RecoveryScore result;
    result.strategy = RecoveryStrategy::DELETION;

    // Case 1: Lookahead match - deleting current token directly matches expected!
    if (context.hasNextToken && context.nextToken.type == context.expectedType) {
        result.cost = 1;
        result.confidence = "HIGH";
        result.reason = "Deleted unexpected token '" + context.actualToken.lexeme +
                        "' to expose expected '" + context.expectedLexeme + "'";
        return result;
    }

    // Case 2: Duplicate semicolon (e.g. ';;')
    if (context.actualToken.type == TokenType::SEMICOLON) {
        result.cost = 1;
        result.confidence = "HIGH";
        result.reason = "Deleted redundant extra semicolon ';'";
        return result;
    }

    // Case 3: Illegal/unknown character
    if (context.actualToken.type == TokenType::UNKNOWN) {
        result.cost = 2;
        result.confidence = "HIGH";
        result.reason = "Deleted unrecognized character '" + context.actualToken.lexeme + "'";
        return result;
    }

    // Case 4: High risk - deleting a keyword or statement delimiter is heavily penalized
    TokenType actual = context.actualToken.type;
    if (actual == TokenType::INT || actual == TokenType::FLOAT ||
        actual == TokenType::BOOL || actual == TokenType::IF ||
        actual == TokenType::WHILE || actual == TokenType::PRINT) {
        result.cost = 6;
        result.confidence = "LOW";
        result.reason = "Penalty: deleting keyword '" + context.actualToken.lexeme + "' causes structural information loss";
        return result;
    }

    // Default deletion
    result.cost = 4;
    result.confidence = "LOW";
    result.reason = "Deleted unexpected token '" + context.actualToken.lexeme + "'";
    return result;
}

RecoveryScore RecoveryScorer::scorePanicMode(const RecoveryContext& context) {
    RecoveryScore result;
    result.strategy = RecoveryStrategy::PANIC_MODE;
    result.cost = 5;
    result.confidence = "LOW";
    result.reason = "Panic mode: skipping unexpected token '" + context.actualToken.lexeme +
                    "' until safe statement boundary";
    return result;
}

RecoveryDecision RecoveryScorer::evaluate(const RecoveryContext& context) {
    RecoveryScore insScore = scoreInsertion(context);
    RecoveryScore delScore = scoreDeletion(context);
    RecoveryScore panScore = scorePanicMode(context);

    RecoveryScore best = insScore;

    // If deletion has strictly lower cost, pick deletion
    if (delScore.cost < best.cost) {
        best = delScore;
    }

    // If panic mode has strictly lower cost, pick panic mode
    if (panScore.cost < best.cost) {
        best = panScore;
    }

    RecoveryDecision decision;
    decision.strategy = best.strategy;
    decision.cost = best.cost;
    decision.confidence = best.confidence;
    decision.reason = best.reason;
    return decision;
}

RecoveryDecision RecoveryScorer::chooseBest(
    RecoveryStrategy first,
    RecoveryStrategy second,
    RecoveryStrategy third
) {
    RecoveryScore firstScore = score(first);
    RecoveryScore secondScore = score(second);
    RecoveryScore thirdScore = score(third);

    RecoveryScore best = firstScore;

    if (secondScore.cost < best.cost) {
        best = secondScore;
    }

    if (thirdScore.cost < best.cost) {
        best = thirdScore;
    }

    RecoveryDecision decision;

    decision.strategy = best.strategy;
    decision.cost = best.cost;
    decision.confidence = best.confidence;

    decision.reason =
        "Selected the recovery strategy with the lowest estimated cost.";

    return decision;
}

std::string RecoveryScorer::strategyName(
    RecoveryStrategy strategy
) {
    switch (strategy) {
        case RecoveryStrategy::INSERTION:
            return "INSERTION";

        case RecoveryStrategy::DELETION:
            return "DELETION";

        case RecoveryStrategy::PANIC_MODE:
            return "PANIC MODE";
    }

    return "UNKNOWN";
}