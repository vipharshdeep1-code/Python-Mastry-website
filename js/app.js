/* ============================================================
   app.js – Router, sidebar logic, markdown loading
   ============================================================ */

(() => {
  'use strict';

  // --- Lesson registry (ordered) ---
  const LESSONS = [
    { slug: 'introduction',        title: 'Introduction to Python' },
    { slug: 'working-with-python', title: 'Working with Python' },
    { slug: 'keywords',            title: 'Python Keywords' },
    { slug: 'examples',            title: 'Loop Examples' },
    { slug: 'identifiers',         title: 'Identifiers' },
    { slug: 'comments',            title: 'Comments' },
    { slug: 'variables',           title: 'Variables' },
    { slug: 'data-types',          title: 'Data Types' },
    { slug: 'operators',           title: 'Operators' },
    { slug: 'expressions',         title: 'Expressions' },
    { slug: 'statements',          title: 'Statements' },
    { slug: 'input-output',        title: 'Input and Output' },
    { slug: 'type-conversion',     title: 'Type Conversion' },
    { slug: 'debugging',           title: 'Debugging' },
  ];

  // --- DOM refs ---
  const contentEl     = document.getElementById('content');
  const sidebarEl     = document.getElementById('sidebar');
  const sidebarNav    = document.getElementById('sidebarNav');
  const prevBtn       = document.getElementById('prevBtn');
  const nextBtn       = document.getElementById('nextBtn');
  const hamburgerBtn  = document.getElementById('hamburgerBtn');
  const overlay       = document.getElementById('sidebarOverlay');

  // --- Configure marked.js ---
  /* global marked, Prism, PythonEditor */
  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  // --- Cache for fetched markdown ---
  const cache = {};

  // --- Current lesson slug ---
  let currentSlug = null;

  /**
   * Get lesson index by slug. Returns -1 if not found.
   */
  function getLessonIndex(slug) {
    return LESSONS.findIndex((l) => l.slug === slug);
  }

  /**
   * Parse the hash route. Expected: #lesson/<slug>
   */
  function parseHash() {
    const hash = location.hash.replace(/^#\/?/, '');
    if (hash.startsWith('lesson/')) {
      return hash.replace('lesson/', '');
    }
    return null;
  }

  /**
   * Update sidebar active state.
   */
  function updateSidebar(slug) {
    const links = sidebarNav.querySelectorAll('.sidebar-link');
    links.forEach((link) => {
      if (link.dataset.lesson === slug) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Update prev/next buttons.
   */
  function updatePrevNext(slug) {
    const idx = getLessonIndex(slug);

    if (idx > 0) {
      prevBtn.href = '#lesson/' + LESSONS[idx - 1].slug;
      prevBtn.textContent = '\u2190 ' + LESSONS[idx - 1].title;
      prevBtn.classList.remove('hidden');
    } else {
      prevBtn.classList.add('hidden');
    }

    if (idx < LESSONS.length - 1 && idx >= 0) {
      nextBtn.href = '#lesson/' + LESSONS[idx + 1].slug;
      nextBtn.textContent = LESSONS[idx + 1].title + ' \u2192';
      nextBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.add('hidden');
    }
  }

  /**
   * Process rendered HTML: highlight code, create TryIt widgets.
   */
  function processContent() {
    // Syntax highlight all static code blocks
    Prism.highlightAllUnder(contentEl);

    // Find "python-tryit" blocks and convert them to interactive widgets
    const codeBlocks = contentEl.querySelectorAll('code.language-python-tryit');
    codeBlocks.forEach((codeEl) => {
      const preEl = codeEl.parentElement;
      const initialCode = codeEl.textContent;

      // Replace <pre> with a widget container
      const widget = document.createElement('div');
      preEl.parentElement.replaceChild(widget, preEl);

      PythonEditor.createWidget(widget, initialCode);
    });
  }

  /**
   * Load and render a lesson by slug.
   */
  async function loadLesson(slug) {
    if (!slug) slug = LESSONS[0].slug;

    // Validate slug
    if (getLessonIndex(slug) === -1) {
      contentEl.innerHTML = `
        <div class="error-state">
          <h2>Lesson Not Found</h2>
          <p>The requested lesson "<strong>${slug}</strong>" does not exist.</p>
          <p><a href="#lesson/${LESSONS[0].slug}">Go to first lesson</a></p>
        </div>`;
      return;
    }

    currentSlug = slug;
    updateSidebar(slug);
    updatePrevNext(slug);

    // Show loading
    contentEl.innerHTML = `
      <div class="loading-placeholder">
        <div class="spinner"></div>
        <p>Loading lesson...</p>
      </div>`;

    try {
      let md;
      if (cache[slug]) {
        md = cache[slug];
      } else {
        const res = await fetch('content/' + slug + '.md');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        md = await res.text();
        cache[slug] = md;
      }

      // Parse markdown and inject
      contentEl.innerHTML = marked.parse(md);

      // Post-process
      processContent();

      // Scroll to top of content
      document.getElementById('mainContent').scrollTop = 0;
      window.scrollTo(0, 0);

      // Update page title
      const idx = getLessonIndex(slug);
      const title = idx >= 0 ? LESSONS[idx].title : 'Lesson';
      document.title = title + ' – Python Mastery';

    } catch (err) {
      contentEl.innerHTML = `
        <div class="error-state">
          <h2>Failed to Load Lesson</h2>
          <p>Could not load the lesson file. Please check your connection and try again.</p>
          <p style="font-size:0.85rem;color:#999;">${err.message}</p>
        </div>`;
    }
  }

  /**
   * Router: handle hash changes.
   */
  function onRouteChange() {
    const slug = parseHash();
    loadLesson(slug || LESSONS[0].slug);
    closeSidebar();
  }

  // --- Mobile sidebar toggle ---
  function openSidebar() {
    sidebarEl.classList.add('open');
    overlay.classList.add('show');
  }

  function closeSidebar() {
    sidebarEl.classList.remove('open');
    overlay.classList.remove('show');
  }

  hamburgerBtn.addEventListener('click', () => {
    if (sidebarEl.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener('click', closeSidebar);

  // --- Event listeners ---
  window.addEventListener('hashchange', onRouteChange);

  // --- Initialize ---
  if (!location.hash || !parseHash()) {
    location.hash = '#lesson/' + LESSONS[0].slug;
  } else {
    onRouteChange();
  }
})();
