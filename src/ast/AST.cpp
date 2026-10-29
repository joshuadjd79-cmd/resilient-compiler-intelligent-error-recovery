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

LiteralNode::LiteralNode(const std::string& value, int line, int column)
    : value(value) {
    this->line = line;
    this->column = column;
}

void LiteralNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Literal: " << value << "\n";
}

IdentifierNode::IdentifierNode(const std::string& name, int line, int column)
    : name(name) {
    this->line = line;
    this->column = column;
}

void IdentifierNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Identifier: " << name << "\n";
}

BinaryExpressionNode::BinaryExpressionNode(
    const std::string& operatorSymbol,
    ASTNodePtr left,
    ASTNodePtr right,
    int line,
    int column
)
    : operatorSymbol(operatorSymbol),
      left(std::move(left)),
      right(std::move(right)) {
    this->line = line;
    this->column = column;
}

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
    ASTNodePtr initializer,
    int line,
    int column
)
    : type(type),
      name(name),
      initializer(std::move(initializer)) {
    this->line = line;
    this->column = column;
}

void DeclarationNode::print(int indent) const {
    printIndent(indent);
    std::cout << "Declaration: " << type << " " << name << "\n";

    if (initializer) {
        initializer->print(indent + 1);
    }
}

AssignmentNode::AssignmentNode(
    const std::string& name,
    ASTNodePtr value,
    int line,
    int column
)
    : name(name),
      value(std::move(value)) {
    this->line = line;
    this->column = column;
}

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

BlockNode::BlockNode(int line, int column) {
    this->line = line;
    this->column = column;
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
    ASTNodePtr elseBranch,
    int line,
    int column
)
    : condition(std::move(condition)),
      thenBranch(std::move(thenBranch)),
      elseBranch(std::move(elseBranch)) {
    this->line = line;
    this->column = column;
}

void IfNode::print(int indent) const {
    printIndent(indent);
    std::cout << "If\n";

    if (condition) {
        printIndent(indent + 1);
        std::cout << "Condition\n";
        condition->print(indent + 2);
    }

    if (thenBranch) {
        printIndent(indent + 1);
        std::cout << "Then\n";
        thenBranch->print(indent + 2);
    }

    if (elseBranch) {
        printIndent(indent + 1);
        std::cout << "Else\n";
        elseBranch->print(indent + 2);
    }
}

WhileNode::WhileNode(
    ASTNodePtr condition,
    ASTNodePtr body,
    int line,
    int column
)
    : condition(std::move(condition)),
      body(std::move(body)) {
    this->line = line;
    this->column = column;
}

void WhileNode::print(int indent) const {
    printIndent(indent);
    std::cout << "While\n";

    if (condition) {
        printIndent(indent + 1);
        std::cout << "Condition\n";
        condition->print(indent + 2);
    }

    if (body) {
        printIndent(indent + 1);
        std::cout << "Body\n";
        body->print(indent + 2);
    }
}

PrintNode::PrintNode(ASTNodePtr expression, int line, int column)
    : expression(std::move(expression)) {
    this->line = line;
    this->column = column;
}

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
