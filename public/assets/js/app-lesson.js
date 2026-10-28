/* Lesson screen: sentence study (independent German/Arabic visibility, recall modes, grading),
   vocabulary, exercises, dialogue and final task. */
(function () {
  'use strict';
  var App = window.App, T = window.TextKit, S = window.SRS, esc = App.esc;
  var FN = { s: 'جملة يومية', c: 'جملة مربوطة', q: 'سؤال', a: 'جواب', o: 'رأي / اقتراح', p: 'مشكلة / حل', x: 'تعبير شائع', l: 'جملة طويلة' };
  var MODES = {
    A: { de: true, ar: true, label: 'A · قراءة وفهم', hint: 'الألماني والعربي ظاهرين. اقرا، اسمع، وافهم.' },
    B: { de: false, ar: true, label: 'B · تذكّر الألماني', hint: 'شوف العربي وقول الجملة بالألماني من الذاكرة، بعدين اكشف الجواب وقيّم حالك.' },
    C: { de: true, ar: false, label: 'C · تذكّر العربي', hint: 'شوف الألماني واشرح معناه بالعربي، بعدين اكشف.' },
    D: { de: false, ar: false, label: 'D · تذكّر كامل', hint: 'اللغتين مخفيين. استعمل الصوت أو التلميح، جرّب تقول الجملة، بعدين اكشف.' },
    E: { label: 'E · المفردات', hint: 'شوف الكلمة وتذكّر معناها أو استعملها بجملة.' }
  };
  var GRADES = [['0', 'نسيت', 'again'], ['1', 'صعبة', 'hard'], ['2', 'منيح', 'good'], ['3', 'سهلة', 'easy']];

  var st = null; // per-lesson UI state

  function lessonState(L) {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem('b1app:ui:' + L.id) || '{}'); } catch (e) { }
    var mode = saved.mode && MODES[saved.mode] ? saved.mode : 'A';
    return { L: L, mode: mode, layout: saved.layout === 'focus' ? 'focus' : 'list', idx: 0,
      vis: L.sentences.map(function () { return { de: MODES[mode].de !== false, ar: MODES[mode].ar !== false }; }),
      revealed: {}, info: {}, hint: {}, attempt: {}, graded: {}, vIdx: 0, vDir: 'de', vShown: false };
  }
  function saveUi() { try { localStorage.setItem('b1app:ui:' + st.L.id, JSON.stringify({ mode: st.mode, layout: st.layout })); } catch (e) { } }

  function setMode(m) {
    st.mode = m; st.revealed = {}; st.hint = {}; st.graded = {};
    if (m !== 'E') st.vis = st.L.sentences.map(function () { return { de: MODES[m].de, ar: MODES[m].ar }; });
    saveUi();
  }

  App.views.l = function (p) {
    var L = App.lessonById(p[0]);
    if (!L) return App.views.notfound();
    var tab = p[1] || 's';
    if (!st || st.L !== L) st = lessonState(L);
    App.store.viewLesson(L.id);
    var idx = App.data.lessons.indexOf(L), prevL = App.data.lessons[idx - 1], nextL = App.data.lessons[idx + 1];
    var pr = App.lessonProgress(L);
    var tabs = [['s', 'الجمل'], ['v', 'المفردات'], ['x', 'تمارين'], ['d', 'الحوار'], ['t', 'المهمة']];
    var head = '<nav class="crumbs"><a href="#/">الرئيسية</a> › <a href="#/w/' + L.week + '">الأسبوع ' + L.week + '</a></nav>' +
      '<header class="lhead"><p class="eyebrow">الدرس ' + L.n + ' من ' + App.data.lessons.length + ' · الأسبوع ' + L.week + ' · اليوم ' + L.day +
      (L.origin === 'original' ? ' · <span class="tag">من ملفك الأصلي</span>' : '') + '</p>' +
      '<h1>' + esc(L.title) + '</h1>' + (L.de ? '<p class="de-sub" lang="de" dir="ltr">' + esc(L.de) + '</p>' : '') +
      '<p class="goal"><b>الهدف:</b> ' + esc(L.goal || '') + '</p>' +
      (L.note ? '<details class="note"><summary>ملاحظة القاعدة: ' + esc(L.grammar) + '</summary><p>' + esc(L.note) + '</p></details>' : '') +
      '<ul class="checklist small">' +
        chk(pr.viewed, 'شفت الدرس') + chk(pr.recalled === 10, 'تذكّرت الجمل العشرة (' + pr.recalled + '/10)') +
        chk(pr.task, 'عملت مهمة المحادثة') + chk(pr.quiz != null, 'الاختبار القصير' + (pr.quiz != null ? ' (' + pr.quiz + '%)' : '')) +
      '</ul></header>' +
      '<nav class="tabs" aria-label="أقسام الدرس">' + tabs.map(function (t) {
        return '<a href="#/l/' + L.id + (t[0] === 's' ? '' : '/' + t[0]) + '" aria-current="' + (t[0] === tab ? 'page' : 'false') + '">' + t[1] + '</a>';
      }).join('') + '<a class="quiz" href="#/quiz/' + L.id + '">اختبار قصير</a></nav>';
    var body = tab === 'v' ? vocabTab(L) : tab === 'x' ? exercisesTab(L) : tab === 'd' ? dialogueTab(L) : tab === 't' ? taskTab(L) : sentencesTab(L);
    var foot = '<nav class="pager">' + (prevL ? '<a class="btn" href="#/l/' + prevL.id + '">' + App.icon('prev') + ' الدرس السابق</a>' : '<span></span>') +
      (nextL ? '<a class="btn" href="#/l/' + nextL.id + '">الدرس التالي ' + App.icon('next') + '</a>' : '') + '</nav>';
    App.render(head + '<div id="tabbody">' + body + '</div>' + foot, L.title);
    bind(L, tab);
  };
  function chk(ok, label) { return '<li class="' + (ok ? 'ok' : '') + '">' + (ok ? App.icon('check') : '<span class="dot"></span>') + label + '</li>'; }

  // ================= sentences =================
  function sentencesTab(L) {
    var m = MODES[st.mode];
    var html = '<section class="studybar card" aria-label="طريقة الدراسة">' +
      '<div class="seg" role="group" aria-label="الوضع">' + Object.keys(MODES).map(function (k) {
        return '<button type="button" data-act="mode" data-m="' + k + '" aria-pressed="' + (st.mode === k) + '">' + MODES[k].label + '</button>';
      }).join('') + '</div><p class="muted small mode-hint">' + m.hint + '</p>';
    if (st.mode !== 'E') {
      html += '<details class="bulkwrap"' + (window.innerWidth > 720 ? ' open' : '') + '><summary class="small">التحكم بكل الجمل وطريقة العرض</summary>' +
        '<div class="bulk" role="group" aria-label="التحكم بكل الجمل">' +
        '<button type="button" data-act="all" data-l="de" data-v="1">أظهر كل الألماني</button>' +
        '<button type="button" data-act="all" data-l="de" data-v="0">أخفي كل الألماني</button>' +
        '<button type="button" data-act="all" data-l="ar" data-v="1">أظهر كل العربي</button>' +
        '<button type="button" data-act="all" data-l="ar" data-v="0">أخفي كل العربي</button>' +
        '<button type="button" data-act="all" data-l="both" data-v="1">أظهر الاتنين</button>' +
        '<button type="button" data-act="mode" data-m="D">وضع التذكّر</button>' +
        '<a class="btn-like" href="#/quiz/' + L.id + '">ابدأ اختبار</a>' +
        '<a class="btn-like" href="#/review/difficult">راجع الصعبة</a>' +
        '</div><div class="seg small-seg" role="group" aria-label="طريقة العرض">' +
        '<button type="button" data-act="layout" data-v="list" aria-pressed="' + (st.layout === 'list') + '">كل الجمل</button>' +
        '<button type="button" data-act="layout" data-v="focus" aria-pressed="' + (st.layout === 'focus') + '">جملة جملة</button></div></details>';
    }
    html += '</section>';
    if (st.mode === 'E') return html + vocabPractice(L);
    if (st.layout === 'focus') {
      html += '<div class="focus"><ol class="cards" start="' + (st.idx + 1) + '">' + card(L, st.idx) + '</ol>' +
        '<div class="fnav"><button type="button" class="btn" data-act="prev"' + (st.idx === 0 ? ' disabled' : '') + '>' + App.icon('prev') + ' الجملة السابقة</button>' +
        '<span class="num">' + (st.idx + 1) + ' / ' + L.sentences.length + '</span>' +
        '<button type="button" class="btn" data-act="next"' + (st.idx === L.sentences.length - 1 ? ' disabled' : '') + '>الجملة التالية ' + App.icon('next') + '</button></div>' +
        '<p class="muted small kbd-help">لوحة المفاتيح: ← التالية · → السابقة · مسافة = اكشف · 1–4 = التقييم · G = الألماني · A = العربي · P = استمع</p></div>';
    } else {
      html += '<ol class="cards">' + L.sentences.map(function (_, i) { return card(L, i); }).join('') + '</ol>';
    }
    return html;
  }

  function card(L, i) {
    var s = L.sentences[i], v = st.vis[i], key = 's:' + s.id, item = App.store.item(key);
    var status = S.status(item), recallMode = st.mode === 'B' || st.mode === 'C' || st.mode === 'D';
    var hidden = !v.de || !v.ar, rev = !!st.revealed[i];
    var h = '<li class="scard s-' + status + '" data-i="' + i + '" id="card-' + i + '">' +
      '<div class="shead"><span class="idx num">' + (i + 1) + '</span><span class="fn">' + (FN[s.fn] || '') + '</span>' + statusChip(status, item) + '</div>';
    h += '<div class="lang lde">' + (v.de ? App.de(s.de) : hiddenBox('de', i, 'الألماني مخفي')) + '</div>';
    h += '<div class="lang lar">' + (v.ar ? App.ar(s.ar) : hiddenBox('ar', i, 'العربي مخفي')) + '</div>';
    if (st.hint[i] && !v.de) h += '<p class="hint" lang="de" dir="ltr">' + esc(T.hint(s.de)) + '</p>';
    if (recallMode && hidden && !rev) {
      h += '<div class="attempt"><label class="small" for="att-' + i + '">' + (v.ar ? 'اكتب أو قول الجملة بالألماني (اختياري):' : v.de ? 'اكتب المعنى بالعربي (اختياري):' : 'جرّب تقول الجملة (اختياري تكتبها):') + '</label>' +
        '<textarea id="att-' + i + '" rows="2" data-att="' + i + '"' + (v.ar || !v.de ? ' lang="de" dir="ltr"' : '') + '>' + esc(st.attempt[i] || '') + '</textarea>' +
        '<div class="row">' + (!v.de ? '<button type="button" class="btn small" data-act="hint" data-i="' + i + '">تلميح: أول حرف من كل كلمة</button>' : '') +
        (window.Speech.recognitionSupported && !v.de ? '<button type="button" class="btn small" data-act="rec" data-i="' + i + '">' + App.icon('mic') + ' قول بالصوت (حسب المتصفح)</button>' : '') +
        '<button type="button" class="btn primary" data-act="reveal" data-i="' + i + '">اكشف الجواب</button></div></div>';
    }
    if (rev && st.attempt[i] && st.mode !== 'C') {
      var cmp = T.compare(st.attempt[i], s.de);
      h += '<p class="cmp ' + cmp.verdict + '"><b>' + (cmp.verdict === 'correct' ? 'محاولتك صحيحة تقريباً' : cmp.verdict === 'close' ? 'قريبة' : 'في فرق') + ' (' + Math.round(cmp.score * 100) + '%)</b> ' +
        '<span lang="de" dir="ltr">' + cmp.tokens.map(function (t) { return '<span class="' + (t.ok ? 'tok-ok' : 'tok-miss') + '">' + esc(t.w) + '</span>'; }).join(' ') + '</span></p>';
    }
    if (recallMode && rev) {
      if (st.graded[i] != null) h += '<p class="graded small">' + App.icon('check') + ' انحفظ التقييم. المراجعة الجاية بعد ' + S.formatInterval(item.due - App.now()) + '.</p>';
      else {
        var pv = S.preview(item, App.now());
        h += '<div class="grades" role="group" aria-label="قديش تذكّرت؟"><span class="small muted">قديش تذكّرت؟</span>' + GRADES.map(function (g) {
          return '<button type="button" class="g-' + g[2] + '" data-act="grade" data-i="' + i + '" data-g="' + g[0] + '"><b>' + g[1] + '</b><span class="small">' + S.formatInterval(pv[+g[0]]) + '</span></button>';
        }).join('') + '</div>';
      }
    }
    h += '<div class="tools">' +
      '<button type="button" class="ibtn" data-act="tog" data-l="de" data-i="' + i + '" aria-pressed="' + v.de + '" aria-label="' + (v.de ? 'أخفي الألماني' : 'أظهر الألماني') + '">' + App.icon(v.de ? 'eye' : 'eyeoff') + '<span>DE</span></button>' +
      '<button type="button" class="ibtn" data-act="tog" data-l="ar" data-i="' + i + '" aria-pressed="' + v.ar + '" aria-label="' + (v.ar ? 'أخفي العربي' : 'أظهر العربي') + '">' + App.icon(v.ar ? 'eye' : 'eyeoff') + '<span>ع</span></button>' +
      (window.Speech.supported ? '<button type="button" class="ibtn" data-act="play" data-i="' + i + '" aria-label="استمع">' + App.icon('play') + '</button>' +
        '<button type="button" class="ibtn" data-act="play" data-slow="1" data-i="' + i + '" aria-label="استمع ببطء">' + App.icon('slow') + '</button>' : '') +
      '<button type="button" class="ibtn" data-act="info" data-i="' + i + '" aria-expanded="' + !!st.info[i] + '" aria-label="مفردات وشرح">' + App.icon('info') + '</button>' +
      '<button type="button" class="ibtn" data-act="diff" data-i="' + i + '" aria-pressed="' + !!(item && item.diff) + '" aria-label="علّمها صعبة">' + App.icon('flag') + '</button>' +
      '<button type="button" class="ibtn" data-act="master" data-i="' + i + '" aria-pressed="' + !!(item && item.manual) + '" aria-label="علّمها متقنة">' + App.icon('star') + '</button>' +
      '</div>';
    if (st.info[i]) h += infoPanel(L, s);
    return h + '</li>';
  }
  function hiddenBox(lang, i, label) {
    return '<button type="button" class="hiddenbox" data-act="tog" data-l="' + lang + '" data-i="' + i + '">' + App.icon('eyeoff') + ' ' + label + ' · اضغط للإظهار</button>';
  }
  function statusChip(status, item) {
    var L = { new: 'جديدة', learning: 'عم تتعلّمها', recalled: 'تذكّرتها', difficult: 'صعبة', mastered: 'متقنة' };
    var due = item && S.isDue(item, App.now()) ? ' · مستحقة' : '';
    return '<span class="chip c-' + status + '">' + L[status] + due + '</span>';
  }
  function infoPanel(L, s) {
    var related = App.vocabOf(L).filter(function (v) { return v.example && v.example.sid === s.id; });
    return '<div class="info">' +
      (s.note ? '<p>' + App.icon('info') + ' ' + esc(s.note) + '</p>' : '') +
      (related.length ? '<ul class="vmini">' + related.map(vline).join('') + '</ul>' : '') +
      (!s.note && !related.length ? '<p class="muted small">الكلمات المظلّلة هي التركيب المهم بالجملة. شوف تبويب «المفردات» لكل كلمات الدرس.</p>' : '') +
      (s.flag ? '<p class="flag small">' + App.icon('flag') + ' ملاحظة مراجعة: <span lang="en" dir="ltr">' + esc(s.flag) + '</span></p>' : '') +
      '<p class="muted small">المصدر: ' + (s.origin === 'original' ? 'ملفك الأصلي (' + esc(s.ref) + ')' : 'محتوى جديد (لسا ما انراجع من متحدث أصلي)') + '</p></div>';
  }
  function vline(v) {
    return '<li><span lang="de" dir="ltr"><b>' + esc(v.de) + '</b></span> — ' + esc(v.ar) + (v.forms || v.collocation ? ' <span class="muted small" lang="de" dir="ltr">' + esc(v.forms || v.collocation) + '</span>' : '') + '</li>';
  }

  // ================= vocabulary =================
  var POS = { n: 'اسم', v: 'فعل', adj: 'صفة', adv: 'ظرف', x: 'تعبير' };
  App.vocabCard = function (v) {
    var item = App.store.item('v:' + v.id), status = S.status(item);
    return '<li class="vcard card" data-v="' + esc(v.id) + '"><div class="vtop"><span class="de" lang="de" dir="ltr"><b>' + esc(v.de) + '</b></span>' +
      App.speakBtn(v.head, false) + '<span class="chip c-' + status + '">' + ({ new: 'جديدة', learning: 'عم تتعلّمها', recalled: 'تذكّرتها', difficult: 'صعبة', mastered: 'متقنة' })[status] + '</span></div>' +
      '<p class="ar">' + esc(v.ar) + ' <span class="muted small">· ' + (POS[v.pos] || '') + (v.article ? ' · ' + v.article : '') + (v.plural ? ' · الجمع ' + esc(v.plural) : '') + '</span></p>' +
      (v.forms ? '<p class="small" lang="de" dir="ltr">' + esc(v.forms) + '</p>' : '') +
      (v.collocation ? '<p class="small" lang="de" dir="ltr">' + esc(v.collocation) + '</p>' : '') +
      (v.example ? '<p class="small ex"><span lang="de" dir="ltr">' + esc(v.example.de) + '</span><br><span class="muted">' + esc(v.example.ar) + '</span></p>' : '') + '</li>';
  };
  function vocabTab(L) {
    var vs = App.vocabOf(L);
    return '<section><p class="muted">كلمات وتعابير الدرس مع الصيغ والأمثلة. «متقنة» بس بعد مراجعات ناجحة متكررة.</p>' +
      '<button type="button" class="btn primary" data-act="vpractice">تدرّب على المفردات (وضع E)</button>' +
      '<ul class="vlist">' + vs.map(App.vocabCard).join('') + '</ul></section>';
  }
  function vocabPractice(L) {
    var vs = App.vocabOf(L);
    if (!vs.length) return '<p class="muted">ما في مفردات لهالدرس.</p>';
    if (st.vIdx >= vs.length) st.vIdx = 0;
    var v = vs[st.vIdx], item = App.store.item('v:' + v.id);
    var front = st.vDir === 'de' ? '<p class="de big" lang="de" dir="ltr">' + esc(v.de) + '</p>' : '<p class="ar big">' + esc(v.ar) + '</p>';
    var back = st.vDir === 'de' ? '<p class="ar big">' + esc(v.ar) + '</p>' : '<p class="de big" lang="de" dir="ltr">' + esc(v.de) + '</p>';
    var pv = S.preview(item, App.now());
    return '<section class="card flash"><div class="row between"><span class="num muted">' + (st.vIdx + 1) + ' / ' + vs.length + '</span>' +
      '<div class="seg small-seg"><button type="button" data-act="vdir" data-v="de" aria-pressed="' + (st.vDir === 'de') + '">ألماني ← عربي</button><button type="button" data-act="vdir" data-v="ar" aria-pressed="' + (st.vDir === 'ar') + '">عربي ← ألماني</button></div></div>' +
      front + App.speakBtn(v.head, false) +
      '<label class="small" for="vuse">استعمل الكلمة بجملة من عندك (اختياري):</label><textarea id="vuse" rows="2" lang="de" dir="ltr"></textarea>' +
      (st.vShown ? back + (v.forms || v.collocation ? '<p class="small" lang="de" dir="ltr">' + esc(v.forms || v.collocation) + '</p>' : '') +
        (v.example ? '<p class="small ex"><span lang="de" dir="ltr">' + esc(v.example.de) + '</span><br><span class="muted">' + esc(v.example.ar) + '</span></p>' : '') +
        '<div class="grades" role="group" aria-label="قديش تذكّرت؟">' + GRADES.map(function (g) {
          return '<button type="button" class="g-' + g[2] + '" data-act="vgrade" data-g="' + g[0] + '"><b>' + g[1] + '</b><span class="small">' + S.formatInterval(pv[+g[0]]) + '</span></button>';
        }).join('') + '</div>'
        : '<button type="button" class="btn primary" data-act="vshow">اكشف</button>') + '</section>';
  }

  // ================= exercises =================
  function exercisesTab(L) {
    var dIdx = st.dict == null ? 0 : st.dict;
    var sc = st.scr == null ? 0 : st.scr;
    var scr = T.scramble(L.sentences[sc].de, T.rng(T.hashStr(L.sentences[sc].id)));
    st.scrData = scr; st.scrPicked = st.scrPicked || [];
    var cz = L.sentences.map(function (s) { return T.cloze(s.de); });
    st.clozeData = cz;
    return '<section class="card ex" id="ex-dict"><h2>1. سماع وكتابة (بدون نص)</h2>' +
      '<p class="muted small">اسمع الجملة واكتبها. النص بيبين بعد ما تفحص. الجملة ' + (dIdx + 1) + ' من 10.</p>' +
      '<div class="row">' + (window.Speech.supported ? '<button type="button" class="btn" data-act="dplay">' + App.icon('play') + ' اسمع</button><button type="button" class="btn" data-act="dplay" data-slow="1">' + App.icon('slow') + ' ببطء</button>' : '<span class="muted">النطق مش مدعوم بهالمتصفح.</span>') + '</div>' +
      '<textarea id="dict-in" rows="2" lang="de" dir="ltr" aria-label="اكتب اللي سمعته"></textarea>' +
      '<div class="row"><button type="button" class="btn primary" data-act="dcheck">افحص</button><button type="button" class="btn" data-act="dnext">الجملة التالية</button></div><div id="dict-out" aria-live="polite"></div></section>' +

      '<section class="card ex" id="ex-cloze"><h2>2. كمّل الفراغات</h2><p class="muted small">العربي موجود كدليل. اكتب الأجزاء الناقصة.</p><ol class="cloze">' +
      L.sentences.map(function (s, i) {
        return '<li><p class="ar small">' + esc(s.ar) + '</p><p class="de" lang="de" dir="ltr">' + cz[i].parts.map(function (p) {
          return p.gap != null ? '<input type="text" class="gap" data-ci="' + i + '" data-g="' + p.gap + '" size="' + Math.max(4, cz[i].answers[p.gap].length) + '" aria-label="فراغ" autocomplete="off" autocapitalize="off" spellcheck="false">' : esc(T.plain(p.t));
        }).join('') + '</p></li>';
      }).join('') + '</ol><button type="button" class="btn primary" data-act="ccheck">افحص الكل</button><div id="cloze-out" aria-live="polite"></div></section>' +

      '<section class="card ex" id="ex-scr"><h2>3. رتّب الكلمات</h2><p class="ar small">' + esc(L.sentences[sc].ar) + '</p>' +
      '<p class="built de" lang="de" dir="ltr" id="scr-built">' + (st.scrPicked.map(function (k) { return esc(scr.shuffled[k]); }).join(' ') || '<span class="muted">اضغط الكلمات بالترتيب…</span>') + '</p>' +
      '<div class="chips" lang="de" dir="ltr">' + scr.shuffled.map(function (w, k) { return '<button type="button" class="wchip" data-act="spick" data-k="' + k + '"' + (st.scrPicked.indexOf(k) >= 0 ? ' disabled' : '') + '>' + esc(w) + '</button>'; }).join('') + '</div>' +
      '<div class="row"><button type="button" class="btn" data-act="sundo">تراجع</button><button type="button" class="btn primary" data-act="scheck">افحص</button><button type="button" class="btn" data-act="snext">جملة تانية</button></div><div id="scr-out" aria-live="polite"></div></section>' +

      '<section class="card ex"><h2>4. تحويل الجمل (إنتاج)</h2><ol class="trl">' + L.tr.map(function (t, i) {
        return '<li><p><b>' + esc(t[0]) + '</b></p><p class="de" lang="de" dir="ltr">' + esc(t[1]) + '</p>' +
          '<textarea rows="2" lang="de" dir="ltr" data-tr="' + i + '" aria-label="جوابك"></textarea><button type="button" class="btn small" data-act="trcheck" data-i="' + i + '">قارن مع النموذج</button><div class="tr-out" id="tr-out-' + i + '" aria-live="polite"></div></li>';
      }).join('') + '</ol></section>' +

      '<section class="card ex"><h2>5. سؤال وجواب</h2><p class="muted small">اسمع السؤال، جاوب بجملة كاملة (كتابة أو بالصوت)، بعدين شوف جواب نموذجي. جوابك ممكن يختلف ويكون صح.</p><ol class="qal">' +
      T.shuffle(L.qa.map(function (q, i) { return i; }), T.rng(T.hashStr(L.id + new Date().toDateString()))).map(function (i) {
        var q = L.qa[i];
        return '<li><div class="row"><p class="de" lang="de" dir="ltr"><b>' + esc(q[0]) + '</b></p>' + App.speakBtn(q[0], false) + '</div>' +
          '<textarea rows="2" lang="de" dir="ltr" id="qa-' + i + '" aria-label="جوابك"></textarea><div class="row">' +
          (window.Speech.recognitionSupported ? '<button type="button" class="btn small" data-act="qarec" data-i="' + i + '">' + App.icon('mic') + ' جاوب بالصوت</button>' : '') +
          '<button type="button" class="btn small" data-act="qashow" data-i="' + i + '">جواب نموذجي</button></div><div id="qa-out-' + i + '"></div></li>';
      }).join('') + '</ol></section>';
  }

  // ================= dialogue =================
  function dialogueTab(L) {
    var d = L.dlg;
    if (!d) return '<p class="muted">ما في حوار لهالدرس.</p>';
    st.dv = st.dv || { de: false, ar: false };
    var speakers = d.lines.map(function (l) { return l[0]; }).filter(function (x, i, a) { return a.indexOf(x) === i; });
    return '<section class="card"><h2>' + esc(d.title) + '</h2><p class="muted small">اسمع الحوار أول شي بدون نص، جاوب على الأسئلة، وبعدين افتح النص.</p>' +
      '<div class="row">' + (window.Speech.supported ? '<button type="button" class="btn primary" data-act="dlgplay">' + App.icon('play') + ' اسمع الحوار كامل</button><button type="button" class="btn" data-act="dlgstop">وقّف</button>' : '<span class="muted">النطق مش مدعوم بهالمتصفح.</span>') + '</div>' +
      '<div class="seg small-seg" role="group" aria-label="النص"><button type="button" data-act="dtog" data-l="de" aria-pressed="' + st.dv.de + '">النص الألماني</button><button type="button" data-act="dtog" data-l="ar" aria-pressed="' + st.dv.ar + '">الترجمة العربية</button></div>' +
      '<ol class="dlg">' + d.lines.map(function (l, i) {
        return '<li id="dl-' + i + '"><span class="sp">' + esc(l[0]) + '</span><div>' + (st.dv.de ? '<p class="de" lang="de" dir="ltr">' + esc(l[1]) + '</p>' : '<p class="muted small">— النص الألماني مخفي —</p>') +
          (st.dv.ar ? '<p class="ar small">' + esc(l[2]) + '</p>' : '') + '</div>' + App.speakBtn(l[1], false) + '</li>';
      }).join('') + '</ol></section>' +
      '<section class="card"><h2>أسئلة الفهم</h2><ol class="mcq">' + d.q.map(function (q, i) {
        return '<li><p>' + esc(q[0]) + '</p><div class="opts" role="radiogroup">' + q[1].map(function (o, k) {
          return '<label><input type="radio" name="dq' + i + '" value="' + k + '"> ' + esc(o) + '</label>';
        }).join('') + '</div></li>';
      }).join('') + '</ol><button type="button" class="btn primary" data-act="dqcheck">افحص الأجوبة</button><div id="dq-out" aria-live="polite"></div></section>' +
      '<section class="card"><h2>تمثيل الأدوار</h2><p class="muted small">اختار دورك. التطبيق بيقول جمل الشخص التاني، وإنت بتقول جملك من الدليل العربي، بعدين بتكشف.</p>' +
      '<div class="row">' + speakers.map(function (sp) { return '<button type="button" class="btn" data-act="role" data-sp="' + esc(sp) + '">أنا ' + esc(sp) + '</button>'; }).join('') + '</div><div id="role-out" aria-live="polite"></div></section>';
  }
  function roleStep() {
    var d = st.L.dlg, r = st.role, out = App.$('#role-out');
    if (!out) return;
    if (r.i >= d.lines.length) { out.innerHTML = '<p class="ok">' + App.icon('check') + ' خلص الحوار. عيده بدور التاني!</p>'; App.store.lessonEvent(st.L.id, 'exercise'); return; }
    var l = d.lines[r.i];
    if (l[0] !== r.sp) {
      out.innerHTML = '<p><b>' + esc(l[0]) + ':</b> <span lang="de" dir="ltr">' + esc(l[1]) + '</span></p>';
      App.speak(l[1], { onend: function () { setTimeout(function () { if (st && st.role === r) { r.i++; roleStep(); } }, 400); } });
      if (!window.Speech.supported) { r.i++; setTimeout(roleStep, 1500); }
    } else {
      out.innerHTML = '<p><b>دورك:</b> ' + esc(l[2]) + '</p><p class="muted small">قول الجملة بالألماني بصوت عالي…</p>' +
        '<div class="row"><button type="button" class="btn primary" data-act="roleshow">اكشف جملتي</button></div>';
    }
  }

  // ================= task =================
  function taskTab(L) {
    var t = L.task, done = !!(App.store.data.lessons[L.id] || {}).task;
    var draft = ''; try { draft = localStorage.getItem('b1app:draft:' + L.id) || ''; } catch (e) { }
    var secs = { short: 60, connected: 90, '60s': 60, presentation: 180 }[t.type] || 60;
    return '<section class="card"><p class="eyebrow">' + (App.taskLabel[t.type] || '') + '</p><h2>المهمة النهائية</h2><p class="task">' + esc(t.ar) + '</p>' +
      '<p class="small muted">قوالب ممكن تستعملها:</p><ul class="chips" lang="de" dir="ltr">' + (t.hints || []).map(function (h) { return '<li class="wchip static">' + esc(h) + '</li>'; }).join('') + '</ul>' +
      '<details class="rescue"><summary>جمل الإنقاذ لما تعلق</summary><ul>' + App.exam.rescue.map(function (r) { return '<li><span lang="de" dir="ltr">' + esc(r[0]) + '</span> — <span class="muted">' + esc(r[1]) + '</span></li>'; }).join('') + '</ul></details></section>' +
      '<section class="card"><h2>احكي أو اكتب</h2>' +
      '<div class="row timer"><span class="num big" id="tm">' + fmt(secs) + '</span><button type="button" class="btn" data-act="tstart" data-s="' + secs + '">ابدأ المؤقت (' + fmt(secs) + ')</button><button type="button" class="btn" data-act="tstop">وقّف</button></div>' +
      '<textarea id="task-notes" rows="6" lang="de" dir="ltr" aria-label="ملاحظاتك أو نصّك">' + esc(draft) + '</textarea><p class="muted small">المسودة بتنحفظ على هالجهاز بس.</p>' +
      '<div class="row">' + (window.Speech.recognitionSupported ? '<button type="button" class="btn" data-act="taskrec">' + App.icon('mic') + ' حوّل كلامي لنص (حسب المتصفح)</button>' : '') +
      (window.Speech.recorder().supported ? '<button type="button" class="btn" data-act="recstart">' + App.icon('mic') + ' سجّل صوتي</button><button type="button" class="btn" data-act="recstop">وقّف التسجيل</button>' : '') + '</div>' +
      '<div id="rec-out"></div><p class="muted small">المايكروفون بينطلب بس لما تضغط زر التسجيل. التسجيل بيضل بالمتصفح وما بينرفع لأي مكان.</p></section>' +
      '<section class="card"><h2>قيّم حالك</h2><ul class="crit">' + App.exam.criteria.map(function (c, i) { return '<li><label><input type="checkbox" data-crit="' + i + '"> ' + esc(c) + '</label></li>'; }).join('') + '</ul>' +
      (done ? '<p class="ok">' + App.icon('check') + ' عملت هالمهمة قبل. فيك تعيدها كل ما بدك.</p>' : '') +
      '<button type="button" class="btn primary" data-act="taskdone">خلصت المهمة</button></section>';
  }
  function fmt(s) { return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

  // ================= events =================
  function rerender(keepScroll) {
    var y = window.scrollY, tb = App.$('#tabbody');
    var tab = (location.hash.split('/')[3]) || 's';
    tb.innerHTML = tab === 'v' ? vocabTab(st.L) : tab === 'x' ? exercisesTab(st.L) : tab === 'd' ? dialogueTab(st.L) : tab === 't' ? taskTab(st.L) : sentencesTab(st.L);
    if (keepScroll !== false) window.scrollTo(0, y);
    App.updateNav();
  }
  function rerenderCard(i) {
    var el = App.$('#card-' + i);
    if (!el || st.layout === 'focus') return rerender();
    var tmp = document.createElement('ol'); tmp.innerHTML = card(st.L, i);
    el.replaceWith(tmp.firstChild);
    App.updateNav();
  }
  function focusCardBtn(i, sel) { var c = App.$('#card-' + i); var b = c && c.querySelector(sel); if (b) b.focus(); }

  function bind(L, tab) {
    var view = App.$('#view');
    var onClick = function (e) {
      var b = e.target.closest('[data-act]'); if (!b || !view.contains(b)) return;
      var a = b.getAttribute('data-act'), i = +b.getAttribute('data-i');
      var s = L.sentences[i];
      switch (a) {
        case 'mode': setMode(b.getAttribute('data-m')); if (tab !== 's') return App.go('#/l/' + L.id); rerender(); break;
        case 'layout': st.layout = b.getAttribute('data-v'); saveUi(); rerender(); break;
        case 'all':
          var lang = b.getAttribute('data-l'), on = b.getAttribute('data-v') === '1';
          st.vis.forEach(function (v) { if (lang === 'both') { v.de = on; v.ar = on; } else v[lang] = on; });
          rerender(); break;
        case 'tog': st.vis[i][b.getAttribute('data-l')] = !st.vis[i][b.getAttribute('data-l')]; rerenderCard(i); focusCardBtn(i, '[data-act="tog"][data-l="' + b.getAttribute('data-l') + '"]'); break;
        case 'reveal': st.revealed[i] = true; st.vis[i] = { de: true, ar: true }; rerenderCard(i); focusCardBtn(i, '.grades button'); App.speak(s.de); break;
        case 'hint': st.hint[i] = true; rerenderCard(i); break;
        case 'rec':
          window.Speech.recognize(function (txt) { st.attempt[i] = txt; rerenderCard(i); }, function (err) { App.toast(err === 'not-allowed' ? 'ما في إذن للمايكروفون' : 'التعرّف على الصوت ما زبط'); });
          App.toast('احكي هلأ…'); break;
        case 'grade':
          App.store.grade('s:' + s.id, +b.getAttribute('data-g')); st.graded[i] = +b.getAttribute('data-g');
          rerenderCard(i);
          if (st.layout === 'focus' && st.idx < L.sentences.length - 1) setTimeout(function () { st.idx++; rerender(false); }, 500);
          break;
        case 'play': App.speak(s.de, { slow: b.hasAttribute('data-slow'), audio: s.audio }); App.store.lessonEvent(L.id, 'listen'); break;
        case 'info': st.info[i] = !st.info[i]; rerenderCard(i); break;
        case 'diff': var it = App.store.item('s:' + s.id); App.store.setDifficult('s:' + s.id, !(it && it.diff)); rerenderCard(i); App.toast(it && it.diff ? 'شلت علامة «صعبة»' : 'انضافت لقائمة الصعبة'); break;
        case 'master': App.store.markMastered('s:' + s.id); rerenderCard(i); App.toast('تعلّمت كمتقنة. رح ترجعلك بعد أسبوع للتأكيد.'); break;
        case 'prev': if (st.idx > 0) { st.idx--; rerender(false); } break;
        case 'next': if (st.idx < L.sentences.length - 1) { st.idx++; rerender(false); } break;
        // vocab
        case 'vpractice': setMode('E'); App.go('#/l/' + L.id); break;
        case 'vdir': st.vDir = b.getAttribute('data-v'); st.vShown = false; rerender(); break;
        case 'vshow': st.vShown = true; rerender(); break;
        case 'vgrade':
          var vs = App.vocabOf(L); App.store.grade('v:' + vs[st.vIdx].id, +b.getAttribute('data-g'));
          st.vIdx = (st.vIdx + 1) % vs.length; st.vShown = false; rerender(); break;
        // exercises
        case 'dplay': var ds = L.sentences[st.dict || 0]; App.speak(ds.de, { slow: b.hasAttribute('data-slow'), audio: ds.audio }); break;
        case 'dcheck':
          var dsx = L.sentences[st.dict || 0], c = T.compare(App.$('#dict-in').value, dsx.de);
          App.$('#dict-out').innerHTML = result(c, dsx);
          App.store.lessonEvent(L.id, 'listen');
          if (c.verdict === 'wrong') App.store.failExercise('dict:' + dsx.id, { lesson: L.id, type: 'dict', sid: dsx.id }); else App.store.passExercise('dict:' + dsx.id);
          break;
        case 'dnext': st.dict = ((st.dict || 0) + 1) % L.sentences.length; rerender(); App.$('#dict-in').focus(); break;
        case 'ccheck':
          var right = 0, total = 0;
          App.$$('.gap', view).forEach(function (inp) {
            var ci = +inp.getAttribute('data-ci'), g = +inp.getAttribute('data-g'), ans = st.clozeData[ci].answers[g];
            var ok = T.normalize(inp.value) === T.normalize(ans) || (T.normalize(ans).length > 4 && T.lev(T.normalize(inp.value, true), T.normalize(ans, true)) <= 1);
            total++; if (ok) right++;
            inp.classList.toggle('ok', ok); inp.classList.toggle('bad', !ok);
            if (!ok) inp.setAttribute('title', ans);
          });
          L.sentences.forEach(function (sx, ci) {
            var allOk = App.$$('.gap[data-ci="' + ci + '"]', view).every(function (x) { return x.classList.contains('ok'); });
            if (allOk) App.store.passExercise('cloze:' + sx.id); else App.store.failExercise('cloze:' + sx.id, { lesson: L.id, type: 'cloze', sid: sx.id });
          });
          App.$('#cloze-out').innerHTML = '<p class="' + (right === total ? 'ok' : 'warn') + '">' + right + ' من ' + total + ' صح. حط الماوس أو اضغط مطوّل على الخانة الحمرا لتشوف الجواب.</p>' +
            '<details><summary>اعرض كل الأجوبة</summary><ol class="small">' + L.sentences.map(function (sx) { return '<li lang="de" dir="ltr">' + T.highlight(sx.de) + '</li>'; }).join('') + '</ol></details>';
          App.store.lessonEvent(L.id, 'exercise'); break;
        case 'spick': st.scrPicked.push(+b.getAttribute('data-k')); rerender(); break;
        case 'sundo': st.scrPicked.pop(); rerender(); break;
        case 'scheck':
          var built = st.scrPicked.map(function (k) { return st.scrData.shuffled[k]; }).join(' ');
          var ok2 = T.normalize(built) === T.normalize(st.scrData.tokens.join(' '));
          var sid = L.sentences[st.scr || 0].id;
          App.$('#scr-out').innerHTML = ok2 ? '<p class="ok">' + App.icon('check') + ' ترتيب صحيح!</p>' : '<p class="warn">مش هيك تماماً. الجواب: <span lang="de" dir="ltr">' + esc(st.scrData.tokens.join(' ')) + '</span></p>';
          if (ok2) App.store.passExercise('scr:' + sid); else App.store.failExercise('scr:' + sid, { lesson: L.id, type: 'scr', sid: sid });
          App.store.lessonEvent(L.id, 'exercise'); break;
        case 'snext': st.scr = ((st.scr || 0) + 1) % L.sentences.length; st.scrPicked = []; rerender(); break;
        case 'trcheck':
          var t = L.tr[i], val = App.$('[data-tr="' + i + '"]', view).value, ct = T.compare(val, t[2]);
          App.$('#tr-out-' + i).innerHTML = '<p class="cmp ' + ct.verdict + '"><b>نموذج:</b> <span lang="de" dir="ltr">' + esc(t[2]) + '</span>' + (val.trim() ? ' <span class="small">(تطابق ' + Math.round(ct.score * 100) + '%، ممكن جوابك يكون صح بصيغة تانية)</span>' : '') + '</p>';
          App.store.lessonEvent(L.id, 'exercise'); break;
        case 'qashow': App.$('#qa-out-' + i).innerHTML = '<p class="model"><b>جواب نموذجي:</b> <span lang="de" dir="ltr">' + esc(L.qa[i][1]) + '</span> ' + App.speakBtn(L.qa[i][1], false) + '</p>'; App.store.lessonEvent(L.id, 'exercise'); break;
        case 'qarec': window.Speech.recognize(function (txt) { App.$('#qa-' + i).value = txt; }, function () { App.toast('التعرّف على الصوت ما زبط'); }); App.toast('احكي هلأ…'); break;
        // dialogue
        case 'dlgplay':
          if (st.cancelSeq) st.cancelSeq();
          st.cancelSeq = window.Speech.sequence(L.dlg.lines.map(function (l) { return l[1]; }), function (k) {
            App.$$('.dlg li').forEach(function (li, j) { li.classList.toggle('now', j === k); });
          }, function () { App.$$('.dlg li').forEach(function (li) { li.classList.remove('now'); }); App.store.lessonEvent(L.id, 'listen'); });
          break;
        case 'dlgstop': if (st.cancelSeq) st.cancelSeq(); st.cancelSeq = null; window.Speech.stop(); break;
        case 'dtog': st.dv[b.getAttribute('data-l')] = !st.dv[b.getAttribute('data-l')]; rerender(); break;
        case 'dqcheck':
          var good = 0;
          L.dlg.q.forEach(function (q, k) {
            var sel = App.$('input[name="dq' + k + '"]:checked', view), li = App.$$('.mcq > li', view)[k];
            var ok3 = sel && +sel.value === q[2]; if (ok3) good++;
            li.classList.toggle('ok', !!ok3); li.classList.toggle('bad', !ok3);
          });
          var pct = Math.round(good / L.dlg.q.length * 100);
          App.store.lessonEvent(L.id, 'dialogue', pct);
          if (pct < 100) App.store.failExercise('dlg:' + L.id, { lesson: L.id, type: 'dlg' }); else App.store.passExercise('dlg:' + L.id);
          App.$('#dq-out').innerHTML = '<p class="' + (pct === 100 ? 'ok' : 'warn') + '">' + good + ' من ' + L.dlg.q.length + ' صح.</p>' + (pct < 100 ? '<p class="small">افتح النص الألماني واسمع مرة تانية.</p>' : ''); break;
        case 'role': st.role = { sp: b.getAttribute('data-sp'), i: 0 }; roleStep(); break;
        case 'roleshow': var line = L.dlg.lines[st.role.i]; App.$('#role-out').innerHTML += '<p class="de" lang="de" dir="ltr">' + esc(line[1]) + '</p>'; App.speak(line[1]); st.role.i++; setTimeout(roleStep, 2200); break;
        // task
        case 'tstart':
          clearInterval(st.timer); var left = +b.getAttribute('data-s'), tm = App.$('#tm');
          st.timer = setInterval(function () { left--; if (tm) tm.textContent = fmt(Math.max(0, left)); if (left <= 0) { clearInterval(st.timer); App.toast('خلص الوقت'); } }, 1000); break;
        case 'tstop': clearInterval(st.timer); break;
        case 'taskrec': window.Speech.recognize(function (txt) { var n = App.$('#task-notes'); n.value = (n.value ? n.value + ' ' : '') + txt; saveDraft(); }, function () { App.toast('التعرّف على الصوت ما زبط'); }); App.toast('احكي هلأ…'); break;
        case 'recstart': st.rec = window.Speech.recorder(); st.rec.start().then(function () { App.toast('عم يسجّل…'); }).catch(function () { App.toast('ما في إذن للمايكروفون'); }); break;
        case 'recstop': if (st.rec) st.rec.stop().then(function (url) { if (url) App.$('#rec-out').innerHTML = '<p class="small">اسمع حالك وقارن مع القوالب:</p><audio controls src="' + url + '"></audio>'; }); break;
        case 'taskdone': App.store.lessonEvent(L.id, 'speak'); App.toast('عظيم! انحسبت المهمة.'); App.route(); break;
      }
    };
    var onInput = function (e) {
      var t = e.target;
      if (t.hasAttribute && t.hasAttribute('data-att')) st.attempt[+t.getAttribute('data-att')] = t.value;
      if (t.id === 'task-notes') saveDraft();
    };
    var onKey = function (e) {
      if (tab !== 's' || st.layout !== 'focus' || st.mode === 'E') return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      var i = st.idx, s = L.sentences[i];
      if (e.key === 'ArrowLeft') { e.preventDefault(); if (i < L.sentences.length - 1) { st.idx++; rerender(false); } }
      else if (e.key === 'ArrowRight') { e.preventDefault(); if (i > 0) { st.idx--; rerender(false); } }
      else if (e.key === ' ' && !e.target.closest('button')) { e.preventDefault(); st.revealed[i] = true; st.vis[i] = { de: true, ar: true }; rerender(false); }
      else if (/^[1-4]$/.test(e.key) && st.revealed[i] && st.graded[i] == null) { App.store.grade('s:' + s.id, +e.key - 1); st.graded[i] = +e.key - 1; rerender(false); }
      else if (e.key === 'g' || e.key === 'G') { st.vis[i].de = !st.vis[i].de; rerender(false); }
      else if (e.key === 'a' || e.key === 'A') { st.vis[i].ar = !st.vis[i].ar; rerender(false); }
      else if (e.key === 'p' || e.key === 'P') App.speak(s.de);
    };
    view.addEventListener('click', onClick);
    view.addEventListener('input', onInput);
    document.addEventListener('keydown', onKey);
    var prevCleanup = App.cleanup;
    App.cleanup = function () {
      view.removeEventListener('click', onClick); view.removeEventListener('input', onInput); document.removeEventListener('keydown', onKey);
      clearInterval(st && st.timer);
      if (st) { st.role = null; if (st.cancelSeq) { st.cancelSeq(); st.cancelSeq = null; } }
      if (prevCleanup) prevCleanup();
    };
  }
  function saveDraft() { try { localStorage.setItem('b1app:draft:' + st.L.id, App.$('#task-notes').value); } catch (e) { } }
  function result(c, s) {
    return '<p class="cmp ' + c.verdict + '"><b>' + (c.verdict === 'correct' ? 'ممتاز!' : c.verdict === 'close' ? 'قريب كتير' : 'جرّب مرة تانية') + ' (' + Math.round(c.score * 100) + '%)</b></p>' +
      '<p lang="de" dir="ltr">' + c.tokens.map(function (t) { return '<span class="' + (t.ok ? 'tok-ok' : 'tok-miss') + '">' + esc(t.w) + '</span>'; }).join(' ') + '</p>' +
      '<p class="de" lang="de" dir="ltr">' + T.highlight(s.de) + '</p><p class="ar small">' + esc(s.ar) + '</p>';
  }
  App.compareHtml = result;
})();
