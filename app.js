(() => {
  const root = document.documentElement;
  const guideContent = document.getElementById('guideContent');
  const guideNav = document.getElementById('guideNav');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuButton = document.getElementById('menuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const themeButton = document.getElementById('themeButton');
  const searchButton = document.getElementById('searchButton');
  const searchDialog = document.getElementById('searchDialog');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchStatus = document.getElementById('searchStatus');
  const progressBar = document.getElementById('progressBar');
  const backToTop = document.getElementById('backToTop');

  const slugify = text => {
    const slug = text.toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (!slug) return 'section';
    return /^\d/.test(slug) ? `section-${slug}` : slug;
  };

  const setMenu = open => {
    sidebar.classList.toggle('open', open);
    overlay.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    if (open) closeMenuButton.focus();
  };

  const escapeHtml = value => value.replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);

  const makeFigure = ({ src, alt, caption }) => {
    const figure = document.createElement('figure');
    figure.className = 'play-area-figure';
    const link = document.createElement('a');
    link.className = 'play-area-figure-link';
    link.href = src;
    link.target = '_blank';
    link.rel = 'noopener';
    const img = document.createElement('img');
    img.className = 'play-area-image';
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    link.append(img);
    figure.append(link);
    const figcaption = document.createElement('figcaption');
    figcaption.className = 'play-area-caption';
    figcaption.textContent = caption;
    figure.append(figcaption);
    return figure;
  };

  const insertPlayAreaFigures = () => {
    const diagrams = window.playAreaDiagrams;
    if (!diagrams) return;
    const subsectionNodes = id => {
      const heading = document.getElementById(id);
      const nodes = [];
      let node = heading?.nextElementSibling;
      while (node && !/^H[1-3]$/.test(node.tagName)) {
        nodes.push(node);
        node = node.nextElementSibling;
      }
      return nodes;
    };

    const corpPres = subsectionNodes('corporation-side').filter(node => node.tagName === 'PRE');
    corpPres[0]?.insertAdjacentElement('afterend', makeFigure({
      src: diagrams.corp,
      alt: 'Corporation table layout showing HQ, R&D, and Archives as separate server columns. Each server has a vertical column of sideways ICE extending toward the Runner.',
      caption: 'Figure 1. Each central server has its own vertical ICE column. Individual ICE cards are installed sideways; the outermost ICE is closest to the Runner and is encountered first.'
    }));
    corpPres[1]?.insertAdjacentElement('afterend', makeFigure({
      src: diagrams.remote,
      alt: 'Two remote servers, each containing one agenda or asset plus upgrades and protected by a vertical column of sideways ICE.',
      caption: 'Figure 2. A remote server contains one agenda or one asset plus any number of upgrades. Its protecting ICE forms a vertical column of sideways cards toward the Runner.'
    }));

    const runnerPre = subsectionNodes('runner-side').find(node => node.tagName === 'PRE');
    runnerPre?.insertAdjacentElement('afterend', makeFigure({
      src: diagrams.runner,
      alt: 'Runner table layout showing Stack, Identity, Heap, installed Programs, Hardware, Resources, credits, tags, counters, scored agendas, and memory units.',
      caption: 'Figure 3. The Runner rig contains programs, hardware, and resources. Grouping installed cards by type makes the game state easier to read.'
    }));
  };

  async function initialize() {
    try {
      if (guideContent.dataset.rendered !== 'true') {
        const response = await fetch('guide.md');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        if (!window.marked) throw new Error('Markdown renderer unavailable');
        guideContent.innerHTML = window.marked.parse(await response.text(), { gfm: true });
      }

      const usedIds = new Map();
      const headings = [...guideContent.querySelectorAll('h1, h2, h3')];
      headings.forEach(heading => {
        const base = slugify(heading.textContent);
        const count = usedIds.get(base) || 0;
        usedIds.set(base, count + 1);
        heading.id = count ? `${base}-${count + 1}` : base;
        heading.tabIndex = -1;
        if (heading.tagName === 'H1' && heading !== headings[0]) heading.classList.add('lesson-heading');
      });

      insertPlayAreaFigures();

      const links = headings.map(heading => {
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.className = `nav-link ${heading.tagName === 'H1' ? 'nav-lesson' : heading.tagName === 'H2' ? 'nav-section' : 'nav-subsection'}`;
        link.addEventListener('click', () => setMenu(false));
        guideNav.append(link);
        return link;
      });

      const searchable = headings.map(heading => {
        const parts = [];
        let node = heading.nextElementSibling;
        while (node && !/^H[1-3]$/.test(node.tagName)) {
          parts.push(node.textContent.trim());
          node = node.nextElementSibling;
        }
        return { id: heading.id, title: heading.textContent.trim(), body: parts.join(' ') };
      });

      searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.replaceChildren();
        if (query.length < 2) {
          searchStatus.textContent = 'Type at least two characters.';
          return;
        }
        const matches = searchable.filter(item => `${item.title} ${item.body}`.toLowerCase().includes(query)).slice(0, 24);
        searchStatus.textContent = `${matches.length} matching section${matches.length === 1 ? '' : 's'}`;
        matches.forEach(item => {
          const index = item.body.toLowerCase().indexOf(query);
          const excerpt = index >= 0 ? item.body.slice(Math.max(0, index - 80), index + query.length + 130) : item.body.slice(0, 210);
          const link = document.createElement('a');
          link.className = 'search-result';
          link.href = `#${item.id}`;
          link.innerHTML = `<b>${escapeHtml(item.title)}</b><span>${escapeHtml(excerpt)}${item.body.length > excerpt.length ? '…' : ''}</span>`;
          link.addEventListener('click', () => searchDialog.close());
          searchResults.append(link);
        });
      });

      const byId = new Map(links.map(link => [link.hash.slice(1), link]));
      const observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!visible.length) return;
        links.forEach(link => link.classList.remove('active'));
        const link = byId.get(visible[0].target.id);
        if (link) {
          link.classList.add('active');
          link.scrollIntoView({ block: 'nearest' });
        }
      }, { rootMargin: '-15% 0px -72% 0px', threshold: 0 });
      headings.forEach(heading => observer.observe(heading));
    } catch (error) {
      guideContent.innerHTML = `<h1>Guide unavailable</h1><p>The guide could not be loaded. <a href="guide.md">Open the source Markdown</a>.</p>`;
      console.error(error);
    }
  }

  menuButton.addEventListener('click', () => setMenu(true));
  closeMenuButton.addEventListener('click', () => setMenu(false));
  overlay.addEventListener('click', () => setMenu(false));
  root.dataset.theme = localStorage.getItem('netrunner-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('netrunner-theme', root.dataset.theme);
  });
  searchButton.addEventListener('click', () => {
    searchDialog.showModal();
    requestAnimationFrame(() => searchInput.focus());
  });
  document.addEventListener('keydown', event => {
    if ((event.key === '/' || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k')) && !searchDialog.open) {
      event.preventDefault();
      searchButton.click();
    }
    if (event.key === 'Escape') {
      if (searchDialog.open) searchDialog.close();
      if (sidebar.classList.contains('open')) setMenu(false);
    }
  });
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
    backToTop.classList.toggle('visible', scrollY > 700);
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  backToTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  onScroll();
  initialize();
})();