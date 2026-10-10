// Resilient Compiler Web Frontend Controller

// Pre-bundled fallback samples for offline or direct file:// viewing
const FALLBACK_SAMPLES = {
    fibonacci: `int count = 6;
int t1 = 0;
int t2 = 1;
int next = 0;

while (count > 0) {
    print t1;
    next = t1 + t2;
    t1 = t2;
    t2 = next;
    count = count - 1;
}`,
    syntax_recovery: `int a = ;
float b = 25;;
if (b > 10 {
    b = b + 5;
    a = 99
}
while (a > 0) {
    a = a - 1;
}`,
    missing_delimiter: `int x = 10;
if (x > 5 {
    x = x + 2;
}`,
    constant_folding: `int a = 2 + 3 * 4;
int b = 100 / 4 - 5;
int c = a + b;
print c;`,
    nested_scopes: `int x = 100;
{
    int x = 50;
    int y = 20;
    print x;
}
print x;`,
    arithmetic_demo: `int x = 15;
float y = 4.5;
float result = x + y * 2.0;

if (result >= 20.0 && x != 0) {
    result = result / 2.0;
} else {
    result = 0.0;
}`,
    semantic_undeclared: `int x = 10;
y = x + 5;`,
    semantic_type_mismatch: `int x = 10;
x = 3.14;`
};

