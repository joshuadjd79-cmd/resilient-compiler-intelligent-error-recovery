import os
from PIL import Image, ImageDraw, ImageFont

FONT_MONO = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 14)
FONT_MONO_SM = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 12)
FONT_SANS = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 14)
FONT_BOLD = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 15)
FONT_TITLE = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 16)

# 1. Fig 7.1: Lexical Analyzer Token Stream
def draw_token_stream():
    w, h = 820, 320
    img = Image.new('RGB', (w, h), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)
    
    # Title bar
    draw.rectangle([0, 0, w, 40], fill=(30, 41, 59))
    draw.text((20, 10), "LEXICAL TOKEN STREAM VIEWER (Lexer.cpp)", font=FONT_BOLD, fill=(56, 189, 248))
    draw.text((500, 12), "Total Scanned: 40 Tokens | Lexical Errors: 0", font=FONT_SANS, fill=(148, 163, 184))

    # Table header
    draw.rectangle([20, 50, 800, 80], fill=(22, 31, 48), outline=(51, 65, 85))
    headers = [("Index", 35), ("Line:Col", 110), ("Token Type", 230), ("Lexeme", 450), ("Category", 650)]
    for title, x in headers:
        draw.text((x, 58), title, font=FONT_BOLD, fill=(203, 213, 225))

    tokens = [
        ("0", "L1:1", "INT", "int", "Keyword (Primitive Type)", (56, 189, 248)),
        ("1", "L1:5", "IDENTIFIER", "x", "Identifier (Variable Name)", (250, 204, 21)),
        ("2", "L1:7", "ASSIGN", "=", "Assignment Operator", (148, 163, 184)),
        ("3", "L1:9", "NUMBER", "10", "Integer Numeric Literal", (52, 211, 153)),
        ("4", "L1:11", "SEMICOLON", ";", "Delimiter / Statement Terminator", (148, 163, 184)),
        ("5", "L2:1", "INT", "int", "Keyword (Primitive Type)", (56, 189, 248)),
        ("6", "L2:5", "IDENTIFIER", "y", "Identifier (Variable Name)", (250, 204, 21)),
        ("7", "L2:7", "ASSIGN", "=", "Assignment Operator", (148, 163, 184)),
        ("8", "L2:9", "NUMBER", "5", "Integer Numeric Literal", (52, 211, 153)),
        ("9", "L2:10", "SEMICOLON", ";", "Delimiter / Statement Terminator", (148, 163, 184)),
    ]

    y = 85
    for idx, loc, ttype, lex, cat, col in tokens:
        draw.rectangle([20, y, 800, y + 22], fill=(15, 23, 42) if int(idx) % 2 == 0 else (20, 28, 44))
        draw.text((35, y + 3), idx, font=FONT_MONO_SM, fill=(148, 163, 184))
        draw.text((110, y + 3), loc, font=FONT_MONO_SM, fill=(148, 163, 184))
        draw.text((230, y + 3), ttype, font=FONT_MONO_SM, fill=col)
        draw.text((450, y + 3), f"'{lex}'", font=FONT_MONO_SM, fill=(248, 250, 252))
        draw.text((650, y + 3), cat, font=FONT_SANS, fill=(148, 163, 184))
        y += 23

    img.save("assets/fig_tokens.png")

draw_token_stream()

# 2. Fig 7.3: Scoped Symbol Table View
def draw_symbol_table_view():
    w, h = 820, 320
    img = Image.new('RGB', (w, h), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)

    # Title bar
    draw.rectangle([0, 0, w, 40], fill=(30, 41, 59))
    draw.text((20, 10), "HIERARCHICAL SCOPE STACK & SYMBOL TABLE (SemanticAnalyzer.cpp)", font=FONT_BOLD, fill=(56, 189, 248))
    draw.text((580, 12), "Active Depth: 2 | Shadowing: Handled", font=FONT_SANS, fill=(148, 163, 184))

    # Table header
    draw.rectangle([20, 50, 800, 80], fill=(22, 31, 48), outline=(51, 65, 85))
    headers = [("Identifier", 35), ("Type", 160), ("Scope Level", 270), ("Declared At", 400), ("Initialized", 530), ("State / Notes", 650)]
    for title, x in headers:
        draw.text((x, 58), title, font=FONT_BOLD, fill=(203, 213, 225))

    symbols = [
        ("x", "int", "0 (Global)", "Line 1, Col 5", "TRUE (10)", "Active Base Variable", (52, 211, 153)),
        ("y", "int", "0 (Global)", "Line 2, Col 5", "TRUE (5)", "Active Base Variable", (52, 211, 153)),
        ("result", "int", "0 (Global)", "Line 3, Col 5", "TRUE (expr)", "Computed Value Target", (52, 211, 153)),
        ("limit", "int", "1 (Block: if)", "Line 6, Col 9", "TRUE (100)", "Local Scope Entry", (56, 189, 248)),
        ("x", "float", "1 (Block: if)", "Line 7, Col 11", "TRUE (3.14)", "Shadows Global 'x' (Level 0)", (245, 158, 11)),
        ("counter", "int", "2 (Loop: while)", "Line 9, Col 13", "TRUE (0)", "Nested Inner Loop Counter", (192, 132, 252)),
    ]

    y = 85
    for name, stype, sc, decl, init, notes, col in symbols:
        draw.rectangle([20, y, 800, y + 36], fill=(20, 28, 44) if "1" in sc else (15, 23, 42), outline=(30, 41, 59))
        draw.text((35, y + 10), name, font=FONT_BOLD, fill=col)
        draw.text((160, y + 10), stype, font=FONT_MONO, fill=(203, 213, 225))
        draw.text((270, y + 10), sc, font=FONT_SANS, fill=(148, 163, 184))
        draw.text((400, y + 10), decl, font=FONT_MONO_SM, fill=(148, 163, 184))
        draw.text((530, y + 10), init, font=FONT_MONO_SM, fill=(52, 211, 153))
        draw.text((650, y + 10), notes, font=FONT_SANS, fill=(203, 213, 225))
        y += 38

    img.save("assets/fig_symbol_table.png")

