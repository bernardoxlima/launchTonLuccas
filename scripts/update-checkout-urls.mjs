// One-shot replace of checkout URL fallbacks in v3 components.
// Uses literal string replace (no regex), so URLs with & ? = etc are safe.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const STANDARD_URL = 'https://pay.kirvano.com/cd45d82c-9fe5-44f3-8b41-8fce3b50437b?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=';
const VIP_URL = 'https://pay.kirvano.com/5971d946-f3f1-482a-89da-5e01cb14cfee?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=';

const replacements = [
  { from: `PUBLIC_CHECKOUT_STANDARD_URL || '#pricing'`, to: `PUBLIC_CHECKOUT_STANDARD_URL || '${STANDARD_URL}'` },
  { from: `PUBLIC_CHECKOUT_STANDARD_URL || '#'`,         to: `PUBLIC_CHECKOUT_STANDARD_URL || '${STANDARD_URL}'` },
  { from: `PUBLIC_CHECKOUT_VIP_URL || '#'`,              to: `PUBLIC_CHECKOUT_VIP_URL || '${VIP_URL}'` },
];

const files = [];
for await (const f of glob(resolve(root, 'versoes/mpd/v3/*.astro'))) {
  files.push(f);
}

let touched = 0;
for (const f of files) {
  let src = readFileSync(f, 'utf8');
  let changed = false;
  for (const { from, to } of replacements) {
    if (src.includes(from)) {
      src = src.split(from).join(to);
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(f, src, 'utf8');
    touched++;
    console.log('updated:', f);
  }
}
console.log(`\n${touched}/${files.length} files updated`);
