# Project Audit — original state (2026-10-25)

## 1. What existed

The project directory contained exactly one file:

| File | Size | Notes |
|---|---|---|
| `b1-offline.html` | 75 KB | Single self-contained page, Arabic RTL UI, no build step, no dependencies except Google Fonts |

A byte-identical backup is stored at `backup/b1-offline.original.html`. The original file has **not** been modified and still works on its own.

### Content

- Data lives in one inline JS array `DATA` (7 weeks × 7 days × 10 sentences = **490 sentences**).
- Each sentence is a pair `[german, arabic]`. Grammar focus words in the German text are wrapped in `*…*` and rendered as highlights.
- Each day has a title `t` (grammar point) and a short Arabic note `note`. Each week has a `title` and a `topic`.
- Arabic translations are written in colloquial Levantine Arabic (e.g. "بضل اليوم بالبيت").
- Extraction: `tools/extract-original.mjs` reads the array verbatim into `tools/content/original.json` (with the SHA-256 of the source file). All 490 sentences extracted; no exact duplicates; all highlight markers balanced.

### Organisation (grammar-driven)

| Week | Grammar title | Topic |
|---|---|---|
| 1 | Subordinate clauses (weil, dass, wenn/als, obwohl/damit, ob, temporal, zu-infinitive) | family, friends, housing |
| 2 | Perfekt, Präteritum, Plusquamperfekt, Futur I | work |
| 3 | Relative clauses, adjective endings, comparison | health, shopping |
| 4 | Konjunktiv II, Passive | travel |
| 5 | Genitive, n-declension, two-way prepositions, verb+preposition, wo(r)-/da(r)-, reflexive verbs | offices, (study) |
| 6 | Connectors, opinions | media, technology, environment |
| 7 | E-mail/phone templates, feelings, hobbies, participles/lassen, mixed review | emails, phone, feelings, hobbies |

### Features

- Week and day selection, three study modes (both / hide Arabic / hide German) with click-to-reveal blur.
- Browser speech synthesis (`de-DE`, rate 0.85) per sentence.
- "Memorised" checkbox per sentence, progress bars, stored in `localStorage` key `b1sent:v1` (`done` map keyed `week.day.index`).
- Light/dark theme tokens, keyboard-accessible controls.

## 2. Assessment

### Keep

- All 490 sentences and translations (good quality, natural German, consistent highlighting).
- The study method: read → hide one language → recall → reveal.
- Visual language: calm green palette, serif German / Arabic sans, RTL layout with isolated LTR German.

### Problems found in the original

| Area | Issue |
|---|---|
| Method | "Memorised" is a self-declared checkbox; no review schedule; nothing comes back for review. |
| Visibility | Modes are coupled (only one language can be hidden at a time; no "hide both"). |
| Listening | Audio only as an add-on; no listening-without-text, no dialogues, no comprehension checks. |
| Speaking | No production tasks, no question bank, no connected-speech practice, no exam formats (Goethe Sprechen Teil 1/2/3). |
| Vocabulary | ~1,040 distinct word forms, an estimated 600–700 lemmas; no vocabulary list, no forms/articles/plurals. |
| Topics | Missing or thin: food/cooking/restaurant, school/Ausbildung, weather, city vs countryside, WG, children/pets, sport/lifestyle, AI. |
| Structures | Missing or thin: falls, sobald, solange, nämlich, nicht … sondern, brauchen … zu, Konjunktiv II past. |
| Platform | Single file, not installable, no backup/export, no cross-device sync, no content management. |

### Content issues flagged (not deleted, marked `review` in the data)

| Ref (W.D.N) | Issue |
|---|---|
| 1.2.9 | Arabic typo: "لازم ضحك" should be "لازم اضحك". |
| 2.7.5 | "Der Vertrag gilt für zwei Jahre, obwohl er mit einer Probezeit beginnt" — the concessive link is logically weak. |
| 3.2.3 | "…war leider schon weg" is colloquial; acceptable in speech. |
| 4.4.8 | Highlight marks only `wird`, not the participle (inconsistent with the rest of the day). |
| 5.1.1 | Arabic agreement: "هاد سيارة أخي" should be "هاي سيارة أخي". |
| 5.4.10 | "von dem Wetter" — the contracted "vom Wetter" is more natural. |
| 6.5.9 | "nicht mehr wegzudenken" is closer to B2 than B1. |
| 7.5.9 | "Beim Oktoberfest" — "Auf dem Oktoberfest" is the usual phrasing. |

These are reported in `docs/CONTENT_REPORT.md` and shown as "needs review" in the admin interface. Corrections are proposed, not applied silently.

## 3. Plan (implemented)

1. **Data model.** The source content lives in `tools/content/` (original extraction, a curriculum map, newly written lessons, and exercises for the original lessons). `tools/build-content.mjs` validates everything and generates `public/data/*.json`. Each sentence keeps an `origin` (`original` with its old W.D.N reference, or `new`) and a `status` (`verified-original`, `generated`, `review`).
2. **12-week curriculum.** The 49 original lessons are re-ordered into the 12 thematic weeks and 35 new lessons fill the gaps, for 84 lessons and 840 core sentences. No original sentence is dropped.
3. **PWA.** Static HTML/CSS/vanilla JS (no framework, no build needed on the server), with a service worker and manifest. Progress is stored locally with a real spaced-repetition scheduler.
4. **Optional PHP 8 + MySQL backend.** Accounts, session auth, CSRF protection, progress sync, and an admin content editor that writes lesson JSON with backups.
5. **Tests.** Node unit tests (scheduler, merging, validation, data integrity) and a headless-Chrome end-to-end run.