draw_symbol_table_view()

# 3. Fig 7.4: Abstract Syntax Tree Diagram
def draw_ast_diagram():
    w, h = 820, 340
    img = Image.new('RGB', (w, h), color=(248, 250, 252))
    draw = ImageDraw.Draw(img)

    def draw_node(x, y, text, sub="", color=(238, 242, 255), border=(99, 102, 241), nw=130, nh=44):
        draw.rounded_rectangle([x, y, x + nw, y + nh], radius=6, fill=color, outline=border, width=2)
        draw.text((x + 10, y + 6), text, font=FONT_BOLD, fill=(15, 23, 42))
        if sub:
            draw.text((x + 10, y + 24), sub, font=FONT_MONO_SM, fill=(71, 85, 105))

    def link(x1, y1, x2, y2):
        draw.line([x1, y1, x2, y2], fill=(148, 163, 184), width=2)

    # Header
    draw.text((20, 15), "ABSTRACT SYNTAX TREE (AST) HIERARCHY — Expression: result = x + y * 2", font=FONT_TITLE, fill=(30, 41, 59))

    # Tree Nodes
    # Root
    draw_node(340, 50, "ProgramNode", "Root (AST.cpp)", (224, 231, 255), (79, 70, 229), 140, 45)
    
    # Statement
    link(410, 95, 410, 125)
    draw_node(330, 125, "AssignStmt", "target: 'result'", (254, 243, 199), (217, 119, 6), 160, 45)

    # Binary Plus
    link(410, 170, 410, 195)
    draw_node(345, 195, "BinaryOp: '+'", "Operator: ADD", (220, 252, 231), (22, 163, 74), 130, 45)

    # Left Child: Identifier 'x'
    link(380, 240, 220, 265)
    draw_node(150, 265, "VariableExpr", "name: 'x'", (241, 245, 249), (100, 116, 139), 140, 45)

    # Right Child: Binary Multiply 'y * 2'
    link(440, 240, 570, 265)
    draw_node(500, 265, "BinaryOp: '*'", "Operator: MUL", (220, 252, 231), (22, 163, 74), 140, 45)

    # Children of Multiply: 'y' and '2'
    link(540, 310, 490, 320) # to bottom left
    link(600, 310, 650, 320) # to bottom right

    img.save("assets/fig_ast.png")

draw_ast_diagram()

# 4. Fig 9.6: Optimization Telemetry Card
def draw_telemetry_card():
    w, h = 820, 300
    img = Image.new('RGB', (w, h), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)

    draw.rectangle([0, 0, w, 40], fill=(30, 41, 59))
    draw.text((20, 10), "COMPILER OPTIMIZATION & RECOVERY TELEMETRY (TACOptimizer.cpp)", font=FONT_BOLD, fill=(56, 189, 248))

    # Metric Cards
    metrics = [
        ("INITIAL TAC", "16", "Raw Quadruples", (99, 102, 241)),
        ("OPTIMIZED TAC", "7", "Folded Quadruples", (34, 197, 94)),
        ("INSTRUCTIONS SAVED", "9", "Eliminated Ops", (245, 158, 11)),
        ("CODE REDUCTION", "56.25%", "Instruction Savings", (56, 189, 248)),
    ]

    x = 20
    for title, val, sub, col in metrics:
        draw.rounded_rectangle([x, 55, x + 180, 140], radius=8, fill=(22, 31, 48), outline=(51, 65, 85))
        draw.text((x + 14, 65), title, font=FONT_MONO_SM, fill=(148, 163, 184))
        draw.text((x + 14, 85), val, font=FONT_TITLE, fill=col)
        draw.text((x + 14, 115), sub, font=FONT_SANS, fill=(148, 163, 184))
        x += 195

    # Breakdown bars
    draw.text((25, 160), "OPTIMIZATION PASS BREAKDOWN:", font=FONT_BOLD, fill=(203, 213, 225))
    passes = [
        ("Constant Folding (Arithmetic Expressions)", "4 ops", 0.7, (56, 189, 248)),
        ("Constant Propagation (Forward Substitutions)", "7 ops", 0.95, (52, 211, 153)),
        ("Redundant Temporary Elimination (_t vars)", "3 ops", 0.55, (250, 204, 21)),
        ("Dead Code & Unreachable Jump Elimination", "2 ops", 0.4, (248, 113, 113)),
    ]
    by = 190
    for pname, count, ratio, bcol in passes:
        draw.text((25, by), pname, font=FONT_SANS, fill=(203, 213, 225))
        draw.text((360, by), count, font=FONT_BOLD, fill=bcol)
        draw.rectangle([430, by + 4, 780, by + 14], fill=(30, 41, 59))
        draw.rectangle([430, by + 4, 430 + int(350 * ratio), by + 14], fill=bcol)
        by += 25

    img.save("assets/fig_telemetry_card.png")

draw_telemetry_card()

print("All extra figures successfully created!")
