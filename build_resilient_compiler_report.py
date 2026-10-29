import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    Image as RLImage, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

PAGE_WIDTH, PAGE_HEIGHT = A4
BORDER_MARGIN = 36
USABLE_WIDTH = PAGE_WIDTH - 2 * 54  # 487.27 pt

if os.path.exists('C:/Windows/Fonts/consola.ttf'):
    pdfmetrics.registerFont(TTFont('Consolas', 'C:/Windows/Fonts/consola.ttf'))
if os.path.exists('C:/Windows/Fonts/consolab.ttf'):
    pdfmetrics.registerFont(TTFont('Consolas-Bold', 'C:/Windows/Fonts/consolab.ttf'))

class BorderNumberedCanvas(canvas.Canvas):
    """Custom canvas that draws a clean black border around every page and prints centered page numbers."""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_decorations(self, total_pages):
        self.saveState()
        # Outer border
        self.setStrokeColor(colors.black)
        self.setLineWidth(1.0)
        self.rect(BORDER_MARGIN, BORDER_MARGIN, PAGE_WIDTH - 2 * BORDER_MARGIN, PAGE_HEIGHT - 2 * BORDER_MARGIN)
        
        # Centered page number at bottom
        self.setFont("Times-Roman", 10.5)
        self.drawCentredString(PAGE_WIDTH / 2.0, 48, str(self._pageNumber))
        self.restoreState()

