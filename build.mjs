import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { marked } from 'marked';

await mkdir('_site', { recursive: true });
const [template, markdown] = await Promise.all([
  readFile('index.html', 'utf8'),
  readFile('guide.md', 'utf8')
]);

const rendered = marked.parse(markdown, { gfm: true });
const html = template
  .replace('<article id="guideContent" class="guide-content" aria-live="polite"><p>Loading guide…</p></article>', `<article id="guideContent" class="guide-content" data-rendered="true" aria-live="polite">${rendered}</article>`)
  .replace(/\s*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/marked[^>]+><\/script>/, '');

await writeFile('_site/index.html', html);
await Promise.all(['styles.css', 'app.js', 'guide.md', '404.html', '.nojekyll'].map(file => copyFile(file, `_site/${file}`)));
