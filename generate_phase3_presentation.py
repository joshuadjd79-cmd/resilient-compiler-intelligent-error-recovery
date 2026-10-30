#!/usr/bin/env python3
"""
Resilient Compiler - Phase 3 Presentation Deck Generator (PDF & PPTX)
Author: D JOSHUA DANIEL | Reg No: 24BCE0436
Institution: Vellore Institute of Technology, Vellore

Generates:
1. Resilient_Compiler_Phase3_Presentation.pdf (Widescreen 16:9 Presentation PDF)
2. Resilient_Compiler_Phase3_Presentation.pptx (Widescreen 16:9 PowerPoint Presentation)
3. docs/PHASE3_PRESENTATION_SLIDES.md (Detailed slide-by-slide notes and speaker script)
"""

import os
import re
import shutil
import pptx
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

import reportlab
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
DOCS_DIR = os.path.join(BASE_DIR, "docs")
os.makedirs(DOCS_DIR, exist_ok=True)

# -------------------------------------------------------------------------
# COLOR PALETTE (Warm Editorial Developer Theme)
# -------------------------------------------------------------------------
C_BG_LIGHT = HexColor("#F7F3EB")      # Warm Ivory
C_CARD_LIGHT = HexColor("#FFFFFF")    # Pure White
C_BORDER = HexColor("#E5DED2")        # Soft Warm Beige
C_BORDER_ALT = HexColor("#D8CFC0")
C_ACCENT_TERRA = HexColor("#C66B4E")  # Terracotta primary
C_ACCENT_SAGE = HexColor("#8A9A7B")   # Muted Sage secondary
C_TEXT_DARK = HexColor("#292B28")     # Dark Charcoal body
C_TEXT_MUTED = HexColor("#77746D")    # Warm Grey
C_CODE_BG = HexColor("#FAF7F2")       # Light code box
C_SUCCESS = HexColor("#2E7D32")       # Muted Emerald Green
C_SUCCESS_BG = HexColor("#EBF3EE")
C_WARNING = HexColor("#D97706")       # Amber
C_WARNING_BG = HexColor("#FEF5E7")
C_DANGER = HexColor("#DC2626")        # Crimson

# Dark Slide Colors
C_BG_DARK = HexColor("#1C1F24")       # Executive Dark Charcoal
C_CARD_DARK = HexColor("#252A30")     # Elevated Dark Surface
C_BORDER_DARK = HexColor("#38404A")
C_TEXT_LIGHT = HexColor("#F8FAFC")
C_TEXT_DARK_MUTED = HexColor("#94A3B8")

# PPTX RGB Colors
RGB_BG_LIGHT = RGBColor(247, 243, 235)
RGB_CARD_LIGHT = RGBColor(255, 255, 255)
RGB_BORDER = RGBColor(229, 222, 210)
RGB_TERRA = RGBColor(198, 107, 78)
RGB_SAGE = RGBColor(138, 154, 123)
RGB_TEXT_DARK = RGBColor(41, 43, 40)
RGB_TEXT_MUTED = RGBColor(119, 116, 109)
RGB_BG_DARK = RGBColor(28, 31, 36)
RGB_CARD_DARK = RGBColor(37, 42, 48)
RGB_TEXT_LIGHT = RGBColor(248, 250, 252)


