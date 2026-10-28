// New lessons — Week 10 (negotiation) and Week 11 part 1 (exam Teil 1).
export default [
{
  key: 'kompromiss', title: 'التفاوض والحلول الوسط', de: 'Verhandeln & Kompromisse',
  goal: 'تعترض بلطف، تحط شروط، وتوصل لحل وسط.',
  s: [
    ['*Ich verstehe deinen Standpunkt*, aber ich sehe das ein bisschen anders.', 'بفهم وجهة نظرك، بس أنا بشوفها شوي غير.', 'x'],
    ['*Was hältst du davon*, *wenn* wir uns in der Mitte *treffen*?', 'شو رأيك لو تلاقينا بالنص؟', 'q'],
    ['*Das ist ein guter Kompromiss*, damit kann ich leben.', 'هاد حل وسط منيح، بقدر اتقبله.', 'a'],
    ['Du möchtest ans Meer, ich lieber in die Berge. *Wie wäre es, wenn* wir dieses Jahr ans Meer und nächstes Jahr in die Berge *fahren*?', 'إنت بدك عالبحر وأنا بفضل الجبال. شو رأيك لو هالسنة رحنا عالبحر والسنة الجاية عالجبال؟', 'p'],
    ['*Da muss ich dir leider widersprechen*: Das Angebot ist *nicht* günstiger, *sondern* nur anders verpackt.', 'هون لازم خالفك للأسف: العرض مش أرخص، بس مغلّف بطريقة تانية.', 'o'],
    ['*Unter einer Bedingung*: Du kümmerst dich um die Tickets.', 'بشرط واحد: إنت بتهتم بالتذاكر.', 'x'],
    ['*Ich wäre bereit*, mehr *zu* bezahlen, *falls* die Lieferung schneller *kommt*.', 'بكون مستعد ادفع أكتر إذا التوصيل إجا أسرع.', 'c'],
    ['Können wir *uns auf* Donnerstag *einigen*? Das passt allen am besten.', 'منقدر نتفق عالخميس؟ هاد بيناسب الكل أكتر شي.', 'q'],
    ['*Bei aller Liebe*, aber jeden Tag Pizza ist keine Lösung.', 'مع كل المحبة، بس بيتزا كل يوم مش حل.', 'o', 'Bei aller Liebe = اعتراض لطيف (مع كل المحبة)'],
    ['*Bevor* wir eine *Entscheidung treffen*, sollten wir alle Vor- und Nachteile noch einmal vergleichen, *damit* hinterher niemand enttäuscht *ist*.', 'قبل ما ناخد قرار لازم نقارن كل الميزات والعيوب مرة تانية لحتى ما حدا يزعل بعدين.', 'l']
  ],
  v: [
    ['der Standpunkt, -e', 'وجهة النظر', 'n', ''],
    ['der Kompromiss, -e', 'حل وسط', 'n', 'einen Kompromiss finden'],
    ['widersprechen + Dat', 'يخالف / يعارض', 'v', 'widerspricht – widersprach – hat widersprochen'],
    ['sich einigen auf + Akk', 'يتفق على', 'v', ''],
    ['die Bedingung, -en', 'الشرط', 'n', 'unter einer Bedingung'],
    ['eine Entscheidung treffen', 'ياخد قرار', 'x', ''],
    ['bereit sein', 'مستعد', 'x', '']
  ],
  tr: [
    ['اعترض بأدب', 'Das ist falsch.', 'Da muss ich dir leider widersprechen.'],
    ['اقترح حل وسط', 'Wir treffen uns in der Mitte.', 'Was hältst du davon, wenn wir uns in der Mitte treffen?'],
    ['اربط بـ falls', 'Ich zahle mehr. Die Lieferung ist schneller.', 'Ich zahle mehr, falls die Lieferung schneller ist.'],
    ['استعمل nämlich بدل weil (nämlich بعد الفعل)', 'Ich komme nicht mit, weil ich krank bin.', 'Ich komme nicht mit. Ich bin nämlich krank.']
  ],
  qa: [
    ['Wie reagierst du, wenn jemand eine andere Meinung hat?', 'Ich höre zuerst zu und versuche zu verstehen, warum er das denkt.'],
    ['Fällt es dir leicht, Kompromisse zu machen?', 'Meistens ja, aber bei wichtigen Dingen bleibe ich bei meiner Meinung.'],
    ['Wie trefft ihr in der Familie Entscheidungen?', 'Wir sprechen zusammen darüber, und am Ende entscheiden meistens meine Eltern.']
  ],
  dlg: { title: 'Wohin im Urlaub?', lines: [
    ['Julia', 'Ich möchte unbedingt nach Spanien. Strand, Sonne, Meer!', 'بدي روح عإسبانيا بأي شكل. شط، شمس، بحر!'],
    ['Nabil', 'Hm, ich finde Strandurlaub ehrlich gesagt langweilig. Ich würde lieber wandern.', 'همم، بصراحة إجازة الشط بلاقيها مملة. بفضّل امشي بالجبال.'],
    ['Julia', 'Und wenn wir nach Madeira fahren? Da gibt es beides.', 'وإذا رحنا على ماديرا؟ هناك في الشغلتين.'],
    ['Nabil', 'Gute Idee! Dann wandern wir vormittags, und nachmittags gehen wir an den Strand.', 'فكرة حلوة! منمشي الصبح وبعد الضهر منروح عالشط.'],
    ['Julia', 'Abgemacht!', 'اتفقنا!']
  ], q: [
    ['شو بيفضّل نبيل؟', ['الشط', 'المشي بالجبال', 'المدينة'], 1],
    ['شو الحل الوسط؟', ['إسبانيا', 'ماديرا', 'البيت'], 1]
  ] },
  task: { type: 'connected', ar: 'إنت وصاحبك بدكن تشتروا هدية لصاحب تالت، وعندكن أفكار مختلفة. اقترح، اعترض بلطف، وتوصلوا لحل وسط (6 جمل تقريباً).', hints: ['Ich würde gern … schenken, weil …', 'Ich verstehe dich, aber …', 'Was hältst du davon, wenn …?', 'Abgemacht! Dann …'] }
},
{
  key: 'teil1a', title: 'امتحان – الجزء 1: التخطيط سوا (اقتراحات)', de: 'Prüfung Teil 1: Gemeinsam planen',
  goal: 'تفتتح مهمة التخطيط، تقترح، تسأل عن رأي شريكك، وتقبل أو ترفض بلطف.',
  s: [
    ['Wir sollen zusammen eine Abschiedsparty für unsere Kollegin *planen*. Hast du eine Idee?', 'المطلوب نخطط سوا حفلة وداع لزميلتنا. عندك فكرة؟', 'x'],
    ['Zuerst sollten wir *klären*, wann und wo die Party *stattfindet*.', 'أول شي لازم نوضّح إمتى ووين رح تكون الحفلة.', 's'],
    ['*Was meinst du*: Sollen wir im Büro feiern oder lieber in einem Restaurant?', 'شو رأيك: منحتفل بالمكتب ولا أحسن بمطعم؟', 'q'],
    ['*Ich würde vorschlagen, dass* wir im Büro *feiern*, das ist günstiger und für alle einfacher.', 'بقترح نحتفل بالمكتب، أرخص وأسهل للكل.', 'a'],
    ['*Das ist eine gute Idee, aber* im Büro ist es vielleicht zu eng für dreißig Leute.', 'فكرة منيحة، بس يمكن المكتب ضيق على تلاتين شخص.', 'o'],
    ['*Da hast du recht.* *Wie wäre es dann mit* dem Gemeinschaftsraum im Erdgeschoss?', 'معك حق. طيب شو رأيك بالقاعة المشتركة بالطابق الأرضي؟', 'a'],
    ['Freitag *passt mir* leider *nicht*, weil ich da einen Arzttermin habe. Geht auch Donnerstag?', 'للأسف الجمعة ما بتناسبني لأنو عندي موعد دكتور. بيمشي الخميس كمان؟', 'p'],
    ['*Lass uns* noch über das Geschenk sprechen. Was könnte ihr gefallen?', 'خلينا نحكي كمان عن الهدية. شو ممكن يعجبها؟', 'q'],
    ['Okay, *dann sind wir uns einig*: Donnerstag um 16 Uhr im Gemeinschaftsraum.', 'تمام، معناها اتفقنا: الخميس الساعة 4 بالقاعة المشتركة.', 'x'],
    ['*Ich finde deinen Vorschlag gut, aber ich hätte noch eine andere Idee*: Wir *könnten* ein Fotoalbum *machen*, in das jeder Kollege ein paar persönliche Worte *schreibt*.', 'عجبني اقتراحك، بس عندي فكرة تانية: ممكن نعمل ألبوم صور كل زميل بيكتب فيه كم كلمة شخصية.', 'l']
  ],
  v: [
    ['klären', 'يوضّح / يحسم', 'v', 'eine Frage klären'],
    ['vorschlagen', 'يقترح', 'v', 'schlägt vor – schlug vor – hat vorgeschlagen; der Vorschlag'],
    ['stattfinden', 'يصير / ينعقد', 'v', 'findet statt – fand statt – hat stattgefunden'],
    ['sich einig sein', 'متفقين', 'x', 'Wir sind uns einig.'],
    ['Das passt mir (nicht).', 'بيناسبني (ما بيناسبني)', 'x', ''],
    ['Lass uns …', 'خلينا …', 'x', 'Lass uns anfangen!'],
    ['der Gemeinschaftsraum, -räume', 'قاعة مشتركة', 'n', '']
  ],
  tr: [
    ['اقترح بطريقة تانية', 'Wir feiern im Büro.', 'Ich würde vorschlagen, dass wir im Büro feiern.'],
    ['ارفض بلطف واقترح بديل', 'Freitag nicht!', 'Freitag passt mir leider nicht. Wie wäre es mit Donnerstag?'],
    ['اسأل عن رأي الشريك', 'Restaurant?', 'Was meinst du: Sollen wir lieber in ein Restaurant gehen?']
  ],
  qa: [
    ['Wir planen einen Ausflug für den Deutschkurs. Wohin sollen wir fahren?', 'Ich würde vorschlagen, dass wir an einen See fahren. Da kann man grillen und schwimmen.'],
    ['Wann wäre ein guter Termin?', 'Am besten an einem Samstag, weil dann alle frei haben.'],
    ['Was müssen wir noch organisieren?', 'Wir müssen noch klären, wer das Essen mitbringt und wie wir dorthin kommen.']
  ],
  dlg: { title: 'Prüfungssimulation Teil 1 (Ausschnitt)', lines: [
    ['Partner A', 'Also, wir sollen eine Feier für unseren Kursleiter planen. Wann wollen wir feiern?', 'يعني، المطلوب نخطط حفلة لأستاذ الكورس. إمتى بدنا نحتفل؟'],
    ['Partner B', 'Ich würde vorschlagen, am letzten Kurstag. Was meinst du?', 'بقترح بآخر يوم بالكورس. شو رأيك؟'],
    ['Partner A', 'Gute Idee. Und wo? Im Kursraum?', 'فكرة منيحة. ووين؟ بغرفة الكورس؟'],
    ['Partner B', 'Hm, der Raum ist ziemlich klein. Wie wäre es mit dem Café nebenan?', 'همم، الغرفة صغيرة شوي. شو رأيك بالكافيه اللي جنبنا؟'],
    ['Partner A', 'Einverstanden. Dann frage ich im Café nach, und du sammelst Geld für ein Geschenk, okay?', 'موافق. معناها أنا بسأل بالكافيه وإنت بتجمع مصاري للهدية، اتفقنا؟'],
    ['Partner B', 'Okay, das machen wir so.', 'تمام، منعملها هيك.']
  ], q: [
    ['وين اتفقوا يحتفلوا؟', ['بغرفة الكورس', 'بالكافيه جنبهم', 'بالحديقة'], 1],
    ['شو رح يعمل Partner B؟', ['يسأل بالكافيه', 'يجمع مصاري للهدية', 'يشتري كيك'], 1]
  ] },
  task: { type: 'connected', ar: 'تدريب الجزء 1: خطط مع شريك (أو لحالك بالدورين) «رحلة لصف الألماني». غطّي: إمتى، وين، المواصلات، الأكل، ومين بيعمل شو. 2–3 دقايق.', hints: ['Wann wollen wir …?', 'Ich würde vorschlagen, …', 'Das ist eine gute Idee, aber …', 'Wer kümmert sich um …?', 'Dann sind wir uns einig: …'] }
},
{
  key: 'teil1b', title: 'امتحان – الجزء 1: توزيع المهام وحل المشاكل', de: 'Prüfung Teil 1: Aufgaben verteilen',
  goal: 'توزّع المهام، تعرض بدائل لما في مشكلة، وتلخّص الاتفاق.',
  s: [
    ['Wer *kümmert sich um* die Getränke, und wer bringt das Essen mit?', 'مين بيهتم بالمشروبات، ومين بيجيب الأكل؟', 'q'],
    ['*Ich übernehme* die Getränke, und du *könntest* einen Kuchen *backen*.', 'أنا باخد المشروبات، وإنت ممكن تخبز كيك.', 'a'],
    ['Hast du vielleicht ein Auto? Dann könntest du die Sachen transportieren.', 'عندك يمكن سيارة؟ هيك بتقدر تنقل الأغراض.', 'q'],
    ['Ich kann leider nicht so gut backen, *aber* ich kann Salate machen.', 'للأسف ما بعرف اخبز منيح، بس بقدر اعمل سلطات.', 'p'],
    ['*Kein Problem, dann* kaufen wir den Kuchen einfach beim Bäcker.', 'مش مشكلة، معناها منشتري الكيك من الفرن وخلصنا.', 'a'],
    ['*Was machen wir, falls* es *regnet*? Wir brauchen einen Plan B.', 'شو منعمل إذا شتّت؟ بدنا خطة بديلة.', 'p'],
    ['*Dann könnten wir* in den Gemeinschaftsraum *ausweichen*.', 'وقتها منقدر ننتقل للقاعة المشتركة كبديل.', 'a', 'ausweichen auf/in + Akk = يلجأ لبديل'],
    ['Ich schreibe allen eine Einladung, *sobald* wir den Termin *festgelegt haben*.', 'بكتب للكل دعوة أول ما نحدد الموعد.', 'c'],
    ['*Moment, das habe ich nicht ganz verstanden*: Sollen wir das Geschenk zusammen kaufen?', 'لحظة، ما فهمت تماماً: لازم نشتري الهدية سوا؟', 'x'],
    ['*Also, fassen wir zusammen*: Du kaufst die Getränke, ich mache die Salate, und *falls* es *regnet*, feiern wir drinnen.', 'طيب، منلخّص: إنت بتشتري المشروبات، أنا بعمل السلطات، وإذا شتّت منحتفل جوا.', 'l']
  ],
  v: [
    ['übernehmen', 'يستلم / ياخد على عاتقه', 'v', 'Ich übernehme das.'],
    ['sich kümmern um + Akk', 'يهتم بـ', 'v', ''],
    ['festlegen', 'يحدّد', 'v', 'einen Termin festlegen'],
    ['ausweichen auf/in + Akk', 'يلجأ لبديل', 'v', 'weicht aus – wich aus – ist ausgewichen'],
    ['der Plan B', 'خطة بديلة', 'n', ''],
    ['zusammenfassen', 'يلخّص', 'v', ''],
    ['die Einladung, -en', 'الدعوة', 'n', '']
  ],
  tr: [
    ['وزّع مهمة', 'Du backst einen Kuchen.', 'Du könntest einen Kuchen backen, oder?'],
    ['اعرض حل لمشكلة', 'Es regnet vielleicht.', 'Falls es regnet, könnten wir drinnen feiern.'],
    ['لخّص الاتفاق', 'A: Getränke, B: Salate', 'Also, fassen wir zusammen: Du kümmerst dich um die Getränke, und ich mache die Salate.']
  ],
  qa: [
    ['Was übernimmst du bei der Party?', 'Ich übernehme die Musik und die Dekoration.'],
    ['Was machen wir, wenn nicht alle kommen können?', 'Dann suchen wir einen anderen Termin oder machen eine Umfrage.'],
    ['Wie laden wir die Gäste ein?', 'Am einfachsten über eine WhatsApp-Gruppe.']
  ],
  dlg: { title: 'Plan B', lines: [
    ['Mona', 'Und wenn am Samstag doch nur zehn Leute kommen?', 'وإذا السبت إجوا بس عشر أشخاص؟'],
    ['Lukas', 'Dann ist das auch nicht schlimm, dann wird es eben gemütlicher.', 'ولا يهمك، هيك بتصير أدفى.'],
    ['Mona', 'Stimmt. Aber wir sollten trotzdem fragen, wer sicher kommt. Ich schicke eine Umfrage.', 'صح. بس لازم نسأل مع هيك مين أكيد جاي. رح ابعت استطلاع.'],
    ['Lukas', 'Gut. Sobald wir die Zahl wissen, bestelle ich das Essen.', 'تمام. أول ما نعرف العدد بطلب الأكل.']
  ], q: [
    ['شو رح تبعت منى؟', ['دعوة', 'استطلاع', 'فاتورة'], 1],
    ['إمتى بيطلب لوكاس الأكل؟', ['هلأ', 'لما يعرفوا العدد', 'يوم الحفلة'], 1]
  ] },
  task: { type: 'connected', ar: 'تدريب الجزء 1: «عيد ميلاد مفاجأة لصاحب». وزّعوا المهام، اعملوا خطة بديلة لمشكلة (مطر / ما في مكان / الميزانية)، وبالآخر لخّصوا.', hints: ['Wer übernimmt …?', 'Ich kümmere mich um …', 'Was machen wir, falls …?', 'Fassen wir zusammen: …'] }
},
{
  key: 'teil2a', title: 'امتحان – الجزء 2: افتتاح العرض والتجربة الشخصية', de: 'Prüfung Teil 2: Einleitung & Erfahrung',
  goal: 'تفتتح العرض، تشرح هيكليته، وتحكي تجربتك الشخصية.',
  s: [
    ['*Ich möchte heute über das Thema* „Online-Shopping“ *sprechen*.', 'بدي احكي اليوم عن موضوع «التسوق أونلاين».', 'x'],
    ['*Zuerst* erzähle ich von meinen eigenen Erfahrungen, *dann* spreche ich über die Situation in meinem Heimatland.', 'أول شي رح احكي عن تجربتي الشخصية، وبعدين عن الوضع ببلدي.', 's'],
    ['*Danach* nenne ich Vor- und Nachteile, und *zum Schluss* sage ich meine Meinung.', 'بعدها بذكر الميزات والعيوب، وبالآخر بقول رأيي.', 's'],
    ['*Dieses Thema ist wichtig, weil* heute fast jeder im Internet *einkauft*.', 'هالموضوع مهم لأنو اليوم تقريباً كل حدا بيتسوق عالإنترنت.', 'o'],
    ['*Ich persönlich* habe schon oft Kleidung online bestellt.', 'أنا شخصياً طلبت تياب أونلاين كتير مرات.', 's'],
    ['*Ich erinnere mich noch gut an* meine erste Bestellung: Die Schuhe waren zu klein, und ich musste sie zurückschicken.', 'لسا متذكر منيح أول طلبية إلي: الصبابيط كانت صغيرة واضطريت رجّعها.', 'p'],
    ['Was mache ich, *wenn* mir im Vortrag ein Wort *fehlt*? – Ich erkläre es einfach mit anderen Wörtern.', 'شو بعمل إذا ناقصتني كلمة بالعرض؟ – ببساطة بشرحها بكلمات تانية.', 'q'],
    ['*Auf meiner ersten Folie* sehen Sie die Struktur meiner Präsentation.', 'بأول شريحة بتشوفوا هيكلية عرضي.', 'x'],
    ['*Seit* ich in Deutschland *bin*, kaufe ich fast alles online, *weil* es bequemer *ist*.', 'من وقت ما أنا بألمانيا بشتري تقريباً كل شي أونلاين لأنو أريح.', 'c'],
    ['*Bevor* ich zu den Vor- und Nachteilen *komme*, möchte ich kurz erzählen, *welche* Erfahrungen ich selbst mit diesem Thema *gemacht habe*.', 'قبل ما وصل للميزات والعيوب بحب احكي باختصار شو التجارب اللي عشتها مع هالموضوع.', 'l']
  ],
  v: [
    ['die Präsentation, -en / der Vortrag, Vorträge', 'العرض / المحاضرة', 'n', 'eine Präsentation halten'],
    ['die Folie, -n', 'الشريحة', 'n', 'auf der nächsten Folie'],
    ['die Erfahrung, -en', 'التجربة / الخبرة', 'n', 'Erfahrungen machen mit + Dat'],
    ['sich erinnern an + Akk', 'يتذكر', 'v', ''],
    ['nennen', 'يذكر / يسمّي', 'v', 'nennt – nannte – hat genannt'],
    ['zurückschicken', 'يرجّع (بالبريد)', 'v', ''],
    ['die Struktur, -en', 'الهيكلية / الترتيب', 'n', '']
  ],
  tr: [
    ['افتتح عرض عن «العمل من البيت»', 'Homeoffice', 'Ich möchte heute über das Thema „Homeoffice“ sprechen.'],
    ['اربط تجربتك بـ seit', 'Ich arbeite im Homeoffice. Ich spare Zeit.', 'Seit ich im Homeoffice arbeite, spare ich viel Zeit.'],
    ['اشرح ليش الموضوع مهم', 'Viele Leute haben Haustiere.', 'Dieses Thema ist wichtig, weil viele Leute Haustiere haben.']
  ],
  qa: [
    ['Wie beginnst du eine Präsentation?', 'Ich begrüße die Zuhörer, nenne das Thema und erkläre kurz die Struktur.'],
    ['Welche Erfahrungen hast du mit Online-Shopping?', 'Meistens gute, aber einmal ist ein Paket nie angekommen.'],
    ['Warum ist dieses Thema wichtig?', 'Weil es unser tägliches Leben stark beeinflusst.']
  ],
  dlg: { title: 'Einleitung – Beispiel', lines: [
    ['Kandidat', 'Guten Tag. Ich möchte heute über das Thema „Kinder und Haushalt“ sprechen.', 'نهاركم سعيد. بدي احكي اليوم عن موضوع «الأولاد وشغل البيت».'],
    ['Kandidat', 'Zuerst erzähle ich von meinen Erfahrungen, dann beschreibe ich die Situation in meinem Heimatland.', 'أول شي بحكي عن تجربتي، وبعدين بوصف الوضع ببلدي.'],
    ['Kandidat', 'Danach nenne ich Vor- und Nachteile, und zum Schluss sage ich meine Meinung.', 'بعدها بذكر الميزات والعيوب، وبالآخر بقول رأيي.'],
    ['Kandidat', 'Als Kind musste ich jeden Tag den Tisch decken. Das fand ich damals langweilig, aber heute bin ich froh darüber.', 'وأنا صغير كان لازم حضّر السفرة كل يوم. وقتها كنت لاقيه ممل، بس اليوم مبسوط إني عملت هيك.']
  ], q: [
    ['شو موضوع العرض؟', ['التسوق أونلاين', 'الأولاد وشغل البيت', 'الرياضة'], 1],
    ['كيف شايف تجربته هلأ؟', ['ممل', 'مبسوط فيها', 'ندمان'], 1]
  ] },
  task: { type: '60s', ar: 'اختار موضوع (مثلاً «التسوق أونلاين» أو «الشغل من البيت») واعمل أول دقيقة من العرض: مقدمة + الهيكلية + تجربتك الشخصية.', hints: ['Ich möchte heute über das Thema „…“ sprechen.', 'Zuerst …, dann …, danach …, zum Schluss …', 'Ich persönlich habe …', 'Ich erinnere mich noch gut an …'] }
}
];
