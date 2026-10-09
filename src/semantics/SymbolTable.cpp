#include "SymbolTable.h"
#include <iomanip>

SymbolTable::SymbolTable() : currentScopeLevel(0) {
    // Start with global scope (scope 0)
    scopes.emplace_back();
}

void SymbolTable::enterScope() {
    currentScopeLevel++;
    scopes.emplace_back();
}

void SymbolTable::exitScope() {
    if (scopes.size() > 1) {
        scopes.pop_back();
        currentScopeLevel--;
    }
}

int SymbolTable::getScopeLevel() const {
    return currentScopeLevel;
}

bool SymbolTable::declare(const std::string& name, const std::string& type, int line, int column) {
    if (isDeclaredInCurrentScope(name)) {
        return false; // Duplicate declaration in current scope
    }

    Symbol sym;
    sym.name = name;
    sym.type = type;
    sym.scopeLevel = currentScopeLevel;
    sym.line = line;
    sym.column = column;
    sym.initialized = false;

    scopes.back()[name] = sym;
    allDeclaredSymbols.push_back(sym);
    return true;
}

const Symbol* SymbolTable::lookup(const std::string& name) const {
    for (int i = static_cast<int>(scopes.size()) - 1; i >= 0; --i) {
        auto it = scopes[i].find(name);
        if (it != scopes[i].end()) {
            return &it->second;
        }
    }
    return nullptr;
}

bool SymbolTable::isDeclaredInCurrentScope(const std::string& name) const {
    if (scopes.empty()) return false;
    return scopes.back().find(name) != scopes.back().end();
}

const std::vector<Symbol>& SymbolTable::getAllDeclaredSymbols() const {
    return allDeclaredSymbols;
}

void SymbolTable::printTable() const {
    std::cout << "\n=== Symbol Table Audit ===\n";
    if (allDeclaredSymbols.empty()) {
        std::cout << "No symbols declared.\n";
        return;
    }

    std::cout << std::left
              << std::setw(16) << "Identifier"
              << std::setw(10) << "Type"
              << std::setw(8)  << "Scope"
              << std::setw(12) << "Declared At"
              << "\n";
    std::cout << std::string(46, '-') << "\n";

    for (const auto& sym : allDeclaredSymbols) {
        std::string loc = "L" + std::to_string(sym.line) + ":" + std::to_string(sym.column);
        std::cout << std::left
                  << std::setw(16) << sym.name
                  << std::setw(10) << sym.type
                  << std::setw(8)  << sym.scopeLevel
                  << std::setw(12) << loc
                  << "\n";
    }
}
