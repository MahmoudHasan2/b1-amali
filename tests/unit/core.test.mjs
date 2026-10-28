// Unit tests: node --test tests/unit
import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const S = require('../../public/assets/js/srs.js');
const Store = require('../../public/assets/js/store.js');
const T = require('../../public/assets/js/text.js');
const V = require('../../public/assets/js/validate.js');
const DAY = S.DAY, NOW = Date.UTC(2026, 9, 25, 9, 0, 0);
const json = p => JSON.parse(readFileSync(new URL('../../' + p, import.meta.url), 'utf8'));

test('SRS: "Good" follows 1, 3, 7, 14 days, then grows by ease', () => {
  let s = null, t = NOW;
  for (const expected of [1, 3, 7, 14]) { s = S.review(s, 2, t); assert.equal(s.ivl, expected); assert.equal(s.due, t + expected * DAY); t = s.due; }
  s = S.review(s, 2, t);
  assert.ok(s.ivl > 14 && s.ivl <= 40, 'interval grows after the fixed steps: ' + s.ivl);
});

test('SRS: "Again" brings an item back in 10 minutes and resets progress', () => {
  let s = S.review(S.review(S.review(null, 2, NOW), 2, NOW + DAY), 2, NOW + 4 * DAY);
  s = S.review(s, 0, NOW + 11 * DAY);
  assert.equal(s.reps, 0); assert.equal(s.ivl, 0); assert.equal(s.lapses, 1); assert.equal(s.fail, 1);
  assert.equal(s.due, NOW + 11 * DAY + 10 * 60 * 1000);
  assert.equal(S.status(s), 'difficult');
  assert.ok(s.ease < 2.5);
});

test('SRS: "Hard" and "Easy" scale differently; ease never drops below 1.3', () => {
  assert.equal(S.review(null, 1, NOW).ivl, 1);
  assert.equal(S.review(null, 3, NOW).ivl, 3);
  let s = null; for (let i = 0; i < 20; i++) s = S.review(s, 0, NOW);
  assert.equal(s.ease, 1.3);
  assert.throws(() => S.review(null, 5, NOW));
});

test('SRS: mastery needs repeated recall, not exposure; manual mastery is verified later', () => {
  assert.equal(S.status(null), 'new');
  assert.equal(S.isMastered(S.review(null, 3, NOW)), false);
  let s = null, t = NOW;
  for (let i = 0; i < 5; i++) { s = S.review(s, 2, t); t = s.due; }
  assert.equal(S.isMastered(s), true);
  const m = S.markMastered(null, NOW);
  assert.equal(S.status(m), 'mastered'); assert.equal(m.due, NOW + 7 * DAY);
  assert.equal(S.status(S.review(m, 0, NOW + 7 * DAY)), 'difficult', 'forgetting a self-marked item removes mastery');
});

test('SRS: queue lists each due key once, forgotten first, and respects limit/difficult filters', () => {
  const items = {
    's:a': S.review(null, 2, NOW - 2 * DAY),               // due (1 day)
    's:b': S.review(null, 0, NOW - DAY),                    // forgotten, due
    'v:c': S.review(null, 2, NOW),                          // not due yet
    's:d': S.setDifficult(S.review(null, 2, NOW), true, NOW) // difficult, due tomorrow
  };
  assert.deepEqual(S.queue(items, NOW), ['s:b', 's:a']);
  assert.deepEqual(S.queue(items, NOW, { limit: 1 }), ['s:b']);
  assert.deepEqual(S.queue(items, NOW, { difficult: true }).sort(), ['s:b', 's:d']);
  assert.deepEqual(S.queue(items, NOW + 2 * DAY, { prefix: 'v:' }), ['v:c']);
  const keys = S.queue(items, NOW + 30 * DAY);
  assert.equal(new Set(keys).size, keys.length);
});

test('Store: progress survives a reload through storage', () => {
  const mem = Store.memoryStorage();
  let clock = NOW;
  const a = Store.create(mem, () => clock); a.load();
  a.grade('s:x', 2); a.viewLesson('L01'); a.lessonEvent('L01', 'quiz', 80);
  const b = Store.create(mem, () => clock); b.load();
  assert.equal(b.item('s:x').ok, 1);
  assert.equal(b.data.lessons.L01.quiz.best, 80);
  assert.ok(b.data.activity[Store.dayKey(NOW)].reviews >= 1);
});

test('Store: malformed or missing storage never crashes and yields an empty profile', () => {
  for (const raw of ['{not json', '"text"', '[]', JSON.stringify({ items: { 's:x': { bad: true } } })]) {
    const s = Store.create(Store.memoryStorage({ [Store.KEY]: raw }), () => NOW);
    const d = s.load();
    assert.deepEqual(Object.keys(d.items), []);
  }
  const throwing = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('denied'); } };
  const s = Store.create(throwing, () => NOW); s.load();
  assert.doesNotThrow(() => s.grade('s:y', 2));
});

