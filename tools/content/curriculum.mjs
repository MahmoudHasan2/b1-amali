// 12-week curriculum map. "O<w>.<d>" = original lesson (week.day in b1-offline.html), "N:<key>" = new lesson.
export const weeks = [
  { n: 1, title: 'الحياة الشخصية والتواصل اليومي', de: 'Persönliches Leben & Alltag',
    lessons: ['O1.1', 'O1.5', 'O5.6', 'O1.2', 'O7.4', 'O7.5', 'O7.3'] },
  { n: 2, title: 'السكن والحياة بألمانيا', de: 'Wohnen in Deutschland',
    lessons: ['N:wg', 'N:besichtigung', 'O1.7', 'O5.3', 'N:hausordnung', 'N:reparatur', 'N:umzug'] },
  { n: 3, title: 'الأكل والتسوق والخدمات', de: 'Essen, Einkaufen & Dienstleistungen',
    lessons: ['N:supermarkt', 'O3.5', 'O3.4', 'O3.6', 'N:kochen', 'N:restaurant', 'O5.7'] },
  { n: 4, title: 'التدريب المهني والتعليم', de: 'Ausbildung & Schule',
    lessons: ['N:ausbildung', 'O1.6', 'N:berufsschule', 'O1.4', 'O5.1', 'N:pruefung', 'N:nachfragen'] },
  { n: 5, title: 'الشغل وحل المشاكل', de: 'Arbeit & Problemlösung',
    lessons: ['O2.1', 'O2.2', 'O2.4', 'O2.6', 'N:jobprobleme', 'O7.2', 'O2.7'] },
  { n: 6, title: 'الصحة والرياضة ونمط الحياة', de: 'Gesundheit, Sport & Lebensstil',
    lessons: ['O3.7', 'O3.1', 'O3.2', 'O3.3', 'N:sport', 'N:lebensstil', 'O4.2'] },
  { n: 7, title: 'المدينة والريف والطقس والسفر', de: 'Stadt, Land, Wetter & Reisen',
    lessons: ['N:stadt', 'O4.4', 'O4.5', 'O4.6', 'O5.2', 'N:wetter', 'O4.7'] },
  { n: 8, title: 'تعلم اللغة والتكنولوجيا والإعلام', de: 'Sprachenlernen, Technik & Medien',
    lessons: ['N:sprachenlernen', 'N:rettung', 'N:smartphone', 'O6.5', 'N:ki', 'N:medien', 'O7.1'] },
  { n: 9, title: 'العيلة والمجتمع والبيئة', de: 'Familie, Gesellschaft & Umwelt',
    lessons: ['N:familie', 'N:erziehung', 'O5.4', 'N:haustiere', 'N:nachbarschaft', 'O6.6', 'N:gesellschaft'] },
  { n: 10, title: 'الآراء والنقاش واتخاذ القرار', de: 'Meinungen, Diskussion & Entscheidungen',
    lessons: ['O6.4', 'O6.1', 'O6.2', 'O6.3', 'O5.5', 'O4.3', 'N:kompromiss'] },
  { n: 11, title: 'التحضير لامتحان المحادثة B1', de: 'Vorbereitung: Mündliche Prüfung B1',
    lessons: ['O6.7', 'N:teil1a', 'N:teil1b', 'N:teil2a', 'N:teil2b', 'N:teil2c', 'N:teil3'] },
  { n: 12, title: 'التثبيت ومحاكاة الحياة الحقيقية', de: 'Festigung & Simulation',
    lessons: ['O1.3', 'O2.3', 'O2.5', 'O4.1', 'O7.6', 'N:spontan', 'O7.7'] }
];

// Original sentences flagged for human review (ref = original week.day.sentence). Not modified, only annotated.
export const reviewFlags = {
  '1.2.9': 'Arabic typo: "لازم ضحك" → "لازم اضحك".',
  '2.7.5': 'The concessive "obwohl" is logically weak here (a probation period does not contradict a two-year contract).',
  '3.2.3': '"…war leider schon weg" is colloquial; acceptable in speech.',
  '4.4.8': 'Highlight covers only "wird", not the participle (inconsistent with the rest of the lesson).',
  '5.1.1': 'Arabic agreement: "هاد سيارة أخي" → "هاي سيارة أخي".',
  '5.4.10': '"von dem Wetter" — the contraction "vom Wetter" is more natural.',
  '6.5.9': '"nicht mehr wegzudenken" is closer to B2 than B1.',
  '7.5.9': '"Beim Oktoberfest" — "Auf dem Oktoberfest" is the usual phrasing.'
};
