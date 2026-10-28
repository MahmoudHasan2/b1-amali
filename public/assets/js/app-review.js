/* Daily review queue, lesson quizzes, weekly tests and the vocabulary browser. */
(function () {
  'use strict';
  var App = window.App, T = window.TextKit, S = window.SRS, esc = App.esc;
  var GR = [['0', 'نسيت', 'again'], ['1', 'صعبة', 'hard'], ['2', 'منيح', 'good'], ['3', 'سهلة', 'easy']];

  // ================= review queue =================
  var rv = null;
  App.views.review = function (p) {
    var kind = p[0] || 'due', now = App.now(), d = App.store.data;
    var limit = d.settings.dailyLimit || 40;
    var keys = kind === 'difficult' ? S.queue(d.items, now, { difficult: true, limit: limit })
      : kind === 'vocab' ? S.queue(d.items, now, { prefix: 'v:', limit: limit })
      : S.queue(d.items, now, { limit: limit });
    var cards = keys.map(function (k) { return { key: k }; });
    if (kind === 'due') Object.keys(d.failed).forEach(function (fk) {
      var f = d.failed[fk];
      if (f.sid && !cards.some(function (c) { return c.key === 's:' + f.sid; })) cards.push({ key: 's:' + f.sid, failed: fk });
      else if (!f.sid) cards.push({ failedLink: fk, f: f });
    });
    cards = cards.filter(function (c) { return c.failedLink || resolve(c.key); });
    rv = { cards: cards, i: 0, shown: false, done: 0, kind: kind, attempt: '' };
    draw();
  };
  function resolve(key) {
    if (key.indexOf('s:') === 0) { var x = App.sentenceIndex[key.slice(2)]; return x ? { type: 's', s: x.s, L: x.L } : null; }
    if (key.indexOf('v:') === 0) { var v = App.vocab.byId[key.slice(2)]; return v ? { type: 'v', v: v } : null; }
    return null;
  }
  function draw() {
    var title = rv.kind === 'difficult' ? 'مراجعة الجمل والكلمات الصعبة' : rv.kind === 'vocab' ? 'مراجعة المفردات' : 'المراجعة اليومية';
    var head = '<nav class="crumbs"><a href="#/">الرئيسية</a></nav><h1>' + title + '</h1>' +
      '<div class="seg small-seg"><a href="#/review" aria-current="' + (rv.kind === 'due') + '">المستحق</a><a href="#/review/difficult" aria-current="' + (rv.kind === 'difficult') + '">الصعبة</a><a href="#/review/vocab" aria-current="' + (rv.kind === 'vocab') + '">المفردات</a></div>';
    if (!rv.cards.length) {
      return App.render(head + '<div class="card empty"><p>' + (rv.kind === 'difficult' ? 'ما في عناصر صعبة هلأ.' : 'ما في شي مستحق هلأ. 🎉') + '</p><p class="muted">العناصر بترجع حسب جدول المراجعة (بعد يوم، 3 أيام، أسبوع، أسبوعين… حسب تقييمك). كمّل الدرس الجاي لتضيف جمل جديدة.</p><a class="btn primary" href="#/l/' + App.nextLesson().id + '">الدرس الجاي</a></div>', title);
    }
    if (rv.i >= rv.cards.length) {
      return App.render(head + '<div class="card empty"><p>' + App.icon('check') + ' خلصت ' + rv.done + ' عنصر.</p><a class="btn primary" href="#/">الرئيسية</a> <a class="btn" href="#/review">تحقق مرة تانية</a></div>', title);
    }
    var c = rv.cards[rv.i], body;
    if (c.failedLink) {
      var L = App.lessonById(c.f.lesson);
      body = '<div class="card"><p>غلطت بأسئلة الحوار بدرس «' + esc(L ? L.title : c.f.lesson) + '».</p><a class="btn primary" href="#/l/' + c.f.lesson + '/d">افتح الحوار</a> <button type="button" class="btn" data-r="skip">تخطّى</button></div>';
    } else {
      var r = resolve(c.key), item = App.store.item(c.key), pv = S.preview(item, App.now());
      var front, back;
      if (r.type === 's') {
        front = '<p class="eyebrow">جملة · ' + esc(r.L.title) + '</p>' + App.ar(r.s.ar) +
          (rv.shown ? '' : '<label class="small" for="rv-att">قولها أو اكتبها بالألماني:</label><textarea id="rv-att" rows="2" lang="de" dir="ltr">' + esc(rv.attempt) + '</textarea>');
        back = App.de(r.s.de) + App.speakBtn(r.s.de) + (rv.attempt ? App.compareHtml(T.compare(rv.attempt, r.s.de), r.s).split('<p class="de"')[0] : '');
      } else {
        var dir = T.hashStr(c.key + new Date().toDateString()) % 2 ? 'ar' : 'de';
        front = '<p class="eyebrow">كلمة · ' + (dir === 'de' ? 'شو معناها؟' : 'كيف بتقولها بالألماني؟') + '</p>' + (dir === 'de' ? '<p class="de big" lang="de" dir="ltr">' + esc(r.v.de) + '</p>' : '<p class="ar big">' + esc(r.v.ar) + '</p>');
        back = (dir === 'de' ? '<p class="ar big">' + esc(r.v.ar) + '</p>' : '<p class="de big" lang="de" dir="ltr">' + esc(r.v.de) + '</p>') + App.speakBtn(r.v.head, false) +
          (r.v.example ? '<p class="small ex"><span lang="de" dir="ltr">' + esc(r.v.example.de) + '</span><br><span class="muted">' + esc(r.v.example.ar) + '</span></p>' : '');
      }
      body = '<div class="card rvcard">' + front + (rv.shown ? '<hr>' + back +
        '<div class="grades" role="group" aria-label="قديش تذكّرت؟">' + GR.map(function (g) { return '<button type="button" class="g-' + g[2] + '" data-r="grade" data-g="' + g[0] + '"><b>' + g[1] + '</b><span class="small">' + S.formatInterval(pv[+g[0]]) + '</span></button>'; }).join('') + '</div>'
        : '<button type="button" class="btn primary" data-r="show">اكشف الجواب</button>') + '</div>';
    }
    App.render(head + '<p class="num muted">' + (rv.i + 1) + ' / ' + rv.cards.length + '</p>' + App.bar(rv.i, rv.cards.length, 'تقدّم المراجعة') + body, title);
    var view = App.$('#view');
    var onClick = function (e) {
      var b = e.target.closest('[data-r]'); if (!b) return;
      var a = b.getAttribute('data-r'), cur = rv.cards[rv.i];
      if (a === 'show') { var t = App.$('#rv-att'); rv.attempt = t ? t.value : ''; rv.shown = true; draw(); }
      else if (a === 'grade') {
        var g = +b.getAttribute('data-g');
        App.store.grade(cur.key, g);
        if (cur.failed && g >= 2) App.store.passExercise(cur.failed);
        rv.done++; rv.i++; rv.shown = false; rv.attempt = ''; draw();
      } else if (a === 'skip') { rv.i++; draw(); }
    };
    view.addEventListener('click', onClick);
    App.cleanup = function () { view.removeEventListener('click', onClick); };
    var focus = App.$('#rv-att') || App.$('.grades button'); if (focus) focus.focus();
  }

  // ================= question engine (quiz + weekly test) =================
  function qTyped(s, L, audio) {
    return { kind: audio ? 'listen' : 'recall', sid: s.id, L: L,
      html: audio ? '<p class="eyebrow">سماع</p><p>اسمع واكتب الجملة.</p><div class="row">' + App.speakBtn(s.de) + '</div>'
        : '<p class="eyebrow">تذكّر</p><p>اكتب بالألماني:</p>' + App.ar(s.ar),
      input: 'text', expected: T.plain(s.de),
      check: function (val) { var c = T.compare(val, s.de); return { ok: c.verdict !== 'wrong', score: c.score, fb: App.compareHtml(c, s) }; } };
  }
  function qCloze(s, L) {
    var cz = T.cloze(s.de), gap = 0;
    return { kind: 'cloze', sid: s.id, L: L,
      html: '<p class="eyebrow">فراغ</p>' + App.ar(s.ar) + '<p class="de" lang="de" dir="ltr">' + cz.parts.map(function (p) { return p.gap != null ? (p.gap === gap ? '<b class="blank">_____</b>' : esc(cz.answers[p.gap])) : esc(T.plain(p.t)); }).join('') + '</p>',
      input: 'text', expected: cz.answers[gap],
      check: function (val) { var ok = T.normalize(val) === T.normalize(cz.answers[gap]); return { ok: ok, fb: '<p class="de" lang="de" dir="ltr">' + T.highlight(s.de) + '</p>' }; } };
  }
  function qVocab(v, pool, rand) {
    var opts = T.shuffle([v].concat(T.shuffle(pool.filter(function (x) { return x.id !== v.id && x.ar !== v.ar; }), rand).slice(0, 3)), rand);
    return { kind: 'vocab', vid: v.id, html: '<p class="eyebrow">مفردات</p><p>شو معنى:</p><p class="de big" lang="de" dir="ltr">' + esc(v.de) + '</p>',
      options: opts.map(function (o) { return o.ar; }), answer: opts.indexOf(v),
      check: function (k) { return { ok: k === opts.indexOf(v), fb: '<p>' + esc(v.de) + ' = <b>' + esc(v.ar) + '</b></p>' }; } };
  }
  function qDialog(L, k) {
    var q = L.dlg.q[k];
    return { kind: 'dialog', L: L, html: '<p class="eyebrow">فهم حوار · ' + esc(L.dlg.title) + '</p><p class="muted small">اسمع الحوار وجاوب.</p>' +
      '<button type="button" class="btn" data-q="dlg">' + App.icon('play') + ' اسمع الحوار</button><p><b>' + esc(q[0]) + '</b></p>',
      options: q[1], answer: q[2], lines: L.dlg.lines.map(function (l) { return l[1]; }),
      check: function (i) { return { ok: i === q[2], fb: '<p>الجواب: <b>' + esc(q[1][q[2]]) + '</b></p>' }; } };
  }

  var qz = null;
  function runQuiz(title, crumbs, questions, onFinish) {
    qz = { title: title, crumbs: crumbs, qs: questions, i: 0, res: [], answered: null, onFinish: onFinish };
    drawQ();
  }
  function drawQ() {
    var head = qz.crumbs + '<h1>' + esc(qz.title) + '</h1>';
    if (qz.i >= qz.qs.length) return qz.onFinish(qz.res, head);
    var q = qz.qs[qz.i], a = qz.answered;
    var body = '<p class="num muted">' + (qz.i + 1) + ' / ' + qz.qs.length + '</p>' + App.bar(qz.i, qz.qs.length, 'تقدّم الاختبار') + '<div class="card quiz">' + q.html;
    if (q.options) body += '<div class="opts">' + q.options.map(function (o, k) {
      var cls = a ? (k === q.answer ? ' ok' : (a.val === k ? ' bad' : '')) : '';
      return '<button type="button" class="opt' + cls + '" data-q="opt" data-k="' + k + '"' + (a ? ' disabled' : '') + '>' + esc(o) + '</button>';
    }).join('') + '</div>';
    else body += '<input type="text" id="qin" lang="de" dir="ltr" autocomplete="off" autocapitalize="off" spellcheck="false"' + (a ? ' disabled value="' + esc(a.val) + '"' : '') + ' aria-label="جوابك">' +
      (a ? '' : '<button type="button" class="btn primary" data-q="check">افحص</button>');
    if (a) body += '<div class="fb ' + (a.r.ok ? 'ok' : 'bad') + '">' + (a.r.ok ? App.icon('check') + ' صح' : '✗ مش صح') + a.r.fb + '</div><button type="button" class="btn primary" data-q="next">التالي</button>';
    App.render(head + body + '</div>', qz.title);
    var view = App.$('#view');
    var onClick = function (e) {
      var b = e.target.closest('[data-q]'); if (!b) return;
      var act = b.getAttribute('data-q');
      if (act === 'dlg') { window.Speech.sequence(q.lines); return; }
      if (act === 'next') { qz.i++; qz.answered = null; drawQ(); return; }
      var val = act === 'opt' ? +b.getAttribute('data-k') : App.$('#qin').value;
      if (act === 'check' && !String(val).trim()) { App.toast('اكتب جواب أول'); return; }
      var r = q.check(val);
      qz.res.push({ q: q, ok: r.ok }); qz.answered = { val: val, r: r };
      if (q.kind === 'recall' && q.sid) App.store.grade('s:' + q.sid, r.ok ? 2 : 0);
      if (q.kind === 'vocab') App.store.grade('v:' + q.vid, r.ok ? 2 : 0);
      var fk = 'quiz:' + q.kind + ':' + (q.sid || q.vid || (q.L && q.L.id));
      if (!r.ok && (q.sid || q.L)) App.store.failExercise(fk, { lesson: q.L ? q.L.id : '', type: q.kind, sid: q.sid || '' });
      if (r.ok) App.store.passExercise(fk);
      drawQ();
    };
    var onKey = function (e) { if (e.key === 'Enter' && e.target.id === 'qin') { e.preventDefault(); var c = App.$('[data-q="check"]'); if (c) c.click(); } };
    view.addEventListener('click', onClick); view.addEventListener('keydown', onKey);
    App.cleanup = function () { view.removeEventListener('click', onClick); view.removeEventListener('keydown', onKey); };
    var f = App.$('#qin:not([disabled])') || App.$('[data-q="next"]'); if (f) f.focus();
    if (q.kind === 'listen' && !a) setTimeout(function () { App.speak(q.expected); }, 300);
  }

  App.views.quiz = function (p) {
    var L = App.lessonById(p[0]); if (!L) return App.views.notfound();
    var rand = T.rng(Date.now() & 0xffffffff), ss = T.shuffle(L.sentences, rand), vs = App.vocabOf(L), qs = [];
    qs.push(qTyped(ss[0], L), qTyped(ss[1], L), qTyped(ss[2], L), qCloze(ss[3], L), qCloze(ss[4], L));
    if (window.Speech.supported) qs.push(qTyped(ss[5], L, true), qTyped(ss[6], L, true)); else qs.push(qTyped(ss[5], L), qCloze(ss[6], L));
    T.shuffle(vs, rand).slice(0, 2).forEach(function (v) { qs.push(qVocab(v, App.vocab.items, rand)); });
    if (L.dlg && L.dlg.q.length) qs.push(qDialog(L, 0)); else qs.push(qTyped(ss[7], L));
    runQuiz('اختبار قصير: ' + L.title, '<nav class="crumbs"><a href="#/">الرئيسية</a> › <a href="#/l/' + L.id + '">الدرس</a></nav>', qs, function (res, head) {
      var pct = Math.round(res.filter(function (r) { return r.ok; }).length / res.length * 100);
      App.store.lessonEvent(L.id, 'quiz', pct);
      App.render(head + '<div class="card empty"><p class="num big">' + pct + '%</p><p>' + (pct >= 80 ? 'شغل ممتاز!' : 'الأسئلة الغلط انضافت لمراجعتك اليومية.') + '</p>' +
        '<a class="btn primary" href="#/l/' + L.id + '">ارجع للدرس</a> <a class="btn" href="#/quiz/' + L.id + '">عيد الاختبار</a></div>', 'نتيجة الاختبار');
    });
  };

  App.views.test = function (p) {
    var W = App.data.weeks.filter(function (x) { return x.n === +p[0]; })[0]; if (!W) return App.views.notfound();
    var rand = T.rng(Date.now() & 0xffffffff), Ls = W.lessons.map(App.lessonById);
    var pool = T.shuffle([].concat.apply([], Ls.map(function (L) { return L.sentences.map(function (s) { return { s: s, L: L }; }); })), rand);
    var qs = pool.slice(0, 8).map(function (x) { return qTyped(x.s, x.L); });
    pool.slice(8, 12).forEach(function (x) { qs.push(window.Speech.supported ? qTyped(x.s, x.L, true) : qCloze(x.s, x.L)); });
    T.shuffle(Ls.filter(function (L) { return L.dlg && L.dlg.q.length; }), rand).slice(0, 3).forEach(function (L) { qs.push(qDialog(L, Math.floor(rand() * L.dlg.q.length))); });
    runQuiz('اختبار الأسبوع ' + W.n, '<nav class="crumbs"><a href="#/">الرئيسية</a> › <a href="#/w/' + W.n + '">الأسبوع ' + W.n + '</a></nav>', qs, function (res, head) {
      function pct(kinds) { var r = res.filter(function (x) { return kinds.indexOf(x.q.kind) >= 0; }); return r.length ? Math.round(r.filter(function (x) { return x.ok; }).length / r.length * 100) : 0; }
      var speaking = Ls.filter(function (L) { return (App.store.data.lessons[L.id] || {}).task; }).length;
      var result = { score: pct(['recall', 'listen', 'cloze', 'dialog']), recall: pct(['recall', 'cloze']), listening: pct(['listen', 'dialog']), speaking: speaking, of: Ls.length };
      App.store.weekly(W.n, result);
      App.render(head + '<div class="card"><p class="num big">' + result.score + '%</p><ul class="kv">' +
        '<li><span>التذكّر بالكتابة</span><b>' + result.recall + '%</b></li><li><span>السماع والفهم</span><b>' + result.listening + '%</b></li>' +
        '<li><span>مهام المحادثة المكتملة هالأسبوع</span><b>' + speaking + ' / ' + Ls.length + '</b></li></ul>' +
        '<p class="muted small">هاد قياس لتقدّمك بمحتوى هالأسبوع، مش تقييم رسمي لمستوى B1. مهام المحادثة بتنعمل وبتتقيّم ذاتياً بتبويب «المهمة» بكل درس.</p>' +
        '<a class="btn primary" href="#/w/' + W.n + '">ارجع للأسبوع</a></div>', 'نتيجة اختبار الأسبوع');
    });
  };

  // ================= vocabulary browser =================
  var vb = { q: '', f: 'all', w: '0', n: 60 };
  App.views.vocab = function () {
    function list() {
      var q = T.normalize(vb.q, true);
      var items = App.vocab.items.filter(function (v) {
        if (vb.w !== '0' && String(v.week) !== vb.w) return false;
        if (vb.f !== 'all' && S.status(App.store.item('v:' + v.id)) !== vb.f) return false;
        return !q || T.normalize(v.de + ' ' + v.ar + ' ' + (v.collocation || '') + ' ' + (v.forms || ''), true).indexOf(q) >= 0;
      });
      return '<p class="muted small" aria-live="polite">' + items.length + ' كلمة</p><ul class="vlist">' + items.slice(0, vb.n).map(App.vocabCard).join('') + '</ul>' +
        (items.length > vb.n ? '<button type="button" class="btn" id="vmore">اعرض أكتر</button>' : '');
    }
    var due = S.queue(App.store.data.items, App.now(), { prefix: 'v:' }).length;
    App.render('<nav class="crumbs"><a href="#/">الرئيسية</a></nav><h1>المفردات</h1>' +
      '<p class="muted">' + App.vocab.items.length + ' كلمة وتعبير من الدروس. الحالة بتتغيّر بس من خلال المراجعة: معرفة الكلمة لما تشوفها (فهم) غير قدرتك تستعملها لما تحكي، لهيك جرّب الاتجاهين.</p>' +
      '<div class="row"><a class="btn primary" href="#/review/vocab">راجع المفردات المستحقة (' + due + ')</a></div>' +
      '<div class="filters card"><label>بحث <input type="search" id="vq" value="' + esc(vb.q) + '" placeholder="ألماني أو عربي"></label>' +
      '<label>الحالة <select id="vf">' + [['all', 'الكل'], ['new', 'جديدة'], ['learning', 'عم تتعلّمها'], ['recalled', 'تذكّرتها'], ['difficult', 'صعبة'], ['mastered', 'متقنة']].map(function (o) { return '<option value="' + o[0] + '"' + (vb.f === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></label>' +
      '<label>الأسبوع <select id="vw"><option value="0">الكل</option>' + App.data.weeks.map(function (W) { return '<option value="' + W.n + '"' + (vb.w === String(W.n) ? ' selected' : '') + '>' + W.n + ' · ' + esc(W.title) + '</option>'; }).join('') + '</select></label></div>' +
      '<div id="vres">' + list() + '</div>', 'المفردات');
    var view = App.$('#view');
    var onInput = function (e) {
      if (e.target.id === 'vq') vb.q = e.target.value; else if (e.target.id === 'vf') vb.f = e.target.value; else if (e.target.id === 'vw') vb.w = e.target.value; else return;
      vb.n = 60; App.$('#vres').innerHTML = list();
    };
    var onClick = function (e) { if (e.target.id === 'vmore') { vb.n += 60; App.$('#vres').innerHTML = list(); } };
    view.addEventListener('input', onInput); view.addEventListener('change', onInput); view.addEventListener('click', onClick);
    App.cleanup = function () { view.removeEventListener('input', onInput); view.removeEventListener('change', onInput); view.removeEventListener('click', onClick); };
  };
})();
