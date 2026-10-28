// New lessons — Week 5 (work problems), Week 6 (sport, lifestyle), Week 7 (city, weather).
export default [
{
  key: 'jobprobleme', title: 'مشاكل الشغل: تأخير، إجازة، توزيع مهام', de: 'Verspätung, Urlaub & Aufgaben',
  goal: 'تعتذر عن تأخير، تطلب إجازة، وتقترح حل لما ما بتلحق تخلّص شغل.',
  s: [
    ['Guten Morgen, Frau Lehmann. Ich komme heute leider etwa zwanzig Minuten *später*, *weil* meine S-Bahn *ausgefallen ist*.', 'صباح الخير سيدة ليمان. للأسف رح اتأخر اليوم تقريباً عشرين دقيقة لأنو القطار انلغى.', 'p'],
    ['Entschuldigen Sie bitte die *Verspätung*. Das *kommt* nicht wieder *vor*.', 'اعذروني عالتأخير. ما رح تتكرر.', 'x'],
    ['Ich *würde* gern im August zwei Wochen *Urlaub nehmen*. Wäre das möglich?', 'بحب آخد إجازة أسبوعين بآب. ممكن؟', 'q'],
    ['Grundsätzlich ja, aber *sprechen* Sie das bitte vorher mit Ihren Kollegen *ab*.', 'مبدئياً إي، بس تفاهم عالموضوع قبل مع زملائك لو سمحت.', 'a'],
    ['Wer *übernimmt* die Präsentation, und wer *kümmert sich um* die Zahlen?', 'مين بيستلم العرض، ومين بيهتم بالأرقام؟', 'q'],
    ['Ich *schaffe* den Bericht nicht bis Freitag, *denn* ich muss noch zwei andere Projekte abschließen.', 'ما رح الحق خلّص التقرير لحد الجمعة، لأنو لازم خلّص مشروعين تانيين.', 'p'],
    ['*Wie wäre es, wenn* Paul mir bei der Tabelle *hilft*? Dann werde ich bis Donnerstag fertig.', 'شو رأيك لو بول ساعدني بالجدول؟ هيك بخلص لحد الخميس.', 'o'],
    ['Ich habe mich heute *krankgemeldet* und schicke die *Krankmeldung* morgen.', 'بلّغت اليوم إني مريض ورح ابعت التقرير الطبي بكرا.', 's'],
    ['*Sobald* ich wieder im Büro *bin*, schaue ich mir die E-Mails an.', 'أول ما ارجع عالمكتب بشوف الإيميلات.', 'c'],
    ['Ich verstehe, *dass* der Termin wichtig *ist*, aber *wenn* wir ihn um eine Woche *verschieben würden*, *könnten* wir viel bessere Ergebnisse liefern.', 'بفهم إنو الموعد مهم، بس لو أجلناه أسبوع منقدر نقدم نتائج أحسن بكتير.', 'l']
  ],
  v: [
    ['die Verspätung, -en', 'التأخير', 'n', 'Verspätung haben'],
    ['ausfallen', 'ينلغى', 'v', 'fällt aus – fiel aus – ist ausgefallen'],
    ['Urlaub nehmen / beantragen', 'ياخد / يطلب إجازة', 'x', ''],
    ['absprechen mit + Dat', 'ينسّق / يتفق مع', 'v', 'spricht ab – sprach ab – hat abgesprochen'],
    ['übernehmen', 'يستلم / يتحمل (مهمة)', 'v', 'übernimmt – übernahm – hat übernommen'],
    ['schaffen', 'يلحق / يقدر يخلّص', 'v', 'Ich schaffe das bis Freitag.'],
    ['sich krankmelden', 'يبلّغ إنو مريض', 'v', 'die Krankmeldung'],
    ['verschieben', 'يأجّل', 'v', 'verschiebt – verschob – hat verschoben']
  ],
  tr: [
    ['اعتذر بشكل رسمي', 'Sorry, ich bin zu spät.', 'Entschuldigen Sie bitte die Verspätung.'],
    ['اقترح بـ Wie wäre es, wenn', 'Paul hilft mir.', 'Wie wäre es, wenn Paul mir hilft?'],
    ['اربط بـ sobald', 'Ich bin zurück. Ich rufe Sie an.', 'Sobald ich zurück bin, rufe ich Sie an.']
  ],
  qa: [
    ['Was machst du, wenn du zu spät zur Arbeit kommst?', 'Ich rufe sofort meinen Chef an, entschuldige mich und erkläre kurz den Grund.'],
    ['Wie verteilt ihr bei der Arbeit die Aufgaben?', 'Am Montag haben wir eine Besprechung, und dort sagt jeder, was er übernimmt.'],
    ['Was tust du, wenn du eine Frist nicht schaffst?', 'Ich sage es früh genug und schlage eine Lösung vor.']
  ],
  dlg: { title: 'Eine Aufgabe zu viel', lines: [
    ['Chefin', 'Herr Nasser, könnten Sie bis Freitag noch den Kundenbericht schreiben?', 'سيد ناصر، بتقدر تكتب تقرير الزبائن كمان لحد الجمعة؟'],
    ['Herr Nasser', 'Ich würde gern, aber ich arbeite gerade an zwei Projekten. Bis Freitag schaffe ich das leider nicht.', 'بحب، بس عم اشتغل هلأ على مشروعين. للأسف ما بلحق لحد الجمعة.'],
    ['Chefin', 'Hm. Was schlagen Sie vor?', 'همم. شو بتقترح؟'],
    ['Herr Nasser', 'Wie wäre es, wenn Frau Kaya die Tabellen übernimmt? Dann schreibe ich den Text bis Montag.', 'شو رأيك لو السيدة كايا استلمت الجداول؟ هيك بكتب النص لحد الاثنين.'],
    ['Chefin', 'Gut, das machen wir so.', 'تمام، منعملها هيك.']
  ], q: [
    ['ليش ما بيقدر يخلص لحد الجمعة؟', ['لأنو مريض', 'لأنو عم يشتغل على مشروعين', 'لأنو بإجازة'], 1],
    ['شو الحل؟', ['كايا بتستلم الجداول', 'بيلغوا التقرير', 'المديرة بتكتبه'], 0]
  ] },
  task: { type: 'connected', ar: 'تمثيل: لازم تتصل بمديرك لأنك متأخر، وكمان بدك تطلب إجازة الشهر الجاي. اعتذر، اشرح، واطلب بأدب.', hints: ['Guten Morgen, hier ist …', 'Leider …, weil …', 'Außerdem wollte ich fragen, ob …', 'Wäre das möglich?'] }
},
{
  key: 'sport', title: 'الرياضة والحركة', de: 'Sport & Bewegung',
  goal: 'تحكي عن الرياضة بحياتك، تعطي وتاخد نصايح، وتشرح إصابة.',
  s: [
    ['Ich gehe dreimal pro Woche joggen, meistens früh am Morgen.', 'بركض تلات مرات بالأسبوع، غالباً الصبح بكير.', 's'],
    ['*Seit* ich im Fitnessstudio *trainiere*, fühle ich mich viel fitter.', 'من وقت ما عم اتمرن بالنادي حاسس حالي أنشط بكتير.', 's'],
    ['*Treibst* du regelmäßig *Sport*? – Leider nicht, mir fehlt einfach die Zeit.', 'بتعمل رياضة بانتظام؟ – للأسف لا، بس ما عندي وقت.', 'q'],
    ['Dann fahr doch mit dem Rad zur Arbeit, so *bewegst* du *dich* jeden Tag ein bisschen.', 'طيب روح عالشغل بالبسكليت، هيك بتتحرك كل يوم شوي.', 'a'],
    ['Ich bin *Mitglied* in einem Fußball*verein*, und wir trainieren jeden Dienstag.', 'أنا عضو بنادي كرة قدم ومنتمرن كل ثلاثاء.', 's'],
    ['Beim Training habe ich mir das Knie *verletzt*, *deshalb* muss ich zwei Wochen pausieren.', 'بالتمرين أذيت ركبتي، لهيك لازم وقّف أسبوعين.', 'p'],
    ['*Meiner Meinung nach* ist Sport in der Gruppe motivierender *als* allein.', 'برأيي الرياضة مع مجموعة بتحفّز أكتر من لحالك.', 'o'],
    ['Nach dem Sport sollte man sich gut *dehnen* und genug trinken.', 'بعد الرياضة لازم الواحد يعمل تمارين تمدد ويشرب كفاية.', 'x'],
    ['*Solange* das Wetter schön *ist*, trainiere ich lieber draußen im Park.', 'طالما الطقس حلو بفضل اتمرن برا بالحديقة.', 'c'],
    ['*Obwohl* ich nach der Arbeit oft müde *bin*, *zwinge* ich mich zum Training, *weil* ich danach immer besser *schlafe* und weniger Stress *habe*.', 'رغم إني غالباً تعبان بعد الشغل بجبر حالي عالتمرين، لأني بعدها دايماً بنام أحسن وبكون مضغوط أقل.', 'l']
  ],
  v: [
    ['Sport treiben', 'يمارس رياضة', 'x', 'regelmäßig Sport treiben'],
    ['sich bewegen', 'يتحرك', 'v', 'die Bewegung'],
    ['das Mitglied, -er', 'عضو', 'n', 'Mitglied in einem Verein'],
    ['der Verein, -e', 'النادي / الجمعية', 'n', 'in einen Verein eintreten'],
    ['sich verletzen', 'يتأذى', 'v', 'sich am Knie verletzen'],
    ['sich dehnen', 'يعمل تمارين تمدد', 'v', ''],
    ['motivierend', 'محفّز', 'adj', '']
  ],
  tr: [
    ['اعطي نصيحة بـ Konjunktiv II', 'Fahr mit dem Rad!', 'Du könntest mit dem Rad fahren.'],
    ['اربط بـ solange', 'Es regnet nicht. Ich laufe draußen.', 'Solange es nicht regnet, laufe ich draußen.'],
    ['استعمل seit', 'Ich mache Yoga. Ich habe weniger Rückenschmerzen.', 'Seit ich Yoga mache, habe ich weniger Rückenschmerzen.']
  ],
  qa: [
    ['Welchen Sport machst du?', 'Ich spiele Fußball und gehe manchmal schwimmen.'],
    ['Ist Sport im Verein in deinem Heimatland auch üblich?', 'Nicht so sehr. Bei uns spielt man eher auf der Straße oder im Park.'],
    ['Was motiviert dich zum Sport?', 'Mich motiviert, dass ich mich danach entspannter und gesünder fühle.']
  ],
  dlg: { title: 'Im Fitnessstudio', lines: [
    ['Trainer', 'Hallo! Bist du neu hier?', 'مرحبا! إنت جديد هون؟'],
    ['Samir', 'Ja, ich bin heute zum ersten Mal da. Ich möchte Muskeln aufbauen, aber ich habe Rückenprobleme.', 'إي، أول مرة اليوم. بدي ابني عضلات بس عندي مشاكل بالضهر.'],
    ['Trainer', 'Dann fangen wir langsam an und machen zuerst Übungen für den Rücken.', 'معناها منبلش بشوي شوي ومنعمل أول شي تمارين للضهر.'],
    ['Samir', 'Wie oft sollte ich am Anfang trainieren?', 'قديش لازم اتمرن بالبداية؟'],
    ['Trainer', 'Zweimal pro Woche reicht. Wichtig ist, dass du regelmäßig kommst.', 'مرتين بالأسبوع بكفّي. المهم تجي بانتظام.']
  ], q: [
    ['شو مشكلة سمير؟', ['ركبته', 'ضهره', 'رجله'], 1],
    ['قديش لازم يتمرن بالبداية؟', ['كل يوم', 'مرتين بالأسبوع', 'مرة بالشهر'], 1]
  ] },
  task: { type: '60s', ar: 'احكي 30–60 ثانية عن علاقتك بالرياضة: شو بتعمل، من إمتى، ليش، وشو بيمنعك أحياناً.', hints: ['Ich … seit …', 'Am liebsten …', 'Das Problem ist, dass …', 'Trotzdem …'] }
},
{
  key: 'lebensstil', title: 'النوم والأكل ونمط الحياة', de: 'Schlaf, Ernährung & Lebensstil',
  goal: 'تناقش عادات صحية وغير صحية وتعطي نصايح مقنعة.',
  s: [
    ['Ich schlafe unter der Woche nur sechs Stunden, und das ist eigentlich *zu wenig*.', 'خلال الأسبوع بنام بس ست ساعات، وهاد بالحقيقة قليل.', 'p'],
    ['*Seit* ich abends kein Handy mehr *benutze*, *schlafe* ich schneller *ein*.', 'من وقت ما بطلت استعمل الموبايل بالليل صرت انام أسرع.', 's'],
    ['Wie *ernährst* du *dich*? – Ich versuche, viel Obst und Gemüse *zu* essen.', 'كيف نظامك الغذائي؟ – بحاول آكل فواكه وخضرة كتير.', 'q'],
    ['Ich esse kaum Fleisch, *nicht* weil ich Vegetarier bin, *sondern* weil es mir einfach nicht so gut schmeckt.', 'بالكاد باكل لحمة، مش لأني نباتي، بس لأنو ما بيطلعلي طعمها كتير.', 'c'],
    ['Zu viel Zucker ist ungesund, *deshalb* trinke ich keine Limonade mehr.', 'السكر الكتير مش صحي، لهيك بطلت اشرب مشروبات غازية.', 's'],
    ['Du *siehst* müde *aus*. Du *solltest* mal ein paar Tage richtig *ausschlafen*.', 'باين عليك تعبان. لازم تنام منيح كم يوم.', 'x'],
    ['Ich finde, ein gesunder *Lebensstil* hängt *nicht nur* vom Essen ab, *sondern auch* von wenig Stress.', 'بلاقي إنو نمط الحياة الصحي مش بس متعلق بالأكل، كمان بقلة الضغط.', 'o'],
    ['Ich rauche seit zehn Jahren und möchte endlich *aufhören*. Hast du einen Tipp?', 'بدخّن من عشر سنين وبدي اوقف أخيراً. عندك نصيحة؟', 'p'],
    ['*An deiner Stelle würde* ich mir Hilfe bei einer Beratungsstelle *holen*.', 'لو كنت مكانك كنت طلبت مساعدة من مركز استشارة.', 'a'],
    ['*Wenn* ich mehr Zeit *hätte*, *würde* ich jeden Tag frisch *kochen*, aber nach der Arbeit esse ich leider oft schnell etwas Fertiges.', 'لو عندي وقت أكتر كنت طبخت طازج كل يوم، بس بعد الشغل للأسف غالباً باكل شي جاهز بسرعة.', 'l']
  ],
  v: [
    ['sich ernähren', 'يتغذى', 'v', 'sich gesund ernähren; die Ernährung'],
    ['einschlafen / ausschlafen', 'يغفى / ياخد كفايته نوم', 'v', 'schläft ein – schlief ein – ist eingeschlafen'],
    ['der Lebensstil', 'نمط الحياة', 'n', 'ein gesunder Lebensstil'],
    ['aufhören mit + Dat', 'يوقف / يبطّل', 'v', 'mit dem Rauchen aufhören'],
    ['gesund / ungesund', 'صحي / مش صحي', 'adj', ''],
    ['das Fertiggericht, -e', 'أكل جاهز', 'n', ''],
    ['aussehen', 'يبين / شكله', 'v', 'Du siehst müde aus.']
  ],
  tr: [
    ['اعطي نصيحة بـ An deiner Stelle', 'Geh früher ins Bett.', 'An deiner Stelle würde ich früher ins Bett gehen.'],
    ['استعمل nicht nur … sondern auch', 'Sport ist wichtig. Schlaf ist wichtig.', 'Nicht nur Sport, sondern auch Schlaf ist wichtig.'],
    ['حوّلها لشرط خيالي', 'Ich habe keine Zeit, deshalb koche ich nicht.', 'Wenn ich Zeit hätte, würde ich kochen.']
  ],
  qa: [
    ['Wie viele Stunden schläfst du normalerweise?', 'Normalerweise schlafe ich sieben Stunden, am Wochenende etwas mehr. Dann muss ich nämlich nicht früh aufstehen.'],
    ['Was ist für dich ein gesunder Lebensstil?', 'Für mich bedeutet das: genug schlafen, sich bewegen und nicht zu viel Stress haben.'],
    ['Was isst du zum Frühstück?', 'Zum Frühstück esse ich meistens Brot mit Käse, Oliven und Tomaten.']
  ],
  dlg: { title: 'Ein guter Rat', lines: [
    ['Lina', 'Du gähnst schon den ganzen Tag. Hast du schlecht geschlafen?', 'عم تتاوب طول النهار. نمت سيء؟'],
    ['Bilal', 'Ja, ich schlafe seit Wochen schlecht. Ich wache nachts immer auf.', 'إي، صرلي أسابيع نومي سيء. دايماً بفيق بالليل.'],
    ['Lina', 'Trinkst du abends Kaffee?', 'بتشرب قهوة بالمسا؟'],
    ['Bilal', 'Na ja, manchmal zwei Tassen nach dem Abendessen.', 'يعني، أحياناً فنجانين بعد العشا.'],
    ['Lina', 'Dann ist das vielleicht der Grund. An deiner Stelle würde ich nach 16 Uhr keinen Kaffee mehr trinken.', 'يمكن هاد السبب. لو مكانك ما كنت شربت قهوة بعد الساعة 4.']
  ], q: [
    ['شو مشكلة بلال؟', ['بيفيق بالليل', 'ما بياكل', 'عنده صداع'], 0],
    ['شو نصحته لينا؟', ['ينام أبكر', 'ما يشرب قهوة بعد الـ4', 'يعمل رياضة'], 1]
  ] },
  task: { type: 'connected', ar: 'صاحبك عايش بنمط حياة مش صحي (نوم قليل، أكل جاهز، ما في حركة). اعطيه 3 نصايح مع أسباب.', hints: ['Du solltest …, weil …', 'An deiner Stelle würde ich …', 'Es wäre besser, wenn …', 'Außerdem …'] }
},
{
  key: 'stadt', title: 'بالمدينة: المواصلات والطريق', de: 'Unterwegs: ÖPNV & Wegbeschreibung',
  goal: 'تسأل عن الطريق، تفهم وصف الطريق، وتتعامل مع المواصلات العامة.',
  s: [
    ['Entschuldigung, wie komme ich am besten zum Hauptbahnhof?', 'عفواً، كيف بوصل أحسن شي عالمحطة الرئيسية؟', 'q'],
    ['Gehen Sie hier *geradeaus* bis zur *Ampel* und dann die zweite Straße links.', 'امشي دغري لحد الإشارة وبعدين تاني شارع عالشمال.', 'a'],
    ['Die U-Bahn fährt alle zehn Minuten, *aber* sonntags nur alle zwanzig.', 'المترو بيمرق كل عشر دقايق، بس أيام الأحد كل عشرين.', 's'],
    ['Wo kann ich ein *Monatsticket* kaufen, und *gilt* es auch für den Bus?', 'وين بقدر اشتري تذكرة شهرية، وبتمشي كمان عالباص؟', 'q'],
    ['Mit dem Deutschlandticket kann man im ganzen Land Regionalzüge, Busse und Bahnen benutzen.', 'مع تذكرة ألمانيا بتقدر تستعمل القطارات الإقليمية والباصات والمترو بكل البلد.', 's'],
    ['Ich habe den letzten Bus *verpasst* und muss jetzt zu Fuß nach Hause gehen.', 'فاتني آخر باص وهلأ لازم ارجع عالبيت مشي.', 'p'],
    ['Kein Problem, ich bringe dich mit dem Auto, es liegt sowieso *auf meinem Weg*.', 'ولا يهمك، بوصلك بالسيارة، هيك هيك عطريقي.', 'a'],
    ['*Ich finde*, die Stadt sollte mehr *Radwege* bauen, *damit* weniger Leute mit dem Auto *fahren*.', 'بلاقي إنو المدينة لازم تعمل طرقات بسكليت أكتر لحتى يقل عدد الناس اللي بيسوقوا.', 'o'],
    ['*Steigen* Sie an der nächsten *Haltestelle* *aus* und nehmen Sie die *Linie* 5 Richtung Zentrum.', 'انزل بالموقف الجاي وخود الخط 5 باتجاه المركز.', 'x'],
    ['*Wenn* ich pünktlich ankommen *will*, nehme ich lieber eine frühere Bahn, *denn* man weiß nie, *ob* der Zug Verspätung *hat*.', 'إذا بدي اوصل عالوقت باخد قطار أبكر، لأنو ما بتعرف أبداً إذا القطار رح يتأخر.', 'l']
  ],
  v: [
    ['die Haltestelle, -n', 'موقف الباص/الترام', 'n', 'an der Haltestelle warten'],
    ['einsteigen / aussteigen / umsteigen', 'يطلع / ينزل / يبدّل', 'v', 'steigt aus – stieg aus – ist ausgestiegen'],
    ['die Ampel, -n', 'إشارة المرور', 'n', 'an der Ampel links'],
    ['geradeaus', 'دغري', 'adv', ''],
    ['das Monatsticket, -s', 'تذكرة شهرية', 'n', ''],
    ['gelten', 'يكون ساري', 'v', 'gilt – galt – hat gegolten'],
    ['der Radweg, -e', 'طريق البسكليت', 'n', ''],
    ['die Linie, -n', 'الخط (باص/مترو)', 'n', 'die Linie 5 nehmen']
  ],
  tr: [
    ['حوّلها لسؤال غير مباشر', 'Wo ist die Haltestelle?', 'Können Sie mir sagen, wo die Haltestelle ist?'],
    ['احكيها بالماضي', 'Ich verpasse den Bus.', 'Ich habe den Bus verpasst.'],
    ['اربط بـ damit', 'Die Stadt baut Radwege. Weniger Leute fahren Auto.', 'Die Stadt baut Radwege, damit weniger Leute Auto fahren.']
  ],
  qa: [
    ['Wie kommst du jeden Tag zur Arbeit oder zum Kurs?', 'Ich fahre mit der S-Bahn und laufe dann noch fünf Minuten.'],
    ['Wie findest du die öffentlichen Verkehrsmittel in deiner Stadt?', 'Sie sind ziemlich gut, aber oft zu voll und manchmal unpünktlich.'],
    ['Wie ist der Verkehr in deinem Heimatland?', 'In meiner Heimatstadt fahren die meisten Leute mit dem Auto oder mit dem Minibus. Es gibt viel Stau.']
  ],
  dlg: { title: 'Nach dem Weg fragen', lines: [
    ['Touristin', 'Entschuldigung, ich suche das Rathaus. Ist das weit von hier?', 'عفواً، عم دور عالبلدية. بعيدة عن هون؟'],
    ['Passant', 'Nein, zu Fuß etwa zehn Minuten. Gehen Sie hier geradeaus bis zur Kirche.', 'لا، مشي تقريباً عشر دقايق. امشي دغري لحد الكنيسة.'],
    ['Touristin', 'Bis zur Kirche, okay. Und dann?', 'لحد الكنيسة، تمام. وبعدين؟'],
    ['Passant', 'Dann rechts in die Bahnhofstraße. Das Rathaus ist auf der linken Seite.', 'بعدين يمين بشارع المحطة. البلدية عالجهة الشمال.'],
    ['Touristin', 'Vielen Dank! Gibt es auch einen Bus?', 'شكراً كتير! في باص كمان؟'],
    ['Passant', 'Ja, aber zu Fuß sind Sie schneller.', 'إي، بس مشي بتوصلي أسرع.']
  ], q: [
    ['وين لازم تلف يمين؟', ['عند الكنيسة', 'عند الإشارة', 'عند المحطة'], 0],
    ['البلدية بأي جهة؟', ['اليمين', 'الشمال', 'قدام'], 1]
  ] },
  task: { type: 'connected', ar: 'اشرح لزميل جديد كيف يوصل من بيتك لمكان شغلك أو الكورس: أي مواصلات، وين يبدّل، وقديش بياخد وقت.', hints: ['Zuerst nimmst du …', 'An der Haltestelle … steigst du um.', 'Dann fährst du … Stationen.', 'Insgesamt dauert es …'] }
},
{
  key: 'wetter', title: 'الطقس، المدينة والريف', de: 'Wetter, Stadt und Land',
  goal: 'تحكي عن الطقس والمناخ وتقارن بين الحياة بالمدينة والريف.',
  s: [
    ['Heute ist es *bewölkt*, und am Nachmittag *soll* es regnen.', 'اليوم الدنيا مغيمة وبعد الظهر المفروض تشتي.', 's', 'sollen هون = حسب النشرة الجوية'],
    ['Im Sommer wird es hier selten heißer *als* dreißig Grad.', 'بالصيف نادراً بتصير الحرارة هون أعلى من تلاتين درجة.', 's'],
    ['Wie ist das Wetter in deiner Heimat im Winter? – Mild, aber es regnet oft.', 'كيف الطقس ببلدك بالشتي؟ – معتدل بس بتشتي كتير.', 'q'],
    ['Nimm lieber einen Regenschirm mit, *laut Wetterbericht* gibt es heute *Gewitter*.', 'خود معك شمسية أحسن، حسب النشرة الجوية في عواصف رعدية اليوم.', 'x'],
    ['Das graue Wetter im November macht mich manchmal ein bisschen traurig.', 'الطقس الرمادي بتشرين التاني أحياناً بيزعّلني شوي.', 'p'],
    ['Dann musst du viel rausgehen, *auch wenn* es kalt *ist*, und dir etwas Schönes *vornehmen*.', 'إذاً لازم تطلع كتير، حتى لو برد، وتخطط لشي حلو.', 'a'],
    ['*Auf dem Land* ist das Leben ruhiger, *aber* ohne Auto ist man ziemlich aufgeschmissen.', 'بالريف الحياة أهدى، بس بدون سيارة بتكون عالق.', 'c', 'aufgeschmissen (عامية) = عالق / ضايع'],
    ['Ich *würde* lieber in einer Kleinstadt *wohnen*, *weil* dort alles in der Nähe *ist* und die Mieten nicht so hoch *sind*.', 'بفضل اسكن بمدينة صغيرة لأنو كل شي قريب هناك والإيجارات مش عالية هالقد.', 'o'],
    ['In der Großstadt gibt es mehr Arbeitsplätze und Freizeitangebote *als* auf dem *Dorf*.', 'بالمدينة الكبيرة في فرص شغل ونشاطات أكتر من الضيعة.', 's'],
    ['*Einerseits* *vermisse* ich manchmal die Ruhe in meinem Dorf, *andererseits* könnte ich mir nicht mehr *vorstellen*, ohne die vielen Möglichkeiten der Stadt *zu* leben.', 'من جهة أحياناً بشتاق لهدوء ضيعتي، ومن جهة تانية ما عاد فيني اتخيل عيش بدون الفرص الكتيرة بالمدينة.', 'l']
  ],
  v: [
    ['bewölkt / sonnig / neblig', 'مغيم / مشمس / ضبابي', 'adj', ''],
    ['das Gewitter, -', 'عاصفة رعدية', 'n', ''],
    ['der Wetterbericht, -e', 'النشرة الجوية', 'n', 'laut Wetterbericht'],
    ['das Dorf, Dörfer', 'الضيعة / القرية', 'n', 'auf dem Dorf leben'],
    ['auf dem Land / in der Stadt', 'بالريف / بالمدينة', 'x', ''],
    ['vermissen', 'يشتاق لـ', 'v', 'Ich vermisse meine Familie.'],
    ['sich etwas vorstellen', 'يتخيل', 'v', 'Ich kann mir das gut vorstellen.']
  ],
  tr: [
    ['قارن بـ als', 'Auf dem Land ist es ruhig. In der Stadt ist es laut.', 'Auf dem Land ist es ruhiger als in der Stadt.'],
    ['استعمل sollen لخبر من النشرة', 'Laut Wetterbericht schneit es morgen.', 'Morgen soll es schneien.'],
    ['استعمل einerseits … andererseits', 'Die Stadt ist teuer. Sie bietet viel.', 'Einerseits ist die Stadt teuer, andererseits bietet sie viel.']
  ],
  qa: [
    ['Welches Wetter magst du am liebsten?', 'Am liebsten mag ich den Frühling. Dann ist es nämlich warm, aber nicht zu heiß.'],
    ['Möchtest du lieber in der Stadt oder auf dem Land leben?', 'Ich möchte lieber in der Stadt leben, weil ich dort arbeiten und schnell überall hinkommen kann.'],
    ['Wie ist das Klima in deinem Heimatland?', 'Im Sommer ist es sehr heiß und trocken, im Winter ist es kühl, und es regnet manchmal.']
  ],
  dlg: { title: 'Wochenendpläne und Wetter', lines: [
    ['Ella', 'Wollen wir am Samstag eine Radtour machen?', 'بدنا نعمل جولة بالبسكليت السبت؟'],
    ['Mohammed', 'Gern, aber hast du den Wetterbericht gesehen? Es soll den ganzen Tag regnen.', 'أكيد، بس شفتي النشرة الجوية؟ المفروض تشتي طول النهار.'],
    ['Ella', 'Oh nein. Und am Sonntag?', 'لا. وبالأحد؟'],
    ['Mohammed', 'Am Sonntag soll es sonnig werden, etwa zwanzig Grad.', 'الأحد المفروض تكون مشمسة، تقريباً عشرين درجة.'],
    ['Ella', 'Perfekt, dann fahren wir am Sonntag aufs Land!', 'ممتاز، معناها منروح الأحد عالريف!']
  ], q: [
    ['كيف الطقس السبت؟', ['مشمس', 'ممطر', 'تلج'], 1],
    ['إمتى رح يروحوا؟', ['السبت', 'الأحد', 'الاثنين'], 1]
  ] },
  task: { type: '60s', ar: 'قارن 30–60 ثانية بين الحياة بالمدينة والحياة بالريف: ميزتين، عيبين، ورأيك الشخصي مع سبب.', hints: ['In der Stadt …, auf dem Land dagegen …', 'Ein Vorteil ist, dass …', 'Ein Nachteil ist …', 'Ich persönlich würde lieber …, weil …'] }
}
];
