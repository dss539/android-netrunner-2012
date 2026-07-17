(() => {
  const root = document.documentElement;
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
  const guideContent = document.querySelector('.guide-content');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const headings = [...guideContent.querySelectorAll('h1[id], h2[id], h3[id]')];

  const setMenu = open => {
    sidebar.classList.toggle('open', open);
    overlay.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    if (open) closeMenuButton.focus();
  };
  menuButton.addEventListener('click', () => setMenu(true));
  closeMenuButton.addEventListener('click', () => setMenu(false));
  overlay.addEventListener('click', () => setMenu(false));
  navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));

  const storedTheme = localStorage.getItem('netrunner-theme');
  const preferredTheme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  root.dataset.theme = storedTheme || preferredTheme;
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('netrunner-theme', root.dataset.theme);
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

  const escapeHtml = value => value.replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);

  const openSearch = () => {
    searchDialog.showModal();
    requestAnimationFrame(() => searchInput.focus());
  };
  searchButton.addEventListener('click', openSearch);
  document.addEventListener('keydown', event => {
    if ((event.key === '/' || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k')) && !searchDialog.open) {
      event.preventDefault();
      openSearch();
    }
    if (event.key === 'Escape' && sidebar.classList.contains('open')) setMenu(false);
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
    for (const item of matches) {
      const index = item.body.toLowerCase().indexOf(query);
      const excerpt = index >= 0
        ? item.body.slice(Math.max(0, index - 80), index + query.length + 130)
        : item.body.slice(0, 210);
      const link = document.createElement('a');
      link.className = 'search-result';
      link.href = `#${item.id}`;
      link.innerHTML = `<b>${escapeHtml(item.title)}</b><span>${escapeHtml(excerpt)}${item.body.length > excerpt.length ? '…' : ''}</span>`;
      link.addEventListener('click', () => searchDialog.close());
      searchResults.append(link);
    }
  });

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
    backToTop.classList.toggle('visible', scrollY > 700);
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();
  backToTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  const linkById = new Map(navLinks.map(link => [link.hash.slice(1), link]));
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (!visible.length) return;
    navLinks.forEach(link => link.classList.remove('active'));
    const link = linkById.get(visible[0].target.id);
    if (link) {
      link.classList.add('active');
      link.scrollIntoView({ block: 'nearest' });
    }
  }, { rootMargin: '-15% 0px -72% 0px', threshold: 0 });
  headings.forEach(heading => observer.observe(heading));
})();
