// Minimal Chrome DevTools Protocol driver (no dependencies): static server + headless Chrome.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
import { tmpdir } from 'node:os';

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml', '.png': 'image/png' };

export function serve(root, port) {
  const server = createServer(async (req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    const file = normalize(join(root, p));
    if (!file.startsWith(normalize(root)) || p.includes('/api/')) { res.writeHead(404, { 'content-type': 'text/html' }); return res.end('not found'); }
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream', 'cache-control': 'no-cache' });
      res.end(body);
    } catch { res.writeHead(404, { 'content-type': 'text/html' }); res.end('not found'); }
  });
  return new Promise(r => server.listen(port, '127.0.0.1', () => r(server)));
}

export async function launch(port = 9333) {
  const chrome = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', '/usr/bin/google-chrome'].find(existsSync);
  if (!chrome) throw new Error('No Chrome/Edge found');
  const profile = await mkdtemp(join(tmpdir(), 'b1-e2e-'));
  const proc = spawn(chrome, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--lang=de-DE', 'about:blank'], { stdio: 'ignore' });
  let ver;
  for (let i = 0; i < 50; i++) {
    try { ver = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json(); break; } catch { await new Promise(r => setTimeout(r, 200)); }
  }
  if (!ver) throw new Error('Chrome did not start');
  const ws = new WebSocket(ver.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map(); const listeners = [];
  ws.onmessage = ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.rej(new Error(m.error.message)) : p.res(m.result); }
    else listeners.forEach(l => l(m));
  };
  const send = (method, params = {}, sessionId) => new Promise((res, rej) => { const k = ++id; pending.set(k, { res, rej }); ws.send(JSON.stringify({ id: k, method, params, sessionId })); });
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  const page = (method, params) => send(method, params, sessionId);
  const errors = [];
  listeners.push(m => {
    if (m.sessionId !== sessionId) return;
    if (m.method === 'Runtime.exceptionThrown') errors.push('exception: ' + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push('console.error: ' + m.params.args.map(a => a.value ?? a.description).join(' '));
    if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error' && !/favicon|fonts\.g/.test(m.params.entry.url || '')) errors.push('log: ' + m.params.entry.text + ' ' + (m.params.entry.url || ''));
  });
  await page('Runtime.enable'); await page('Log.enable'); await page('Page.enable'); await page('Network.enable');

  const api = {
    errors, page,
    on(fn) { listeners.push(m => { if (m.sessionId === sessionId) fn(m); }); },
    async eval(expr) {
      const r = await Promise.race([
        page('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true, timeout: 15000 }),
        new Promise((_, rej) => setTimeout(() => rej(new Error('eval hung (>20s): ' + expr.slice(0, 120))), 20000))
      ]);
      if (r.exceptionDetails) throw new Error('eval failed: ' + (r.exceptionDetails.exception?.description || r.exceptionDetails.text) + '\n  in: ' + expr.slice(0, 200));
      return r.result.value;
    },
    async goto(url) { await page('Page.navigate', { url }); await api.wait('document.readyState === "complete"'); },
    async wait(expr, timeout = 10000) {
      const t = Date.now();
      while (Date.now() - t < timeout) { try { if (await api.eval(expr)) return true; } catch { } await new Promise(r => setTimeout(r, 100)); }
      throw new Error('timeout waiting for: ' + expr);
    },
    click: sel => api.eval(`(()=>{const e=document.querySelector(${JSON.stringify(sel)}); if(!e) throw new Error('no element ${sel.replace(/'/g, '')}'); e.click(); return true})()`),
    async viewport(width, height, mobile = false) { await page('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile }); },
    async screenshot(path) { const { data } = await page('Page.captureScreenshot', { format: 'png' }); const { writeFile } = await import('node:fs/promises'); await writeFile(path, Buffer.from(data, 'base64')); },
    async offline(on) { await page('Network.emulateNetworkConditions', { offline: on, latency: 0, downloadThroughput: -1, uploadThroughput: -1 }); },
    async close() { try { ws.close(); } catch { } proc.kill(); await new Promise(r => setTimeout(r, 500)); await rm(profile, { recursive: true, force: true }).catch(() => { }); }
  };
  return api;
}
