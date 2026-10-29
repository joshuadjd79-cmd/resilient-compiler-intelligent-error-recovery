import sys
import pptx
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

def create_deck(filename="Phase2_Resilient_Compiler_Review.pptx"):
    prs = pptx.Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Color Palette
    BG_COLOR = RGBColor(11, 15, 25)          # #0B0F19
    SURFACE_COLOR = RGBColor(22, 31, 48)     # #161F30
    SURFACE_ALT = RGBColor(30, 41, 59)       # #1E293B
    BORDER_COLOR = RGBColor(42, 55, 78)      # #2A374E
    ACCENT_CYAN = RGBColor(56, 189, 248)     # #38BDF8
    ACCENT_GREEN = RGBColor(52, 211, 153)    # #34D399
    ACCENT_AMBER = RGBColor(251, 191, 36)    # #FBBF24
    ACCENT_PURPLE = RGBColor(192, 132, 252)  # #C084FC
    TEXT_LIGHT = RGBColor(248, 250, 252)     # #F8FAFC
    TEXT_MUTED = RGBColor(148, 163, 184)     # #94A3B8

    def add_slide_bg(slide):
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
        bg.fill.solid()
        bg.fill.fore_color.rgb = BG_COLOR
        bg.line.fill.background()
        return bg

    def add_header(slide, title_text, category_text="Resilient Compiler | Phase 2: Core Implementation Review", slide_num=None):
        header_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.733), Inches(1.1))
        tf = header_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p_cat = tf.paragraphs[0]
        p_cat.text = category_text.upper()
        p_cat.font.size = Pt(11)
        p_cat.font.bold = True
        p_cat.font.color.rgb = ACCENT_CYAN

        p_title = tf.add_paragraph()
        p_title.text = title_text
        p_title.font.size = Pt(28)
        p_title.font.bold = True
        p_title.font.color.rgb = TEXT_LIGHT

        if slide_num:
            num_box = slide.shapes.add_textbox(Inches(11.5), Inches(6.8), Inches(1.0), Inches(0.4))
            tf_num = num_box.text_frame
            p_n = tf_num.paragraphs[0]
            p_n.alignment = PP_ALIGN.RIGHT
            p_n.text = str(slide_num)
            p_n.font.size = Pt(11)
            p_n.font.color.rgb = TEXT_MUTED

    def add_card(slide, left, top, width, height, bg_color=SURFACE_COLOR, border_color=BORDER_COLOR):
        card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
        card.fill.solid()
        card.fill.fore_color.rgb = bg_color
        card.line.color.rgb = border_color
        card.line.width = Pt(1)
        return card

    # ==========================================
    # SLIDE 1: Title Slide
    # ==========================================
    s1 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s1)

    title_box = s1.shapes.add_textbox(Inches(1.0), Inches(1.6), Inches(11.333), Inches(4.5))
    tf1 = title_box.text_frame
    tf1.word_wrap = True

    p0 = tf1.paragraphs[0]
    p0.text = "COMPILER DESIGN LABORATORY PROJECT"
    p0.font.size = Pt(13)
    p0.font.bold = True
    p0.font.color.rgb = ACCENT_CYAN
    p0.space_after = Pt(14)

    p1 = tf1.add_paragraph()
    p1.text = "Resilient Compiler"
    p1.font.size = Pt(46)
    p1.font.bold = True
    p1.font.color.rgb = TEXT_LIGHT

    p2 = tf1.add_paragraph()
    p2.text = "Phase 2: Core Implementation Review"
    p2.font.size = Pt(24)
    p2.font.bold = True
    p2.font.color.rgb = ACCENT_GREEN
    p2.space_after = Pt(16)

    p3 = tf1.add_paragraph()
    p3.text = "A Fault-Tolerant Compiler Pipeline with Multi-Strategy Lookahead Recovery & AST Construction"
    p3.font.size = Pt(15)
    p3.font.color.rgb = TEXT_MUTED
    p3.space_after = Pt(36)

    p4 = tf1.add_paragraph()
    p4.text = "D JOSHUA DANIEL   |   REG NO: 24BCE0436"
    p4.font.size = Pt(16)
    p4.font.bold = True
    p4.font.color.rgb = TEXT_LIGHT

    # ==========================================
    # SLIDE 2: Project Overview
    # ==========================================
    s2 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s2)
    add_header(s2, "Project Overview", slide_num=2)

    # Left Box
    add_card(s2, Inches(0.8), Inches(1.8), Inches(7.2), Inches(4.7))
    tb_l = s2.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(6.6), Inches(4.3))
    tfl = tb_l.text_frame
    tfl.word_wrap = True

    pl1 = tfl.paragraphs[0]
    pl1.text = "Why Resilient Compilation?"
    pl1.font.size = Pt(18)
    pl1.font.bold = True
    pl1.font.color.rgb = ACCENT_CYAN
    pl1.space_after = Pt(12)

    bullets = [
        ("Core Philosophy", "Focuses on intelligent compiler behavior following syntax error detection rather than terminating execution immediately."),
        ("Non-Fatal Processing", "Instead of aborting at the first error, the parser strategically heals the token stream and continues parsing down to the end of the file."),
        ("Multi-Error Diagnostic", "Surfaces all structural errors in a single compilation pass, significantly improving developer debugging turnaround time."),
        ("Primary Goal for Phase 2", "Implement an end-to-end recoverable pipeline from lexical scanning through AST construction and diagnostic audit reporting.")
    ]
    for title, desc in bullets:
        p = tfl.add_paragraph()
        p.text = f"•  {title}: {desc}"
        p.font.size = Pt(13)
        p.font.color.rgb = TEXT_LIGHT
        p.space_after = Pt(10)

    # Right Card
    add_card(s2, Inches(8.3), Inches(1.8), Inches(4.2), Inches(4.7), bg_color=SURFACE_ALT, border_color=ACCENT_CYAN)
    tb_r = s2.shapes.add_textbox(Inches(8.6), Inches(2.0), Inches(3.6), Inches(4.3))
    tfr = tb_r.text_frame
    tfr.word_wrap = True

    pr1 = tfr.paragraphs[0]
    pr1.text = "Core Modules Built in Phase 2"
    pr1.font.size = Pt(17)
    pr1.font.bold = True
    pr1.font.color.rgb = ACCENT_GREEN
    pr1.space_after = Pt(16)

    built = [
        "Lexical Analyzer (Regex Tokenizer)",
        "Predictive Recursive-Descent Parser",
        "Polymorphic Abstract Syntax Tree (AST)",
        "Centralized Recovery Manager",
        "Cost-Based Heuristic Scorer",
        "Automated Diagnostic Audit Logger"
    ]
    for item in built:
        p = tfr.add_paragraph()
        p.text = f"✔  {item}"
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = TEXT_LIGHT
        p.space_after = Pt(10)

    # ==========================================
    # SLIDE 3: Problem Statement
    # ==========================================
    s3 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s3)
    add_header(s3, "Problem Statement & Motivation", slide_num=3)

    cols = [
        ("The Problem", "Conventional Parsers Fail Fast", "Standard non-resilient parsers abort immediately on the first syntax anomaly (e.g., standard GCC/Clang cascade or bail-out behavior).", ACCENT_AMBER),
        ("Why It Hurts", "Poor Developer Ergonomics", "Forces repetitive edit-compile-debug cycles since developers only discover one error per build. Cascading error floods cause false alarms.", RGBColor(244, 63, 94)),
        ("What We Built", "Resilient Multi-Error Pipeline", "Detects syntax mismatches, evaluates minimal-cost corrections, logs explicit repair rationales, and successfully parses downstream code.", ACCENT_GREEN)
    ]
    for i, (tag, title, desc, col) in enumerate(cols):
        left = Inches(0.8 + i * 4.0)
        add_card(s3, left, Inches(1.8), Inches(3.7), Inches(4.7))
        tb = s3.shapes.add_textbox(left + Inches(0.3), Inches(2.1), Inches(3.1), Inches(4.1))
        tf = tb.text_frame
        tf.word_wrap = True

        p_t = tf.paragraphs[0]
        p_t.text = tag.upper()
        p_t.font.size = Pt(11)
        p_t.font.bold = True
        p_t.font.color.rgb = col
        p_t.space_after = Pt(8)

        p_h = tf.add_paragraph()
        p_h.text = title
        p_h.font.size = Pt(18)
        p_h.font.bold = True
        p_h.font.color.rgb = TEXT_LIGHT
        p_h.space_after = Pt(14)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.size = Pt(13)
        p_d.font.color.rgb = TEXT_MUTED
        p_d.space_after = Pt(10)

    # ==========================================
    # SLIDE 4: Objectives
    # ==========================================
    s4 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s4)
    add_header(s4, "Phase 2 Core Objectives", slide_num=4)

    objs = [
        ("1", "Lexical Tokenization", "Accurately recognize keywords, identifiers, types (int, float), literals, and operators with exact coordinate tracking."),
        ("2", "Grammar & Expression Parsing", "Parse variable declarations, assignments, arithmetic/relational expressions, and control structures (if-else, while)."),
        ("3", "Hierarchical AST Construction", "Build an immutable, strongly-typed tree representation preserving complete statement semantics despite syntax repairs."),
        ("4", "Multi-Strategy Error Recovery", "Implement and benchmark three distinct recovery strategies: Virtual Insertion, Token Deletion, and Panic Synchronization."),
        ("5", "Diagnostic Audit Reporting", "Generate structured recovery reports detailing repair actions, coordinates, incurred costs, and confidence levels.")
    ]
    for i, (num, title, desc) in enumerate(objs):
        top = Inches(1.8 + i * 0.95)
        add_card(s4, Inches(0.8), top, Inches(11.733), Inches(0.82))

        # Badge
        badge = s4.shapes.add_shape(MSO_SHAPE.OVAL, Inches(1.0), top + Inches(0.16), Inches(0.5), Inches(0.5))
        badge.fill.solid()
        badge.fill.fore_color.rgb = ACCENT_CYAN
        badge.line.fill.background()
        tf_b = badge.text_frame
        p_b = tf_b.paragraphs[0]
        p_b.alignment = PP_ALIGN.CENTER
        p_b.text = num
        p_b.font.size = Pt(13)
        p_b.font.bold = True
        p_b.font.color.rgb = BG_COLOR

        tb = s4.shapes.add_textbox(Inches(1.7), top + Inches(0.12), Inches(10.6), Inches(0.6))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = f"{title}: "
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = TEXT_LIGHT
        run = p.add_run()
        run.text = desc
        run.font.bold = False
        run.font.color.rgb = TEXT_MUTED

    # ==========================================
    # SLIDE 5: System Architecture
    # ==========================================
    s5 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s5)
    add_header(s5, "System Architecture Pipeline", slide_num=5)

    steps = [
        ("Source Code", "Raw input file or text buffer", ACCENT_CYAN),
        ("Lexer", "Regex-based scanner producing Token Stream", ACCENT_CYAN),
        ("Recursive-Descent Parser", "Grammar matching with lookahead validation", ACCENT_GREEN),
        ("Recovery Manager + Scorer", "Arbitrates Insertion, Deletion, and Panic Mode", ACCENT_AMBER),
        ("Abstract Syntax Tree", "Strongly-typed node hierarchy (AST)", ACCENT_PURPLE),
        ("Recovery Audit Report", "Diagnostic report with costs & rationales", ACCENT_GREEN)
    ]
    for i, (name, role, col) in enumerate(steps):
        left = Inches(0.8 + i * 1.98)
        card = add_card(s5, left, Inches(2.2), Inches(1.8), Inches(3.2), border_color=col)
        tb = s5.shapes.add_textbox(left + Inches(0.1), Inches(2.4), Inches(1.6), Inches(2.8))
        tf = tb.text_frame
        tf.word_wrap = True

        p_step = tf.paragraphs[0]
        p_step.text = f"STEP {i+1:02d}"
        p_step.font.size = Pt(10)
        p_step.font.bold = True
        p_step.font.color.rgb = col
        p_step.space_after = Pt(8)

        p_name = tf.add_paragraph()
        p_name.text = name
        p_name.font.size = Pt(14)
        p_name.font.bold = True
        p_name.font.color.rgb = TEXT_LIGHT
        p_name.space_after = Pt(10)

        p_role = tf.add_paragraph()
        p_role.text = role
        p_role.font.size = Pt(11)
        p_role.font.color.rgb = TEXT_MUTED

    # Bottom summary card
    add_card(s5, Inches(0.8), Inches(5.8), Inches(11.733), Inches(0.9), bg_color=SURFACE_ALT)
    tb_b = s5.shapes.add_textbox(Inches(1.1), Inches(5.95), Inches(11.1), Inches(0.6))
    tf_b = tb_b.text_frame
    p_b = tf_b.paragraphs[0]
    p_b.text = "Architectural Highlight: "
    p_b.font.size = Pt(13)
    p_b.font.bold = True
    p_b.font.color.rgb = ACCENT_AMBER
    r_b = p_b.add_run()
    r_b.text = "The Recovery Engine acts as an intelligent middleware between grammar expectations and incoming tokens, ensuring that AST construction continues uninterrupted."
    r_b.font.bold = False
    r_b.font.color.rgb = TEXT_LIGHT

    # ==========================================
    # SLIDE 6: Modules Done
    # ==========================================
    s6 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s6)
    add_header(s6, "Implemented Modules & Responsibilities", slide_num=6)

    modules = [
        ("Lexer (Lexer.cpp)", "Deterministic Tokenization", "Scans character stream; tokenizes keywords (int, float, if, while, print), identifiers, numbers, operators; tracks line and column coordinates.", ACCENT_CYAN),
        ("Parser (Parser.cpp)", "Predictive Recursive-Descent", "Validates program structure against LL(1)-style productions; intercepts mismatched tokens and queries the Recovery Manager before failing.", ACCENT_GREEN),
        ("AST (AST.cpp)", "Polymorphic Hierarchy", "Stores program constructs as structured nodes (ProgramNode, VarDeclNode, IfNode, WhileNode, BinaryExpr); implements pretty-printing visitor.", ACCENT_PURPLE),
        ("Recovery Manager (RecoveryManager.cpp)", "Centralized Healing Hub", "Coordinates repair strategies; executes virtual token synthesis, stream deletion, and synchronizing set skips; generates formatted audit reports.", ACCENT_AMBER),
        ("Cost Scorer (RecoveryScorer.cpp)", "Multi-Strategy Arbitration", "Quantifies recovery cost and confidence metrics for each candidate action to pick the least disruptive repair path.", ACCENT_CYAN)
    ]
    for i, (mod, sub, desc, col) in enumerate(modules):
        top = Inches(1.8 + i * 0.95)
        add_card(s6, Inches(0.8), top, Inches(11.733), Inches(0.82))

        tb = s6.shapes.add_textbox(Inches(1.1), top + Inches(0.12), Inches(11.1), Inches(0.6))
        tf = tb.text_frame
        tf.word_wrap = True

        p = tf.paragraphs[0]
        p.text = f"{mod}  —  "
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = col

        r1 = p.add_run()
        r1.text = f"{sub}: "
        r1.font.bold = True
        r1.font.color.rgb = TEXT_LIGHT

        r2 = p.add_run()
        r2.text = desc
        r2.font.bold = False
        r2.font.color.rgb = TEXT_MUTED

    # ==========================================
    # SLIDE 7: How Recovery Works
    # ==========================================
    s7 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s7)
    add_header(s7, "How Error Recovery Operates (4-Stage Cycle)", slide_num=7)

    cycle = [
        ("01", "Mismatch Detection", "Parser expects token T (e.g., semicolon, closing parenthesis), but encounters unexpected token or EOF.", ACCENT_CYAN),
        ("02", "Candidate Probing", "Lookahead window probes candidate fixes: Can we insert missing T? Can we delete the bad token? Or must we synchronize?", ACCENT_AMBER),
        ("03", "Cost Evaluation", "Cost scorer assigns penalty scores (Insertion: 1, Deletion: 2, Panic: 5) and confidence levels to determine best action.", ACCENT_GREEN),
        ("04", "Stream Healing & Log", "Virtual token injected or bad token dropped; action logged to audit table; parsing resumes immediately with zero crash.", ACCENT_PURPLE)
    ]
    for i, (num, title, desc, col) in enumerate(cycle):
        left = Inches(0.8 + i * 3.0)
        add_card(s7, left, Inches(2.0), Inches(2.75), Inches(4.5), border_color=col)

        tb = s7.shapes.add_textbox(left + Inches(0.2), Inches(2.2), Inches(2.35), Inches(4.1))
        tf = tb.text_frame
        tf.word_wrap = True

        p_n = tf.paragraphs[0]
        p_n.text = num
        p_n.font.size = Pt(28)
        p_n.font.bold = True
        p_n.font.color.rgb = col
        p_n.space_after = Pt(10)

        p_t = tf.add_paragraph()
        p_t.text = title
        p_t.font.size = Pt(16)
        p_t.font.bold = True
        p_t.font.color.rgb = TEXT_LIGHT
        p_t.space_after = Pt(10)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.size = Pt(12)
        p_d.font.color.rgb = TEXT_MUTED

    # ==========================================
    # SLIDE 8: Recovery Strategies
    # ==========================================
    s8 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s8)
    add_header(s8, "Recovery Strategies & Concrete Examples", slide_num=8)

    strategies = [
        ("Insertion Strategy", "Cost: 1 | Confidence: HIGH", "Synthesizes an expected token without consuming the input stream. Highly effective when the following token is a valid statement starter or block delimiter.", "Missing ';': 'int x = 10 \\n print x;' -> Injects virtual semicolon without skipping code.", ACCENT_GREEN),
        ("Deletion Strategy", "Cost: 2 | Confidence: MEDIUM", "Discards an extraneous, invalid, or redundant token that violates current grammar, then retries parsing the current production.", "Extra ';': 'float y = 25;;' -> Discards redundant second semicolon and continues.", ACCENT_AMBER),
        ("Panic-Mode Strategy", "Cost: 5 | Confidence: LOW", "Discards tokens sequentially until a predefined synchronizing token (;, }, EOF) is reached, ensuring guaranteed non-blocking recovery.", "Malformed Expression: 'if (???) { ... }' -> Skips corrupt clause to safe block start.", RGBColor(244, 63, 94))
    ]
    for i, (name, metrics, idea, ex, col) in enumerate(strategies):
        top = Inches(1.8 + i * 1.65)
        add_card(s8, Inches(0.8), top, Inches(11.733), Inches(1.45), border_color=col)

        tb = s8.shapes.add_textbox(Inches(1.1), top + Inches(0.15), Inches(11.1), Inches(1.15))
        tf = tb.text_frame
        tf.word_wrap = True

        p1 = tf.paragraphs[0]
        p1.text = f"{name}   "
        p1.font.size = Pt(16)
        p1.font.bold = True
        p1.font.color.rgb = col
        r1 = p1.add_run()
        r1.text = f"[{metrics}]"
        r1.font.size = Pt(12)
        r1.font.color.rgb = TEXT_MUTED
        p1.space_after = Pt(6)

        p2 = tf.add_paragraph()
        p2.text = f"• Mechanism: {idea}"
        p2.font.size = Pt(12)
        p2.font.color.rgb = TEXT_LIGHT
        p2.space_after = Pt(4)

        p3 = tf.add_paragraph()
        p3.text = f"• Example: {ex}"
        p3.font.size = Pt(12)
        p3.font.color.rgb = ACCENT_CYAN

    # ==========================================
    # SLIDE 9: Cost-Based Scoring
    # ==========================================
    s9 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s9)
    add_header(s9, "Cost-Based Strategy Scoring Heuristics", slide_num=9)

    score_cards = [
        ("1", "Virtual Insertion", "HIGH CONFIDENCE", "Synthesizing expected delimiters causes minimal disruption to following AST structures.", ACCENT_GREEN),
        ("2", "Token Deletion", "MEDIUM CONFIDENCE", "Discarding a token loses potential program intent but resolves duplicate tokens cleanly.", ACCENT_AMBER),
        ("5", "Panic Synchronization", "LOW CONFIDENCE", "Skipping arbitrary tokens is a defensive fallback to prevent parser divergence.", RGBColor(244, 63, 94))
    ]
    for i, (cost, name, conf, desc, col) in enumerate(score_cards):
        left = Inches(0.8 + i * 4.0)
        add_card(s9, left, Inches(1.8), Inches(3.7), Inches(3.2), border_color=col)

        tb = s9.shapes.add_textbox(left + Inches(0.3), Inches(2.0), Inches(3.1), Inches(2.8))
        tf = tb.text_frame
        tf.word_wrap = True

        p_c = tf.paragraphs[0]
        p_c.text = f"COST: {cost}"
        p_c.font.size = Pt(28)
        p_c.font.bold = True
        p_c.font.color.rgb = col
        p_c.space_after = Pt(6)

        p_n = tf.add_paragraph()
        p_n.text = name
        p_n.font.size = Pt(16)
        p_n.font.bold = True
        p_n.font.color.rgb = TEXT_LIGHT
        p_n.space_after = Pt(4)

        p_k = tf.add_paragraph()
        p_k.text = conf
        p_k.font.size = Pt(11)
        p_k.font.bold = True
        p_k.font.color.rgb = col
        p_k.space_after = Pt(10)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.size = Pt(12)
        p_d.font.color.rgb = TEXT_MUTED

    # Bottom Explanation
    add_card(s9, Inches(0.8), Inches(5.3), Inches(11.733), Inches(1.4))
    tb_exp = s9.shapes.add_textbox(Inches(1.1), Inches(5.45), Inches(11.1), Inches(1.1))
    tf_exp = tb_exp.text_frame
    tf_exp.word_wrap = True

    pe1 = tf_exp.paragraphs[0]
    pe1.text = "Mathematical Heuristic Model:"
    pe1.font.size = Pt(14)
    pe1.font.bold = True
    pe1.font.color.rgb = ACCENT_CYAN
    pe1.space_after = Pt(4)

    pe2 = tf_exp.add_paragraph()
    pe2.text = "• Cost Function: Strategy Cost = BaseCost(Strategy) + TokenPenalty(Type) + LookaheadPenalty"
    pe2.font.size = Pt(12)
    pe2.font.color.rgb = TEXT_LIGHT
    pe2.space_after = Pt(4)

    pe3 = tf_exp.add_paragraph()
    pe3.text = "• Decision Rule: The Recovery Manager picks argmin(Cost) to ensure minimal disruption to AST hierarchy."
    pe3.font.size = Pt(12)
    pe3.font.color.rgb = TEXT_MUTED

    # ==========================================
    # SLIDE 10: Working Demo
    # ==========================================
    s10 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s10)
    add_header(s10, "Working Demonstration: Multi-Error Program", slide_num=10)

    # Left: Code Input
    add_card(s10, Inches(0.8), Inches(1.8), Inches(5.7), Inches(4.7))
    tb_code = s10.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(5.3), Inches(4.3))
    tfc = tb_code.text_frame
    tfc.word_wrap = True

    pc1 = tfc.paragraphs[0]
    pc1.text = "Input Source (4 Syntax Errors):"
    pc1.font.size = Pt(14)
    pc1.font.bold = True
    pc1.font.color.rgb = ACCENT_AMBER
    pc1.space_after = Pt(10)

    code_lines = [
        "int a = ;          // Error 1: Missing expression",
        "float b = 25;;     // Error 2: Redundant semicolon",
        "if (b > 10 {       // Error 3: Missing ')' delimiter",
        "    b = b + 5;",
        "    a = 99         // Error 4: Missing statement ';'",
        "}",
        "while (a > 0) {",
        "    a = a - 1;",
        "}"
    ]
    for cl in code_lines:
        p = tfc.add_paragraph()
        p.text = cl
        p.font.size = Pt(12)
        p.font.color.rgb = TEXT_LIGHT
        p.space_after = Pt(3)

    # Right: Recovery Audit Output
    add_card(s10, Inches(6.8), Inches(1.8), Inches(5.7), Inches(4.7), border_color=ACCENT_GREEN)
    tb_rep = s10.shapes.add_textbox(Inches(7.0), Inches(2.0), Inches(5.3), Inches(4.3))
    tfr = tb_rep.text_frame
    tfr.word_wrap = True

    pr1 = tfr.paragraphs[0]
    pr1.text = "Generated Recovery Audit Report:"
    pr1.font.size = Pt(14)
    pr1.font.bold = True
    pr1.font.color.rgb = ACCENT_GREEN
    pr1.space_after = Pt(10)

    rep_lines = [
        ("[1] [INSERTION] Inserted default '0'", "Cost: 2 | Conf: MEDIUM | Injected literal '0'"),
        ("[2] [DELETION] Deleted token ';'", "Cost: 1 | Conf: HIGH   | Discarded duplicate ';'"),
        ("[3] [INSERTION] Inserted ')'", "Cost: 1 | Conf: HIGH   | Restored ')' before '{'"),
        ("[4] [INSERTION] Inserted ';'", "Cost: 1 | Conf: HIGH   | Restored ';' before '}'"),
        ("Result: AST 100% Intact", "All statements parsed and AST rendered successfully!")
    ]
    for title, desc in rep_lines:
        p = tfr.add_paragraph()
        p.text = f"✔ {title}"
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = ACCENT_CYAN
        p2 = tfr.add_paragraph()
        p2.text = f"    {desc}"
        p2.font.size = Pt(11)
        p2.font.color.rgb = TEXT_MUTED
        p2.space_after = Pt(6)

    # ==========================================
    # SLIDE 11: Test Cases
    # ==========================================
    s11 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s11)
    add_header(s11, "Empirical Test Suite & Validation", slide_num=11)

    tests = [
        ("01", "Missing Semicolon Recovery", "Missing ';' after statement", "Synthesizes virtual ';' via lookahead", "100% Clean AST built", "PASSED"),
        ("02", "Redundant Delimiter Handling", "Extraneous ';;' or duplicate tokens", "Discards bad token; continues line", "Single token deleted", "PASSED"),
        ("03", "Missing Delimiter in If/While", "Unclosed condition: 'if (x > 5 {'", "Synthesizes missing ')' before block", "Condition tree valid", "PASSED"),
        ("04", "Multiple Compound Errors", "4 mixed errors in 8 lines", "Applies sequential scored repairs", "All 4 errors healed", "PASSED"),
        ("05", "Valid Canonical Programs", "Fibonacci loop, complex arithmetic", "Zero recovery actions invoked", "Clean AST & 0 cost", "PASSED")
    ]
    for i, (tnum, tname, tinput, tact, tout, tstat) in enumerate(tests):
        top = Inches(1.8 + i * 0.95)
        add_card(s11, Inches(0.8), top, Inches(11.733), Inches(0.82))

        tb = s11.shapes.add_textbox(Inches(1.1), top + Inches(0.12), Inches(11.1), Inches(0.6))
        tf = tb.text_frame
        tf.word_wrap = True

        p = tf.paragraphs[0]
        p.text = f"TEST #{tnum}: {tname}   "
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = ACCENT_CYAN

        r_stat = p.add_run()
        r_stat.text = f"[{tstat}]"
        r_stat.font.bold = True
        r_stat.font.color.rgb = ACCENT_GREEN

        p_sub = tf.add_paragraph()
        p_sub.text = f"Input: {tinput}  |  Action: {tact}  |  Result: {tout}"
        p_sub.font.size = Pt(11)
        p_sub.font.color.rgb = TEXT_MUTED

    # ==========================================
    # SLIDE 12: Novelty & Contribution
    # ==========================================
    s12 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s12)
    add_header(s12, "Novelty & Key Technical Contributions", slide_num=12)

    contributions = [
        ("Multi-Strategy Lookahead Synthesis", "Unlike naive compilers that only offer panic-mode skips, our architecture evaluates both synthetic insertion and selective deletion before falling back to panic synchronization.", ACCENT_CYAN),
        ("Transparent Diagnostic Audit Trail", "Every single recovery decision records source coordinates, action category, incurred cost, confidence metric, and exact grammatical rationale for complete auditability.", ACCENT_GREEN),
        ("Cascade-Free Grammar Healing", "Prevents spurious secondary error cascading by verifying candidate repairs against grammar follow-sets before committal.", ACCENT_AMBER),
        ("Decoupled Modular C++17 Design", "Separates grammar parsing, AST generation, and error recovery scoring into clean, extensible interfaces with zero circular header baggage.", ACCENT_PURPLE)
    ]
    for i, (title, desc, col) in enumerate(contributions):
        top = Inches(1.8 + i * 1.25)
        add_card(s12, Inches(0.8), top, Inches(11.733), Inches(1.1), border_color=col)

        tb = s12.shapes.add_textbox(Inches(1.1), top + Inches(0.15), Inches(11.1), Inches(0.8))
        tf = tb.text_frame
        tf.word_wrap = True

        p1 = tf.paragraphs[0]
        p1.text = f"•  {title}"
        p1.font.size = Pt(16)
        p1.font.bold = True
        p1.font.color.rgb = col
        p1.space_after = Pt(4)

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(12)
        p2.font.color.rgb = TEXT_LIGHT

    # ==========================================
    # SLIDE 13: Technical Challenges
    # ==========================================
    s13 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s13)
    add_header(s13, "Technical Challenges Encountered & Solved", slide_num=13)

    challenges = [
        ("Circular Header Dependencies", "The Parser required RecoveryManager, while RecoveryManager needed Parser state and AST types. Solved through forward declarations, dedicated recovery interface headers, and clean compilation boundaries.", ACCENT_CYAN),
        ("Preventing Parser Infinite Loops", "Incorrect recovery insertion can cause the recursive parser to endlessly inspect the same position. Solved by guaranteeing monotonic token stream advancement on repeated lookahead mismatches.", ACCENT_AMBER),
        ("State Corruption During AST Construction", "Inserting virtual tokens risked corrupting parent node pointers. Solved by decoupling node synthesis from stream manipulation, ensuring every AST node receives a valid synthesized child.", ACCENT_GREEN),
        ("Real-Time Diagnostic Exposition", "Parsing logs can easily overwhelm terminal outputs. Solved by building structured recovery tables that translate raw recovery events into human-readable cards.", ACCENT_PURPLE)
    ]
    for i, (title, desc, col) in enumerate(challenges):
        top = Inches(1.8 + i * 1.25)
        add_card(s13, Inches(0.8), top, Inches(11.733), Inches(1.1))

        tb = s13.shapes.add_textbox(Inches(1.1), top + Inches(0.15), Inches(11.1), Inches(0.8))
        tf = tb.text_frame
        tf.word_wrap = True

        p1 = tf.paragraphs[0]
        p1.text = f"✔  Challenge: {title}"
        p1.font.size = Pt(15)
        p1.font.bold = True
        p1.font.color.rgb = col
        p1.space_after = Pt(4)

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(12)
        p2.font.color.rgb = TEXT_LIGHT

    # ==========================================
    # SLIDE 14: Current Limitations
    # ==========================================
    s14 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s14)
    add_header(s14, "Phase 2 Scope & Current Boundaries", slide_num=14)

    limits = [
        ("Fixed Cost Weightings", "Current Phase 2 weights (Insertion=1, Deletion=2, Panic=5) are heuristic constants rather than dynamically learned weights based on nesting level or scope depth.", ACCENT_AMBER),
        ("Pathological Error Edge Cases", "Severe multi-token corruption inside deeply nested expressions may require panic synchronization rather than localized surgical repairs.", RGBColor(244, 63, 94)),
        ("Downstream Pipeline Boundaries", "Phase 2 scope deliberately centers on Lexing, Parsing, and Error Recovery. Semantic type checking, intermediate code (TAC), and bytecode generation are reserved for Phase 3/4.", ACCENT_CYAN)
    ]
    for i, (title, desc, col) in enumerate(limits):
        left = Inches(0.8 + i * 4.0)
        add_card(s14, left, Inches(1.8), Inches(3.7), Inches(4.7))

        tb = s14.shapes.add_textbox(left + Inches(0.3), Inches(2.1), Inches(3.1), Inches(4.1))
        tf = tb.text_frame
        tf.word_wrap = True

        p_t = tf.paragraphs[0]
        p_t.text = title
        p_t.font.size = Pt(17)
        p_t.font.bold = True
        p_t.font.color.rgb = col
        p_t.space_after = Pt(14)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.size = Pt(13)
        p_d.font.color.rgb = TEXT_LIGHT

    # ==========================================
    # SLIDE 15: Next Steps
    # ==========================================
    s15 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s15)
    add_header(s15, "Project Roadmap & Upcoming Phases", slide_num=15)

    roadmap = [
        ("Phase 3A", "Semantic Analysis & Symbol Table", "Implement scoped symbol tables, type checking (int vs. float compatibility), and detection of undeclared variables.", ACCENT_CYAN),
        ("Phase 3B", "Dynamic Recovery Tuning", "Tune recovery cost weights dynamically based on expression nesting level and distance to synchronizing tokens.", ACCENT_GREEN),
        ("Phase 4A", "Three-Address Code (TAC) & IR Optimization", "Generate linear TAC representations with constant folding, constant propagation, and dead code elimination.", ACCENT_AMBER),
        ("Phase 4B", "Target Bytecode & Virtual Machine", "Lower TAC into compact stack instructions and execute programs on a custom C++ Virtual Machine.", ACCENT_PURPLE)
    ]
    for i, (ph, title, desc, col) in enumerate(roadmap):
        top = Inches(1.8 + i * 1.25)
        add_card(s15, Inches(0.8), top, Inches(11.733), Inches(1.1), border_color=col)

        tb = s15.shapes.add_textbox(Inches(1.1), top + Inches(0.15), Inches(11.1), Inches(0.8))
        tf = tb.text_frame
        tf.word_wrap = True

        p1 = tf.paragraphs[0]
        p1.text = f"{ph}: {title}"
        p1.font.size = Pt(16)
        p1.font.bold = True
        p1.font.color.rgb = col
        p1.space_after = Pt(4)

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(12)
        p2.font.color.rgb = TEXT_LIGHT

    # ==========================================
    # SLIDE 16: Conclusion & GitHub Link
    # ==========================================
    s16 = prs.slides.add_slide(blank_layout)
    add_slide_bg(s16)
    add_header(s16, "Conclusion & Project Links", slide_num=16)

    # Left: Summary Points
    add_card(s16, Inches(0.8), Inches(1.8), Inches(6.8), Inches(4.7))
    tb_c = s16.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(6.2), Inches(4.3))
    tfc = tb_c.text_frame
    tfc.word_wrap = True

    pc1 = tfc.paragraphs[0]
    pc1.text = "Phase 2 Deliverables Summary"
    pc1.font.size = Pt(18)
    pc1.font.bold = True
    pc1.font.color.rgb = ACCENT_GREEN
    pc1.space_after = Pt(12)

    concl_points = [
        "Core compilation pipeline (Lexer, Recursive-Descent Parser, and AST) fully functional in C++17.",
        "Intelligent multi-strategy error recovery engine successfully restores syntax and continues parsing without crashing.",
        "Transparent cost-based scorer generates actionable diagnostic audit reports for developers.",
        "Verified against an automated test suite with 100% test pass rate."
    ]
    for pt in concl_points:
        p = tfc.add_paragraph()
        p.text = f"✔  {pt}"
        p.font.size = Pt(13)
        p.font.color.rgb = TEXT_LIGHT
        p.space_after = Pt(10)

    # Right: Repository and Live Demo Links Card
    add_card(s16, Inches(7.9), Inches(1.8), Inches(4.6), Inches(4.7), bg_color=SURFACE_ALT, border_color=ACCENT_CYAN)
    tb_link = s16.shapes.add_textbox(Inches(8.2), Inches(2.0), Inches(4.0), Inches(4.3))
    tfl = tb_link.text_frame
    tfl.word_wrap = True

    pl1 = tfl.paragraphs[0]
    pl1.text = "PROJECT REPOSITORY & DEMO"
    pl1.font.size = Pt(15)
    pl1.font.bold = True
    pl1.font.color.rgb = ACCENT_CYAN
    pl1.space_after = Pt(14)

    pl2 = tfl.add_paragraph()
    pl2.text = "GitHub Repository:"
    pl2.font.size = Pt(12)
    pl2.font.bold = True
    pl2.font.color.rgb = TEXT_LIGHT
    pl2_link = tfl.add_paragraph()
    pl2_link.text = "https://github.com/joshuadjd79-cmd/\nresilient-compiler-intelligent-error-recovery"
    pl2_link.font.size = Pt(11)
    pl2_link.font.color.rgb = ACCENT_CYAN
    pl2_link.space_after = Pt(12)

    pl3 = tfl.add_paragraph()
    pl3.text = "Live Interactive Web IDE:"
    pl3.font.size = Pt(12)
    pl3.font.bold = True
    pl3.font.color.rgb = TEXT_LIGHT
    pl3_link = tfl.add_paragraph()
    pl3_link.text = "https://joshuadjd79-cmd.github.io/\nresilient-compiler-intelligent-error-recovery/"
    pl3_link.font.size = Pt(11)
    pl3_link.font.color.rgb = ACCENT_GREEN
    pl3_link.space_after = Pt(18)

    pl4 = tfl.add_paragraph()
    pl4.text = "D JOSHUA DANIEL\nREG NO: 24BCE0436"
    pl4.font.size = Pt(13)
    pl4.font.bold = True
    pl4.font.color.rgb = TEXT_LIGHT

    prs.save(filename)
    print(f"Presentation saved successfully to: {filename}")

if __name__ == "__main__":
    create_deck()
