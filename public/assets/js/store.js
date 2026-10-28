/* Learner progress store. All persistence goes through a storage adapter (localStorage in the
   browser, an in-memory object in tests). Progress never lives inside lesson data, so content
   updates cannot overwrite it. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./srs.js'));
  else root.Store = factory(root.SRS);
})(typeof self !== 'undefined' ? self : this, function (SRS) {
  'use strict';
  var KEY = 'b1app:progress:v2';
  var SCHEMA = 2;

  function empty(now) {
    return { schema: SCHEMA, created: now, updated: now, items: {}, lessons: {}, failed: {},
      weekly: {}, activity: {}, settings: { theme: 'auto', rate: 0.9, voice: '', dailyLimit: 40 } };
  }

  function dayKey(t) { var d = new Date(t); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }

  function isObj(x) { return !!x && typeof x === 'object' && !Array.isArray(x); }

  // Accepts anything; returns a structurally valid progress object (unknown/broken parts dropped).
  function sanitize(raw, now) {
    var p = empty(now);
    if (!isObj(raw)) return p;
    ['items', 'lessons', 'failed', 'weekly', 'activity'].forEach(function (k) { if (isObj(raw[k])) p[k] = raw[k]; });
    if (isObj(raw.settings)) Object.assign(p.settings, raw.settings);
    Object.keys(p.items).forEach(function (k) {
      var s = p.items[k];
      if (!isObj(s) || typeof s.due !== 'number' || typeof s.reviews !== 'number') delete p.items[k];
    });
    if (typeof raw.created === 'number') p.created = raw.created;
    if (typeof raw.updated === 'number') p.updated = raw.updated;
    return p;
  }

  function create(storage, clock) {
    clock = clock || function () { return Date.now(); };
    var data;
    function load() {
      var raw = null;
      try { raw = storage.getItem(KEY); } catch (e) { raw = null; }
      var parsed = null;
      if (raw) { try { parsed = JSON.parse(raw); } catch (e) { parsed = null; } }
      data = sanitize(parsed, clock());
      if (!raw) migrateV1();
      return data;
    }
    function save() {
      data.updated = clock();
      try { storage.setItem(KEY, JSON.stringify(data)); return true; } catch (e) { return false; }
    }
    // The original page stored "memorised" ticks under b1sent:v1 as {done:{"w.d.i":true}}.
    // They are imported as self-reported knowledge to be verified, not as mastery.
    function migrateV1() {
      var raw;
      try { raw = storage.getItem('b1sent:v1'); } catch (e) { return; }
      if (!raw) return;
      try {
        var o = JSON.parse(raw), n = 0, now = clock();
        Object.keys((o && o.done) || {}).forEach(function (k) {
          var m = k.match(/^(\d+)\.(\d+)\.(\d+)$/);
          if (!m) return;
          var id = 's:o' + (+m[1] + 1) + '-' + (+m[2] + 1) + '-' + String(+m[3] + 1).padStart(2, '0');
          if (!data.items[id]) { data.items[id] = Object.assign(SRS.fresh(now), { legacy: true }); n++; }
        });
        if (n) { data.migratedV1 = n; save(); }
      } catch (e) { /* ignore broken legacy data */ }
    }
    function touch(kind, n) {
      var d = dayKey(clock());
      var a = data.activity[d] || (data.activity[d] = {});
      a[kind] = (a[kind] || 0) + (n || 1);
    }

    var api = {
      KEY: KEY,
      get data() { return data; },
      load: load, save: save,
      item: function (key) { return data.items[key] || null; },
      grade: function (key, g) { data.items[key] = SRS.review(data.items[key], g, clock()); touch('reviews'); save(); return data.items[key]; },
      markMastered: function (key) { data.items[key] = SRS.markMastered(data.items[key], clock()); save(); return data.items[key]; },
      setDifficult: function (key, on) { data.items[key] = SRS.setDifficult(data.items[key], on, clock()); save(); return data.items[key]; },
      lesson: function (id) { return data.lessons[id] || (data.lessons[id] = {}); },
      viewLesson: function (id) { var l = api.lesson(id); if (!l.viewed) { l.viewed = clock(); touch('lessons'); save(); } },
      lessonEvent: function (id, kind, value) {
        var l = api.lesson(id);
        if (kind === 'quiz') { l.quiz = { last: value, best: Math.max(value, (l.quiz && l.quiz.best) || 0), at: clock() }; touch('quiz'); }
        else if (kind === 'listen') { l.listen = (l.listen || 0) + 1; touch('listen'); }
        else if (kind === 'speak') { l.task = clock(); touch('speak'); }
        else if (kind === 'dialogue') { l.dialogue = { score: value, at: clock() }; touch('listen'); }
        else if (kind === 'exercise') { l.ex = (l.ex || 0) + 1; touch('exercises'); }
        save();
      },
      failExercise: function (key, info) { data.failed[key] = Object.assign({ at: clock() }, info || {}); save(); },
      passExercise: function (key) { if (data.failed[key]) { delete data.failed[key]; save(); } },
      weekly: function (week, result) { data.weekly[week] = Object.assign({ at: clock() }, result); touch('tests'); save(); },
      setting: function (k, v) { if (arguments.length > 1) { data.settings[k] = v; save(); } return data.settings[k]; },
      exportJSON: function () { return JSON.stringify({ app: 'b1-practice', exported: clock(), progress: data }, null, 1); },
      parseImport: function (text) {
        var o = JSON.parse(text);
        var p = o && o.progress ? o.progress : o;
        if (!isObj(p) || !isObj(p.items)) throw new Error('الملف ما فيه بيانات تقدّم صالحة');
        return sanitize(p, clock());
      },
      importJSON: function (text, mode) {
        var incoming = api.parseImport(text);
        data = mode === 'replace' ? incoming : merge(data, incoming);
        save();
        return data;
      },
      replace: function (p) { data = sanitize(p, clock()); save(); return data; },
      reset: function () { data = empty(clock()); save(); return data; }
    };
    return api;
  }

  // Merge two progress objects (e.g. local + server). Per item the more recently reviewed state wins.
  function merge(a, b) {
    var now = Date.now();
    a = sanitize(a, now); b = sanitize(b, now);
    var out = sanitize(JSON.parse(JSON.stringify(a)), now);
    Object.keys(b.items).forEach(function (k) {
      var x = out.items[k], y = b.items[k];
      if (!x || (y.last || 0) > (x.last || 0) || ((y.last || 0) === (x.last || 0) && y.reviews > x.reviews)) out.items[k] = y;
    });
    Object.keys(b.lessons).forEach(function (k) {
      var x = out.lessons[k] || {}, y = b.lessons[k] || {};
      var m = Object.assign({}, x, y);
      if (x.viewed && y.viewed) m.viewed = Math.min(x.viewed, y.viewed);
      if (x.task || y.task) m.task = Math.max(x.task || 0, y.task || 0);
      m.listen = Math.max(x.listen || 0, y.listen || 0);
      m.ex = Math.max(x.ex || 0, y.ex || 0);
      if (x.quiz || y.quiz) m.quiz = { best: Math.max((x.quiz && x.quiz.best) || 0, (y.quiz && y.quiz.best) || 0), last: ((y.quiz && y.quiz.at) || 0) > ((x.quiz && x.quiz.at) || 0) ? y.quiz.last : x.quiz.last, at: Math.max((x.quiz && x.quiz.at) || 0, (y.quiz && y.quiz.at) || 0) };
      out.lessons[k] = m;
    });
    Object.keys(b.failed).forEach(function (k) { if (!out.failed[k] || b.failed[k].at > out.failed[k].at) out.failed[k] = b.failed[k]; });
    Object.keys(b.weekly).forEach(function (k) { if (!out.weekly[k] || b.weekly[k].at > out.weekly[k].at) out.weekly[k] = b.weekly[k]; });
    Object.keys(b.activity).forEach(function (d) {
      var x = out.activity[d] || {}, y = b.activity[d], m = {};
      Object.keys(x).concat(Object.keys(y)).forEach(function (k) { m[k] = Math.max(x[k] || 0, y[k] || 0); });
      out.activity[d] = m;
    });
    out.created = Math.min(a.created, b.created);
    out.updated = Math.max(a.updated, b.updated);
    return out;
  }

  function memoryStorage(init) {
    var m = Object.assign({}, init || {});
    return { getItem: function (k) { return k in m ? m[k] : null; }, setItem: function (k, v) { m[k] = String(v); }, removeItem: function (k) { delete m[k]; }, _dump: m };
  }

  return { KEY: KEY, SCHEMA: SCHEMA, create: create, merge: merge, sanitize: sanitize, empty: empty, dayKey: dayKey, memoryStorage: memoryStorage };
});
