/* Speaking-exam preparation, settings (theme, speech, backup/restore) and optional server sync. */
(function () {
  'use strict';
  var App = window.App, T = window.TextKit, esc = App.esc;

  // ================= exam =================
  var ex = { part: '1', prompt: 0, topic: 0, qs: [] };
  App.views.exam = function (p) {
    var E = App.exam;
    ex.part = p[0] || ex.part;
    function phrases(steps) {
      return '<ol class="steps">' + steps.map(function (s) {
        return '<li><b>' + esc(s.ar) + '</b><ul>' + s.de.map(function (d) { return '<li><span lang="de" dir="ltr">' + esc(d) + '</span> ' + App.speakBtn(d, false) + '</li>'; }).join('') + '</ul></li>';
      }).join('') + '</ol>';
    }
    function timer(secs) { return '<div class="row timer"><span class="num big" id="etm">' + Math.floor(secs / 60) + ':' + String(secs % 60).padStart(2, '0') + '</span><button type="button" class="btn" data-e="tstart" data-s="' + secs + '">ابدأ المؤقت</button><button type="button" class="btn" data-e="tstop">وقّف</button></div>'; }
    var body = '';
    if (ex.part === '1') {
      var pr = E.teil1.prompts[ex.prompt % E.teil1.prompts.length];
      body = '<section class="card"><h2>' + esc(E.teil1.title) + '</h2><p class="muted small">ما في نص بتحفظه: هي قوالب بتستعملها مع أي موضوع.</p>' + phrases(E.teil1.steps) + '</section>' +
        '<section class="card"><h2>مهمة تدريب</h2><p class="de big" lang="de" dir="ltr">' + esc(pr.de) + '</p><ul lang="de" dir="ltr">' + pr.points.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        timer(180) + '<button type="button" class="btn" data-e="nextprompt">مهمة تانية</button></section>' +
        '<section class="card"><h2>نموذج حوار</h2><ol class="dlg">' + E.teil1.model.map(function (l) { return '<li><span class="sp">' + esc(l[0]) + '</span><div><p class="de" lang="de" dir="ltr">' + esc(l[1]) + '</p><p class="ar small">' + esc(l[2]) + '</p></div>' + App.speakBtn(l[1], false) + '</li>'; }).join('') + '</ol></section>';
    } else if (ex.part === '2') {
      var tp = E.teil2.topics[ex.topic % E.teil2.topics.length];
      body = '<section class="card"><h2>' + esc(E.teil2.title) + '</h2><p class="muted small">هيكلية بتنفع لأي موضوع: 7 خطوات، جملة أو جملتين لكل خطوة.</p>' + phrases(E.teil2.steps) + '</section>' +
        '<section class="card"><h2>موضوع تدريب</h2><p class="de big" lang="de" dir="ltr">' + esc(tp) + '</p><p class="muted small">حضّر 3 دقايق (نقاط بس، مش نص كامل)، بعدين احكي 2–3 دقايق.</p>' +
        '<textarea rows="5" lang="de" dir="ltr" aria-label="نقاطك"></textarea>' + timer(180) + '<button type="button" class="btn" data-e="nexttopic">موضوع تاني</button></section>' +
        '<section class="card"><h2>نموذج عرض: ' + esc(E.teil2.model.topic) + '</h2>' + (window.Speech.supported ? '<button type="button" class="btn" data-e="playmodel">' + App.icon('play') + ' اسمع النموذج</button>' : '') +
        '<ol class="model">' + E.teil2.model.text.map(function (t) { return '<li><p class="de" lang="de" dir="ltr">' + esc(t[0]) + '</p><p class="ar small">' + esc(t[1]) + '</p></li>'; }).join('') + '</ol></section>';
    } else if (ex.part === '3') {
      if (!ex.qs.length) ex.qs = T.shuffle(E.teil3.questions);
      body = '<section class="card"><h2>' + esc(E.teil3.title) + '</h2>' + phrases(E.teil3.steps) + '</section>' +
        '<section class="card"><h2>أسئلة عشوائية بعد العرض</h2><p class="muted small">اسمع السؤال وجاوب فوراً 30–45 ثانية. استعمل جمل «عدم التأكد» إذا ما كنت محضّر.</p>' +
        '<p class="de big" lang="de" dir="ltr" id="e3q">' + esc(ex.qs[0]) + '</p><div class="row">' + App.speakBtn(ex.qs[0], false) + '<button type="button" class="btn" data-e="nextq">سؤال تاني</button></div>' + timer(45) + '</section>';
    } else if (ex.part === 'r') {
      body = '<section class="card"><h2>جمل الإنقاذ</h2><p class="muted">لما تنقصك كلمة: لا توقف. اوصف، اطلب توضيح، أو اربح وقت.</p><ul class="rescue-list">' +
        E.rescue.map(function (r) { return '<li><span lang="de" dir="ltr">' + esc(r[0]) + '</span> ' + App.speakBtn(r[0], false) + '<br><span class="muted small">' + esc(r[1]) + '</span></li>'; }).join('') + '</ul></section>' +
        '<section class="card"><h2>معايير التقييم الذاتي</h2><ul class="crit">' + E.criteria.map(function (c) { return '<li><label><input type="checkbox"> ' + esc(c) + '</label></li>'; }).join('') + '</ul></section>';
    } else {
      body = '<section class="card"><p class="muted">' + esc(E.disclaimer) + '</p></section>' + E.providers.map(function (pv) {
        return '<section class="card"><h2 lang="de" dir="ltr">' + esc(pv.name) + '</h2><ol>' + pv.parts.map(function (pt) { return '<li><b lang="de" dir="ltr">' + esc(pt.de) + '</b> — ' + esc(pt.ar) + ' <span class="muted small">(' + esc(pt.time) + ')</span></li>'; }).join('') + '</ol><p class="muted small">' + esc(pv.note) + '</p></section>';
      }).join('');
    }
    var tabs = [['p', 'صيغة الامتحان'], ['1', 'الجزء 1: التخطيط'], ['2', 'الجزء 2: العرض'], ['3', 'الجزء 3: الأسئلة'], ['r', 'جمل الإنقاذ والتقييم']];
    App.render('<nav class="crumbs"><a href="#/">الرئيسية</a></nav><h1>تحضير امتحان المحادثة B1</h1>' +
      '<p class="muted">دروس الأسبوع 11 بتدرّبك خطوة خطوة؛ هون كل القوالب ومهام تدريب عشوائية بمكان واحد.</p>' +
      '<nav class="tabs">' + tabs.map(function (t) { return '<a href="#/exam/' + t[0] + '" aria-current="' + (ex.part === t[0] ? 'page' : 'false') + '">' + t[1] + '</a>'; }).join('') + '</nav>' + body, 'امتحان المحادثة');
    var view = App.$('#view'), timerId = null;
    var onClick = function (e) {
      var b = e.target.closest('[data-e]'); if (!b) return;
      var a = b.getAttribute('data-e');
      if (a === 'nextprompt') { ex.prompt++; App.route(); }
      else if (a === 'nexttopic') { ex.topic++; App.route(); }
      else if (a === 'nextq') { ex.qs.push(ex.qs.shift()); App.route(); }
      else if (a === 'playmodel') window.Speech.sequence(E.teil2.model.text.map(function (t) { return t[0]; }));
      else if (a === 'tstart') {
        clearInterval(timerId); var left = +b.getAttribute('data-s'), tm = App.$('#etm');
        timerId = setInterval(function () { left--; tm.textContent = Math.floor(Math.max(0, left) / 60) + ':' + String(Math.max(0, left) % 60).padStart(2, '0'); if (left <= 0) { clearInterval(timerId); App.toast('خلص الوقت'); } }, 1000);
      } else if (a === 'tstop') clearInterval(timerId);
    };
    view.addEventListener('click', onClick);
    App.cleanup = function () { clearInterval(timerId); view.removeEventListener('click', onClick); };
  };

  // ================= sync client =================
  var Sync = App.sync = {
    state: { available: null, user: null, csrf: '' },
    req: function (url, opts) {
      opts = opts || {};
      opts.credentials = 'same-origin';
      opts.headers = Object.assign({ 'Accept': 'application/json' }, opts.headers || {});
      if (opts.body && typeof opts.body !== 'string') { opts.body = JSON.stringify(opts.body); opts.headers['Content-Type'] = 'application/json'; }
      if (opts.method && opts.method !== 'GET') opts.headers['X-CSRF-Token'] = Sync.state.csrf;
      return fetch('api/' + url, opts).then(function (r) {
        var ct = r.headers.get('content-type') || '';
        if (ct.indexOf('application/json') < 0) { var e = new Error('unavailable'); e.status = r.status; throw e; }
        return r.json().then(function (j) { if (!r.ok) { var er = new Error(j.error || ('HTTP ' + r.status)); er.status = r.status; er.body = j; throw er; } return j; });
      });
    },
    check: function () {
      return Sync.req('auth.php?action=me').then(function (j) { Sync.state.available = true; Sync.state.user = j.user; Sync.state.csrf = j.csrf; return Sync.state; })
        .catch(function (e) { Sync.state.available = !!(e.status && e.status !== 404 && e.message !== 'unavailable' && e.status !== 503); Sync.state.user = null; return Sync.state; });
    },
    login: function (email, password) { return Sync.req('auth.php?action=login', { method: 'POST', body: { email: email, password: password } }).then(function (j) { Sync.state.user = j.user; Sync.state.csrf = j.csrf; }); },
    register: function (email, password) { return Sync.req('auth.php?action=register', { method: 'POST', body: { email: email, password: password } }).then(function (j) { Sync.state.user = j.user; Sync.state.csrf = j.csrf; }); },
    logout: function () { return Sync.req('auth.php?action=logout', { method: 'POST' }).then(function (j) { Sync.state.user = null; Sync.state.csrf = j.csrf || ''; }); },
    run: function (attempt) {
      attempt = attempt || 0;
      return Sync.req('sync.php').then(function (srv) {
        var merged = window.Store.merge(App.store.data, srv.data || window.Store.empty(Date.now()));
        merged.settings = App.store.data.settings;
        return Sync.req('sync.php', { method: 'PUT', body: { data: merged, baseVersion: srv.version } }).then(function (res) {
          App.store.replace(merged);
          try { localStorage.setItem('b1app:lastSync', String(Date.now())); } catch (e) { }
          return res;
        }).catch(function (e) { if (e.status === 409 && attempt < 2) return Sync.run(attempt + 1); throw e; });
      });
    }
  };

  // ================= settings =================
  App.views.settings = function () {
    var d = App.store.data, s = d.settings, voices = window.Speech.voices;
    var last = 0; try { last = +localStorage.getItem('b1app:lastSync') || 0; } catch (e) { }
    App.render('<nav class="crumbs"><a href="#/">الرئيسية</a></nav><h1>الإعدادات والنسخ الاحتياطي</h1>' +
      '<section class="card"><h2>المظهر</h2><div class="seg" role="group" aria-label="المظهر">' + [['auto', 'تلقائي'], ['light', 'فاتح'], ['dark', 'غامق']].map(function (o) {
        return '<button type="button" data-s="theme" data-v="' + o[0] + '" aria-pressed="' + (s.theme === o[0]) + '">' + o[1] + '</button>'; }).join('') + '</div>' +
      '<label class="block">عدد العناصر بجلسة المراجعة <input type="number" id="limit" min="10" max="200" step="10" value="' + (s.dailyLimit || 40) + '"></label></section>' +
      '<section class="card"><h2>الصوت</h2>' + (window.Speech.supported ?
        '<p class="muted small">النطق من محرّك الكلام بالمتصفح أو الجهاز (مش تسجيل لمتحدث أصلي). الجودة بتختلف حسب الجهاز، وبعض الأصوات بتحتاج إنترنت. ' + (voices.length ? voices.length + ' صوت ألماني متاح.' : 'ما لقينا صوت ألماني على هالجهاز؛ ممكن يطلع اللفظ بلكنة غلط. نزّل صوت ألماني من إعدادات الجهاز.') + '</p>' +
        '<label class="block">الصوت <select id="voice"><option value="">افتراضي</option>' + voices.map(function (v) { return '<option value="' + esc(v.voiceURI) + '"' + (s.voice === v.voiceURI ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>'; }).join('') + '</select></label>' +
        '<label class="block">السرعة <input type="range" id="rate" min="0.6" max="1.2" step="0.05" value="' + s.rate + '"> <span class="num" id="rateV">' + s.rate + '</span></label>' +
        '<button type="button" class="btn" data-speak="Guten Tag! Ich lerne jeden Tag ein bisschen Deutsch.">' + App.icon('play') + ' جرّب الصوت</button>'
        : '<p class="warn">هالمتصفح ما بيدعم النطق الصوتي. جرّب Chrome أو Edge أو Safari.</p>') +
        '<p class="muted small">التعرّف على الكلام (الحكي بالمايك): ' + (window.Speech.recognitionSupported ? 'مدعوم بهالمتصفح. ملاحظة: بعض المتصفحات (متل Chrome) بتبعت الصوت لسيرفراتها لتحوّله لنص، وما بيشتغل أوفلاين.' : 'مش مدعوم بهالمتصفح.') + ' التطبيق ما بيعمل تقييم آلي للفظ.</p></section>' +
      '<section class="card"><h2>نسخة احتياطية للتقدّم</h2><p class="muted small">التقدّم محفوظ على هالجهاز وهالمتصفح بس. صدّر نسخة بشكل دوري، أو فعّل المزامنة تحت.</p>' +
        '<div class="row"><button type="button" class="btn primary" data-s="export">صدّر ملف JSON</button>' +
        '<label class="btn">استورد ملف<input type="file" id="importFile" accept="application/json,.json" hidden></label></div>' +
        '<div id="importBox"></div>' +
        '<details><summary class="small">صفّر كل التقدّم</summary><p class="small">هالخطوة بتمسح كل المراجعات والإحصاءات على هالجهاز. صدّر نسخة أول.</p><button type="button" class="btn danger" data-s="reset">امسح التقدّم</button></details></section>' +
      '<section class="card" id="syncBox"><h2>المزامنة بين الأجهزة (اختياري)</h2><p class="muted small">عم نفحص إذا السيرفر متاح…</p></section>' +
      '<section class="card"><h2>عن التطبيق</h2><p class="small muted">نسخة المحتوى: <span class="num">' + esc(App.data.version) + '</span> · ' + App.data.lessons.length + ' درس · ' + App.vocab.items.length + ' كلمة.' +
        (App.data.errors.length ? ' <span class="warn">' + App.data.errors.length + ' مشكلة بالمحتوى (شوف الـ console).</span>' : '') + '</p>' +
        '<p class="small"><a href="admin/">لوحة إدارة المحتوى</a> (بتحتاج سيرفر وحساب مدير)</p></section>', 'الإعدادات');
    var view = App.$('#view');
    function drawSync() {
      var box = App.$('#syncBox'); if (!box) return;
      var st = Sync.state, h = '<h2>المزامنة بين الأجهزة (اختياري)</h2>';
      if (!st.available) h += '<p class="muted small">المزامنة مش مفعّلة على هالنسخة (ما في سيرفر PHP/MySQL مضبوط). التطبيق بيشتغل عادي بالتخزين المحلي، والتقدّم ما بينتقل لحاله بين الأجهزة: استعمل التصدير والاستيراد.</p>';
      else if (st.user) h += '<p>مسجّل باسم <b dir="ltr">' + esc(st.user.email) + '</b>' + (last ? ' · آخر مزامنة: ' + new Date(last).toLocaleString('ar') : '') + '</p><div class="row"><button type="button" class="btn primary" data-s="sync">زامن هلأ</button><button type="button" class="btn" data-s="logout">اطلع</button></div>';
      else h += '<p class="muted small">سجّل دخول لتزامن تقدّمك بين الموبايل والكمبيوتر. المزامنة بتدمج البيانات (ما بتمسح شي).</p>' +
        '<form id="authForm" class="auth"><label>الإيميل <input type="email" id="aEmail" required autocomplete="username" dir="ltr"></label><label>كلمة السر <input type="password" id="aPass" required minlength="10" autocomplete="current-password" dir="ltr"></label>' +
        '<div class="row"><button class="btn primary" type="submit" data-mode="login">دخول</button><button class="btn" type="submit" data-mode="register">حساب جديد</button></div><p id="authErr" class="warn small" aria-live="polite"></p></form>';
      box.innerHTML = h;
    }
    Sync.check().then(drawSync);
    var onClick = function (e) {
      var b = e.target.closest('[data-s]'); if (!b) return;
      var a = b.getAttribute('data-s');
      if (a === 'theme') { App.store.setting('theme', b.getAttribute('data-v')); App.applyTheme(); App.route(); }
      else if (a === 'export') {
        var blob = new Blob([App.store.exportJSON()], { type: 'application/json' }), url = URL.createObjectURL(blob), link = document.createElement('a');
        link.href = url; link.download = 'b1-progress-' + window.Store.dayKey(Date.now()) + '.json'; document.body.appendChild(link); link.click(); link.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      } else if (a === 'doimport') {
        try { App.store.importJSON(App._pendingImport, b.getAttribute('data-mode')); App.toast('انستورد التقدّم'); App.route(); }
        catch (err) { App.toast('ما قدرنا نستورد: ' + err.message); }
      } else if (a === 'reset') { if (confirm('أكيد بدك تمسح كل التقدّم على هالجهاز؟')) { App.store.reset(); App.toast('انمسح التقدّم'); App.route(); } }
      else if (a === 'sync') { b.disabled = true; Sync.run().then(function () { App.toast('تمت المزامنة'); App.route(); }).catch(function (err) { b.disabled = false; App.toast('فشلت المزامنة: ' + err.message); }); }
      else if (a === 'logout') Sync.logout().then(drawSync);
    };
    var onChange = function (e) {
      var t = e.target;
      if (t.id === 'voice') { App.store.setting('voice', t.value); window.Speech.configure({ voice: t.value }); }
      else if (t.id === 'rate') { App.store.setting('rate', +t.value); window.Speech.configure({ rate: +t.value }); App.$('#rateV').textContent = t.value; }
      else if (t.id === 'limit') App.store.setting('dailyLimit', Math.max(10, Math.min(200, +t.value || 40)));
      else if (t.id === 'importFile' && t.files[0]) {
        var r = new FileReader();
        r.onload = function () {
          try {
            var p = App.store.parseImport(String(r.result)); App._pendingImport = String(r.result);
            App.$('#importBox').innerHTML = '<div class="card inner"><p>الملف فيه ' + Object.keys(p.items).length + ' عنصر مراجعة و' + Object.keys(p.lessons).length + ' درس.</p>' +
              '<div class="row"><button type="button" class="btn primary" data-s="doimport" data-mode="merge">ادمج مع تقدّمي الحالي</button><button type="button" class="btn danger" data-s="doimport" data-mode="replace">استبدل تقدّمي الحالي</button></div></div>';
          } catch (err) { App.$('#importBox').innerHTML = '<p class="warn">الملف مش صالح: ' + esc(err.message) + '</p>'; }
        };
        r.readAsText(t.files[0]);
      }
    };
    var onSubmit = function (e) {
      if (e.target.id !== 'authForm') return;
      e.preventDefault();
      var mode = (e.submitter && e.submitter.getAttribute('data-mode')) || 'login';
      Sync[mode](App.$('#aEmail').value, App.$('#aPass').value).then(function () { return Sync.run(); }).then(function () { App.toast('تمت المزامنة'); App.route(); })
        .catch(function (err) { var m = { invalid_credentials: 'الإيميل أو كلمة السر غلط', email_taken: 'الإيميل مستعمل', registration_closed: 'التسجيل مقفول على هالسيرفر', weak_password: 'كلمة السر لازم تكون 10 أحرف على الأقل', too_many_attempts: 'محاولات كتيرة، استنى شوي' }; App.$('#authErr').textContent = m[err.message] || err.message; });
    };
    var onRate = function (e) { if (e.target.id === 'rate') onChange(e); };
    view.addEventListener('click', onClick); view.addEventListener('change', onChange); view.addEventListener('input', onRate); view.addEventListener('submit', onSubmit);
    App.cleanup = function () { view.removeEventListener('click', onClick); view.removeEventListener('change', onChange); view.removeEventListener('input', onRate); view.removeEventListener('submit', onSubmit); };
  };
})();
