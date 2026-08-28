import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = join(root, 'dist', 'index.html');
let html = readFileSync(htmlPath, 'utf8');

const linkRe = /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/;
const match = html.match(linkRe);

if (!match) {
  console.warn('[inline-css] no index stylesheet link found; skipped.');
  process.exit(0);
}

const cssPath = join(root, 'dist', match[1].replace(/^\//, ''));
const css = readFileSync(cssPath, 'utf8');

html = html.replace(
  linkRe,
  '<style>\n' + css + '\n</style>\n    '
);

writeFileSync(htmlPath, html);
console.log('[inline-css] inlined ' + match[1] + ' (' + (css.length / 1024).toFixed(1) + ' KiB) into index.html');