# =========================================================================
# PART 1: REPORTLAB 16:9 PDF SLIDE DECK GENERATION
# =========================================================================
def build_pdf_presentation(pdf_filename="Resilient_Compiler_Phase3_Presentation.pdf"):
    print(f"Generating Widescreen 16:9 Presentation PDF: {pdf_filename}...")
    w_pts = 13.333 * 72   # 960 pt
    h_pts = 7.5 * 72      # 540 pt
    c = canvas.Canvas(pdf_filename, pagesize=(w_pts, h_pts))

    styles = getSampleStyleSheet()

    def get_styles(dark=False):
        t_col = C_TEXT_LIGHT if dark else C_TEXT_DARK
        m_col = C_TEXT_DARK_MUTED if dark else C_TEXT_MUTED
        head_col = C_ACCENT_TERRA
        return {
            'title': ParagraphStyle('STitle', fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=t_col),
            'kicker': ParagraphStyle('SKicker', fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=head_col),
            'h1': ParagraphStyle('SH1', fontName='Helvetica-Bold', fontSize=14, leading=17, textColor=head_col),
            'h2': ParagraphStyle('SH2', fontName='Helvetica-Bold', fontSize=12, leading=15, textColor=t_col),
            'body': ParagraphStyle('SBody', fontName='Helvetica', fontSize=10, leading=13.5, textColor=t_col),
            'body_bold': ParagraphStyle('SBodyB', fontName='Helvetica-Bold', fontSize=10, leading=13.5, textColor=t_col),
            'bullet': ParagraphStyle('SBullet', fontName='Helvetica', fontSize=9.5, leading=13, textColor=t_col, leftIndent=12, firstLineIndent=-8),
            'small': ParagraphStyle('SSmall', fontName='Helvetica', fontSize=8.5, leading=11.5, textColor=m_col),
            'code': ParagraphStyle('SCode', fontName='Courier', fontSize=8.5, leading=11, textColor=HexColor('#8B3A22')),
            'badge': ParagraphStyle('SBadge', fontName='Helvetica-Bold', fontSize=8.5, leading=10, textColor=C_CARD_LIGHT)
        }

    def draw_slide_header(title, kicker="RESILIENT COMPILER | PHASE 3 FINAL REVIEW", slide_num=1, total_slides=18, dark=False):
        s = get_styles(dark)
        # Background
        c.setFillColor(C_BG_DARK if dark else C_BG_LIGHT)
        c.rect(0, 0, w_pts, h_pts, fill=1, stroke=0)

        # Kicker & Title
        pk = Paragraph(kicker.upper(), s['kicker'])
        pk.wrapOn(c, 700, 20)
        pk.drawOn(c, 40, h_pts - 42)

        pt = Paragraph(title, s['title'])
        pt.wrapOn(c, 700, 30)
        pt.drawOn(c, 40, h_pts - 72)

        # Header right badge
        c.setFillColor(C_CARD_DARK if dark else C_CARD_LIGHT)
        c.setStrokeColor(C_BORDER_DARK if dark else C_BORDER)
        c.roundRect(w_pts - 190, h_pts - 65, 150, 30, 4, fill=1, stroke=1)
        p_badge = Paragraph(f"<b>SLIDE {slide_num} OF {total_slides}</b> &nbsp;|&nbsp; VIT", s['small'])
        p_badge.wrapOn(c, 140, 20)
        p_badge.drawOn(c, w_pts - 180, h_pts - 56)

        # Divider line
        c.setStrokeColor(C_BORDER_DARK if dark else C_BORDER)
        c.setLineWidth(1)
        c.line(40, h_pts - 82, w_pts - 40, h_pts - 82)

        # Footer line & text
        c.line(40, 30, w_pts - 40, 30)
        p_foot1 = Paragraph("<b>D JOSHUA DANIEL (24BCE0436)</b> &nbsp;·&nbsp; Vellore Institute of Technology &nbsp;·&nbsp; Resilient Compiler with Intelligent Error Recovery", s['small'])
        p_foot1.wrapOn(c, 600, 15)
        p_foot1.drawOn(c, 40, 15)

        p_foot2 = Paragraph("CSE3002 Final Academic Review &amp; Demonstration", s['small'])
        p_foot2.wrapOn(c, 300, 15)
        p_foot2.drawOn(c, w_pts - 260, 15)

    def draw_card(x, y, w, h, title=None, dark=False, accent_top=False):
        s = get_styles(dark)
        c.setFillColor(C_CARD_DARK if dark else C_CARD_LIGHT)
        c.setStrokeColor(C_BORDER_DARK if dark else C_BORDER)
        c.setLineWidth(1)
        c.roundRect(x, y, w, h, 6, fill=1, stroke=1)

        if accent_top:
            c.setFillColor(C_ACCENT_TERRA)
            c.roundRect(x, y + h - 4, w, 4, 2, fill=1, stroke=0)

        if title:
            # Clean title if it contains .png or file paths
            clean_title = re.sub(r'\s*\([^)]*\.[pP][nN][gG][^)]*\)', '', title).strip()
            clean_title = clean_title.replace('.png', '').replace('.PNG', '')

            header_h = 28
            strip_y = y + h - header_h
            c.setFillColor(HexColor("#2C323B") if dark else HexColor("#FAF7F2"))
            c.rect(x + 1, strip_y, w - 2, header_h - 1, fill=1, stroke=0)
            c.setStrokeColor(C_BORDER_DARK if dark else C_BORDER)
            c.line(x, strip_y, x + w, strip_y)

            pt = Paragraph(f"<b>{clean_title.upper()}</b>", s['h2'])
            pw, ph = pt.wrap(w - 24, header_h)
            text_y = strip_y + (header_h - ph) / 2
            pt.drawOn(c, x + 12, text_y)

    # ---------------------------------------------------------------------
    # SLIDE 1: TITLE SLIDE (Dark Executive Theme)
    # ---------------------------------------------------------------------
    s_dark = get_styles(dark=True)
    c.setFillColor(C_BG_DARK)
    c.rect(0, 0, w_pts, h_pts, fill=1, stroke=0)

    # Accent decorative top bar
    c.setFillColor(C_ACCENT_TERRA)
    c.rect(0, h_pts - 8, w_pts, 8, fill=1, stroke=0)

    # University Logo
    vit_logo = os.path.join(ASSETS_DIR, "vit_logo.png")
    if os.path.isfile(vit_logo):
        c.drawImage(vit_logo, 50, h_pts - 70, width=220, height=45, preserveAspectRatio=True, mask='auto')

    # Project Category Pill
    pill_w = 430
    pill_h = 26
    pill_x = 50
    pill_y = h_pts - 114
    c.setFillColor(C_CARD_DARK)
    c.setStrokeColor(C_ACCENT_TERRA)
    c.setLineWidth(1.2)
    c.roundRect(pill_x, pill_y, pill_w, pill_h, 4, fill=1, stroke=1)
    p_pill = Paragraph("<b>COMPILER DESIGN LABORATORY (CSE3002) &nbsp;|&nbsp; PHASE 3 FINAL DEFENSE</b>", s_dark['kicker'])
    pw, ph = p_pill.wrap(pill_w - 20, pill_h)
    p_pill.drawOn(c, pill_x + 14, pill_y + (pill_h - ph) / 2)

    # Main Title
    p_main_title = Paragraph("Resilient Compiler with<br/>Intelligent Error Recovery", ParagraphStyle('MTitle', fontName='Helvetica-Bold', fontSize=32, leading=38, textColor=C_TEXT_LIGHT))
    p_main_title.wrapOn(c, 860, 90)
    p_main_title.drawOn(c, 50, h_pts - 205)

    p_tagline = Paragraph("A Full 9-Stage Fault-Tolerant Compiler Pipeline with Multi-Strategy Lookahead Recovery, AST Construction, Hierarchical Semantic Scoping, 3-Address Code, SSA/Constant Optimization, x86-32 Target Assembly Emission, and Stack VM Execution", ParagraphStyle('MTag', fontName='Helvetica', fontSize=12, leading=17, textColor=C_TEXT_DARK_MUTED))
    p_tagline.wrapOn(c, 860, 45)
    p_tagline.drawOn(c, 50, h_pts - 255)

    # Candidate Profile Card (Left)
    c.setFillColor(C_CARD_DARK)
    c.setStrokeColor(C_BORDER_DARK)
    c.roundRect(50, 60, 410, 180, 8, fill=1, stroke=1)

    c.setFillColor(C_ACCENT_TERRA)
    c.roundRect(50, 236, 410, 4, 2, fill=1, stroke=0)

    p_auth_head = Paragraph("<b>PROJECT CANDIDATE &amp; INSTITUTION</b>", s_dark['h1'])
    p_auth_head.wrapOn(c, 370, 20)
    p_auth_head.drawOn(c, 70, 210)

    auth_lines = [
        "<b>Student Name:</b> D JOSHUA DANIEL",
        "<b>Registration No:</b> 24BCE0436",
        "<b>Degree:</b> B.Tech in Computer Science &amp; Engineering",
        "<b>Institution:</b> Vellore Institute of Technology (VIT), Vellore",
        "<b>Academic Cycle:</b> Fall 2026 / Final Capstone Evaluation"
    ]
    ay = 185
    for al in auth_lines:
        p_al = Paragraph(al, s_dark['body'])
        p_al.wrapOn(c, 370, 16)
        p_al.drawOn(c, 70, ay)
        ay -= 22

    # Deliverables & Capabilities Card (Right)
    c.setFillColor(C_CARD_DARK)
    c.setStrokeColor(C_BORDER_DARK)
    c.roundRect(480, 60, 430, 180, 8, fill=1, stroke=1)

    c.setFillColor(C_ACCENT_SAGE)
    c.roundRect(480, 236, 430, 4, 2, fill=1, stroke=0)

    p_eng_head = Paragraph("<b>ENGINEERING ACHIEVEMENTS &amp; VERIFICATION</b>", s_dark['h1'])
    p_eng_head.wrapOn(c, 390, 20)
    p_eng_head.drawOn(c, 500, 210)

    achieve_lines = [
        "✔ <b>Complete 9-Stage Pipeline:</b> Micro-C source to real machine execution",
        "✔ <b>Intelligent Stream Healing:</b> Virtual Insertion, Deletion, Panic Mode",
        "✔ <b>Multi-Pass Optimizer:</b> Constant Folding &amp; 56.25% TAC Reduction",
        "✔ <b>Dual Target Emission:</b> x86-32 AT&amp;T Assembly &amp; Bytecode VM",
        "✔ <b>Automated Test Suite:</b> 20/20 Test Cases Verified (100% Pass Rate)"
    ]
    ay = 185
    for acl in achieve_lines:
        p_acl = Paragraph(acl, s_dark['body'])
        p_acl.wrapOn(c, 390, 16)
        p_acl.drawOn(c, 500, ay)
        ay -= 22

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 2: EXECUTIVE SUMMARY & MILESTONES
    # ---------------------------------------------------------------------
    draw_slide_header("Executive Summary: Project Scope & Core Milestones", slide_num=2)
    s = get_styles()

    draw_card(40, 160, 275, 290, "1. Full 9-Stage Pipeline", accent_top=True)
    draw_card(342, 160, 275, 290, "2. Intelligent Recovery", accent_top=True)
    draw_card(645, 160, 275, 290, "3. Academic Verification", accent_top=True)

    # Card 1 text
    c1_text = """
    <b>Source-to-Machine Architecture:</b><br/>
    Constructed an end-to-end operational compiler in modern C++17 encompassing all 9 classic compilation phases.<br/><br/>
    <b>Complete Lowering Chain:</b><br/>
    • Micro-C Lexical Scanning<br/>
    • Resilient Recursive Descent Parser<br/>
    • Strongly-Typed AST Construction<br/>
    • Scoped Symbol Table (Levels 0-2)<br/>
    • Linear Three-Address Code (TAC)<br/>
    • Multi-Pass SSA Optimizer<br/>
    • Target x86-32 AT&amp;T Assembly<br/>
    • Native MinGW Assembler &amp; Linker<br/>
    • Virtual Machine Bytecode Engine
    """
    p_c1 = Paragraph(c1_text, s['body'])
    p_c1.wrapOn(c, 250, 240)
    p_c1.drawOn(c, 52, 175)

    # Card 2 text
    c2_text = """
    <b>Fault-Tolerant Resilience:</b><br/>
    Compilers must not crash or cascade misleading errors when developers introduce syntax mistakes.<br/><br/>
    <b>Multi-Strategy Stream Healing:</b><br/>
    • <b>Virtual Insertion (w=1):</b> Injects expected missing tokens (e.g. <code>;</code>, <code>)</code>) into AST without dropping code.<br/>
    • <b>Token Deletion (w=2):</b> Discards rogue or redundant tokens.<br/>
    • <b>Panic Synchronization (w=5):</b> Graceful fallback to statement boundaries.<br/>
    • <b>Lookahead Validation:</b> Prevents infinite recovery loops and cascading diagnostics.
    """
    p_c2 = Paragraph(c2_text, s['body'])
    p_c2.wrapOn(c, 250, 240)
    p_c2.drawOn(c, 354, 175)

    # Card 3 text
    c3_text = """
    <b>Empirical Rigor &amp; Tooling:</b><br/>
    Every technical claim is validated against real code execution, automated benchmarks, and academic documentation.<br/><br/>
    <b>Deliverables Produced:</b><br/>
    • <b>20/20 Passing Tests:</b> Syntax recovery, semantic rejection, optimization, assembly, and VM execution.<br/>
    • <b>Web Developer Studio:</b> Live Monaco IDE, interactive 2D AST graph, runtime telemetry.<br/>
    • <b>Formal Academic Report:</b> 15-page IEEE report and 14-page viva technical guide.
    """
    p_c3 = Paragraph(c3_text, s['body'])
    p_c3.wrapOn(c, 250, 240)
    p_c3.drawOn(c, 657, 175)

    # Bottom Metrics Strip
    metrics = [
        ("9 COMPILER PHASES", "100% Implemented in C++17", C_ACCENT_TERRA),
        ("20 AUTOMATED TESTS", "100% Pass Rate (0 Regressions)", C_SUCCESS),
        ("56.25% OPTIMIZATION", "Instruction Savings on Benchmarks", C_ACCENT_SAGE),
        ("0 CRASHES / HALTS", "Resilient AST Delivery on Errors", C_ACCENT_TERRA)
    ]
    mx = 40
    mw = 215
    for m_head, m_sub, m_col in metrics:
        c.setFillColor(C_CARD_LIGHT)
        c.setStrokeColor(C_BORDER)
        c.roundRect(mx, 55, mw, 85, 6, fill=1, stroke=1)

        c.setFillColor(m_col)
        c.roundRect(mx, 136, mw, 4, 2, fill=1, stroke=0)

        p_mh = Paragraph(f"<b>{m_head}</b>", ParagraphStyle('MH', fontName='Helvetica-Bold', fontSize=12, leading=15, textColor=m_col))
        p_mh.wrapOn(c, mw - 20, 20)
        p_mh.drawOn(c, mx + 12, 108)

        p_ms = Paragraph(m_sub, s['small'])
        p_ms.wrapOn(c, mw - 20, 25)
        p_ms.drawOn(c, mx + 12, 70)
        mx += 228

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 3: PROBLEM STATEMENT & MOTIVATION
    # ---------------------------------------------------------------------
    draw_slide_header("Problem Statement & Architectural Motivation", slide_num=3)

    draw_card(40, 160, 420, 290, "The Problem: Traditional Compilers Fail Fast", accent_top=True)
    draw_card(500, 160, 420, 290, "The Solution: Resilient Compilation Middleware", accent_top=True)

    prob_text = """
    <b>1. Premature Compilation Termination:</b><br/>
    Standard non-resilient parsers (such as traditional GCC/Clang bail-out modes) abort compilation upon encountering the very first syntax error.<br/><br/>
    <b>2. Cascading Diagnostic Floods:</b><br/>
    A single missing closing delimiter or semicolon causes downstream token desynchronization, generating dozens of false secondary errors that confuse developers.<br/><br/>
    <b>3. Degraded Developer Ergonomics:</b><br/>
    Forces tedious one-error-at-a-time edit-compile-debug cycles. Modern IDE language servers (LSP) require complete Abstract Syntax Trees even for incomplete or syntactically invalid code.
    """
    p_prob = Paragraph(prob_text, s['body'])
    p_prob.wrapOn(c, 390, 250)
    p_prob.drawOn(c, 55, 175)

    sol_text = """
    <b>1. Non-Fatal Stream Healing:</b><br/>
    Instead of terminating, the parser intercepts mismatches and computes an optimal repair action (Virtual Insertion, Deletion, or Synchronized Panic Skip).<br/><br/>
    <b>2. Cost-Based Lookahead Arbitration:</b><br/>
    Evaluates candidate repairs using lookahead token probing, picking the least disruptive fix and assigning explicit confidence and cost metrics.<br/><br/>
    <b>3. Guaranteed Downstream AST Delivery:</b><br/>
    Preserves valid program structure downstream, enabling comprehensive multi-error diagnostics in a single run and feeding rich semantic analysis to IDE tools.
    """
    p_sol = Paragraph(sol_text, s['body'])
    p_sol.wrapOn(c, 390, 250)
    p_sol.drawOn(c, 515, 175)

    # Bottom Takeaway Card
    c.setFillColor(HexColor("#FAF7F2"))
    c.setStrokeColor(C_ACCENT_TERRA)
    c.roundRect(40, 55, 880, 85, 6, fill=1, stroke=1)

    p_take_title = Paragraph("<b>CORE DESIGN PHILOSOPHY</b>", s['kicker'])
    p_take_title.wrapOn(c, 840, 20)
    p_take_title.drawOn(c, 55, 115)

    p_take_body = Paragraph("<i>\"A modern compiler must act as a collaborative development assistant, not a rigid gatekeeper. By recovering gracefully from syntax anomalies, the compiler uncovers all structural defects in a single pass while preserving code semantics for downstream tooling.\"</i>", s['body'])
    p_take_body.wrapOn(c, 840, 45)
    p_take_body.drawOn(c, 55, 70)

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 4: MICRO-C LANGUAGE & FORMAL GRAMMAR
    # ---------------------------------------------------------------------
    draw_slide_header("Micro-C Language Specification & Formal Grammar", slide_num=4)

    draw_card(40, 60, 420, 390, "Supported Language Constructs", accent_top=True)
    draw_card(500, 60, 420, 390, "Context-Free EBNF Grammar", accent_top=True)

    lang_text = """
    <b>Static Type System:</b><br/>
    • <code>int</code> : 32-bit signed two's complement integer.<br/>
    • <code>float</code> : 32-bit single-precision IEEE 754 floating point.<br/><br/>
    <b>Variable Declarations &amp; Assignments:</b><br/>
    • Explicit initialization: <code>int x = 10; float rate = 3.14;</code><br/>
    • Reassignment and compound mutations.<br/><br/>
    <b>Rich Expression Hierarchy:</b><br/>
    • Arithmetic: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (with standard operator precedence).<br/>
    • Relational: <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>==</code>, <code>!=</code>.<br/>
    • Logical: <code>&amp;&amp;</code>, <code>||</code>, <code>!</code> with short-circuit semantics.<br/><br/>
    <b>Structured Control Flow:</b><br/>
    • Branching: <code>if (cond) { ... } else { ... }</code> (optional else).<br/>
    • Iteration: <code>while (cond) { ... }</code> with loop invariant testing.<br/><br/>
    <b>Hierarchical Block Scoping:</b><br/>
    • Lexical nesting via <code>{ ... }</code> blocks with variable shadowing.
    """
    p_lang = Paragraph(lang_text, s['body'])
    p_lang.wrapOn(c, 390, 350)
    p_lang.drawOn(c, 55, 75)

    ebnf_text = """
    <b>Core EBNF Production Rules (LL(1) Form):</b><br/><br/>
    <code>Program      ::= Statement* EOF</code><br/>
    <code>Statement    ::= VarDecl | Assignment | IfStmt | WhileStmt | Block</code><br/>
    <code>VarDecl      ::= Type IDENTIFIER ('=' Expression)? ';'</code><br/>
    <code>Assignment   ::= IDENTIFIER '=' Expression ';'</code><br/>
    <code>IfStmt       ::= 'if' '(' Expression ')' Statement ('else' Statement)?</code><br/>
    <code>WhileStmt    ::= 'while' '(' Expression ')' Statement</code><br/>
    <code>Block        ::= '{' Statement* '}'</code><br/><br/>
    <b>Precedence-Climbing Expression Grammar:</b><br/>
    <code>Expression   ::= LogicalOr</code><br/>
    <code>LogicalOr    ::= LogicalAnd ( '||' LogicalAnd )*</code><br/>
    <code>LogicalAnd   ::= Equality ( '&amp;&amp;' Equality )*</code><br/>
    <code>Equality     ::= Relational ( ('==' | '!=') Relational )*</code><br/>
    <code>Relational   ::= Additive ( ('&lt;' | '&lt;=' | '&gt;' | '&gt;=') Additive )*</code><br/>
    <code>Additive     ::= Multiplicative ( ('+' | '-') Multiplicative )*</code><br/>
    <code>Multiplicative ::= Unary ( ('*' | '/' | '%') Unary )*</code><br/>
    <code>Unary        ::= ('!' | '-')? Primary</code><br/>
    <code>Primary      ::= NUMBER | FLOAT | IDENTIFIER | '(' Expression ')'</code>
    """
    p_ebnf = Paragraph(ebnf_text, s['small'])
    p_ebnf.wrapOn(c, 390, 350)
    p_ebnf.drawOn(c, 515, 75)

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 5: 9-STAGE COMPILER PIPELINE ARCHITECTURE
    # ---------------------------------------------------------------------
    draw_slide_header("End-to-End 9-Stage Compiler Pipeline Architecture", slide_num=5)

    draw_card(40, 60, 400, 390, "Pipeline Execution Flow", accent_top=True)
    draw_card(460, 60, 460, 390, "9-Stage Pipeline Architecture Diagram", accent_top=True)

    pipe_text = """
    <b>1. Lexical Analysis (Lexer.cpp):</b><br/>
    Scans UTF-8 source stream, produces typed tokens with exact line &amp; column coordinates, isolates illegal symbols.<br/><br/>
    <b>2. Resilient Syntax Analysis (Parser.cpp):</b><br/>
    Predictive recursive-descent parser with lookahead error detection and non-fatal stream recovery middleware.<br/><br/>
    <b>3. AST Construction (AST.cpp):</b><br/>
    Instantiates strongly-typed immutable AST nodes tagged with recovery status and coordinate metadata.<br/><br/>
    <b>4. Semantic Analysis &amp; Symbol Table (SemanticAnalyzer.cpp):</b><br/>
    Manages lexical scope stack, resolves identifier shadowing, and validates strict static type safety.<br/><br/>
    <b>5. Intermediate Representation (IRGenerator.cpp):</b><br/>
    Lowers AST into linearized Three-Address Code (TAC) quadruples.<br/><br/>
    <b>6. Multi-Pass Optimizer (Optimizer.cpp):</b><br/>
    Executes constant folding, constant propagation, and dead code removal.<br/><br/>
    <b>7. Target Code Generation (AssemblyGenerator.cpp):</b><br/>
    Emits real x86-32 AT&amp;T assembly with standard cdecl calling conventions.<br/><br/>
    <b>8. Target Assembler &amp; Linker:</b> Invokes MinGW GCC for native binaries.<br/>
    <b>9. Bytecode Virtual Machine (VM.cpp):</b> Executes bytecode on virtual stack.
    """
    p_pipe = Paragraph(pipe_text, s['small'])
    p_pipe.wrapOn(c, 370, 350)
    p_pipe.drawOn(c, 55, 72)

    fig_pipe = os.path.join(ASSETS_DIR, "fig_pipeline_9stage.png")
    if os.path.isfile(fig_pipe):
        c.drawImage(fig_pipe, 475, 75, width=430, height=340, preserveAspectRatio=True, mask='auto')

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 6: INTELLIGENT ERROR RECOVERY ENGINE
    # ---------------------------------------------------------------------
    draw_slide_header("Intelligent Error Recovery Engine: 4-Stage Healing Cycle", slide_num=6)

    draw_card(40, 60, 400, 390, "Automated Stream Healing Cycle", accent_top=True)
    draw_card(460, 60, 460, 390, "Recovery Decision Tree Flowchart", accent_top=True)

    rec_cycle_text = """
    <b>Phase 1: Mismatch Detection</b><br/>
    The parser expects a syntactic construct or delimiter $T_{exp}$ (e.g., closing parenthesis or semicolon), but encounters unexpected token $T_{curr}$ or premature EOF.<br/><br/>
    <b>Phase 2: Multi-Strategy Candidate Probing</b><br/>
    Rather than failing, the Recovery Manager probes three competing candidate repair hypotheses against a lookahead window:<br/>
    • <i>Insertion:</i> Can injecting synthetic $T_{exp}$ allow $T_{curr}$ to be consumed?<br/>
    • <i>Deletion:</i> Can discarding $T_{curr}$ allow $T_{next}$ to match $T_{exp}$?<br/>
    • <i>Panic:</i> Must we skip to synchronizing tokens (<code>;</code>, <code>}</code>)?<br/><br/>
    <b>Phase 3: Cost-Based Heuristic Scoring</b><br/>
    Assigns penalty weights and lookahead validity metrics to each candidate. Selects the strategy with minimal total cost.<br/><br/>
    <b>Phase 4: Stream Repair &amp; Transparent Logging</b><br/>
    The token stream is adjusted in-memory, an audit record is logged with coordinates and rationale, and downstream parsing continues without crashing.
    """
    p_rec = Paragraph(rec_cycle_text, s['body'])
    p_rec.wrapOn(c, 370, 350)
    p_rec.drawOn(c, 55, 75)

    fig_tree = os.path.join(ASSETS_DIR, "fig_recovery_decision_tree.png")
    if os.path.isfile(fig_tree):
        c.drawImage(fig_tree, 475, 75, width=430, height=340, preserveAspectRatio=True, mask='auto')

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 7: COST-BASED RECOVERY SCORER & HEURISTICS
    # ---------------------------------------------------------------------
    draw_slide_header("Cost-Based Recovery Strategy Scoring & Heuristics", slide_num=7)

    draw_card(40, 220, 275, 230, "Virtual Insertion (Cost: 1.0)", accent_top=True)
    draw_card(342, 220, 275, 230, "Token Deletion (Cost: 2.0)", accent_top=True)
    draw_card(645, 220, 275, 230, "Panic Mode (Cost: 5.0)", accent_top=True)

    ins_text = """
    <b>Confidence: HIGH (95%)</b><br/>
    <b>Mechanism:</b> Synthesizes an expected missing token without consuming source characters.<br/><br/>
    <b>Concrete Example:</b><br/>
    <code>int a = ;</code><br/>
    <i>Repair:</i> Injects literal <code>0</code> before semicolon. Statement completes cleanly.<br/><br/>
    <code>while (x &lt; 10 { ... }</code><br/>
    <i>Repair:</i> Injects missing <code>)</code> before <code>{</code>.
    """
    p_ins = Paragraph(ins_text, s['body'])
    p_ins.wrapOn(c, 250, 190)
    p_ins.drawOn(c, 52, 230)

    del_text = """
    <b>Confidence: MEDIUM (75%)</b><br/>
    <b>Mechanism:</b> Discards extraneous or duplicate tokens that violate grammar productions.<br/><br/>
    <b>Concrete Example:</b><br/>
    <code>int x = 10;;</code><br/>
    <i>Repair:</i> Deletes redundant second semicolon. Downstream statement starts cleanly.<br/><br/>
    <code>float y = + * 5;</code><br/>
    <i>Repair:</i> Discards rogue operator <code>*</code>.
    """
    p_del = Paragraph(del_text, s['body'])
    p_del.wrapOn(c, 250, 190)
    p_del.drawOn(c, 354, 230)

    pan_text = """
    <b>Confidence: LOW (40%)</b><br/>
    <b>Mechanism:</b> Defensive fallback; discards corrupt tokens until a safe synchronizing anchor.<br/><br/>
    <b>Concrete Example:</b><br/>
    <code>int a = @#$% + 5;</code><br/>
    <i>Repair:</i> Skips corrupt characters until delimiter <code>;</code>. Prevents infinite parser divergence.<br/><br/>
    <i>Synchronizing Set:</i> <code>;</code>, <code>}</code>, <code>EOF</code>.
    """
    p_pan = Paragraph(pan_text, s['body'])
    p_pan.wrapOn(c, 250, 190)
    p_pan.drawOn(c, 657, 230)

    # Bottom Mathematical Formulation Card
    c.setFillColor(HexColor("#FAF7F2"))
    c.setStrokeColor(C_BORDER)
    c.roundRect(40, 55, 880, 145, 6, fill=1, stroke=1)

    p_form_head = Paragraph("<b>RECOVERY COST SCORING FORMULATION (RecoveryScorer.cpp)</b>", s['kicker'])
    p_form_head.wrapOn(c, 840, 20)
    p_form_head.drawOn(c, 55, 175)

    form_body = """
    The total penalty cost for any candidate recovery action is computed as:<br/>
    <b>TotalCost = w<sub>action</sub> + [ w<sub>sym</sub> · S(T) ] + [ w<sub>dist</sub> · (1 - ValidatedLookahead) ]</b><br/><br/>
    • <b>w<sub>action</sub>:</b> Base action weight (<code>w_insertion = 1.0</code>, <code>w_deletion = 2.0</code>, <code>w_panic = 5.0</code>).<br/>
    • <b>S(T):</b> Structural penalty score for token type $T$ (delimiters have lower penalty than keywords).<br/>
    • <b>ValidatedLookahead:</b> Probing distance factor ensuring subsequent 2+ tokens satisfy following grammar rules.<br/>
    <b>Decision Rule:</b> Select candidate $C^* = \\arg\\min_{C} \\text{TotalCost}(C)$.
    """
    p_form_body = Paragraph(form_body, s['body'])
    p_form_body.wrapOn(c, 840, 110)
    p_form_body.drawOn(c, 55, 68)

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 8: AST CONSTRUCTION & VISUALIZATION
    # ---------------------------------------------------------------------
    draw_slide_header("Polymorphic Abstract Syntax Tree (AST) & Visitor Pattern", slide_num=8)

    draw_card(40, 60, 420, 390, "AST Architecture & Class Hierarchy", accent_top=True)
    draw_card(500, 60, 420, 390, "Abstract Syntax Tree Hierarchy", accent_top=True)

    ast_text = """
    <b>Polymorphic C++17 Class Hierarchy:</b><br/>
    All program constructs derive from a base <code>ASTNode</code> class with virtual visitor dispatch:<br/>
    • <code>ProgramNode:</code> Root holding vector of top-level statements.<br/>
    • <code>VarDeclNode:</code> Type, identifier, optional initializer expression.<br/>
    • <code>AssignNode:</code> Target variable, assigned expression.<br/>
    • <code>BinaryOpNode:</code> Left child, operator, right child.<br/>
    • <code>IfNode / WhileNode:</code> Condition expression, body statements, optional else branch.<br/><br/>
    <b>Diagnostic &amp; Coordinate Tracking:</b><br/>
    Every node retains exact source coordinates (<code>line</code>, <code>column</code>) and a boolean <code>isHealed</code> flag marking whether it was synthesized by error recovery.<br/><br/>
    <b>Decoupled Visitor Pattern:</b><br/>
    Tree traversal is separated from node definitions:<br/>
    • <code>ASTPrinterVisitor:</code> Visual hierarchical console formatting.<br/>
    • <code>SemanticVisitor:</code> Type-checking &amp; symbol binding.<br/>
    • <code>TACGenVisitor:</code> Three-Address Code generation.
    """
    p_ast = Paragraph(ast_text, s['small'])
    p_ast.wrapOn(c, 390, 350)
    p_ast.drawOn(c, 55, 75)

    fig_ast = os.path.join(ASSETS_DIR, "fig_ast.png")
    if os.path.isfile(fig_ast):
        c.drawImage(fig_ast, 515, 80, width=390, height=330, preserveAspectRatio=True, mask='auto')

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 9: SYMBOL TABLE & SEMANTIC ANALYSIS
    # ---------------------------------------------------------------------
    draw_slide_header("Hierarchical Symbol Table & Semantic Analysis", slide_num=9)

    draw_card(40, 60, 420, 390, "Scope Stack & Semantic Checks", accent_top=True)
    draw_card(500, 60, 420, 390, "Hierarchical Scoped Symbol Table", accent_top=True)

    sem_text = """
    <b>Hierarchical Scope Stack (SymbolTable.cpp):</b><br/>
    • <b>Level 0 (Global Scope):</b> Module-level declarations.<br/>
    • <b>Level 1 (Branch Scope):</b> Block-level declarations inside <code>if/else</code>.<br/>
    • <b>Level 2 (Loop Scope):</b> Iteration variables inside <code>while</code> loops.<br/><br/>
    <b>Variable Shadowing Resolution:</b><br/>
    Inner declarations gracefully mask outer declarations without name collision. Identifier lookup walks upward from the current scope pointer to the root.<br/><br/>
    <b>Strict Static Semantic Validations:</b><br/>
    • <b>Undeclared Variable Detection:</b> Rejects usage of symbols before declaration.<br/>
    • <b>Duplicate Declaration Blocking:</b> Prevents re-declaring variables in the same scope.<br/>
    • <b>Type Incompatibility Checks:</b> Blocks assigning <code>float</code> to <code>int</code> without explicit casting.<br/>
    • <b>Control Flow Validation:</b> Validates boolean condition expressions in loops and branches.
    """
    p_sem = Paragraph(sem_text, s['small'])
    p_sem.wrapOn(c, 390, 350)
    p_sem.drawOn(c, 55, 75)

    fig_sym = os.path.join(ASSETS_DIR, "fig_symbol_table.png")
    if os.path.isfile(fig_sym):
        c.drawImage(fig_sym, 515, 80, width=390, height=330, preserveAspectRatio=True, mask='auto')

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 10: INTERMEDIATE CODE GENERATION (TAC)
    # ---------------------------------------------------------------------
    draw_slide_header("Intermediate Representation: Three-Address Code (TAC)", slide_num=10)

    draw_card(40, 60, 420, 390, "TAC Quadruple Representation", accent_top=True)
    draw_card(500, 60, 420, 390, "Code Lowering Example: Loop Kernel", accent_top=True)

    tac_info = """
    <b>Linear Quadruple Format:</b><br/>
    Every intermediate instruction is represented as a structured quadruple:<br/>
    <code>(operator, operand1, operand2, result)</code><br/><br/>
    <b>Instruction Taxonomy (TAC.h):</b><br/>
    • <b>Binary Arithmetic:</b> <code>ADD</code>, <code>SUB</code>, <code>MUL</code>, <code>DIV</code>, <code>MOD</code><br/>
    • <b>Relational Comparisons:</b> <code>CMP_LT</code>, <code>CMP_LE</code>, <code>CMP_GT</code>, <code>CMP_EQ</code><br/>
    • <b>Memory Transfers:</b> <code>ASSIGN x, , t0</code> (direct copies)<br/>
    • <b>Conditional Branching:</b> <code>IF_FALSE t0 GOTO L_exit</code><br/>
    • <b>Unconditional Jumps:</b> <code>GOTO L_start</code><br/>
    • <b>Control Labels:</b> <code>LABEL L_start</code><br/><br/>
    <b>Benefits of Quadruple TAC:</b><br/>
    1. Machine-Independent abstraction decouples front-end from CPU targets.<br/>
    2. Simplifies optimization passes (def-use chains, constant propagation).<br/>
    3. Direct, deterministic lowering to both x86 assembly and VM bytecode.
    """
    p_tac_info = Paragraph(tac_info, s['small'])
    p_tac_info.wrapOn(c, 390, 350)
    p_tac_info.drawOn(c, 55, 75)

    tac_ex = """
    <b>Micro-C Source Code:</b><br/>
    <code>int i = 0;</code><br/>
    <code>int sum = 0;</code><br/>
    <code>while (i &lt; 5) {</code><br/>
    <code>    sum = sum + i;</code><br/>
    <code>    i = i + 1;</code><br/>
    <code>}</code><br/><br/>
    <b>Generated TAC Quadruples (IRGenerator.cpp):</b><br/>
    <code>0:  ASSIGN 0, , i</code><br/>
    <code>1:  ASSIGN 0, , sum</code><br/>
    <code>2:  LABEL L_start_0</code><br/>
    <code>3:  CMP_LT i, 5, _t0</code><br/>
    <code>4:  IF_FALSE _t0 GOTO L_exit_1</code><br/>
    <code>5:  ADD sum, i, _t1</code><br/>
    <code>6:  ASSIGN _t1, , sum</code><br/>
    <code>7:  ADD i, 1, _t2</code><br/>
    <code>8:  ASSIGN _t2, , i</code><br/>
    <code>9:  GOTO L_start_0</code><br/>
    <code>10: LABEL L_exit_1</code>
    """
    p_tac_ex = Paragraph(tac_ex, s['small'])
    p_tac_ex.wrapOn(c, 390, 350)
    p_tac_ex.drawOn(c, 515, 75)

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 11: MULTI-PASS OPTIMIZATION ENGINE
    # ---------------------------------------------------------------------
    draw_slide_header("Multi-Pass Code Optimization & Telemetry", slide_num=11)

    draw_card(40, 60, 420, 390, "Optimization Passes (Optimizer.cpp)", accent_top=True)
    draw_card(500, 60, 420, 390, "Optimization Telemetry Diff", accent_top=True)

    opt_text = """
    <b>Pass 1: Constant Folding</b><br/>
    Evaluates constant arithmetic expressions at compile time. Converts instructions like <code>ADD 10, 20, _t0</code> directly into <code>ASSIGN 30, , _t0</code>.<br/><br/>
    <b>Pass 2: Constant Propagation</b><br/>
    Substitutes known constant values forward into subsequent uses across the basic block, eliminating redundant variable loads.<br/><br/>
    <b>Pass 3: Redundant Temporary Elimination</b><br/>
    Replaces intermediate single-assignment temporaries (<code>_t</code> variables) with their direct target values, eliminating redundant copies.<br/><br/>
    <b>Pass 4: Dead Code &amp; Unreachable Jump Removal</b><br/>
    Eliminates unreachable instructions following unconditional branches and prunes unused variable assignments.<br/><br/>
    <b>Empirical Benchmark Result:</b><br/>
    • Raw TAC: 16 quadruples<br/>
    • Optimized TAC: 7 quadruples<br/>
    • <b>Instruction Reduction: 56.25%</b>
    """
    p_opt = Paragraph(opt_text, s['small'])
    p_opt.wrapOn(c, 390, 350)
    p_opt.drawOn(c, 55, 75)

    fig_opt = os.path.join(ASSETS_DIR, "fig_optimization_diff.png")
    if os.path.isfile(fig_opt):
        c.drawImage(fig_opt, 515, 80, width=390, height=330, preserveAspectRatio=True, mask='auto')

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 12: TARGET CODE GENERATION: REAL x86-32 ASSEMBLY
    # ---------------------------------------------------------------------
    draw_slide_header("Target Code Generation: Real x86-32 AT&T Assembly", slide_num=12)

    draw_card(40, 60, 420, 390, "Target Code Generation Architecture", accent_top=True)
    draw_card(500, 60, 420, 390, "x86-32 AT&T Stack Frame Layout", accent_top=True)

    asm_text = """
    <b>Standard cdecl Runtime ABI Compliance:</b><br/>
    • Function Prologue: <code>pushl %ebp; movl %esp, %ebp; subl $N, %esp</code><br/>
    • Function Epilogue: <code>movl %ebp, %esp; popl %ebp; ret</code><br/><br/>
    <b>Local Variable Stack Frame Allocation:</b><br/>
    Variables are assigned deterministic negative offsets from the base pointer: <code>x</code> at <code>-4(%ebp)</code>, <code>y</code> at <code>-8(%ebp)</code>, <code>sum</code> at <code>-12(%ebp)</code>.<br/><br/>
    <b>Register Allocation &amp; Arithmetic Lowering:</b><br/>
    • Accumulator <code>%eax</code> used for primary evaluations.<br/>
    • Secondary scratch registers: <code>%ebx</code>, <code>%ecx</code>.<br/>
    • Arithmetic lowers to native AT&amp;T opcodes: <code>addl</code>, <code>subl</code>, <code>imull</code>, <code>idivl</code>.<br/><br/>
    <b>Native Assembler &amp; Execution:</b><br/>
    Generated assembly is assembled via MinGW GCC (<code>gcc -m32 target.s -o program.exe</code>), executing directly on the host CPU.
    """
    p_asm = Paragraph(asm_text, s['small'])
    p_asm.wrapOn(c, 390, 350)
    p_asm.drawOn(c, 55, 75)

    fig_stack = os.path.join(ASSETS_DIR, "fig_x86_stack_frame.png")
    if os.path.isfile(fig_stack):
        c.drawImage(fig_stack, 515, 80, width=390, height=330, preserveAspectRatio=True, mask='auto')

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 13: VIRTUAL MACHINE EXECUTION ENGINE
    # ---------------------------------------------------------------------
    draw_slide_header("Virtual Machine Execution Engine (VM.cpp)", slide_num=13)

    draw_card(40, 60, 420, 390, "Stack-Based VM Architecture", accent_top=True)
    draw_card(500, 60, 420, 390, "Bytecode Instruction Set & Execution Trace", accent_top=True)

    vm_arch_text = """
    <b>Stack-Based Evaluation Architecture:</b><br/>
    The Resilient Compiler features a custom in-memory Virtual Machine providing instant cross-platform execution and verification without external toolchain dependencies.<br/><br/>
    <b>Core Subsystems:</b><br/>
    • <b>Evaluation Stack:</b> Standard LIFO stack for arithmetic and logical operand evaluation.<br/>
    • <b>Environment Storage:</b> Array-backed slot memory mapping symbol indexes to runtime integer and floating-point values.<br/>
    • <b>Program Counter (PC):</b> Deterministic execution loop with direct branching support.<br/><br/>
    <b>Dual Execution Verification:</b><br/>
    Programs compiled with <code>--run</code> are executed on the VM, while <code>--compile-native</code> executes on real x86 hardware. Both output streams are verified to match identically.
    """
    p_vm_arch = Paragraph(vm_arch_text, s['body'])
    p_vm_arch.wrapOn(c, 390, 350)
    p_vm_arch.drawOn(c, 55, 75)

    vm_trace_text = """
    <b>Bytecode Instruction Set:</b><br/>
    • <code>PUSH_INT &lt;val&gt;</code> : Pushes integer literal to stack.<br/>
    • <code>LOAD_VAR &lt;idx&gt;</code>  : Loads variable from slot to stack.<br/>
    • <code>STORE_VAR &lt;idx&gt;</code> : Pops value and stores to variable slot.<br/>
    • <code>ADD, SUB, MUL, DIV</code>: Pops 2 operands, pushes result.<br/>
    • <code>CMP_LT, CMP_EQ</code>   : Pushes boolean evaluation (1 or 0).<br/>
    • <code>JZ &lt;target&gt;</code>    : Conditional jump if top of stack is 0.<br/>
    • <code>JMP &lt;target&gt;</code>   : Unconditional relative jump.<br/>
    • <code>HALT</code>            : Graceful virtual machine termination.<br/><br/>
    <b>Verified Execution Benchmarks:</b><br/>
    ✔ Fibonacci Sequence (Fib(8) = 21)<br/>
    ✔ Loop Factorial (5! = 120)<br/>
    ✔ Nested Conditional Sums &amp; Shadowed Scopes
    """
    p_vm_trace = Paragraph(vm_trace_text, s['small'])
    p_vm_trace.wrapOn(c, 390, 350)
    p_vm_trace.drawOn(c, 515, 75)

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 14: 20/20 TEST VERIFICATION SUITE
    # ---------------------------------------------------------------------
    draw_slide_header("Comprehensive 20/20 Automated Regression Test Suite", slide_num=14)

    draw_card(40, 60, 420, 390, "Verification Methodology & Test Categories", accent_top=True)
    draw_card(500, 60, 420, 390, "Automated Regression Test Dashboard", accent_top=True)

    test_cat_text = """
    <b>Automated Test Harness (run_tests.ps1):</b><br/>
    Executes all 20 regression test cases across compiler front-end, error recovery, semantic analysis, optimizer, target assembly, and VM.<br/><br/>
    <b>Test Category Breakdown:</b><br/>
    • <b>Tests 01-06 (Syntax Recovery):</b> Valid program, missing expression insertion (<code>0</code>), extra semicolon deletion, missing <code>)</code> insertion, multi-error resilience, panic synchronization.<br/>
    • <b>Tests 07-10 (Semantic Scoping):</b> Undeclared identifier rejection, duplicate declaration rejection, type mismatch rejection, nested block scope variable shadowing.<br/>
    • <b>Tests 11-14 (IR &amp; VM Execution):</b> Constant folding, while-loop VM sum, operator precedence AST, Fibonacci sequence.<br/>
    • <b>Tests 15-20 (Target Codegen):</b> Full arithmetic lowering, conditional branches, factorial loop, x86 AT&amp;T assembly, educational ISA-32, native GCC machine execution.
    """
    p_test_cat = Paragraph(test_cat_text, s['small'])
    p_test_cat.wrapOn(c, 390, 350)
    p_test_cat.drawOn(c, 55, 75)

    fig_suite = os.path.join(ASSETS_DIR, "fig_test_suite_20.png")
    if os.path.isfile(fig_suite):
        c.drawImage(fig_suite, 515, 80, width=390, height=330, preserveAspectRatio=True, mask='auto')

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 15: RESILIENT COMPILER WEB STUDIO (WARM PALETTE)
    # ---------------------------------------------------------------------
    draw_slide_header("Developer Web Studio: Warm Editorial IDE & Diagnostics", slide_num=15)

    draw_card(40, 60, 420, 390, "Studio Capabilities & Design Tokens", accent_top=True)
    draw_card(500, 60, 420, 390, "Developer Web Studio Interface", accent_top=True)

    ui_text = """
    <b>Warm Editorial Developer Palette:</b><br/>
    • <b>Canvas Base:</b> Warm Ivory (<code>#F7F3EB</code>)<br/>
    • <b>Panel Surfaces:</b> Crisp White (<code>#FFFFFF</code>)<br/>
    • <b>Primary Accent:</b> Terracotta (<code>#C66B4E</code>)<br/>
    • <b>Secondary Flow:</b> Muted Sage (<code>#8A9A7B</code>)<br/>
    • <b>Typography:</b> Dark Charcoal (<code>#292B28</code>)<br/><br/>
    <b>Integrated Developer Features:</b><br/>
    • <b>Monaco Code Editor:</b> Custom <code>resilient-warm</code> syntax highlighting for Micro-C.<br/>
    • <b>Interactive AST Graph:</b> Real-time 2D visual tree rendering with node inspection.<br/>
    • <b>9-Stage Pipeline Tracker:</b> Live status indicators for all compilation passes.<br/>
    • <b>Recovery Telemetry Cards:</b> Detailed audit reports showing strategy, cost, and rationale.<br/>
    • <b>In-Browser VM Terminal:</b> Direct execution output and memory variable inspection.
    """
    p_ui = Paragraph(ui_text, s['small'])
    p_ui.wrapOn(c, 390, 350)
    p_ui.drawOn(c, 55, 75)

    fig_web = os.path.join(ASSETS_DIR, "fig_web_studio_warm.png")
    if os.path.isfile(fig_web):
        c.drawImage(fig_web, 515, 80, width=390, height=330, preserveAspectRatio=True, mask='auto')

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 16: PHASE 1 & 2 AUDIT RECONCILIATION
    # ---------------------------------------------------------------------
    draw_slide_header("Phase 1 & Phase 2 Audit Reconciliation Matrix", slide_num=16)

    draw_card(40, 60, 880, 390, "Audit Reconciliation: Proposal Claims vs. Implemented Deliverables", accent_top=True)

    audit_table_data = """
    <b>PHASE 1 &amp; PHASE 2 AUDIT RECONCILIATION TABLE:</b><br/><br/>
    <table border="1" cellpadding="6">
    <tr>
        <th width="140"><b>Component</b></th>
        <th width="190"><b>Phase 1 / 2 Original Claim</b></th>
        <th width="280"><b>Phase 3 Final Implementation</b></th>
        <th width="80"><b>Status</b></th>
        <th width="150"><b>Impact &amp; Verification</b></th>
    </tr>
    <tr>
        <td><b>Lexer</b></td>
        <td>Basic regex token scanning</td>
        <td>Complete Micro-C tokenizer with coordinate tracking and recovery</td>
        <td><font color="#2E7D32"><b>VERIFIED</b></font></td>
        <td>Zero lexical leaks</td>
    </tr>
    <tr>
        <td><b>Parser</b></td>
        <td>Recursive descent with bail-out</td>
        <td>Resilient predictive parser with lookahead candidate probing</td>
        <td><font color="#2E7D32"><b>EXTENDED</b></font></td>
        <td>Non-fatal parsing</td>
    </tr>
    <tr>
        <td><b>Error Recovery</b></td>
        <td>Theoretical strategy discussion</td>
        <td>Operational 3-strategy engine (Insertion, Deletion, Panic) with scoring</td>
        <td><font color="#2E7D32"><b>DELIVERED</b></font></td>
        <td>4+ syntax repairs</td>
    </tr>
    <tr>
        <td><b>Semantics</b></td>
        <td>Conceptual scope discussion</td>
        <td>Hierarchical symbol table stack (0-2) with variable shadowing</td>
        <td><font color="#2E7D32"><b>DELIVERED</b></font></td>
        <td>Type checking passing</td>
    </tr>
    <tr>
        <td><b>IR &amp; Opt</b></td>
        <td>Proposed future enhancement</td>
        <td>Linear Quadruple TAC + 4-pass constant folding optimizer</td>
        <td><font color="#2E7D32"><b>COMPLETED</b></font></td>
        <td>56.25% reduction</td>
    </tr>
    <tr>
        <td><b>Target Code</b></td>
        <td>Unimplemented future scope</td>
        <td>Real x86-32 AT&amp;T assembly with cdecl frames + Bytecode VM</td>
        <td><font color="#2E7D32"><b>COMPLETED</b></font></td>
        <td>Native GCC &amp; VM pass</td>
    </tr>
    <tr>
        <td><b>Developer UI</b></td>
        <td>Static mockups / initial layout</td>
        <td>Full Web Studio with Monaco editor and 2D AST graph viewer</td>
        <td><font color="#2E7D32"><b>COMPLETED</b></font></td>
        <td>Live on localhost:8080</td>
    </tr>
    </table><br/>
    <b>Conclusion:</b> All proposed concepts have been transitioned from theoretical proposals into fully verified, working systems software.
    """
    p_audit = Paragraph(audit_table_data, s['small'])
    p_audit.wrapOn(c, 840, 360)
    p_audit.drawOn(c, 55, 65)

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 17: VIVA VOCE DEFENSE & TECHNICAL Q&A
    # ---------------------------------------------------------------------
    draw_slide_header("Viva Voce Defense: Key Technical Questions & Answers", slide_num=17)

    draw_card(40, 240, 420, 210, "Q1: Recovery Heuristics vs. Standard Panic Mode", accent_top=True)
    draw_card(500, 240, 420, 210, "Q2: Variable Shadowing & Hierarchical Scopes", accent_top=True)
    draw_card(40, 55, 420, 175, "Q3: Benefits of Linear TAC over AST for Optimization", accent_top=True)
    draw_card(500, 55, 420, 175, "Q4: Dual Backend: x86-32 Assembly & Bytecode VM", accent_top=True)

    q1_text = """
    <b>Examiner Question:</b> Why use cost-based lookahead heuristics instead of standard panic-mode recovery?<br/><br/>
    <b>Candidate Defense:</b> Standard panic mode discards all tokens until a delimiter, losing valuable AST context and causing secondary cascading errors. Our lookahead heuristic evaluates synthetic insertion (Cost: 1) and deletion (Cost: 2) first, healing the stream locally without dropping valid downstream logic.
    """
    p_q1 = Paragraph(q1_text, s['small'])
    p_q1.wrapOn(c, 390, 180)
    p_q1.drawOn(c, 55, 250)

    q2_text = """
    <b>Examiner Question:</b> How does the compiler handle variable shadowing in nested scopes without collisions?<br/><br/>
    <b>Candidate Defense:</b> We implement an explicit scope stack where each block points to its enclosing parent scope. Identifier lookups traverse upward from the innermost scope. Inner declarations mask outer declarations without overwriting them, guaranteeing proper block isolation.
    """
    p_q2 = Paragraph(q2_text, s['small'])
    p_q2.wrapOn(c, 390, 180)
    p_q2.drawOn(c, 515, 250)

    q3_text = """
    <b>Examiner Question:</b> What is the advantage of optimizing TAC instead of the AST?<br/><br/>
    <b>Candidate Defense:</b> Trees are deeply nested with complex control flow. Three-Address Code linearizes execution into flat quadruples with explicit temporary variables, enabling simple def-use chains for constant folding, constant propagation, and dead-code elimination.
    """
    p_q3 = Paragraph(q3_text, s['small'])
    p_q3.wrapOn(c, 390, 150)
    p_q3.drawOn(c, 55, 65)

    q4_text = """
    <b>Examiner Question:</b> Why implement both x86-32 assembly and a Virtual Machine?<br/><br/>
    <b>Candidate Defense:</b> Dual verification. The bytecode VM provides instant cross-platform runtime execution and variable tracing, while x86-32 AT&amp;T assembly proves real machine lowerability with standard cdecl calling conventions and stack frames.
    """
    p_q4 = Paragraph(q4_text, s['small'])
    p_q4.wrapOn(c, 390, 150)
    p_q4.drawOn(c, 515, 65)

    c.showPage()

    # ---------------------------------------------------------------------
    # SLIDE 18: CONCLUSION & PROJECT SUMMARY (Dark Theme)
    # ---------------------------------------------------------------------
    c.setFillColor(C_BG_DARK)
    c.rect(0, 0, w_pts, h_pts, fill=1, stroke=0)

    c.setFillColor(C_ACCENT_TERRA)
    c.rect(0, h_pts - 8, w_pts, 8, fill=1, stroke=0)

    p_c_kicker = Paragraph("PHASE 3 FINAL REVIEW &amp; CAPSTONE DEMONSTRATION", s_dark['kicker'])
    p_c_kicker.wrapOn(c, 700, 20)
    p_c_kicker.drawOn(c, 50, h_pts - 45)

    p_c_title = Paragraph("Project Conclusion &amp; Final Deliverables", ParagraphStyle('CTitle', fontName='Helvetica-Bold', fontSize=26, leading=30, textColor=C_TEXT_LIGHT))
    p_c_title.wrapOn(c, 700, 35)
    p_c_title.drawOn(c, 50, h_pts - 80)

    # Card Left: Deliverables
    c.setFillColor(C_CARD_DARK)
    c.setStrokeColor(C_BORDER_DARK)
    c.roundRect(50, 70, 410, 370, 8, fill=1, stroke=1)
    c.setFillColor(C_ACCENT_TERRA)
    c.roundRect(50, 436, 410, 4, 2, fill=1, stroke=0)

    p_deliv_h = Paragraph("<b>COMPREHENSIVE PROJECT DELIVERABLES</b>", s_dark['h1'])
    p_deliv_h.wrapOn(c, 370, 20)
    p_deliv_h.drawOn(c, 70, 410)

    deliv_items = [
        "✔ <b>Production C++17 Compiler (resilientc.exe):</b><br/>Full 9-stage pipeline compiled with GCC 13+.",
        "✔ <b>Automated Verification Suite (run_tests.ps1):</b><br/>20/20 regression tests passing with 100% pass rate.",
        "✔ <b>Developer Web Studio (http://localhost:8080):</b><br/>Monaco code editor, 2D AST graph, live pipeline status.",
        "✔ <b>Final Academic Project Report:</b><br/>15-page IEEE report in PDF &amp; DOCX format.",
        "✔ <b>Complete Technical Explanation Guide:</b><br/>14-page systems breakdown with viva Q&amp;A."
    ]
    dy = 375
    for di in deliv_items:
        p_di = Paragraph(di, s_dark['small'])
        p_di.wrapOn(c, 370, 35)
        p_di.drawOn(c, 70, dy)
        dy -= 58

    # Card Right: Project Takeaways & Links
    c.setFillColor(C_CARD_DARK)
    c.setStrokeColor(C_BORDER_DARK)
    c.roundRect(480, 70, 430, 370, 8, fill=1, stroke=1)
    c.setFillColor(C_ACCENT_SAGE)
    c.roundRect(480, 436, 430, 4, 2, fill=1, stroke=0)

    p_take_h = Paragraph("<b>FINAL RESEARCH TAKEAWAY &amp; REPOSITORY</b>", s_dark['h1'])
    p_take_h.wrapOn(c, 390, 20)
    p_take_h.drawOn(c, 500, 410)

    take_body = """
    <b>Transforming Compiler Behavior:</b><br/>
    Resilient compilation transforms language processors from rigid gatekeepers that crash at the first syntax error into intelligent, developer-friendly analysis engines capable of real-time program repair.<br/><br/>
    <b>Academic Significance:</b><br/>
    Directly reflects principles utilized in production IDE language servers (LSP), rustc, and modern Clang diagnostic recovery systems.<br/><br/>
    <b>Project Presenter &amp; Academic Details:</b><br/>
    • <b>Presenter:</b> D JOSHUA DANIEL &nbsp;|&nbsp; <b>Reg No:</b> 24BCE0436<br/>
    • <b>Degree:</b> B.Tech in Computer Science &amp; Engineering<br/>
    • <b>Institution:</b> Vellore Institute of Technology (VIT), Vellore
    """
    p_take_body = Paragraph(take_body, s_dark['small'])
    p_take_body.wrapOn(c, 390, 200)
    p_take_body.drawOn(c, 500, 220)

    # Dedicated GitHub Repository Callout Box
    gh_box_y = 110
    c.setFillColor(HexColor("#1A1D21"))
    c.setStrokeColor(C_ACCENT_TERRA)
    c.setLineWidth(1.2)
    c.roundRect(500, gh_box_y, 390, 85, 6, fill=1, stroke=1)

    c.setFillColor(C_ACCENT_TERRA)
    c.roundRect(500, gh_box_y + 81, 390, 4, 2, fill=1, stroke=0)

    p_gh_label = Paragraph("<b>OFFICIAL OPEN-SOURCE GITHUB REPOSITORY</b>", s_dark['kicker'])
    p_gh_label.wrapOn(c, 370, 15)
    p_gh_label.drawOn(c, 514, gh_box_y + 60)

    gh_url = "https://github.com/joshuadjd79-cmd/resilient-compiler-intelligent-error-recovery"
    p_gh_link = Paragraph(f'<a href="{gh_url}"><font color="#38BDF8"><b><u>{gh_url}</u></b></font></a>', ParagraphStyle('GHLink', fontName='Helvetica-Bold', fontSize=8, leading=11, textColor=HexColor('#38BDF8')))
    p_gh_link.wrapOn(c, 370, 25)
    p_gh_link.drawOn(c, 514, gh_box_y + 35)

    p_gh_sub = Paragraph("✔ Full C++17 Pipeline &nbsp;·&nbsp; 20/20 Test Harness &nbsp;·&nbsp; Web Studio IDE", s_dark['small'])
    p_gh_sub.wrapOn(c, 370, 15)
    p_gh_sub.drawOn(c, 514, gh_box_y + 12)

    # Examination ready sign-off
    p_ready = Paragraph("<i>Thank you, respected faculty and examiners! Ready for viva voce examination.</i>", ParagraphStyle('Ready', fontName='Helvetica-Oblique', fontSize=9.5, leading=13, textColor=C_ACCENT_SAGE))
    p_ready.wrapOn(c, 390, 20)
    p_ready.drawOn(c, 500, 80)

    # Slide 18 bottom footer link
    c.setStrokeColor(C_BORDER_DARK)
    c.setLineWidth(1)
    c.line(50, 42, w_pts - 50, 42)

    p_slide18_foot = Paragraph(f"<b>GitHub Repository:</b> <a href='{gh_url}'><font color='#C66B4E'><u>{gh_url}</u></font></a> &nbsp;|&nbsp; <b>D JOSHUA DANIEL (24BCE0436)</b> &nbsp;|&nbsp; VIT Vellore", s_dark['small'])
    p_slide18_foot.wrapOn(c, 860, 20)
    p_slide18_foot.drawOn(c, 50, 20)

    c.showPage()
    c.save()
    print(f"Successfully generated {pdf_filename} (18 slides, 16:9 Widescreen)!")


