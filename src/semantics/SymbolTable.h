#ifndef SYMBOL_TABLE_H
#define SYMBOL_TABLE_H

#include <string>
#include <unordered_map>
#include <vector>
#include <iostream>

struct Symbol {
    std::string name;
    std::string type; // "int", "float", "bool"
    int scopeLevel;
    int line;
    int column;
    bool initialized;
};

class SymbolTable {
private:
    std::vector<std::unordered_map<std::string, Symbol>> scopes;
    int currentScopeLevel;
    std::vector<Symbol> allDeclaredSymbols;

public:
    SymbolTable();

    void enterScope();
    void exitScope();
    int getScopeLevel() const;

    bool declare(const std::string& name, const std::string& type, int line, int column);
    const Symbol* lookup(const std::string& name) const;
    bool isDeclaredInCurrentScope(const std::string& name) const;

    const std::vector<Symbol>& getAllDeclaredSymbols() const;
    void printTable() const;
};

#endif
