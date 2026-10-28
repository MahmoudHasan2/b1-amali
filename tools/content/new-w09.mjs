// New lessons — Week 9 (family, society, community).
export default [
{
  key: 'familie', title: 'الحياة العائلية وشغل البيت', de: 'Familienleben & Haushalt',
  goal: 'توصف عيلتك وكيف بتتقاسموا المهام، وتقارن مع ألمانيا.',
  s: [
    ['Bei uns zu Hause *teilen* wir die Hausarbeit *auf*: Ich koche, und mein Mann macht den Abwasch.', 'عنا بالبيت منقسم شغل البيت: أنا بطبخ وجوزي بيجلي.', 's'],
    ['Am Wochenende frühstücken wir immer *gemeinsam*, das ist uns sehr wichtig.', 'بنهاية الأسبوع دايماً منفطر سوا، هاد كتير مهم إلنا.', 's'],
    ['Wer *kümmert sich* bei euch *um* die Kinder, wenn ihr beide arbeitet?', 'مين بيهتم بالأولاد عندكم لما إنتو التنين بتشتغلوا؟', 'q'],
    ['Vormittags sind sie im Kindergarten, und nachmittags *passt* meine Schwiegermutter *auf* sie *auf*.', 'قبل الضهر بيكونوا بالروضة وبعد الضهر حماتي بتنتبه عليهم.', 'a'],
    ['Meine Eltern leben noch in Syrien, und ich *vermisse* sie sehr.', 'أهلي لسا عايشين بسوريا وكتير مشتاقلهم.', 's'],
    ['Mein Bruder und ich haben uns früher oft *gestritten*, *aber* heute *verstehen* wir *uns* super.', 'أنا وأخي كنا نتخانق كتير زمان، بس اليوم منتفاهم كتير منيح.', 'c'],
    ['*Ich finde*, Männer und Frauen sollten sich die Hausarbeit *gerecht* teilen.', 'بلاقي إنو الرجال والنسوان لازم يتقاسموا شغل البيت بعدل.', 'o'],
    ['*Seit* das Baby da *ist*, haben wir kaum Zeit für uns. Wie macht ihr das?', 'من وقت ما إجا البيبي ما عاد عنا وقت لحالنا. كيف بتدبروها إنتو؟', 'p'],
    ['Wir *nehmen uns* einmal im Monat einen Abend nur für uns zwei, und Oma passt auf die Kinder auf.', 'مرة بالشهر منخصص سهرة إلنا نحنا الاتنين بس، وتيتا بتنتبه عالولاد.', 'a'],
    ['In meiner Heimat wohnen oft drei Generationen zusammen, *während* in Deutschland viele ältere Menschen allein *leben*, *was* ich manchmal traurig *finde*.', 'ببلدي غالباً تلات أجيال ساكنين سوا، بينما بألمانيا كتير كبار بالسن عايشين لحالهم، وهاد بلاقيه أحياناً حزين.', 'l']
  ],
  v: [
    ['die Hausarbeit', 'شغل البيت', 'n', 'die Hausarbeit aufteilen'],
    ['den Abwasch machen', 'يجلي الصحون', 'x', ''],
    ['aufpassen auf + Akk', 'ينتبه على', 'v', 'passt auf – passte auf – hat aufgepasst'],
    ['die Schwiegermutter, -mütter', 'الحماية', 'n', ''],
    ['sich streiten', 'يتخانق', 'v', 'streitet – stritt – hat gestritten'],
    ['sich verstehen mit + Dat', 'يتفاهم مع', 'v', ''],
    ['die Generation, -en', 'جيل', 'n', ''],
    ['gerecht', 'عادل', 'adj', '']
  ],
  tr: [
    ['اربط بـ während (مقارنة)', 'Bei uns wohnen alle zusammen. Hier leben viele allein.', 'Während bei uns alle zusammen wohnen, leben hier viele allein.'],
    ['قارن الماضي بالحاضر', 'Wir streiten uns oft.', 'Früher haben wir uns oft gestritten, aber heute nicht mehr.'],
    ['حوّلها لسؤال', 'Die Oma passt auf die Kinder auf.', 'Wer passt auf die Kinder auf?']
  ],
  qa: [
    ['Wie groß ist deine Familie?', 'Ich habe zwei Brüder und eine Schwester. Meine Eltern leben in Damaskus.'],
    ['Wer macht bei dir zu Hause welche Aufgaben?', 'Ich kaufe ein und putze, meine Frau kocht, und die Kinder räumen ihre Zimmer auf.'],
    ['Was ist in deiner Familie typisch?', 'Typisch ist, dass wir freitags alle zusammen essen.']
  ],
  dlg: { title: 'Wer macht was?', lines: [
    ['Sophie', 'Schatz, kannst du heute die Kinder abholen? Ich habe eine Besprechung bis sechs.', 'حبيبي، بتقدر تجيب الولاد اليوم؟ عندي اجتماع لحد الستة.'],
    ['Ali', 'Klar. Soll ich auf dem Rückweg auch einkaufen?', 'أكيد. بدك اتسوق كمان وأنا راجع؟'],
    ['Sophie', 'Das wäre super. Wir brauchen Milch und Brot.', 'هاد بيكون ممتاز. بدنا حليب وخبز.'],
    ['Ali', 'Okay. Und wer kocht heute?', 'تمام. ومين بيطبخ اليوم؟'],
    ['Sophie', 'Ich koche, wenn ich nach Hause komme. Dafür bist du mit dem Abwasch dran.', 'أنا بطبخ لما ارجع عالبيت. وإنت دورك بالجلي.']
  ], q: [
    ['مين بيجيب الولاد؟', ['صوفي', 'علي', 'التيتا'], 1],
    ['شو دور علي بعد الأكل؟', ['الطبخ', 'الجلي', 'التسوق'], 1]
  ] },
  task: { type: '60s', ar: 'احكي عن عيلتك: مين معك، كيف بتقسموا شغل البيت، وشي مختلف عن العائلات الألمانية.', hints: ['Meine Familie besteht aus …', 'Bei uns macht …, und …', 'Was ich an meiner Familie mag: …', 'Im Vergleich zu deutschen Familien …'] }
},
{
  key: 'erziehung', title: 'تربية الأولاد', de: 'Kinder erziehen',
  goal: 'تناقش أساليب التربية وتعطي نصايح وتعبّر عن موقف مع أو ضد.',
  s: [
    ['Kinder brauchen klare Regeln, *aber* auch viel Liebe und *Geduld*.', 'الأولاد بحاجة لقواعد واضحة، بس كمان لحب وصبر كتير.', 's'],
    ['Meine Tochter geht *seit* September in die erste Klasse.', 'بنتي من أيلول بالصف الأول.', 's'],
    ['*Sollten* Kinder im Haushalt helfen? – Ja, finde ich schon, je nach Alter.', 'لازم الأولاد يساعدوا بشغل البيت؟ – إي بلاقي هيك، حسب العمر.', 'q'],
    ['Mein Sohn will nie seine Hausaufgaben machen. Was soll ich tun?', 'ابني ما بدو أبداً يعمل وظايفه. شو لازم اعمل؟', 'p'],
    ['Versuch doch, eine feste Zeit für die Hausaufgaben *einzuführen*, und *lob* ihn, *wenn* er es *schafft*.', 'جرّب تحدد وقت ثابت للوظايف، وامدحه لما يقدر يخلّصها.', 'a'],
    ['Wir *erziehen* unsere Kinder *zweisprachig*: Zu Hause sprechen wir Arabisch, im Kindergarten lernen sie Deutsch.', 'منربي أولادنا على لغتين: بالبيت منحكي عربي وبالروضة بيتعلموا ألماني.', 'c'],
    ['*Ich bin dagegen, dass* kleine Kinder stundenlang am Tablet *spielen*.', 'أنا ضد إنو الأولاد الصغار يلعبوا ساعات عالتابلت.', 'o'],
    ['In Deutschland dürfen Eltern ihre Kinder nicht schlagen, das ist gesetzlich *verboten*.', 'بألمانيا ممنوع الأهل يضربوا ولادهم، هاد ممنوع بالقانون.', 's'],
    ['Der *Elternabend* ist am Dienstag – wer von uns geht hin?', 'اجتماع الأهالي الثلاثاء – مين منا رح يروح؟', 'x'],
    ['*Als* ich klein *war*, *durfte* ich viel weniger als meine Kinder heute, aber ich glaube, *dass* beide Erziehungsstile Vor- und Nachteile *haben*.', 'لما كنت صغير كان مسموحلي أقل بكتير من ولادي اليوم، بس بعتقد إنو الطريقتين بالتربية إلهن ميزات وعيوب.', 'l']
  ],
  v: [
    ['erziehen', 'يربّي', 'v', 'erzieht – erzog – hat erzogen; die Erziehung'],
    ['die Geduld', 'الصبر', 'n', 'Geduld haben'],
    ['loben', 'يمدح', 'v', ''],
    ['einführen', 'يعتمد / يدخّل (نظام)', 'v', 'eine Regel einführen'],
    ['zweisprachig', 'ثنائي اللغة', 'adj', ''],
    ['verboten / erlaubt', 'ممنوع / مسموح', 'adj', ''],
    ['der Elternabend, -e', 'اجتماع الأهالي', 'n', ''],
    ['dagegen / dafür sein', 'يكون ضد / مع', 'x', 'Ich bin dagegen, dass …']
  ],
  tr: [
    ['عبّر عن موقف ضد', 'Kinder spielen stundenlang am Tablet.', 'Ich bin dagegen, dass Kinder stundenlang am Tablet spielen.'],
    ['حوّل لـ Präteritum مع als', 'Ich bin klein. Ich darf wenig.', 'Als ich klein war, durfte ich wenig.'],
    ['اعطي نصيحة بـ doch', 'Führ eine feste Zeit ein.', 'Versuch doch, eine feste Zeit einzuführen.']
  ],
  qa: [
    ['Was ist bei der Erziehung am wichtigsten?', 'Am wichtigsten ist, dass Kinder sich geliebt und sicher fühlen.'],
    ['Wie war deine Erziehung?', 'Meine Eltern waren ziemlich streng, aber sie waren immer für mich da.'],
    ['Ab wann sollten Kinder ein Handy haben?', 'Meiner Meinung nach nicht vor zwölf Jahren.']
  ],
  dlg: { title: 'Beim Elternabend', lines: [
    ['Lehrerin', 'Ihr Sohn ist sehr hilfsbereit, aber im Unterricht oft unkonzentriert.', 'ابنك كتير خدوم، بس بالحصة غالباً مش مركّز.'],
    ['Vater', 'Das tut mir leid. Er schläft abends spät ein, vielleicht liegt es daran.', 'آسف. بينام متأخر بالليل، يمكن هاد السبب.'],
    ['Lehrerin', 'Das könnte sein. Wie viel Zeit verbringt er am Bildschirm?', 'ممكن. قديش بيقضي وقت قدام الشاشة؟'],
    ['Vater', 'Ehrlich gesagt zu viel. Wir werden das ab jetzt begrenzen.', 'بصراحة كتير. رح نحدده من هلأ.'],
    ['Lehrerin', 'Gut. Sprechen wir in einem Monat noch einmal darüber?', 'تمام. منحكي فيه مرة تانية بعد شهر؟']
  ], q: [
    ['شو المشكلة بالحصة؟', ['بيحكي كتير', 'مش مركّز', 'بيتأخر'], 1],
    ['شو رح يعمل الأب؟', ['يحدد وقت الشاشة', 'يغيّر المدرسة', 'ما بيعمل شي'], 0]
  ] },
  task: { type: '60s', ar: 'قارن بين التربية ببلدك وبألمانيا: شو مختلف، شو بيعجبك، وكيف بدك تربي ولادك.', hints: ['In meiner Heimat …, in Deutschland dagegen …', 'Mir gefällt, dass …', 'Ich finde es nicht gut, dass …', 'Ich möchte meine Kinder …'] }
},
{
  key: 'haustiere', title: 'الحيوانات الأليفة', de: 'Haustiere',
  goal: 'تحكي عن الحيوانات الأليفة، القواعد بالشقة، والمسؤولية.',
  s: [
    ['Wir haben eine Katze, sie heißt Mimi und ist schon zehn Jahre alt.', 'عنا قطة، اسمها ميمي وعمرها عشر سنين.', 's'],
    ['Ein Hund braucht viel Bewegung, man muss mehrmals am Tag mit ihm *rausgehen*.', 'الكلب بحاجة لحركة كتير، لازم تطلع معه كذا مرة باليوم.', 's'],
    ['*Darf* man in eurer Wohnung *Haustiere halten*?', 'مسموح تربّوا حيوانات أليفة بشقتكم؟', 'q'],
    ['Kleintiere sind erlaubt, *aber* für einen Hund braucht man die *Erlaubnis* des Vermieters.', 'الحيوانات الصغيرة مسموحة، بس للكلب بدك موافقة صاحب البيت.', 'a'],
    ['Die Kinder *wünschen sich* unbedingt einen Hund, aber ich habe *Angst vor* Hunden.', 'الأولاد بدهم كلب بأي شكل، بس أنا بخاف من الكلاب.', 'p'],
    ['Vielleicht *könntet* ihr erst einmal mit einem Kaninchen *anfangen*?', 'يمكن تبلشوا أول شي بأرنب؟', 'a'],
    ['*Meiner Ansicht nach* sollte man sich ein Tier nur *anschaffen*, *wenn* man wirklich Zeit dafür *hat*.', 'برأيي ما لازم الواحد ياخد حيوان إلا إذا عنده وقت فعلاً إله.', 'o'],
    ['*Könntest* du im Urlaub unsere Katze *füttern*?', 'بتقدر تطعمي قطتنا وإحنا بالإجازة؟', 'x'],
    ['In Deutschland muss man für einen Hund *Hundesteuer* zahlen.', 'بألمانيا لازم تدفع ضريبة عالكلب.', 's'],
    ['*Obwohl* Haustiere viel Arbeit und Kosten *machen*, finde ich, *dass* sie besonders für Kinder und ältere Menschen eine große Freude *sind*.', 'رغم إنو الحيوانات الأليفة بدها شغل وتكاليف كتير، بلاقي إنها فرحة كبيرة خصوصاً للأولاد والكبار بالسن.', 'l']
  ],
  v: [
    ['das Haustier, -e', 'حيوان أليف', 'n', 'ein Haustier halten'],
    ['sich etwas anschaffen', 'يقتني / يشتري (شي دائم)', 'v', ''],
    ['füttern', 'يطعمي (حيوان)', 'v', ''],
    ['die Erlaubnis', 'الإذن / الموافقة', 'n', 'die Erlaubnis bekommen'],
    ['Angst haben vor + Dat', 'يخاف من', 'x', ''],
    ['sich etwas wünschen', 'يتمنى', 'v', 'sich einen Hund wünschen'],
    ['die Hundesteuer', 'ضريبة الكلب', 'n', '']
  ],
  tr: [
    ['اقترح بـ Konjunktiv II', 'Fangt mit einem Kaninchen an.', 'Ihr könntet erst einmal mit einem Kaninchen anfangen.'],
    ['حوّل لشرط خيالي', 'Ich habe keine Zeit. Ich schaffe mir keinen Hund an.', 'Wenn ich Zeit hätte, würde ich mir einen Hund anschaffen.'],
    ['اطلب خدمة بأدب', 'Füttere unsere Katze!', 'Könntest du bitte unsere Katze füttern?']
  ],
  qa: [
    ['Hast du ein Haustier?', 'Nein, aber als Kind hatte ich einen Vogel.'],
    ['Sind Haustiere in deinem Heimatland beliebt?', 'Katzen ja, Hunde in der Wohnung sind eher selten.'],
    ['Welche Vorteile haben Haustiere?', 'Sie machen Freude, und mit einem Hund bewegt man sich mehr.']
  ],
  dlg: { title: 'Katzensitter gesucht', lines: [
    ['Nachbarin', 'Hallo Omar! Wir fahren nächste Woche in den Urlaub. Könntest du vielleicht Mimi füttern?', 'هلا عمر! رايحين بإجازة الأسبوع الجاي. يمكن تقدر تطعمي ميمي؟'],
    ['Omar', 'Klar, gern. Wie oft muss ich kommen?', 'أكيد، بكل سرور. قديش مرة لازم إجي؟'],
    ['Nachbarin', 'Einmal am Tag reicht. Das Futter steht in der Küche.', 'مرة باليوم بكفي. الأكل بالمطبخ.'],
    ['Omar', 'Und das Katzenklo?', 'وصندوق رمل القطة؟'],
    ['Nachbarin', 'Das bitte alle zwei Tage sauber machen. Vielen Dank, ich bringe dir etwas mit!', 'نضّفه كل يومين لو سمحت. شكراً كتير، رح جبلك شي معي!']
  ], q: [
    ['قديش مرة لازم يجي عمر؟', ['مرتين باليوم', 'مرة باليوم', 'مرة بالأسبوع'], 1],
    ['وين أكل القطة؟', ['بالمطبخ', 'بالقبو', 'عند الجيران'], 0]
  ] },
  task: { type: 'presentation', ar: 'عرض قصير (1–2 دقيقة): «حيوانات أليفة بالشقة؟» — مقدمة، تجربتك، الوضع ببلدك، ميزات وعيوب، رأيك، وخاتمة.', hints: ['Heute spreche ich über …', 'Ich habe selbst …', 'In meinem Heimatland …', 'Einerseits …, andererseits …', 'Ich komme zum Schluss: …'] }
},
{
  key: 'nachbarschaft', title: 'الحارة والتطوع', de: 'Nachbarschaft & Ehrenamt',
  goal: 'تحكي عن المشاركة بالمجتمع وتنظم نشاط للحارة.',
  s: [
    ['In unserem *Viertel* gibt es ein Nachbarschaftsfest, zu dem jeder etwas zu essen mitbringt.', 'بحارتنا في حفلة جيران، كل واحد بيجيب فيها شي ياكلوه.', 's'],
    ['Ich helfe samstags *ehrenamtlich* bei der Tafel und *verteile* Lebensmittel.', 'أيام السبت بتطوع بالـ Tafel وبوزّع أكل.', 's', 'die Tafel = جمعية بتوزع أكل للمحتاجين'],
    ['*Engagierst* du *dich* auch irgendwo? – Ja, ich übersetze für neue Familien beim Amt.', 'إنت كمان بتتطوع بمكان ما؟ – إي، بترجم للعائلات الجديدة بالدوائر.', 'q'],
    ['Unsere ältere Nachbarin kann nicht mehr gut laufen, *deshalb* kaufe ich manchmal für sie ein.', 'جارتنا الكبيرة بالعمر ما عادت تقدر تمشي منيح، لهيك أحياناً بتسوقلها.', 's'],
    ['Im Park liegt überall Müll. Wollen wir nicht eine Aufräumaktion organisieren?', 'بالحديقة في زبالة بكل مكان. ما بدنا ننظم حملة تنضيف؟', 'p'],
    ['Gute Idee! Ich frage bei der Stadt *nach*, *ob* sie uns Handschuhe und Säcke *geben*.', 'فكرة حلوة! رح اسأل البلدية إذا بيعطونا كفوف وأكياس.', 'a'],
    ['*Ich finde es toll, dass* so viele Menschen in ihrer Freizeit anderen *helfen*.', 'بلاقي رائع إنو ناس كتير بيساعدوا غيرهم بوقت فراغهم.', 'o'],
    ['Durch das *Ehrenamt* habe ich viele nette Leute kennengelernt und mein Deutsch verbessert.', 'من خلال التطوع تعرّفت على ناس لطاف كتير وحسّنت ألمانيي.', 'c'],
    ['*Es ist selbstverständlich*, dass man seinen Nachbarn hilft.', 'شي طبيعي إنو الواحد يساعد جيرانه.', 'x'],
    ['*Wenn* jeder nur eine Stunde pro Woche für die *Gemeinschaft* *investieren würde*, *wäre* unser Viertel viel lebendiger und freundlicher.', 'لو كل واحد استثمر بس ساعة بالأسبوع للمجتمع كانت حارتنا أكتر حيوية ولطافة.', 'l']
  ],
  v: [
    ['das Viertel, -', 'الحارة / الحي', 'n', 'in einem ruhigen Viertel wohnen'],
    ['ehrenamtlich / das Ehrenamt', 'تطوعي / التطوع', 'adj', ''],
    ['sich engagieren für + Akk', 'يتطوع / ينشط لـ', 'v', ''],
    ['verteilen', 'يوزّع', 'v', ''],
    ['nachfragen', 'يسأل / يستفسر', 'v', 'bei der Stadt nachfragen'],
    ['die Gemeinschaft', 'المجتمع / الجماعة', 'n', ''],
    ['selbstverständlich', 'طبيعي / بديهي', 'adj', '']
  ],
  tr: [
    ['اقترح بسؤال', 'Wir organisieren eine Aufräumaktion.', 'Wollen wir nicht eine Aufräumaktion organisieren?'],
    ['شرط خيالي', 'Jeder hilft. Das Viertel ist schöner.', 'Wenn jeder helfen würde, wäre das Viertel schöner.'],
    ['سؤال غير مباشر بـ ob', 'Gibt die Stadt uns Säcke?', 'Ich frage nach, ob die Stadt uns Säcke gibt.']
  ],
  qa: [
    ['Hast du schon einmal ehrenamtlich gearbeitet?', 'Ja, ich habe in einer Unterkunft für Geflüchtete beim Übersetzen geholfen.'],
    ['Wie ist der Kontakt zu deinen Nachbarn?', 'Wir grüßen uns und reden manchmal im Treppenhaus.'],
    ['Ist Ehrenamt in deinem Heimatland üblich?', 'Bei uns hilft man eher in der Familie und in der Moschee, aber nicht so organisiert wie hier.']
  ],
  dlg: { title: 'Aufräumaktion im Park', lines: [
    ['Nachbar', 'Hast du den Zettel gesehen? Am Samstag ist eine Aufräumaktion im Park.', 'شفتي الورقة؟ السبت في حملة تنضيف بالحديقة.'],
    ['Dana', 'Ja! Ich bin dabei. Wann geht es los?', 'إي! أنا مشاركة. إمتى بتبلش؟'],
    ['Nachbar', 'Um zehn Uhr am Spielplatz. Handschuhe bekommt man dort.', 'الساعة عشرة عند ملعب الولاد. الكفوف بتنعطى هناك.'],
    ['Dana', 'Super. Soll ich einen Kuchen für danach backen?', 'ممتاز. بدك اخبز كيك لبعدين؟'],
    ['Nachbar', 'Das wäre klasse! Danach gibt es nämlich ein kleines Picknick.', 'هاد بيكون رائع! لأنو بعدها في نزهة صغيرة.']
  ], q: [
    ['وين نقطة اللقاء؟', ['عند ملعب الولاد', 'عند البلدية', 'عند المحطة'], 0],
    ['شو رح تعمل دانا؟', ['تجيب كفوف', 'تخبز كيك', 'تجيب أكياس'], 1]
  ] },
  task: { type: 'connected', ar: 'اقترح على جيرانك نشاط للحارة (حفلة، تنضيف، سوق مستعمل): شو، إمتى، وين، ومين بيعمل شو.', hints: ['Ich habe eine Idee: …', 'Wie wäre es, wenn …?', 'Wer kümmert sich um …?', 'Ich übernehme …'] }
},
{
  key: 'gesellschaft', title: 'المجتمع والعيش المشترك', de: 'Gesellschaft & Zusammenleben',
  goal: 'تحكي عن الفروق الثقافية والاندماج وتعبّر عن رأي مدروس.',
  s: [
    ['In Deutschland leben Menschen aus vielen verschiedenen Ländern zusammen.', 'بألمانيا عايشين ناس من بلاد كتيرة مختلفة مع بعض.', 's'],
    ['Am Anfang war für mich vieles *fremd*, zum Beispiel die Pünktlichkeit und die vielen Regeln.', 'بالبداية كتير أشيا كانت غريبة عليّ، مثلاً الالتزام بالمواعيد والقواعد الكتيرة.', 's'],
    ['Was hat dich in Deutschland am meisten *überrascht*?', 'شو أكتر شي فاجأك بألمانيا؟', 'q'],
    ['Mich hat überrascht, *dass* die Geschäfte sonntags geschlossen *sind*.', 'فاجأني إنو المحلات مسكرة أيام الأحد.', 'a'],
    ['Manche Leute haben *Vorurteile* gegenüber Ausländern, das verletzt mich manchmal.', 'بعض الناس عندهم أحكام مسبقة عن الأجانب، وهاد أحياناً بيجرحني.', 'p'],
    ['Dann hilft oft ein offenes Gespräch, *denn* viele kennen einfach keine Menschen aus anderen Kulturen.', 'وقتها غالباً بيساعد حديث صريح، لأنو كتير ناس ببساطة ما بيعرفوا حدا من ثقافات تانية.', 'a'],
    ['*Ich bin der Meinung, dass* *Integration* von beiden Seiten kommen *muss*.', 'أنا برأيي إنو الاندماج لازم يجي من الطرفين.', 'o'],
    ['Wer in Deutschland *wählen* darf, sollte das auch tun.', 'اللي مسموحله ينتخب بألمانيا لازم يعمل هيك.', 'o'],
    ['Wir sind *zwar* verschieden, *aber* wir haben mehr *gemeinsam*, *als* man denkt.', 'صحيح نحنا مختلفين، بس عنا أشيا مشتركة أكتر مما الواحد بيفكر.', 'x'],
    ['*Nachdem* ich einige Jahre hier *gelebt hatte*, habe ich verstanden, *dass* man seine eigene Kultur nicht verlieren *muss*, *um* sich in einer neuen Gesellschaft *wohlzufühlen*.', 'بعد ما عشت هون كم سنة فهمت إنو ما لازم تخسر ثقافتك لحتى ترتاح بمجتمع جديد.', 'l']
  ],
  v: [
    ['die Gesellschaft, -en', 'المجتمع', 'n', ''],
    ['fremd', 'غريب', 'adj', 'Das ist mir fremd.'],
    ['überraschen', 'يفاجئ', 'v', 'Das hat mich überrascht.'],
    ['das Vorurteil, -e', 'حكم مسبق', 'n', 'Vorurteile gegenüber + Dat'],
    ['die Integration', 'الاندماج', 'n', ''],
    ['wählen', 'ينتخب / يختار', 'v', 'die Wahl, -en'],
    ['gemeinsam haben', 'يشترك بـ', 'x', 'Wir haben viel gemeinsam.'],
    ['sich wohlfühlen', 'يرتاح / يحس بالراحة', 'v', '']
  ],
  tr: [
    ['استعمل zwar … aber', 'Wir sind verschieden. Wir verstehen uns.', 'Wir sind zwar verschieden, aber wir verstehen uns.'],
    ['Perfekt + dass', 'Die Geschäfte sind sonntags zu. Das überrascht mich.', 'Mich hat überrascht, dass die Geschäfte sonntags zu sind.'],
    ['استعمل um … zu', 'Man lernt die Sprache. Man versteht die Kultur.', 'Man lernt die Sprache, um die Kultur zu verstehen.']
  ],
  qa: [
    ['Was ist in Deutschland anders als in deinem Heimatland?', 'Hier ist man sehr pünktlich und plant alles früh, bei uns ist man spontaner.'],
    ['Was gefällt dir an Deutschland?', 'Mir gefällt, dass vieles gut organisiert ist und dass man sich sicher fühlt.'],
    ['Was vermisst du aus deiner Heimat?', 'Ich vermisse vor allem meine Familie und das Essen.']
  ],
  dlg: { title: 'Kulturunterschiede', lines: [
    ['Kollege', 'Sag mal, was war für dich am Anfang in Deutschland am schwierigsten?', 'قلّي، شو كان أصعب شي عليك بالبداية بألمانيا؟'],
    ['Ibrahim', 'Ehrlich gesagt die Direktheit. Wenn jemand etwas nicht gut fand, hat er es sofort gesagt.', 'بصراحة الصراحة المباشرة. إذا حدا ما عجبه شي كان يقوله فوراً.'],
    ['Kollege', 'Ja, wir sind manchmal ziemlich direkt. Hat dich das gestört?', 'إي، نحنا أحياناً مباشرين كتير. ضايقك هالشي؟'],
    ['Ibrahim', 'Am Anfang schon. Inzwischen finde ich es eigentlich praktisch: Man weiß immer, woran man ist.', 'بالبداية إي. هلأ بالعكس بلاقيه عملي: دايماً بتعرف وين واقف.']
  ], q: [
    ['شو كان صعب على إبراهيم؟', ['الطقس', 'الصراحة المباشرة', 'الأكل'], 1],
    ['كيف شايفها هلأ؟', ['عملية', 'مزعجة', 'مش مهمة'], 0]
  ] },
  task: { type: 'presentation', ar: 'عرض (1–2 دقيقة): «الحياة بين ثقافتين» — مقدمة، شي فاجأك، فرق بين بلدك وألمانيا، ميزة وصعوبة، رأيك بالاندماج، خاتمة.', hints: ['Ich möchte über … sprechen.', 'Mich hat überrascht, dass …', 'In meinem Heimatland …, hier …', 'Ich bin der Meinung, dass …', 'Zum Schluss möchte ich sagen …'] }
}
];
