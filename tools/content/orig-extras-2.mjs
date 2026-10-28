// Exercises added to original lessons (original weeks 3–4).
export default {
'3.1': {
  goal: 'توصف أشخاص وأشيا عند الدكتور بجمل موصولة (Nominativ).',
  v: [['die Krankenschwester, -n / der Pfleger, -', 'ممرضة / ممرض', 'n', ''], ['das Wartezimmer, -', 'غرفة الانتظار', 'n', ''], ['das Rezept, -e', 'الوصفة الطبية', 'n', ''], ['die Salbe, -n', 'المرهم', 'n', ''], ['ausverkauft', 'خلصت الكمية', 'adj', '']],
  tr: [['اربط بجملة موصولة', 'Das ist der Arzt. Er spricht Arabisch.', 'Das ist der Arzt, der Arabisch spricht.'], ['اربط بجملة موصولة', 'Ich suche eine Apotheke. Sie hat sonntags offen.', 'Ich suche eine Apotheke, die sonntags offen hat.']],
  qa: [['Was für einen Arzt suchst du?', 'Ich suche einen Arzt, der viel Zeit für seine Patienten hat.'], ['Kennst du jemanden, der im Krankenhaus arbeitet?', 'Ja, meine Cousine ist Krankenschwester in einer Klinik in Bonn.'], ['Welches Medikament hast du immer zu Hause?', 'Ich habe immer Tabletten zu Hause, die gegen Kopfschmerzen helfen.']],
  dlg: { title: 'Am Empfang', lines: [['Patientin', 'Entschuldigung, wer ist die Ärztin, die heute Dienst hat?', 'عفواً، مين الدكتورة المناوبة اليوم؟'], ['Empfang', 'Das ist Dr. Yilmaz. Sie ist die Ärztin, die neben dem Labor sitzt.', 'هي الدكتورة يلماز. هي الدكتورة اللي قاعدة جنب المختبر.'], ['Patientin', 'Danke. Und brauche ich eine Überweisung?', 'شكراً. وبحتاج تحويل؟'], ['Empfang', 'Nein, nicht für die Hausärztin.', 'لا، لطبيبة العائلة لأ.']], q: [['مين الدكتورة المناوبة؟', ['د. يلماز', 'د. شميت', 'ما في'], 0], ['لازم تحويل؟', ['إي', 'لا', 'ما بعرف'], 1]] },
  task: { type: 'connected', ar: 'اوصف 3 أشخاص بحياتك بجمل موصولة (der/die/das …).', hints: ['Mein Freund ist ein Mensch, der …', 'Meine Mutter ist eine Frau, die …', 'Ich kenne jemanden, der …'] }
},
'3.2': {
  goal: 'تحكي عن أدويتك وأعراضك بجمل موصولة (Akkusativ).',
  v: [['die Untersuchung, -en', 'الفحص', 'n', ''], ['empfehlen', 'ينصح بـ', 'v', 'empfiehlt – empfahl – hat empfohlen'], ['die Schmerzen (Pl.)', 'الأوجاع', 'n', ''], ['schlimmer werden', 'يزيد سوء', 'x', ''], ['der Husten', 'السعال', 'n', '']],
  tr: [['اربط (Akkusativ)', 'Das ist der Tee. Ich trinke ihn jeden Abend.', 'Das ist der Tee, den ich jeden Abend trinke.'], ['اربط (Akkusativ)', 'Wo ist das Rezept? Der Arzt hat es mir gegeben.', 'Wo ist das Rezept, das der Arzt mir gegeben hat?']],
  qa: [['Welches Hausmittel benutzt du bei einer Erkältung?', 'Ich trinke einen Tee, den meine Mutter immer mit Ingwer und Honig macht.'], ['Was ist der beste Rat, den dir ein Arzt gegeben hat?', 'Der beste Rat war, mehr zu schlafen und weniger Kaffee zu trinken.'], ['Hast du einen Arzt, den du empfehlen kannst?', 'Ja, ich habe einen Hausarzt, den ich sehr gut finde.']],
  dlg: { title: 'In der Apotheke', lines: [['Apotheker', 'Was kann ich für Sie tun?', 'شو بقدر اعملك؟'], ['Kunde', 'Ich brauche die Tabletten, die mein Arzt mir empfohlen hat. Aber ich habe den Namen vergessen.', 'بدي الحبوب اللي نصحني فيها دكتوري. بس نسيت الاسم.'], ['Apotheker', 'Haben Sie das Rezept dabei?', 'معك الوصفة؟'], ['Kunde', 'Ja, hier ist der Zettel, den er mir gegeben hat.', 'إي، هاي الورقة اللي عطاني ياها.']], q: [['شو نسي الزبون؟', ['الوصفة', 'اسم الدوا', 'مصاريه'], 1], ['شو كان معه؟', ['ورقة الدكتور', 'ولا شي', 'بطاقة التأمين'], 0]] },
  task: { type: 'short', ar: 'كمّل 4 جمل: Das ist das Essen, das … / Der Film, den … / Die Stadt, die … / Der Mensch, den …', hints: ['…, das ich am liebsten esse.', '…, den ich zuletzt gesehen habe.', '…, die ich vermisse.'] }
},
'3.3': {
  goal: 'تستعمل جمل موصولة بالـ Dativ ومع حروف جر بمواقف صحية.',
  v: [['vertrauen + Dat', 'يثق بـ', 'v', ''], ['leiden an + Dat', 'يعاني من', 'v', 'leidet – litt – hat gelitten'], ['die Apotheke, -n', 'الصيدلية', 'n', ''], ['die Physiotherapeutin, -nen', 'أخصائية علاج طبيعي', 'n', ''], ['warten auf + Akk', 'يستنى', 'v', '']],
  tr: [['جملة موصولة مع حرف جر', 'Das ist die Klinik. Ich arbeite in der Klinik.', 'Das ist die Klinik, in der ich arbeite.'], ['جملة موصولة مع حرف جر', 'Das ist mein Freund. Ich gehe mit ihm schwimmen.', 'Das ist mein Freund, mit dem ich schwimmen gehe.']],
  qa: [['Wer ist ein Mensch, dem du vertraust?', 'Meine ältere Schwester ist der Mensch, dem ich am meisten vertraue.'], ['Über welches Thema sprichst du gern?', 'Ein Thema, über das ich gern spreche, ist Fußball.'], ['Wie heißt die Stadt, in der du geboren bist?', 'Die Stadt, in der ich geboren bin, heißt Aleppo.']],
  dlg: { title: 'Rückenschmerzen', lines: [['Freundin', 'Wie geht es deinem Rücken?', 'كيف ضهرك؟'], ['Maya', 'Besser! Die Physiotherapeutin, zu der ich jetzt gehe, ist super.', 'أحسن! أخصائية العلاج اللي عم روح لعندها هلأ ممتازة.'], ['Freundin', 'Ist das die, von der du mir erzählt hast?', 'هي اللي حكيتيلي عنها؟'], ['Maya', 'Genau. Die Übungen, die sie mir zeigt, mache ich jeden Tag.', 'بالزبط. التمارين اللي بتفرجيني ياها بعملها كل يوم.']], q: [['كيف ضهر مايا؟', ['أسوأ', 'أحسن', 'نفسه'], 1], ['شو بتعمل كل يوم؟', ['التمارين', 'مشي', 'سباحة'], 0]] },
  task: { type: 'connected', ar: 'احكي عن مكان مهم إلك بجمل موصولة مع حروف جر (in dem, mit dem, über den …).', hints: ['Das ist der Ort, an dem …', 'Dort wohnen Menschen, mit denen …', 'Es gibt ein Café, in dem …'] }
},
'3.4': {
  goal: 'تختار وتوصف أغراض بالتسوق (الصفة بعد الأداة المعرّفة).',
  v: [['der Pullover, -', 'البلوفر', 'n', ''], ['die Jacke, -n', 'الجاكيت', 'n', ''], ['günstig', 'رخيص / بسعر منيح', 'adj', ''], ['passend', 'مناسب', 'adj', 'die passende Größe'], ['zufrieden mit + Dat', 'راضي عن', 'adj', '']],
  tr: [['كمّل نهاية الصفة', 'Ich nehme d__ blau__ Hemd.', 'Ich nehme das blaue Hemd.'], ['كمّل نهاية الصفة', 'Mit d__ neu__ Schuhen laufe ich gut.', 'Mit den neuen Schuhen laufe ich gut.']],
  qa: [['Welche Jacke gefällt dir besser, die schwarze oder die graue?', 'Die schwarze gefällt mir besser, weil sie eleganter ist.'], ['Was hast du zuletzt gekauft?', 'Zuletzt habe ich den blauen Rucksack gekauft, den ich dir gezeigt habe.'], ['Bist du mit deinem Handy zufrieden?', 'Ja, mit dem neuen Handy bin ich sehr zufrieden.']],
  dlg: { title: 'Im Kleidungsgeschäft', lines: [['Verkäuferin', 'Kann ich Ihnen helfen?', 'بقدر ساعدك؟'], ['Kundin', 'Ja, ich suche die grüne Jacke aus dem Schaufenster.', 'إي، عم دور عالجاكيت الخضرا اللي بالواجهة.'], ['Verkäuferin', 'In welcher Größe?', 'أي مقاس؟'], ['Kundin', 'In M. Und haben Sie die passende Hose dazu?', 'M. وعندكم البنطلون اللي بيلبق معها؟']], q: [['أي جاكيت بدها؟', ['الحمرا', 'الخضرا', 'السودا'], 1], ['شو بدها كمان؟', ['بنطلون', 'شنطة', 'صبابيط'], 0]] },
  task: { type: 'short', ar: 'اوصف 5 أغراض بغرفتك مع الأداة المعرّفة والصفة (der alte Schrank, die kleine Lampe …).', hints: ['Der … steht …', 'Die … ist …', 'Das … gefällt mir.'] }
},
'3.5': {
  goal: 'توصف شي بدك تشتريه أو تطلبه (الصفة بعد ein وبدون أداة).',
  v: [['das Angebot, -e', 'العرض', 'n', ''], ['das Geschenk, -e', 'الهدية', 'n', ''], ['die Qualität', 'الجودة', 'n', ''], ['das Modell, -e', 'الموديل', 'n', ''], ['das Gemüse', 'الخضرة', 'n', '']],
  tr: [['كمّل', 'Ich suche ein__ günstig__ Fahrrad.', 'Ich suche ein günstiges Fahrrad.'], ['كمّل (بدون أداة)', 'Ich trinke gern heiß__ Tee.', 'Ich trinke gern heißen Tee.']],
  qa: [['Was für ein Geschenk suchst du für deine Mutter?', 'Ich suche ein schönes, persönliches Geschenk, vielleicht einen warmen Schal.'], ['Was isst du gern zum Frühstück?', 'Ich esse gern frisches Brot mit weißem Käse.'], ['Was für eine Wohnung suchst du?', 'Ich suche eine helle Wohnung mit einem großen Balkon.']],
  dlg: { title: 'Laptop kaufen', lines: [['Verkäufer', 'Was suchen Sie?', 'شو عم تدور؟'], ['Kunde', 'Einen leichten Laptop für die Uni.', 'لابتوب خفيف للجامعة.'], ['Verkäufer', 'Dieses Modell ist leicht und hat einen guten Akku.', 'هالموديل خفيف وبطاريته منيحة.'], ['Kunde', 'Haben Sie auch ein günstigeres Modell?', 'عندكم موديل أرخص كمان؟']], q: [['شو بده الزبون؟', ['موبايل', 'لابتوب خفيف', 'تلفزيون'], 1], ['شو طلب بالآخر؟', ['موديل أغلى', 'موديل أرخص', 'ضمان'], 1]] },
  task: { type: 'short', ar: 'اكتب إعلان قصير لشي بدك تبيعه (بسكليت، طاولة …) مع 4 صفات على الأقل.', hints: ['Verkaufe ein … / einen …', 'Es ist …', 'Preis: …'] }
},
'3.6': {
  goal: 'تقارن أسعار ومنتجات وأماكن (Komparativ, Superlativ, so … wie).',
  v: [['vergleichen', 'يقارن', 'v', 'vergleicht – verglich – hat verglichen'], ['bequem', 'مريح', 'adj', ''], ['das Fertiggericht, -e', 'أكل جاهز', 'n', ''], ['je … desto', 'كل ما … كل ما', 'x', ''], ['voll', 'مليان / زحمة', 'adj', '']],
  tr: [['قارن بـ als', 'Der Bus ist langsam. Die Bahn ist schnell.', 'Die Bahn ist schneller als der Bus.'], ['استعمل so … wie', 'Mein Zimmer ist groß. Dein Zimmer ist auch groß.', 'Mein Zimmer ist so groß wie dein Zimmer.']],
  qa: [['Was ist besser: online oder im Laden kaufen?', 'Online ist es bequemer, aber im Laden kann man die Sachen anprobieren.'], ['Was ist das schönste Geschenk, das du bekommen hast?', 'Das schönste Geschenk war ein Brief von meinem Vater.'], ['Wo ist das Leben teurer: in Deutschland oder in deinem Heimatland?', 'In Deutschland ist das Leben viel teurer, aber die Gehälter sind auch höher.']],
  dlg: { title: 'Welches Handy?', lines: [['Anas', 'Welches Handy soll ich nehmen?', 'أي موبايل آخد؟'], ['Kim', 'Das linke ist billiger, aber das rechte hat die bessere Kamera.', 'اللي عالشمال أرخص، بس اللي عاليمين الكاميرا تبعه أحسن.'], ['Anas', 'Hm, und welches hat den größeren Akku?', 'همم، وأي واحد بطاريته أكبر؟'], ['Kim', 'Auch das rechte. Es ist am teuersten, aber am besten.', 'كمان اليمين. هو الأغلى، بس الأحسن.']], q: [['أي واحد أرخص؟', ['الشمال', 'اليمين', 'نفس السعر'], 0], ['أي واحد الأحسن؟', ['الشمال', 'اليمين', 'ما في فرق'], 1]] },
  task: { type: 'connected', ar: 'قارن بين مدينتين بتعرفهن (أو بين شغلتين بدك تشتري وحدة منهن): 5 جمل بـ als, so … wie, am …sten.', hints: ['… ist größer als …', '… ist nicht so … wie …', 'Am schönsten finde ich …'] }
},
'3.7': {
  goal: 'تشرح أعراضك عند الدكتور وتفهم تعليماته.',
  v: [['die Halsschmerzen (Pl.)', 'وجع حلق', 'n', ''], ['die Allergie, -n', 'الحساسية', 'n', 'eine Allergie gegen + Akk'], ['die Krankenkasse, -n', 'التأمين الصحي', 'n', ''], ['sich schwach fühlen', 'يحس بضعف', 'x', ''], ['Gute Besserung!', 'الله يشفيك', 'x', '']],
  tr: [['اطلب موعد بأدب', 'Ich will morgen einen Termin.', 'Könnte ich bitte morgen einen Termin bekommen?'], ['انقل كلام الدكتور (dass)', 'Der Arzt: „Trinken Sie viel!“', 'Der Arzt hat gesagt, dass ich viel trinken soll.']],
  qa: [['Was fehlt Ihnen?', 'Ich habe seit drei Tagen Fieber und Halsschmerzen.'], ['Seit wann haben Sie die Beschwerden?', 'Seit Montag, und es wird jeden Tag schlimmer.'], ['Nehmen Sie regelmäßig Medikamente?', 'Nein, nur manchmal etwas gegen Kopfschmerzen.']],
  dlg: { title: 'Beim Arzt', lines: [['Ärztin', 'Was kann ich für Sie tun?', 'شو بقدر اعملك؟'], ['Patient', 'Ich habe starke Kopfschmerzen, und mir ist schwindelig.', 'عندي صداع قوي وحاسس بدوخة.'], ['Ärztin', 'Seit wann?', 'من إمتى؟'], ['Patient', 'Seit gestern Abend.', 'من مبارح المسا.'], ['Ärztin', 'Ich messe mal Ihren Blutdruck. Bitte machen Sie den Arm frei.', 'رح قيس الضغط. لو سمحت شمّر إيدك.']], q: [['شو الأعراض؟', ['سعال', 'صداع ودوخة', 'وجع بطن'], 1], ['شو رح تعمل الدكتورة؟', ['تقيس الضغط', 'تعطي إبرة', 'تكتب وصفة'], 0]] },
  task: { type: 'connected', ar: 'تمثيل عند الدكتور: اوصف أعراضك (شو، من إمتى، قديش قوية)، واسأل سؤالين عن الدوا.', hints: ['Ich habe seit … …', 'Es tut hier weh.', 'Wie oft muss ich …?', 'Darf ich trotzdem …?'] }
},
'4.1': {
  goal: 'تعبّر عن أمنياتك وأحلامك (wäre, hätte, würde).',
  v: [['reich', 'غني', 'adj', ''], ['das Meer, -e', 'البحر', 'n', 'ans Meer fahren'], ['der Traum, Träume', 'الحلم', 'n', ''], ['sich wünschen', 'يتمنى', 'v', 'Ich wünschte, …'], ['Wenn … nur …!', 'لو بس …!', 'x', '']],
  tr: [['حوّل لأمنية', 'Ich habe keine Zeit.', 'Ich hätte gern mehr Zeit.'], ['أمنية بـ Wenn … nur', 'Ich bin nicht im Urlaub.', 'Wenn ich nur im Urlaub wäre!']],
  qa: [['Was würdest du gern machen, wenn du Zeit hättest?', 'Ich würde gern reisen und Gitarre lernen.'], ['Wo würdest du gern leben?', 'Ich würde gern am Meer leben, vielleicht in Hamburg.'], ['Was wäre dein Traumberuf?', 'Mein Traumberuf wäre Architekt.']],
  dlg: { title: 'Montagmorgen', lines: [['Lara', 'Puh, schon wieder Montag. Ich wäre so gern noch im Bett!', 'أوف، رجع الاثنين. كتير كنت بحب كون لسا بالسرير!'], ['Aziz', 'Ich auch. Wenn wir nur schon Urlaub hätten!', 'وأنا كمان. يا ريت لو كنا بإجازة!'], ['Lara', 'Wohin würdest du fahren?', 'لوين كنت رحت؟'], ['Aziz', 'Ich würde ans Meer fahren und eine Woche nichts tun.', 'كنت رحت عالبحر وما عملت شي أسبوع.']], q: [['شو بيتمنى عزيز؟', ['شغل جديد', 'إجازة', 'سيارة'], 1], ['لوين بده يروح؟', ['الجبال', 'البحر', 'المدينة'], 1]] },
  task: { type: '60s', ar: 'احكي عن 3 أمنيات إلك (wäre, hätte, würde) وليش.', hints: ['Ich hätte gern …', 'Ich wäre gern …', 'Ich würde gern …, weil …'] }
},
'4.2': {
  goal: 'تطلب بأدب وتعطي نصايح (könnte, würde, sollte, An deiner Stelle …).',
  v: [['raten + Dat', 'ينصح', 'v', 'rät – riet – hat geraten'], ['wiederholen', 'يعيد', 'v', ''], ['An deiner Stelle …', 'لو كنت مكانك …', 'x', ''], ['buchen', 'يحجز', 'v', ''], ['der Zucker', 'السكر', 'n', '']],
  tr: [['حوّل لطلب مؤدب', 'Hilf mir!', 'Könntest du mir bitte helfen?'], ['اعطي نصيحة', 'Geh zum Arzt!', 'An deiner Stelle würde ich zum Arzt gehen.']],
  qa: [['Was würdest du einem neuen Kollegen raten?', 'Ich würde ihm raten, viele Fragen zu stellen und alles aufzuschreiben.'], ['Wie bittest du höflich um ein Glas Wasser?', 'Könnte ich bitte ein Glas Wasser haben?'], ['Was sollte man tun, wenn man oft müde ist?', 'Man sollte früher schlafen gehen und sich mehr bewegen.']],
  dlg: { title: 'Rückenschmerzen seit Tagen', lines: [['Freund', 'Ich habe seit Tagen Rückenschmerzen.', 'صرلي أيام عندي وجع ضهر.'], ['Leyla', 'Du solltest wirklich zum Arzt gehen.', 'لازم فعلاً تروح عالدكتور.'], ['Freund', 'Ach, das geht schon wieder weg.', 'آه، رح يروح لحاله.'], ['Leyla', 'An deiner Stelle würde ich nicht warten. Soll ich dir einen Termin machen?', 'لو مكانك ما كنت استنيت. بدك احجزلك موعد؟']], q: [['شو مشكلة الصاحب؟', ['وجع راس', 'وجع ضهر', 'حرارة'], 1], ['شو عرضت ليلى؟', ['تعطيه دوا', 'تحجزله موعد', 'تروح معه'], 1]] },
  task: { type: 'connected', ar: 'صاحبك عنده مشكلة (ما عم ينام / ما عم يلاقي شغل). اعطيه 3 نصايح بـ solltest, könntest, An deiner Stelle würde ich.', hints: ['Du solltest …', 'Du könntest …', 'An deiner Stelle würde ich …'] }
},
'4.3': {
  goal: 'تحكي عن مواقف افتراضية وتناقش بدائل (Wenn + Konjunktiv II).',
  v: [['annehmen', 'يقبل', 'v', 'nimmt an – nahm an – hat angenommen'], ['mitkommen', 'يجي مع', 'v', ''], ['längst', 'من زمان', 'adv', ''], ['pendeln', 'يتنقل يومياً (بين مدينتين)', 'v', ''], ['reisen', 'يسافر', 'v', '']],
  tr: [['شرط خيالي', 'Ich habe kein Geld. Ich kaufe kein Auto.', 'Wenn ich Geld hätte, würde ich ein Auto kaufen.'], ['Wenn ich du wäre', 'Nimm den Job!', 'Wenn ich du wäre, würde ich den Job annehmen.']],
  qa: [['Was würdest du machen, wenn du kein Deutsch lernen müsstest?', 'Dann würde ich mehr Zeit mit meinen Kindern verbringen.'], ['Wenn du Bürgermeister wärst, was würdest du ändern?', 'Ich würde mehr Geld für Schulen ausgeben.'], ['Was würdest du tun, wenn du deinen Pass verlieren würdest?', 'Ich würde sofort zur Polizei und zur Botschaft gehen.']],
  dlg: { title: 'Zwei Jobangebote', lines: [['Tom', 'Ich habe zwei Jobangebote und weiß nicht, welches ich nehmen soll.', 'عندي عرضين شغل وما بعرف أي واحد آخد.'], ['Nadia', 'Was wäre denn der Unterschied?', 'شو الفرق بيناتهن؟'], ['Tom', 'Bei der ersten Firma würde ich mehr verdienen, aber ich müsste jeden Tag pendeln.', 'بأول شركة كنت بقبض أكتر، بس كان لازم سافر كل يوم.'], ['Nadia', 'Wenn ich du wäre, würde ich die zweite nehmen. Zeit ist auch Geld!', 'لو كنت مكانك كنت أخدت التانية. الوقت كمان مصاري!']], q: [['شو ميزة الشركة الأولى؟', ['أقرب', 'راتب أعلى', 'دوام أقل'], 1], ['شو نصحت ناديا؟', ['الأولى', 'التانية', 'ولا وحدة'], 1]] },
  task: { type: '60s', ar: 'جاوب: شو كنت عملت لو ربحت مليون يورو؟ لو كنت بتحكي ألماني متل لغتك الأم؟', hints: ['Wenn ich … hätte, würde ich …', 'Wenn ich … wäre, …', 'Außerdem würde ich …'] }
},
'4.4': {
  goal: 'توصف إجراءات وخدمات بالسفر بالمجهول (Passiv Präsens).',
  v: [['servieren', 'يقدّم (أكل)', 'v', ''], ['verschieben', 'يأجّل', 'v', ''], ['das Gepäck', 'الأمتعة', 'n', ''], ['kontrollieren', 'يفحص', 'v', ''], ['warten (Technik)', 'يصين', 'v', 'Die Busse werden gewartet.']],
  tr: [['حوّل لـ Passiv', 'Man serviert das Frühstück um sieben.', 'Das Frühstück wird um sieben serviert.'], ['حوّل لـ Passiv', 'Man kontrolliert die Tickets.', 'Die Tickets werden kontrolliert.']],
  qa: [['Wie wird in deinem Land Kaffee gemacht?', 'Bei uns wird Kaffee mit Kardamom gekocht.'], ['Was wird in deinem Hotel jeden Tag gemacht?', 'Das Zimmer wird geputzt, und die Handtücher werden gewechselt.'], ['Welche Sprachen werden in deinem Heimatland gesprochen?', 'In Syrien wird vor allem Arabisch gesprochen, aber auch Kurdisch.']],
  dlg: { title: 'An der Rezeption', lines: [['Gast', 'Wann wird das Frühstück serviert?', 'إمتى بينقدّم الفطور؟'], ['Rezeption', 'Von sieben bis zehn Uhr im ersten Stock.', 'من سبعة لعشرة بالطابق الأول.'], ['Gast', 'Und wird das Zimmer heute noch geputzt?', 'وبتنضف الغرفة اليوم؟'], ['Rezeption', 'Ja, am Vormittag.', 'إي، قبل الضهر.']], q: [['لحد إمتى الفطور؟', ['9', '10', '11'], 1], ['إمتى بتنضف الغرفة؟', ['قبل الضهر', 'المسا', 'بكرا'], 0]] },
  task: { type: 'short', ar: 'اوصف 5 أشيا بتصير بمكان شغلك أو مدرستك بالـ Passiv (… wird … gemacht).', hints: ['Morgens wird …', 'Die Post wird …', 'Hier werden …'] }
},
'4.5': {
  goal: 'تحكي عن أحداث بالماضي بالمجهول (wurde / ist … worden).',
  v: [['bauen', 'يبني', 'v', ''], ['renovieren', 'يجدد', 'v', ''], ['empfangen', 'يستقبل', 'v', 'empfängt – empfing – hat empfangen'], ['streichen', 'يلغي (رحلة)', 'v', 'strich – hat gestrichen'], ['liefern', 'يسلّم / يوصّل', 'v', '']],
  tr: [['Passiv Präteritum', 'Man baute die Brücke 1990.', 'Die Brücke wurde 1990 gebaut.'], ['Passiv Perfekt', 'Man hat den Flug gestrichen.', 'Der Flug ist gestrichen worden.']],
  qa: [['Bist du schon einmal am Flughafen abgeholt worden?', 'Ja, als ich nach Deutschland kam, wurde ich von meinem Bruder abgeholt.'], ['Was wurde in deiner Stadt in letzter Zeit gebaut?', 'Es wurde ein neues Einkaufszentrum gebaut.'], ['Wurde deine Wohnung schon einmal renoviert?', 'Ja, letztes Jahr wurden die Küche und das Bad renoviert.']],
  dlg: { title: 'Der verlorene Koffer', lines: [['Reisender', 'Mein Koffer ist nicht angekommen!', 'شنطتي ما وصلت!'], ['Mitarbeiterin', 'Einen Moment … Ihr Koffer wurde in Frankfurt gefunden.', 'لحظة… شنطتك انلقت بفرانكفورت.'], ['Reisender', 'Gott sei Dank! Wann wird er geliefert?', 'الحمد لله! إمتى بتنبعت؟'], ['Mitarbeiterin', 'Er wird morgen zu Ihrem Hotel gebracht.', 'بكرا بتنجاب لفندقك.']], q: [['وين انلقت الشنطة؟', ['برلين', 'فرانكفورت', 'ميونخ'], 1], ['لوين رح تنجاب؟', ['البيت', 'الفندق', 'المطار'], 1]] },
  task: { type: 'connected', ar: 'احكي عن مدينتك أو بناية معروفة: إمتى انبنت، شو انجدد، شو تغيّر (Passiv بالماضي).', hints: ['… wurde im Jahr … gebaut.', 'Später wurde …', 'Vor kurzem ist … worden.'] }
},
'4.6': {
  goal: 'تفهم القواعد والإشارات بالأماكن العامة (Passiv مع فعل ناقص، Zustandspassiv).',
  v: [['abgeben', 'يسلّم', 'v', ''], ['rauchen', 'يدخّن', 'v', ''], ['besetzt', 'مشغول', 'adj', ''], ['sich anmelden', 'يسجّل', 'v', ''], ['entwerten', 'يختم (تذكرة)', 'v', '']],
  tr: [['Passiv مع فعل ناقص', 'Man muss das Formular unterschreiben.', 'Das Formular muss unterschrieben werden.'], ['Zustandspassiv', 'Man hat die Tür geschlossen. (النتيجة)', 'Die Tür ist geschlossen.']],
  qa: [['Was darf im Zug nicht gemacht werden?', 'Im Zug darf nicht geraucht werden.'], ['Was muss vor einer Reise erledigt werden?', 'Die Tickets müssen gebucht und der Koffer muss gepackt werden.'], ['Ist dein Supermarkt sonntags geöffnet?', 'Nein, sonntags ist er geschlossen.']],
  dlg: { title: 'Am Bahnhof', lines: [['Tourist', 'Kann man hier Fahrkarten kaufen?', 'بيمكن شراء تذاكر هون؟'], ['Mitarbeiter', 'Nein, der Schalter ist heute geschlossen. Tickets können aber am Automaten gekauft werden.', 'لا، الشباك مسكّر اليوم. بس التذاكر بتنشرى من الجهاز.'], ['Tourist', 'Und muss das Ticket entwertet werden?', 'ولازم تنختم التذكرة؟'], ['Mitarbeiter', 'Ja, bevor Sie einsteigen.', 'إي، قبل ما تطلع.']], q: [['وين بتنشرى التذاكر؟', ['بالشباك', 'بالجهاز', 'بالباص'], 1], ['إمتى لازم تنختم؟', ['بعد الرحلة', 'قبل ما يطلع', 'ما لازم'], 1]] },
  task: { type: 'short', ar: 'اكتب 5 قواعد لبيتك أو مكان شغلك بالـ Passiv: … darf nicht … werden / … muss … werden.', hints: ['Hier darf nicht …', 'Der Müll muss …', 'Die Tür muss …'] }
},
'4.7': {
  goal: 'تتصرف بمواقف السفر: حجز، تأخير، إلغاء، تبديل قطار.',
  v: [['umsteigen', 'يبدّل (قطار)', 'v', 'ist umgestiegen'], ['das Gleis, -e', 'الرصيف', 'n', ''], ['die Ermäßigung, -en', 'التخفيض', 'n', ''], ['stornieren', 'يلغي (حجز)', 'v', ''], ['die Unterkunft, -künfte', 'السكن (بالسفر)', 'n', '']],
  tr: [['اسأل عن تبديل القطار', '(nach Köln)', 'Wo muss ich umsteigen, um nach Köln zu kommen?'], ['اشرح سبب الإلغاء', 'Ich storniere die Reise. Ich bin krank.', 'Ich habe die Reise storniert, weil ich krank war.']],
  qa: [['Wie reist du am liebsten?', 'Am liebsten reise ich mit dem Zug, weil es bequem ist.'], ['Was war deine schönste Reise?', 'Meine schönste Reise war nach Istanbul, weil die Stadt so vielfältig ist.'], ['Was machst du, wenn dein Zug Verspätung hat?', 'Ich informiere mich in der App und suche eine andere Verbindung.']],
  dlg: { title: 'Zug fällt aus', lines: [['Reisende', 'Entschuldigung, der Zug nach München fällt aus. Was soll ich jetzt machen?', 'عفواً، القطار لميونخ انلغى. شو لازم اعمل هلأ؟'], ['Mitarbeiter', 'Sie können den nächsten ICE um 14:20 Uhr nehmen. Ihr Ticket gilt.', 'فيكي تاخدي القطار السريع الجاي الساعة 14:20. تذكرتك بتمشي.'], ['Reisende', 'Von welchem Gleis fährt er ab?', 'من أي رصيف بيطلع؟'], ['Mitarbeiter', 'Von Gleis 7.', 'من الرصيف 7.']], q: [['إمتى القطار الجاي؟', ['14:00', '14:20', '15:20'], 1], ['أي رصيف؟', ['5', '7', '9'], 1]] },
  task: { type: 'connected', ar: 'تمثيل: قطارك انلغى وعندك موعد مهم. اسأل عن بديل، واتصل بالشخص اللي عندك موعد معه واعتذر.', hints: ['Mein Zug fällt aus. Gibt es …?', 'Wann fährt der nächste …?', 'Es tut mir leid, ich komme später, weil …'] }
}
};
