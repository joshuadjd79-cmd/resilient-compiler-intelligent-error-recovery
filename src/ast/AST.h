#ifndef AST_H
#define AST_H

#include <memory>
#include <string>
#include <vector>

class ASTNode {
public:
    virtual ~ASTNode() = default;
    virtual void print(int indent = 0) const = 0;
};

using ASTNodePtr = std::unique_ptr<ASTNode>;

class ProgramNode : public ASTNode {
public:
    std::vector<ASTNodePtr> statements;

    void print(int indent = 0) const override;
};

class LiteralNode : public ASTNode {
public:
    std::string value;

    explicit LiteralNode(const std::string& value);

    void print(int indent = 0) const override;
};

class IdentifierNode : public ASTNode {
public:
    std::string name;

    explicit IdentifierNode(const std::string& name);

    void print(int indent = 0) const override;
};

class BinaryExpressionNode : public ASTNode {
public:
    std::string operatorSymbol;
    ASTNodePtr left;
    ASTNodePtr right;

    BinaryExpressionNode(
        const std::string& operatorSymbol,
        ASTNodePtr left,
        ASTNodePtr right
    );

    void print(int indent = 0) const override;
};

class DeclarationNode : public ASTNode {
public:
    std::string type;
    std::string name;
    ASTNodePtr initializer;

    DeclarationNode(
        const std::string& type,
        const std::string& name,
        ASTNodePtr initializer
    );

    void print(int indent = 0) const override;
};

class AssignmentNode : public ASTNode {
public:
    std::string name;
    ASTNodePtr value;

    AssignmentNode(
        const std::string& name,
        ASTNodePtr value
    );

    void print(int indent = 0) const override;
};

class BlockNode : public ASTNode {
public:
    std::vector<ASTNodePtr> statements;

    void print(int indent = 0) const override;
};

class IfNode : public ASTNode {
public:
    ASTNodePtr condition;
    ASTNodePtr thenBranch;
    ASTNodePtr elseBranch;

    IfNode(
        ASTNodePtr condition,
        ASTNodePtr thenBranch,
        ASTNodePtr elseBranch
    );

    void print(int indent = 0) const override;
};

class WhileNode : public ASTNode {
public:
    ASTNodePtr condition;
    ASTNodePtr body;

    WhileNode(
        ASTNodePtr condition,
        ASTNodePtr body
    );

    void print(int indent = 0) const override;
};

class PrintNode : public ASTNode {
public:
    ASTNodePtr expression;

    explicit PrintNode(ASTNodePtr expression);

    void print(int indent = 0) const override;
};

#endif