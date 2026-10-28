// New lessons — Week 8 (language learning, technology, media).
export default [
{
  key: 'sprachenlernen', title: 'تعلّم اللغات: استراتيجيات', de: 'Sprachen lernen: Strategien',
  goal: 'تحكي عن طريقتك بالتعلم وتعطي نصايح لغيرك.',
  s: [
    ['Ich lerne jeden Tag zehn neue Sätze, *statt* einzelne Wörter *auswendig zu lernen*.', 'كل يوم بتعلم عشر جمل جديدة بدل ما احفظ كلمات لحالها.', 's'],
    ['*Beim* Kochen höre ich deutsche Podcasts, so trainiere ich nebenbei mein *Hörverstehen*.', 'وأنا عم اطبخ بسمع بودكاستات ألمانية، هيك بدرّب السمع عندي بنفس الوقت.', 's'],
    ['Wie lange lernst du *schon* Deutsch? – *Seit* ungefähr zwei Jahren.', 'من قديش عم تتعلم ألماني؟ – من تقريباً سنتين.', 'q'],
    ['Welche Methode hilft dir am meisten? – Mit *Muttersprachlern* sprechen, auch wenn ich Fehler mache.', 'أي طريقة بتفيدك أكتر شي؟ – الحكي مع ناس لغتهم الأم ألماني، حتى لو غلطت.', 'q'],
    ['Ich habe einen Tandempartner: Ich *bringe* ihm Arabisch *bei*, und er hilft mir mit Deutsch.', 'عندي شريك تاندم: بعلمه عربي وهو بيساعدني بالألماني.', 'x', 'jemandem etwas beibringen = يعلّم حدا شي'],
    ['Ich *vergesse* neue Wörter schnell wieder. Was mache ich falsch?', 'بنسى الكلمات الجديدة بسرعة. شو عم اعمل غلط؟', 'p'],
    ['Du solltest sie in Abständen *wiederholen* und in eigenen Sätzen benutzen, dann bleiben sie im Kopf.', 'لازم تراجعها على فترات وتستعملها بجمل من عندك، هيك بتعلق بالراس.', 'a'],
    ['*Ich bin überzeugt, dass* man eine Sprache am schnellsten *lernt*, *wenn* man sie jeden Tag *benutzt*.', 'أنا مقتنع إنو الواحد بيتعلم اللغة أسرع شي لما يستعملها كل يوم.', 'o'],
    ['Deutsche Filme schaue ich zuerst mit *Untertiteln* und dann noch einmal ohne.', 'الأفلام الألمانية بشوفها أول شي مع ترجمة وبعدين مرة تانية بدون.', 's'],
    ['*Je* mehr ich im Alltag *spreche*, *desto* weniger *denke* ich über die Grammatik *nach*, und desto natürlicher klingt mein Deutsch.', 'كل ما حكيت أكتر بالحياة اليومية كل ما فكرت أقل بالقواعد وكل ما صار ألمانيي أطبيعي.', 'l']
  ],
  v: [
    ['auswendig lernen', 'يحفظ غيب', 'x', ''],
    ['das Hörverstehen', 'فهم المسموع', 'n', ''],
    ['der Muttersprachler, -', 'متكلم أصلي', 'n', ''],
    ['beibringen + Dat + Akk', 'يعلّم حدا شي', 'v', 'bringt bei – brachte bei – hat beigebracht'],
    ['wiederholen', 'يراجع / يعيد', 'v', ''],
    ['die Untertitel (Pl.)', 'الترجمة على الشاشة', 'n', 'mit Untertiteln'],
    ['überzeugt sein', 'مقتنع', 'x', 'Ich bin überzeugt, dass …'],
    ['je … desto', 'كل ما … كل ما', 'x', 'Je öfter, desto besser.']
  ],
  tr: [
    ['استعمل je … desto', 'Ich übe viel. Ich spreche flüssig.', 'Je mehr ich übe, desto flüssiger spreche ich.'],
    ['استعمل statt … zu', 'Ich lerne Sätze. Ich lerne keine Wortlisten.', 'Ich lerne Sätze, statt Wortlisten zu lernen.'],
    ['اعطي نصيحة', 'Wiederhole die Wörter!', 'Du solltest die Wörter regelmäßig wiederholen.']
  ],
  qa: [
    ['Warum lernst du Deutsch?', 'Ich lerne Deutsch, weil ich hier arbeiten möchte. Ohne Deutsch findet man nämlich kaum eine gute Stelle.'],
    ['Wie lernst du neue Wörter?', 'Ich lerne sie in Sätzen und wiederhole sie mit einer App.'],
    ['Welche Sprachen sprichst du?', 'Ich spreche Arabisch als Muttersprache, Englisch ziemlich gut und Deutsch auf B1-Niveau.']
  ],
  dlg: { title: 'Tandem-Treffen', lines: [
    ['Felix', 'Wie war deine Woche? Hast du viel Deutsch gesprochen?', 'كيف كان أسبوعك؟ حكيتي ألماني كتير؟'],
    ['Rana', 'Ja, auf der Arbeit fast nur Deutsch. Aber am Telefon verstehe ich noch wenig.', 'إي، بالشغل تقريباً بس ألماني. بس عالتلفون لسا بفهم شوي.'],
    ['Felix', 'Das ist normal, am Telefon sieht man ja keine Gesten. Sollen wir telefonieren üben?', 'هاد طبيعي، عالتلفون ما بتشوفي الإشارات. بدنا نتمرن عالحكي بالتلفون؟'],
    ['Rana', 'Gute Idee! Und dafür erkläre ich dir heute die arabischen Buchstaben.', 'فكرة حلوة! وبالمقابل رح اشرحلك اليوم الحروف العربية.']
  ], q: [
    ['شو الصعب على رنا؟', ['الكتابة', 'الحكي عالتلفون', 'القراءة'], 1],
    ['شو رح تعلّم فيليكس؟', ['الحروف العربية', 'الطبخ', 'القواعد'], 0]
  ] },
  task: { type: '60s', ar: 'احكي 30–60 ثانية عن طريقتك بتعلم الألماني: شو بيساعدك، شو الصعب، وشو نصيحتك لحدا لسا عم يبلش.', hints: ['Ich lerne Deutsch seit …', 'Am meisten hilft mir …', 'Schwierig ist für mich …', 'Mein Tipp: Je …, desto …'] }
},
{
  key: 'rettung', title: 'لما تعلق: جمل الإنقاذ', de: 'Rettungssätze: Wenn ich nicht weiterweiß',
  goal: 'تكمّل الحكي حتى لو ناقصتك كلمة: توصف، تطلب توضيح، وتربح وقت.',
  s: [
    ['*Wie sagt man das auf Deutsch?* Das Ding, mit dem man Dosen öffnet.', 'كيف بيقولوا هاد بالألماني؟ الغرض اللي بيفتحوا فيه العلب.', 'x', 'إذا ما بتعرف الكلمة، اوصفها: Das ist ein Ding, mit dem man …'],
    ['*Moment, ich muss kurz überlegen.*', 'لحظة، لازم فكّر شوي.', 'x'],
    ['*Könnten Sie das bitte wiederholen?* Ich habe den letzten Teil nicht verstanden.', 'ممكن تعيد هالشي لو سمحت؟ ما فهمت آخر جزء.', 'q'],
    ['*Was ich damit sagen möchte, ist,* dass Erfahrung genauso wichtig ist wie ein Zeugnis.', 'اللي بدي قوله هو إنو الخبرة مهمة متل الشهادة.', 'o'],
    ['*Ich bin mir nicht ganz sicher, aber* ich glaube, der Kurs beginnt um neun.', 'مش متأكد تماماً، بس بعتقد إنو الكورس بيبلش الساعة تسعة.', 'a'],
    ['*Können Sie mir ein Beispiel geben?* Dann wird es für mich klarer.', 'ممكن تعطيني مثال؟ هيك بتوضح إلي أكتر.', 'q'],
    ['Mir *fällt* das Wort gerade nicht *ein*. Es ist *so etwas wie* ein kleiner Laden für Zeitungen.', 'الكلمة مش جاية عبالي هلأ. هي شي متل محل صغير للجرايد.', 'p', 'einfallen + Dat = يخطر عالبال'],
    ['*Habe ich Sie richtig verstanden, dass* ich die Unterlagen per Post schicken *soll*?', 'فهمتك صح إنو لازم ابعت الأوراق بالبريد؟', 'q'],
    ['*Mit anderen Worten:* Wir brauchen mehr Zeit.', 'بكلمات تانية: بدنا وقت أكتر.', 'x'],
    ['Entschuldigung, ich habe *den Faden verloren*. *Könnten* Sie die Frage noch einmal anders *formulieren*, *damit* ich sie besser *verstehe*?', 'عفواً، ضاع مني الخيط. ممكن تصيغ السؤال بطريقة تانية لحتى افهمه أحسن؟', 'l']
  ],
  v: [
    ['überlegen', 'يفكّر', 'v', 'Ich muss kurz überlegen.'],
    ['einfallen + Dat', 'يخطر عالبال', 'v', 'fällt ein – fiel ein – ist eingefallen'],
    ['formulieren', 'يصيغ', 'v', 'anders formulieren'],
    ['den Faden verlieren', 'يضيع منه الخيط', 'x', ''],
    ['mit anderen Worten', 'بكلمات تانية', 'x', ''],
    ['das Ding, -e', 'الغرض', 'n', 'so ein Ding, mit dem man …'],
    ['so etwas wie …', 'شي متل …', 'x', '']
  ],
  tr: [
    ['اوصف كلمة ما بتعرفها', '(der Dosenöffner)', 'Das ist ein Ding, mit dem man Dosen öffnet.'],
    ['اطلب توضيح بأدب', 'Was?', 'Entschuldigung, könnten Sie das bitte wiederholen?'],
    ['عبّر عن عدم التأكد', 'Der Zug fährt um acht.', 'Ich bin mir nicht ganz sicher, aber ich glaube, der Zug fährt um acht.']
  ],
  qa: [
    ['Was sagst du, wenn dir ein Wort nicht einfällt?', 'Ich sage: Mir fällt das Wort gerade nicht ein. Dann beschreibe ich es mit anderen Wörtern.'],
    ['Wie reagierst du, wenn jemand zu schnell spricht?', 'Ich frage höflich: Könnten Sie bitte etwas langsamer sprechen?'],
    ['Was machst du, wenn du eine Frage in der Prüfung nicht verstehst?', 'Ich bitte den Prüfer, die Frage zu wiederholen oder anders zu formulieren.']
  ],
  dlg: { title: 'Das Wort fehlt', lines: [
    ['Verkäufer', 'Guten Tag, wie kann ich Ihnen helfen?', 'نهارك سعيد، كيف بقدر ساعدك؟'],
    ['Kundin', 'Ich suche … wie sagt man das … so ein Ding, mit dem man mehrere Geräte an eine Steckdose anschließt.', 'عم دور على… كيف بيقولوا… غرض بتوصل فيه كذا جهاز ببريز واحد.'],
    ['Verkäufer', 'Ah, Sie meinen eine Mehrfachsteckdose!', 'آه، قصدك مشترك كهربا!'],
    ['Kundin', 'Genau! Mir ist das Wort nicht eingefallen.', 'بالزبط! ما خطرت الكلمة عبالي.'],
    ['Verkäufer', 'Kein Problem. Die finden Sie dort hinten im Regal.', 'ولا يهمك. بتلاقيها هناك ورا عالرف.']
  ], q: [
    ['شو كانت عم تدور؟', ['كابل', 'مشترك كهربا', 'لمبة'], 1],
    ['كيف حلّت المشكلة؟', ['وصفت الغرض', 'فرجته صورة', 'تركت المحل'], 0]
  ] },
  task: { type: 'connected', ar: 'اختار 3 أغراض ما بتعرف اسمها بالألماني (أو اعمل حالك ما بتعرف) واوصف كل واحد بجملة: «Das ist ein Ding, mit dem man …» أو «so etwas wie …».', hints: ['Das ist ein Ding, mit dem man …', 'Man braucht es, wenn …', 'Es ist so etwas wie …'] }
},
{
  key: 'smartphone', title: 'الموبايل والإنترنت باليوميات', de: 'Smartphone & Internet im Alltag',
  goal: 'تحكي عن استعمالك للتكنولوجيا وتشرح مشكلة تقنية.',
  s: [
    ['Ohne mein Smartphone könnte ich mir meinen Alltag kaum noch *vorstellen*.', 'بدون موبايلي ما عاد فيني اتخيل حياتي اليومية.', 's'],
    ['Ich *erledige* fast alles online: Bankgeschäfte, Termine und Einkäufe.', 'تقريباً كل شي بخلّصه أونلاين: البنك، المواعيد، والمشتريات.', 's'],
    ['Wie viele Stunden am Tag *verbringst* du ungefähr am Handy?', 'قديش ساعة باليوم تقريباً بتقضي عالموبايل؟', 'q'],
    ['Laut meiner App sind es fast vier Stunden, das ist viel zu viel.', 'حسب التطبيق تقريباً أربع ساعات، وهاد كتير زيادة.', 'a'],
    ['Mein Laptop ist *abgestürzt*, und ich hatte die Datei nicht *gespeichert*.', 'اللابتوب علّق وما كنت حافظ الملف.', 'p'],
    ['Hast du schon *versucht*, ihn neu *zu* starten? Manchmal ist die Datei noch im Ordner „Zuletzt verwendet“.', 'جربت تعمل إعادة تشغيل؟ أحياناً الملف بيكون لسا بمجلد «آخر الملفات المستخدمة».', 'a'],
    ['*Ich finde es problematisch, dass* viele Apps so viele persönliche *Daten* *sammeln*.', 'بلاقي إنو المشكلة إنو كتير تطبيقات بتجمع بيانات شخصية كتير.', 'o'],
    ['Kannst du mir den Link per WhatsApp *schicken*?', 'بتقدر تبعتلي الرابط عالواتساب؟', 'x'],
    ['Ich habe mein Passwort geändert, *nachdem* jemand *versucht hatte*, sich in mein Konto *einzuloggen*.', 'غيّرت كلمة السر بعد ما حدا حاول يدخل على حسابي.', 'c'],
    ['*Obwohl* das Internet vieles einfacher *macht*, sollte man darauf *achten*, *dass* man nicht den ganzen Abend am Bildschirm *verbringt*.', 'رغم إنو الإنترنت بيسهّل كتير أشيا، لازم الواحد ينتبه ما يقضي كل السهرة قدام الشاشة.', 'l']
  ],
  v: [
    ['erledigen', 'يخلّص / ينجز', 'v', 'Bankgeschäfte online erledigen'],
    ['abstürzen', 'يعلّق / يطفي فجأة (جهاز)', 'v', 'ist abgestürzt'],
    ['speichern', 'يحفظ (ملف)', 'v', 'eine Datei speichern'],
    ['sich einloggen / ausloggen', 'يسجّل دخول / خروج', 'v', ''],
    ['die Daten (Pl.)', 'البيانات', 'n', 'persönliche Daten'],
    ['der Bildschirm, -e', 'الشاشة', 'n', 'am Bildschirm'],
    ['achten auf + Akk', 'ينتبه لـ', 'v', 'auf die Zeit achten']
  ],
  tr: [
    ['Plusquamperfekt مع nachdem', 'Jemand hackt mein Konto. Ich ändere das Passwort.', 'Nachdem jemand mein Konto gehackt hatte, habe ich das Passwort geändert.'],
    ['اقترح حل بسؤال', 'Starte den Computer neu.', 'Hast du schon versucht, den Computer neu zu starten?'],
    ['عبّر عن رأي', 'Apps sammeln Daten.', 'Ich finde es problematisch, dass Apps so viele Daten sammeln.']
  ],
  qa: [
    ['Wofür benutzt du dein Handy am meisten?', 'Am meisten benutze ich es für Nachrichten an meine Familie und für die Navigation.'],
    ['Was machst du heute online, was du früher offline gemacht hast?', 'Früher bin ich zur Bank gegangen, heute mache ich alles mit der App.'],
    ['Wie schützt du deine Daten?', 'Ich benutze sichere Passwörter und gebe nicht überall meine Daten ein.']
  ],
  dlg: { title: 'Technikproblem', lines: [
    ['Kollegin', 'Was ist los? Du siehst gestresst aus.', 'شو في؟ باين عليك مضغوط.'],
    ['Adam', 'Mein Laptop ist abgestürzt, und meine Präsentation ist weg!', 'اللابتوب علّق والعرض تبعي راح!'],
    ['Kollegin', 'Hast du sie in der Cloud gespeichert?', 'حافظه بالكلاود؟'],
    ['Adam', 'Ich glaube schon … ja! Da ist eine Version von heute Morgen.', 'بظن إي… إي! في نسخة من الصبح.'],
    ['Kollegin', 'Na also! Dann musst du nur die letzten Folien neu machen.', 'شفت! معناها بس لازم تعيد آخر الشرائح.']
  ], q: [
    ['وين لقى آدم العرض؟', ['بالكلاود', 'بالإيميل', 'عالفلاشة'], 0],
    ['شو لازم يعيد؟', ['العرض كله', 'آخر الشرائح', 'ولا شي'], 1]
  ] },
  task: { type: '60s', ar: 'احكي 30–60 ثانية: كيف بتستعمل الإنترنت والموبايل، شي إيجابي، شي سلبي، وشو بتعمل لتقلل الوقت عالشاشة.', hints: ['Ich benutze mein Handy vor allem für …', 'Positiv finde ich, dass …', 'Negativ ist, dass …', 'Deshalb versuche ich, …'] }
},
{
  key: 'ki', title: 'الذكاء الاصطناعي', de: 'Künstliche Intelligenz',
  goal: 'تناقش فوايد ومخاطر الذكاء الاصطناعي برأي متوازن.',
  s: [
    ['Viele Leute nutzen inzwischen KI, *um* Texte *zu* schreiben oder *zu* übersetzen.', 'كتير ناس صاروا يستعملوا الذكاء الاصطناعي لحتى يكتبوا نصوص أو يترجموا.', 's'],
    ['Ich *lasse* mir von einer App *erklären*, warum ein Satz falsch ist.', 'بخلي تطبيق يشرحلي ليش الجملة غلط.', 's'],
    ['Benutzt du KI für die Arbeit? – Manchmal, für E-Mails, aber ich *prüfe* immer alles.', 'بتستعمل الذكاء الاصطناعي بالشغل؟ – أحياناً للإيميلات، بس دايماً براجع كل شي.', 'q'],
    ['KI macht auch Fehler, *deshalb* sollte man den Antworten nicht blind *vertrauen*.', 'الذكاء الاصطناعي كمان بيغلط، لهيك ما لازم الواحد يثق بالأجوبة بشكل أعمى.', 'o'],
    ['Manche Menschen haben Angst, *dass* sie wegen KI ihren Job *verlieren*.', 'بعض الناس خايفين يخسروا شغلهم بسبب الذكاء الاصطناعي.', 's'],
    ['*Einerseits* spart KI Zeit, *andererseits* verlernt man vielleicht, selbst *nachzudenken*.', 'من جهة الذكاء الاصطناعي بيوفّر وقت، ومن جهة تانية يمكن الواحد ينسى يفكّر بنفسه.', 'c'],
    ['Die Übersetzung war grammatisch richtig, klang *aber* überhaupt nicht natürlich.', 'الترجمة كانت صحيحة قواعدياً بس ما كانت طبيعية أبداً.', 'p'],
    ['*Wäre* es nicht besser, *wenn* Schüler zuerst ohne Hilfe *schreiben würden*?', 'مش أحسن لو الطلاب كتبوا أول شي بدون مساعدة؟', 'q'],
    ['*Das kommt darauf an*, wofür man sie benutzt.', 'بيعتمد على شو عم يستعملها الواحد.', 'x'],
    ['*Ich bin der Meinung, dass* KI ein nützliches *Werkzeug* *ist*, *solange* der Mensch die Kontrolle *behält* und die Ergebnisse kritisch *prüft*.', 'أنا برأيي إنو الذكاء الاصطناعي أداة مفيدة طالما الإنسان محافظ عالسيطرة وبيراجع النتائج بشكل نقدي.', 'l']
  ],
  v: [
    ['die künstliche Intelligenz (KI)', 'الذكاء الاصطناعي', 'n', ''],
    ['nutzen / benutzen', 'يستعمل', 'v', ''],
    ['übersetzen', 'يترجم', 'v', 'die Übersetzung'],
    ['vertrauen + Dat', 'يثق بـ', 'v', 'jemandem vertrauen'],
    ['prüfen', 'يراجع / يفحص', 'v', 'kritisch prüfen'],
    ['das Werkzeug, -e', 'الأداة', 'n', 'ein nützliches Werkzeug'],
    ['Das kommt darauf an.', 'بيعتمد / حسب', 'x', '']
  ],
  tr: [
    ['استعمل lassen', 'Eine App erklärt mir die Grammatik.', 'Ich lasse mir die Grammatik von einer App erklären.'],
    ['اعمل سؤال بـ Wäre es nicht besser, wenn', 'Man lernt zuerst ohne KI.', 'Wäre es nicht besser, wenn man zuerst ohne KI lernen würde?'],
    ['اربط بـ solange', 'Man prüft die Ergebnisse. KI ist nützlich.', 'Solange man die Ergebnisse prüft, ist KI nützlich.']
  ],
  qa: [
    ['Hast du schon einmal KI benutzt? Wofür?', 'Ja, ich habe sie benutzt, um einen Brief an das Jobcenter zu verbessern.'],
    ['Siehst du KI eher positiv oder negativ?', 'Eher positiv, aber ich finde, man muss vorsichtig sein.'],
    ['Sollten Schüler KI für Hausaufgaben benutzen dürfen?', 'Ich finde, nur wenn sie ehrlich sagen, wofür sie sie benutzt haben.']
  ],
  dlg: { title: 'Diskussion in der Pause', lines: [
    ['Kevin', 'Ich schreibe meine Berichte nur noch mit KI. Das geht viel schneller.', 'صرت اكتب تقاريري بس بالذكاء الاصطناعي. أسرع بكتير.'],
    ['Amira', 'Und wenn die KI etwas Falsches schreibt?', 'وإذا كتب شي غلط؟'],
    ['Kevin', 'Na ja, ich lese natürlich alles noch einmal durch.', 'يعني، طبعاً بقرا كل شي مرة تانية.'],
    ['Amira', 'Das ist gut. Ich benutze sie eher, um Wörter zu erklären. Texte schreibe ich lieber selbst.', 'هاد منيح. أنا بستعمله غالباً لشرح الكلمات. النصوص بفضّل اكتبها بنفسي.'],
    ['Kevin', 'Es kommt eben darauf an, wofür man sie braucht.', 'يعني بيعتمد على شو بتحتاجه.']
  ], q: [
    ['شو بيعمل كيفن بالذكاء الاصطناعي؟', ['بيترجم', 'بيكتب تقارير', 'بيرسم'], 1],
    ['كيف بتستعمله أميرة؟', ['لشرح الكلمات', 'لكتابة النصوص', 'ما بتستعمله'], 0]
  ] },
  task: { type: '60s', ar: 'رأيك بالذكاء الاصطناعي (30–60 ثانية): ميزة، خطر، كيف بتستعمله إنت، وخلاصة.', hints: ['Ich benutze KI für …', 'Ein großer Vorteil ist …', 'Gefährlich finde ich, dass …', 'Zusammenfassend …'] }
},
{
  key: 'medien', title: 'الأخبار والسوشال ميديا', de: 'Nachrichten & soziale Medien',
  goal: 'تحكي كيف بتتابع الأخبار، تميّز الأخبار الكاذبة، وتناقش ميزات وعيوب السوشال ميديا.',
  s: [
    ['Ich *informiere mich* meistens über Nachrichten-Apps, Zeitung lese ich kaum noch.', 'غالباً بعرف الأخبار من تطبيقات الأخبار، والجريدة بالكاد عاد اقراها.', 's'],
    ['Auf Instagram *folge* ich vor allem Seiten über Kochen und Reisen.', 'على إنستغرام بتابع خصوصاً صفحات عن الطبخ والسفر.', 's'],
    ['Glaubst du alles, was in den sozialen Medien *steht*? – Nein, ich prüfe die *Quelle*.', 'بتصدّق كل شي بينكتب بالسوشال ميديا؟ – لا، بتأكد من المصدر.', 'q'],
    ['Falsche Nachrichten *verbreiten sich* im Internet sehr schnell.', 'الأخبار الكاذبة بتنتشر عالإنترنت بسرعة كتير.', 's'],
    ['Mein Sohn will ständig Videos schauen, und wir *streiten uns* oft darüber.', 'ابني بدو يشوف فيديوهات طول الوقت ومنتخانق كتير عهالموضوع.', 'p'],
    ['*Wie wäre es mit* einer festen Bildschirmzeit, zum Beispiel einer Stunde am Tag?', 'شو رأيك بوقت شاشة محدد، مثلاً ساعة باليوم؟', 'a'],
    ['*Ein Vorteil* der sozialen Medien *ist, dass* man leicht mit Familie und Freunden im Ausland in Kontakt *bleibt*.', 'من ميزات السوشال ميديا إنو الواحد بسهولة بيضل عتواصل مع العيلة والأصحاب برا البلد.', 'o'],
    ['*Ein Nachteil ist, dass* viele Menschen sich ständig mit anderen *vergleichen*.', 'من العيوب إنو كتير ناس دايماً بيقارنوا حالهم بغيرهم.', 'o'],
    ['Hast du *mitbekommen*, was gestern in den Nachrichten *kam*?', 'دريت شو طلع بالأخبار مبارح؟', 'x', 'mitbekommen = يدري / ينتبه لشي'],
    ['*Nachdem* ich *gemerkt hatte*, wie viel Zeit ich auf TikTok *verliere*, habe ich die App *gelöscht*, und seitdem lese ich wieder mehr Bücher.', 'بعد ما انتبهت قديش عم ضيّع وقت على تيك توك حذفت التطبيق، ومن وقتها رجعت اقرا كتب أكتر.', 'l']
  ],
  v: [
    ['sich informieren über + Akk', 'يستعلم / يتابع عن', 'v', ''],
    ['folgen + Dat', 'يتابع (حساب)', 'v', 'einer Seite folgen'],
    ['die Quelle, -n', 'المصدر', 'n', 'die Quelle prüfen'],
    ['sich verbreiten', 'ينتشر', 'v', ''],
    ['die sozialen Medien (Pl.)', 'السوشال ميديا', 'n', ''],
    ['sich vergleichen mit + Dat', 'يقارن حاله بـ', 'v', ''],
    ['mitbekommen', 'يدري / يلاحظ', 'v', 'bekommt mit – bekam mit – hat mitbekommen'],
    ['löschen', 'يحذف', 'v', 'eine App löschen']
  ],
  tr: [
    ['اقترح بـ Wie wäre es mit', 'Wir machen eine Handypause.', 'Wie wäre es mit einer Handypause?'],
    ['حوّل لسؤال غير مباشر', 'Woher kommt die Nachricht?', 'Ich frage mich, woher die Nachricht kommt.'],
    ['اربط بـ nachdem', 'Ich merke das Problem. Ich lösche die App.', 'Nachdem ich das Problem gemerkt hatte, habe ich die App gelöscht.']
  ],
  qa: [
    ['Wie informierst du dich über aktuelle Nachrichten?', 'Ich höre morgens Radio und lese tagsüber Nachrichten im Internet.'],
    ['Welche sozialen Medien benutzt du?', 'Ich benutze vor allem WhatsApp und Instagram.'],
    ['Sollten Kinder ein eigenes Smartphone haben?', 'Ich finde, erst ab zwölf, und nur mit klaren Regeln.']
  ],
  dlg: { title: 'Fake News?', lines: [
    ['Opa Hans', 'Hast du gelesen? Im Internet steht, dass man ab nächstem Jahr kein Bargeld mehr benutzen darf!', 'قريتي؟ عالإنترنت مكتوب إنو من السنة الجاية ممنوع نستعمل كاش!'],
    ['Selin', 'Wirklich? Von wem kommt das?', 'عن جد؟ مين قال هالحكي؟'],
    ['Opa Hans', 'Von irgendeiner Seite auf Facebook.', 'من صفحة ما عالفيسبوك.'],
    ['Selin', 'Hm, das klingt nach Fake News. Ich habe auf einer seriösen Nachrichtenseite nachgesehen – da steht nichts davon.', 'همم، هاد شكله خبر كاذب. شفت بموقع أخبار موثوق، وما في شي هيك.'],
    ['Opa Hans', 'Gut, dass du nachgesehen hast!', 'منيح إنك تأكدتي!']
  ], q: [
    ['من وين إجا الخبر؟', ['من التلفزيون', 'من صفحة عالفيسبوك', 'من الجريدة'], 1],
    ['شو عملت سيلين؟', ['صدّقت الخبر', 'تأكدت بموقع موثوق', 'حذفت فيسبوك'], 1]
  ] },
  task: { type: 'presentation', ar: 'عرض قصير (1–2 دقيقة): «السوشال ميديا: نعمة ولا نقمة؟» — مقدمة، تجربتك، الوضع ببلدك، ميزة وعيب، رأيك، وخاتمة.', hints: ['Ich möchte über … sprechen.', 'Ich persönlich …', 'In meinem Heimatland …', 'Ein Vorteil … / Ein Nachteil …', 'Zum Schluss …'] }
}
];
