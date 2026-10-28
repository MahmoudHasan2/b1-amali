/* Spaced-repetition scheduler. Pure functions; no DOM, no storage.
   Grades: 0 = Again, 1 = Hard, 2 = Good, 3 = Easy. Times are epoch milliseconds. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.SRS = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  var MIN = 60 * 1000, DAY = 24 * 60 * MIN;
  var STEPS = [1, 3, 7, 14];          // days after the 1st, 2nd, 3rd, 4th successful recall ("Good")
  var RELEARN = 10 * MIN;             // a forgotten item comes back in the same session
  var MASTERED_IVL = 21;              // days; reached only after repeated successful recalls
  var MAX_IVL = 365;

  function fresh(now) {
    return { first: now, last: null, due: now, reviews: 0, ok: 0, fail: 0, reps: 0, lapses: 0,
      ease: 2.5, ivl: 0, lastGrade: null, diff: false, manual: false };
  }

  function review(prev, grade, now) {
    if (grade !== 0 && grade !== 1 && grade !== 2 && grade !== 3) throw new Error('invalid grade');
    var s = Object.assign(fresh(now), prev || {});
    s.reviews += 1; s.last = now; s.lastGrade = grade;
    if (grade === 0) {
      s.fail += 1; s.lapses += 1; s.reps = 0; s.ivl = 0;
      s.ease = Math.max(1.3, s.ease - 0.2);
      s.manual = false;
      s.due = now + RELEARN;
      return s;
    }
    s.ok += 1;
    var ivl;
    if (grade === 1) {
      s.ease = Math.max(1.3, s.ease - 0.15);
      ivl = s.reps === 0 ? 1 : Math.max(s.ivl + 1, Math.round(s.ivl * 1.2));
    } else if (grade === 2) {
      ivl = s.reps < STEPS.length ? Math.max(STEPS[s.reps], s.reps ? s.ivl + 1 : 0) : Math.round(s.ivl * s.ease);
    } else {
      s.ease = s.ease + 0.15;
      ivl = s.reps === 0 ? 3 : Math.max(STEPS[Math.min(s.reps + 1, STEPS.length - 1)], Math.round(s.ivl * s.ease * 1.3));
    }
    s.ivl = Math.min(MAX_IVL, Math.max(1, ivl));
    s.reps += 1;
    s.due = now + s.ivl * DAY;
    return s;
  }

  // Learner claims "I know this": schedule a verification review instead of trusting it blindly.
  function markMastered(prev, now) {
    var s = Object.assign(fresh(now), prev || {});
    s.manual = true; s.diff = false;
    if (s.ivl < 7) { s.ivl = 7; s.due = now + 7 * DAY; }
    return s;
  }

  function setDifficult(prev, on, now) {
    var s = Object.assign(fresh(now), prev || {});
    s.diff = !!on;
    if (on && s.due > now + DAY) s.due = now + DAY;
    if (on) s.manual = false;
    return s;
  }

  function isMastered(s) { return !!s && (s.manual || (s.ivl >= MASTERED_IVL && s.lastGrade >= 2)); }
  function isDifficult(s) { return !!s && !isMastered(s) && (s.diff || s.lapses >= 2 || s.lastGrade === 1 || s.lastGrade === 0); }
  function isDue(s, now) { return !!s && (s.reviews > 0 || s.manual || s.legacy) && s.due <= now; }

  // new | learning | recalled | difficult | mastered
  function status(s) {
    if (!s || (s.reviews === 0 && !s.manual && !s.diff)) return 'new';
    if (isMastered(s)) return 'mastered';
    if (isDifficult(s)) return 'difficult';
    if (s.lastGrade >= 2) return 'recalled';
    return 'learning';
  }

  // Build a queue from a map {key: state}. Each key appears once by construction.
  function queue(items, now, opts) {
    opts = opts || {};
    var out = [];
    Object.keys(items || {}).forEach(function (k) {
      var s = items[k];
      if (opts.prefix && k.indexOf(opts.prefix) !== 0) return;
      if (opts.difficult ? isDifficult(s) : isDue(s, now)) out.push(k);
    });
    out.sort(function (a, b) {
      var A = items[a], B = items[b];
      var fa = A.lastGrade === 0 ? 0 : 1, fb = B.lastGrade === 0 ? 0 : 1;
      return fa - fb || A.due - B.due;
    });
    return opts.limit ? out.slice(0, opts.limit) : out;
  }

  function formatInterval(ms) {
    if (ms < 60 * MIN) return Math.max(1, Math.round(ms / MIN)) + ' دقيقة';
    if (ms < DAY) return Math.round(ms / (60 * MIN)) + ' ساعة';
    var d = Math.round(ms / DAY);
    return d === 1 ? 'يوم' : d === 2 ? 'يومين' : d + ' أيام';
  }

  // Preview of the next interval for each grade, for button labels.
  function preview(prev, now) {
    return [0, 1, 2, 3].map(function (g) { return review(prev, g, now).due - now; });
  }

  return { DAY: DAY, MIN: MIN, STEPS: STEPS, MASTERED_IVL: MASTERED_IVL, fresh: fresh, review: review,
    markMastered: markMastered, setDifficult: setDifficult, isMastered: isMastered, isDifficult: isDifficult,
    isDue: isDue, status: status, queue: queue, preview: preview, formatInterval: formatInterval };
});
