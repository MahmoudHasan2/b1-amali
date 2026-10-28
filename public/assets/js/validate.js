/* Lesson data validation, shared by the app (safe loading), the admin editor and the tests.
   validateCurriculum never throws: it returns the usable subset plus a list of problems. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Validate = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  function isStr(x) { return typeof x === 'string' && x.trim().length > 0; }
  function isArr(x) { return Array.isArray(x); }

  function validateLesson(L, where, errors) {
    var bad = 0;
    if (!L || typeof L !== 'object') { errors.push(where + ': not an object'); return null; }
    if (!isStr(L.id)) { errors.push(where + ': missing id'); return null; }
    if (!isArr(L.sentences)) { errors.push(L.id + ': sentences missing'); return null; }
    var sentences = L.sentences.filter(function (s, i) {
      var ok = s && isStr(s.id) && isStr(s.de) && isStr(s.ar);
      if (!ok) { errors.push(L.id + ': sentence ' + (i + 1) + ' is malformed and was skipped'); bad++; }
      else if (((s.de.match(/\*/g) || []).length) % 2) errors.push(L.id + ': sentence ' + s.id + ' has unbalanced * markers');
      return ok;
    });
    if (sentences.length !== 10) errors.push(L.id + ': ' + sentences.length + ' usable sentences (expected 10)');
    if (!isStr(L.title)) errors.push(L.id + ': missing title');
    var dlg = L.dlg && isArr(L.dlg.lines) ? L.dlg : null;
    if (dlg) (dlg.q || []).forEach(function (q, i) {
      if (!isArr(q) || !isArr(q[1]) || typeof q[2] !== 'number' || q[2] < 0 || q[2] >= q[1].length) errors.push(L.id + ': dialogue question ' + (i + 1) + ' is invalid');
    });
    return Object.assign({}, L, {
      title: isStr(L.title) ? L.title : L.id,
      sentences: sentences,
      vocab: isArr(L.vocab) ? L.vocab.filter(isStr) : [],
      tr: isArr(L.tr) ? L.tr.filter(function (t) { return isArr(t) && t.length >= 3; }) : [],
      qa: isArr(L.qa) ? L.qa.filter(function (q) { return isArr(q) && q.length >= 2; }) : [],
      dlg: dlg ? { title: dlg.title || '', lines: dlg.lines.filter(function (l) { return isArr(l) && isStr(l[1]); }), q: (dlg.q || []).filter(function (q) { return isArr(q) && isArr(q[1]) && q[2] >= 0 && q[2] < q[1].length; }) } : null,
      task: L.task && isStr(L.task.ar) ? L.task : null
    });
  }

  function validateCurriculum(data) {
    var errors = [];
    if (!data || typeof data !== 'object' || !isArr(data.lessons) || !isArr(data.weeks)) {
      return { ok: false, errors: ['curriculum: weeks/lessons missing'], weeks: [], lessons: [], byId: {} };
    }
    var ids = {}, sids = {}, lessons = [];
    data.lessons.forEach(function (L, i) {
      var v = validateLesson(L, 'lesson #' + (i + 1), errors);
      if (!v) return;
      if (ids[v.id]) { errors.push(v.id + ': duplicate lesson id'); return; }
      ids[v.id] = v;
      v.sentences.forEach(function (s) { if (sids[s.id]) errors.push(s.id + ': duplicate sentence id'); sids[s.id] = true; });
      lessons.push(v);
    });
    var weeks = data.weeks.filter(function (W) { return W && typeof W.n === 'number' && isArr(W.lessons); }).map(function (W) {
      var ls = W.lessons.filter(function (id) { if (!ids[id]) { errors.push('week ' + W.n + ': unknown lesson ' + id); return false; } return true; });
      return { n: W.n, title: W.title || ('الأسبوع ' + W.n), de: W.de || '', lessons: ls };
    });
    return { ok: errors.length === 0, errors: errors, weeks: weeks, lessons: lessons, byId: ids, version: data.version || '' };
  }

  function validateVocabulary(data) {
    var errors = [];
    if (!data || !isArr(data.items)) return { ok: false, errors: ['vocabulary: items missing'], items: [], byId: {} };
    var byId = {};
    var items = data.items.filter(function (v, i) {
      if (!v || !isStr(v.id) || !isStr(v.de) || !isStr(v.ar)) { errors.push('vocabulary #' + (i + 1) + ' is malformed'); return false; }
      if (byId[v.id]) { errors.push(v.id + ': duplicate vocabulary id'); return false; }
      byId[v.id] = v; return true;
    });
    return { ok: errors.length === 0, errors: errors, items: items, byId: byId };
  }

  return { validateLesson: validateLesson, validateCurriculum: validateCurriculum, validateVocabulary: validateVocabulary };
});
