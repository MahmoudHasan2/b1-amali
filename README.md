<div align="center">

<img src="public/assets/icons/icon-192.png" width="88" alt="B1 عملي logo">

# B1 عملي: German B1 Speaking Practice

**An offline-first web app that helps Arabic speakers practise spoken German at B1 level.**

🇬🇧 English · [🇩🇪 Deutsch](README.de.md)

[![Tests](https://github.com/MahmoudHasan2/b1-amali/actions/workflows/ci.yml/badge.svg)](https://github.com/MahmoudHasan2/b1-amali/actions/workflows/ci.yml)
[![Live demo](https://img.shields.io/badge/demo-GitHub%20Pages-0B6B53)](https://mahmoudhasan2.github.io/b1-amali/)
![PWA](https://img.shields.io/badge/PWA-installable%20%C2%B7%20offline-5A0FC8)
![Vanilla JS](https://img.shields.io/badge/vanilla-JS%20%C2%B7%20no%20framework-F7DF1E?logo=javascript&logoColor=black)

**[▶ Open the app](https://mahmoudhasan2.github.io/b1-amali/)**

</div>

---

## About

B1 عملي ("B1, practical") is a 12-week course for speaking German. Each lesson has 10 example sentences with Levantine Arabic translations. Grammar is highlighted in each sentence, and you practise by hiding one or both languages and recalling them. A spaced-repetition scheduler brings sentences and words back right before you'd forget them.

The interface is in Arabic (RTL), and the German text is laid out left-to-right inside it. It's a static Progressive Web App: no framework, no server-side build, and it works fully offline once loaded.

<p align="center">
  <img src="docs/screenshots/dashboard.png" width="62%" alt="Dashboard">
  &nbsp;
  <img src="docs/screenshots/mobile-lesson.png" width="22%" alt="Lesson on mobile">
</p>

## Features

- **12-week curriculum:** 84 lessons and 840 core sentences, each week built around a topic (housing, work, health, travel, media, …) and a grammar focus.
- **Recall modes:** read & understand, recall the German, recall the Arabic, full recall (both hidden), and vocabulary. You can hide or show each language per sentence or for the whole lesson.
- **Spaced repetition:** after each recall you grade yourself (forgot / hard / good / easy) and the app schedules the next review. Difficult items get their own review queue.
- **Listening & speaking:** German text-to-speech for every sentence, dialogues, transformation exercises, Q&A drills and a speaking/writing task per lesson.
- **Quizzes & exam prep:** a short quiz per lesson, weekly tests, and practice for the Goethe B1 *Sprechen* parts 1–3.
- **Vocabulary:** 474 entries with articles, plurals and forms.
- **Offline & installable:** a service worker caches the app and lessons. You can install it on a phone or desktop.
- **Your data stays yours:** progress is stored in the browser (`localStorage`), and you can export or import it as JSON to back it up or move it to another device.
- **Accessible:** keyboard navigation with visible focus, light/dark theme, and a mobile layout with no horizontal scrolling.

<p align="center">
  <img src="docs/screenshots/lesson-recall.png" width="85%" alt="Full-recall mode: attempt, reveal, grade">
</p>

## Content

| | |
|---|---|
| Weeks / lessons | 12 / 84 (49 original + 35 new) |
| Core sentences | 840 (490 original + 350 new) |
| Vocabulary entries | 474 |
| Dialogues | 84 |
| Transformation exercises | 204 |
| Question / answer items | 252 |
| Speaking tasks | 84 |

All 490 sentences from the original single-file version (`b1-offline.html`) are kept word for word. Full details are in [`docs/CONTENT_REPORT.md`](docs/CONTENT_REPORT.md) and [`docs/PROJECT_AUDIT.md`](docs/PROJECT_AUDIT.md).

## Getting started

### Run locally

A service worker doesn't run from `file://`, so serve the `public/` folder over HTTP:

```bash
npm start                         # = npx serve public
# or
python -m http.server -d public 8080
```

You don't need `npm install`: the project has no dependencies.

### Deploy

**GitHub Pages:** pushing to `main` deploys `public/` automatically through [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

**Any static host (e.g. Hostinger):**
1. Upload the **contents** of `public/` into `public_html/`.
2. Enable HTTPS, because service workers and installation require it.
3. To install it on a phone, open the site and choose *Add to Home screen* from the browser menu. On desktop Chrome/Edge, use the install icon in the address bar.

**Releasing an update:** upload the new files and bump `CACHE` in `public/sw.js`. Learners will see a *new version available* banner, and their progress isn't affected.

## Project structure

```
├── public/                     # the app (deploy this folder)
│   ├── index.html
│   ├── sw.js                   # service worker (offline cache)
│   ├── manifest.webmanifest
│   ├── assets/
│   │   ├── css/app.css
│   │   ├── js/                 # srs, store, speech, lesson/review/exam views, …
│   │   └── icons/
│   └── data/                   # generated JSON: curriculum, vocabulary, exam
├── tools/
│   ├── content/                # lesson sources (.mjs) + extracted original.json
│   ├── build-content.mjs       # validates content → public/data/*.json + report
│   ├── build-icons.mjs
│   └── extract-original.mjs    # pulls the 490 original sentences from b1-offline.html
├── tests/
│   ├── unit/                   # node:test
│   └── e2e/                    # headless Chrome via CDP
├── docs/                       # audit, content report, screenshots
├── b1-offline.html             # the original single-file version (unchanged)
└── backup/                     # byte-identical copy of the original
```

## Content pipeline

```bash
npm run build:content    # node tools/build-content.mjs
```

The lesson sources live in `tools/content/*.mjs`. The build script validates all of them and writes `public/data/*.json` and `docs/CONTENT_REPORT.md`. Every sentence keeps its `origin` (`original` with its old reference, or `new`) and a `status` (`verified-original`, `generated` or `review`).

## Tests

```bash
npm test                 # unit tests: 14/14 pass
npm run test:e2e         # end-to-end tests in headless Chrome: 19/20 pass (see below)
```

The e2e runner can save screenshots: `node tests/e2e/run.mjs shots/`.

## Known limitations

- **Not built yet:** the optional PHP/MySQL backend (accounts, cross-device sync) and the admin content editor. The app detects that there's no server and runs fully in local mode, and the sync screen says sync isn't available.
- **E2E:** the automated quiz check fails (it can't find the answer options). This still needs to be checked by hand.
- **Unreviewed content:** the new content (350 sentences, dialogues and exercises) has `status: "generated"` and hasn't been reviewed by a native speaker. 8 original sentences are flagged for review in [`docs/CONTENT_REPORT.md`](docs/CONTENT_REPORT.md).
- **Pronunciation:** the app uses the browser's speech synthesis, so quality depends on the device, and there are no native recordings. Speech recognition is optional and depends on the browser. There's no automatic pronunciation scoring.
- **Word list:** the vocabulary hasn't been checked against the official Goethe B1 word list.
