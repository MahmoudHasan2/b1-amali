// Renders the PNG app icons from public/assets/icons/icon.svg with headless Chrome.
import { execFileSync } from 'node:child_process';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const chrome = ['C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(existsSync);
if (!chrome) throw new Error('Chrome not found');
const svg = readFileSync(new URL('../public/assets/icons/icon.svg', import.meta.url), 'utf8');
const jobs = [['icon-192.png', 192, 0], ['icon-512.png', 512, 0], ['maskable-512.png', 512, 0.12]];
for (const [name, size, pad] of jobs) {
  const html = join(tmpdir(), 'b1icon.html');
  const inner = Math.round(size * (1 - pad * 2));
  writeFileSync(html, `<html><body style="margin:0;background:${pad ? '#0B6B53' : 'transparent'};width:${size}px;height:${size}px;display:grid;place-items:center">${svg.replace('<svg ', `<svg width="${inner}" height="${inner}" `)}</body></html>`);
  const out = new URL('../public/assets/icons/' + name, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
  execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--default-background-color=00000000', `--window-size=${size},${size}`, `--screenshot=${out}`, 'file:///' + html.split('\\').join('/')], { stdio: 'ignore' });
  console.log('wrote', name);
}
