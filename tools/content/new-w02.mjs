// New lessons — Week 2 (housing). Sentence tuple: [de, ar, fn, note?]
// fn: s statement, c connected, q question, a answer, o opinion, p problem, x expression, l long
export default [
{
  key: 'wg', title: 'غرفة بسكن مشترك (WG)', de: 'Ein WG-Zimmer suchen',
  goal: 'تعرّف عن حالك بمقابلة سكن مشترك وتسأل عن القواعد والتكاليف.',
  s: [
    ['Ich suche ab *März* ein *WG-Zimmer* in der Nähe der Uni.', 'عم دور على غرفة بسكن مشترك قريب من الجامعة من أول آذار.', 's'],
    ['Das Zimmer ist *möbliert* und kostet 420 Euro *warm*.', 'الغرفة مفروشة وسعرها 420 يورو مع التدفئة والمصاريف.', 's', 'warm = الإيجار شامل التدفئة والمصاريف الإضافية.'],
    ['Wie viele Leute *wohnen* in der WG, und wie *teilt* ihr die Hausarbeit?', 'كم شخص ساكن بالسكن، وكيف بتقسموا شغل البيت؟', 'q'],
    ['Wir haben einen *Putzplan*, *damit* jeder mal die Küche und das Bad *putzt*.', 'عنا جدول تنضيف لحتى كل واحد ينضف المطبخ والحمام بدوره.', 'a'],
    ['*Falls* das Zimmer noch *frei ist*, würde ich es mir gern am Wochenende *ansehen*.', 'إذا الغرفة لسا فاضية بحب شوفها بنهاية الأسبوع.', 'c'],
    ['Ich bin eher ruhig, *aber* ich koche gern mal mit anderen zusammen.', 'أنا هادي نوعاً ما، بس بحب أطبخ أحياناً مع غيري.', 's'],
    ['*Ich finde* eine WG besser als eine eigene Wohnung, *weil* man nicht so allein *ist* und Geld *spart*.', 'بلاقي السكن المشترك أحسن من شقة لحالي لأنو الواحد ما بيكون وحيد وبيوفّر مصاري.', 'o'],
    ['Das Problem ist, *dass* die Kaution drei Monatsmieten *beträgt*. Kann ich sie in Raten zahlen?', 'المشكلة إنو التأمين بيساوي إيجار تلات شهور. بقدر ادفعه على دفعات؟', 'p'],
    ['Wir suchen jemanden, der *Lust auf* gemeinsame Abende *hat*.', 'عم ندور على حدا عنده رغبة بسهرات مشتركة.', 'x', 'Lust haben auf + Akk = عنده رغبة بـ'],
    ['*Sobald* ich eine Zusage *bekomme*, *kündige* ich mein altes Zimmer, *damit* ich nicht doppelt Miete zahlen *muss*.', 'أول ما يجيني قبول بلغي غرفتي القديمة لحتى ما ادفع إيجارين.', 'l']
  ],
  v: [
    ['die WG, -s (Wohngemeinschaft)', 'سكن مشترك', 'n', 'in einer WG wohnen'],
    ['möbliert', 'مفروش', 'adj', 'ein möbliertes Zimmer'],
    ['die Warmmiete / die Kaltmiete', 'الإيجار مع / بدون المصاريف', 'n', 'Wie hoch ist die Kaltmiete?'],
    ['die Kaution, -en', 'مبلغ التأمين', 'n', 'die Kaution zahlen / zurückbekommen'],
    ['der Putzplan, -pläne', 'جدول التنضيف', 'n', 'sich an den Putzplan halten'],
    ['sich etwas ansehen', 'يعاين / يتفرج على شي', 'v', 'sieht an – sah an – hat angesehen'],
    ['die Zusage, -n / die Absage, -n', 'موافقة / رفض', 'n', 'eine Zusage bekommen'],
    ['kündigen + Akk', 'يلغي (عقد)', 'v', 'den Vertrag kündigen']
  ],
  tr: [
    ['حوّلها لسؤال مؤدب بـ Könnte', 'Ich will das Zimmer sehen.', 'Könnte ich mir das Zimmer ansehen?'],
    ['اربط الجملتين بـ sobald', 'Ich habe die Zusage. Ich ziehe ein.', 'Sobald ich die Zusage habe, ziehe ich ein.'],
    ['غيّر الفاعل إلى wir', 'Ich suche ein ruhiges Zimmer.', 'Wir suchen ein ruhiges Zimmer.']
  ],
  qa: [
    ['Warum möchtest du in einer WG wohnen?', 'Ich möchte in einer WG wohnen, weil ich nicht allein sein will und weil es günstiger ist.'],
    ['Was machst du in deiner Freizeit?', 'In meiner Freizeit koche ich gern und treffe Freunde.'],
    ['Wie lange möchtest du bleiben?', 'Ich möchte mindestens ein Jahr bleiben, weil meine Ausbildung drei Jahre dauert.']
  ],
  dlg: { title: 'WG-Casting', lines: [
    ['Lena', 'Hallo, schön, dass du da bist! Erzähl doch mal kurz von dir.', 'أهلا، حلو إنك إجيت! احكيلنا شوي عن حالك.'],
    ['Omar', 'Ich heiße Omar, bin 24 und mache eine Ausbildung als Mechatroniker.', 'اسمي عمر، عمري 24 وعم أعمل تدريب مهني كميكاترونيك.'],
    ['Lena', 'Wir sind zu dritt und haben einen Putzplan. Ist das okay für dich?', 'نحنا تلاتة وعنا جدول تنضيف. مناسب إلك؟'],
    ['Omar', 'Klar. Ist die Miete warm oder kalt?', 'أكيد. الإيجار شامل المصاريف ولا بدون؟'],
    ['Lena', 'Warm, 420 Euro. Internet ist auch dabei.', 'شامل، 420 يورو. والإنترنت كمان ضمنه.'],
    ['Omar', 'Super. Falls ihr euch für mich entscheidet, könnte ich ab März einziehen.', 'ممتاز. إذا قررتوا تختاروني بقدر انتقل من آذار.']
  ], q: [
    ['شو بيعمل عمر؟', ['طالب جامعة', 'تدريب مهني ميكاترونيك', 'بائع'], 1],
    ['شو داخل بالإيجار كمان؟', ['الإنترنت', 'الكهربا بس', 'ولا شي'], 0]
  ] },
  task: { type: 'connected', ar: 'عرّف عن حالك بـ WG-Casting: مين إنت، شو بتشتغل، كيف بتعيش بالبيت، وليش بدك هالغرفة (3–4 جمل مربوطة).', hints: ['Ich heiße … und arbeite / lerne …', 'Ich bin eher …', 'Ich suche ein Zimmer, weil …', 'Falls …, könnte ich …'] }
},
{
  key: 'besichtigung', title: 'معاينة شقة وعقد الإيجار', de: 'Wohnungsbesichtigung & Mietvertrag',
  goal: 'تتصل بخصوص شقة، تسأل عن التكاليف والشروط، وتفهم عقد الإيجار.',
  s: [
    ['Ich *rufe wegen* der Wohnungsanzeige *an*. Ist die Wohnung noch *zu haben*?', 'عم اتصل بخصوص إعلان الشقة. الشقة لسا متاحة؟', 'q'],
    ['Die Besichtigung *findet* am Donnerstag um 18 Uhr *statt*.', 'المعاينة رح تكون الخميس الساعة 6 المسا.', 's'],
    ['Wie hoch *sind* die Nebenkosten, und *sind* Strom und Heizung schon *dabei*?', 'قديش المصاريف الإضافية، والكهربا والتدفئة داخلين فيها؟', 'q'],
    ['Die Heizung *ist* im Preis *enthalten*, den Strom zahlen Sie extra.', 'التدفئة داخلة بالسعر، والكهربا بتدفعها لحالك.', 'a'],
    ['Die Wohnung liegt *zwar* im vierten Stock, *aber* es gibt einen Aufzug.', 'الشقة صحيح بالطابق الرابع، بس في مصعد.', 'c'],
    ['Der Vermieter möchte eine *Schufa-Auskunft* und die letzten drei *Gehaltsabrechnungen* sehen.', 'صاحب البيت بدو يشوف تقرير الشوفا وآخر تلات قسائم راتب.', 's', 'Schufa = تقرير الجدارة الائتمانية بألمانيا.'],
    ['*Meiner Meinung nach* ist eine helle Wohnung wichtiger als eine große.', 'برأيي الشقة المنورة أهم من الشقة الكبيرة.', 'o'],
    ['Im Mietvertrag steht, *dass* die Kündigungsfrist drei Monate *beträgt*.', 'مكتوب بعقد الإيجار إنو مهلة الإلغاء تلات شهور.', 'x'],
    ['Das Bad hat kein Fenster. *Könnte* man vielleicht einen Lüfter *einbauen*?', 'الحمام ما فيه شباك. ممكن يركبوا مروحة تهوية؟', 'p'],
    ['*Bevor* ich den Vertrag *unterschreibe*, möchte ich wissen, *ob* ich Haustiere haben *darf* und *wann* ich einziehen *kann*.', 'قبل ما وقّع العقد بدي اعرف إذا مسموحلي حيوانات أليفة وإمتى بقدر انتقل.', 'l']
  ],
  v: [
    ['die Besichtigung, -en', 'معاينة الشقة', 'n', 'zur Besichtigung kommen'],
    ['die Nebenkosten (Pl.)', 'المصاريف الإضافية', 'n', 'Nebenkosten zahlen'],
    ['der Vermieter, - / die Vermieterin, -nen', 'صاحب/ة البيت (المؤجر)', 'n', ''],
    ['der Mietvertrag, -verträge', 'عقد الإيجار', 'n', 'einen Mietvertrag unterschreiben'],
    ['die Kündigungsfrist, -en', 'مهلة إنهاء العقد', 'n', 'Die Kündigungsfrist beträgt drei Monate.'],
    ['einziehen / ausziehen', 'ينتقل لـ / يطلع من (سكن)', 'v', 'zieht ein – zog ein – ist eingezogen'],
    ['betragen', 'يبلغ / يساوي', 'v', 'beträgt – betrug – hat betragen']
  ],
  tr: [
    ['اعمل سؤال غير مباشر بـ ob', 'Darf ich Haustiere haben?', 'Ich möchte wissen, ob ich Haustiere haben darf.'],
    ['استعمل zwar … aber', 'Die Wohnung ist klein. Sie ist sehr günstig.', 'Die Wohnung ist zwar klein, aber sehr günstig.'],
    ['حوّلها لـ Passiv', 'Man zahlt den Strom extra.', 'Der Strom wird extra bezahlt.']
  ],
  qa: [
    ['Was ist dir bei einer Wohnung am wichtigsten?', 'Am wichtigsten ist mir, dass die Wohnung ruhig und hell ist.'],
    ['Welche Fragen stellst du bei einer Besichtigung?', 'Ich frage nach den Nebenkosten, nach der Kaution und wann ich einziehen kann.'],
    ['Wohnst du lieber im Zentrum oder am Stadtrand?', 'Ich wohne lieber am Stadtrand, weil die Mieten dort niedriger sind.']
  ],
  dlg: { title: 'Am Telefon mit der Hausverwaltung', lines: [
    ['Hausverwaltung', 'Hausverwaltung Klein, guten Tag.', 'إدارة عقارات كلاين، نهارك سعيد.'],
    ['Sara', 'Guten Tag, ich rufe wegen der Zweizimmerwohnung in der Lindenstraße an.', 'نهارك سعيد، عم اتصل بخصوص شقة الغرفتين بشارع ليندن.'],
    ['Hausverwaltung', 'Die ist noch frei. Die Kaltmiete beträgt 650 Euro, plus 180 Euro Nebenkosten.', 'لسا فاضية. الإيجار بدون مصاريف 650 يورو وفوقهم 180 مصاريف إضافية.'],
    ['Sara', 'Wann könnte ich sie besichtigen?', 'إمتى بقدر عاينها؟'],
    ['Hausverwaltung', 'Am Donnerstag um 18 Uhr. Bringen Sie bitte Ihre Gehaltsabrechnungen mit.', 'الخميس الساعة 6. جيبي معك قسائم الراتب لو سمحتي.']
  ], q: [
    ['قديش الإيجار الكلي؟', ['650 يورو', '830 يورو', '180 يورو'], 1],
    ['شو لازم تجيب سارة؟', ['هويتها بس', 'قسائم الراتب', 'عقد الشغل'], 1]
  ] },
  task: { type: 'short', ar: 'اتصل بصاحب شقة: عرّف حالك، اسأل 3 أسئلة (المصاريف، التأمين، موعد الانتقال) واطلب موعد معاينة.', hints: ['Ich rufe wegen … an.', 'Wie hoch …?', 'Ab wann …?', 'Könnte ich die Wohnung … besichtigen?'] }
},
{
  key: 'hausordnung', title: 'نظام البناية والجيران', de: 'Hausordnung & Nachbarn',
  goal: 'تفهم قواعد البناية وتحل مشكلة مع جار بلطف.',
  s: [
    ['Laut Hausordnung ist zwischen 22 und 6 Uhr *Nachtruhe*.', 'حسب نظام البناية في هدوء ليلي من الساعة 10 لـ 6.', 's'],
    ['Den Müll *müssen* wir *trennen*: Papier, Plastik, Bio und Restmüll.', 'لازم نفرز الزبالة: ورق، بلاستيك، عضوي، وباقي النفايات.', 's'],
    ['Entschuldigung, *könnten* Sie die Musik bitte etwas *leiser machen*? Ich muss morgen früh aufstehen.', 'عفواً، ممكن توطّي صوت الموسيقى شوي؟ لازم قوم بكرا بدري.', 'p'],
    ['*Wer* ist diese Woche mit dem Treppenhaus *dran*?', 'مين دوره هالأسبوع بتنضيف الدرج؟', 'q', 'dran sein = يكون دوره'],
    ['Ich glaube, Frau Becker aus dem zweiten Stock ist diesmal *dran*.', 'بعتقد إنو دور السيدة بيكر من الطابق التاني هالمرة.', 'a'],
    ['Mein Nachbar hat ein Paket für mich *angenommen*, *während* ich bei der Arbeit *war*.', 'جاري استلم عني طرد وأنا بالشغل.', 'c'],
    ['Wir feiern am Samstag eine kleine Party und möchten uns schon jetzt für den Lärm *entschuldigen*.', 'عاملين حفلة صغيرة السبت وبدنا نعتذر من هلأ عن الضجة.', 'x'],
    ['*Ich finde es wichtig, dass* man im Haus *Rücksicht auf* die anderen *nimmt*.', 'بلاقي مهم إنو الواحد يراعي غيره بالبناية.', 'o', 'Rücksicht nehmen auf + Akk = يراعي'],
    ['Die Fahrräder dürfen *nicht* im Flur stehen, *sondern* gehören in den Keller.', 'البسكليتات ممنوع تكون بالممر، مكانها بالقبو.', 'c'],
    ['*Solange* sich alle an die Regeln *halten*, gibt es keinen Streit, aber wenn jemand ständig laut *ist*, sollte man zuerst mit ihm reden.', 'طالما الكل ملتزم بالقواعد ما في مشاكل، بس إذا حدا دايماً عالي صوته لازم الواحد يحكي معه أول شي.', 'l']
  ],
  v: [
    ['die Hausordnung, -en', 'نظام البناية', 'n', 'sich an die Hausordnung halten'],
    ['die Nachtruhe / die Ruhezeit, -en', 'وقت الهدوء', 'n', ''],
    ['den Müll trennen', 'يفرز الزبالة', 'x', 'der Restmüll, die Biotonne'],
    ['das Treppenhaus, -häuser', 'الدرج / بيت الدرج', 'n', 'das Treppenhaus putzen'],
    ['Rücksicht nehmen auf + Akk', 'يراعي', 'x', 'nimmt – nahm – hat genommen'],
    ['sich halten an + Akk', 'يلتزم بـ', 'v', 'sich an Regeln halten'],
    ['dran sein', 'يكون دوره', 'x', 'Du bist dran.']
  ],
  tr: [
    ['اربط بـ solange', 'Es ist ruhig. Ich kann gut schlafen.', 'Solange es ruhig ist, kann ich gut schlafen.'],
    ['استعمل nicht … sondern', 'Der Müll gehört in den Flur? – Nein, in die Tonne.', 'Der Müll gehört nicht in den Flur, sondern in die Tonne.'],
    ['اطلب بأدب أكتر', 'Machen Sie die Musik leiser!', 'Könnten Sie die Musik bitte etwas leiser machen?']
  ],
  qa: [
    ['Hast du gute Nachbarn?', 'Ja, meine Nachbarn sind sehr nett. Wir grüßen uns immer und helfen uns manchmal.'],
    ['Was machst du, wenn der Nachbar laut ist?', 'Zuerst klingle ich und spreche freundlich mit ihm. Wenn das nicht hilft, informiere ich den Vermieter.'],
    ['Wie trennt man in Deutschland den Müll?', 'Man trennt Papier, Plastik, Glas, Biomüll und Restmüll.']
  ],
  dlg: { title: 'Ärger im Treppenhaus', lines: [
    ['Herr Wolf', 'Guten Abend. Entschuldigen Sie, ist das Ihr Fahrrad im Flur?', 'مسا الخير. عفواً، هاد بسكليتك بالممر؟'],
    ['Karim', 'Ja, das ist meins. Stört es Sie?', 'إي، هاد إلي. مزعجك؟'],
    ['Herr Wolf', 'Ehrlich gesagt ja. Man kommt mit dem Kinderwagen kaum vorbei.', 'بصراحة إي. بالكاد الواحد بيقطع بعربية الولد.'],
    ['Karim', 'Oh, das tut mir leid. Ich stelle es sofort in den Keller.', 'آه، آسف. هلأ بحطه بالقبو.'],
    ['Herr Wolf', 'Danke, das ist sehr nett von Ihnen.', 'شكراً، هاد كتير لطف منك.']
  ], q: [
    ['ليش منزعج السيد فولف؟', ['من الموسيقى', 'من البسكليت بالممر', 'من الزبالة'], 1],
    ['شو بيعمل كريم؟', ['بيحط البسكليت بالقبو', 'بيعصب', 'بيتصل بصاحب البيت'], 0]
  ] },
  task: { type: 'connected', ar: 'جارك بيعمل ضجة كل ليلة. احكي معه بلطف: اشرح المشكلة، قلّو ليش مهم إلك، واقترح حل.', hints: ['Entschuldigung, dass ich störe, aber …', 'Ich muss jeden Tag früh …', 'Könnten Sie vielleicht …?', 'Wie wäre es, wenn …?'] }
},
{
  key: 'reparatur', title: 'التصليحات وصاحب البيت', de: 'Reparaturen & Vermieter',
  goal: 'تبلّغ عن عطل بالشقة، تتفق على موعد تصليح، وتطالب بحقك بأدب.',
  s: [
    ['Seit gestern *funktioniert* die Heizung nicht mehr, und es ist sehr kalt in der Wohnung.', 'من مبارح التدفئة ما عم تشتغل والبيت كتير برد.', 'p'],
    ['Im Bad *tropft* der Wasserhahn, und an der Wand ist *Schimmel*.', 'بالحمام الحنفية عم تنقّط وعالحيط في عفن.', 's'],
    ['*Wann* kann der Handwerker *vorbeikommen*?', 'إمتى بيقدر يمرق المصلّح؟', 'q'],
    ['Der Hausmeister kommt morgen zwischen 8 und 12 Uhr. Sind Sie da zu Hause?', 'ناطور البناية جاي بكرا بين 8 و12. رح تكون بالبيت؟', 'a'],
    ['*Falls* ich nicht da *bin*, kann meine Nachbarin den Schlüssel *übergeben*.', 'إذا ما كنت موجود جارتي بتقدر تسلّمه المفتاح.', 'c'],
    ['Ich habe den Schaden *fotografiert*, *damit* der Vermieter *sieht*, wie schlimm es ist.', 'صوّرت الضرر لحتى صاحب البيت يشوف قديش الوضع سيء.', 'c'],
    ['Ich finde, der Vermieter *müsste* sich schneller um solche Probleme *kümmern*.', 'بلاقي إنو صاحب البيت لازم يهتم بهالمشاكل أسرع.', 'o'],
    ['Ich habe schon dreimal angerufen, aber niemand hat sich *gemeldet*. Ich schreibe jetzt eine E-Mail.', 'اتصلت تلات مرات وما حدا رد. هلأ رح اكتب إيميل.', 'p'],
    ['Die Reparatur *wird* vom Vermieter *bezahlt*.', 'التصليح على حساب صاحب البيت.', 'x'],
    ['*Sobald* die Heizung wieder *läuft*, melde ich mich bei Ihnen, aber *wenn* bis Freitag nichts *passiert*, muss ich leider die Miete *mindern*.', 'أول ما ترجع التدفئة تشتغل بخبرك، بس إذا لحد الجمعة ما صار شي للأسف رح اضطر نزّل الإيجار.', 'l', 'die Miete mindern = تخفيض الإيجار قانونياً بسبب عيب بالشقة.']
  ],
  v: [
    ['die Heizung, -en', 'التدفئة', 'n', 'Die Heizung ist kaputt.'],
    ['der Schimmel', 'العفن', 'n', 'Schimmel an der Wand'],
    ['der Handwerker, -', 'المصلّح / الحرفي', 'n', 'einen Handwerker schicken'],
    ['der Hausmeister, -', 'ناطور / مسؤول البناية', 'n', ''],
    ['der Schaden, Schäden', 'الضرر', 'n', 'einen Schaden melden'],
    ['sich kümmern um + Akk', 'يهتم بـ', 'v', 'sich um die Reparatur kümmern'],
    ['sich melden bei + Dat', 'يتواصل / يرد', 'v', 'Bitte melden Sie sich bei mir.']
  ],
  tr: [
    ['اربطها بـ sobald', 'Der Handwerker kommt. Ich rufe dich an.', 'Sobald der Handwerker kommt, rufe ich dich an.'],
    ['حوّلها لـ Passiv', 'Der Vermieter repariert die Heizung.', 'Die Heizung wird vom Vermieter repariert.'],
    ['احكيها بالماضي (Perfekt)', 'Ich rufe dreimal an.', 'Ich habe dreimal angerufen.']
  ],
  qa: [
    ['Was ist in deiner Wohnung schon einmal kaputtgegangen?', 'Letzten Winter ist die Heizung kaputtgegangen. Es hat eine Woche gedauert, bis sie repariert wurde.'],
    ['Wen rufst du an, wenn etwas kaputt ist?', 'Ich rufe zuerst den Hausmeister an. Wenn er nicht kommt, schreibe ich dem Vermieter.'],
    ['Reparierst du kleine Sachen selbst?', 'Kleine Sachen repariere ich selbst, aber bei Strom oder Wasser rufe ich lieber einen Fachmann.']
  ],
  dlg: { title: 'Die Heizung ist kaputt', lines: [
    ['Mieterin', 'Guten Tag, hier ist Nour Saleh aus der Gartenstraße 5. Unsere Heizung ist seit gestern kaputt.', 'نهارك سعيد، معك نور صالح من شارع غارتن 5. تدفئتنا خربانة من مبارح.'],
    ['Hausverwaltung', 'Oh, das tut mir leid. Funktioniert das warme Wasser?', 'آه، آسفين. المي السخنة عم تشتغل؟'],
    ['Mieterin', 'Nein, auch nicht. Wir haben ein kleines Kind, deshalb ist es dringend.', 'لا، ولا هي. عنا ولد صغير، لهيك الموضوع مستعجل.'],
    ['Hausverwaltung', 'Ich schicke Ihnen morgen früh einen Techniker. Passt Ihnen acht Uhr?', 'رح ابعتلك فني بكرا الصبح. بتناسبك الساعة تمانية؟'],
    ['Mieterin', 'Ja, das passt. Vielen Dank!', 'إي، بتناسب. شكراً كتير!']
  ], q: [
    ['ليش الموضوع مستعجل؟', ['لأنو عندهم ولد صغير', 'لأنو عندهم ضيوف', 'لأنو مسافرين'], 0],
    ['إمتى جاي الفني؟', ['اليوم المسا', 'بكرا الساعة 8', 'بعد أسبوع'], 1]
  ] },
  task: { type: 'short', ar: 'اكتب إيميل قصير لصاحب البيت: شو المشكلة، من إمتى، وشو بدك منه يعمل ولحد إمتى.', hints: ['Sehr geehrte/r …', 'seit … funktioniert … nicht', 'Ich bitte Sie, … bis … zu …', 'Mit freundlichen Grüßen'] }
},
{
  key: 'umzug', title: 'النقلة والمصاريف والتسجيل', de: 'Umzug, Nebenkosten & Anmeldung',
  goal: 'تنظّم نقلة، تطلب مساعدة، وتحكي عن مشاكل المصاريف.',
  s: [
    ['Nächsten Monat *ziehen* wir *um*, und ich muss noch so viel organisieren.', 'الشهر الجاي رح ننتقل ولسا لازم رتب كتير أشيا.', 's'],
    ['Freunde helfen mir beim *Umzug*, und als Dank koche ich für alle.', 'أصحابي عم يساعدوني بالنقلة، وكشكر رح اطبخ للكل.', 's'],
    ['Hast du schon einen Transporter für Samstag *gemietet*?', 'استأجرت فان للسبت؟', 'q'],
    ['Noch nicht. Ich *brauche* keinen großen *zu* mieten, weil ich nicht viele Möbel habe.', 'لسا. ما بحتاج استأجر واحد كبير لأنو ما عندي أغراض كتير.', 'a', 'brauchen + kein/nicht + zu = مش لازم'],
    ['Nach dem Umzug muss man sich innerhalb von zwei Wochen beim Bürgeramt *anmelden*.', 'بعد النقلة لازم الواحد يسجل حالو بالبلدية خلال أسبوعين.', 'x'],
    ['Die Nebenkostenabrechnung ist dieses Jahr viel höher, *weil* die Energiepreise *gestiegen sind*.', 'فاتورة المصاريف الإضافية هالسنة أعلى بكتير لأنو أسعار الطاقة ارتفعت.', 'c'],
    ['Wir müssen 300 Euro *nachzahlen*. Das ist gerade ein großes Problem für uns. Können wir in Raten zahlen?', 'لازم ندفع 300 يورو فرق. هاد هلأ مشكلة كبيرة إلنا. بنقدر ندفع على دفعات؟', 'p'],
    ['Ich würde *lieber* etwas mehr Miete zahlen, *als* jeden Tag eine Stunde zur Arbeit *zu* fahren.', 'بفضّل ادفع إيجار أكتر شوي على إني روح كل يوم ساعة للشغل.', 'o'],
    ['Beim *Auszug* muss die Wohnung sauber sein, *sonst* bekommt man die Kaution nicht ganz zurück.', 'لما تطلع من الشقة لازم تكون نضيفة، وإلا ما بترجعلك كل التأمين.', 'c'],
    ['*Nachdem* wir alle Kartons *ausgepackt hatten*, haben wir die neuen Nachbarn kennengelernt, und jetzt fühlen wir uns hier schon richtig zu Hause.', 'بعد ما فضينا كل الكراتين تعرفنا عالجيران الجداد، وهلأ صرنا حاسين حالنا فعلاً بالبيت.', 'l']
  ],
  v: [
    ['der Umzug, Umzüge', 'النقلة (الانتقال)', 'n', 'beim Umzug helfen'],
    ['umziehen', 'ينتقل (سكن)', 'v', 'zieht um – zog um – ist umgezogen'],
    ['sich anmelden / ummelden', 'يسجل / ينقل تسجيل السكن', 'v', 'sich beim Bürgeramt anmelden'],
    ['die Abrechnung, -en', 'الكشف / الفاتورة', 'n', 'die Nebenkostenabrechnung'],
    ['nachzahlen', 'يدفع الفرق', 'v', '300 Euro nachzahlen'],
    ['in Raten zahlen', 'يدفع بالتقسيط', 'x', ''],
    ['der Karton, -s', 'كرتونة', 'n', 'Kartons packen / auspacken']
  ],
  tr: [
    ['استعمل brauchen … nicht/kein … zu', 'Ich muss kein Auto mieten.', 'Ich brauche kein Auto zu mieten.'],
    ['قارن بـ lieber … als', 'Ich zahle mehr Miete. Ich fahre nicht lange.', 'Ich zahle lieber mehr Miete, als lange zu fahren.'],
    ['Plusquamperfekt مع nachdem', 'Wir packen aus. Dann gehen wir essen.', 'Nachdem wir ausgepackt hatten, sind wir essen gegangen.']
  ],
  qa: [
    ['Wie oft bist du schon umgezogen?', 'Ich bin schon dreimal umgezogen, zweimal in Syrien und einmal in Deutschland.'],
    ['Was ist beim Umzug am anstrengendsten?', 'Am anstrengendsten finde ich das Packen und die vielen Behördengänge.'],
    ['Was hast du nach dem Umzug als Erstes gemacht?', 'Als Erstes habe ich mich beim Bürgeramt angemeldet und Internet bestellt.']
  ],
  dlg: { title: 'Hilfe beim Umzug', lines: [
    ['Jonas', 'Hey Malik, brauchst du am Samstag noch Hilfe beim Umzug?', 'هاي مالك، لسا بدك مساعدة بالنقلة السبت؟'],
    ['Malik', 'Ja, gern! Wir fangen um neun an. Kannst du so früh?', 'إي أكيد! منبلش الساعة تسعة. بتقدر بهالبكير؟'],
    ['Jonas', 'Klar. Soll ich Kartons mitbringen?', 'أكيد. بدك جيب معي كراتين؟'],
    ['Malik', 'Nein, das brauchst du nicht. Ich habe genug. Aber bring gern dein Werkzeug mit.', 'لا، ما في داعي. عندي كفاية. بس جيب عدّتك.'],
    ['Jonas', 'Mach ich. Und danach gibt es Essen, oder?', 'تمام. وبعدين في أكل، صح؟'],
    ['Malik', 'Natürlich, ich koche Kabsa für alle!', 'طبعاً، رح اطبخ كبسة للكل!']
  ], q: [
    ['شو لازم يجيب يوناس؟', ['كراتين', 'عدّته', 'أكل'], 1],
    ['إمتى بتبلش النقلة؟', ['الساعة 9', 'الساعة 12', 'المسا'], 0]
  ] },
  task: { type: '60s', ar: 'احكي 30–60 ثانية عن آخر مرة انتقلت فيها: لوين، مين ساعدك، شو كان صعب، وكيف حاسس هلأ.', hints: ['Letztes Jahr bin ich nach … umgezogen.', 'Am schwierigsten war …', 'Nachdem …, …', 'Jetzt fühle ich mich …'] }
}
];
