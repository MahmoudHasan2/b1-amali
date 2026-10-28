/* Service worker.
   - App shell: precached, versioned by CACHE (bump it when shell files change; tools/stamp-sw.mjs does this).
   - Lesson data (data/*.json): stale-while-revalidate, so content edits arrive on the next visit.
   - Fonts: cache-first. API (api/*) and admin pages: never cached. */
var CACHE = 'b1-shell-v1';
var DATA = 'b1-data-v1';
var FONTS = 'b1-fonts-v1';
var SHELL = [
  './', 'index.html', 'manifest.webmanifest',
  'assets/css/app.css',
  'assets/js/srs.js', 'assets/js/text.js', 'assets/js/store.js', 'assets/js/validate.js', 'assets/js/speech.js',
  'assets/js/app-core.js', 'assets/js/app-lesson.js', 'assets/js/app-review.js', 'assets/js/app-exam.js', 'assets/js/pwa.js',
  'assets/icons/icon.svg', 'assets/icons/icon-192.png', 'assets/icons/icon-512.png', 'assets/icons/maskable-512.png',
  'data/lessons/curriculum.json', 'data/vocabulary/vocabulary.json', 'data/exams/exam.json', 'data/version.json'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () {
    return caches.open(DATA).then(function (d) {
      return Promise.all(SHELL.filter(function (u) { return u.indexOf('data/') === 0; }).map(function (u) {
        return caches.match(u, { cacheName: CACHE }).then(function (r) { return r && d.put(u, r.clone()); });
      }));
    });
  }));
});

self.addEventListener('activate', function (e) {
  var keep = [CACHE, DATA, FONTS];
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return keep.indexOf(k) < 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('message', function (e) { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.origin === location.origin) {
    var path = url.pathname.slice(new URL(self.registration.scope).pathname.length);
    if (path.indexOf('api/') === 0 || path.indexOf('admin/') === 0) return; // private / authenticated: network only
    if (path.indexOf('data/') === 0) {
      var key = path; // ignore query strings for data files
      e.respondWith(caches.open(DATA).then(function (c) {
        return c.match(key).then(function (cached) {
          var net = fetch(req).then(function (r) { if (r.ok) c.put(key, r.clone()); return r; }).catch(function () { return cached; });
          return cached ? (e.waitUntil(net.catch(function () { })), cached) : net;
        });
      }));
      return;
    }
    if (req.mode === 'navigate') {
      e.respondWith(fetch(req).catch(function () { return caches.match('index.html', { cacheName: CACHE }); }));
      return;
    }
    e.respondWith(caches.match(req, { cacheName: CACHE }).then(function (r) { return r || fetch(req); }));
    return;
  }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(function (c) {
      return c.match(req).then(function (r) {
        return r || fetch(req).then(function (res) { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; }).catch(function () { return new Response('', { status: 504 }); });
      });
    }));
  }
});
