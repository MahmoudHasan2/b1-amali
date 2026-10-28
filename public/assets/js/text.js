/* Text helpers: highlighting, answer comparison, cloze and scramble generation. Pure functions. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TextKit = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function plain(s) { return String(s || '').replace(/\*/g, ''); }
  function highlight(s) { return esc(s).replace(/\*(.+?)\*/g, '<mark>$1</mark>'); }

  function normalize(s, loose) {
    var t = plain(s).toLowerCase()
      .replace(/[„“”"‚‘’'«»]/g, '').replace(/[.,!?;:()\-–—…]/g, ' ')
      .replace(/\s+/g, ' ').trim();
    if (loose) t = t.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
    return t;
  }
  function words(s) { var n = normalize(s); return n ? n.split(' ') : []; }

  // Edit distance counting a swap of two neighbouring letters as one error (optimal string alignment).
  function lev(a, b) {
    if (a === b) return 0;
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) { d.push([i]); }
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) {
      var cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
    return d[m][n];
  }

  // Word-level alignment of the learner's answer against the expected text.
  // Returns {score 0..1, verdict: 'correct'|'close'|'wrong', tokens:[{w, ok}] for the expected words}.
  function compare(answer, expected) {
    var A = words(answer), E = words(expected);
    if (!E.length) return { score: 0, verdict: 'wrong', tokens: [] };
    var m = A.length, n = E.length, dp = [], i, j;
    for (i = 0; i <= m; i++) { dp.push(new Array(n + 1).fill(0)); }
    function same(a, e) { return a === e || (e.length > 3 && lev(normalize(a, true), normalize(e, true)) <= 1); }
    for (i = m - 1; i >= 0; i--) for (j = n - 1; j >= 0; j--)
      dp[i][j] = same(A[i], E[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    var okIdx = {}; i = 0; j = 0;
    while (i < m && j < n) {
      if (same(A[i], E[j])) { okIdx[j] = true; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
    }
    var hits = Object.keys(okIdx).length;
    var score = hits / Math.max(n, m);
    var verdict = score >= 0.9 ? 'correct' : score >= 0.65 ? 'close' : 'wrong';
    return { score: score, verdict: verdict, tokens: E.map(function (w, k) { return { w: w, ok: !!okIdx[k] }; }) };
  }

  // Tokens of the original text, keeping punctuation attached, for display.
  function displayTokens(s) { return plain(s).split(/\s+/).filter(Boolean); }

  // Cloze: blank the highlighted parts; if a sentence has none, blank its longest word.
  function cloze(s) {
    var parts = [], answers = [], re = /\*(.+?)\*/g, last = 0, m;
    while ((m = re.exec(s))) {
      if (m.index > last) parts.push({ t: s.slice(last, m.index) });
      parts.push({ gap: answers.length }); answers.push(m[1]);
      last = re.lastIndex;
    }
    if (last < s.length) parts.push({ t: s.slice(last) });
    if (!answers.length) {
      var p = plain(s), best = (p.match(/[A-Za-zÄÖÜäöüß]+/g) || []).sort(function (a, b) { return b.length - a.length; })[0];
      if (!best) return { parts: [{ t: p }], answers: [] };
      var k = p.indexOf(best);
      return { parts: [{ t: p.slice(0, k) }, { gap: 0 }, { t: p.slice(k + best.length) }], answers: [best] };
    }
    return { parts: parts, answers: answers };
  }

  // Deterministic PRNG so exercises can be reproduced in tests.
  function rng(seed) {
    var x = seed >>> 0 || 1;
    return function () { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; };
  }
  function shuffle(arr, rand) {
    var a = arr.slice(), r = rand || Math.random, i, j, t;
    for (i = a.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function scramble(s, rand) {
    var tokens = displayTokens(s), out = shuffle(tokens, rand), tries = 0;
    while (tokens.length > 2 && out.join(' ') === tokens.join(' ') && tries++ < 5) out = shuffle(tokens, rand);
    return { tokens: tokens, shuffled: out };
  }

  // First-letter hint: "Ich bleibe heute" -> "I__ b_____ h____"
  function hint(s) {
    return displayTokens(s).map(function (w) {
      return w.replace(/^([A-Za-zÄÖÜäöüß])([A-Za-zÄÖÜäöüß]*)/, function (_, a, b) { return a + b.replace(/./g, '_'); });
    }).join(' ');
  }

  function hashStr(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  return { esc: esc, plain: plain, highlight: highlight, normalize: normalize, words: words, lev: lev,
    compare: compare, displayTokens: displayTokens, cloze: cloze, rng: rng, shuffle: shuffle,
    scramble: scramble, hint: hint, hashStr: hashStr };
});
