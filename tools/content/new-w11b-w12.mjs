// New lessons — Week 11 part 2 (exam Teil 2/3) and Week 12 (spontaneous speech).
export default [
{
  key: 'teil2b', title: 'امتحان – الجزء 2: بلدك، الميزات والعيوب، الرأي', de: 'Prüfung Teil 2: Heimatland, Vor- & Nachteile',
  goal: 'تقارن مع بلدك، تذكر ميزات وعيوب، وتعطي رأي متوازن.',
  s: [
    ['*In meinem Heimatland* ist das ein bisschen anders: Dort kauft man lieber auf dem Markt ein.', 'ببلدي الوضع شوي مختلف: هناك الناس بيفضلوا يتسوقوا من السوق.', 's'],
    ['Bei uns *spielt* die Familie eine viel größere *Rolle* als in Deutschland.', 'عنا العيلة إلها دور أكبر بكتير من ألمانيا.', 's'],
    ['*Ein großer Vorteil ist, dass* man *rund um die Uhr* bestellen *kann*.', 'ميزة كبيرة إنو الواحد بيقدر يطلب أي ساعة.', 'o'],
    ['*Ein Nachteil ist allerdings, dass* viele kleine Geschäfte schließen *müssen*.', 'بس من العيوب إنو كتير محلات صغيرة بتضطر تسكّر.', 'o'],
    ['*Außerdem* *entsteht* durch die vielen Pakete sehr viel Verpackungsmüll.', 'كمان بسبب الطرود الكتيرة في نفايات تغليف كتير.', 'c'],
    ['Wie ist das in Ihrem Land? – Ich glaube, in Syrien ist Online-Shopping noch nicht so *verbreitet*.', 'كيف الوضع ببلدكم؟ – بعتقد إنو بسوريا التسوق أونلاين لسا مش منتشر كتير.', 'q'],
    ['*Meiner Meinung nach* *überwiegen* die Vorteile, aber man sollte *bewusst* einkaufen.', 'برأيي الميزات أكتر من العيوب، بس لازم الواحد يتسوق بوعي.', 'o'],
    ['*Im Vergleich zu* Deutschland sind die Preise dort niedriger, aber die Auswahl ist kleiner.', 'بالمقارنة مع ألمانيا الأسعار هناك أقل، بس التشكيلة أصغر.', 'c'],
    ['Es gibt *nicht nur* Vorteile, *sondern auch* einige Probleme, über die man nachdenken sollte.', 'مش بس في ميزات، كمان في بعض المشاكل اللي لازم الواحد يفكر فيها.', 'x'],
    ['Ich bin *zwar* der Meinung, *dass* Online-Shopping praktisch *ist*, *aber* ich finde, *dass* wir die kleinen Läden in unserer Nachbarschaft trotzdem *unterstützen sollten*.', 'صحيح أنا برأيي إنو التسوق أونلاين عملي، بس بلاقي إنو لازم ندعم المحلات الصغيرة بحارتنا مع هيك.', 'l']
  ],
  v: [
    ['eine Rolle spielen', 'يلعب دور', 'x', 'Das spielt eine große Rolle.'],
    ['rund um die Uhr', 'أربعة وعشرين ساعة', 'x', ''],
    ['überwiegen', 'يغلب / يكون أكتر', 'v', 'Die Vorteile überwiegen.'],
    ['entstehen', 'ينشأ / يصير', 'v', 'entsteht – entstand – ist entstanden'],
    ['verbreitet', 'منتشر', 'adj', ''],
    ['im Vergleich zu + Dat', 'بالمقارنة مع', 'x', ''],
    ['unterstützen', 'يدعم', 'v', ''],
    ['bewusst', 'بوعي', 'adv', '']
  ],
  tr: [
    ['قارن بلدك بألمانيا', 'Bei uns: Markt. In Deutschland: Supermarkt.', 'Im Vergleich zu Deutschland kauft man bei uns eher auf dem Markt ein.'],
    ['اذكر ميزة', 'Man spart Zeit.', 'Ein großer Vorteil ist, dass man Zeit spart.'],
    ['رأي متوازن بـ zwar … aber', 'Homeoffice ist praktisch. Man ist oft allein.', 'Homeoffice ist zwar praktisch, aber man ist oft allein.']
  ],
  qa: [
    ['Wie ist die Situation in deinem Heimatland?', 'In meinem Heimatland arbeiten viele Leute im Familienbetrieb, Homeoffice gibt es kaum.'],
    ['Welche Vorteile siehst du?', 'Man spart Zeit und kann flexibler arbeiten.'],
    ['Und welche Nachteile?', 'Man hat weniger Kontakt zu Kollegen, und Arbeit und Freizeit vermischen sich.']
  ],
  dlg: { title: 'Hauptteil – Beispiel', lines: [
    ['Kandidatin', 'In meinem Heimatland helfen Kinder sehr viel im Haushalt, besonders die Mädchen.', 'ببلدي الأولاد بيساعدوا كتير بشغل البيت، خصوصاً البنات.'],
    ['Kandidatin', 'Ein großer Vorteil ist, dass Kinder früh selbstständig werden.', 'ميزة كبيرة إنو الأولاد بيصيروا مستقلين بكير.'],
    ['Kandidatin', 'Ein Nachteil ist allerdings, dass manchmal zu wenig Zeit für die Schule bleibt.', 'بس من العيوب إنو أحياناً بيضل وقت قليل للمدرسة.'],
    ['Kandidatin', 'Meiner Meinung nach sollten Kinder helfen, aber Jungen und Mädchen gleich viel.', 'برأيي لازم الأولاد يساعدوا، بس الشباب والبنات بنفس المقدار.']
  ], q: [
    ['شو الميزة اللي ذكرتها؟', ['الأولاد بيصيروا مستقلين', 'بيوفّروا مصاري', 'بيلعبوا أكتر'], 0],
    ['شو رأيها؟', ['الأولاد ما لازم يساعدوا', 'الشباب والبنات بالتساوي', 'بس البنات'], 1]
  ] },
  task: { type: 'presentation', ar: 'كمّل العرض من الدرس الماضي: الوضع ببلدك (جملتين)، ميزتين، عيبين، ورأيك مع سبب. 1–2 دقيقة.', hints: ['In meinem Heimatland …', 'Ein großer Vorteil ist, dass …', 'Ein Nachteil ist allerdings, dass …', 'Meiner Meinung nach …, weil …'] }
},
{
  key: 'teil2c', title: 'امتحان – الجزء 2: الانتقالات والخاتمة', de: 'Prüfung Teil 2: Übergänge & Schluss',
  goal: 'تنتقل بين أجزاء العرض بسلاسة وتختم بخلاصة واضحة.',
  s: [
    ['*Jetzt komme ich zu* den Vor- und Nachteilen.', 'هلأ بوصل للميزات والعيوب.', 'x'],
    ['*Ich komme jetzt zum Schluss.*', 'هلأ بوصل للختام.', 'x'],
    ['*Zusammenfassend kann man sagen, dass* das Thema viele Seiten *hat*.', 'بالخلاصة منقدر نقول إنو الموضوع إلو جوانب كتيرة.', 's'],
    ['*Abschließend möchte ich sagen, dass* jeder selbst entscheiden *sollte*.', 'بالختام بدي قول إنو كل واحد لازم يقرر بنفسه.', 'o'],
    ['*Vielen Dank für Ihre Aufmerksamkeit.* Haben Sie noch Fragen?', 'شكراً على انتباهكم. عندكم أسئلة؟', 'q'],
    ['*Wie ich schon am Anfang gesagt habe*, ist das Thema für mich persönlich sehr wichtig.', 'متل ما قلت بالبداية، الموضوع كتير مهم إلي شخصياً.', 'c'],
    ['Ich habe leider nicht auf die Zeit geachtet – darf ich noch kurz meinen letzten Punkt *nennen*?', 'للأسف ما انتبهت عالوقت – بسمحولي اذكر آخر نقطة بسرعة؟', 'p'],
    ['*Kurz gesagt*: Es *kommt* auf die Situation *an*.', 'باختصار: بيعتمد عالموقف.', 'x'],
    ['*Dazu möchte ich ein Beispiel geben*: Mein Nachbar arbeitet seit zwei Jahren nur im Homeoffice.', 'بحب اعطي مثال عهالشي: جاري صرله سنتين بيشتغل بس من البيت.', 's'],
    ['*Alles in allem* bin ich *davon überzeugt*, *dass* die Vorteile *überwiegen*, *wenn* man ein paar einfache Regeln *beachtet*.', 'بالمجمل أنا مقتنع إنو الميزات أكتر، إذا الواحد التزم ببعض القواعد البسيطة.', 'l']
  ],
  v: [
    ['zusammenfassend', 'بالخلاصة', 'adv', ''],
    ['abschließend', 'بالختام', 'adv', ''],
    ['die Aufmerksamkeit', 'الانتباه', 'n', 'Danke für Ihre Aufmerksamkeit.'],
    ['alles in allem', 'بالمجمل', 'x', ''],
    ['kurz gesagt', 'باختصار', 'x', ''],
    ['beachten', 'يلتزم بـ / ينتبه لـ', 'v', 'Regeln beachten'],
    ['überzeugt sein von + Dat', 'مقتنع بـ', 'x', '']
  ],
  tr: [
    ['انتقل للنقطة الجاية', '(die Situation im Heimatland)', 'Jetzt komme ich zur Situation in meinem Heimatland.'],
    ['اختم العرض', 'Die Vorteile überwiegen.', 'Zusammenfassend kann man sagen, dass die Vorteile überwiegen.'],
    ['اعطي مثال', 'Meine Schwester bestellt alles online.', 'Dazu möchte ich ein Beispiel geben: Meine Schwester bestellt fast alles online.']
  ],
  qa: [
    ['Wie beendest du eine Präsentation?', 'Ich fasse die wichtigsten Punkte zusammen, sage meine Meinung und bedanke mich.'],
    ['Was sagst du, wenn die Zeit fast vorbei ist?', 'Ich sage: Ich komme jetzt zum Schluss, und nenne nur noch das Wichtigste.'],
    ['Wie gibst du ein Beispiel?', 'Ich sage: Dazu möchte ich ein Beispiel geben, und erzähle eine kurze Geschichte.']
  ],
  dlg: { title: 'Schluss – Beispiel', lines: [
    ['Kandidat', 'Ich komme jetzt zum Schluss.', 'هلأ بوصل للختام.'],
    ['Kandidat', 'Zusammenfassend kann man sagen, dass Homeoffice viele Vorteile hat, aber nicht für jeden passt.', 'بالخلاصة منقدر نقول إنو الشغل من البيت إلو ميزات كتير بس مش مناسب للكل.'],
    ['Kandidat', 'Ich persönlich würde gern zwei Tage pro Woche zu Hause arbeiten.', 'أنا شخصياً بحب اشتغل يومين بالأسبوع من البيت.'],
    ['Kandidat', 'Vielen Dank für Ihre Aufmerksamkeit. Haben Sie noch Fragen?', 'شكراً على انتباهكم. عندكم أسئلة؟']
  ], q: [
    ['كم يوم بدو يشتغل من البيت؟', ['ولا يوم', 'يومين', 'كل الأسبوع'], 1],
    ['شو الخلاصة؟', ['مناسب للكل', 'إلو ميزات بس مش للكل', 'ما إلو ميزات'], 1]
  ] },
  task: { type: 'presentation', ar: 'اعمل عرض كامل 2–3 دقايق عن «الأولاد والموبايل» بالهيكلية كلها: مقدمة، تجربة، بلدك، ميزات/عيوب، رأي، ختام. سجّل حالك وقيّم حالك بالمعايير بقسم الامتحان.', hints: ['Ich möchte heute über … sprechen.', 'Zuerst … / Jetzt komme ich zu …', 'In meinem Heimatland …', 'Ein Vorteil … / Ein Nachteil …', 'Ich komme jetzt zum Schluss. Zusammenfassend …'] }
},
{
  key: 'teil3', title: 'امتحان – الجزء 3: أسئلة وأجوبة بعد العرض', de: 'Prüfung Teil 3: Fragen & Feedback',
  goal: 'تعطي ملاحظة على عرض، تسأل أسئلة متابعة، وتجاوب حتى لو ما كنت محضّر.',
  s: [
    ['*Vielen Dank für deine Präsentation*, das war sehr interessant.', 'شكراً على عرضك، كان كتير مهم.', 'x'],
    ['*Mir hat besonders gefallen, dass* du so viele persönliche Beispiele *gegeben hast*.', 'عجبني خصوصاً إنك عطيت أمثلة شخصية كتيرة.', 'o'],
    ['*Ich habe eine Frage*: Wie ist das bei dir? Kaufst du auch selbst online ein?', 'عندي سؤال: كيف الوضع عندك؟ إنت كمان بتتسوق أونلاين؟', 'q'],
    ['*Das ist eine gute Frage.* Ehrlich gesagt kaufe ich nur Bücher online, Kleidung lieber im Laden.', 'سؤال حلو. بصراحة بشتري بس كتب أونلاين، والتياب بفضّلها من المحل.', 'a'],
    ['*Habe ich dich richtig verstanden, dass* du gegen Homeoffice *bist*?', 'فهمتك صح إنك ضد الشغل من البيت؟', 'q'],
    ['Nicht ganz. Ich bin *nicht* dagegen, *sondern* ich finde nur, man braucht auch Kontakt zu Kollegen.', 'مش تماماً. أنا مش ضده، بس بلاقي إنو الواحد بحاجة كمان لتواصل مع الزملاء.', 'a'],
    ['*Darüber habe ich noch nicht nachgedacht*, aber ich könnte mir vorstellen, *dass* es für Familien schwierig *ist*.', 'ما فكرت بهالشي لسا، بس بقدر اتخيل إنو صعب عالعائلات.', 'p'],
    ['Was *würdest* du einem Freund *raten*, der zum ersten Mal online *bestellt*?', 'شو كنت بتنصح صاحب أول مرة بيطلب أونلاين؟', 'q'],
    ['*Ich würde ihm raten*, nur bei bekannten Shops *zu* bestellen und die Bewertungen *zu* lesen.', 'كنت بنصحه يطلب بس من مواقع معروفة ويقرا التقييمات.', 'a'],
    ['*Ich bin mir nicht ganz sicher, aber soweit ich weiß*, kann man in Deutschland Online-Bestellungen meistens innerhalb von vierzehn Tagen *widerrufen*.', 'مش متأكد تماماً، بس على حد علمي بألمانيا عادةً بتقدر تلغي الطلب أونلاين خلال أربعطعش يوم.', 'l']
  ],
  v: [
    ['die Rückmeldung, -en', 'الملاحظات / الرأي', 'n', 'eine Rückmeldung geben'],
    ['nachdenken über + Akk', 'يفكّر بـ', 'v', 'denkt nach – dachte nach – hat nachgedacht'],
    ['raten + Dat', 'ينصح', 'v', 'rät – riet – hat geraten'],
    ['die Bewertung, -en', 'التقييم', 'n', ''],
    ['soweit ich weiß', 'على حد علمي', 'x', ''],
    ['widerrufen', 'يلغي / يسحب (عقد)', 'v', ''],
    ['Ehrlich gesagt …', 'بصراحة …', 'x', '']
  ],
  tr: [
    ['اعطي ملاحظة إيجابية', 'Die Präsentation war gut.', 'Vielen Dank für deine Präsentation. Mir hat besonders gefallen, dass du viele Beispiele gegeben hast.'],
    ['اسأل سؤال متابعة', 'Und du?', 'Wie ist das bei dir persönlich?'],
    ['جاوب عن سؤال ما فكرت فيه', 'Ich weiß es nicht.', 'Darüber habe ich noch nicht nachgedacht, aber ich könnte mir vorstellen, dass …']
  ],
  qa: [
    ['Wie findest du das Thema persönlich?', 'Für mich ist das Thema sehr wichtig, weil ich selbst zwei Kinder habe.'],
    ['Gibt es eine Alternative?', 'Ja, man könnte zum Beispiel feste Regeln in der Familie einführen.'],
    ['Würdest du das auch in deinem Heimatland empfehlen?', 'Ja, ich denke schon, aber man müsste es an die Kultur anpassen.']
  ],
  dlg: { title: 'Teil 3 – Beispiel', lines: [
    ['Prüferin', 'Danke für Ihre Präsentation. Sie haben gesagt, dass Kinder im Haushalt helfen sollten. Ab welchem Alter?', 'شكراً على عرضك. قلت إنو الأولاد لازم يساعدوا بشغل البيت. من أي عمر؟'],
    ['Kandidat', 'Das ist eine gute Frage. Ich denke, schon ab vier oder fünf Jahren, mit kleinen Aufgaben.', 'سؤال حلو. بعتقد من أربع أو خمس سنين، بمهام صغيرة.'],
    ['Prüferin', 'Zum Beispiel?', 'مثلاً؟'],
    ['Kandidat', 'Zum Beispiel können sie ihre Spielsachen aufräumen oder beim Tischdecken helfen.', 'مثلاً بيقدروا يرتبوا ألعابهم أو يساعدوا بتحضير السفرة.'],
    ['Partnerin', 'Ich habe auch eine Frage: Wie war das bei Ihnen in der Kindheit?', 'أنا كمان عندي سؤال: كيف كان الوضع عندك بطفولتك؟'],
    ['Kandidat', 'Ich musste jeden Tag den Tisch decken – und heute bin ich froh darüber.', 'كان لازم حضّر السفرة كل يوم – واليوم مبسوط إني عملت هيك.']
  ], q: [
    ['من أي عمر لازم الأولاد يساعدوا حسب رأيه؟', ['10 سنين', '4–5 سنين', '15 سنة'], 1],
    ['شو المثال اللي عطاه؟', ['يطبخوا', 'يرتبوا ألعابهم', 'يتسوقوا'], 1]
  ] },
  task: { type: 'connected', ar: 'اقرا أو اسمع عرض (من دروس الجزء 2)، واعمل: ملاحظة إيجابية + سؤالين متابعة. بعدين جاوب على سؤالين عن عرضك إنت.', hints: ['Vielen Dank für …', 'Mir hat besonders gefallen, dass …', 'Ich habe eine Frage: …', 'Das ist eine gute Frage. …', 'Darüber habe ich noch nicht nachgedacht, aber …'] }
},
{
  key: 'spontan', title: 'أسئلة غير متوقعة وحكي عفوي', de: 'Unerwartete Fragen & spontan reagieren',
  goal: 'تربح وقت، تجاوب على أسئلة افتراضية، وتعبّر عن الندم بـ Konjunktiv II بالماضي.',
  s: [
    ['*Oh, damit habe ich nicht gerechnet!* Lass mich kurz nachdenken.', 'آه، ما كنت متوقع هالسؤال! خليني فكر شوي.', 'x'],
    ['*Gute Frage* – ich würde sagen, beides hat seine Vorteile.', 'سؤال حلو – بقول إنو التنين إلهن ميزاتهن.', 'a'],
    ['Was *würden* Sie tun, *wenn* Sie im Lotto *gewinnen würden*?', 'شو كنت عملت لو ربحت باليانصيب؟', 'q'],
    ['Ich *würde* zuerst meiner Familie *helfen* und dann eine lange Reise *machen*.', 'كنت أول شي ساعدت عيلتي وبعدين عملت رحلة طويلة.', 'a'],
    ['*Hätte* ich das früher *gewusst*, *hätte* ich mich anders *entschieden*.', 'لو كنت عارف هالشي من قبل كنت قررت غير.', 'c', 'Konjunktiv II بالماضي: hätte/wäre + Partizip II'],
    ['*Wenn* der Zug nicht *ausgefallen wäre*, *wäre* ich pünktlich *gewesen*.', 'لو ما انلغى القطار كنت وصلت عالوقت.', 'p'],
    ['*Ehrlich gesagt* habe ich darüber noch nie nachgedacht, aber *spontan* würde ich Nein sagen.', 'بصراحة عمري ما فكرت فيها، بس هيك بشكل عفوي بقول لا.', 'o'],
    ['*Das kann ich mir gut vorstellen*, denn mir ist so etwas *Ähnliches* schon mal *passiert*.', 'بقدر اتخيلها منيح، لأنو صرلي شي مشابه قبل.', 's'],
    ['*Wie meinen Sie das genau?* Meinen Sie beruflich oder privat?', 'شو قصدك بالزبط؟ قصدك بالشغل ولا بالحياة الخاصة؟', 'q'],
    ['*Wenn* ich noch einmal *von vorne* anfangen *könnte*, *würde* ich früher Deutsch *lernen*, *denn* die Sprache ist der *Schlüssel* zu fast allem hier.', 'لو بقدر ابلش من جديد كنت تعلمت ألماني أبكر، لأنو اللغة هي المفتاح لكل شي تقريباً هون.', 'l']
  ],
  v: [
    ['rechnen mit + Dat', 'يتوقع', 'v', 'Damit habe ich nicht gerechnet.'],
    ['spontan', 'عفوياً / فوراً', 'adv', ''],
    ['sich entscheiden für + Akk', 'يقرر / يختار', 'v', 'entscheidet – entschied – hat entschieden'],
    ['passieren', 'يصير (يحصل)', 'v', 'ist passiert'],
    ['ähnlich', 'مشابه', 'adj', 'etwas Ähnliches'],
    ['von vorne anfangen', 'يبلش من جديد', 'x', ''],
    ['der Schlüssel zu + Dat', 'المفتاح لـ', 'n', '']
  ],
  tr: [
    ['Konjunktiv II بالماضي (ندم)', 'Ich wusste es nicht. Ich habe falsch entschieden.', 'Hätte ich es gewusst, hätte ich anders entschieden.'],
    ['شرط خيالي بالماضي', 'Der Bus kam zu spät. Ich habe den Termin verpasst.', 'Wenn der Bus nicht zu spät gekommen wäre, hätte ich den Termin nicht verpasst.'],
    ['اربح وقت قبل الجواب', '(سؤال صعب)', 'Oh, damit habe ich nicht gerechnet. Lass mich kurz nachdenken.']
  ],
  qa: [
    ['Was würdest du ändern, wenn du Bürgermeister wärst?', 'Ich würde mehr Spielplätze und Radwege bauen und den Nahverkehr billiger machen.'],
    ['Was hättest du anders gemacht, als du nach Deutschland gekommen bist?', 'Ich hätte sofort einen Sprachkurs besucht und mehr Kontakt zu Deutschen gesucht.'],
    ['Was ist das Wichtigste, das du in Deutschland gelernt hast?', 'Dass man mit Geduld und Fleiß fast alles schaffen kann.']
  ],
  dlg: { title: 'Small Talk mit Überraschung', lines: [
    ['Nachbarin', 'Sag mal, wenn du irgendwo auf der Welt leben könntest – wo wäre das?', 'قلّي، لو بتقدر تعيش بأي مكان بالعالم – وين بيكون؟'],
    ['Ziad', 'Oh, damit habe ich nicht gerechnet! Hm … vielleicht in Kanada, wegen der Natur.', 'آه، ما كنت متوقع! همم… يمكن بكندا، بسبب الطبيعة.'],
    ['Nachbarin', 'Und warum nicht hier?', 'وليش مش هون؟'],
    ['Ziad', 'Gute Frage! Eigentlich gefällt es mir hier sehr gut. Wäre der Winter nicht so dunkel, würde ich gar nicht nachdenken.', 'سؤال حلو! بالحقيقة كتير مرتاح هون. لو الشتي مش معتّم هالقد ما كنت فكرت أبداً.']
  ], q: [
    ['وين بيحب زياد يعيش؟', ['كندا', 'إسبانيا', 'سوريا'], 0],
    ['شو اللي ما بيعجبه هون؟', ['الناس', 'الشتي المعتم', 'الشغل'], 1]
  ] },
  task: { type: '60s', ar: 'جاوب بشكل عفوي، بدون تحضير (30–60 ثانية لكل سؤال): 1) لو كان عندك سنة إجازة شو بتعمل؟ 2) شو كنت عملت غير لما وصلت ألمانيا؟ 3) شو أحسن نصيحة سمعتها بحياتك؟', hints: ['Oh, gute Frage! Lass mich kurz überlegen.', 'Wenn ich …, würde ich …', 'Hätte ich …, hätte ich …', 'Ehrlich gesagt …'] }
}
];
