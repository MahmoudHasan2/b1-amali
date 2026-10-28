// End-to-end test in headless Chrome. Usage: node tests/e2e/run.mjs [screenshotDir]
import { serve, launch } from './cdp.mjs';
import { fileURLToPath } from 'node:url';
import { mkdirSync } from 'node:fs';

const root = fileURLToPath(new URL('../../public/', import.meta.url));
const shots = process.argv[2] || null;
if (shots) mkdirSync(shots, { recursive: true });
const PORT = 8790 + Math.floor(Math.random() * 100), DEBUG = 9400 + Math.floor(Math.random() * 100);
const BASE = `http://127.0.0.1:${PORT}/`;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const results = [];
let b, srv;

async function check(name, fn) {
  try { await fn(); results.push([true, name]); console.log('✔', name); }
  catch (e) { results.push([false, name, e.message]); console.log('✖', name, '—', e.message); }
}
function ok(cond, msg) { if (!cond) throw new Error(msg || 'assertion failed'); }
const shot = async n => { if (shots) await b.screenshot(`${shots}/${n}.png`); };
const go = async hash => { await b.eval(`location.hash=${JSON.stringify(hash)}`); await sleep(250); };
const cardVis = i => b.eval(`(()=>{const c=document.querySelector('#card-${i}');return {de:!!c.querySelector('.lde .de'),ar:!!c.querySelector('.lar .ar')}})()`);