# =========================================================================
# PART 2: PYTHON-PPTX PRESENTATION GENERATION
# =========================================================================
def build_pptx_presentation(pptx_filename="Resilient_Compiler_Phase3_Presentation.pptx"):
    print(f"Generating Widescreen 16:9 PowerPoint Presentation: {pptx_filename}...")
    prs = pptx.Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    def add_bg(slide, dark=False):
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
        bg.fill.solid()
        bg.fill.fore_color.rgb = RGB_BG_DARK if dark else RGB_BG_LIGHT
        bg.line.fill.background()
        return bg

    def add_header(slide, title, kicker="RESILIENT COMPILER | PHASE 3 FINAL REVIEW", slide_num=None, dark=False):
        hb = slide.shapes.add_textbox(Inches(0.6), Inches(0.4), Inches(10.5), Inches(1.1))
        tf = hb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        pk = tf.paragraphs[0]
        pk.text = kicker.upper()
        pk.font.size = Pt(11)
        pk.font.bold = True
        pk.font.color.rgb = RGB_TERRA

        pt = tf.add_paragraph()
        pt.text = title
        pt.font.size = Pt(24)
        pt.font.bold = True
        pt.font.color.rgb = RGB_TEXT_LIGHT if dark else RGB_TEXT_DARK

        if slide_num:
            nb = slide.shapes.add_textbox(Inches(11.0), Inches(0.4), Inches(1.8), Inches(0.5))
            ntf = nb.text_frame
            np = ntf.paragraphs[0]
            np.text = f"SLIDE {slide_num} / 18"
            np.font.size = Pt(11)
            np.font.bold = True
            np.font.color.rgb = RGB_TEXT_MUTED

    # Slide 1: Title
    s1 = prs.slides.add_slide(blank_layout)
    add_bg(s1, dark=True)

    tb1 = s1.shapes.add_textbox(Inches(0.8), Inches(1.5), Inches(11.7), Inches(2.5))
    tf1 = tb1.text_frame
    tf1.word_wrap = True
    p1 = tf1.paragraphs[0]
    p1.text = "RESILIENT COMPILER WITH INTELLIGENT ERROR RECOVERY"
    p1.font.size = Pt(32)
    p1.font.bold = True
    p1.font.color.rgb = RGB_TEXT_LIGHT

    p2 = tf1.add_paragraph()
    p2.text = "Phase 3 Final Review & Technical Project Defense"
    p2.font.size = Pt(20)
    p2.font.color.rgb = RGB_TERRA

    p3 = tf1.add_paragraph()
    p3.text = "A Complete 9-Stage Fault-Tolerant Compiler Pipeline from Micro-C to x86-32 Machine Code & Bytecode VM"
    p3.font.size = Pt(13)
    p3.font.color.rgb = RGB_TEXT_MUTED

    tb_cand = s1.shapes.add_textbox(Inches(0.8), Inches(4.5), Inches(5.5), Inches(2.2))
    tfc = tb_cand.text_frame
    pc1 = tfc.paragraphs[0]
    pc1.text = "PROJECT CANDIDATE & INSTITUTION"
    pc1.font.size = Pt(14)
    pc1.font.bold = True
    pc1.font.color.rgb = RGB_TERRA

    for l in [
        "Student: D JOSHUA DANIEL",
        "Registration No: 24BCE0436",
        "Degree: B.Tech Computer Science & Engineering",
        "Institution: Vellore Institute of Technology, Vellore",
        "Course: Compiler Design Laboratory (CSE3002)"
    ]:
        p = tfc.add_paragraph()
        p.text = l
        p.font.size = Pt(12)
        p.font.color.rgb = RGB_TEXT_LIGHT

    tb_ach = s1.shapes.add_textbox(Inches(6.8), Inches(4.5), Inches(5.5), Inches(2.2))
    tfa = tb_ach.text_frame
    pa1 = tfa.paragraphs[0]
    pa1.text = "KEY DELIVERABLES & VERIFICATION"
    pa1.font.size = Pt(14)
    pa1.font.bold = True
    pa1.font.color.rgb = RGB_SAGE

    for l in [
        "✔ Full 9-Stage Compiler Pipeline (C++17)",
        "✔ Multi-Strategy Heuristic Error Recovery",
        "✔ 56.25% TAC Code Optimization Reduction",
        "✔ Real x86-32 AT&T Assembly Code Generation",
        "✔ 20/20 Automated Regression Tests Passing"
    ]:
        p = tfa.add_paragraph()
        p.text = l
        p.font.size = Pt(12)
        p.font.color.rgb = RGB_TEXT_LIGHT

    # Slide 2-18 Simple Content Stubs in PPTX matching PDF
    slide_defs = [
        ("Executive Summary: Project Scope & Core Milestones", "Complete 9-stage pipeline, intelligent error recovery, 20/20 passing tests, and warm developer studio."),
        ("Problem Statement & Architectural Motivation", "Traditional compilers fail fast and cascade misleading errors; Resilient Compiler heals the token stream locally."),
        ("Micro-C Language Specification & Formal Grammar", "Static types (int, float), expressions, control structures (if-else, while), and LL(1) EBNF grammar."),
        ("End-to-End 9-Stage Compiler Pipeline Architecture", "Complete pipeline: Lexer -> Parser -> AST -> Semantics -> TAC -> Optimizer -> Assembly -> Linker -> VM."),
        ("Intelligent Error Recovery Engine: 4-Stage Healing Cycle", "Detection, Lookahead candidate probing, Cost-based scoring, and Stream repair with zero cascading halts."),
        ("Cost-Based Recovery Strategy Scoring & Heuristics", "Virtual Insertion (Cost: 1.0, HIGH), Token Deletion (Cost: 2.0, MED), Panic Mode (Cost: 5.0, LOW)."),
        ("Polymorphic Abstract Syntax Tree (AST) & Visitor Pattern", "Strongly-typed AST node hierarchy, coordinate tracking, healed node attributes, and decoupled visitors."),
        ("Hierarchical Symbol Table & Semantic Analysis", "Multi-level scope stack (0-2), variable shadowing resolution, and strict static type checking."),
        ("Intermediate Representation: Three-Address Code (TAC)", "Linear quadruple representation (op, arg1, arg2, res) for expressions, branches, and loop control."),
        ("Multi-Pass Code Optimization & Telemetry", "Constant folding, propagation, temporary elimination, dead code elimination, 56.25% instruction reduction."),
        ("Target Code Generation: Real x86-32 AT&T Assembly", "Standard cdecl calling convention, stack frame layout (-4(%ebp)), registers (%eax, %ebx), native GCC execution."),
        ("Virtual Machine Execution Engine (VM.cpp)", "Stack-based bytecode VM, evaluation stack, local variable slot storage, loop and arithmetic verification."),
        ("Comprehensive 20/20 Automated Regression Test Suite", "Automated test harness verifying syntax recovery, semantic rejection, optimization, assembly, and VM."),
        ("Developer Web Studio: Warm Editorial IDE & Diagnostics", "Warm ivory palette, Monaco code editor, interactive 2D AST graph, and live pipeline status tracker."),
        ("Phase 1 & Phase 2 Audit Reconciliation Matrix", "Formal audit reconciliation proving every original claim has been implemented and tested."),
        ("Viva Voce Defense: Key Technical Questions & Answers", "In-depth defense on recovery heuristics, scope stack traversal, TAC vs AST, and dual backend targets."),
        ("Project Conclusion & Final Academic Deliverables", "Complete deliverables: resilientc.exe, academic report, complete explanation, web studio, 20/20 test suite.\n\nOfficial GitHub Repository:\nhttps://github.com/joshuadjd79-cmd/resilient-compiler-intelligent-error-recovery")
    ]

    for idx, (stitle, sdesc) in enumerate(slide_defs, start=2):
        s = prs.slides.add_slide(blank_layout)
        is_dark = (idx == 18)
        add_bg(s, dark=is_dark)
        add_header(s, stitle, slide_num=idx, dark=is_dark)

        tb = s.shapes.add_textbox(Inches(0.8), Inches(2.0), Inches(11.7), Inches(4.8))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = sdesc
        p.font.size = Pt(16)
        p.font.color.rgb = RGB_TEXT_LIGHT if is_dark else RGB_TEXT_DARK

    prs.save(pptx_filename)
    print(f"Successfully generated {pptx_filename} (18 slides)!")


