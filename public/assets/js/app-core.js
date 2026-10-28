/* App core: data loading, routing, shared helpers, dashboard and week overview. */
(function () {
  'use strict';
  var T = window.TextKit, S = window.SRS;
  var App = window.App = { views: {}, data: null, vocab: null, exam: null, store: null };
  var esc = App.esc = T.esc;

  // ---------- icons ----------
  var ICONS = {
    play: '<path d="M8 5v14l11-7z"/>',
    slow: '<path d="M6 5v14l8-7zM15 5h3v14h-3z"/>',
    eye: '<path d="M12 5C7 5 2.7 8.1 1 12c1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7zm0 11.5A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>',
    eyeoff: '<path d="M2 4.3 3.3 3 21 20.7 19.7 22l-3.1-3.1A11.6 11.6 0 0 1 12 19C7 19 2.7 15.9 1 12a12.4 12.4 0 0 1 4.2-5.1zM12 5c5 0 9.3 3.1 11 7a12.3 12.3 0 0 1-3.3 4.4l-3-3A4.5 4.5 0 0 0 10.6 7.6L8.4 5.4A11.7 11.7 0 0 1 12 5z"/>',
    flag: '<path d="M5 3h2v18H5zM8 4h10l-2 4 2 4H8z"/>',
    star: '<path d="m12 2 3 6.5 7 .8-5.2 4.7 1.5 7L12 17.5 5.7 21l1.5-7L2 9.3l7-.8z"/>',
    info: '<path d="M11 10h2v7h-2zm0-4h2v2h-2zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>',
    mic: '<path d="M12 15a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v7a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1a7 7 0 0 0 6-6.9z"/>',
    next: '<path d="M15 6 9 12l6 6-1.4 1.4L6.2 12l7.4-7.4z"/>',
    prev: '<path d="m9 6 6 6-6 6 1.4 1.4 7.4-7.4-7.4-7.4z"/>',
    home: '<path d="M12 3 2 11h3v9h6v-6h2v6h6v-9h3z"/>',
    review: '<path d="M12 4V1L8 5l4 4V6a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"/>',
    book: '<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zm16 0h-4a3 3 0 0 0-1 .2V19a2 2 0 0 1 1-.3h4z"/>',
    exam: '<path d="M9 2h6v2h4v18H5V4h4zm1 2v2h4V4zm-1 7v2h6v-2zm0 4v2h6v-2z"/>',
    gear: '<path d="m19.4 13 .1-1-.1-1 2.1-1.6-2-3.5-2.5 1a7 7 0 0 0-1.7-1L15 3h-4l-.4 2.7a7 7 0 0 0-1.7 1l-2.5-1-2 3.5L6.5 11l-.1 1 .1 1-2.1 1.6 2 3.5 2.5-1a7 7 0 0 0 1.7 1L11 21h4l.4-2.7a7 7 0 0 0 1.7-1l2.5 1 2-3.5zM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>',
    check: '<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>'
  };
  App.icon = function (n) { return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[n] || '') + '</svg>'; };

  // ---------- helpers ----------
  App.$ = function (sel, el) { return (el || document).querySelector(sel); };
  App.$$ = function (sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); };
  App.now = function () { return Date.now(); };
  App.toast = function (msg) {
    var t = App.$('#toast'); t.textContent = msg; t.hidden = false;
    clearTimeout(App._tt); App._tt = setTimeout(function () { t.hidden = true; }, 2600);
  };
  App.de = function (s, tag) { return '<' + (tag || 'p') + ' class="de" lang="de" dir="ltr">' + T.highlight(s) + '</' + (tag || 'p') + '>'; };
  App.ar = function (s) { return '<p class="ar">' + esc(s) + '</p>'; };
  App.go = function (hash) { if (location.hash === hash) route(); else location.hash = hash; };
  App.speak = function (text, opts) {
    if (!window.Speech.speak(text, opts)) App.toast('المتصفح ما بيدعم النطق الصوتي');
  };
  App.speakBtn = function (text, extra) {
    if (!window.Speech.supported) return '';
    return '<button type="button" class="ibtn" data-speak="' + esc(T.plain(text)) + '" aria-label="استمع">' + App.icon('play') + '</button>' +
      (extra === false ? '' : '<button type="button" class="ibtn" data-speak-slow="' + esc(T.plain(text)) + '" aria-label="استمع ببطء">' + App.icon('slow') + '</button>');
  };
  App.lessonById = function (id) { return App.data.byId[id]; };
  App.sentenceIndex = {};
  App.vocabOf = function (L) { return L.vocab.map(function (id) { return App.vocab.byId[id]; }).filter(Boolean); };
  App.taskLabel = { short: 'جواب قصير', connected: '2–3 جمل مربوطة', '60s': '30–60 ثانية', presentation: 'عرض 1–3 دقايق' };

  // Per-lesson progress, separating viewed / practised / recalled / mastered.
  App.lessonProgress = function (L) {
    var items = App.store.data.items, lp = App.store.data.lessons[L.id] || {};
    var r = { viewed: !!lp.viewed, practiced: 0, recalled: 0, mastered: 0, task: !!lp.task, quiz: lp.quiz ? lp.quiz.best : null, listen: lp.listen || 0 };
    L.sentences.forEach(function (s) {
      var st = items['s:' + s.id];
      if (st && st.reviews > 0) r.practiced++;
      if (st && st.ok > 0) r.recalled++;
      if (S.isMastered(st)) r.mastered++;
    });
    r.completed = r.recalled === L.sentences.length && r.task;
    return r;
  };
  App.nextLesson = function () {
    var ls = App.data.lessons;
    for (var i = 0; i < ls.length; i++) if (!App.lessonProgress(ls[i]).completed) return ls[i];
    return ls[ls.length - 1];
  };
  App.dueKeys = function () { return S.queue(App.store.data.items, App.now()); };

  App.stats = function () {
    var d = App.store.data, items = d.items, s = { sViewed: 0, sPracticed: 0, sRecalled: 0, sMastered: 0, sDifficult: 0, manual: 0,
      vPracticed: 0, vRecalled: 0, vMastered: 0, vDifficult: 0, completed: 0, listen: 0, speak: 0 };
    App.data.lessons.forEach(function (L) {
      var lp = d.lessons[L.id] || {};
      if (lp.viewed) s.sViewed += L.sentences.length;
      if (App.lessonProgress(L).completed) s.completed++;
      s.listen += (lp.listen || 0) + (lp.dialogue ? 1 : 0);
      if (lp.task) s.speak++;
    });
    Object.keys(items).forEach(function (k) {
      var st = items[k], kind = k.charAt(0), status = S.status(st);
      if (kind === 's') {
        if (st.reviews > 0) s.sPracticed++;
        if (status === 'recalled' || status === 'mastered') s.sRecalled++;
        if (status === 'mastered') s.sMastered++;
        if (status === 'mastered' && st.manual) s.manual++;
        if (status === 'difficult') s.sDifficult++;
      } else if (kind === 'v') {
        if (st.reviews > 0) s.vPracticed++;
        if (status === 'recalled' || status === 'mastered') s.vRecalled++;
        if (status === 'mastered') s.vMastered++;
        if (status === 'difficult') s.vDifficult++;
      }
    });
    s.due = App.dueKeys().length;
    s.failed = Object.keys(d.failed).length;
    return s;
  };

  App.streak = function () {
    var act = App.store.data.activity, n = 0, t = new Date();
    if (!act[window.Store.dayKey(t.getTime())]) t.setDate(t.getDate() - 1);
    while (act[window.Store.dayKey(t.getTime())]) { n++; t.setDate(t.getDate() - 1); }
    return n;
  };

  // ---------- rendering ----------
  App.render = function (html, title) {
    var v = App.$('#view');
    v.innerHTML = html;
    document.title = (title ? title + ' · ' : '') + 'B1 عملي';
    var h = v.querySelector('h1');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    window.scrollTo(0, 0);
    updateNav();
  };
  function updateNav() {
    var due = App.store ? App.dueKeys().length + Object.keys(App.store.data.failed).length : 0;
    var b = App.$('#dueBadge'); if (b) { b.textContent = due > 99 ? '99+' : due; b.hidden = !due; }
    var cur = (location.hash || '#/').split('/')[1] || '';
    App.$$('.nav a').forEach(function (a) { a.setAttribute('aria-current', a.getAttribute('data-r') === cur ? 'page' : 'false'); });
  }
  App.updateNav = updateNav;

  function bar(value, max, label) {
    var p = max ? Math.round(value / max * 100) : 0;
    return '<div class="bar" role="progressbar" aria-label="' + esc(label) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p + '"><span style="width:' + p + '%"></span></div>';
  }
  App.bar = bar;

  // ---------- dashboard ----------
  App.views[''] = function () {
    var st = App.stats(), next = App.nextLesson(), np = App.lessonProgress(next), total = App.data.lessons.length;
    var totalS = App.data.lessons.reduce(function (n, L) { return n + L.sentences.length; }, 0);
    var act = App.store.data.activity, days = [], t = new Date();
    for (var i = 13; i >= 0; i--) { var d = new Date(t); d.setDate(t.getDate() - i); var k = window.Store.dayKey(d.getTime()), a = act[k] || {}; days.push({ k: k, n: (a.reviews || 0) + (a.listen || 0) + (a.speak || 0) + (a.exercises || 0) + (a.quiz || 0) }); }
    var maxN = Math.max.apply(null, days.map(function (x) { return x.n; }).concat([1]));
    var weekly = Object.keys(App.store.data.weekly).sort(function (a, b) { return a - b; });
    var html = '<h1 class="sr-only">لوحة التقدّم</h1>' +
      '<section class="hero card">' +
        '<p class="eyebrow">الدرس الجاي · الأسبوع ' + next.week + ' · اليوم ' + next.day + '</p>' +
        '<h2>' + esc(next.title) + '</h2>' +
        (next.de ? '<p class="de-sub" lang="de" dir="ltr">' + esc(next.de) + '</p>' : '') +
        '<p class="muted">' + esc(next.goal || '') + '</p>' +
        '<div class="row"><a class="btn primary" href="#/l/' + next.id + '">' + (np.viewed ? 'كمّل الدرس' : 'ابدأ الدرس') + '</a>' +
        (st.due + st.failed ? '<a class="btn" href="#/review">راجع ' + (st.due + st.failed) + ' عنصر مستحق</a>' : '<span class="muted small">ما في شي مستحق للمراجعة هلأ</span>') + '</div>' +
      '</section>' +
      '<section class="grid4">' +
        tile('الدروس المكتملة', st.completed + ' / ' + total, 'باقي ' + (total - st.completed)) +
        tile('مستحق للمراجعة', st.due, st.failed ? '+ ' + st.failed + ' تمرين غلطت فيه' : 'جمل وكلمات') +
        tile('صعبة', st.sDifficult + st.vDifficult, st.sDifficult + ' جمل · ' + st.vDifficult + ' كلمات') +
        tile('سلسلة الأيام', App.streak(), 'يوم متواصل') +
      '</section>' +
      '<section class="card"><h2>الجمل: من المشاهدة للإتقان</h2>' +
        '<p class="muted small">المشاهدة ما بتنحسب حفظ. «تذكّرت» = آخر محاولة كانت صحيحة. «متقنة» = نجحت مرات متتالية لحد ما صارت المراجعة كل 3 أسابيع أو أكتر.</p>' +
        funnel([['شفتها', st.sViewed], ['تمرّنت عليها', st.sPracticed], ['تذكّرتها صح', st.sRecalled], ['متقنة', st.sMastered]], totalS) +
        (st.manual ? '<p class="muted small">منها ' + st.manual + ' معلّمة يدوياً كمتقنة (رح ترجعلك للتأكيد).</p>' : '') +
      '</section>' +
      '<section class="grid2">' +
        '<div class="card"><h2>المفردات</h2>' + funnel([['تمرّنت عليها', st.vPracticed], ['تذكّرتها صح', st.vRecalled], ['متقنة', st.vMastered]], App.vocab.items.length) +
          '<a class="link" href="#/vocab">كل المفردات (' + App.vocab.items.length + ')</a></div>' +
        '<div class="card"><h2>السماع والمحادثة</h2><ul class="kv">' +
          '<li><span>تمارين سماع وحوارات</span><b>' + st.listen + '</b></li>' +
          '<li><span>مهام محادثة/كتابة مكتملة</span><b>' + st.speak + ' / ' + total + '</b></li>' +
          '<li><span>أفضل علامات الاختبارات القصيرة</span><b>' + quizAvg() + '</b></li></ul>' +
          '<a class="link" href="#/exam">تدريب امتحان المحادثة</a></div>' +
      '</section>' +
      '<section class="card"><h2>النشاط آخر 14 يوم</h2><div class="spark" role="img" aria-label="نشاط آخر 14 يوم">' +
        days.map(function (x) { return '<span title="' + x.k + ': ' + x.n + '" style="height:' + Math.max(4, Math.round(x.n / maxN * 100)) + '%"' + (x.n ? '' : ' class="zero"') + '></span>'; }).join('') +
      '</div></section>' +
      '<section class="card"><h2>الاختبارات الأسبوعية</h2>' +
        (weekly.length ? '<ul class="kv">' + weekly.map(function (w) { var r = App.store.data.weekly[w]; return '<li><span>الأسبوع ' + w + '</span><b>' + r.score + '%</b><span class="muted small">تذكّر ' + r.recall + '% · سماع ' + r.listening + '% · محادثة ' + (r.speaking ? '✓' : '—') + '</span></li>'; }).join('') + '</ul>' : '<p class="muted">لسا ما عملت اختبار أسبوعي. الاختبار بآخر صفحة كل أسبوع.</p>') +
      '</section>' +
      '<section class="card"><h2>المنهج: 12 أسبوع</h2><div class="weeks">' +
        App.data.weeks.map(function (W) {
          var done = W.lessons.filter(function (id) { return App.lessonProgress(App.lessonById(id)).completed; }).length;
          return '<a class="wk" href="#/w/' + W.n + '"><span class="n">' + W.n + '</span><span class="t">' + esc(W.title) + '</span>' + bar(done, W.lessons.length, 'الأسبوع ' + W.n) + '</a>';
        }).join('') + '</div></section>';
    App.render(html, 'الرئيسية');
  };
  function tile(label, value, sub) { return '<div class="tile card"><span class="label">' + label + '</span><b class="num">' + value + '</b><span class="muted small">' + sub + '</span></div>'; }
  function funnel(rows, max) {
    return '<div class="funnel">' + rows.map(function (r) { return '<div class="frow"><span>' + r[0] + '</span>' + bar(r[1], max, r[0]) + '<b class="num">' + r[1] + '</b></div>'; }).join('') + '</div>';
  }
  function quizAvg() {
    var q = Object.keys(App.store.data.lessons).map(function (k) { return App.store.data.lessons[k].quiz; }).filter(Boolean);
    if (!q.length) return '—';
    return Math.round(q.reduce(function (n, x) { return n + x.best; }, 0) / q.length) + '% (' + q.length + ' درس)';
  }

  // ---------- week overview ----------
  App.views.w = function (p) {
    var W = App.data.weeks.filter(function (x) { return x.n === +p[0]; })[0];
    if (!W) return App.views.notfound();
    var test = App.store.data.weekly[W.n];
    App.render('<nav class="crumbs"><a href="#/">الرئيسية</a></nav>' +
      '<h1>الأسبوع ' + W.n + ': ' + esc(W.title) + '</h1><p class="de-sub" lang="de" dir="ltr">' + esc(W.de) + '</p>' +
      '<ol class="lessons">' + W.lessons.map(function (id) {
        var L = App.lessonById(id), pr = App.lessonProgress(L);
        return '<li class="card lrow' + (pr.completed ? ' done' : '') + '"><a href="#/l/' + id + '">' +
          '<span class="n">' + L.day + '</span><span class="t"><b>' + esc(L.title) + '</b><span class="muted small">' + esc(L.goal || '') + '</span></span>' +
          '<span class="st small">' + (pr.completed ? App.icon('check') + ' مكتمل' : pr.recalled + '/10 تذكّر · ' + (pr.task ? 'المهمة ✓' : 'المهمة —')) + '</span>' +
          (L.origin === 'original' ? '<span class="tag">من ملفك الأصلي</span>' : '') + '</a></li>';
      }).join('') + '</ol>' +
      '<section class="card"><h2>اختبار الأسبوع</h2><p class="muted">15 سؤال من دروس هالأسبوع: تذكّر بالكتابة، سماع، وفهم حوار. ' + (test ? 'آخر نتيجة: <b>' + test.score + '%</b>' : '') + '</p>' +
      '<a class="btn primary" href="#/test/' + W.n + '">ابدأ اختبار الأسبوع</a></section>', 'الأسبوع ' + W.n);
  };

  App.views.notfound = function () { App.render('<h1>الصفحة مش موجودة</h1><p><a href="#/">ارجع للرئيسية</a></p>'); };

  // ---------- router ----------
  function route() {
    window.Speech.stop();
    if (App.cleanup) { try { App.cleanup(); } catch (e) { } App.cleanup = null; }
    var parts = (location.hash || '#/').replace(/^#\/?/, '').split('/');
    var name = parts.shift() || '';
    var view = App.views[name] || App.views.notfound;
    try { view(parts); } catch (e) {
      console.error(e);
      App.render('<h1>صار خطأ</h1><p class="muted">' + esc(e.message) + '</p><p><a href="#/">ارجع للرئيسية</a></p>');
    }
  }
  App.route = route;

  // ---------- global delegated handlers ----------
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-speak],[data-speak-slow]');
    if (b) { var slow = b.hasAttribute('data-speak-slow'); App.speak(b.getAttribute(slow ? 'data-speak-slow' : 'data-speak'), { slow: slow, audio: b.getAttribute('data-audio') || '' }); }
  });

  // ---------- theme / connectivity ----------
  App.applyTheme = function () {
    var t = App.store.data.settings.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  };
  function online() { var o = App.$('#offline'); if (o) o.hidden = navigator.onLine !== false; }
  window.addEventListener('online', online); window.addEventListener('offline', online);

  // ---------- boot ----------
  function fetchJSON(url) { return fetch(url, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(url + ' → ' + r.status); return r.json(); }); }
  App.boot = function () {
    var storage; try { storage = window.localStorage; storage.getItem('x'); } catch (e) { storage = window.Store.memoryStorage(); App.noStorage = true; }
    App.store = window.Store.create(storage);
    App.store.load();
    App.applyTheme();
    window.Speech.configure({ rate: App.store.data.settings.rate, voice: App.store.data.settings.voice });
    online();
    Promise.all([fetchJSON('data/lessons/curriculum.json'), fetchJSON('data/vocabulary/vocabulary.json'), fetchJSON('data/exams/exam.json')])
      .then(function (r) {
        App.data = window.Validate.validateCurriculum(r[0]);
        App.vocab = window.Validate.validateVocabulary(r[1]);
        App.exam = r[2];
        App.data.lessons.forEach(function (L) { L.sentences.forEach(function (s) { App.sentenceIndex[s.id] = { s: s, L: L }; }); });
        if (!App.data.lessons.length) throw new Error('ملف الدروس فاضي أو تالف');
        if (App.data.errors.length) console.warn('Content problems:', App.data.errors);
        if (App.noStorage) App.toast('التخزين المحلي مش متاح: التقدّم ما رح ينحفظ بعد إغلاق الصفحة');
        window.addEventListener('hashchange', route);
        route();
        document.documentElement.classList.add('ready');
      })
      .catch(function (e) {
        console.error(e);
        App.$('#view').innerHTML = '<div class="card"><h1>ما قدرنا نحمّل الدروس</h1><p class="muted">' + esc(e.message) +
          '</p><p>إذا كنت أوفلاين لأول مرة، افتح التطبيق مرة وإنت متصل لحتى ينحفظ.</p><button class="btn primary" onclick="location.reload()">جرّب مرة تانية</button></div>';
      });
  };
})();
