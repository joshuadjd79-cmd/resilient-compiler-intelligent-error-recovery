#include "AST.h"
#include <iostream>

void printIndent(int indent) {
    for (int i = 0; i < indent; ++i) {
        std::cout << "  ";
    }
}

void ProgramNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Program\n";

    for (const auto& statement : statements) {
        statement->print(indent + 1);
    }
}

LiteralNode::LiteralNode(const std::string& value)
    : value(value) {}

void LiteralNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Literal: " << value << "\n";
}

IdentifierNode::IdentifierNode(const std::string& name)
    : name(name) {}

void IdentifierNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Identifier: " << name << "\n";
}

BinaryExpressionNode::BinaryExpressionNode(
    const std::string& operatorSymbol,
    ASTNodePtr left,
    ASTNodePtr right
)
    : operatorSymbol(operatorSymbol),
      left(std::move(left)),
      right(std::move(right)) {}

void BinaryExpressionNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Binary Expression: " << operatorSymbol << "\n";

    if (left) {
        left->print(indent + 1);
    } else {
        printIndent(indent + 1);
        std::cout << "<null expression>\n";
    }

    if (right) {
        right->print(indent + 1);
    } else {
        printIndent(indent + 1);
        std::cout << "<null expression>\n";
    }
}

DeclarationNode::DeclarationNode(
    const std::string& type,
    const std::string& name,
    ASTNodePtr initializer
)
    : type(type),
      name(name),
      initializer(std::move(initializer)) {}

void DeclarationNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Declaration: " << type << " " << name << "\n";

    if (initializer) {
        initializer->print(indent + 1);
    }
}

AssignmentNode::AssignmentNode(
    const std::string& name,
    ASTNodePtr value
)
    : name(name),
      value(std::move(value)) {}

void AssignmentNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Assignment: " << name << "\n";

    if (value) {
        value->print(indent + 1);
    } else {
        printIndent(indent + 1);
        std::cout << "<null expression>\n";
    }
}

void BlockNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Block\n";

    for (const auto& statement : statements) {
        if (statement) {
            statement->print(indent + 1);
        }
    }
}

IfNode::IfNode(
    ASTNodePtr condition,
    ASTNodePtr thenBranch,
    ASTNodePtr elseBranch
)
    : condition(std::move(condition)),
      thenBranch(std::move(thenBranch)),
      elseBranch(std::move(elseBranch)) {}

void IfNode::print(int indent) const {
    printIndent(indent);
    std::cout << "If\n";

    printIndent(indent + 1);
    std::cout << "Condition\n";
    if (condition) {
        condition->print(indent + 2);
    } else {
        printIndent(indent + 2);
        std::cout << "<null condition>\n";
    }

    printIndent(indent + 1);
    std::cout << "Then\n";
    if (thenBranch) {
        thenBranch->print(indent + 2);
    } else {
        printIndent(indent + 2);
        std::cout << "<null branch>\n";
    }

    if (elseBranch) {
        printIndent(indent + 1);
        std::cout << "Else\n";
        elseBranch->print(indent + 2);
    }
}

WhileNode::WhileNode(
    ASTNodePtr condition,
    ASTNodePtr body
)
    : condition(std::move(condition)),
      body(std::move(body)) {}

void WhileNode::print(int indent) const {
    printIndent(indent);
    std::cout << "While\n";

    printIndent(indent + 1);
    std::cout << "Condition\n";
    if (condition) {
        condition->print(indent + 2);
    } else {
        printIndent(indent + 2);
        std::cout << "<null condition>\n";
    }

    printIndent(indent + 1);
    std::cout << "Body\n";
    if (body) {
        body->print(indent + 2);
    } else {
        printIndent(indent + 2);
        std::cout << "<null body>\n";
    }
}

PrintNode::PrintNode(ASTNodePtr expression)
    : expression(std::move(expression)) {}

void PrintNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Print\n";
    if (expression) {
        expression->print(indent + 1);
    } else {
        printIndent(indent + 1);
        std::cout << "<null expression>\n";
    }
}