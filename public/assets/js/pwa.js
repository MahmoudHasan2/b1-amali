/* Service worker registration and the "new version available" prompt.
   Updates only replace cached files; learner progress lives in localStorage and is untouched. */
(function () {
  'use strict';
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  var userAskedUpdate = false;
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (reg) {
      function prompt(worker) {
        var bar = document.getElementById('update'), btn = document.getElementById('updateBtn');
        if (!bar || !worker) return;
        bar.hidden = false;
        btn.onclick = function () { btn.disabled = true; userAskedUpdate = true; worker.postMessage({ type: 'SKIP_WAITING' }); };
      }
      if (reg.waiting && navigator.serviceWorker.controller) prompt(reg.waiting);
      reg.addEventListener('updatefound', function () {
        var w = reg.installing;
        if (w) w.addEventListener('statechange', function () { if (w.state === 'installed' && navigator.serviceWorker.controller) prompt(w); });
      });
      setInterval(function () { reg.update().catch(function () { }); }, 60 * 60 * 1000);
    }).catch(function (e) { console.warn('Service worker registration failed', e); });
    // Reload only when the learner accepted an update; the first install (clients.claim) must not reload.
    navigator.serviceWorker.addEventListener('controllerchange', function () { if (userAskedUpdate) { userAskedUpdate = false; location.reload(); } });
  });
})();
