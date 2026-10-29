#include "SemanticAnalyzer.h"
#include <iostream>

SemanticAnalyzer::SemanticAnalyzer() {}

void SemanticAnalyzer::addError(const std::string& message, int line, int column) {
    errors.push_back({message, line, column});
}

bool SemanticAnalyzer::analyze(const ProgramNode* program) {
    errors.clear();
    symbolTable = SymbolTable();

    if (!program) return true;

    for (const auto& stmt : program->statements) {
        if (stmt) {
            analyzeStatement(stmt.get());
        }
    }

    return !hasErrors();
}

void SemanticAnalyzer::analyzeStatement(const ASTNode* node) {
    if (!node) return;

    if (auto decl = dynamic_cast<const DeclarationNode*>(node)) {
        analyzeDeclaration(decl);
    } else if (auto assign = dynamic_cast<const AssignmentNode*>(node)) {
        analyzeAssignment(assign);
    } else if (auto ifNode = dynamic_cast<const IfNode*>(node)) {
        analyzeIf(ifNode);
    } else if (auto whileNode = dynamic_cast<const WhileNode*>(node)) {
        analyzeWhile(whileNode);
    } else if (auto printNode = dynamic_cast<const PrintNode*>(node)) {
        analyzePrint(printNode);
    } else if (auto blockNode = dynamic_cast<const BlockNode*>(node)) {
        analyzeBlock(blockNode);
    }
}

void SemanticAnalyzer::analyzeDeclaration(const DeclarationNode* node) {
    if (!node) return;

    if (symbolTable.isDeclaredInCurrentScope(node->name)) {
        addError("Redeclaration of variable '" + node->name + "' in the same scope", node->line, node->column);
        return;
    }

    // Register in symbol table with genuine coordinates
    symbolTable.declare(node->name, node->type, node->line, node->column);

    if (node->initializer) {
        std::string initType = analyzeExpression(node->initializer.get());
        if (initType != "unknown") {
            if (node->type == "int" && initType == "float") {
                addError("Type mismatch in declaration of '" + node->name +
                         "': cannot assign 'float' to 'int'", node->line, node->column);
            } else if (node->type == "bool" && initType != "bool") {
                addError("Type mismatch in declaration of '" + node->name +
                         "': cannot assign '" + initType + "' to 'bool'", node->line, node->column);
            }
        }
    }
}

void SemanticAnalyzer::analyzeAssignment(const AssignmentNode* node) {
    if (!node) return;

    const Symbol* sym = symbolTable.lookup(node->name);
    if (!sym) {
        addError("Assignment to undeclared variable '" + node->name + "'", node->line, node->column);
        // Continue expression checking
        if (node->value) {
            analyzeExpression(node->value.get());
        }
        return;
    }

    if (node->value) {
        std::string valType = analyzeExpression(node->value.get());
        if (valType != "unknown") {
            if (sym->type == "int" && valType == "float") {
                addError("Type mismatch in assignment to '" + node->name +
                         "': cannot assign 'float' to 'int'", node->line, node->column);
            } else if (sym->type == "bool" && valType != "bool") {
                addError("Type mismatch in assignment to '" + node->name +
                         "': cannot assign '" + valType + "' to 'bool'", node->line, node->column);
            }
        }
    }
}

void SemanticAnalyzer::analyzeIf(const IfNode* node) {
    if (!node) return;

    if (node->condition) {
        analyzeExpression(node->condition.get());
    }

    if (node->thenBranch) {
        analyzeStatement(node->thenBranch.get());
    }

    if (node->elseBranch) {
        analyzeStatement(node->elseBranch.get());
    }
}

void SemanticAnalyzer::analyzeWhile(const WhileNode* node) {
    if (!node) return;

    if (node->condition) {
        analyzeExpression(node->condition.get());
    }

    if (node->body) {
        analyzeStatement(node->body.get());
    }
}

void SemanticAnalyzer::analyzePrint(const PrintNode* node) {
    if (!node || !node->expression) return;
    analyzeExpression(node->expression.get());
}

void SemanticAnalyzer::analyzeBlock(const BlockNode* node) {
    if (!node) return;

    symbolTable.enterScope();

    for (const auto& stmt : node->statements) {
        if (stmt) {
            analyzeStatement(stmt.get());
        }
    }

    symbolTable.exitScope();
}

std::string SemanticAnalyzer::analyzeExpression(const ASTNode* node) {
    if (!node) return "unknown";

    if (auto lit = dynamic_cast<const LiteralNode*>(node)) {
        if (lit->value == "true" || lit->value == "false") {
            return "bool";
        }
        if (lit->value.find('.') != std::string::npos) {
            return "float";
        }
        return "int";
    }

    if (auto id = dynamic_cast<const IdentifierNode*>(node)) {
        const Symbol* sym = symbolTable.lookup(id->name);
        if (!sym) {
            addError("Undeclared identifier '" + id->name + "' used in expression", id->line, id->column);
            return "unknown";
        }
        return sym->type;
    }

    if (auto bin = dynamic_cast<const BinaryExpressionNode*>(node)) {
        std::string leftType = analyzeExpression(bin->left.get());
        std::string rightType = analyzeExpression(bin->right.get());

        if (leftType == "unknown" || rightType == "unknown") {
            return "unknown";
        }

        const std::string& op = bin->operatorSymbol;

        // Unary minus
        if (op == "unary-") {
            return rightType;
        }

        // Modulo
        if (op == "%") {
            if (leftType != "int" || rightType != "int") {
                addError("Operator '%' requires integer operands, found '" +
                         leftType + "' and '" + rightType + "'", bin->line, bin->column);
            }
            return "int";
        }

        // Arithmetic: +, -, *, /
        if (op == "+" || op == "-" || op == "*" || op == "/") {
            if (leftType == "bool" || rightType == "bool") {
                addError("Arithmetic operator '" + op + "' cannot be applied to 'bool'", bin->line, bin->column);
                return "unknown";
            }
            if (leftType == "float" || rightType == "float") {
                return "float";
            }
            return "int";
        }

        // Relational: <, >, <=, >=
        if (op == "<" || op == ">" || op == "<=" || op == ">=") {
            if (leftType == "bool" || rightType == "bool") {
                addError("Relational operator '" + op + "' cannot be applied to 'bool'", bin->line, bin->column);
            }
            return "bool";
        }

        // Equality: ==, !=
        if (op == "==" || op == "!=") {
            return "bool";
        }

        // Logical: &&, ||
        if (op == "&&" || op == "||") {
            return "bool";
        }

        return "unknown";
    }

    return "unknown";
}

const SymbolTable& SemanticAnalyzer::getSymbolTable() const {
    return symbolTable;
}

const std::vector<SemanticError>& SemanticAnalyzer::getErrors() const {
    return errors;
}

bool SemanticAnalyzer::hasErrors() const {
    return !errors.empty();
}

void SemanticAnalyzer::printReport() const {
    std::cout << "\n=== Semantic Analysis Report ===\n";
    if (errors.empty()) {
        std::cout << "Status: SUCCESS (0 semantic errors)\n";
        symbolTable.printTable();
        return;
    }

    std::cout << "Status: FAILED (" << errors.size()
              << " semantic error" << (errors.size() > 1 ? "s" : "") << ")\n";

    for (std::size_t i = 0; i < errors.size(); ++i) {
        std::cout << "[" << (i + 1) << "] [Semantic Error] ";
        if (errors[i].line > 0) {
            std::cout << "Line " << errors[i].line << ", Col " << errors[i].column << ": ";
        }
        std::cout << errors[i].message << "\n";
    }

    symbolTable.printTable();
}
