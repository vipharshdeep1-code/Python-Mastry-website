/* ============================================================
   editor.js – "Try it Yourself" widget with CodeMirror + Pyodide
   ============================================================ */

const PythonEditor = (() => {
  // --- Pyodide state ---
  let pyodide = null;
  let pyodideLoading = false;
  let pyodideReady = false;
  const pyodideCallbacks = []; // queued callbacks waiting for Pyodide

  /**
   * Load Pyodide lazily (called on first "Run" click).
   * Returns a Promise that resolves when Pyodide is ready.
   */
  function loadPyodide() {
    if (pyodideReady) return Promise.resolve(pyodide);
    if (pyodideLoading) {
      return new Promise((resolve) => pyodideCallbacks.push(resolve));
    }

    pyodideLoading = true;

    return new Promise((resolve, reject) => {
      pyodideCallbacks.push(resolve);

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.4/full/pyodide.js';
      script.onload = async () => {
        try {
          /* global loadPyodide */
          pyodide = await globalThis.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.4/full/'
          });
          pyodideReady = true;
          pyodideLoading = false;
          pyodideCallbacks.forEach((cb) => cb(pyodide));
          pyodideCallbacks.length = 0;
        } catch (err) {
          pyodideLoading = false;
          reject(err);
        }
      };
      script.onerror = () => {
        pyodideLoading = false;
        reject(new Error('Failed to load Pyodide script'));
      };
      document.head.appendChild(script);
    });
  }

  /**
   * Run Python code via Pyodide and capture stdout/stderr.
   * @param {string} code - Python source code
   * @returns {Promise<{output: string, error: string}>}
   */
  async function runPython(code) {
    const py = await loadPyodide();

    // Redirect stdout and stderr
    py.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

    let error = '';
    try {
      py.runPython(code);
    } catch (err) {
      error = err.message;
    }

    const stdout = py.runPython('sys.stdout.getvalue()');
    const stderr = py.runPython('sys.stderr.getvalue()');

    // Reset streams
    py.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);

    return {
      output: stdout || '',
      error: error || stderr || ''
    };
  }

  /**
   * Create a "Try it Yourself" widget.
   * @param {HTMLElement} container - The container element
   * @param {string} initialCode - The initial Python code
   */
  function createWidget(container, initialCode) {
    const code = initialCode.trim();

    // Build widget DOM
    container.className = 'tryit-widget';
    container.innerHTML = `
      <div class="tryit-header">
        <span>&#9998; Try it Yourself</span>
        <div class="tryit-actions">
          <button class="tryit-btn tryit-reset" title="Reset code">&#8635; Reset</button>
          <button class="tryit-btn tryit-run" title="Run code">&#9654; Run</button>
        </div>
      </div>
      <div class="tryit-editor"></div>
      <div class="tryit-output-wrapper">
        <div class="tryit-output-label">Output</div>
        <pre class="tryit-output">Click "Run" to execute the code.</pre>
      </div>
    `;

    const editorEl = container.querySelector('.tryit-editor');
    const outputEl = container.querySelector('.tryit-output');
    const runBtn = container.querySelector('.tryit-run');
    const resetBtn = container.querySelector('.tryit-reset');

    // Initialize CodeMirror
    /* global CodeMirror */
    const cm = CodeMirror(editorEl, {
      value: code,
      mode: 'python',
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      lineWrapping: true,
      viewportMargin: Infinity,
      extraKeys: {
        'Tab': (editor) => {
          editor.replaceSelection('    ', 'end');
        }
      }
    });

    // Run button
    runBtn.addEventListener('click', async () => {
      const userCode = cm.getValue();
      outputEl.className = 'tryit-output';
      outputEl.textContent = '';

      // Show loading indicator if Pyodide isn't ready
      if (!pyodideReady) {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'pyodide-loading';
        loadingDiv.innerHTML = '<div class="spinner"></div> Loading Python runtime (first run only)...';
        container.querySelector('.tryit-output-wrapper').prepend(loadingDiv);

        try {
          await loadPyodide();
        } finally {
          loadingDiv.remove();
        }
      }

      try {
        const result = await runPython(userCode);
        if (result.error) {
          outputEl.className = 'tryit-output error';
          outputEl.textContent = result.error;
        } else if (result.output) {
          outputEl.textContent = result.output;
        } else {
          outputEl.textContent = '(No output)';
        }
      } catch (err) {
        outputEl.className = 'tryit-output error';
        outputEl.textContent = 'Error: ' + err.message;
      }
    });

    // Reset button
    resetBtn.addEventListener('click', () => {
      cm.setValue(code);
      outputEl.className = 'tryit-output';
      outputEl.textContent = 'Click "Run" to execute the code.';
    });

    return cm;
  }

  // Public API
  return { createWidget, loadPyodide };
})();