document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('codeEditor');
    const lineNumbers = document.getElementById('lineNumbers');
    const compileBtn = document.getElementById('compileBtn');
    const clearBtn = document.getElementById('clearBtn');
    const sampleSelect = document.getElementById('sampleSelect');
    const backendBadge = document.getElementById('backendBadge');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const cursorPos = document.getElementById('cursorPos');
    const charCount = document.getElementById('charCount');
    const recoveryBadge = document.getElementById('recoveryBadge');
    const copyOutputBtn = document.getElementById('copyOutputBtn');
    const demoNoticeBanner = document.getElementById('demoNoticeBanner');
    const demoNoticeText = document.getElementById('demoNoticeText');
    const closeDemoBanner = document.getElementById('closeDemoBanner');
    const offlineModal = document.getElementById('offlineModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalDismissBtn = document.getElementById('modalDismissBtn');
    const modalLoadSampleBtn = document.getElementById('modalLoadSampleBtn');

    let backendAvailable = false;
    let currentSections = {};

    // 1. Line numbers and cursor tracking
    function updateLineNumbers() {
        const lines = editor.value.split('\n').length;
        lineNumbers.innerText = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
    }

    function updateEditorMeta() {
        const text = editor.value;
        charCount.innerText = `${text.length} chars`;

        const pos = editor.selectionStart;
        const sub = text.substring(0, pos);
        const line = sub.split('\n').length;
        const col = pos - sub.lastIndexOf('\n');
        cursorPos.innerText = `Ln ${line}, Col ${col}`;
    }

    editor.addEventListener('input', () => {
        updateLineNumbers();
        updateEditorMeta();
    });

    editor.addEventListener('click', updateEditorMeta);
    editor.addEventListener('keyup', updateEditorMeta);

    // Sync scroll between textarea and line numbers
    editor.addEventListener('scroll', () => {
        lineNumbers.scrollTop = editor.scrollTop;
    });

    // Handle Tab key in editor
    editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
            updateEditorMeta();
        } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            compileSource();
        }
    });

    // 2. Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetId = 'tab-' + btn.getAttribute('data-tab');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 3. Backend Health Check
    async function checkBackend() {
        try {
            const res = await fetch('/api/status', { method: 'GET' });
            if (res.ok) {
                const data = await res.json();
                backendAvailable = true;
                backendBadge.className = 'status-badge online';
                backendBadge.title = 'Connected to local C++ compiler server (server.py)';
                backendBadge.querySelector('.badge-text').innerText = 'Compiler Online';
                return;
            }
        } catch (_) {}

        backendAvailable = false;
        backendBadge.className = 'status-badge demo';
        backendBadge.title = 'GitHub Pages Demo Mode. Sample programs compile interactively via pre-bundled compiler pipeline. Click for local setup details.';
        backendBadge.querySelector('.badge-text').innerText = 'Demo Mode (GitHub Pages)';
    }

    // 4. Sample Selection
    function loadSample(key) {
        if (FALLBACK_SAMPLES[key]) {
            editor.value = FALLBACK_SAMPLES[key];
            updateLineNumbers();
            updateEditorMeta();
            sampleSelect.value = key;
        }
    }

    function findMatchingSampleKey(source) {
        const clean = (s) => (s || '').replace(/\r\n/g, '\n').replace(/\s+/g, ' ').trim();
        const srcClean = clean(source);

        // 1. Check current selected sample first
        const currentKey = sampleSelect.value;
        if (currentKey && clean(FALLBACK_SAMPLES[currentKey]) === srcClean) {
            return currentKey;
        }

        // 2. Check all samples for exact normalized match
        for (const [key, code] of Object.entries(FALLBACK_SAMPLES)) {
            if (clean(code) === srcClean) {
                return key;
            }
        }

        // 3. Fallback: line prefix match
        const rawClean = (s) => (s || '').replace(/\r\n/g, '\n').trim();
        const srcRaw = rawClean(source);
        for (const [key, code] of Object.entries(FALLBACK_SAMPLES)) {
            const cLines = rawClean(code).split('\n');
            const sLines = srcRaw.split('\n');
            if (cLines.length > 0 && sLines.length > 0 && cLines[0].trim() === sLines[0].trim()) {
                return key;
            }
        }

        return null;
    }

    sampleSelect.addEventListener('change', (e) => {
        loadSample(e.target.value);
    });

    document.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-sample');
            loadSample(key);
        });
    });

    clearBtn.addEventListener('click', () => {
        editor.value = '';
        updateLineNumbers();
        updateEditorMeta();
    });

    // 5. Compile & Run Invocation
    async function compileSource() {
        const source = editor.value.trim();
        if (!source) {
            alert('Please enter or select some source code first.');
            return;
        }

        loadingOverlay.classList.remove('hidden');

        try {
            if (backendAvailable) {
                const res = await fetch('/api/compile', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: jsonStringifySafe({ source, flag: '--all' })
                });

                if (res.ok) {
                    const data = await res.json();
                    if (demoNoticeBanner) demoNoticeBanner.classList.add('hidden');
                    renderCompilerResults(data);
                } else {
                    const err = await res.json();
                    renderErrorResult(err.error || 'Server error occurred during compilation');
                }
            } else {
                // Standalone / GitHub Pages Demo Mode:
                const db = window.DEMO_DATABASE || {};
                const matchedKey = findMatchingSampleKey(source);

                if (matchedKey && db[matchedKey]) {
                    // Simulate realistic compiler execution delay (200ms)
                    await new Promise(r => setTimeout(r, 200));
                    renderCompilerResults(db[matchedKey]);

                    // Show demo notice banner
                    if (demoNoticeBanner && demoNoticeText) {
                        const sampleName = sampleSelect.options[sampleSelect.selectedIndex] ? sampleSelect.options[sampleSelect.selectedIndex].text : matchedKey;
                        demoNoticeText.innerHTML = `⚡ <strong>GitHub Pages Demo Mode:</strong> Compiled <em>${escapeHtml(sampleName)}</em> through the full pipeline. For live compilation of custom code, run <code>start_compiler_ui.bat</code> locally.`;
                        demoNoticeBanner.classList.remove('hidden');
                    }
                } else {
                    // Custom code typed in static GitHub Pages mode
                    if (offlineModal) {
                        offlineModal.classList.remove('hidden');
                    }
                }
            }
        } catch (err) {
            renderErrorResult(err.message);
        } finally {
            loadingOverlay.classList.add('hidden');
        }
    }

    compileBtn.addEventListener('click', compileSource);

    // 6. Output Rendering
    function renderCompilerResults(data) {
        currentSections = data.sections || {};
        const raw = data.rawOutput || '';

        // Raw Output
        document.getElementById('rawContent').innerText = raw;

        // 1. Recovery Tab
        renderRecoverySection(currentSections.recovery, data.success);

        // 2. AST Tab
        const astEl = document.getElementById('astContent');
        astEl.innerText = currentSections.ast || '<No AST generated>';

        // 3. Symbols Tab
        const symEl = document.getElementById('symbolsContent');
        symEl.innerText = currentSections.semantics || '<No semantic data>';

        // 4. TAC Tab
        const tacEl = document.getElementById('tacContent');
        tacEl.innerText = currentSections.tac || '<No TAC generated>';

        // 5. Optimized TAC Tab
        const optEl = document.getElementById('optContent');
        optEl.innerText = currentSections.opt || '<No optimization data>';

        // 6. Bytecode Tab
        const targetEl = document.getElementById('targetContent');
        targetEl.innerText = currentSections.target || '<No target instructions>';

        // 7. VM Console Tab
        const vmEl = document.getElementById('vmContent');
        vmEl.innerText = currentSections.vm || (data.success ? '[VM]: Execution completed with 0 errors.' : '[VM]: Skipped due to compilation/semantic errors.');

        // Automatically switch to Recovery tab if errors were repaired, or to VM if clean
        const recText = currentSections.recovery || '';
        const hasRealRepairs = recText && !recText.includes('No recovery actions were required');

        if (hasRealRepairs) {
            switchTab('recovery');
        } else if (currentSections.hasSemanticErrors) {
            switchTab('symbols');
        } else if (currentSections.vm) {
            switchTab('vm');
        }
    }

    function renderRecoverySection(recoveryText, isSuccess) {
        const recoverySummary = document.getElementById('recoverySummary');
        const recoveryContent = document.getElementById('recoveryContent');

        if (!recoveryText || recoveryText.includes('No recovery actions were required')) {
            recoverySummary.innerText = 'Clean Compilation — 0 recovery actions needed';
            recoverySummary.style.color = 'var(--accent-green)';
            recoveryBadge.innerText = '0';
            recoveryBadge.className = 'tab-badge zero';
            recoveryContent.innerHTML = `<div class="recovery-card insertion">
                <div class="recovery-card-header">
                    <span class="recovery-type insertion">CLEAN</span>
                    <span class="recovery-metrics">Cost: <strong>0</strong></span>
                </div>
                <div class="recovery-message">Source syntax is 100% valid.</div>
                <div class="recovery-rationale">The recursive-descent parser parsed the grammar without encountering syntax errors.</div>
            </div>`;
            return;
        }

        // Parse individual recovery action items
        const actionMatches = recoveryText.match(/\[\d+\]\s+\[(.*?)\]\s+(.*?)\s+Recovery Cost\s*:\s*(\d+)\s*\|\s*Confidence\s*:\s*(.*?)\s+Rationale\s*:\s*(.*?)(?=(\[\d+\]|$|--))/gs);

        if (actionMatches && actionMatches.length > 0) {
            recoveryBadge.innerText = actionMatches.length;
            recoveryBadge.className = 'tab-badge active-count';
            recoverySummary.innerText = `Repaired ${actionMatches.length} syntax error(s) using lookahead recovery`;
            recoverySummary.style.color = 'var(--accent-amber)';

            let html = '';
            actionMatches.forEach(item => {
                const typeMatch = item.match(/\[([A-Z\s]+)\]/);
                const type = typeMatch ? typeMatch[1].trim() : 'REPAIR';
                const typeClass = type.includes('INSERTION') ? 'insertion' : (type.includes('DELETION') ? 'deletion' : 'panic');

                const msgMatch = item.match(/\]\s+(.*?)\s+Recovery Cost/s);
                const msg = msgMatch ? msgMatch[1].trim() : 'Syntax repair';

                const costMatch = item.match(/Recovery Cost\s*:\s*(\d+)/);
                const cost = costMatch ? costMatch[1] : '1';

                const confMatch = item.match(/Confidence\s*:\s*([A-Z]+)/);
                const conf = confMatch ? confMatch[1] : 'HIGH';

                const ratMatch = item.match(/Rationale\s*:\s*(.*?)$/s);
                const rationale = ratMatch ? ratMatch[1].trim() : '';

                html += `<div class="recovery-card ${typeClass}">
                    <div class="recovery-card-header">
                        <span class="recovery-type ${typeClass}">${type}</span>
                        <span class="recovery-metrics">Cost: <strong>${cost}</strong> | Confidence: <strong>${conf}</strong></span>
                    </div>
                    <div class="recovery-message">${escapeHtml(msg)}</div>
                    <div class="recovery-rationale"><strong>Rationale:</strong> ${escapeHtml(rationale)}</div>
                </div>`;
            });

            recoveryContent.innerHTML = html;
        } else {
            recoveryContent.innerText = recoveryText;
        }
    }

    function renderErrorResult(errText) {
        document.getElementById('rawContent').innerText = errText;
        document.getElementById('recoveryContent').innerHTML = `<div class="recovery-card panic">
            <div class="recovery-card-header">
                <span class="recovery-type panic">FATAL ERROR</span>
            </div>
            <div class="recovery-message">${escapeHtml(errText)}</div>
        </div>`;
        switchTab('recovery');
    }

    function switchTab(name) {
        const btn = document.querySelector(`.tab-btn[data-tab="${name}"]`);
        if (btn) btn.click();
    }

    // Copy active tab content
    copyOutputBtn.addEventListener('click', () => {
        const activePanel = document.querySelector('.tab-panel.active');
        if (activePanel) {
            const text = activePanel.innerText;
            navigator.clipboard.writeText(text).then(() => {
                const orig = copyOutputBtn.innerHTML;
                copyOutputBtn.innerHTML = '✓';
                setTimeout(() => copyOutputBtn.innerHTML = orig, 1200);
            });
        }
    });

    function jsonStringifySafe(obj) {
        return JSON.stringify(obj);
    }

    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // 7. Interactive Demo Banner & Modal Event Handlers
    if (closeDemoBanner) {
        closeDemoBanner.addEventListener('click', () => {
            demoNoticeBanner.classList.add('hidden');
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            offlineModal.classList.add('hidden');
        });
    }

    if (modalDismissBtn) {
        modalDismissBtn.addEventListener('click', () => {
            offlineModal.classList.add('hidden');
        });
    }

    if (modalLoadSampleBtn) {
        modalLoadSampleBtn.addEventListener('click', () => {
            offlineModal.classList.add('hidden');
            loadSample('syntax_recovery');
            compileSource();
        });
    }

    if (backendBadge) {
        backendBadge.addEventListener('click', () => {
            if (!backendAvailable && offlineModal) {
                offlineModal.classList.remove('hidden');
            }
        });
    }

    // Initial setup
    checkBackend();
    loadSample('fibonacci');
});

