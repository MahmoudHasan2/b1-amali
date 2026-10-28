/* Speech output (browser speech synthesis, or a prerecorded file when a sentence has `audio`),
   optional browser speech recognition, and local voice recording for self-review.
   The microphone is only requested when the learner presses a recording/recognition button. */
(function (root) {
  'use strict';
  var synth = ('speechSynthesis' in root) ? root.speechSynthesis : null;
  var Rec = root.SpeechRecognition || root.webkitSpeechRecognition || null;
  var audioEl = null, voices = [], cfg = { rate: 0.9, voice: '' };

  function loadVoices() { if (synth) voices = synth.getVoices().filter(function (v) { return /^de(-|_|$)/i.test(v.lang); }); }
  if (synth) { loadVoices(); try { synth.addEventListener('voiceschanged', loadVoices); } catch (e) { synth.onvoiceschanged = loadVoices; } }

  function stop() {
    if (synth) synth.cancel();
    if (audioEl) { audioEl.pause(); audioEl = null; }
  }

  // speak(text, {slow, audio, onend}) — `audio` is a URL relative to data/audio/ for recorded files.
  function speak(text, opts) {
    opts = opts || {};
    stop();
    var rate = cfg.rate * (opts.slow ? 0.7 : 1);
    if (opts.audio) {
      audioEl = new Audio('data/audio/' + opts.audio);
      audioEl.playbackRate = opts.slow ? 0.75 : 1;
      audioEl.onended = function () { audioEl = null; if (opts.onend) opts.onend(); };
      audioEl.onerror = function () { audioEl = null; speakSynth(text, rate, opts.onend); };
      audioEl.play().catch(function () { speakSynth(text, rate, opts.onend); });
      return true;
    }
    return speakSynth(text, rate, opts.onend);
  }
  function speakSynth(text, rate, onend) {
    if (!synth || !root.SpeechSynthesisUtterance) { if (onend) onend(); return false; }
    var u = new SpeechSynthesisUtterance(String(text).replace(/\*/g, ''));
    u.lang = 'de-DE'; u.rate = rate;
    var v = voices.filter(function (x) { return x.voiceURI === cfg.voice; })[0] || voices[0];
    if (v) u.voice = v;
    if (onend) { u.onend = onend; u.onerror = onend; }
    synth.speak(u);
    return true;
  }
  function pause() { if (audioEl) audioEl.pause(); else if (synth) synth.pause(); }
  function resume() { if (audioEl) audioEl.play(); else if (synth) synth.resume(); }

  // Speak several lines one after the other.
  function sequence(lines, onLine, onDone) {
    var i = 0, cancelled = false;
    function next() {
      if (cancelled) return;
      if (i >= lines.length) { if (onDone) onDone(); return; }
      var k = i++;
      if (onLine) onLine(k);
      if (!speak(lines[k], { onend: function () { setTimeout(next, 350); } })) setTimeout(next, 50);
    }
    next();
    return function () { cancelled = true; stop(); };
  }

  function recognize(onResult, onError) {
    if (!Rec) { onError && onError('unsupported'); return null; }
    var r = new Rec();
    r.lang = 'de-DE'; r.interimResults = false; r.maxAlternatives = 1;
    r.onresult = function (e) { onResult(e.results[0][0].transcript); };
    r.onerror = function (e) { onError && onError(e.error || 'error'); };
    try { r.start(); } catch (e) { onError && onError('start'); return null; }
    return r;
  }

  // Records the learner's voice locally (kept in memory only, never uploaded).
  function recorder() {
    var media = null, chunks = [], stream = null;
    return {
      supported: !!(root.navigator && navigator.mediaDevices && root.MediaRecorder),
      start: function () {
        return navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
          stream = s; chunks = []; media = new MediaRecorder(s);
          media.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
          media.start();
        });
      },
      stop: function () {
        return new Promise(function (resolve) {
          if (!media) return resolve(null);
          media.onstop = function () {
            stream.getTracks().forEach(function (t) { t.stop(); });
            resolve(URL.createObjectURL(new Blob(chunks, { type: media.mimeType || 'audio/webm' })));
            media = null;
          };
          media.stop();
        });
      }
    };
  }

  root.Speech = {
    get supported() { return !!synth; },
    get recognitionSupported() { return !!Rec; },
    get voices() { return voices.slice(); },
    configure: function (o) { Object.assign(cfg, o || {}); },
    speak: speak, stop: stop, pause: pause, resume: resume, sequence: sequence,
    recognize: recognize, recorder: recorder
  };
})(typeof self !== 'undefined' ? self : this);