# =========================================================================
# PART 3: PHASE 3 MARKDOWN SLIDES & SPEAKER SCRIPT
# =========================================================================
def build_markdown_notes(md_filename="docs/PHASE3_PRESENTATION_SLIDES.md"):
    print(f"Writing Presentation Speaker Notes: {md_filename}...")
    content = """# Resilient Compiler — Phase 3: Final Project Review & Defense
**Compiler Design Laboratory Capstone Evaluation (CSE3002)**  
**Presenter:** D JOSHUA DANIEL | **Registration Number:** 24BCE0436  
**Institution:** Vellore Institute of Technology (VIT), Vellore  
**Repository:** [GitHub Repository](https://github.com/joshuadjd79-cmd/resilient-compiler-intelligent-error-recovery)  
**Hosted Demo:** [Interactive Web Studio](http://localhost:8080)  
**Deliverable Files:** `Resilient_Compiler_Phase3_Presentation.pdf` & `Resilient_Compiler_Phase3_Presentation.pptx`

---

## Complete Slide-by-Slide Presentation Guide & Speaker Script

### Slide 1: Title Slide
- **Title:** Resilient Compiler with Intelligent Error Recovery
- **Subtitle:** Phase 3 Final Review & Technical Project Defense
- **Candidate:** D JOSHUA DANIEL (24BCE0436) — B.Tech Computer Science & Engineering, VIT Vellore
- **Speaker Script:**
  > *"Good morning, respected faculty and external examiners. Today I present the final Phase 3 defense of my Compiler Design project: 'Resilient Compiler with Intelligent Error Recovery'. Over the course of this semester, we have evolved the initial theoretical proposals of Phase 1 and the front-end prototypes of Phase 2 into a full, production-grade 9-stage compiler pipeline in modern C++17. Our compiler translates Micro-C source code all the way down to real x86-32 AT&T assembly and stack-based virtual machine bytecode, while providing intelligent, non-fatal syntax-error recovery. Let us explore the system architecture."*

---

### Slide 2: Executive Summary & Project Milestones
- **Key Milestones:**
  1. Full 9-Stage Compiler Pipeline implemented from scratch in C++17.
  2. Intelligent Multi-Strategy Error Recovery (Virtual Insertion, Deletion, and Panic Mode).
  3. Industrial Verification: 20/20 automated regression tests passing (100% pass rate).
  4. 56.25% Instruction Reduction achieved via multi-pass constant optimization.
- **Speaker Script:**
  > *"To summarize our milestones: we have achieved 100% completion across all planned compiler stages. Rather than building a partial prototype, we built an entire software chain including lexical scanning, resilient predictive parsing, AST construction, hierarchical symbol tables, Three-Address Code, constant folding optimization, x86 assembly generation, and an in-memory virtual machine. Every component is rigorously tested by our automated test suite."*

---

### Slide 3: Problem Statement & Motivation
- **The Problem:** Conventional compilers abort on the first error and produce cascading floods of secondary false diagnostics.
- **The Solution:** A resilient compiler middleware that heals the token stream locally using lookahead probing, preserving code semantics down to EOF.
- **Speaker Script:**
  > *"Why is resilient compilation critical? In traditional compilers like GCC or Clang in strict mode, encountering a missing semicolon or parenthesis often halts compilation or produces dozens of cascading errors. In modern software engineering, especially with IDE language servers (LSP), the compiler must provide rich diagnostics and maintain an active syntax tree even when the user's code is incomplete or syntactically invalid. Our compiler guarantees complete AST delivery without crashes."*

---

### Slide 4: Micro-C Language & Formal Grammar
- **Supported Constructs:** Primitive types `int` and `float`, variable declarations, full arithmetic and relational operator precedence, `if-else` branching, `while` iterative loops, and nested block scopes with variable shadowing.
- **Speaker Script:**
  > *"The language we compile is Micro-C, defined by a clean LL(1) context-free grammar. It supports 32-bit signed integers, IEEE 754 floating point numbers, multi-term arithmetic with strict precedence climbing, relational comparisons, loops, and nested block scopes with local variable shadowing."*

---

### Slide 5: End-to-End 9-Stage Compiler Architecture
- **Pipeline Stages:**
  1. Lexical Analysis (`Lexer.cpp`)
  2. Resilient Syntax Analysis (`Parser.cpp`)
  3. AST Construction (`AST.cpp`)
  4. Scoped Semantic Analysis (`SemanticAnalyzer.cpp`, `SymbolTable.cpp`)
  5. Intermediate Code Generation (`IRGenerator.cpp`, `TAC.cpp`)
  6. Multi-Pass Optimization (`Optimizer.cpp`)
  7. Target Code Generation (`AssemblyGenerator.cpp`)
  8. Native MinGW GCC Assembler & Linker
  9. Bytecode Virtual Machine (`VM.cpp`)
- **Speaker Script:**
  > *"Here is our end-to-end architectural flow. The source code enters the Lexer and Parser. If syntax errors occur, the Recovery Manager heals the stream. The AST is analyzed by the Semantic Analyzer using a hierarchical scope stack. Then the IR Generator lowers the AST into Three-Address Code quadruples, the Optimizer performs constant folding and dead code elimination, and finally our code generators emit both real x86-32 assembly and virtual machine bytecode."*

---

### Slide 6: Intelligent Error Recovery Architecture
- **4-Stage Healing Cycle:**
  1. Mismatch Detection ($T_{curr} \ne T_{exp}$)
  2. Candidate Probing (Insertion vs. Deletion vs. Panic)
  3. Cost & Confidence Scoring
  4. Stream Healing & Transparent Audit Logging
- **Speaker Script:**
  > *"Whenever a token mismatch is detected, the compiler executes a 4-step healing cycle. It probes the lookahead window to evaluate whether inserting an expected token or deleting an extraneous token will allow the grammar to continue. A penalty score is computed, the least disruptive fix is applied in memory, and parsing continues cleanly down to the end of the file."*

---

### Slide 7: Cost-Based Strategy Scoring Heuristics
- **Formulation:** $\text{TotalCost} = w_{\text{action}} + w_{\text{sym}} \\cdot S(T) + w_{\text{dist}} \\cdot (1 - \text{LookaheadValidity})$
- **Strategies:**
  - **Virtual Insertion (Cost: 1.0, HIGH):** Synthesizes missing token (e.g. `int a = ;` -> inserts `0`).
  - **Token Deletion (Cost: 2.0, MEDIUM):** Discards redundant token (e.g. `int x = 10;;` -> deletes second `;`).
  - **Panic Mode (Cost: 5.0, LOW):** Skips corrupt characters to synchronizing tokens (`;`, `}`, `EOF`).
- **Speaker Script:**
  > *"To ensure optimal repairs, we use a cost-based heuristic. Virtual insertion has the lowest cost of 1.0 because it preserves following valid code. Token deletion costs 2.0, and panic mode has a cost of 5.0 as a last resort. This ensures the compiler always chooses the least disruptive repair."*

---

### Slide 8: AST Construction & Visitor Pattern
- **Polymorphism:** Derived classes `ProgramNode`, `VarDeclNode`, `AssignNode`, `BinaryOpNode`, `IfNode`, `WhileNode`.
- **Visitor Decoupling:** AST is traversed by `ASTPrinterVisitor`, `SemanticVisitor`, and `TACGenVisitor`.
- **Speaker Script:**
  > *"The Abstract Syntax Tree is strongly typed and immutable. Each node records exact line and column coordinates, along with an 'isHealed' flag indicating if the node was generated through error recovery. We use the Visitor Pattern to decouple AST traversal for printing, semantic analysis, and TAC code generation."*

---

### Slide 9: Hierarchical Symbol Table & Semantic Analysis
- **Scope Stack:** Global (Level 0), Block/Branch (Level 1), Nested Loop (Level 2).
- **Shadowing:** Inner scopes mask outer variables without name collisions.
- **Validations:** Rejects undeclared identifiers, duplicate declarations, and mismatched types.
- **Speaker Script:**
  > *"Semantic analysis is driven by a hierarchical scope stack. When a variable is looked up, the symbol table searches upward from the current scope to the global scope. This allows inner block variables to shadow outer variables properly without collision. The analyzer also enforces strict static type safety."*

---

### Slide 10: Intermediate Representation: Three-Address Code (TAC)
- **Quadruple Format:** `(operator, operand1, operand2, result)`
- **Linear Representation:** Flattens complex expressions and control flow into explicit temporaries and conditional jump labels (`IF_FALSE`, `GOTO`, `LABEL`).
- **Speaker Script:**
  > *"Our intermediate representation is linear Three-Address Code using quadruples. Linearizing the code into flat instructions with explicit temporaries and jump labels provides a machine-independent abstraction that greatly simplifies optimization passes."*

---

### Slide 11: Multi-Pass Code Optimization & Telemetry
- **Passes:**
  1. Constant Folding (evaluates literal arithmetic at compile time)
  2. Constant Propagation (forwards constants into downstream uses)
  3. Redundant Temporary Elimination (removes unnecessary `_t` variables)
  4. Dead Code Elimination (removes unreachable code blocks)
- **Benchmark:** 56.25% reduction in instruction count (16 quadruples reduced to 7).
- **Speaker Script:**
  > *"Our optimizer runs four sequential passes. On our benchmark test program, the optimizer folded nested arithmetic constants, propagated values forward, and eliminated redundant temporaries, reducing raw instruction count by 56.25%."*

---

### Slide 12: Target Code Generation: Real x86-32 AT&T Assembly
- **Calling Convention:** Standard cdecl ABI with base pointer framing (`pushl %ebp; movl %esp, %ebp; subl $N, %esp`).
- **Stack Memory:** Variables mapped to negative offsets (`-4(%ebp)`, `-8(%ebp)`).
- **Native Assembly:** Output can be assembled directly by MinGW GCC (`gcc -m32`) into native executables.
- **Speaker Script:**
  > *"In Phase 3, we implemented real target code generation for x86-32 AT&T assembly. The generator allocates local variables on the call stack at negative offsets from %ebp, manages registers %eax and %ebx, and emits code that compiles directly with GCC to create real native Windows executables."*

---

### Slide 13: Virtual Machine Execution Engine
- **Stack-Based VM:** Zero-register evaluation stack, array-backed variable storage, and deterministic execution loop.
- **Dual Execution:** Programs can run on the VM or natively on the CPU; outputs are verified to be identical.
- **Speaker Script:**
  > *"Alongside x86 code generation, we built an in-memory virtual machine. The VM uses an evaluation stack and local variable slots to execute compiled bytecode directly. This enables instant cross-platform execution and real-time state inspection in our developer studio."*

---

### Slide 14: Comprehensive 20/20 Test Verification Suite
- **Verification:** 20 automated tests spanning unit tests, error recovery, semantic rejection, optimization, assembly emission, and native execution.
- **Result:** 20/20 PASSED (100% pass rate).
- **Speaker Script:**
  > *"We verified the compiler using an automated test harness covering 20 comprehensive scenarios. All 20 tests pass with a 100% success rate, confirming zero regressions across syntax repairs, semantic validations, constant folding, and machine execution."*

---

### Slide 15: Resilient Compiler Web Studio
- **Developer UI:** Warm editorial palette (warm ivory `#F7F3EB`, terracotta `#C66B4E`, sage `#8A9A7B`, charcoal `#292B28`).
- **Features:** Monaco code editor, interactive 2D AST visual graph explorer, live 9-stage pipeline status tracker, and recovery telemetry cards.
- **Speaker Script:**
  > *"To provide a modern developer experience, we created the Resilient Compiler Web Studio. It features a warm editorial palette, Monaco editor with custom syntax highlighting, an interactive 2D AST tree explorer, and a live pipeline tracker connected to our local backend server."*

---

### Slide 16: Phase 1 & Phase 2 Audit Reconciliation
- **Reconciliation:** Demonstrates how initial Phase 1 proposals and Phase 2 prototypes were audited, repaired, and completed into Phase 3 deliverables.
- **Speaker Script:**
  > *"We conducted a rigorous audit against our earlier Phase 1 and Phase 2 documents. Every conceptual feature—from lookahead recovery to symbol table scoping and target code generation—is now fully realized in working C++17 source code."*

---

### Slide 17: Viva Voce Defense: Key Technical Q&A
- **Core Topics:** Lookahead heuristics vs. panic mode, scope stack upward traversal for variable shadowing, benefits of linear TAC for optimization, and dual-backend verification.
- **Speaker Script:**
  > *"We have prepared detailed technical defenses for key compiler design questions, including heuristic weighting trade-offs, scope stack resolution of shadowed variables, and why Quadruple TAC is superior to tree rewriting for constant optimization."*

---

### Slide 18: Conclusion & Final Deliverables
- **Summary of Deliverables:**
  - Production C++17 compiler executable (`resilientc.exe`)
  - 15-page IEEE-standard final academic report (PDF & DOCX)
  - 14-page complete technical explanation guide (PDF)
  - 18-slide widescreen presentation deck (PDF & PPTX)
  - Interactive Web Studio (`http://localhost:8080`)
  - 20-test automated regression suite (100% pass rate)
- **Speaker Script:**
  > *"In conclusion, this project demonstrates that a compiler can be both mathematically rigorous and resilient. By transforming syntax errors from fatal crashes into localized repairs, we deliver a compiler suitable for modern interactive software engineering. Thank you respected faculty; I am now ready for viva voce questions."*
"""
    with open(md_filename, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Successfully generated {md_filename}!")


# =========================================================================
# MAIN EXECUTION
# =========================================================================
def main():
    print("=" * 65)
    print(" Resilient Compiler - Phase 3 Presentation Deck Generator")
    print(" Candidate: D JOSHUA DANIEL | Reg No: 24BCE0436 | VIT Vellore")
    print("=" * 65)

    pdf_out = "Resilient_Compiler_Phase3_Presentation.pdf"
    pptx_out = "Resilient_Compiler_Phase3_Presentation.pptx"
    md_out = "docs/PHASE3_PRESENTATION_SLIDES.md"

    # Build PDF (16:9 Presentation Slides)
    build_pdf_presentation(pdf_out)

    # Build PPTX (PowerPoint Deck)
    build_pptx_presentation(pptx_out)

    # Build Markdown Presenter Notes
    build_markdown_notes(md_out)

    # Copy PDF and PPTX to docs/ folder
    shutil.copy2(pdf_out, os.path.join(DOCS_DIR, pdf_out))
    shutil.copy2(pptx_out, os.path.join(DOCS_DIR, pptx_out))
    print("Copied presentation deliverables to docs/ directory!")

    print("=" * 65)
    print(" ALL PRESENTATION DELIVERABLES GENERATED SUCCESSFULLY!")
    print(f" 1. PDF Presentation  : {pdf_out}")
    print(f" 2. PowerPoint PPTX   : {pptx_out}")
    print(f" 3. Speaker Notes MD  : {md_out}")
    print(f" 4. Docs Directory    : docs/{pdf_out} & docs/{pptx_out}")
    print("=" * 65)


if __name__ == "__main__":
    main()
