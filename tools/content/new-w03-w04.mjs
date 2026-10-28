// New lessons — Week 3 (food, shopping) and Week 4 (education).
export default [
{
  key: 'supermarkt', title: 'التسوق بالسوبرماركت', de: 'Einkaufen im Supermarkt',
  goal: 'تتسوق، تسأل عن منتجات وأسعار، وتدفع بثقة.',
  s: [
    ['Ich gehe meistens samstags einkaufen, *weil* ich unter der Woche keine Zeit *habe*.', 'عادةً بتسوق السبت لأنو خلال الأسبوع ما عندي وقت.', 's'],
    ['Wir brauchen noch Milch, ein Kilo Tomaten und eine *Packung* Reis.', 'لسا بدنا حليب، كيلو بندورة، وكيس رز.', 's'],
    ['Entschuldigung, wo *finde* ich hier Halal-Fleisch?', 'عفواً، وين بلاقي هون لحمة حلال؟', 'q'],
    ['Das gibt es hier leider nicht, *aber* der türkische Supermarkt um die Ecke hat eine große *Auswahl*.', 'للأسف ما في هون، بس السوبرماركت التركي عالزاوية عنده تشكيلة كبيرة.', 'a'],
    ['Diese Woche sind Äpfel im *Angebot*: Ein Kilo kostet nur 1,49 Euro.', 'هالأسبوع التفاح عليه عرض: الكيلو بس بـ 1,49 يورو.', 's'],
    ['Ich kaufe lieber auf dem Markt ein, *denn* das Gemüse *ist* dort frischer und kommt aus der Region.', 'بفضل اتسوق من السوق لأنو الخضرة هناك أطزج وجاية من المنطقة.', 'o'],
    ['Die Milch ist schon *abgelaufen*. Das Mindesthaltbarkeitsdatum war gestern.', 'الحليب منتهي. تاريخ الصلاحية كان مبارح.', 'p'],
    ['Haben Sie eine *Kundenkarte*? – Nein, brauche ich nicht.', 'عندك بطاقة زبون؟ – لا، ما بحتاج.', 'x'],
    ['Kann ich *mit Karte* zahlen, oder nehmen Sie nur *Bargeld*?', 'بقدر ادفع بالبطاقة ولا بتقبلوا بس كاش؟', 'q'],
    ['*Damit* ich nicht zu viel *ausgebe*, schreibe ich vorher eine Einkaufsliste und kaufe nur das, was wirklich *fehlt*.', 'لحتى ما اصرف كتير بكتب قبل قائمة مشتريات وبشتري بس الشي اللي ناقص فعلاً.', 'l']
  ],
  v: [
    ['das Angebot, -e', 'العرض', 'n', 'im Angebot sein'],
    ['die Auswahl', 'التشكيلة / الاختيار', 'n', 'eine große Auswahl an + Dat'],
    ['abgelaufen', 'منتهي الصلاحية', 'adj', 'Die Milch ist abgelaufen.'],
    ['das Mindesthaltbarkeitsdatum (MHD)', 'تاريخ الصلاحية', 'n', ''],
    ['das Bargeld', 'كاش / نقدي', 'n', 'bar zahlen / mit Karte zahlen'],
    ['ausgeben', 'يصرف (مصاري)', 'v', 'gibt aus – gab aus – hat ausgegeben'],
    ['die Packung, -en / die Dose, -n / die Flasche, -n', 'كيس/علبة، علبة معدن، قنينة', 'n', 'eine Packung Reis']
  ],
  tr: [
    ['حوّلها لسؤال غير مباشر', 'Wo ist das Mehl?', 'Können Sie mir sagen, wo das Mehl ist?'],
    ['استعمل denn بدل weil', 'Ich kaufe auf dem Markt, weil es frischer ist.', 'Ich kaufe auf dem Markt, denn es ist frischer.'],
    ['قارن بـ als', 'Der Markt ist teuer. Der Supermarkt ist billig.', 'Der Markt ist teurer als der Supermarkt.']
  ],
  qa: [
    ['Wo kaufst du am liebsten ein?', 'Am liebsten kaufe ich im türkischen Supermarkt ein, weil es dort alles gibt, was ich zum Kochen brauche.'],
    ['Was kaufst du jede Woche?', 'Jede Woche kaufe ich Brot, Gemüse, Milch und Eier.'],
    ['Achtest du auf Angebote?', 'Ja, ich vergleiche immer die Preise und kaufe oft Angebote.']
  ],
  dlg: { title: 'An der Kasse', lines: [
    ['Kassiererin', 'Hallo! Sammeln Sie Punkte?', 'مرحبا! بتجمع نقاط؟'],
    ['Ahmad', 'Nein, danke. Ach, die Tomaten habe ich vergessen zu wiegen.', 'لا شكراً. آه، نسيت وزّن البندورة.'],
    ['Kassiererin', 'Kein Problem, das mache ich hier. Das macht dann 23,80 Euro.', 'مش مشكلة، بعملها هون. المجموع 23,80 يورو.'],
    ['Ahmad', 'Kann ich mit Karte zahlen?', 'بقدر ادفع بالبطاقة؟'],
    ['Kassiererin', 'Ja, natürlich. Brauchen Sie den Kassenbon?', 'إي طبعاً. بدك الإيصال؟'],
    ['Ahmad', 'Ja, bitte. Danke und schönen Tag noch!', 'إي لو سمحتي. شكراً ونهارك سعيد!']
  ], q: [
    ['شو نسي أحمد؟', ['يدفع', 'يوزن البندورة', 'الكيس'], 1],
    ['كيف دفع؟', ['كاش', 'بالبطاقة', 'ما دفع'], 1]
  ] },
  task: { type: 'connected', ar: 'احكي عن عاداتك بالتسوق: وين، إمتى، شو بتشتري، وكيف بتوفّر مصاري (4 جمل).', hints: ['Normalerweise kaufe ich … ein.', 'Dort gibt es …', 'Damit ich Geld spare, …', 'Ich achte auf …'] }
},
{
  key: 'kochen', title: 'الطبخ والوصفات', de: 'Kochen & Rezepte',
  goal: 'تشرح وصفة خطوة بخطوة وتحل مشكلة بالمطبخ.',
  s: [
    ['Am Wochenende koche ich gern *Gerichte* aus meiner Heimat.', 'بنهاية الأسبوع بحب اطبخ أكلات من بلدي.', 's'],
    ['*Zuerst* schneidet man die Zwiebeln klein, *dann* brät man sie in Öl *an*.', 'أول شي بتقطّع البصل ناعم، وبعدين بتقليه بالزيت.', 's'],
    ['Wie lange muss der Reis *kochen*?', 'قديش لازم يستوي الرز؟', 'q'],
    ['Ungefähr zwanzig Minuten, *bis* das ganze Wasser *verdampft ist*.', 'تقريباً عشرين دقيقة لحد ما تتبخر كل المي.', 'a'],
    ['Das *schmeckt* lecker! Kannst du mir das *Rezept* schicken?', 'طيب كتير! بتقدر تبعتلي الوصفة؟', 'x'],
    ['Ich habe zu viel Salz genommen, jetzt ist die Suppe zu *salzig*. Was kann ich machen?', 'حطيت ملح كتير، هلأ الشوربة مالحة. شو بقدر اعمل؟', 'p'],
    ['Gib eine Kartoffel *dazu*, die *nimmt* einen Teil des Salzes *auf*.', 'زيد عليها حبة بطاطا، بتمتص جزء من الملح.', 'a'],
    ['*Ich finde*, selbst kochen ist gesünder und billiger *als* Fast Food.', 'بلاقي إنو الطبخ بالبيت أصح وأرخص من الوجبات السريعة.', 'o'],
    ['Für den *Teig* braucht man 500 Gramm Mehl, zwei Eier und eine Prise Salz.', 'للعجينة بتحتاج 500 غرام طحين، بيضتين، ورشة ملح.', 's'],
    ['*Wenn* ich Gäste *habe*, koche ich meistens etwas, das ich schon gut *kenne*, *damit* nichts *schiefgeht*.', 'لما يكون عندي ضيوف عادةً بطبخ شي بعرفه منيح لحتى ما يخرب شي.', 'l']
  ],
  v: [
    ['das Gericht, -e', 'الطبخة / الوجبة', 'n', 'ein typisches Gericht'],
    ['das Rezept, -e', 'الوصفة', 'n', 'nach Rezept kochen'],
    ['schneiden', 'يقطّع', 'v', 'schneidet – schnitt – hat geschnitten'],
    ['braten / anbraten', 'يقلي', 'v', 'brät – briet – hat gebraten'],
    ['salzig / scharf / süß / sauer', 'مالح / حار / حلو / حامض', 'adj', ''],
    ['schiefgehen', 'يخرب / يفشل', 'v', 'geht schief – ging schief – ist schiefgegangen'],
    ['der Teig, -e', 'العجينة', 'n', 'den Teig kneten']
  ],
  tr: [
    ['حوّلها لأمر (du)', 'Man schneidet die Zwiebeln.', 'Schneid die Zwiebeln!'],
    ['احكيها بالـ Perfekt', 'Ich brate das Fleisch an.', 'Ich habe das Fleisch angebraten.'],
    ['اربط بـ bis', 'Der Reis kocht. Das Wasser ist weg.', 'Der Reis kocht, bis das Wasser weg ist.']
  ],
  qa: [
    ['Was ist dein Lieblingsgericht?', 'Mein Lieblingsgericht ist Maqluba. Das ist Reis mit Gemüse und Fleisch.'],
    ['Wer kocht bei euch zu Hause?', 'Bei uns kochen meistens meine Mutter und ich zusammen.'],
    ['Kochst du lieber allein oder mit anderen?', 'Ich koche lieber mit anderen. Zusammen macht es nämlich mehr Spaß.']
  ],
  dlg: { title: 'Ein Rezept erklären', lines: [
    ['Anna', 'Hmm, das Hummus ist super! Wie machst du das?', 'ممم، الحمص رائع! كيف بتعمله؟'],
    ['Rami', 'Ganz einfach: Kichererbsen, Tahini, Zitrone, Knoblauch und etwas Salz.', 'بسيط كتير: حمص حب، طحينة، ليمون، توم، وشوية ملح.'],
    ['Anna', 'Und dann einfach alles mixen?', 'وبعدين بتخلط كل شي؟'],
    ['Rami', 'Genau. Aber die Kichererbsen müssen vorher richtig weich sein.', 'بالزبط. بس الحمص لازم يكون مستوي منيح قبل.'],
    ['Anna', 'Kannst du mir das Rezept aufschreiben?', 'بتقدر تكتبلي الوصفة؟'],
    ['Rami', 'Klar, ich schicke es dir heute Abend.', 'أكيد، ببعتلك ياها اليوم المسا.']
  ], q: [
    ['شو لازم يكون طري قبل الخلط؟', ['الليمون', 'الحمص', 'التوم'], 1],
    ['إمتى رح يبعت رامي الوصفة؟', ['هلأ', 'اليوم المسا', 'بكرا'], 1]
  ] },
  task: { type: '60s', ar: 'اشرح وصفة أكلة من بلدك خطوة بخطوة (zuerst, dann, danach, zum Schluss) — 30 لـ 60 ثانية.', hints: ['Für … braucht man …', 'Zuerst …, dann …', 'Danach muss man … Minuten …', 'Zum Schluss …'] }
},
{
  key: 'restaurant', title: 'بالمطعم والشكوى والتبديل', de: 'Im Restaurant & Reklamation',
  goal: 'تطلب أكل، تسأل عن المكونات، تشتكي بأدب، وتبدّل بضاعة.',
  s: [
    ['Haben Sie einen Tisch für vier Personen *frei*?', 'عندكم طاولة فاضية لأربع أشخاص؟', 'q'],
    ['Ich *hätte gern* die Tomatensuppe und danach das Hähnchen mit Reis.', 'بدي شوربة البندورة وبعدها الدجاج مع الرز.', 'x'],
    ['Ist in der Soße Schweinefleisch oder Alkohol?', 'في بالصلصة لحم خنزير أو كحول؟', 'q'],
    ['Nein, die Soße ist vegetarisch, *aber* sie *enthält* Sahne.', 'لا، الصلصة نباتية بس فيها قشطة.', 'a'],
    ['Entschuldigung, wir *warten* schon seit vierzig Minuten *auf* unser Essen.', 'عفواً، صرلنا أربعين دقيقة عم نستنى أكلنا.', 'p'],
    ['Das Essen ist leider kalt. *Könnten* Sie es bitte noch einmal warm *machen*?', 'الأكل للأسف بارد. ممكن تسخنوه مرة تانية لو سمحت؟', 'p'],
    ['*Zusammen oder getrennt?* – Getrennt, bitte.', 'سوا ولا كل واحد لحالو؟ – كل واحد لحالو لو سمحت.', 'x'],
    ['Ich möchte diese Jacke *umtauschen*, *weil* sie mir zu klein *ist*. Hier ist der Kassenbon.', 'بدي بدّل هالجاكيت لأنها صغيرة عليّ. هاد الإيصال.', 'p'],
    ['*Meiner Meinung nach* sollte man in Deutschland ungefähr zehn Prozent *Trinkgeld* geben.', 'برأيي بألمانيا لازم الواحد يعطي تقريباً عشرة بالمية بقشيش.', 'o'],
    ['*Wenn* Sie das Geld nicht zurückgeben *können*, *würde* ich auch einen Gutschein *nehmen*, aber lieber *wäre* mir eine andere Größe.', 'إذا ما بتقدروا ترجعوا المصاري باخد قسيمة، بس بفضّل مقاس تاني.', 'l']
  ],
  v: [
    ['bestellen', 'يطلب (أكل)', 'v', 'Ich bestelle die Suppe.'],
    ['die Rechnung, -en', 'الحساب / الفاتورة', 'n', 'Die Rechnung, bitte!'],
    ['das Trinkgeld', 'البقشيش', 'n', 'Trinkgeld geben'],
    ['sich beschweren über + Akk', 'يشتكي من', 'v', 'sich über das Essen beschweren'],
    ['umtauschen', 'يبدّل (بضاعة)', 'v', 'tauscht um – tauschte um – hat umgetauscht'],
    ['der Kassenbon, -s', 'الإيصال', 'n', 'den Kassenbon aufheben'],
    ['der Gutschein, -e', 'قسيمة', 'n', 'einen Gutschein bekommen'],
    ['enthalten', 'يحتوي', 'v', 'enthält – enthielt – hat enthalten']
  ],
  tr: [
    ['خليها أكثر أدب بـ Konjunktiv II', 'Ich will einen Kaffee.', 'Ich hätte gern einen Kaffee.'],
    ['اربط بـ obwohl', 'Das Restaurant ist teuer. Wir gehen oft hin.', 'Obwohl das Restaurant teuer ist, gehen wir oft hin.'],
    ['اشتكي بأدب', 'Das Essen ist kalt!', 'Entschuldigung, aber mein Essen ist leider kalt. Könnten Sie es bitte warm machen?']
  ],
  qa: [
    ['Gehst du oft ins Restaurant?', 'Nicht so oft, vielleicht einmal im Monat, weil es ziemlich teuer ist.'],
    ['Was bestellst du normalerweise?', 'Normalerweise bestelle ich etwas mit Fisch oder Gemüse.'],
    ['Hast du dich schon einmal beschwert?', 'Ja, einmal war mein Essen kalt. Der Kellner hat sich entschuldigt und mir ein neues gebracht.']
  ],
  dlg: { title: 'Im Restaurant', lines: [
    ['Kellner', 'Guten Abend! Haben Sie schon gewählt?', 'مسا الخير! اخترتوا؟'],
    ['Leila', 'Ja, ich hätte gern die Gemüsepfanne. Ist die scharf?', 'إي، بدي مقلاية الخضرة. هي حارة؟'],
    ['Kellner', 'Nur ein bisschen. Und zu trinken?', 'شوي بس. وشو بتشربي؟'],
    ['Leila', 'Ein stilles Wasser, bitte.', 'مي عادية بدون غاز لو سمحت.'],
    ['Kellner', 'Gern. … Hat es Ihnen geschmeckt?', 'تكرمي. … عجبك الأكل؟'],
    ['Leila', 'Ja, sehr gut, danke. Die Rechnung, bitte. Stimmt so.', 'إي، كتير منيح، شكراً. الحساب لو سمحت. خلي الباقي.']
  ], q: [
    ['شو طلبت ليلى تشرب؟', ['عصير', 'مي بدون غاز', 'قهوة'], 1],
    ['شو يعني «Stimmt so»؟', ['خلي الباقي إلك', 'الحساب غلط', 'بدي إيصال'], 0]
  ] },
  task: { type: 'connected', ar: 'تمثيل: إنت بالمطعم والأكل إجا غلط وبارد. اشتكي بلطف، اطلب حل، وبالنهاية ادفع.', hints: ['Entschuldigung, ich habe … bestellt, aber …', 'Außerdem ist …', 'Könnten Sie bitte …?', 'Die Rechnung, bitte.'] }
},
{
  key: 'ausbildung', title: 'إيجاد تدريب مهني (Ausbildung)', de: 'Eine Ausbildung finden',
  goal: 'تشرح أي مهنة بدك تتعلم وليش، وتسأل عن الطريق للتدريب.',
  s: [
    ['Ich möchte eine *Ausbildung* als Pflegefachkraft machen, *weil* ich gern mit Menschen *arbeite*.', 'بدي اعمل تدريب مهني بالتمريض لأني بحب اشتغل مع الناس.', 's'],
    ['Die Ausbildung dauert drei Jahre und ist dual: Ich lerne im *Betrieb* und in der *Berufsschule*.', 'التدريب بيطول تلات سنين وهو مزدوج: بتعلم بالشركة وبالمدرسة المهنية.', 's'],
    ['Wie viel *verdient* man im ersten Ausbildungsjahr?', 'قديش بيقبض الواحد بأول سنة تدريب؟', 'q'],
    ['Das *hängt vom* Beruf *ab*, aber meistens sind es zwischen 900 und 1.200 Euro brutto.', 'بيعتمد عالمهنة، بس عادةً بين 900 و1200 يورو قبل الضرايب.', 'a'],
    ['*Bevor* ich mich *bewerbe*, mache ich ein Praktikum, *um* den Beruf besser *kennenzulernen*.', 'قبل ما قدّم بعمل تدريب قصير لحتى اتعرف عالمهنة أكتر.', 'c'],
    ['Für die Bewerbung brauche ich ein *Anschreiben*, einen *Lebenslauf* und meine *Zeugnisse*.', 'للتقديم بحتاج رسالة تحفيزية وسيرة ذاتية وشهاداتي.', 'x'],
    ['*Ich bin der Meinung, dass* eine Ausbildung genauso wertvoll *ist* wie ein Studium.', 'أنا برأيي إنو التدريب المهني إلو قيمة متل الدراسة الجامعية.', 'o'],
    ['Mein Abschluss aus Syrien *wird* hier nicht *anerkannt*. Was kann ich tun?', 'شهادتي من سوريا مش معترف فيها هون. شو بقدر اعمل؟', 'p'],
    ['Du kannst die *Anerkennung beantragen* oder dich bei der Beratungsstelle informieren.', 'بتقدر تقدّم طلب معادلة أو تستعلم بمركز الاستشارة.', 'a'],
    ['*Falls* ich keinen Ausbildungsplatz in meiner Stadt *finde*, bin ich auch *bereit*, in eine andere Stadt *zu* ziehen, *denn* die Ausbildung ist mir sehr wichtig.', 'إذا ما لقيت مكان تدريب بمدينتي مستعد انتقل لمدينة تانية، لأنو التدريب كتير مهم إلي.', 'l']
  ],
  v: [
    ['die Ausbildung, -en', 'التدريب المهني', 'n', 'eine Ausbildung als … machen'],
    ['der Betrieb, -e', 'الشركة / مكان العمل', 'n', 'im Betrieb arbeiten'],
    ['die Berufsschule, -n', 'المدرسة المهنية', 'n', 'in die Berufsschule gehen'],
    ['das Praktikum, Praktika', 'تدريب عملي قصير', 'n', 'ein Praktikum machen'],
    ['das Zeugnis, -se', 'الشهادة / كشف العلامات', 'n', ''],
    ['die Anerkennung', 'المعادلة / الاعتراف', 'n', 'die Anerkennung beantragen'],
    ['abhängen von + Dat', 'يعتمد على', 'v', 'Das hängt vom Gehalt ab.'],
    ['bereit sein, … zu …', 'يكون مستعد', 'x', 'Ich bin bereit, umzuziehen.']
  ],
  tr: [
    ['اربطها بـ um … zu', 'Ich mache ein Praktikum. Ich will den Beruf kennenlernen.', 'Ich mache ein Praktikum, um den Beruf kennenzulernen.'],
    ['استخدم falls', 'Vielleicht finde ich keinen Platz. Dann ziehe ich um.', 'Falls ich keinen Platz finde, ziehe ich um.'],
    ['حوّلها لـ Passiv', 'Man erkennt den Abschluss nicht an.', 'Der Abschluss wird nicht anerkannt.']
  ],
  qa: [
    ['Welchen Beruf möchtest du lernen und warum?', 'Ich möchte Elektriker werden, weil ich gern mit den Händen arbeite und Technik mag.'],
    ['Was ist der Unterschied zwischen Ausbildung und Studium?', 'Bei einer Ausbildung lernt man praktisch im Betrieb, beim Studium lernt man mehr Theorie an der Uni.'],
    ['Wie findet man einen Ausbildungsplatz?', 'Man kann im Internet suchen, zur Agentur für Arbeit gehen oder direkt bei Firmen fragen.']
  ],
  dlg: { title: 'Bei der Berufsberatung', lines: [
    ['Beraterin', 'Was interessiert Sie denn beruflich?', 'شو بيهمك مهنياً؟'],
    ['Yusuf', 'Ich arbeite gern mit Technik, vielleicht etwas mit Autos.', 'بحب اشتغل بالتقنية، يمكن شي إلو علاقة بالسيارات.'],
    ['Beraterin', 'Dann wäre Kfz-Mechatroniker interessant. Haben Sie schon ein Praktikum gemacht?', 'معناها ميكاترونيك سيارات ممكن تكون مناسبة. عملت تدريب قصير قبل؟'],
    ['Yusuf', 'Nein, noch nicht. Wo könnte ich eins machen?', 'لا لسا. وين بقدر اعمل واحد؟'],
    ['Beraterin', 'Ich gebe Ihnen eine Liste mit Werkstätten. Rufen Sie dort einfach an.', 'رح أعطيك قائمة بورشات. اتصل فيهم بس.']
  ], q: [
    ['شو المهنة اللي اقترحتها المستشارة؟', ['ممرض', 'ميكاترونيك سيارات', 'طباخ'], 1],
    ['شو رح تعطيه؟', ['قائمة ورشات', 'عقد', 'شهادة'], 0]
  ] },
  task: { type: '60s', ar: 'احكي 30–60 ثانية: أي مهنة بدك تتعلم، ليش، شو لازم تعمل لتوصل، وشو ممكن يكون صعب.', hints: ['Ich interessiere mich für …', 'Deshalb möchte ich …', 'Zuerst muss ich …', 'Schwierig könnte … sein, weil …'] }
},
{
  key: 'berufsschule', title: 'المدرسة المهنية والوظايف', de: 'Berufsschule & Hausaufgaben',
  goal: 'تتواصل مع الأستاذ والزملاء: مواعيد التسليم، طلب شرح، شغل جماعي.',
  s: [
    ['Zweimal pro Woche habe ich *Unterricht* in der Berufsschule.', 'مرتين بالأسبوع عندي دروس بالمدرسة المهنية.', 's'],
    ['Unser Lehrer erklärt sehr gut, *aber* er spricht manchmal ziemlich schnell.', 'أستاذنا بيشرح منيح كتير، بس أحياناً بيحكي بسرعة.', 's'],
    ['*Bis wann* müssen wir die Hausaufgabe *abgeben*?', 'لحد إمتى لازم نسلّم الوظيفة؟', 'q'],
    ['Spätestens bis nächsten Montag, und bitte schickt sie per E-Mail.', 'أقصى شي لحد الاثنين الجاي، وابعتوها بالإيميل لو سمحتوا.', 'a'],
    ['Ich habe die Aufgabe nicht ganz verstanden. *Könnten* Sie sie bitte noch einmal *erklären*?', 'ما فهمت الوظيفة كلها. ممكن تشرحها مرة تانية لو سمحت؟', 'p'],
    ['In der Pause lernen mein *Mitschüler* und ich oft zusammen für die nächste *Klassenarbeit*.', 'بالاستراحة أنا وزميلي بالصف كتير مندرس سوا للامتحان الجاي.', 's'],
    ['Wir sollen ein *Referat* über Arbeitssicherheit *halten*. Wollen wir die Themen aufteilen?', 'المطلوب نقدم عرض عن السلامة بالعمل. بدنا نقسم المواضيع؟', 'x'],
    ['*Ich finde es gut, dass* wir in der Berufsschule auch Deutsch *haben*, denn die Fachsprache ist schwer.', 'بلاقي منيح إنو عنا كمان ألماني بالمدرسة المهنية، لأنو لغة الاختصاص صعبة.', 'o'],
    ['Ich war letzte Woche krank und habe zwei Stunden *verpasst*. Können Sie mir die Unterlagen geben?', 'كنت مريض الأسبوع الماضي وفاتوني حصتين. ممكن تعطيني الأوراق؟', 'p'],
    ['*Während* die anderen schon fertig *sind*, brauche ich oft mehr Zeit, *weil* ich jeden Fachbegriff erst *nachschlagen muss*.', 'بينما الباقيين بيكونوا خلصوا، أنا غالباً بحتاج وقت أكتر لأنو لازم دوّر عكل مصطلح بالأول.', 'l']
  ],
  v: [
    ['der Unterricht', 'الدروس / الحصة', 'n', 'Unterricht haben'],
    ['die Hausaufgabe, -n', 'الوظيفة / الواجب', 'n', 'Hausaufgaben machen / abgeben'],
    ['abgeben', 'يسلّم', 'v', 'gibt ab – gab ab – hat abgegeben'],
    ['der Mitschüler, - / die Mitschülerin, -nen', 'زميل/ة بالصف', 'n', ''],
    ['die Klassenarbeit, -en', 'امتحان صفي', 'n', 'eine Klassenarbeit schreiben'],
    ['ein Referat halten', 'يقدم عرض', 'x', 'ein Referat über + Akk'],
    ['verpassen', 'يفوّت', 'v', 'den Unterricht / den Bus verpassen'],
    ['nachschlagen', 'يدور بالقاموس', 'v', 'ein Wort im Wörterbuch nachschlagen']
  ],
  tr: [
    ['اعمل سؤال مؤدب', 'Erklären Sie das noch einmal!', 'Könnten Sie das bitte noch einmal erklären?'],
    ['استعمل während', 'Ich arbeite. Mein Kollege lernt.', 'Während ich arbeite, lernt mein Kollege.'],
    ['حوّل للماضي (Präteritum)', 'Wir müssen ein Referat halten.', 'Wir mussten ein Referat halten.']
  ],
  qa: [
    ['Welches Fach gefällt dir am besten?', 'Am besten gefällt mir Mathe, weil ich gern Probleme löse.'],
    ['Was machst du, wenn du etwas nicht verstehst?', 'Ich frage den Lehrer oder einen Mitschüler, und zu Hause sehe ich mir ein Video dazu an.'],
    ['Lernst du lieber allein oder in einer Gruppe?', 'In einer Gruppe, weil wir uns gegenseitig erklären können.']
  ],
  dlg: { title: 'Nach dem Unterricht', lines: [
    ['Schülerin', 'Herr Braun, haben Sie kurz Zeit?', 'أستاذ براون، عندك دقيقة؟'],
    ['Lehrer', 'Ja, natürlich. Worum geht es?', 'إي طبعاً. شو الموضوع؟'],
    ['Schülerin', 'Ich habe die Aufgabe zur Buchhaltung nicht verstanden. Was genau sollen wir machen?', 'ما فهمت وظيفة المحاسبة. شو بالزبط لازم نعمل؟'],
    ['Lehrer', 'Sie sollen die Rechnungen sortieren und eine Tabelle erstellen. Schauen Sie mal, so …', 'لازم ترتبي الفواتير وتعملي جدول. شوفي، هيك…'],
    ['Schülerin', 'Ah, jetzt ist es klar. Darf ich Ihnen eine E-Mail schreiben, falls ich noch Fragen habe?', 'آه، هلأ واضح. بسمحلي ابعتلك إيميل إذا كان عندي أسئلة؟'],
    ['Lehrer', 'Gern.', 'أكيد.']
  ], q: [
    ['شو المطلوب بالوظيفة؟', ['كتابة نص', 'ترتيب الفواتير وعمل جدول', 'قراءة كتاب'], 1],
    ['كيف رح تسأل إذا عندها أسئلة؟', ['بالتلفون', 'بالإيميل', 'بالحصة الجاية'], 1]
  ] },
  task: { type: 'short', ar: 'اطلب من أستاذك بلطف يشرحلك شي ما فهمته، واسأل عن الموعد النهائي وطريقة التسليم.', hints: ['Entschuldigung, ich habe … nicht verstanden.', 'Könnten Sie …?', 'Bis wann …?', 'Sollen wir … per E-Mail …?'] }
},
{
  key: 'pruefung', title: 'الامتحانات والعلامات', de: 'Prüfungen & Noten',
  goal: 'تحكي عن التحضير للامتحانات والنتائج، وتعبّر عن الندم بـ Konjunktiv II بالماضي.',
  s: [
    ['Nächste Woche schreiben wir die *Zwischenprüfung*, und ich bin ziemlich nervös.', 'الأسبوع الجاي عنا امتحان نص المدة وأنا متوتر كتير.', 's'],
    ['Ich habe in der Klassenarbeit eine Zwei bekommen, das ist eine gute *Note*.', 'أخدت بالامتحان علامة 2، وهي علامة منيحة.', 's', 'بألمانيا 1 = أحسن علامة و6 = أسوأ علامة.'],
    ['Wie *bereitest* du dich *auf* Prüfungen *vor*?', 'كيف بتحضّر حالك للامتحانات؟', 'q'],
    ['Ich mache mir einen Lernplan und wiederhole jeden Tag ein bisschen, *statt* alles am letzten Abend *zu* lernen.', 'بعمل خطة دراسة وبراجع كل يوم شوي بدل ما ادرس كل شي بآخر ليلة.', 'a'],
    ['Leider bin ich durch die Prüfung *gefallen*, aber ich darf sie im Herbst *wiederholen*.', 'للأسف رسبت بالامتحان بس مسموحلي عيده بالخريف.', 'p'],
    ['*Obwohl* ich viel *gelernt hatte*, war ich in der mündlichen Prüfung sehr aufgeregt.', 'رغم إني كنت دارس كتير، كنت كتير متوتر بالامتحان الشفهي.', 'c'],
    ['*Ich glaube*, Noten sagen nicht alles über einen Menschen *aus*.', 'بعتقد إنو العلامات ما بتحكي كل شي عن الإنسان.', 'o'],
    ['*Drück mir die Daumen!* Morgen ist die Abschlussprüfung.', 'ادعيلي! بكرا الامتحان النهائي.', 'x', 'Daumen drücken = يتمنى التوفيق لحدا'],
    ['Hast du die Prüfung *bestanden*? – Ja, mit „sehr gut“!', 'نجحت بالامتحان؟ – إي، بامتياز!', 'q'],
    ['*Hätte* ich früher mit dem Lernen *angefangen*, *wäre* ich nicht so gestresst *gewesen*, aber zum Glück hat am Ende alles *geklappt*.', 'لو بلشت ادرس أبكر ما كنت انضغطت هالقد، بس لحسن الحظ بالآخر كل شي زبط.', 'l', 'Konjunktiv II بالماضي: hätte/wäre + Partizip II'],
  ],
  v: [
    ['die Prüfung, -en', 'الامتحان', 'n', 'eine Prüfung machen / bestehen'],
    ['bestehen', 'ينجح (بامتحان)', 'v', 'besteht – bestand – hat bestanden'],
    ['durchfallen', 'يرسب', 'v', 'fällt durch – fiel durch – ist durchgefallen'],
    ['die Note, -n', 'العلامة', 'n', 'eine gute Note bekommen'],
    ['mündlich / schriftlich', 'شفهي / كتابي', 'adj', 'die mündliche Prüfung'],
    ['sich vorbereiten auf + Akk', 'يحضّر حاله لـ', 'v', 'sich auf die Prüfung vorbereiten'],
    ['Daumen drücken', 'يتمنى التوفيق لحدا', 'x', 'Ich drücke dir die Daumen!'],
    ['klappen', 'يزبط / ينجح', 'v', 'Hat alles geklappt?']
  ],
  tr: [
    ['Konjunktiv II بالماضي (ندم)', 'Ich habe nicht genug gelernt.', 'Hätte ich nur mehr gelernt!'],
    ['استعمل statt … zu', 'Ich lerne jeden Tag. Ich lerne nicht alles am Ende.', 'Ich lerne jeden Tag, statt alles am Ende zu lernen.'],
    ['اربط بـ obwohl (Plusquamperfekt)', 'Ich hatte viel gelernt. Ich war nervös.', 'Obwohl ich viel gelernt hatte, war ich nervös.']
  ],
  qa: [
    ['Wie bereitest du dich auf die B1-Prüfung vor?', 'Ich lerne jeden Tag neue Sätze, höre Podcasts und übe Sprechen mit einem Freund.'],
    ['Was machst du gegen Prüfungsangst?', 'Ich schlafe genug, atme tief und denke positiv.'],
    ['Welche Prüfung war für dich am schwersten?', 'Am schwersten war die Führerscheinprüfung, weil die Fragen auf Deutsch waren.']
  ],
  dlg: { title: 'Nach der Prüfung', lines: [
    ['Mia', 'Und? Wie ist es gelaufen?', 'هاه؟ كيف مشي الحال؟'],
    ['Hassan', 'Der schriftliche Teil war okay, aber im mündlichen Teil hatte ich plötzlich einen Blackout.', 'الجزء الكتابي كان مقبول، بس بالشفهي فجأة نسيت كل شي.'],
    ['Mia', 'Oh nein! Und was hast du dann gemacht?', 'لا! وشو عملت وقتها؟'],
    ['Hassan', 'Ich habe gesagt: Moment, ich muss kurz überlegen. Dann ging es wieder.', 'قلت: لحظة، لازم فكّر شوي. وبعدين رجعت مشيت.'],
    ['Mia', 'Super Strategie! Wann bekommst du das Ergebnis?', 'استراتيجية ممتازة! إمتى بتطلع النتيجة؟'],
    ['Hassan', 'In zwei Wochen. Drück mir die Daumen!', 'بعد أسبوعين. ادعيلي!']
  ], q: [
    ['وين صارت المشكلة مع حسن؟', ['بالجزء الكتابي', 'بالجزء الشفهي', 'بالسماع'], 1],
    ['إمتى النتيجة؟', ['بكرا', 'بعد أسبوعين', 'بعد شهر'], 1]
  ] },
  task: { type: '60s', ar: 'احكي عن امتحان مهم عملته: شو كان، كيف حضّرت، كيف حسيت، وشو كنت عملت بشكل مختلف (Hätte ich …).', hints: ['Vor … Jahren habe ich … gemacht.', 'Ich habe mich so vorbereitet: …', 'Ich war …', 'Hätte ich …, wäre …'] }
},
{
  key: 'nachfragen', title: 'الاستفسار وشرح الصعوبات', de: 'Nachfragen & Schwierigkeiten erklären',
  goal: 'تسأل عن معنى كلمة، تتأكد إنك فهمت، وتشرح شو صعب عليك (nicht … sondern، brauchen … zu).',
  s: [
    ['Entschuldigung, was *bedeutet* das Wort „Frist“?', 'عفواً، شو معنى كلمة «Frist»؟', 'q'],
    ['Eine *Frist* ist der Zeitpunkt, bis zu dem man etwas *erledigt haben muss*.', 'المهلة هي الوقت اللي لازم تكون خلصت فيه الشي لحده.', 'a'],
    ['Ich habe Sie gut gehört, das Problem ist *nicht* die Aussprache, *sondern* das Wort ist mir neu.', 'سمعتك منيح، المشكلة مش باللفظ، الكلمة جديدة عليّ.', 'c', 'nicht … sondern = مش … بل'],
    ['*Meinen* Sie damit, *dass* wir die Aufgabe allein machen *sollen*?', 'قصدك إنو لازم نعمل الوظيفة لحالنا؟', 'q'],
    ['Mir *fällt* das Hörverstehen noch *schwer*, besonders wenn mehrere Leute gleichzeitig sprechen.', 'لسا السمع صعب عليّ، خصوصاً لما كذا شخص يحكوا بنفس الوقت.', 'p'],
    ['Ich verstehe fast alles, *aber* beim Sprechen *fehlen* mir oft die richtigen Wörter.', 'بفهم تقريباً كل شي، بس وأنا عم احكي غالباً بتنقصني الكلمات المناسبة.', 's'],
    ['*Könnten* Sie mir ein Beispiel *geben*? Dann verstehe ich es bestimmt besser.', 'ممكن تعطيني مثال؟ هيك أكيد بفهمها أحسن.', 'x'],
    ['*Ich finde*, man sollte keine Angst vor Fehlern haben, *denn* aus Fehlern *lernt* man am meisten.', 'بلاقي إنو الواحد ما لازم يخاف من الغلط، لأنو من الغلط بيتعلم أكتر شي.', 'o'],
    ['Du *brauchst* nicht jedes Wort *zu* verstehen. Wichtig ist, dass du die Hauptaussage verstehst.', 'مش لازم تفهم كل كلمة. المهم تفهم الفكرة الأساسية.', 'x', 'brauchen nicht … zu = مش لازم'],
    ['Ich bin nicht sicher, *ob* ich alles richtig *verstanden habe*. Darf ich kurz *zusammenfassen*, was Sie gesagt haben?', 'مش متأكد إذا فهمت كل شي صح. بسمحلي لخّص بسرعة شو قلت؟', 'l']
  ],
  v: [
    ['bedeuten', 'يعني', 'v', 'Was bedeutet …?'],
    ['die Frist, -en', 'المهلة', 'n', 'eine Frist einhalten'],
    ['schwerfallen + Dat', 'يكون صعب على', 'v', 'Das fällt mir schwer.'],
    ['gleichzeitig', 'بنفس الوقت', 'adv', ''],
    ['die Hauptaussage, -n', 'الفكرة الأساسية', 'n', ''],
    ['zusammenfassen', 'يلخّص', 'v', 'fasst zusammen – fasste zusammen – hat zusammengefasst'],
    ['meinen', 'يقصد', 'v', 'Was meinen Sie damit?']
  ],
  tr: [
    ['استعمل brauchen nicht … zu', 'Du musst nicht alles aufschreiben.', 'Du brauchst nicht alles aufzuschreiben.'],
    ['استعمل nicht … sondern', 'Das Problem ist die Grammatik? – Nein, der Wortschatz.', 'Das Problem ist nicht die Grammatik, sondern der Wortschatz.'],
    ['حوّلها لسؤال تأكيد', 'Wir sollen allein arbeiten.', 'Meinen Sie, dass wir allein arbeiten sollen?']
  ],
  qa: [
    ['Was fällt dir beim Deutschlernen am schwersten?', 'Am schwersten fällt mir das Sprechen, weil ich zu lange über die Grammatik nachdenke.'],
    ['Was machst du, wenn du ein Wort nicht kennst?', 'Ich erkläre es mit anderen Wörtern oder frage: Wie sagt man das auf Deutsch?'],
    ['Hast du Angst, Fehler zu machen?', 'Früher ja, aber jetzt nicht mehr. Fehler gehören zum Lernen.']
  ],
  dlg: { title: 'Im Kurs', lines: [
    ['Lehrerin', 'Bitte bearbeitet die Aufgabe in Partnerarbeit bis zur Pause.', 'اشتغلوا عالمهمة بشكل ثنائي لحد الاستراحة.'],
    ['Tarek', 'Entschuldigung, was bedeutet „Partnerarbeit“ genau?', 'عفواً، شو يعني Partnerarbeit بالزبط؟'],
    ['Lehrerin', 'Das heißt, ihr arbeitet zu zweit zusammen.', 'يعني بتشتغلوا كل اتنين سوا.'],
    ['Tarek', 'Ach so. Und meinen Sie mit „bis zur Pause“ halb elf?', 'آه هيك. وقصدك بـ «لحد الاستراحة» الساعة عشرة ونص؟'],
    ['Lehrerin', 'Genau. Danach besprechen wir die Lösungen.', 'بالزبط. بعدها مناقش الحلول.']
  ], q: [
    ['شو يعني Partnerarbeit؟', ['شغل فردي', 'شغل كل اتنين سوا', 'شغل بالبيت'], 1],
    ['شو رح يصير بعد الاستراحة؟', ['امتحان', 'مناقشة الحلول', 'فرصة'], 1]
  ] },
  task: { type: 'connected', ar: 'اشرح لصاحب ألماني شو أصعب شي عليك بتعلم الألماني وشو استراتيجياتك. استعمل nicht … sondern وbrauchen … zu مرة على الأقل.', hints: ['Mir fällt … schwer.', 'Das Problem ist nicht …, sondern …', 'Ich brauche nicht …, aber …', 'Deshalb …'] }
}
];
