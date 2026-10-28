// Extracts the DATA array from the original b1-offline.html without modifying it.
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const src = new URL('../b1-offline.html', import.meta.url);
const html = readFileSync(src, 'utf8');
const m = html.match(/var DATA=(\[.*?\]);\n/s);
if (!m) throw new Error('DATA array not found in b1-offline.html');
const data = JSON.parse(m[1]);
const out = {
  source: 'b1-offline.html',
  sha256: createHash('sha256').update(html).digest('hex'),
  extracted: new Date().toISOString(),
  weeks: data
};
writeFileSync(new URL('./content/original.json', import.meta.url), JSON.stringify(out, null, 1));
let n = 0; data.forEach(w => w.days.forEach(d => n += d.s.length));
console.log('weeks', data.length, 'sentences', n);
