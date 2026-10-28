// Builds public/data/* from tools/content/* and writes docs/CONTENT_REPORT.md.
// Usage: node tools/build-content.mjs   (exit code 1 on validation errors)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { weeks, reviewFlags } from './content/curriculum.mjs';
import exam from './content/exam.mjs';
import n1 from './content/new-w02.mjs';
import n2 from './content/new-w03-w04.mjs';
import n3 from './content/new-w05-w07.mjs';
import n4 from './content/new-w08.mjs';
import n5 from './content/new-w09.mjs';
import n6 from './content/new-w10-w11a.mjs';
import n7 from './content/new-w11b-w12.mjs';
import x1 from './content/orig-extras-1.mjs';
import x2 from './content/orig-extras-2.mjs';
import x3 from './content/orig-extras-3.mjs';

const root = new URL('../', import.meta.url);
const original = JSON.parse(readFileSync(new URL('tools/content/original.json', root), 'utf8'));
const newLessons = [...n1, ...n2, ...n3, ...n4, ...n5, ...n6, ...n7];
const extras = { ...x1, ...x2, ...x3 };

const errors = [];
const warnings = [];
const pad = n => String(n).padStart(2, '0');
const plain = s => s.replace(/\*/g, '');
const norm = s => plain(s).toLowerCase().replace(/[^a-zäöüß0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

function inferFn(de) {
  const p = plain(de);
  if (/\?\s*(–|$)/.test(p) || p.trim().endsWith('?')) return 'q';
  if (/^(Ich finde|Meiner Meinung|Ich bin der Meinung|Ich glaube)/.test(p)) return 'o';
  return p.split(/\s+/).length > 11 ? 'l' : 's';
}

function checkSentence(where, de, ar) {
  if (!de || !de.trim()) errors.push(`${where}: empty German text`);
  if (!ar || !ar.trim()) errors.push(`${where}: empty Arabic text`);
  if (((de || '').match(/\*/g) || []).length % 2) errors.push(`${where}: unbalanced * highlight markers`);
}

function checkExtras(where, L) {
  if (!L.goal) errors.push(`${where}: missing goal`);
  if (!Array.isArray(L.v) || L.v.length < 5) errors.push(`${where}: needs at least 5 vocabulary items`);
  if (!Array.isArray(L.tr) || L.tr.length < 2) errors.push(`${where}: needs at least 2 transformations`);
  if (!Array.isArray(L.qa) || L.qa.length < 3) errors.push(`${where}: needs at least 3 questions`);
  if (!L.dlg || !Array.isArray(L.dlg.lines) || L.dlg.lines.length < 3) errors.push(`${where}: dialogue needs 3+ lines`);
  (L.dlg?.q || []).forEach((q, i) => {
    if (!Array.isArray(q[1]) || q[2] < 0 || q[2] >= q[1].length) errors.push(`${where}: dialogue question ${i + 1} has an invalid answer index`);
  });
  if (!L.task || !L.task.ar || !['short', 'connected', '60s', 'presentation'].includes(L.task.type)) errors.push(`${where}: missing or invalid task`);
}

// ---- Original lessons ----
const origByKey = {};
original.weeks.forEach((W, wi) => W.days.forEach((D, di) => {
  const ref = `${wi + 1}.${di + 1}`;
  origByKey[ref] = { W, D, ref };
}));

const newByKey = Object.fromEntries(newLessons.map(L => [L.key, L]));
if (Object.keys(newByKey).length !== newLessons.length) errors.push('Duplicate keys among new lessons');

const usedOrig = new Set();
const usedNew = new Set();
const lessons = [];
const vocabMap = new Map();
let g = 0;

function slug(s) {
  return s.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
}
function parseVocab([de, ar, pos, info]) {
  const m = de.match(/^(der|die|das)\s+/);
  const article = pos === 'n' && m ? m[1] : null;
  let head = de.replace(/^(der|die|das)\s+/, '').split(/,|\s\(|\s\/\s/)[0].trim();
  const plural = pos === 'n' ? ((de.match(/,\s*([^\s(/]+)/) || [])[1] || null) : null;
  const key = head.toLowerCase().replace(/^sich\s+/, '');
  return { de, ar, pos, info: info || '', article, plural, head, key };
}
function findExample(item, sentences) {
  const tokens = item.head.replace(/^sich\s+/, '').split(/\s+/).filter(t => t.length > 3 && !/^(\+|Akk|Dat|Gen)/.test(t));
  const stem = (tokens.sort((a, b) => b.length - a.length)[0] || item.head).toLowerCase().slice(0, 5);
  return sentences.find(s => plain(s.de).toLowerCase().includes(stem)) || null;
}

weeks.forEach(W => {
  if (W.lessons.length !== 7) errors.push(`Week ${W.n}: has ${W.lessons.length} lessons (expected 7)`);
  W.lessons.forEach((code, di) => {
    g++;
    const id = 'L' + pad(g);
    let L;
    if (code.startsWith('O')) {
      const ref = code.slice(1);
      const o = origByKey[ref];
      if (!o) { errors.push(`${code}: original lesson not found`); return; }
      if (usedOrig.has(ref)) errors.push(`${code}: original lesson used twice`);
      usedOrig.add(ref);
      const ex = extras[ref];
      if (!ex) errors.push(`${code}: no exercises defined in orig-extras`);
      const [ow, od] = ref.split('.');
      const sentences = o.D.s.map(([de, ar], i) => {
        const sref = `${ref}.${i + 1}`;
        checkSentence(`${code} #${i + 1}`, de, ar);
        const s = { id: `o${ow}-${od}-${pad(i + 1)}`, de, ar, fn: inferFn(de), origin: 'original', ref: sref, status: reviewFlags[sref] ? 'review' : 'verified-original' };
        if (reviewFlags[sref]) s.flag = reviewFlags[sref];
        return s;
      });
      L = { id, n: g, week: W.n, day: di + 1, key: code, origin: 'original', title: o.D.t, de: '', grammar: o.D.t, note: o.D.note, originalTopic: o.W.topic, sentences, ...(ex || {}) };
    } else {
      const key = code.slice(2);
      const nl = newByKey[key];
      if (!nl) { errors.push(`${code}: new lesson not found`); return; }
      if (usedNew.has(key)) errors.push(`${code}: new lesson used twice`);
      usedNew.add(key);
      const sentences = nl.s.map(([de, ar, fn, note], i) => {
        checkSentence(`${code} #${i + 1}`, de, ar);
        const s = { id: `n-${key}-${pad(i + 1)}`, de, ar, fn: fn || inferFn(de), origin: 'new', status: 'generated' };
        if (note) s.note = note;
        return s;
      });
      const { s, key: _k, ...rest } = nl;
      L = { id, n: g, week: W.n, day: di + 1, key: code, origin: 'new', grammar: '', note: '', sentences, ...rest };
    }
    if (L.sentences.length !== 10) errors.push(`${code}: has ${L.sentences.length} sentences (expected 10)`);
    checkExtras(code, L);
    // vocabulary
    L.vocab = (L.v || []).map(raw => {
      const it = parseVocab(raw);
      const ex = findExample(it, L.sentences);
      const existing = vocabMap.get(it.key);
      if (existing) {
        if (!existing.lessons.includes(id)) existing.lessons.push(id);
        if (!existing.example && ex) existing.example = { sid: ex.id, de: plain(ex.de), ar: ex.ar };
        return existing.id;
      }
      let vid = 'v-' + slug(it.head);
      while ([...vocabMap.values()].some(v => v.id === vid)) vid += '-2';
      vocabMap.set(it.key, {
        id: vid, de: it.de, head: it.head, ar: it.ar, pos: it.pos, article: it.article, plural: it.plural,
        forms: it.pos === 'v' ? it.info : '', collocation: it.pos === 'v' ? '' : it.info,
        topic: W.title, week: W.n, lessons: [id], cefr: null, origin: 'new', status: 'generated',
        example: ex ? { sid: ex.id, de: plain(ex.de), ar: ex.ar } : null
      });
      return vid;
    });
    delete L.v;
    lessons.push(L);
  });
});

Object.keys(origByKey).forEach(k => { if (!usedOrig.has(k)) errors.push(`Original lesson ${k} is not placed in the curriculum`); });
newLessons.forEach(L => { if (!usedNew.has(L.key)) errors.push(`New lesson ${L.key} is not placed in the curriculum`); });
Object.keys(extras).forEach(k => { if (!usedOrig.has(k)) warnings.push(`Exercises for ${k} are unused`); });

// duplicates
const seen = new Map();
lessons.forEach(L => L.sentences.forEach(s => {
  const k = norm(s.de);
  if (seen.has(k)) warnings.push(`Duplicate sentence: ${s.id} = ${seen.get(k)} ("${plain(s.de).slice(0, 60)}")`);
  else seen.set(k, s.id);
}));
const ids = lessons.flatMap(L => L.sentences.map(s => s.id));
if (new Set(ids).size !== ids.length) errors.push('Sentence ids are not unique');

const totalSentences = ids.length;
const origCount = lessons.reduce((n, L) => n + L.sentences.filter(s => s.origin === 'original').length, 0);
if (lessons.length !== 84) errors.push(`Expected 84 lessons, got ${lessons.length}`);
if (totalSentences !== 840) errors.push(`Expected 840 sentences, got ${totalSentences}`);
if (origCount !== 490) errors.push(`Expected all 490 original sentences, got ${origCount}`);

// coverage statistics (sentences + dialogues + model answers)
const corpus = lessons.flatMap(L => [
  ...L.sentences.map(s => plain(s.de)),
  ...(L.dlg?.lines || []).map(l => l[1]),
  ...(L.qa || []).map(q => q[1]),
  ...(L.tr || []).map(t => t[2])
]);
const structures = [
  ['weil', /\bweil\b/i], ['obwohl', /\bobwohl\b/i], ['während', /\bwährend\b/i], ['nachdem', /\bnachdem\b/i],
  ['bevor', /\bbevor\b/i], ['falls', /\bfalls\b/i], ['sobald', /\bsobald\b/i], ['solange', /\bsolange\b/i],
  ['deshalb/deswegen', /\b(deshalb|deswegen)\b/i], ['trotzdem', /\btrotzdem\b/i], ['nämlich', /\bnämlich\b/i],
  ['nicht … sondern', /\bnicht\b[^.?!]*\bsondern\b/i], ['um … zu', /\bum\b[^.?!]*\bzu\b/i], ['damit (final)', /,\s*damit\b/i],
  ['brauchen … zu', /\bbrauch\w*\b[^.?!]*\bzu\s+\w+/i], ['Konjunktiv II (würde/hätte/wäre/könnte)', /\b(würde\w*|hätte\w*|wäre\w*|könnte\w*)\b/i],
  ['Konjunktiv II Vergangenheit', /\b(hätte\w*|wäre\w*)\b[^.?!]*\b(ge\w+t|ge\w+en|gewesen)\b/i],
  ['Passiv (werden/wurde + Partizip)', /\b(wird|werden|wurde|wurden)\b[^.?!]*\bge\w+(t|en)\b/i],
  ['je … desto', /\bje\b[^.?!]*\bdesto\b/i], ['Relativsatz (, der/die/das …)', /,\s*(der|die|das|den|dem|denen|deren)\s/i]
];
const coverage = structures.map(([name, re]) => [name, corpus.filter(t => re.test(t)).length]);
const sentenceTokens = lessons.flatMap(L => L.sentences.flatMap(s => plain(s.de).match(/[A-Za-zÄÖÜäöüß]+/g) || []));
const forms = new Set(sentenceTokens.map(t => t.toLowerCase()));

// ---- write outputs ----
const curriculum = {
  schema: 1,
  weeks: weeks.map(W => ({ n: W.n, title: W.title, de: W.de, lessons: lessons.filter(L => L.week === W.n).map(L => L.id) })),
  lessons
};
const vocabulary = { schema: 1, items: [...vocabMap.values()] };
const hash = createHash('sha256').update(JSON.stringify([curriculum, vocabulary, exam])).digest('hex').slice(0, 12);
curriculum.version = hash; vocabulary.version = hash;

const out = p => new URL('public/data/' + p, root);
mkdirSync(out('lessons/'), { recursive: true }); mkdirSync(out('vocabulary/'), { recursive: true }); mkdirSync(out('exams/'), { recursive: true });
writeFileSync(out('lessons/curriculum.json'), JSON.stringify(curriculum));
writeFileSync(out('vocabulary/vocabulary.json'), JSON.stringify(vocabulary));
writeFileSync(out('exams/exam.json'), JSON.stringify({ schema: 1, version: hash, ...exam }));
writeFileSync(out('version.json'), JSON.stringify({ version: hash, built: new Date().toISOString(), lessons: lessons.length, sentences: totalSentences, vocabulary: vocabulary.items.length }));

const flagged = lessons.flatMap(L => L.sentences.filter(s => s.status === 'review').map(s => `| ${s.id} | ${s.ref} | ${L.id} | ${plain(s.de)} | ${s.flag} |`));
const report = `# Content Report

Generated by \`tools/build-content.mjs\` — data version \`${hash}\`.

## Totals

| Measure | Value |
|---|---|
| Weeks | ${weeks.length} |
| Lessons | ${lessons.length} (original: ${lessons.filter(L => L.origin === 'original').length}, new: ${lessons.filter(L => L.origin === 'new').length}) |
| Core sentences | ${totalSentences} (original: ${origCount}, new: ${totalSentences - origCount}) |
| Vocabulary entries (deduplicated by headword) | ${vocabulary.items.length} |
| Distinct German word forms in core sentences | ${forms.size} |
| Dialogues | ${lessons.filter(L => L.dlg).length} |
| Transformation exercises | ${lessons.reduce((n, L) => n + L.tr.length, 0)} |
| Question/answer items | ${lessons.reduce((n, L) => n + L.qa.length, 0)} |
| Production tasks | ${lessons.length} |

Word forms count inflections separately (e.g. *geht* and *ging* are two forms), so the figure is not a lemma count. No comparison against the official Goethe-Institut B1 word list was performed, because no verified copy of that list was available offline. The vocabulary database therefore makes **no claim** about Goethe list coverage, and \`cefr\` is left empty (\`null\`) for every entry.

## Status of content

- Original sentences keep \`status: "verified-original"\`, or \`"review"\` when an issue was found (below). Nothing was changed in the original text.
- All new sentences, translations, dialogues and exercises are \`status: "generated"\`: written for this curriculum and checked by the author, **not** reviewed by a second human or a native speaker. They should be reviewed before being treated as verified.

## Structure coverage (sentences, dialogues, model answers)

| Structure | Occurrences |
|---|---|
${coverage.map(([n, c]) => `| ${n} | ${c} |`).join('\n')}

These counts come from regular expressions, so they are approximate.

## Original sentences flagged for review (${flagged.length})

| Sentence id | Original ref | Lesson | German | Issue |
|---|---|---|---|---|
${flagged.join('\n')}

## Validation

- Errors: ${errors.length}
${errors.map(e => '  - ' + e).join('\n')}
- Warnings: ${warnings.length}
${warnings.map(w => '  - ' + w).join('\n')}
`;
writeFileSync(new URL('docs/CONTENT_REPORT.md', root), report);

console.log(`lessons=${lessons.length} sentences=${totalSentences} original=${origCount} vocab=${vocabulary.items.length} forms=${forms.size} version=${hash}`);
console.log(`errors=${errors.length} warnings=${warnings.length}`);
errors.forEach(e => console.log('ERROR', e));
warnings.forEach(w => console.log('WARN', w));
process.exit(errors.length ? 1 : 0);