try {
  srv = await serve(root, PORT);
  b = await launch(DEBUG);
  await b.viewport(1280, 900);

  await check('app loads without JavaScript errors', async () => {
    await b.goto(BASE);
    await b.wait('document.documentElement.classList.contains("ready")');
    ok(await b.eval('!!document.querySelector(".hero")'), 'dashboard missing');
    await shot('01-dashboard');
  });

  await check('all 84 lessons / 840 sentences / 490 originals available in the app', async () => {
    const r = await b.eval('({l:App.data.lessons.length, s:App.data.lessons.reduce((n,L)=>n+L.sentences.length,0), o:App.data.lessons.reduce((n,L)=>n+L.sentences.filter(s=>s.origin==="original").length,0), err:App.data.errors.length})');
    ok(r.l === 84 && r.s === 840 && r.o === 490 && r.err === 0, JSON.stringify(r));
  });

  await check('German and Arabic visibility toggle independently per sentence', async () => {
    await go('#/l/L01'); await b.wait('!!document.querySelector("#card-0")');
    ok(JSON.stringify(await cardVis(0)) === '{"de":true,"ar":true}', 'both visible in mode A');
    await b.click('#card-0 [data-act="tog"][data-l="de"]');
    ok(JSON.stringify(await cardVis(0)) === '{"de":false,"ar":true}', 'hide DE only');
    ok(JSON.stringify(await cardVis(1)) === '{"de":true,"ar":true}', 'other cards unaffected');
    await b.click('#card-0 [data-act="tog"][data-l="ar"]');
    ok(JSON.stringify(await cardVis(0)) === '{"de":false,"ar":false}', 'hide AR too');
    await b.click('#card-0 [data-act="tog"][data-l="de"]');
    ok(JSON.stringify(await cardVis(0)) === '{"de":true,"ar":false}', 'show DE keeps AR hidden');
  });

  await check('lesson-wide show/hide controls affect one language only', async () => {
    await b.click('[data-act="all"][data-l="de"][data-v="0"]');
    const r = await b.eval('[...document.querySelectorAll(".scard")].map(c=>[!!c.querySelector(".lde .de"),!!c.querySelector(".lar .ar")])');
    ok(r.every(x => !x[0]), 'all German hidden');
    ok(r.slice(1).every(x => x[1]), 'Arabic unchanged on other cards');
    await b.click('[data-act="all"][data-l="both"][data-v="1"]');
    ok((await b.eval('document.querySelectorAll(".scard .lde .de").length')) === 10, 'show both');
  });

  await check('full recall (both hidden) → attempt → reveal → grade schedules a review', async () => {
    await b.click('[data-act="mode"][data-m="D"]');
    ok(JSON.stringify(await cardVis(0)) === '{"de":false,"ar":false}', 'mode D hides both');
    await b.eval('(()=>{const t=document.querySelector("#att-0");t.value="Ich bleibe heute zu Hause weil ich Fieber habe";t.dispatchEvent(new Event("input",{bubbles:true}))})()');
    await b.click('#card-0 [data-act="reveal"]');
    ok(JSON.stringify(await cardVis(0)) === '{"de":true,"ar":true}', 'reveal shows both');
    ok(await b.eval('!!document.querySelector("#card-0 .cmp.correct")'), 'attempt compared as correct');
    await shot('02-recall-revealed');
    await b.click('#card-0 [data-act="grade"][data-g="2"]');
    const it = await b.eval('App.store.item("s:"+App.lessonById("L01").sentences[0].id)');
    ok(it && it.reviews === 1 && it.ivl === 1, 'graded Good → 1 day: ' + JSON.stringify(it));
    await b.click('#card-1 [data-act="reveal"]');
    await b.click('#card-1 [data-act="grade"][data-g="0"]');
    const it2 = await b.eval('App.store.item("s:"+App.lessonById("L01").sentences[1].id)');
    ok(it2.lapses === 1 && it2.due - Date.now() < 11 * 60e3, 'Again → back in ~10 minutes');
  });

  await check('opening a lesson does not count as mastered', async () => {
    const r = await b.eval('App.stats()');
    ok(r.sMastered === 0 && r.sViewed >= 10 && r.sPracticed === 2, JSON.stringify(r));
  });

  await check('previous/next sentence navigation and keyboard shortcuts (focus layout)', async () => {
    await b.click('[data-act="layout"][data-v="focus"]');
    ok(await b.eval('document.querySelectorAll(".scard").length === 1 && !!document.querySelector("#card-0")'));
    await b.click('[data-act="next"]'); ok(await b.eval('!!document.querySelector("#card-1")'), 'next');
    await b.click('[data-act="prev"]'); ok(await b.eval('!!document.querySelector("#card-0")'), 'prev');
    await b.page('Input.dispatchKeyEvent', { type: 'keyDown', key: 'ArrowLeft', code: 'ArrowLeft', windowsVirtualKeyCode: 37 });
    await b.page('Input.dispatchKeyEvent', { type: 'keyUp', key: 'ArrowLeft', code: 'ArrowLeft', windowsVirtualKeyCode: 37 });
    await sleep(150);
    ok(await b.eval('!!document.querySelector("#card-1")'), 'ArrowLeft = next in RTL');
    await b.click('[data-act="layout"][data-v="list"]');
    await b.click('[data-act="mode"][data-m="A"]');
  });

  await check('difficult flag feeds the "difficult" review queue', async () => {
    await b.click('#card-2 [data-act="diff"]');
    await go('#/review/difficult');
    const n = await b.eval('App.$(".num.muted") ? App.$(".num.muted").textContent : ""');
    ok(/\/\s*[1-9]/.test(n), 'difficult queue has items: ' + n);
  });

  await check('lesson navigation, tabs, quiz, weekly test, vocab, exam, settings render', async () => {
    for (const h of ['#/l/L02', '#/l/L02/v', '#/l/L02/x', '#/l/L02/d', '#/l/L02/t', '#/w/5', '#/vocab', '#/exam', '#/exam/1', '#/exam/2', '#/exam/3', '#/exam/r', '#/settings', '#/review', '#/quiz/L02', '#/test/1']) {
      await go(h);
      ok(await b.eval('!!document.querySelector("main h1") && !/صار خطأ|مش موجودة/.test(document.querySelector("main h1").textContent)'), 'view failed: ' + h);
    }
    await go('#/l/L84'); ok(await b.eval('!document.querySelector(".pager a[href*=\'L85\']")'), 'last lesson has no next');
  });

  await check('quiz completes and stores a score', async () => {
    await go('#/quiz/L03');
    for (let i = 0; i < 10; i++) {
      const hasInput = await b.eval('!!document.querySelector("#qin:not([disabled])")');
      if (hasInput) { await b.eval('document.querySelector("#qin").value="x"'); await b.click('[data-q="check"]'); }
      else await b.click('[data-q="opt"]');
      await b.click('[data-q="next"]');
    }
    ok(await b.eval('App.store.data.lessons.L03.quiz && typeof App.store.data.lessons.L03.quiz.best === "number"'), 'quiz score saved');
    ok(await b.eval('Object.keys(App.store.data.failed).length > 0'), 'wrong answers added to the failed-exercise queue');
  });

  await check('progress survives a reload', async () => {
    const before = await b.eval('JSON.stringify(App.store.data.items)');
    await b.goto(BASE + '#/');
    await b.wait('document.documentElement.classList.contains("ready")');
    ok((await b.eval('JSON.stringify(App.store.data.items)')) === before, 'items changed after reload');
  });

  await check('export → reset → import restores identical progress', async () => {
    const r = await b.eval(`(()=>{const ex=App.store.exportJSON(), before=JSON.stringify(App.store.data.items);
      App.store.reset(); const empty=Object.keys(App.store.data.items).length;
      App.store.importJSON(ex,'replace'); return {empty, same: JSON.stringify(App.store.data.items)===before};})()`);
    ok(r.empty === 0 && r.same, JSON.stringify(r));
  });

  await check('corrupted localStorage does not break the app', async () => {
    await b.eval('localStorage.setItem(App.store.KEY, "{broken json"); true');
    await b.goto(BASE + '#/l/L05');
    await b.wait('document.documentElement.classList.contains("ready")');
    ok(await b.eval('document.querySelectorAll(".scard").length === 10'), 'lesson renders with fresh progress');
  });

  await check('malformed lesson data is handled safely', async () => {
    const r = await b.eval(`(()=>{const v=Validate.validateCurriculum({weeks:[{n:1,lessons:["x"]}],lessons:[{id:"x",title:"t",sentences:[{id:"1",de:"a"},null]}]});return {n:v.lessons.length,s:v.lessons[0].sentences.length,e:v.errors.length}})()`);
    ok(r.n === 1 && r.s === 0 && r.e > 0, JSON.stringify(r));
  });

  await check('RTL page with LTR German text', async () => {
    const r = await b.eval('({dir:document.documentElement.dir, de:getComputedStyle(document.querySelector(".scard .de")).direction, lang:document.querySelector(".scard .de").lang})');
    ok(r.dir === 'rtl' && r.de === 'ltr' && r.lang === 'de', JSON.stringify(r));
  });

  await check('keyboard focus is visible and controls are reachable by Tab', async () => {
    await b.page('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    await b.page('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    ok(await b.eval('document.activeElement && document.activeElement !== document.body'), 'Tab moves focus');
    ok(await b.eval('[...document.querySelectorAll("button")].every(x=>x.textContent.trim()||x.getAttribute("aria-label"))'), 'every button has a label');
  });

  await check('mobile layout (375px) has no horizontal scroll', async () => {
    await b.viewport(375, 812, true);
    for (const h of ['#/', '#/l/L09', '#/l/L09/x', '#/l/L09/d', '#/vocab', '#/exam/2', '#/settings']) {
      await go(h); await sleep(150);
      const w = await b.eval('document.documentElement.scrollWidth - window.innerWidth');
      ok(w <= 0, `${h} overflows by ${w}px`);
    }
    await go('#/l/L09'); await shot('03-mobile-lesson');
    await go('#/'); await shot('04-mobile-dashboard');
    await b.viewport(1280, 900);
  });

  await check('manifest is valid and the service worker controls the page', async () => {
    const m = await b.eval('fetch("manifest.webmanifest").then(r=>r.json())');
    ok(m.name && m.start_url && m.display === 'standalone' && m.icons.some(i => i.sizes === '512x512') && m.icons.some(i => i.sizes === '192x192'), 'manifest fields');
    const icons = await b.eval('Promise.all(["assets/icons/icon-192.png","assets/icons/icon-512.png","assets/icons/maskable-512.png"].map(u=>fetch(u).then(r=>r.ok)))');
    ok(icons.every(Boolean), 'icons load');
    await b.wait('navigator.serviceWorker.ready.then(()=>true)', 15000);
    await b.goto(BASE + '#/'); await b.wait('document.documentElement.classList.contains("ready")');
    ok(await b.eval('!!navigator.serviceWorker.controller'), 'page is controlled by the SW');
  });

  await check('offline: app shell, lessons and review work without network', async () => {
    await b.offline(true);
    await b.goto(BASE + '#/l/L12');
    await b.wait('document.documentElement.classList.contains("ready")', 15000);
    ok(await b.eval('document.querySelectorAll(".scard").length === 10'), 'lesson renders offline');
    ok(await b.eval('!document.getElementById("offline").hidden'), 'offline banner visible');
    await go('#/review'); ok(await b.eval('!!document.querySelector("main h1")'), 'review offline');
    await shot('05-offline');
    await b.offline(false);
  });

  await check('no critical errors in the browser console', async () => {
    const critical = b.errors.filter(e => !/api\/auth\.php|net::ERR_INTERNET_DISCONNECTED|Failed to load resource.*(api\/|fonts)/.test(e));
    ok(critical.length === 0, critical.join(' | '));
  });
} catch (e) {
  results.push([false, 'harness', e.message]); console.log('✖ harness', e.message);
} finally {
  if (b) await b.close();
  if (srv) srv.close();
}
const failed = results.filter(r => !r[0]);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
process.exit(failed.length ? 1 : 0);