def build_pdf(filename="Resilient_Compiler_Project_Report.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=64
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=20,
        leading=26,
        alignment=1, # Center
        textColor=colors.black,
        spaceAfter=14
    )
    subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=15,
        leading=20,
        alignment=1,
        textColor=colors.black,
        spaceAfter=8
    )
    meta_style = ParagraphStyle(
        'CoverMeta',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=12,
        leading=20,
        alignment=1,
        textColor=colors.black
    )
    chapter_style = ParagraphStyle(
        'ChapterHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=18,
        leading=22,
        alignment=1, # Center
        textColor=colors.black,
        spaceBefore=10,
        spaceAfter=18
    )
    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=12.5,
        leading=16,
        textColor=colors.black,
        spaceBefore=12,
        spaceAfter=8
    )
    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.black,
        spaceBefore=8,
        spaceAfter=4
    )
    body_style = ParagraphStyle(
        'ReportBody',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=10,
        leading=14.5,
        textColor=colors.black,
        alignment=4, # Justified
        spaceAfter=7
    )
    bullet_style = ParagraphStyle(
        'ReportBullet',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9.5,
        leading=14,
        textColor=colors.black,
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=4
    )
    subbullet_style = ParagraphStyle(
        'ReportSubBullet',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9,
        leading=13.5,
        textColor=colors.black,
        leftIndent=28,
        firstLineIndent=-10,
        spaceAfter=3
    )
    caption_style = ParagraphStyle(
        'FigCaption',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=9,
        leading=13,
        alignment=1, # Center
        textColor=colors.black,
        spaceBefore=6,
        spaceAfter=10
    )
    font_mono = 'Consolas' if 'Consolas' in pdfmetrics.getRegisteredFontNames() else 'Courier'
    code_style = ParagraphStyle(
        'CodeSnippet',
        parent=styles['Normal'],
        fontName=font_mono,
        fontSize=8.5,
        leading=11.5,
        textColor=colors.black,
        leftIndent=12,
        spaceAfter=4
    )
    tree_code_style = ParagraphStyle(
        'TreeSnippet',
        parent=styles['Normal'],
        fontName=font_mono,
        fontSize=7.8,
        leading=10.2,
        textColor=colors.black,
        leftIndent=2,
        spaceAfter=0.5
    )
    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.5,
        leading=11,
        textColor=colors.black
    )
    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.black
    )

    story = []

    # =========================================================================
    # PAGE 1: TITLE PAGE
    # =========================================================================
    story.append(Spacer(1, 40))
    if os.path.exists('assets/vit_logo.png'):
        # 596 x 124 -> scale to width 260, height ~ 54
        story.append(RLImage('assets/vit_logo.png', width=260, height=54))
    story.append(Spacer(1, 100))
    story.append(Paragraph("COMPILER DESIGN LABORATORY", title_style))
    story.append(Paragraph("PROJECT REPORT", title_style))
    story.append(Spacer(1, 80))
    story.append(Paragraph("NAME: D JOSHUA DANIEL", meta_style))
    story.append(Spacer(1, 14))
    story.append(Paragraph("REG.NO: 24BCE0436", meta_style))
    story.append(Spacer(1, 14))
    story.append(Paragraph("SLOT: L25+L26", meta_style))
    story.append(Spacer(1, 14))
    story.append(Paragraph("FACULTY: RANJITH KUMAR S", meta_style))
    story.append(Spacer(1, 14))
    story.append(Paragraph("SUBJECT: COMPILER DESIGN LAB (BCSE307P)", meta_style))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 2: TABLE OF CONTENTS
    # =========================================================================
    story.append(Spacer(1, 30))
    story.append(Paragraph("Table of Contents", chapter_style))
    story.append(Spacer(1, 25))

    toc_items = [
        "1. Introduction",
        "2. Problem Statement",
        "3. Objectives",
        "4. Literature Survey / Background Study",
        "5. System Design",
        "6. Methodology",
        "7. Compiler Design Concepts Used",
        "8. Implementation Details",
        "9. Testing and Results",
        "10. Conclusion",
        "11. Future Enhancements",
        "12. References",
        "13. Appendix"
    ]
    toc_data = [[Paragraph(f"<font size=11><b>{item}</b></font>", body_style)] for item in toc_items]
    toc_table = Table(toc_data, colWidths=[USABLE_WIDTH], rowHeights=[26]*len(toc_items))
    toc_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 20),
    ]))
    story.append(toc_table)
    story.append(PageBreak())

    # =========================================================================
    # PAGE 3: INTRODUCTION (Overview)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("Introduction", chapter_style))
    story.append(Paragraph("1.1 Overview of Compiler Design", h1_style))
    story.append(Paragraph(
        "A compiler is a foundational software engineering system that translates high-level program source code "
        "(the source language) into an equivalent target representation (such as an intermediate representation, "
        "bytecode instructions, or native machine assembly). The classical compilation architecture is structured "
        "into discrete, pipelined, and interdependent phases that are logically organized into the Front-End, "
        "Middle-End, and Back-End modules:",
        body_style
    ))
    story.append(Paragraph("• <b>Front-End (Language-Dependent Analysis):</b>", bullet_style))
    story.append(Paragraph(
        "• <b>Lexical Analysis (Scanning):</b> Reads the raw stream of characters, removes insignificant whitespace "
        "and comments, groups characters into meaningful tokens, and records exact source coordinates (line and column numbers).",
        subbullet_style
    ))
    story.append(Paragraph(
        "• <b>Syntax Analysis (Parsing):</b> Validates token sequences against a formal context-free grammar, detects syntactic "
        "anomalies, and constructs an Abstract Syntax Tree (AST) capturing the nested hierarchical structure of the program.",
        subbullet_style
    ))
    story.append(Paragraph(
        "• <b>Semantic Analysis (Type and Scope Checking):</b> Validates static semantics across the AST, checks type compatibility "
        "for assignments and operations, resolves identifier bindings, enforces declaration before use, and manages hierarchical "
        "scoped symbol tables with lexical scope nesting.",
        subbullet_style
    ))
    story.append(Spacer(1, 8))
    story.append(Paragraph("• <b>Middle-End (Machine-Independent Transformations):</b>", bullet_style))
    story.append(Paragraph(
        "• <b>Intermediate Code Generation (ICG):</b> Converts the decorated AST into an Intermediate Representation (IR), "
        "predominantly Three-Address Code (TAC), decoupling front-end grammar peculiarities from target architecture constraints.",
        subbullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 4: INTRODUCTION (Motivation)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph(
        "• <b>Machine-Independent Code Optimization:</b> Applies systematic peephole and data-flow transformations "
        "(including constant folding, constant propagation, algebraic simplifications, redundant temporary elimination, and "
        "dead code removal) to maximize execution throughput and minimize instruction footprint without altering observable program semantics.",
        subbullet_style
    ))
    story.append(Spacer(1, 6))
    story.append(Paragraph("• <b>Back-End (Machine/Target-Dependent Synthesis):</b>", bullet_style))
    story.append(Paragraph(
        "• <b>Target Code Generation & Virtual Machine Dispatch:</b> Generates low-level target instructions or stack bytecode, "
        "allocates registers/slots, and coordinates runtime execution on a specialized virtual machine.",
        subbullet_style
    ))
    story.append(Spacer(1, 14))
    story.append(Paragraph("1.2 Motivation for the Resilient Compiler Project", h1_style))
    story.append(Paragraph(
        "Industrial compilers such as GCC, Clang/LLVM, and MSVC encompass millions of lines of code. While extremely powerful for "
        "production release builds, standard compilers are notoriously brittle during interactive development. Conventional parsers "
        "frequently operate under a strict 'fail-fast' paradigm—either terminating execution upon the very first syntax error or "
        "cascading dozens of spurious, misleading diagnostic errors downstream. This introduces developer fatigue and forces "
        "repetitive edit-compile-debug cycles.",
        body_style
    ))
    story.append(Paragraph(
        "The <b>Resilient Compiler</b> project is developed from first principles in standard <b>C++17</b> without relying on external "
        "compiler-compiler generators (such as Lex/Yacc, Flex/Bison, or ANTLR). By implementing an end-to-end, fault-tolerant compiler "
        "pipeline featuring an intelligent 1-token lookahead heuristic recovery engine, this project demonstrates that syntax errors "
        "do not have to be fatal. Instead, the compiler heals the token stream locally, completes AST generation, enforces static semantics, "
        "optimizes intermediate code, and executes the repaired program on a stack bytecode Virtual Machine (VM).",
        body_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 5: INTRODUCTION (Web Studio & Telemetry)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph(
        "Furthermore, modern language tools (such as the Microsoft Roslyn C# compiler and Rust's rustc) have demonstrated that "
        "compiler resilience is indispensable for IDE tooling, language servers, and interactive developer feedback. A resilient "
        "compiler maintains internal syntactic and semantic continuity even in the presence of incomplete or malformed code.",
        body_style
    ))
    story.append(Paragraph(
        "To bring these architectural concepts to life, the project introduces <b>Resilient Compiler Studio</b>: a full-stack, "
        "interactive developer workbench combining a lightweight Python local API server with a modern Monaco-powered web interface. "
        "The Web Studio provides side-by-side inspection of all compiler stages, real-time error recovery auditing, collapsible "
        "AST hierarchies, symbol table directories, Three-Address Code diffing, and live virtual machine console execution.",
        body_style
    ))
    story.append(Paragraph(
        "The core innovation lies in the tight coupling between academic compiler theory and practical developer ergonomics. By tracking "
        "heuristic recovery costs, calculating dynamic optimization metrics, and providing rich diagnostic feedback, the Resilient "
        "Compiler serves as both a high-performance language processor and an educational instrument for compiler engineering.",
        body_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 6: PROBLEM STATEMENT
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("Problem Statement", chapter_style))
    story.append(Paragraph("2.1 The Challenge of Fragile Parsing in Conventional Compilers", h1_style))
    story.append(Paragraph(
        "In classical compiler theory, syntactic analysis assumes that source programs adhere strictly to a specified Context-Free "
        "Grammar (CFG). When an unexpected token is encountered, conventional predictive parsers face three critical hurdles:",
        body_style
    ))
    story.append(Paragraph(
        "• <b>Catastrophic Early Termination:</b> Compilers that abort at the first syntax error require developers to repeatedly "
        "recompile their code after fixing each individual delimiter or typo, severely degrading developer productivity.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Cascading Error Cascades:</b> Naive error recovery mechanisms (such as blindly skipping tokens until a semicolon) often "
        "throw the parser into desynchronized states. A single missing closing parenthesis can generate fifty false-positive errors "
        "throughout subsequent blocks.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Downstream Pipeline Starvation:</b> In conventional architectures, syntax errors immediately halt subsequent compilation "
        "phases. As a result, semantic analysis, type verification, intermediate code generation, and optimization passes never execute, "
        "blinding developers to downstream bugs.",
        bullet_style
    ))
    story.append(Spacer(1, 10))
    story.append(Paragraph("2.2 The Resilient Compiler Solution", h1_style))
    story.append(Paragraph(
        "The Resilient Compiler project solves these fundamental challenges by designing an academically transparent, robust compiler "
        "pipeline centered on <b>intelligent, non-fatal syntax error recovery</b>. Specifically, the system:",
        body_style
    ))
    story.append(Paragraph(
        "• <b>Eliminates Cascade Failures via Lookahead Scoring:</b> Employs a context-aware 1-token lookahead heuristic scorer "
        "(<code>RecoveryScorer.h</code>) that evaluates candidate repair actions across Insertion, Deletion, and Panic Mode, selecting "
        "the minimal-cost transformation that guarantees downstream grammar synchronization.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 7: PROBLEM STATEMENT (cont.)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph(
        "• <b>Maintains Downstream AST Integrity:</b> Rather than discarding broken statements, the parser synthesizes default AST nodes "
        "(e.g., inserting default literal expressions or healing missing statement delimiters) so that a complete, valid AST hierarchy is "
        "delivered to the semantic analyzer.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Guarantees End-to-End Pipeline Execution:</b> Cleanly transformed programs proceed directly to scoped symbol table resolution, "
        "static type enforcement, Three-Address Code generation, peephole optimization, and virtual machine execution without crashing.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Produces Comprehensive Diagnostic Audits:</b> Every recovery action is logged with exact line and column coordinates, heuristic "
        "cost penalties, confidence metrics (HIGH, MEDIUM, LOW), and explicit human-readable rationales.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Delivers Real-Time Interactive Telemetry:</b> Integrates an interactive web workbench displaying visual pipeline breadcrumbs, "
        "raw vs. optimized TAC comparisons, and live VM memory stores, allowing academic evaluators to inspect every intermediate state.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 8: OBJECTIVES
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("Objectives", chapter_style))
    story.append(Paragraph(
        "The concrete, measurable academic and architectural objectives of the Resilient Compiler project are:",
        body_style
    ))
    story.append(Paragraph(
        "• <b>Manual Lexical Analyzer:</b> Implement a deterministic scanner in modern C++17 that tokenizes keywords, identifiers, "
        "integer/floating/boolean literals, relational operators, and delimiters while tracking source coordinates and stripping comments.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Predictive Recursive Descent Parser:</b> Construct an LL(1) recursive-descent parser enforcing formal operator precedence "
        "and associativity through precedence climbing.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Intelligent Multi-Strategy Error Recovery:</b> Design a centralized Recovery Manager executing three distinct recovery strategies: "
        "<br/>&nbsp;&nbsp;1. <i>Synthetic Token Insertion:</i> Heals missing delimiters (such as ')' before '{') and missing expression literals (inserting default '0' after '='). "
        "<br/>&nbsp;&nbsp;2. <i>Extraneous Token Deletion:</i> Discards redundant punctuation (such as duplicate semicolons ';;'). "
        "<br/>&nbsp;&nbsp;3. <i>Panic Mode Synchronization:</i> Synchronizes to synchronization tokens (';', '}') on illegal characters.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Polymorphic Abstract Syntax Tree (AST):</b> Formulate a strongly-typed, object-oriented AST node hierarchy in C++ representing "
        "statements, expressions, control flow (if-else, while), and declarations with null-safe visual printing.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Scoped Symbol Table Management:</b> Implement a hierarchical scope-stack symbol table supporting block-level lexical scoping, "
        "variable shadowing, identifier resolution, and duplicate declaration detection.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Static Semantic Analysis:</b> Validate variable usage prior to declaration, enforce static type compatibility across assignments, "
        "and reject illegal semantic constructs.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 9: OBJECTIVES (cont.)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph(
        "• <b>Three-Address Code (TAC) Intermediate Representation:</b> Translate validated AST nodes into linearized Three-Address Code "
        "quadruples featuring unbounded virtual temporaries (_t0, _t1, ...), symbolic labels (L0, L1, ...), and explicit branch instructions.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Multi-Pass Peephole Optimization Engine:</b> Implement sliding-window peephole optimizations including: "
        "<br/>&nbsp;&nbsp;1. <i>Constant Folding:</i> Evaluates constant arithmetic expressions at compile time. "
        "<br/>&nbsp;&nbsp;2. <i>Algebraic Simplification:</i> Eliminates neutral operators (x + 0 -> x, x * 1 -> x). "
        "<br/>&nbsp;&nbsp;3. <i>Constant Propagation:</i> Forward-substitutes known constant definitions. "
        "<br/>&nbsp;&nbsp;4. <i>Dead Code & Temporary Elimination:</i> Prunes unused temporaries and unreferenced assignments.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Stack Bytecode Virtual Machine (VM):</b> Implement a complete target bytecode instruction set (PUSH_CONST, STORE_VAR, "
        "LOAD_VAR, ADD, SUB, MUL, DIV, MOD, JUMP, JUMP_IF_ZERO, PRINT, HALT) and runtime evaluation stack.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Interactive Web Studio IDE:</b> Build a responsive developer workbench featuring Monaco Editor integration, live pipeline "
        "breadcrumbs, recovery audit cards, AST visualization, side-by-side TAC diffing, and VM console streaming.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>100% Automated Test Suite Verification:</b> Construct an automated test runner verifying 14 distinct test programs "
        "comprising 68 individual assertions covering clean compilation, multi-error recoveries, semantic rejections, optimizations, "
        "and end-to-end VM execution loops.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 10: LITERATURE SURVEY / BACKGROUND STUDY
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("Literature Survey / Background Study", chapter_style))
    story.append(Paragraph("4.1 Classical Compiler Theory", h1_style))
    story.append(Paragraph(
        "The conceptual foundation of the Resilient Compiler draws from seminal literature in compiler design and formal language theory:",
        body_style
    ))
    story.append(Paragraph(
        "• <b>Aho, Lam, Sethi, and Ullman (2006) (Compilers: Principles, Techniques, and Tools, 2nd Edition):</b> "
        "Establishes the canonical front-to-back pipeline, LL(1) predictive recursive-descent parsing models, syntax-directed translation, "
        "and Three-Address Code generation models.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Cooper and Torczon (2011) (Engineering a Compiler, 2nd Edition):</b> "
        "Emphasizes the pivotal role of intermediate representations in decoupling source grammar analysis from target machine architecture, "
        "and details peephole and basic-block local optimization algorithms.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Muchnick (1997) (Advanced Compiler Design and Implementation):</b> "
        "Provides comprehensive formalisms for control-flow graphs, constant propagation lattices, dead-code elimination algorithms, and "
        "virtual machine execution environments.",
        bullet_style
    ))
    story.append(Spacer(1, 10))
    story.append(Paragraph("4.2 Syntax Error Recovery Models in Modern Compilers", h1_style))
    story.append(Paragraph(
        "Early parsing literature relied heavily on global minimum-distance error correction (Aho and Peterson, 1972), which proved computationally "
        "prohibitive for interactive compilation due to $O(n^3)$ cubic time complexity. Practical implementations shifted toward local heuristic recovery:",
        body_style
    ))
    story.append(Paragraph(
        "• <b>Wirth (1976) Panic Mode Recovery:</b> Synchronizes by discarding input tokens until a synchronizing delimiter (such as a semicolon "
        "or closing brace) is reached. While reliable, pure panic mode discards entire statements, destroying valuable semantic context.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Modern Resilient Compilers (Roslyn & Rustc):</b> Contemporary language infrastructure utilizes cost-based local token repair "
        "and green-tree syntax models that allow the parser to continue AST construction in IDE contexts.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 11: LITERATURE SURVEY (Peephole & IR)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("4.3 Intermediate Representations & Bytecode Virtual Machines", h1_style))
    story.append(Paragraph(
        "Three-Address Code (TAC) represents an Abstract Syntax Tree as a linearized sequence of instructions where each statement has at most "
        "one operator and at most three operands (two sources and one destination). By linearizing nested tree expressions into explicit "
        "quadruples with temporaries, TAC provides an ideal substrate for machine-independent code optimization.",
        body_style
    ))
    story.append(Paragraph(
        "Peephole optimization was formally introduced by W. M. McKeeman (1965) as a technique that examines a sliding window of target or "
        "intermediate instructions and substitutes shorter, faster, or simpler instruction patterns. In the Resilient Compiler, the optimizer "
        "iterates over the TAC list until reaching a fixed point where no further algebraic or constant reductions are possible.",
        body_style
    ))
    story.append(Spacer(1, 12))
    story.append(Paragraph("4.4 Virtual Machine Execution Environments", h1_style))
    story.append(Paragraph(
        "Target execution is achieved using a Stack Bytecode Virtual Machine. Unlike register-based architectures that necessitate complex "
        "graph-coloring register allocation algorithms, stack machines execute arithmetic operations by popping operands from an evaluation "
        "stack and pushing results back. This architecture provides high execution portability and direct traceability back to TAC instructions.",
        body_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 12: SYSTEM DESIGN (Architecture)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("System Design", chapter_style))
    story.append(Paragraph("5.1 System Architecture", h1_style))
    story.append(Paragraph(
        "The Resilient Compiler operates as a strictly staged pipeline where each phase consumes data structures produced by the preceding "
        "phase. The core engine is implemented in standard C++17 and seamlessly interfaces with a local Python HTTP server and modern Web Studio IDE.",
        body_style
    ))
    story.append(Spacer(1, 6))
    if os.path.exists('assets/fig_sys_arch.png'):
        story.append(RLImage('assets/fig_sys_arch.png', width=470, height=195))
        story.append(Paragraph("Figure 5.1: High-level architectural pipeline of the Resilient Compiler system.", caption_style))
    story.append(Paragraph(
        "The pipeline data flow is formally expressed as:",
        body_style
    ))
    arch_flow = (
        "<b>Source Code (.rc / .txt)</b> &rarr; <i>Lexer (Lexer.cpp)</i> &rarr; <b>Token Stream</b><br/>"
        "&rarr; <i>Resilient Parser & Recovery Manager</i> &rarr; <b>Polymorphic AST</b><br/>"
        "&rarr; <i>Semantic Analyzer & Scope Stack</i> &rarr; <b>Validated Symbol Table</b><br/>"
        "&rarr; <i>TAC Generator (TACGenerator.cpp)</i> &rarr; <b>Raw Three-Address Code</b><br/>"
        "&rarr; <i>Peephole Optimizer (TACOptimizer.cpp)</i> &rarr; <b>Optimized TAC</b><br/>"
        "&rarr; <i>Target Bytecode Emitter & VM (VirtualMachine.cpp)</i> &rarr; <b>Program Output & Variable Store</b>"
    )
    story.append(Paragraph(arch_flow, bullet_style))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 13: SYSTEM DESIGN (Module Deconstruction)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("5.2 Module Deconstruction & Responsibilities", h1_style))
    story.append(Paragraph(
        "The codebase is strictly structured into modular components, isolating concerns across lexical scanning, recovery heuristics, "
        "semantic checking, intermediate transformations, and execution:",
        body_style
    ))
    story.append(Paragraph(
        "• <b><code>Token.h</code>:</b> Defines <code>TokenType</code> enumerations (keywords, operators, literals, delimiters), "
        "token structures storing exact line and column coordinates, and lexeme conversion helpers.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>Lexer.h / Lexer.cpp</code>:</b> Implements character-level streaming, whitespace stripping, single-line (<code>//</code>) "
        "and block comment (<code>/* ... */</code>) filtering, identifier regex matching, and coordinate tracking.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>RecoveryTypes.h</code>:</b> Defines recovery actions (<code>INSERTION</code>, <code>DELETION</code>, <code>PANIC_MODE</code>), "
        "confidence levels (<code>HIGH</code>, <code>MEDIUM</code>, <code>LOW</code>), and diagnostic record structures.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>RecoveryScorer.h / RecoveryScorer.cpp</code>:</b> Evaluates 1-token lookahead candidates using cost-based heuristics to select "
        "the optimal repair action that restores parser synchronization.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>RecoveryManager.h / RecoveryManager.cpp</code>:</b> Coordinates recovery execution during parsing, maintains recovery "
        "audit logs, and generates formatted diagnostic summaries.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>AST.h / AST.cpp</code>:</b> Implements strongly-typed polymorphic C++ AST nodes (<code>ProgramNode</code>, <code>VarDeclNode</code>, "
        "<code>AssignNode</code>, <code>BinaryOpNode</code>, <code>IfNode</code>, <code>WhileNode</code>, <code>PrintNode</code>).",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>Parser.h / Parser.cpp</code>:</b> Executes predictive recursive-descent parsing with non-fatal syntax recovery hooks, precedence "
        "climbing, and AST subtree construction.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 14: SYSTEM DESIGN (Module Deconstruction cont.)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph(
        "• <b><code>SymbolTable.h / SymbolTable.cpp</code>:</b> Manages hierarchical scope frames, variable symbol insertion, type tracking, "
        "and nested lexical scope lookup with shadowing support.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>SemanticAnalyzer.h / SemanticAnalyzer.cpp</code>:</b> Traverses the AST, verifies that variables are declared before use, "
        "enforces type compatibility, and rejects duplicate identifiers in the same scope.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>TAC.h / TACGenerator.h / TACGenerator.cpp</code>:</b> Emits linearized Three-Address Code quadruples with virtual "
        "temporaries (<code>_t0, _t1</code>) and branch labels (<code>L0, L1</code>).",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>TACOptimizer.h / TACOptimizer.cpp</code>:</b> Multi-pass peephole optimizer executing constant folding, algebraic "
        "simplifications, constant propagation, and dead code elimination.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>Bytecode.h / VirtualMachine.h / VirtualMachine.cpp</code>:</b> Implements stack bytecode instruction compilation and "
        "a virtual machine runtime executing bytecode with a runtime value stack.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>main.cpp</code>:</b> CLI driver supporting file compilation, token dumps, AST printing, recovery audits, and interactive modes.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>server.py</code>:</b> Local Python HTTP server (zero external dependencies) providing REST API endpoints (<code>/api/compile</code>, "
        "<code>/api/status</code>, <code>/api/tests</code>) connecting the Web IDE to <code>resilientc.exe</code>.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b><code>web/ (index.html, style.css, script.js)</code>:</b> Interactive developer workbench featuring Monaco Editor, live pipeline "
        "breadcrumbs, recovery dashboards, TAC diffing, and VM output.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 15: METHODOLOGY
    # =========================================================================
    story.append(Spacer(1, 14))
    story.append(Paragraph("6. Methodology", chapter_style))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceBefore=4, spaceAfter=12))
    story.append(Paragraph("6.1 Staged Architectural Pipeline Approach", h1_style))
    story.append(Paragraph(
        "The Resilient Compiler adopts a strictly staged, unidirectional compilation architecture designed to isolate domain "
        "responsibilities and guarantee deterministic state transformations. Each phase operates as a dedicated processor "
        "consuming validated data structures from the prior stage, preventing cascading state corruption.",
        body_style
    ))
    story.append(Paragraph("6.2 Detailed Multi-Phase Execution Model", h1_style))
    story.append(Paragraph(
        "• <b>1. Source Ingestion & Buffer Management:</b> The complete source file is read into a contiguous memory buffer, enabling "
        "fast forward scanning, character peeking, and precise line/column offset calculations without I/O bottlenecks.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>2. Lexical Tokenization:</b> The scanner sequentially evaluates characters using deterministic character matching, grouping "
        "lexemes into typed tokens while filtering whitespace and comments.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>3. Resilient Predictive Parsing:</b> The parser implements grammar productions as recursive C++ functions. When an unexpected "
        "token violates the grammar, the Recovery Manager inspects lookahead tokens, evaluates repair strategies, and applies the lowest-cost "
        "correction before continuing parse traversal.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>4. AST Construction:</b> The parser constructs a clean, strongly-typed AST where parent nodes denote operations and leaf "
        "nodes represent literals or identifier references.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>5. Scoped Semantic Validation:</b> A tree-walker traverses the AST, pushing new scope frames upon entering <code>{</code> blocks "
        "and popping them upon exit. Variable definitions, usage types, and scope depths are strictly verified.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>6. TAC Linearization & Optimization:</b> Syntax-directed translation converts the AST into Three-Address Code. The peephole optimizer "
        "iteratively applies constant folding and propagation until reaching a fixed point.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>7. Bytecode Synthesis & VM Execution:</b> Optimized TAC is compiled into target stack bytecode and executed on the Virtual Machine.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 16: CONCEPTS - LEXICAL ANALYSIS
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("Compiler Design Concepts Used", chapter_style))
    story.append(Paragraph("7.1 Lexical Analysis & Finite State Tokenization", h1_style))
    story.append(Paragraph(
        "• <b>Definition:</b> The transformation of an input character stream into a sequence of atomic, categorized semantic units called tokens.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Implementation:</b> Implemented in <code>Lexer.cpp</code> as a deterministic scanner tracking line and column coordinates.",
        bullet_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_tokens.png'):
        story.append(RLImage('assets/fig_tokens.png', width=470, height=185))
        story.append(Paragraph("Figure 7.1: Token stream generated by the Resilient lexical analyzer and displayed in the Web Studio.", caption_style))
    story.append(Paragraph(
        "• <b>Example:</b> Source statement <code>int x = 10;</code> yields the following token sequence:<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;<code>KEYWORD_INT, IDENTIFIER('x'), ASSIGN('='), NUMBER('10'), SEMICOLON(';'), EOF</code>",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 17: CONCEPTS - PARSER & SYMBOL TABLE
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("7.2 Context-Free Grammars & Predictive Recursive Descent Parsing", h1_style))
    story.append(Paragraph(
        "• <b>Definition:</b> A top-down parsing technique where grammar non-terminals are implemented as mutually recursive C++ functions.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Precedence Climbing:</b> Arithmetic and relational operators are organized hierarchically to enforce standard precedence: "
        "multiplication, division, and modulo bind tighter than addition and subtraction, which bind tighter than comparison operators.",
        bullet_style
    ))
    story.append(Spacer(1, 8))
    story.append(Paragraph("7.3 Scoped Symbol Table Management & Static Semantics", h1_style))
    story.append(Paragraph(
        "• <b>Definition:</b> A data structure tracking identifier attributes (symbol name, data type, declaration coordinate, and scope depth).",
        bullet_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_symbol_table.png'):
        story.append(RLImage('assets/fig_symbol_table.png', width=470, height=185))
        story.append(Paragraph("Figure 7.3: Scoped symbol table view showing declared identifiers and scope nesting levels.", caption_style))
    story.append(Paragraph(
        "• <b>Scope Model:</b> Implemented as a stack of hash tables with parent scope links. Entering a <code>{</code> pushes a new scope level; "
        "exiting a <code>}</code> pops the scope, properly supporting variable shadowing and lexical block scoping.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 18: CONCEPTS - ERROR RECOVERY & AST
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("7.4 Intelligent Syntax Error Recovery Mechanics", h1_style))
    story.append(Paragraph(
        "When a grammar mismatch occurs, the parser queries <code>RecoveryScorer</code> to determine the optimal recovery strategy based on a "
        "cost penalty formula: <code>Cost = BaseCost(Action) + LookaheadPenalty</code>.",
        body_style
    ))
    story.append(Paragraph(
        "• <b>Virtual Insertion (Cost 1-2, Confidence: HIGH):</b> If inserting an expected token (e.g. <code>)</code>, <code>;</code>, or literal <code>0</code>) "
        "allows the lookahead token to match a valid grammar follow-set, the token is synthesized without consuming input.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Token Deletion (Cost 1-2, Confidence: HIGH):</b> If skipping the current anomalous token (such as a redundant duplicate semicolon <code>;;</code>) "
        "aligns the stream with the expected grammar production, the token is discarded.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Panic Mode (Cost 5, Confidence: LOW):</b> If single-token repair cannot heal the stream, tokens are discarded until reaching a statement "
        "boundary (<code>;</code> or <code>}</code>), preventing cascading error floods.",
        bullet_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_ast.png'):
        story.append(RLImage('assets/fig_ast.png', width=470, height=195))
        story.append(Paragraph("Figure 7.4: Abstract Syntax Tree (AST) visualization representing parsed expression hierarchy.", caption_style))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 19: CONCEPTS - TAC & PEEPHOLE OPTIMIZATION
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("7.5 Three-Address Code (TAC) Intermediate Representation", h1_style))
    story.append(Paragraph(
        "Three-Address Code linearizes the AST into explicit quadruples containing an operation, destination operand, and up to two source operands. "
        "Control flow is expressed using conditional jumps (<code>ifFalse goto</code>) and unconditional branches (<code>goto</code>).",
        body_style
    ))
    story.append(Paragraph("• <b>Example While Loop Translation:</b>", bullet_style))
    tac_sample = [
        "L0: _t0 = i < 10",
        "    ifFalse _t0 goto L1",
        "    _t1 = sum + i",
        "    sum = _t1",
        "    _t2 = i + 1",
        "    i = _t2",
        "    goto L0",
        "L1: print sum"
    ]
    for ts in tac_sample:
        story.append(Paragraph(f"&nbsp;&nbsp;&nbsp;&nbsp;<code>{ts}</code>", code_style))
    story.append(Spacer(1, 10))
    story.append(Paragraph("7.6 Peephole Optimization Passes", h1_style))
    story.append(Paragraph(
        "• <b>Constant Folding:</b> Evaluates constant operations at compile time (e.g., <code>_t0 = 10 + 5 &rarr; _t0 = 15</code>).",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Algebraic Simplification:</b> Replaces algebraic identity and annihilator expressions:<br/>"
        "&nbsp;&nbsp;<code>x + 0 &rarr; x</code>, &nbsp;<code>x - 0 &rarr; x</code>, &nbsp;<code>x * 1 &rarr; x</code>, &nbsp;<code>x * 0 &rarr; 0</code>.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Constant Propagation:</b> Forward-substitutes known constant values to downstream uses within basic blocks.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Dead Code Elimination:</b> Eliminates unreferenced temporary stores and unreachable statements.",
        bullet_style
    ))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "<i>Note on Multi-Pass Transformations:</i> In iterative peephole optimization, an individual TAC instruction can be "
        "successively transformed across multiple passes (e.g., constant folded, propagated to a downstream operand, and subsequently "
        "pruned as dead code). Consequently, the cumulative count of pass operations exceeds the net reduction in instruction count.",
        caption_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 20: CONCEPTS - VIRTUAL MACHINE
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("7.7 Stack Bytecode Target Code & Virtual Machine Architecture", h1_style))
    story.append(Paragraph(
        "The compiler targets a lightweight, stack-based bytecode virtual machine. The virtual machine maintains an evaluation operand stack, "
        "an instruction program counter, and an environment memory map for runtime variables.",
        body_style
    ))
    story.append(Paragraph("• <b>Supported Bytecode Instruction Set:</b>", bullet_style))
    vm_insts = [
        "PUSH_CONST &lt;val&gt; : Pushes a numeric literal onto the evaluation stack.",
        "LOAD_VAR &lt;name&gt;   : Loads the value of variable &lt;name&gt; and pushes it onto the stack.",
        "STORE_VAR &lt;name&gt;  : Pops top of stack and assigns it to variable &lt;name&gt; in memory.",
        "ADD, SUB, MUL, DIV : Pops two operands, computes arithmetic result, and pushes result.",
        "MOD                : Computes integer modulo on the top two evaluation stack values.",
        "EQ, NE, LT, GT, LE : Pops two operands, evaluates relational comparison (0 or 1).",
        "JUMP &lt;target&gt;     : Unconditional jump to target bytecode address.",
        "JUMP_IF_ZERO &lt;tgt&gt;: Pops condition; if zero (false), jumps to target address.",
        "PRINT              : Pops value from stack and prints to execution output stream.",
        "HALT               : Terminates virtual machine execution cleanly."
    ]
    for vi in vm_insts:
        story.append(Paragraph(f"&nbsp;&nbsp;• <code>{vi}</code>", bullet_style))
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "The virtual machine tracks total executed bytecode cycles and prints the final state of all variables in memory upon completion.",
        body_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 21: IMPLEMENTATION DETAILS (Toolchain & Standards)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("Implementation Details", chapter_style))
    story.append(Paragraph("8.1 Toolchain and Standards", h1_style))
    story.append(Paragraph(
        "The build process is verified from the developer terminal using MinGW-w64 GCC compiling modern C++17 with strict warning flags. "
        "The clean compilation with zero warnings confirms software engineering robustness.",
        body_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_build_verification.png'):
        story.append(RLImage('assets/fig_build_verification.png', width=470, height=185))
        story.append(Paragraph("Figure 8.1: Build verification in the terminal compiling all C++17 modules into resilientc.exe.", caption_style))
    story.append(Paragraph(
        "• <b>Core Compiler:</b> Modern C++ (ISO/IEC 14882:2017 C++17 standard).",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>C++ Compiler:</b> MinGW-w64 GCC 13.2.0 / MSVC (<code>-std=c++17 -Wall -Wextra -O2</code>).",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Web IDE Stack:</b> HTML5, CSS3 (responsive dark developer theme), Vanilla JavaScript (ES6+), Monaco Editor.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Local Server Bridge:</b> Python 3.10+ Standard Library (<code>http.server</code>, <code>subprocess</code>).",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 22: IMPLEMENTATION DETAILS (Project Structure & Core Modules)
    # =========================================================================
    story.append(Spacer(1, 14))
    story.append(Paragraph("8.2 Project Structure & File Layout", h1_style))
    story.append(Paragraph(
        "The project repository is cleanly organized into specialized folders separating source code, tests, examples, and the web interface:",
        body_style
    ))
    proj_tree = [
        "ResilientCompiler/",
        "+-- src/                          # Core C++17 Compiler Engine",
        "|   +-- main.cpp                  # CLI flags, test runner coordinator, interactive REPL",
        "|   +-- lexer/                    # Lexical scanner & token coordinate tracker",
        "|   |   +-- Token.h / Token.cpp   # Token definitions, line/col tracking & lexeme unions",
        "|   |   \\-- Lexer.h / Lexer.cpp   # Deterministic character stream scanner & comment stripper",
        "|   +-- parser/                   # Recursive-descent predictive parser",
        "|   |   \\-- Parser.h / Parser.cpp # LL(1) grammar productions & recovery integration",
        "|   +-- recovery/                 # Heuristic error recovery engine & lookahead scorer",
        "|   |   +-- RecoveryTypes.h       # Action (INSERT, DELETE, PANIC) & confidence enums",
        "|   |   +-- RecoveryScorer.cpp    # 1-token lookahead heuristic cost evaluation",
        "|   |   \\-- RecoveryManager.cpp   # Stream repair coordination & diagnostic audit logger",
        "|   +-- ast/                      # Strongly-typed AST node hierarchy & tree printer",
        "|   |   \\-- AST.h / AST.cpp       # Program, Statement, Expression & Literal AST nodes",
        "|   +-- semantics/                # Hierarchical scope stack & static type checker",
        "|   |   +-- SymbolTable.cpp       # Scoped symbol table frames & variable shadowing",
        "|   |   \\-- SemanticAnalyzer.cpp  # Identifier resolution, type compatibility & diagnostics",
        "|   +-- ir/                       # Three-Address Code (TAC) generator",
        "|   |   +-- TAC.h                 # Quadruple records, temporaries (_t0) & labels (L0)",
        "|   |   \\-- TACGenerator.cpp      # AST-to-TAC syntax-directed linearizing emitter",
        "|   +-- optimizer/                # Peephole optimizer (folding, propagation, dead code)",
        "|   |   \\-- TACOptimizer.cpp      # Multi-pass sliding-window algebraic & constant reductions",
        "|   \\-- vm/                       # Target stack bytecode emitter & virtual machine",
        "|       +-- Bytecode.h            # Opcode instruction set definitions",
        "|       \\-- VirtualMachine.cpp    # Stack VM dispatch loop, memory store & cycle telemetry",
        "+-- web/                          # Resilient Compiler Studio Web Interface",
        "|   +-- index.html / style.css    # Responsive dark workbench UI & Monaco integration",
        "|   \\-- script.js                 # Pipeline visualizer, AST explorer & API controller",
        "+-- examples/                     # Demonstration & algorithm programs (.txt)",
        "+-- tests/                        # 14 Automated regression test suites (.txt)",
        "+-- server.py                     # Local Python API server & compiler bridge",
        "\\-- resilientc.exe                # High-performance compiled C++17 binary"
    ]
    tree_cells = [[Paragraph(f"<font face='Consolas'>{pt}</font>", tree_code_style)] for pt in proj_tree]
    tree_box = Table(tree_cells, colWidths=[USABLE_WIDTH])
    tree_box.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.whitesmoke),
        ('BOX', (0,0), (-1,-1), 0.5, colors.grey),
        ('TOPPADDING', (0,0), (-1,-1), 0.8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.8),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(tree_box)
    story.append(Spacer(1, 8))
    story.append(Paragraph("8.3 Core Implementation Design & Algorithmic Modules", h1_style))
    story.append(Paragraph(
        "• <b>Lookahead Recovery Scoring (RecoveryScorer.cpp):</b> Computes heuristic repair costs: "
        "<i>Cost = BaseCost(Action) + FollowSetDistance(NextToken)</i>. Virtual token insertion costs 1-2, token deletion costs 1-2, "
        "and panic synchronization costs 5.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Scope Stack Resolution (SymbolTable.cpp):</b> Scopes are maintained as a linked stack of frames. Identifier lookup searches the "
        "innermost frame first and walks outward to parent scopes, enabling variable shadowing with automatic cleanup on block exit.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>TAC Quadruples (TAC.h):</b> Each intermediate instruction is stored as a tuple <i>(Opcode, Result, Arg1, Arg2)</i> with virtual "
        "temporaries and symbolic jump targets, providing a target-independent substrate for peephole optimization passes.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 23: TESTING AND RESULTS (Test Matrix)
    # =========================================================================
    story.append(Spacer(1, 16))
    story.append(Paragraph("Testing and Results", chapter_style))
    story.append(Paragraph("9.1 Test Matrix & Automated Verification", h1_style))
    story.append(Paragraph(
        "To rigorously validate correctness across every compiler phase, the automated test harness (<code>run_tests.ps1</code>) executes "
        "<b>14 comprehensive test programs comprising 68 individual assertions</b>. Each program exercises specific compiler mechanics "
        "(token stream scanning, precedence climbing, multi-strategy error recovery, scope stack frame resolution, TAC generation, "
        "constant folding optimization, and VM execution). The terminal run confirms a 100% pass rate across all 68 assertions.",
        body_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_test_runner.png'):
        story.append(RLImage('assets/fig_test_runner.png', width=470, height=195))
        story.append(Paragraph("Figure 9.1: Automated test runner output verifying all 14 test programs and 68 assertions passing successfully (100% pass rate).", caption_style))
    story.append(Spacer(1, 6))
    test_summary_data = [
        [Paragraph("<b>Component Test Suite (Mapping)</b>", table_cell_bold), Paragraph("<b>Total Assertions</b>", table_cell_bold), Paragraph("<b>Passed</b>", table_cell_bold), Paragraph("<b>Failed</b>", table_cell_bold), Paragraph("<b>Success Rate</b>", table_cell_bold)],
        [Paragraph("Lexical & Precedence Suite (Tests 01, 13)", table_cell), Paragraph("10", table_cell), Paragraph("10", table_cell), Paragraph("0", table_cell), Paragraph("100%", table_cell)],
        [Paragraph("Error Recovery & Resilience Suite (Tests 02–06)", table_cell), Paragraph("22", table_cell), Paragraph("22", table_cell), Paragraph("0", table_cell), Paragraph("100%", table_cell)],
        [Paragraph("Scoped Symbol Table & Semantics (Tests 07–10)", table_cell), Paragraph("14", table_cell), Paragraph("14", table_cell), Paragraph("0", table_cell), Paragraph("100%", table_cell)],
        [Paragraph("Intermediate Code & Optimization (Test 11)", table_cell), Paragraph("10", table_cell), Paragraph("10", table_cell), Paragraph("0", table_cell), Paragraph("100%", table_cell)],
        [Paragraph("Bytecode Virtual Machine Execution (Tests 12, 14)", table_cell), Paragraph("12", table_cell), Paragraph("12", table_cell), Paragraph("0", table_cell), Paragraph("100%", table_cell)],
        [Paragraph("<b>Total Pipeline Assertions (14 Programs)</b>", table_cell_bold), Paragraph("<b>68</b>", table_cell_bold), Paragraph("<b>68</b>", table_cell_bold), Paragraph("<b>0</b>", table_cell_bold), Paragraph("<b>100%</b>", table_cell_bold)]
    ]
    t_summary = Table(test_summary_data, colWidths=[185, 75, 75, 75, 77])
    t_summary.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
        ('BACKGROUND', (0,0), (-1,0), colors.whitesmoke),
        ('BACKGROUND', (0,-1), (-1,-1), colors.whitesmoke),
        ('ALIGN', (1,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
    ]))
    story.append(t_summary)
    story.append(PageBreak())

    # =========================================================================
    # PAGE 24: TESTING AND RESULTS (Functional Test Cases Intro)
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("9.2 Functional Test Cases", h1_style))
    story.append(Paragraph(
        "Both positive and negative test cases are systematically executed to ensure the compiler handles both valid programming "
        "constructs and invalid source anomalies with informative diagnostics rather than terminating unexpectedly.",
        body_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_error_diagnostics.png'):
        story.append(RLImage('assets/fig_error_diagnostics.png', width=470, height=195))
        story.append(Paragraph("Figure 9.2: Diagnostic output showing multi-strategy syntax recovery across 4 distinct error points.", caption_style))
    story.append(Paragraph(
        "The error demonstration program (<code>tests/05_multiple_errors.txt</code>) proves the compiler's resilience by detecting, "
        "classifying, and healing 4 distinct syntax errors in a single pass without cascading error floods.",
        body_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 25: TESTING AND RESULTS (Test Cases TC-01 to TC-08)
    # =========================================================================
    story.append(Spacer(1, 15))
    story.append(Paragraph("<b>Table 9.1: Comprehensive Functional Test Matrix (TC-01 to TC-08)</b>", h2_style))
    
    tc_data_1 = [
        [Paragraph("<b>Case ID</b>", table_cell_bold), Paragraph("<b>Category</b>", table_cell_bold), Paragraph("<b>Test Description</b>", table_cell_bold), Paragraph("<b>Expected Behavior</b>", table_cell_bold), Paragraph("<b>Actual Behavior</b>", table_cell_bold), Paragraph("<b>Status</b>", table_cell_bold)],
        [Paragraph("TC-01", table_cell), Paragraph("Lexical", table_cell), Paragraph("Scans keywords, types, identifiers, numbers", table_cell), Paragraph("Distinct tokens emitted with line/col", table_cell), Paragraph("Correct token stream generated", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-02", table_cell), Paragraph("Lexical", table_cell), Paragraph("Strips // single-line & /* */ block comments", table_cell), Paragraph("Comments removed without token emission", table_cell), Paragraph("Comments cleanly filtered", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-03", table_cell), Paragraph("Recovery", table_cell), Paragraph("Missing expression literal: int x = ;", table_cell), Paragraph("Synthesizes default literal '0'", table_cell), Paragraph("Inserted '0', valid AST built", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-04", table_cell), Paragraph("Recovery", table_cell), Paragraph("Extra semicolon: int y = 5;;", table_cell), Paragraph("Discards redundant semicolon", table_cell), Paragraph("Deleted duplicate ';', parsed cleanly", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-05", table_cell), Paragraph("Recovery", table_cell), Paragraph("Missing delimiter: if (x > 0 {", table_cell), Paragraph("Synthesizes missing ')' before '{'", table_cell), Paragraph("Inserted ')', control flow intact", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-06", table_cell), Paragraph("Recovery", table_cell), Paragraph("Multiple errors: 4 distinct errors in one file", table_cell), Paragraph("Heals all 4 points, continues parsing", table_cell), Paragraph("All 4 healed, executed on VM", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-07", table_cell), Paragraph("Recovery", table_cell), Paragraph("Illegal token in statement: @#$ anomaly", table_cell), Paragraph("Panic synchronization to next ';'", table_cell), Paragraph("Synchronized to boundary cleanly", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-08", table_cell), Paragraph("Semantic", table_cell), Paragraph("Undeclared variable: y = 10; without decl", table_cell), Paragraph("Semantic error: Undeclared variable", table_cell), Paragraph("Rejected: 'y' not declared", table_cell), Paragraph("PASS", table_cell_bold)],
    ]
    t_cases_1 = Table(tc_data_1, colWidths=[40, 52, 120, 120, 115, 40])
    t_cases_1.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
        ('BACKGROUND', (0,0), (-1,0), colors.whitesmoke),
        ('ALIGN', (0,0), (0,-1), 'CENTER'),
        ('ALIGN', (-1,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('TOPPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(t_cases_1)
    story.append(PageBreak())

    # =========================================================================
    # PAGE 26: TESTING AND RESULTS (Test Cases TC-09 to TC-16)
    # =========================================================================
    story.append(Spacer(1, 15))
    story.append(Paragraph("<b>Table 9.2: Comprehensive Functional Test Matrix (TC-09 to TC-16)</b>", h2_style))
    
    tc_data_2 = [
        [Paragraph("<b>Case ID</b>", table_cell_bold), Paragraph("<b>Category</b>", table_cell_bold), Paragraph("<b>Test Description</b>", table_cell_bold), Paragraph("<b>Expected Behavior</b>", table_cell_bold), Paragraph("<b>Actual Behavior</b>", table_cell_bold), Paragraph("<b>Status</b>", table_cell_bold)],
        [Paragraph("TC-09", table_cell), Paragraph("Semantic", table_cell), Paragraph("Duplicate declaration: int a; int a;", table_cell), Paragraph("Semantic error: Redeclaration in scope", table_cell), Paragraph("Rejected: 'a' already declared", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-10", table_cell), Paragraph("Semantic", table_cell), Paragraph("Type mismatch: assigning float to int", table_cell), Paragraph("Semantic error: Incompatible assignment", table_cell), Paragraph("Rejected: Type mismatch int/float", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-11", table_cell), Paragraph("Scoping", table_cell), Paragraph("Nested scope shadowing: inner 'x' shadows outer", table_cell), Paragraph("Inner shadows outer; restored on exit", table_cell), Paragraph("Verified scope resolution depth", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-12", table_cell), Paragraph("Optimize", table_cell), Paragraph("Constant folding: int res = 2 + 3 * 4;", table_cell), Paragraph("Folded to compile-time literal 14", table_cell), Paragraph("Folded to 14, temporaries purged", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-13", table_cell), Paragraph("Optimize", table_cell), Paragraph("Algebraic simplification: a + 0, a * 1", table_cell), Paragraph("Identity operations simplified to a", table_cell), Paragraph("Transformed to direct assignments", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-14", table_cell), Paragraph("Optimize", table_cell), Paragraph("Constant propagation: x = 10; y = x + 5;", table_cell), Paragraph("Forward-propagates 10 to yield y = 15", table_cell), Paragraph("Propagated and folded cleanly", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-15", table_cell), Paragraph("VM Exec", table_cell), Paragraph("Fibonacci iterative loop with while and print", table_cell), Paragraph("Dispatches 78 instructions, prints seq", table_cell), Paragraph("Output: 0, 1, 1, 2, 3, 5 matches", table_cell), Paragraph("PASS", table_cell_bold)],
        [Paragraph("TC-16", table_cell), Paragraph("Boundary", table_cell), Paragraph("Empty source file / whitespace only", table_cell), Paragraph("Handled cleanly with 0 statements", table_cell), Paragraph("Graceful 0-token exit", table_cell), Paragraph("PASS", table_cell_bold)],
    ]
    t_cases_2 = Table(tc_data_2, colWidths=[40, 52, 120, 120, 115, 40])
    t_cases_2.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
        ('BACKGROUND', (0,0), (-1,0), colors.whitesmoke),
        ('ALIGN', (0,0), (0,-1), 'CENTER'),
        ('ALIGN', (-1,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('TOPPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(t_cases_2)
    story.append(PageBreak())

    # =========================================================================
    # =========================================================================
    # PAGE 27: TESTING AND RESULTS (Basic Pipeline Execution)
    # =========================================================================
    story.append(Spacer(1, 16))
    story.append(Paragraph("9.3 Performance Evaluation & Optimization Telemetry", h1_style))
    story.append(Paragraph(
        "The Fibonacci algorithm program (<code>examples/fibonacci.txt</code>) is compiled through the command-line interface to "
        "demonstrate end-to-end processing across raw TAC generation, bytecode emission, and virtual machine execution. As shown in "
        "Figure 9.3, each TAC statement is emitted as a strictly valid quadruple on its own line (with dedicated temporaries and labels), "
        "and the Virtual Machine executes 34 bytecode instructions, outputting the complete sequence <b>0, 1, 1, 2, 3, 5</b>.",
        body_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_cli_basic.png'):
        story.append(RLImage('assets/fig_cli_basic.png', width=470, height=195))
        story.append(Paragraph("Figure 9.3: Command-line execution of Fibonacci algorithm showing real TAC quadruples and VM output (0, 1, 1, 2, 3, 5).", caption_style))
    story.append(Paragraph(
        "The Virtual Machine execution verifies iterative control flow, dynamic stack operand management, and runtime memory updates, "
        "reaching the final variable store: <code>count = 0, t1 = 8, t2 = 13, next = 13</code>.",
        body_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 28: TESTING AND RESULTS (Optimization Telemetry)
    # =========================================================================
    story.append(Spacer(1, 16))
    story.append(Paragraph(
        "The peephole optimization test (<code>tests/11_constant_folding.txt</code>) is executed to evaluate intermediate code reduction, "
        "constant propagation, and dead temporary removal across iterative sliding-window scans.",
        body_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_cli_opt.png'):
        story.append(RLImage('assets/fig_cli_opt.png', width=470, height=195))
        story.append(Paragraph("Figure 9.4: Command-line output showing optimization telemetry and raw vs. optimized TAC diff.", caption_style))
    story.append(Paragraph(
        "The optimizer achieved a <b>56.25% reduction in intermediate instructions</b>, shrinking the instruction sequence from 16 to 7 "
        "operations while preserving exact functional output. While 16 total transformation operations are recorded across the passes "
        "(4 constant folds, 7 propagations, 3 temporary eliminations, and 2 dead code removals), multiple operations iteratively touch "
        "and refine the same instructions before reaching a fixed point, yielding a net reduction of 9 instructions.",
        body_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 29: TESTING AND RESULTS (Web Studio Interface)
    # =========================================================================
    story.append(Spacer(1, 16))
    story.append(Paragraph("9.4 Web Studio Interface & Developer Experience", h1_style))
    story.append(Paragraph(
        "Resilient Compiler Studio provides an interactive web interface connecting directly to <code>resilientc.exe</code> through a local API server. "
        "It enables visual inspection of every compilation stage, including live error recovery cards, AST explorers, and VM console streaming.",
        body_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_web_studio.png'):
        story.append(RLImage('assets/fig_web_studio.png', width=470, height=195))
        story.append(Paragraph("Figure 9.5: Resilient Compiler Studio web interface showing code editor, status breadcrumbs, and matching VM terminal output (0, 1, 1, 2, 3, 5).", caption_style))
    story.append(Paragraph(
        "The Web Studio allows academic evaluators to select pre-configured sample programs (including the Fibonacci loop), inspect "
        "the healed token stream, examine scope entries, and verify that the virtual machine console accurately prints the sequence "
        "<code>0, 1, 1, 2, 3, 5</code> with zero runtime crashes.",
        body_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 30: TESTING AND RESULTS (Optimization Telemetry Summary)
    # =========================================================================
    story.append(Spacer(1, 14))
    story.append(Paragraph("9.5 Optimization & Execution Telemetry Summary", h1_style))
    story.append(Paragraph(
        "Optimization metrics were recorded across multiple test programs to quantify the performance and size benefits of the peephole optimizer. "
        "A single instruction can be transformed sequentially across passes before elimination, yielding high net instruction savings:",
        body_style
    ))
    story.append(Spacer(1, 4))
    if os.path.exists('assets/fig_telemetry_card.png'):
        story.append(RLImage('assets/fig_telemetry_card.png', width=470, height=160))
        story.append(Paragraph("Figure 9.6: Optimization telemetry card summarizing instruction savings and multi-pass transformation breakdown.", caption_style))
    story.append(Spacer(1, 4))
    bench_data = [
        [Paragraph("<b>Program File</b>", table_cell_bold), Paragraph("<b>Initial TAC</b>", table_cell_bold), Paragraph("<b>Optimized TAC</b>", table_cell_bold), Paragraph("<b>Instructions Saved</b>", table_cell_bold), Paragraph("<b>Reduction %</b>", table_cell_bold), Paragraph("<b>Execution Time</b>", table_cell_bold)],
        [Paragraph("examples/fibonacci.txt", table_cell), Paragraph("24", table_cell), Paragraph("18", table_cell), Paragraph("6", table_cell), Paragraph("25.00%", table_cell), Paragraph("1.8 ms", table_cell)],
        [Paragraph("tests/11_constant_folding.txt", table_cell), Paragraph("16", table_cell), Paragraph("7", table_cell), Paragraph("9", table_cell), Paragraph("56.25%", table_cell), Paragraph("1.2 ms", table_cell)],
        [Paragraph("examples/arithmetic_demo.txt", table_cell), Paragraph("20", table_cell), Paragraph("12", table_cell), Paragraph("8", table_cell), Paragraph("40.00%", table_cell), Paragraph("1.4 ms", table_cell)],
        [Paragraph("tests/12_end_to_end_exec.txt", table_cell), Paragraph("22", table_cell), Paragraph("16", table_cell), Paragraph("6", table_cell), Paragraph("27.27%", table_cell), Paragraph("1.6 ms", table_cell)],
    ]
    t_bench = Table(bench_data, colWidths=[140, 65, 75, 75, 65, 67])
    t_bench.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
        ('BACKGROUND', (0,0), (-1,0), colors.whitesmoke),
        ('ALIGN', (1,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
    ]))
    story.append(t_bench)
    story.append(PageBreak())

    # =========================================================================
    # PAGE 31: CONCLUSION
    # =========================================================================
    story.append(Spacer(1, 16))
    story.append(Paragraph("Conclusion", chapter_style))
    story.append(Paragraph(
        "The <b>Resilient Compiler with Intelligent Error Recovery</b> project successfully achieves all planned academic, theoretical, "
        "and architectural objectives across every compiler phase. Developed from first principles in standard C++17:",
        body_style
    ))
    story.append(Paragraph(
        "• <b>Complete, Modular Pipeline:</b> Implements a transparent, fully functional compiler pipeline spanning lexical scanning, "
        "recursive-descent parsing, polymorphic AST construction, scoped semantic analysis, Three-Address Code generation, peephole "
        "optimization, and stack bytecode virtual machine execution.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Intelligent Non-Fatal Error Recovery:</b> Overcomes the brittle fail-fast limitation of conventional parsers by introducing a "
        "cost-based 1-token lookahead heuristic scorer executing Virtual Insertion, Token Deletion, and Panic Mode synchronization.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Downstream Continuity:</b> Repaired syntax errors do not starve subsequent phases; valid ASTs are constructed, semantic checks "
        "verify symbol safety, and executable bytecode runs successfully on the virtual machine.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Effective Intermediate Optimization:</b> Multi-pass peephole optimizations achieve between 25% and 56% code size reduction "
        "through arithmetic constant folding, algebraic simplification, and constant propagation.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Interactive Web Studio Workbench:</b> Delivers an intuitive Monaco-based developer IDE allowing step-by-step pipeline "
        "inspection, side-by-side TAC diffing, and live VM terminal execution.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Rigorous Verification:</b> The codebase compiles with zero warnings under <code>-Wall -Wextra</code> and achieves a 100% "
        "pass rate across all 14 automated test programs (68 total assertions verified).",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 32: FUTURE ENHANCEMENTS
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("Future Enhancements", chapter_style))
    story.append(Paragraph(
        "The following extensions represent valuable research and engineering directions for future project iterations:",
        body_style
    ))
    story.append(Paragraph(
        "• <b>Static Single Assignment (SSA) Form:</b> Transitioning from linear Three-Address Code to an explicit SSA control-flow graph (CFG) "
        "with $\\phi$-functions, enabling advanced global optimizations such as Sparse Conditional Constant Propagation (SCCP) and Global Common "
        "Subexpression Elimination (GCSE).",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Array & Composite Data Types:</b> Adding fixed-size and dynamic one-dimensional and multi-dimensional array declarations "
        "(<code>int arr[10];</code>) with intermediate runtime bounds-checking in TAC instructions.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>User-Defined Functions & Activation Records:</b> Implementing procedure declarations, formal parameter passing, return value handling, "
        "call stack frames, and recursion on the virtual machine.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Hardware Architecture Back-Ends:</b> Developing target assembly emitters translating optimized Three-Address Code directly "
        "into native RISC-V (RV32I/RV64I) or x86-64 machine instructions with linear scan register allocation.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Language Server Protocol (LSP) Server:</b> Packaging the resilient compiler engine into a standards-compliant Language Server "
        "Protocol (LSP) daemon, enabling live diagnostic underlines, autocomplete, and hover documentation inside Visual Studio Code.",
        bullet_style
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 33: REFERENCES
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("References", chapter_style))
    story.append(Spacer(1, 10))
    references = [
        "Aho, A. V., Lam, M. S., Sethi, R., & Ullman, J. D. (2006). <i>Compilers: Principles, Techniques, and Tools</i> (2nd ed.). Boston, MA: Addison-Wesley. (The Dragon Book).",
        "Cooper, K. D., & Torczon, L. (2011). <i>Engineering a Compiler</i> (2nd ed.). Burlington, MA: Morgan Kaufmann.",
        "Muchnick, S. S. (1997). <i>Advanced Compiler Design and Implementation</i>. San Francisco, CA: Morgan Kaufmann.",
        "McKeeman, W. M. (1965). Peephole Optimization. <i>Communications of the ACM</i>, 8(7), 443–444.",
        "Wirth, N. (1976). <i>Algorithms + Data Structures = Programs</i>. Englewood Cliffs, NJ: Prentice-Hall.",
        "ISO/IEC 14882:2017. (2017). <i>Information technology — Programming languages — C++</i>. International Organization for Standardization.",
        "Röhrich, J. (1980). Methods for the automatic construction of error correcting parsers. <i>Acta Informatica</i>, 13(2), 115–139.",
        "Microsoft Corporation. (2015). <i>The .NET Compiler Platform ('Roslyn') Architecture and Error Recovery Strategies</i>.",
        "The Rust Project Developers. (2023). <i>The Rustc Diagnostic & Syntax Recovery Guide</i>. Rust Compiler Development Guide."
    ]
    for ref in references:
        story.append(Paragraph(f"• {ref}", bullet_style))
        story.append(Spacer(1, 6))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 34: APPENDIX
    # =========================================================================
    story.append(Spacer(1, 20))
    story.append(Paragraph("Appendix", chapter_style))
    story.append(Paragraph("Appendix A: Formal Grammar of the Resilient Language (EBNF)", h1_style))
    
    ebnf_rules = [
        "program         ::= statement* EOF ;",
        "statement       ::= var_declaration",
        "                  | assignment",
        "                  | if_statement",
        "                  | while_statement",
        "                  | print_statement",
        "                  | block ;",
        "var_declaration ::= type IDENTIFIER ( '=' expression )? ';' ;",
        "type            ::= 'int' | 'float' | 'bool' ;",
        "assignment      ::= IDENTIFIER '=' expression ';' ;",
        "if_statement    ::= 'if' '(' condition ')' statement ( 'else' statement )? ;",
        "while_statement ::= 'while' '(' condition ')' statement ;",
        "print_statement ::= 'print' expression ';' ;",
        "block           ::= '{' statement* '}' ;",
        "condition       ::= expression ( ( '<' | '>' | '<=' | '>=' | '==' | '!=' ) expression )? ;",
        "expression      ::= term ( ( '+' | '-' ) term )* ;",
        "term            ::= factor ( ( '*' | '/' | '%' ) factor )* ;",
        "factor          ::= NUMBER",
        "                  | FLOAT_LITERAL",
        "                  | BOOLEAN_LITERAL",
        "                  | IDENTIFIER",
        "                  | '(' expression ')'",
        "                  | ( '+' | '-' | '!' ) factor ;"
    ]
    for rule in ebnf_rules:
        story.append(Paragraph(f"<code>{rule}</code>", code_style))
    
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "<i>Note: All syntax error recovery transformations operate dynamically on this grammar specification, preserving formal semantic constraints.</i>",
        caption_style
    ))

    # Build the document
    doc.build(story, canvasmaker=BorderNumberedCanvas)
    print(f"Report successfully compiled to {filename}")

if __name__ == "__main__":
    build_pdf()