test('Store: export → import (replace) is lossless; merge keeps the newer review per item', () => {
  const a = Store.create(Store.memoryStorage(), () => NOW); a.load();
  a.grade('s:1', 2); a.grade('v:2', 0); a.weekly(1, { score: 70, recall: 60, listening: 80, speaking: 2 });
  const exported = a.exportJSON();
  const b = Store.create(Store.memoryStorage(), () => NOW); b.load();
  b.importJSON(exported, 'replace');
  assert.deepEqual(b.data.items, a.data.items);
  assert.deepEqual(b.data.weekly, a.data.weekly);

  const older = Store.create(Store.memoryStorage(), () => NOW); older.load(); older.grade('s:1', 0); older.grade('s:only-here', 2);
  const newer = Store.create(Store.memoryStorage(), () => NOW + DAY); newer.load(); newer.grade('s:1', 3);
  const m = Store.merge(older.data, newer.data);
  assert.equal(m.items['s:1'].lastGrade, 3);
  assert.ok(m.items['s:only-here']);
  assert.throws(() => b.parseImport('{"hello":1}'));
});

test('Store: legacy b1sent:v1 ticks are imported as due-for-verification, not mastered', () => {
  const mem = Store.memoryStorage({ 'b1sent:v1': JSON.stringify({ done: { '0.0.0': true, '6.6.9': true } }) });
  const s = Store.create(mem, () => NOW); s.load();
  const it = s.item('s:o1-1-01');
  assert.ok(it && s.item('s:o7-7-10'));
  assert.equal(S.isMastered(it), false);
  assert.ok(S.isDue(it, NOW));
});

test('Text: answer comparison tolerates case, punctuation and one typo, but not missing words', () => {
  const e = 'Ich bleibe heute zu Hause, *weil* ich Fieber *habe*.';
  assert.equal(T.compare('ich bleibe heute zu hause weil ich fieber habe', e).verdict, 'correct');
  assert.equal(T.compare('Ich bleibe heute zu Hause weil ich Feiber habe', e).verdict, 'correct');
  assert.equal(T.compare('Ich bleibe zu Hause', e).verdict, 'wrong');
  assert.equal(T.compare('', e).verdict, 'wrong');
});

test('Text: cloze uses highlights, scramble keeps the same tokens, escaping is safe', () => {
  const c = T.cloze('Ich glaube, *dass* er *kommt*.');
  assert.deepEqual(c.answers, ['dass', 'kommt']);
  const fallback = T.cloze('Guten Morgen zusammen.');
  assert.equal(fallback.answers.length, 1);
  const sc = T.scramble('Wir sind um acht Uhr angekommen.', T.rng(42));
  assert.deepEqual([...sc.shuffled].sort(), [...sc.tokens].sort());
  assert.equal(T.highlight('<b>*x*</b>'), '&lt;b&gt;<mark>x</mark>&lt;/b&gt;');
});

test('Validate: malformed lessons are skipped or repaired without throwing', () => {
  const r = V.validateCurriculum({ weeks: [{ n: 1, lessons: ['A', 'B', 'missing'] }], lessons: [
    { id: 'A', title: 'ok', sentences: [{ id: 'a1', de: 'Hallo', ar: 'مرحبا' }, { id: 'a2', de: '', ar: 'x' }, null] },
    { id: 'A', title: 'dup', sentences: [] }, 'garbage',
    { id: 'B', title: 'b', sentences: [], dlg: { lines: [['x', 'y', 'z']], q: [['?', ['a'], 4]] } }
  ] });
  assert.equal(r.ok, false);
  assert.equal(r.lessons.length, 2);
  assert.equal(r.byId.A.sentences.length, 1);
  assert.deepEqual(r.weeks[0].lessons, ['A', 'B']);
  assert.equal(r.byId.B.dlg.q.length, 0);
  assert.equal(V.validateCurriculum(null).lessons.length, 0);
});

test('Data: built curriculum is valid — 12 weeks, 84 lessons, 840 sentences', () => {
  const c = json('public/data/lessons/curriculum.json');
  const r = V.validateCurriculum(c);
  assert.deepEqual(r.errors, []);
  assert.equal(r.weeks.length, 12);
  assert.ok(r.weeks.every(w => w.lessons.length === 7));
  assert.equal(r.lessons.length, 84);
  assert.equal(r.lessons.reduce((n, L) => n + L.sentences.length, 0), 840);
  assert.ok(r.lessons.every(L => L.task && L.tr.length >= 2 && L.qa.length >= 3 && L.dlg && L.dlg.q.length >= 1), 'every lesson has production tasks, Q&A and a dialogue');
  const v = V.validateVocabulary(json('public/data/vocabulary/vocabulary.json'));
  assert.deepEqual(v.errors, []);
  const ids = new Set(v.items.map(x => x.id));
  assert.ok(r.lessons.every(L => L.vocab.every(id => ids.has(id))), 'lesson vocab ids resolve');
});

test('Data: all 490 original sentences are present with unchanged text', () => {
  const orig = json('tools/content/original.json');
  const c = json('public/data/lessons/curriculum.json');
  const byId = new Map(c.lessons.flatMap(L => L.sentences).map(s => [s.id, s]));
  let n = 0;
  orig.weeks.forEach((W, wi) => W.days.forEach((D, di) => D.s.forEach(([de, ar], i) => {
    const s = byId.get(`o${wi + 1}-${di + 1}-${String(i + 1).padStart(2, '0')}`);
    assert.ok(s, 'missing original ' + (wi + 1) + '.' + (di + 1) + '.' + (i + 1));
    assert.equal(s.de, de); assert.equal(s.ar, ar); assert.equal(s.origin, 'original');
    n++;
  })));
  assert.equal(n, 490);
});
