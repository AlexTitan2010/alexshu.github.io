window.LT_DATA = window.LT_DATA || [];
window.LT_DATA.push({
 "order": 50,
 "title": "3A–3E · Kur gyveni? Дом, квартира, город",
 "subtitle": "Дом и комнаты, мебель и декор, объявления о квартирах и звонок хозяину, города Литвы; прилагательные в местном падеже и во множественном числе, этажи, степени сравнения, предлоги места, условное наклонение, kiek и man reikia с родительным, наречия.",
 "sections": [
  {
   "id": "u3-namas",
   "title": "Namas ir kambariai — дом и комнаты",
   "subtitle": "3A · Дом снаружи, комнаты, платежи; durys и grindys, namas и namai.",
   "rule": "<p><b>Жильё</b> (повторение 1B): <i lang=\"lt\">namas, butas, daugiabutis, bendrabutis, kotedžas</i>. <b>Снаружи:</b> <i lang=\"lt\">stogas, balkonas, durys, laiptai, laiptinė, garažas, kiemas, vartai</i>. <b>Комнаты:</b> <i lang=\"lt\">virtuvė, svetainė, miegamasis, vonia, tualetas, koridorius, prieškambaris, holas, terasa</i>.</p><p>Где? — местный падеж без предлога: <i lang=\"lt\">miegamasis → miegamajame, koridorius → koridoriuje, prieškambaris → prieškambaryje, rūsys → rūsyje, holas → hole, terasa → terasoje</i>.</p><p>Слова из таблицы ниже в этих значениях употребляются <b>только во множественном числе</b>, хотя по-русски «дверь», «пол» и «потолок» — единственное число. Прилагательное при них тоже во мн. ч.: <i lang=\"lt\">naujos durys, aukštos lubos</i>. Винительный: <i lang=\"lt\">uždaryti duris</i>.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Kas?</th><th>Ko?</th><th>По-русски</th></tr><tr><td>durys</td><td>durų</td><td>дверь</td></tr><tr><td>grindys</td><td>grindų</td><td>пол</td></tr><tr><td>lubos</td><td>lubų</td><td>потолок</td></tr><tr><td>vartai</td><td>vartų</td><td>ворота</td></tr><tr><td>laiptai</td><td>laiptų</td><td>лестница</td></tr></table></div><p><b><i lang=\"lt\">ant</i></b> + родительный — на поверхности: <i lang=\"lt\">ant sienos, ant grindų, ant lubų</i>. А «на кухне», «на балконе» — это место, нужен просто местный падеж: <i lang=\"lt\">virtuvėje, balkone</i>.</p><p><i lang=\"lt\">namas</i> — здание: <i lang=\"lt\">gyvenu sename name</i>. <i lang=\"lt\">namai</i> (мн. ч.) — дом, где мы живём: <i lang=\"lt\">esu namuose = namie</i> (я дома).</p><p>Плата за что? <i lang=\"lt\">mokestis už</i> + винительный: <i lang=\"lt\">elektra → už elektrą, vanduo → už vandenį, dujos → už dujas, šildymas → už šildymą</i>.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "stogas",
       "крыша"
      ],
      [
       "durys",
       "дверь"
      ],
      [
       "laiptai",
       "лестница"
      ],
      [
       "kiemas",
       "двор"
      ],
      [
       "garažas",
       "гараж"
      ]
     ],
     "prompt": "Дом снаружи"
    },
    {
     "type": "match",
     "pairs": [
      [
       "laiptinė",
       "подъезд"
      ],
      [
       "vartai",
       "ворота"
      ],
      [
       "raktas",
       "ключ"
      ],
      [
       "rūsys",
       "подвал"
      ],
      [
       "pašto dėžutė",
       "почтовый ящик"
      ]
     ],
     "prompt": "В доме и у дома"
    },
    {
     "type": "match",
     "pairs": [
      [
       "virtuvė",
       "кухня"
      ],
      [
       "svetainė",
       "гостиная"
      ],
      [
       "miegamasis",
       "спальня"
      ],
      [
       "vonios kambarys",
       "ванная комната"
      ],
      [
       "koridorius",
       "коридор"
      ]
     ],
     "prompt": "Комнаты"
    },
    {
     "type": "match",
     "pairs": [
      [
       "tualetas",
       "туалет"
      ],
      [
       "terasa",
       "терраса"
      ],
      [
       "holas",
       "холл"
      ],
      [
       "vaiko kambarys",
       "детская комната"
      ],
      [
       "prieškambaris",
       "прихожая"
      ]
     ],
     "prompt": "Ещё комнаты"
    },
    {
     "type": "match",
     "pairs": [
      [
       "mokestis",
       "плата"
      ],
      [
       "elektra",
       "электричество"
      ],
      [
       "vanduo",
       "вода"
      ],
      [
       "šildymas",
       "отопление"
      ],
      [
       "dujos",
       "газ"
      ]
     ],
     "prompt": "Платежи"
    },
    {
     "q": "lubos",
     "options": [
      "пол",
      "крыша",
      "потолок"
     ],
     "answer": "потолок",
     "note": "lubos — потолок, grindys — пол, stogas — крыша. Lubos и grindys бывают только во мн. ч.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "гардеробная",
     "options": [
      "laiptinė",
      "drabužinė",
      "katilinė"
     ],
     "answer": "drabužinė",
     "note": "drabužinė ← drabužiai (одежда). Katilinė — котельная, laiptinė — подъезд.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Kambarys, kuriame dirbame namuose, — tai ___.",
     "options": [
      "darbo kambarys",
      "vaiko kambarys",
      "vonios kambarys"
     ],
     "answer": "darbo kambarys",
     "tr": "Комната, в которой мы работаем дома, — это рабочий кабинет.",
     "note": "darbo kambarys — буквально «комната работы»; vaiko kambarys — детская, vonios kambarys — ванная."
    },
    {
     "q": "Čia vakare sėdime su svečiais ir žiūrime televiziją. Tai ___.",
     "options": [
      "vonia",
      "prieškambaris",
      "svetainė"
     ],
     "answer": "svetainė",
     "tr": "Здесь мы вечером сидим с гостями и смотрим телевизор. Это гостиная.",
     "note": "svetainė ← svečias (гость): комната, где принимают гостей."
    },
    {
     "q": "Mūsų bendrabutyje dabar yra ___ durys.",
     "options": [
      "naujas",
      "naujos",
      "nauja"
     ],
     "answer": "naujos",
     "tr": "В нашем общежитии теперь новая дверь.",
     "note": "durys — только мн. ч., женский род: naujos durys, хотя по-русски дверь одна."
    },
    {
     "q": "Tomai, uždaryk ___, prašau.",
     "options": [
      "duris",
      "durys",
      "durų"
     ],
     "answer": "duris",
     "tr": "Томас, закрой дверь, пожалуйста.",
     "note": "uždaryti ką? — винительный: durys → duris."
    },
    {
     "q": "Atsiprašau, aš nežinau ___ kodo.",
     "options": [
      "durys",
      "duris",
      "durų"
     ],
     "answer": "durų",
     "tr": "Извините, я не знаю код от двери.",
     "note": "Чей код? — родительный: durys → durų (durų kodas — код от двери). Kodo — тоже родительный: nežinau ko?"
    },
    {
     "q": "Svetainėje ant ___ kabo didelis laikrodis.",
     "options": [
      "sienoje",
      "sienos",
      "siena"
     ],
     "answer": "sienos",
     "tr": "В гостиной на стене висят большие часы.",
     "note": "siena → ant sienos. Ant + родительный: на поверхности."
    },
    {
     "q": "Vaikai sėdi ant ___ ir žaidžia.",
     "options": [
      "grindų",
      "grindys",
      "grindis"
     ],
     "answer": "grindų",
     "tr": "Дети сидят на полу и играют.",
     "note": "grindys (только мн. ч.) → ant grindų. Ant + родительный."
    },
    {
     "q": "Vonioje ant ___ yra maža lempa.",
     "options": [
      "lubos",
      "lubas",
      "lubų"
     ],
     "answer": "lubų",
     "tr": "В ванной на потолке маленькая лампа.",
     "note": "lubos (только мн. ч.) → ant lubų. Ant + родительный."
    },
    {
     "q": "Mes visada valgome ___.",
     "options": [
      "virtuvė",
      "virtuvėje",
      "ant virtuvės"
     ],
     "answer": "virtuvėje",
     "tr": "Мы всегда едим на кухне.",
     "note": "«На кухне» — место, а не поверхность: местный падеж без предлога. Ant — только «на поверхности»."
    },
    {
     "q": "Vaikai jau miega ___.",
     "options": [
      "miegamajame",
      "miegamasis",
      "miegamąjį"
     ],
     "answer": "miegamajame",
     "tr": "Дети уже спят в спальне.",
     "note": "Kur? — местный падеж: miegamasis → miegamajame. Эту форму надо запомнить."
    },
    {
     "q": "Mūsų daugiabutyje katilinė yra ___.",
     "options": [
      "rūsys",
      "rūsį",
      "rūsyje"
     ],
     "answer": "rūsyje",
     "tr": "В нашем многоквартирном доме котельная находится в подвале.",
     "note": "rūsys → rūsyje: -ys → -yje, как kambarys → kambaryje."
    },
    {
     "q": "Gyvename sename ___ be lifto ir be balkono.",
     "options": [
      "namas",
      "name",
      "namuose"
     ],
     "answer": "name",
     "tr": "Мы живём в старом доме без лифта и без балкона.",
     "note": "namas (здание) → name: sename name. Namuose — «дома», это мн. ч."
    },
    {
     "q": "Vakare aš visada esu ___.",
     "options": [
      "namuose",
      "namai",
      "namas"
     ],
     "answer": "namuose",
     "tr": "Вечером я всегда дома.",
     "note": "«Дома» — namai → namuose (= namie). Name значит «в здании»."
    },
    {
     "q": "Kiekvieną mėnesį mokame mokestį už ___.",
     "options": [
      "vanduo",
      "vandens",
      "vandenį"
     ],
     "answer": "vandenį",
     "tr": "Каждый месяц мы вносим плату за воду.",
     "note": "mokestis už ką? — винительный: vanduo → vandenį. Mokestį — тоже винительный: mokame ką?"
    }
   ]
  },
  {
   "id": "u3-baldai",
   "title": "Baldai ir buitinė technika — мебель и техника",
   "subtitle": "3A · Что стоит на кухне, в гостиной, ванной и спальне; yra — nėra, turiu — neturiu.",
   "rule": "<ul><li><b><i lang=\"lt\">Virtuvėje yra</i></b> <i lang=\"lt\">šaldytuvas, viryklė, orkaitė, indaplovė, gartraukis, virdulys, stalas, kėdės</i>.</li><li><b><i lang=\"lt\">Svetainėje yra</i></b> <i lang=\"lt\">sofa, fotelis, žurnalinis (kavos) staliukas, lentyna, televizorius</i>.</li><li><b><i lang=\"lt\">Vonioje yra</i></b> <i lang=\"lt\">dušas, praustuvas, veidrodis, rankšluostis, skalbimo mašina</i>.</li><li><b><i lang=\"lt\">Miegamajame yra</i></b> <i lang=\"lt\">lova, spinta, komoda, naktinis staliukas, čiužinys</i>.</li></ul><p>Категории: <i lang=\"lt\">baldai</i> (мебель) и <i lang=\"lt\">indai</i> (посуда) в литовском — множественное число; <i lang=\"lt\">buitinė technika</i> и <i lang=\"lt\">tekstilė</i> — единственное.</p><p>Длинные слова легче запомнить по частям: <i lang=\"lt\">šaldytuvas ← šaltas</i> (холодный), <i lang=\"lt\">indaplovė ← indai + plauti</i> (посуда + мыть), <i lang=\"lt\">rankšluostis ← ranka + šluostyti</i> (рука + вытирать).</p><p>После <i lang=\"lt\">yra</i> — именительный, после <i lang=\"lt\">turiu</i> — винительный; чего нет (<i lang=\"lt\">nėra, neturiu</i>) — родительный:</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Yra kas? Turiu ką?</th><th>Nėra ko? Neturiu ko?</th></tr><tr><td>yra balkonas</td><td>nėra balkono</td></tr><tr><td>turiu orkaitę</td><td>neturiu orkaitės</td></tr><tr><td>turiu televizorių</td><td>neturiu televizoriaus</td></tr><tr><td>yra veidrodis</td><td>nėra veidrodžio</td></tr><tr><td>yra rankšluostis</td><td>nėra rankšluosčio</td></tr></table></div><p>Не перепутай: <i lang=\"lt\">kėdė</i> — стул, <i lang=\"lt\">stalas</i> — стол, <i lang=\"lt\">spinta</i> — шкаф, <i lang=\"lt\">lova</i> — кровать, <i lang=\"lt\">sofa</i> — диван. <i lang=\"lt\">Viryklė</i> (плита), <i lang=\"lt\">orkaitė</i> (духовка) и <i lang=\"lt\">kaitlentė</i> (варочная поверхность) — три разные вещи.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "šaldytuvas",
       "холодильник"
      ],
      [
       "viryklė",
       "плита"
      ],
      [
       "orkaitė",
       "духовка"
      ],
      [
       "indaplovė",
       "посудомоечная машина"
      ],
      [
       "gartraukis",
       "вытяжка"
      ],
      [
       "mikrobangų krosnelė",
       "микроволновая печь"
      ]
     ],
     "prompt": "Кухня: техника"
    },
    {
     "type": "match",
     "pairs": [
      [
       "plautuvė",
       "кухонная мойка"
      ],
      [
       "spintelė",
       "шкафчик"
      ],
      [
       "virdulys",
       "чайник"
      ],
      [
       "skrudintuvas",
       "тостер"
      ],
      [
       "šiukšlių dėžė",
       "мусорное ведро"
      ]
     ],
     "prompt": "На кухне"
    },
    {
     "type": "match",
     "pairs": [
      [
       "sofa",
       "диван"
      ],
      [
       "fotelis",
       "кресло"
      ],
      [
       "žurnalinis staliukas",
       "журнальный столик"
      ],
      [
       "lova",
       "кровать"
      ],
      [
       "spinta",
       "шкаф"
      ],
      [
       "čiužinys",
       "матрас"
      ]
     ],
     "prompt": "Гостиная и спальня"
    },
    {
     "type": "match",
     "pairs": [
      [
       "dušas",
       "душ"
      ],
      [
       "veidrodis",
       "зеркало"
      ],
      [
       "rankšluostis",
       "полотенце"
      ],
      [
       "praustuvas",
       "умывальник"
      ],
      [
       "dantų šepetukas",
       "зубная щётка"
      ],
      [
       "skalbimo mašina",
       "стиральная машина"
      ]
     ],
     "prompt": "Ванная"
    },
    {
     "type": "match",
     "pairs": [
      [
       "baldai",
       "мебель"
      ],
      [
       "buitinė technika",
       "бытовая техника"
      ],
      [
       "indai",
       "посуда"
      ],
      [
       "tekstilė",
       "текстиль"
      ],
      [
       "kanceliarinės prekės",
       "канцелярские товары"
      ]
     ],
     "prompt": "Категории"
    },
    {
     "q": "kėdė",
     "options": [
      "стол",
      "кресло",
      "стул"
     ],
     "answer": "стул",
     "note": "kėdė — стул, stalas — стол, fotelis — кресло.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "прикроватная тумбочка",
     "options": [
      "žurnalinis staliukas",
      "naktinis staliukas",
      "rašomasis stalas"
     ],
     "answer": "naktinis staliukas",
     "note": "naktinis staliukas — «ночной столик»; rašomasis stalas — письменный стол, žurnalinis staliukas — журнальный столик.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "kaitlentė",
     "options": [
      "варочная поверхность",
      "микроволновая печь",
      "духовка"
     ],
     "answer": "варочная поверхность",
     "note": "kaitlentė — варочная поверхность, orkaitė — духовка, mikrobangų krosnelė — микроволновая печь.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "Viengulė lova ir rašomasis stalas stovi ___.",
     "options": [
      "vonios kambaryje",
      "virtuvėje",
      "vaiko kambaryje"
     ],
     "answer": "vaiko kambaryje",
     "tr": "Односпальная кровать и письменный стол стоят в детской.",
     "note": "Кровать на одного и письменный стол — мебель детской: vaiko kambarys → vaiko kambaryje. Viengulė ← vienas + gulėti."
    },
    {
     "q": "Dvigulė lova ir komoda stovi ___.",
     "options": [
      "vonioje",
      "miegamajame",
      "virtuvėje"
     ],
     "answer": "miegamajame",
     "tr": "Двуспальная кровать и комод стоят в спальне.",
     "note": "dvigulė lova — двуспальная кровать (du + gulėti). Miegamasis → miegamajame."
    },
    {
     "q": "Skalbimo mašina ir džiovyklė stovi ___.",
     "options": [
      "vonioje",
      "svetainėje",
      "miegamajame"
     ],
     "answer": "vonioje",
     "tr": "Стиральная и сушильная машины стоят в ванной.",
     "note": "džiovyklė ← džiovinti (сушить): сушильная машина. Vonia → vonioje."
    },
    {
     "q": "Stalas, kėdė ir spinta — tai ___.",
     "options": [
      "kanceliarinės prekės",
      "baldai",
      "buitinė technika",
      "indai"
     ],
     "answer": "baldai",
     "tr": "Стол, стул и шкаф — это мебель.",
     "note": "baldai — мебель: в литовском это множественное число."
    },
    {
     "q": "Indaplovė, gartraukis ir džiovyklė — tai ___.",
     "options": [
      "buitinė technika",
      "baldai",
      "indai",
      "kanceliarinės prekės"
     ],
     "answer": "buitinė technika",
     "tr": "Посудомоечная машина, вытяжка и сушильная машина — это бытовая техника.",
     "note": "buitinė technika — бытовая техника. Indaplovė моет посуду (indai), но сама — техника."
    },
    {
     "q": "Tualete yra klozetas ir maža ___.",
     "options": [
      "kriauklė",
      "kriauklę",
      "kriauklėje"
     ],
     "answer": "kriauklė",
     "tr": "В туалете есть унитаз и маленькая раковина.",
     "note": "yra kas? — именительный: maža kriauklė. Kriauklė — раковина, и на кухне, и в ванной."
    },
    {
     "q": "Virtuvėje turime naują ___.",
     "options": [
      "orkaitė",
      "orkaitės",
      "orkaitę"
     ],
     "answer": "orkaitę",
     "tr": "На кухне у нас новая духовка.",
     "note": "turėti ką? — винительный: orkaitė → orkaitę."
    },
    {
     "q": "Mes neturime didelio ___.",
     "options": [
      "televizorius",
      "televizoriaus",
      "televizorių"
     ],
     "answer": "televizoriaus",
     "tr": "У нас нет большого телевизора.",
     "note": "neturėti ko? — родительный: televizorius → televizoriaus. Didelio — тоже родительный ед. ч."
    },
    {
     "q": "Vonioje yra dušo kabina, bet nėra ___.",
     "options": [
      "veidrodžio",
      "veidrodis",
      "veidrodį"
     ],
     "answer": "veidrodžio",
     "tr": "В ванной есть душевая кабина, но нет зеркала.",
     "note": "nėra ko? — родительный: veidrodis → veidrodžio (d → dž)."
    },
    {
     "q": "Biurui perkame naują ___.",
     "options": [
      "kondicionierius",
      "kondicionieriaus",
      "kondicionierių"
     ],
     "answer": "kondicionierių",
     "tr": "Для офиса мы покупаем новый кондиционер.",
     "note": "pirkti ką? — винительный: kondicionierius → kondicionierių, как televizorius → televizorių."
    },
    {
     "q": "Darbo kambaryje dar neturime ___.",
     "options": [
      "lempą",
      "lempos",
      "lempa"
     ],
     "answer": "lempos",
     "tr": "В кабинете у нас ещё нет лампы.",
     "note": "neturėti ko? — родительный: lempa → lempos. По-русски тоже «нет лампы»."
    }
   ]
  },
  {
   "id": "u3-kokiame",
   "title": "Kokiame bute? Kokioje virtuvėje? — прилагательные в местном падеже",
   "subtitle": "3A · Какая квартира и какой район: naujame rajone, šviesioje svetainėje.",
   "rule": "<p><b><i lang=\"lt\">Kokiame? Kokioje?</i></b> — в каком? в какой? Прилагательное перед словом в местном падеже тоже стоит в местном падеже, в том же роде и числе: <i lang=\"lt\">naujame rajone, šviesioje svetainėje</i>.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Koks? Kokia?</th><th>Kokiame? Kokioje?</th><th>Мн. ч.: kokiuose? kokiose?</th></tr><tr><td>geras</td><td>gerame</td><td>geruose</td></tr><tr><td>didelis</td><td>dideliame</td><td>dideliuose</td></tr><tr><td>gražus</td><td>gražiame</td><td>gražiuose</td></tr><tr><td>gera</td><td>geroje</td><td>gerose</td></tr><tr><td>graži</td><td>gražioje</td><td>gražiose</td></tr><tr><td>didelė</td><td>didelėje</td><td>didelėse</td></tr></table></div><ul><li>В мужском роде окончания разные: у существительного <i lang=\"lt\">-e</i>, у прилагательного <i lang=\"lt\">-ame</i>: <i lang=\"lt\">naujame name</i>.</li><li>У прилагательных на <i lang=\"lt\">-us</i> (в обоих родах) и на <i lang=\"lt\">-is</i> (только в мужском) перед окончанием мягкое <i lang=\"lt\">i</i>: <i lang=\"lt\">gražiame, erdvioje, dideliame</i>. Женский род на <i lang=\"lt\">-ė</i> — без <i lang=\"lt\">i</i>: <i lang=\"lt\">didelė → didelėje</i>.</li><li><i lang=\"lt\">privatus → privačiame, privačioje</i>: <i lang=\"lt\">t</i> меняется на <i lang=\"lt\">č</i>.</li><li><i lang=\"lt\">mano, tavo, mūsų</i> не меняются: <i lang=\"lt\">mano naujame bute</i>.</li></ul><p>После <i lang=\"lt\">yra</i> — именительный: <i lang=\"lt\">Butas yra šviesus</i>. В обозначении места — местный: <i lang=\"lt\">Gyvename šviesiame bute</i>.</p><p>Антонимы: <i lang=\"lt\">šviesus – tamsus</i> (светлый – тёмный), <i lang=\"lt\">tylus – triukšmingas</i> (тихий – шумный), <i lang=\"lt\">šiltas – šaltas</i> (тёплый – холодный), <i lang=\"lt\">švarus – purvinas</i> (чистый – грязный).</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "privatus",
       "частный"
      ],
      [
       "šiltas",
       "тёплый"
      ],
      [
       "erdvus",
       "просторный"
      ],
      [
       "patogus",
       "удобный"
      ],
      [
       "jaukus",
       "уютный"
      ]
     ],
     "prompt": "Какая квартира"
    },
    {
     "type": "match",
     "pairs": [
      [
       "šviesus",
       "светлый"
      ],
      [
       "tamsus",
       "тёмный"
      ],
      [
       "švarus",
       "чистый"
      ],
      [
       "purvinas",
       "грязный"
      ],
      [
       "nuosavas",
       "собственный"
      ]
     ],
     "prompt": "Какая комната"
    },
    {
     "type": "match",
     "pairs": [
      [
       "tylus",
       "тихий"
      ],
      [
       "triukšmingas",
       "шумный"
      ],
      [
       "modernus",
       "современный"
      ],
      [
       "nedidelis",
       "небольшой"
      ],
      [
       "tarptautinis",
       "международный"
      ]
     ],
     "prompt": "Какой район"
    },
    {
     "q": "šiltas ↔ ___",
     "options": [
      "švarus",
      "šviesus",
      "šaltas"
     ],
     "answer": "šaltas",
     "tr": "тёплый ↔ холодный",
     "note": "šiltas — тёплый, šaltas — холодный. Švarus — чистый, šviesus — светлый.",
     "prompt": "Антоним"
    },
    {
     "q": "просторный",
     "options": [
      "švarus",
      "erdvus",
      "jaukus"
     ],
     "answer": "erdvus",
     "note": "erdvus — просторный, jaukus — уютный, švarus — чистый.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Mes gyvename ___ rajone.",
     "options": [
      "gražiame",
      "gražioje",
      "gražų"
     ],
     "answer": "gražiame",
     "tr": "Мы живём в красивом районе.",
     "note": "gražus → gražiame. Kokiame rajone? — местный падеж, м. р.: -us → -iame."
    },
    {
     "q": "Vakare sėdime ___ svetainėje.",
     "options": [
      "erdviame",
      "erdvi",
      "erdvioje"
     ],
     "answer": "erdvioje",
     "tr": "Вечером мы сидим в просторной гостиной.",
     "note": "erdvi → erdvioje. Kokioje svetainėje? — ж. р.: -i → -ioje."
    },
    {
     "q": "Tomas dirba ___ biure.",
     "options": [
      "didelis",
      "dideliame",
      "didelėje"
     ],
     "answer": "dideliame",
     "tr": "Томас работает в большом офисе.",
     "note": "didelis → dideliame. Kokiame biure? — м. р.: -is → -iame."
    },
    {
     "q": "Kokiame name gyvena tavo tėvai? — ___ name.",
     "options": [
      "Privačiame",
      "Privačioje",
      "Privatus"
     ],
     "answer": "Privačiame",
     "tr": "В каком доме живут твои родители? — В частном доме.",
     "note": "privatus → privačiame: перед -iame t меняется на č."
    },
    {
     "q": "Visa šeima valgo ___ virtuvėje.",
     "options": [
      "dideliame",
      "didelė",
      "didelėje"
     ],
     "answer": "didelėje",
     "tr": "Вся семья ест на большой кухне.",
     "note": "didelė → didelėje. Kokioje virtuvėje? — ж. р.: -ė → -ėje."
    },
    {
     "q": "Rūta dirba ___ įmonėje.",
     "options": [
      "tarptautinė",
      "tarptautinėje",
      "tarptautiniame"
     ],
     "answer": "tarptautinėje",
     "tr": "Рута работает в международной компании.",
     "note": "tarptautinė → tarptautinėje. Įmonė — женского рода: kokioje įmonėje?"
    },
    {
     "q": "Kokioje gatvėje jūs gyvenate? — Labai ___ gatvėje.",
     "options": [
      "tylioje",
      "tyliame",
      "tyli"
     ],
     "answer": "tylioje",
     "tr": "На какой улице вы живёте? — На очень тихой улице.",
     "note": "tyli → tylioje. Вопрос kokioje? — ответ в том же падеже и роде."
    },
    {
     "q": "Pagaliau gyvename ___ bute.",
     "options": [
      "nuosavoje",
      "nuosavas",
      "nuosavame"
     ],
     "answer": "nuosavame",
     "tr": "Наконец-то мы живём в собственной квартире.",
     "note": "nuosavas → nuosavame. Butas — мужского рода, хотя «квартира» в русском женского."
    },
    {
     "q": "Agnė gyvena ramiame ___.",
     "options": [
      "rajoną",
      "rajone",
      "rajonas"
     ],
     "answer": "rajone",
     "tr": "Агне живёт в спокойном районе.",
     "note": "Ramiame — местный падеж, значит и существительное в нём: rajonas → rajone."
    },
    {
     "q": "Šiandien pietaujame jaukioje ___.",
     "options": [
      "kavinėje",
      "kavinė",
      "kavinę"
     ],
     "answer": "kavinėje",
     "tr": "Сегодня мы обедаем в уютном кафе.",
     "note": "Jaukioje — местный падеж ж. р.: kavinė → kavinėje."
    },
    {
     "q": "Mano naujas butas yra labai ___.",
     "options": [
      "šviesiame",
      "šviesų",
      "šviesus"
     ],
     "answer": "šviesus",
     "tr": "Моя новая квартира очень светлая.",
     "note": "После yra — именительный: butas (koks?) šviesus."
    },
    {
     "q": "Dabar gyvenu labai ___ bute.",
     "options": [
      "šviesų",
      "šviesiame",
      "šviesus"
     ],
     "answer": "šviesiame",
     "tr": "Теперь я живу в очень светлой квартире.",
     "note": "Kur? Kokiame bute? — местный падеж: šviesus → šviesiame."
    },
    {
     "q": "Jų virtuvė yra sena, bet labai ___.",
     "options": [
      "švari",
      "švarioje",
      "švarią"
     ],
     "answer": "švari",
     "tr": "Их кухня старая, но очень чистая.",
     "note": "После yra — именительный: virtuvė (kokia?) švari."
    },
    {
     "q": "Mūsų draugai gyvena ___ namuose.",
     "options": [
      "naujame",
      "nauji",
      "naujuose"
     ],
     "answer": "naujuose",
     "tr": "Наши друзья живут в новых домах.",
     "note": "Namuose — мн. ч. (и «в домах», и «дома»), поэтому и прилагательное во мн. ч.: nauji → naujuose."
    },
    {
     "q": "Vaikai miega ___ kambariuose.",
     "options": [
      "šviesiose",
      "šviesiuose",
      "šviesiame"
     ],
     "answer": "šviesiuose",
     "tr": "Дети спят в светлых комнатах.",
     "note": "Kambariuose — м. р., мн. ч.: šviesūs → šviesiuose."
    },
    {
     "q": "Restoranuose virėjai dirba ___ virtuvėse.",
     "options": [
      "didelėse",
      "dideliuose",
      "didelėje"
     ],
     "answer": "didelėse",
     "tr": "В ресторанах повара работают на больших кухнях.",
     "note": "Virtuvėse — ж. р., мн. ч.: didelės → didelėse."
    }
   ]
  },
  {
   "id": "u3-aukstas",
   "title": "Kelintame aukšte? — на каком этаже",
   "subtitle": "3A · Порядковые числительные 1–12: pirmas aukštas, trečiame aukšte.",
   "rule": "<p>Этаж называют порядковым числительным. Оно ведёт себя как обычное прилагательное на <i lang=\"lt\">-as</i>: <i lang=\"lt\">pirmas aukštas</i> — первый этаж, <i lang=\"lt\">pirmame aukšte</i> — на первом этаже.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>№</th><th>Kelintas?</th><th>Kelintame?</th></tr><tr><td>1</td><td>pirmas</td><td>pirmame</td></tr><tr><td>2</td><td>antras</td><td>antrame</td></tr><tr><td>3</td><td>trečias</td><td>trečiame</td></tr><tr><td>4</td><td>ketvirtas</td><td>ketvirtame</td></tr><tr><td>5</td><td>penktas</td><td>penktame</td></tr><tr><td>6</td><td>šeštas</td><td>šeštame</td></tr><tr><td>7</td><td>septintas</td><td>septintame</td></tr><tr><td>8</td><td>aštuntas</td><td>aštuntame</td></tr><tr><td>9</td><td>devintas</td><td>devintame</td></tr><tr><td>10</td><td>dešimtas</td><td>dešimtame</td></tr><tr><td>11</td><td>vienuoliktas</td><td>vienuoliktame</td></tr><tr><td>12</td><td>dvyliktas</td><td>dvyliktame</td></tr></table></div><p><i lang=\"lt\">Pirmas, antras, trečias, ketvirtas</i> надо запомнить. Дальше — основа числа + <i lang=\"lt\">-tas</i>: <i lang=\"lt\">penki → penktas, šeši → šeštas</i>. В 7, 8 и 9 гласная основы при этом сокращается: <i lang=\"lt\">septyni → septintas, aštuoni → aštuntas, devyni → devintas</i>. А <i lang=\"lt\">-lika → -liktas</i>: <i lang=\"lt\">dvylika → dvyliktas, septyniolika → septynioliktas</i>. Подсказка — дни недели: <i lang=\"lt\">pirmadienis, antradienis, trečiadienis…</i></p><p><i lang=\"lt\">Kelintas čia aukštas? — Penktas.</i> <i lang=\"lt\">Kelintame aukšte gyveni? — Penktame.</i> Вопрос — <i lang=\"lt\">kelintame</i> (не <i lang=\"lt\">kiek</i>).</p><p>Ловушки: предлог не нужен («на третьем этаже» — <i lang=\"lt\">trečiame aukšte</i>); нужно порядковое числительное, а не <i lang=\"lt\">trys</i>; <i lang=\"lt\">pirmas aukštas</i> — первый этаж от земли, как в русском.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "pirmas",
       "первый"
      ],
      [
       "antras",
       "второй"
      ],
      [
       "trečias",
       "третий"
      ],
      [
       "ketvirtas",
       "четвёртый"
      ],
      [
       "penktas",
       "пятый"
      ]
     ],
     "prompt": "Первый — пятый"
    },
    {
     "type": "match",
     "pairs": [
      [
       "šeštas",
       "шестой"
      ],
      [
       "septintas",
       "седьмой"
      ],
      [
       "aštuntas",
       "восьмой"
      ],
      [
       "dešimtas",
       "десятый"
      ],
      [
       "dvyliktas",
       "двенадцатый"
      ]
     ],
     "prompt": "Шестой — двенадцатый"
    },
    {
     "q": "du → ___",
     "options": [
      "trečias",
      "dvylika",
      "antras"
     ],
     "answer": "antras",
     "tr": "два → второй",
     "note": "du → antras: не от слова du, его надо запомнить. Подсказка: antradienis — вторник.",
     "prompt": "Порядковое числительное"
    },
    {
     "q": "aštuoni → ___",
     "options": [
      "aštuoniolika",
      "aštuntas",
      "devintas"
     ],
     "answer": "aštuntas",
     "tr": "восемь → восьмой",
     "note": "aštuoni → aštuntas: перед -tas uo сокращается до u (так же septyni → septintas, devyni → devintas). Aštuoniolika — это восемнадцать.",
     "prompt": "Порядковое числительное"
    },
    {
     "q": "vienuolika → ___",
     "options": [
      "vienuoliktas",
      "dvyliktas",
      "dvylika"
     ],
     "answer": "vienuoliktas",
     "tr": "одиннадцать → одиннадцатый",
     "note": "-lika → -liktas: vienuolika → vienuoliktas, dvylika → dvyliktas.",
     "prompt": "Порядковое числительное"
    },
    {
     "q": "Jonas su šeima gyvena ___ aukšte.",
     "options": [
      "trečias",
      "trys",
      "trečiame"
     ],
     "answer": "trečiame",
     "tr": "Йонас с семьёй живёт на третьем этаже.",
     "note": "trečias → trečiame. Kelintame aukšte? — местный падеж без предлога."
    },
    {
     "q": "Mūsų name vaistinė yra ___ aukšte.",
     "options": [
      "vienuoliktame",
      "pirmame",
      "pirmas"
     ],
     "answer": "pirmame",
     "tr": "В нашем доме аптека находится на первом этаже.",
     "note": "Этаж 1: pirmas → pirmame. Vienuoliktame — на одиннадцатом.",
     "prompt": "Этаж 1"
    },
    {
     "q": "Agnė turi butą ___ aukšte.",
     "options": [
      "šeštame",
      "šeštas",
      "septintame"
     ],
     "answer": "šeštame",
     "tr": "У Агне квартира на шестом этаже.",
     "note": "Этаж 6: šeši → šeštas → šeštame. Septintame — на седьмом.",
     "prompt": "Этаж 6"
    },
    {
     "q": "Viešbučio restoranas yra ___ aukšte.",
     "options": [
      "ketvirtas",
      "keturi",
      "ketvirtame"
     ],
     "answer": "ketvirtame",
     "tr": "Ресторан гостиницы находится на четвёртом этаже.",
     "note": "keturi → ketvirtas → ketvirtame. Kelintame aukšte? — -ame."
    },
    {
     "q": "Atsiprašau, ar čia ___ aukštas?",
     "options": [
      "penki",
      "penktame",
      "penktas"
     ],
     "answer": "penktas",
     "tr": "Извините, это пятый этаж?",
     "note": "Kelintas čia aukštas? — именительный: penktas aukštas. Penktame — «на пятом», penki — «пять»."
    },
    {
     "q": "Kelintas čia aukštas? — ___.",
     "options": [
      "Dešimtas",
      "Dešimtame",
      "Dešimt"
     ],
     "answer": "Dešimtas",
     "tr": "Какой это этаж? — Десятый.",
     "note": "Kelintas aukštas? — именительный: dešimtas. Dešimt — «десять»."
    },
    {
     "q": "Tai ne trečias, o ___ aukštas.",
     "options": [
      "septintame",
      "septyni",
      "septintas"
     ],
     "answer": "septintas",
     "tr": "Это не третий, а седьмой этаж.",
     "note": "Kelintas aukštas? — именительный, как и trečias в этой же фразе: septintas."
    },
    {
     "q": "Jų biuras yra ___ aukšte.",
     "options": [
      "dvyliktame",
      "septynioliktame",
      "vienuoliktame"
     ],
     "answer": "septynioliktame",
     "tr": "Их офис на семнадцатом этаже.",
     "note": "septyniolika (17) → septynioliktas → septynioliktame. Vienuoliktame — на 11-м, dvyliktame — на 12-м.",
     "prompt": "Этаж 17"
    },
    {
     "q": "___ aukšte dirba jūsų direktorius? — Aštuntame.",
     "options": [
      "Kelintame",
      "Kelintas",
      "Kiek"
     ],
     "answer": "Kelintame",
     "tr": "На каком этаже работает ваш директор? — На восьмом.",
     "note": "На котором по счёту? — kelintas → kelintame. Kiek — «сколько»."
    },
    {
     "q": "Kelintame aukšte yra jūsų biuras? — ___.",
     "options": [
      "Devintas",
      "Devyni",
      "Devintame"
     ],
     "answer": "Devintame",
     "tr": "На каком этаже ваш офис? — На девятом.",
     "note": "Короткий ответ стоит в том же падеже, что и вопрос: kelintame? — devintame."
    }
   ]
  },
  {
   "id": "u3-prasom",
   "title": "Prašom užeiti! — глаголы и фразы дома",
   "subtitle": "3A · Открыть и закрыть, искать и найти; справа и слева; гости и просьбы.",
   "rule": "<p>Приставка <i lang=\"lt\">at-</i> открывает, <i lang=\"lt\">už-</i> закрывает: <i lang=\"lt\">atidaryti – uždaryti</i> (открыть – закрыть), <i lang=\"lt\">atrakinti – užrakinti</i> (отпереть – запереть ключом; <i lang=\"lt\">raktas</i> — ключ).</p><p>Падеж после глагола: <i lang=\"lt\">ieškoti ko?</i> (родительный) — <i lang=\"lt\">ieškau buto, raktų</i>; но <i lang=\"lt\">rasti ką?</i> (винительный) — <i lang=\"lt\">randu raktą</i>. «Мне нужна квартира» — тоже родительный: <i lang=\"lt\">man reikia buto</i>.</p><p>Формы, которые надо запомнить: <i lang=\"lt\">sėdėti → sėdžiu, pirkti → perku, miegoti → miegu, gulėti → guliu, rasti → randu</i>.</p><p>Наречия парами: <i lang=\"lt\">viršuje – apačioje</i> (наверху – внизу), <i lang=\"lt\">dešinėje – kairėje</i> (справа – слева), <i lang=\"lt\">arti – toli</i> (близко – далеко), <i lang=\"lt\">seniai – neseniai</i> (давно – недавно).</p><ul><li>Зовём гостей: <i lang=\"lt\">Kviečiu į svečius! Prašom užeiti! Prašom sėstis! Prašom prie stalo.</i> В ответ: <i lang=\"lt\">Ačiū, mielai!</i> — спасибо, с удовольствием!</li><li>Просим: <i lang=\"lt\">Ar galiu atidaryti langą?</i> (можно открыть окно?) <i lang=\"lt\">— Taip, žinoma!</i> (да, конечно!) <i lang=\"lt\">Gal galite padėti?</i> — не могли бы вы помочь? <i lang=\"lt\">Prašom uždaryti duris.</i></li><li>Что-то сломалось: <i lang=\"lt\">Kas atsitiko?</i> (что случилось?) <i lang=\"lt\">— Liftas neveikia.</i> О технике говорят <i lang=\"lt\">neveikia</i>, а не <i lang=\"lt\">nedirba</i>.</li><li>Ещё: <i lang=\"lt\">vėliau</i> — позже. На двери: <i lang=\"lt\">Atidaryta</i> — открыто, <i lang=\"lt\">Uždaryta</i> — закрыто.</li></ul>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "atidaryti",
       "открыть"
      ],
      [
       "uždaryti",
       "закрыть"
      ],
      [
       "atrakinti",
       "отпереть ключом"
      ],
      [
       "užrakinti",
       "запереть ключом"
      ],
      [
       "tvarkyti",
       "убирать"
      ]
     ],
     "prompt": "Дверь и порядок"
    },
    {
     "type": "match",
     "pairs": [
      [
       "ieškoti",
       "искать"
      ],
      [
       "rasti",
       "найти"
      ],
      [
       "sėdėti",
       "сидеть"
      ],
      [
       "gulėti",
       "лежать"
      ],
      [
       "miegoti",
       "спать"
      ]
     ],
     "prompt": "Глаголы"
    },
    {
     "type": "match",
     "pairs": [
      [
       "viršuje",
       "наверху"
      ],
      [
       "apačioje",
       "внизу"
      ],
      [
       "dešinėje",
       "справа"
      ],
      [
       "kairėje",
       "слева"
      ],
      [
       "arti",
       "близко"
      ],
      [
       "toli",
       "далеко"
      ]
     ],
     "prompt": "Где?"
    },
    {
     "type": "match",
     "pairs": [
      [
       "Prašom užeiti!",
       "Заходите, пожалуйста!"
      ],
      [
       "Prašom sėstis!",
       "Садитесь, пожалуйста!"
      ],
      [
       "Prašom prie stalo.",
       "Прошу к столу."
      ],
      [
       "Kviečiu į svečius!",
       "Приглашаю в гости!"
      ],
      [
       "Prašom uždaryti duris.",
       "Пожалуйста, закройте дверь."
      ],
      [
       "Koks durų kodas?",
       "Какой код от двери?"
      ]
     ],
     "prompt": "Фразы дома"
    },
    {
     "q": "Šeštadienį kviečiu į svečius! — ___",
     "options": [
      "Nėra už ką.",
      "Prašom užeiti!",
      "Ačiū, mielai!"
     ],
     "answer": "Ačiū, mielai!",
     "tr": "В субботу приглашаю в гости! — Спасибо, с удовольствием!",
     "note": "mielai — с удовольствием. Nėra už ką — «не за что», ответ на спасибо."
    },
    {
     "q": "Gatvėje triukšminga. Ar galiu uždaryti langą? — ___",
     "options": [
      "Man taip pat.",
      "Taip, žinoma!",
      "Ačiū, mielai!"
     ],
     "answer": "Taip, žinoma!",
     "tr": "На улице шумно. Можно закрыть окно? — Да, конечно!",
     "note": "Ar galiu…? — можно мне…? Uždaryti — закрыть. Разрешаем: Taip, žinoma!"
    },
    {
     "q": "Kas atsitiko? Kodėl eini laiptais? — ___",
     "options": [
      "Liftas veikia.",
      "Liftas neveikia.",
      "Taip, žinoma!"
     ],
     "answer": "Liftas neveikia.",
     "tr": "Что случилось? Почему ты идёшь по лестнице? — Лифт не работает.",
     "note": "Kas atsitiko? — что случилось? Liftas neveikia — лифт не работает; если veikia, пешком идти незачем. Eiti laiptais — идти по лестнице (творительный)."
    },
    {
     "q": "Kieno čia raktai? — ___",
     "options": [
      "Kaimynas.",
      "Kaimynui.",
      "Kaimyno."
     ],
     "answer": "Kaimyno.",
     "tr": "Чьи это ключи? — Соседа.",
     "note": "Kieno? — чей? Ответ в родительном: kaimynas → kaimyno."
    },
    {
     "q": "Vakare aš ___ fotelyje ir skaitau.",
     "options": [
      "sėdime",
      "sėdžiu",
      "sėdi"
     ],
     "answer": "sėdžiu",
     "tr": "Вечером я сижу в кресле и читаю.",
     "note": "sėdėti → aš sėdžiu: d → dž только в 1-м лице. Tu sėdi, mes sėdime."
    },
    {
     "q": "Mes čia gyvename neseniai ir dar ___ baldus.",
     "options": [
      "perkame",
      "perkate",
      "perka"
     ],
     "answer": "perkame",
     "tr": "Мы живём здесь недавно и ещё покупаем мебель.",
     "note": "pirkti → perka: в настоящем времени корень perk-. Mes perkame."
    },
    {
     "q": "Naujame mieste aš visada ___ gerą kavinę.",
     "options": [
      "randi",
      "randa",
      "randu"
     ],
     "answer": "randu",
     "tr": "В новом городе я всегда нахожу хорошее кафе.",
     "note": "rasti → randa: aš randu, tu randi, jis randa."
    },
    {
     "q": "Gal galite padėti? Aš ieškau ___.",
     "options": [
      "liftas",
      "lifto",
      "liftą"
     ],
     "answer": "lifto",
     "tr": "Не могли бы вы помочь? Я ищу лифт.",
     "note": "ieškoti ko? — родительный: liftas → lifto. По-русски «искать что», по-литовски — «чего»."
    },
    {
     "q": "Jonas randa savo ___ ant stalo virtuvėje.",
     "options": [
      "raktą",
      "rakto",
      "raktas"
     ],
     "answer": "raktą",
     "tr": "Йонас находит свой ключ на столе на кухне.",
     "note": "rasti ką? — винительный: raktas → raktą. А ieškoti — ko? (rakto)."
    },
    {
     "q": "Vaiko kambaryje mums dar reikia ___.",
     "options": [
      "stalą",
      "stalas",
      "stalo"
     ],
     "answer": "stalo",
     "tr": "В детской нам ещё нужен стол.",
     "note": "reikia ko? — родительный: stalas → stalo. По-русски «нужен стол» — именительный."
    },
    {
     "q": "Išeinu iš namų ir ___ duris raktu.",
     "options": [
      "atidarau",
      "užrakinu",
      "atrakinu"
     ],
     "answer": "užrakinu",
     "tr": "Я ухожу из дома и запираю дверь на ключ.",
     "note": "raktu — ключом: užrakinti (запереть). At- открывает: atrakinti — отпереть, atidaryti — открыть."
    },
    {
     "q": "Mūsų televizorius jau seniai ___, todėl filmus žiūrime kompiuteryje.",
     "options": [
      "neveikia",
      "veikia",
      "vėluoja"
     ],
     "answer": "neveikia",
     "tr": "Наш телевизор уже давно не работает, поэтому фильмы мы смотрим на компьютере.",
     "note": "О технике — veikti: televizorius veikia / neveikia (а не «dirba»). Vėluoja — опаздывает."
    },
    {
     "q": "Atsiprašau, dabar uždaryta. Prašom užeiti ___.",
     "options": [
      "seniai",
      "neseniai",
      "vėliau"
     ],
     "answer": "vėliau",
     "tr": "Извините, сейчас закрыто. Заходите, пожалуйста, позже.",
     "note": "vėliau — позже. Seniai — давно, neseniai — недавно: это о прошлом."
    },
    {
     "q": "Atidaryta.",
     "options": [
      "Заперто на ключ.",
      "Открыто.",
      "Закрыто."
     ],
     "answer": "Открыто.",
     "note": "atidaryti (открыть) → Atidaryta — открыто; uždaryti (закрыть) → Uždaryta — закрыто.",
     "prompt": "Табличка на двери. Что она значит?",
     "optLang": "ru"
    }
   ]
  },
  {
   "id": "u3-dekoras",
   "title": "Namų dekoras — вещи для уюта",
   "subtitle": "3B · Декор, постель и текстиль; jis или ji; на чём сидит и на что смотрит.",
   "rule": "<p>Вещи, которые делают дом уютным. У каждой есть род, и он часто не такой, как в русском: «картина» — она, а <i lang=\"lt\">paveikslas</i> — <i lang=\"lt\">jis</i>.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Lietuviškai</th><th>По-русски</th><th>Местоимение</th></tr><tr><td>paveikslas, šviestuvas</td><td>картина, люстра</td><td>jis</td></tr><tr><td>veidrodis, rankšluostis, augalas</td><td>зеркало, полотенце, растение</td><td>jis</td></tr><tr><td>gėlė, spinta, sofa, kėdė</td><td>цветок, шкаф, диван, стул</td><td>ji</td></tr><tr><td>antklodė, patalynė</td><td>одеяло, постельное бельё</td><td>ji</td></tr><tr><td>užuolaidos, lubos, durys</td><td>шторы, потолок, дверь</td><td>jos</td></tr><tr><td>baldai</td><td>мебель</td><td>jie</td></tr></table></div><p>Множественное число: <i lang=\"lt\">veidrodis → veidrodžiai</i>, <i lang=\"lt\">rankšluostis → rankšluosčiai</i> (перед <i lang=\"lt\">-iai</i> звук <i lang=\"lt\">d</i> становится <i lang=\"lt\">dž</i>, а <i lang=\"lt\">t</i> — <i lang=\"lt\">č</i>). <i lang=\"lt\">Užuolaidos</i> обычно во множественном: <i lang=\"lt\">dieninės</i> (дневные) и <i lang=\"lt\">naktinės</i> (ночные).</p><p>Три глагола, чтобы сказать, кто что делает:</p><ul><li><i lang=\"lt\">sėdėti ant</i> + родительный: <i lang=\"lt\">sėdi ant kilimo</i> — сидит на ковре;</li><li><i lang=\"lt\">žiūrėti į</i> + винительный: <i lang=\"lt\">žiūri į veidrodį</i> — смотрит в зеркало;</li><li><i lang=\"lt\">turėti</i> + винительный: <i lang=\"lt\">turi vazą rankose</i> — держит вазу в руках.</li></ul><p><b>Kieno?</b> — чей? Владелец стоит первым и в родительном: <i lang=\"lt\">Rūtos vaza, Tomo kambarys, senelio fotelis</i>.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "šviestuvas",
       "светильник, люстра"
      ],
      [
       "paveikslas",
       "картина"
      ],
      [
       "augalas",
       "растение"
      ],
      [
       "kilimas",
       "ковёр"
      ],
      [
       "vaza",
       "ваза"
      ]
     ],
     "prompt": "Соедини пары: декор"
    },
    {
     "type": "match",
     "pairs": [
      [
       "užuolaidos",
       "шторы"
      ],
      [
       "vazonas",
       "цветочный горшок"
      ],
      [
       "gėlė",
       "цветок"
      ],
      [
       "statulėlė",
       "статуэтка"
      ],
      [
       "knygų spinta",
       "книжный шкаф"
      ]
     ],
     "prompt": "Соедини пары: декор и мебель"
    },
    {
     "type": "match",
     "pairs": [
      [
       "patalynė",
       "постельное бельё"
      ],
      [
       "paklodė",
       "простыня"
      ],
      [
       "pagalvė",
       "подушка"
      ],
      [
       "antklodė",
       "одеяло"
      ],
      [
       "pledas",
       "плед"
      ]
     ],
     "prompt": "Соедини пары: постель"
    },
    {
     "q": "цветочный горшок",
     "options": [
      "vazonas",
      "vaza",
      "augalas"
     ],
     "answer": "vazonas",
     "note": "Vazonas — горшок, в котором растёт цветок; vaza — ваза.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "pagalvėlė",
     "options": [
      "подушечка",
      "простыня",
      "одеяло"
     ],
     "answer": "подушечка",
     "note": "Pagalvė — подушка, pagalvėlė — маленькая подушка, например на диване.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "Svetainėje ant lubų yra naujas ___.",
     "options": [
      "šviestuvas",
      "kilimas",
      "pledas"
     ],
     "answer": "šviestuvas",
     "tr": "В гостиной на потолке — новый светильник.",
     "note": "Šviestuvas — светильник, люстра. Lubos → ant lubų: ant + родительный."
    },
    {
     "q": "Rūtos suknelės yra ___ spintoje.",
     "options": [
      "drabužių",
      "knygų",
      "indų"
     ],
     "answer": "drabužių",
     "tr": "Платья Руты — в платяном шкафу.",
     "note": "Drabužių spinta — шкаф для одежды, knygų spinta — книжный шкаф."
    },
    {
     "q": "Kur paveikslas? — ___ yra koridoriuje.",
     "options": [
      "Jis",
      "Ji",
      "Jie"
     ],
     "answer": "Jis",
     "tr": "Где картина? — Она в коридоре.",
     "note": "Paveikslas — мужского рода (-as), значит jis, хотя по-русски «картина — она»."
    },
    {
     "q": "Kur mano antklodė? — ___ yra miegamajame.",
     "options": [
      "Ji",
      "Jis",
      "Jos"
     ],
     "answer": "Ji",
     "tr": "Где моё одеяло? — Оно в спальне.",
     "note": "Antklodė — женского рода (-ė), значит ji."
    },
    {
     "q": "Baldai nauji, o užuolaidos? — ___ irgi naujos.",
     "options": [
      "Jos",
      "Jie",
      "Ji"
     ],
     "answer": "Jos",
     "tr": "Мебель новая, а шторы? — Они тоже новые.",
     "note": "Užuolaidos — женский род, множественное число: jos. А baldai — jie."
    },
    {
     "q": "Vonioje yra du ___.",
     "options": [
      "veidrodžiai",
      "veidrodis",
      "veidrodžių"
     ],
     "answer": "veidrodžiai",
     "tr": "В ванной два зеркала.",
     "note": "veidrodis → veidrodžiai: перед -iai d → dž. После du — именительный множественного."
    },
    {
     "q": "Ant lentynos yra trys švarūs ___.",
     "options": [
      "rankšluosčiai",
      "rankšluostis",
      "rankšluosčius"
     ],
     "answer": "rankšluosčiai",
     "tr": "На полке три чистых полотенца.",
     "note": "rankšluostis → rankšluosčiai: перед -iai t → č."
    },
    {
     "q": "Mūsų katė sėdi ant ___.",
     "options": [
      "kilimo",
      "kilimas",
      "kilimą"
     ],
     "answer": "kilimo",
     "tr": "Наша кошка сидит на ковре.",
     "note": "kilimas → ant kilimo. Sėdėti ant + родительный."
    },
    {
     "q": "Agnė žiūri į ___.",
     "options": [
      "veidrodį",
      "veidrodis",
      "veidrodžio"
     ],
     "answer": "veidrodį",
     "tr": "Агне смотрит в зеркало.",
     "note": "veidrodis → į veidrodį. Žiūrėti į + винительный."
    },
    {
     "q": "Lina turi ___ rankose.",
     "options": [
      "statulėlę",
      "statulėlė",
      "statulėlės"
     ],
     "answer": "statulėlę",
     "tr": "Лина держит в руках статуэтку.",
     "note": "statulėlė → statulėlę. Turėti ką? — винительный; rankose — в руках."
    },
    {
     "q": "Tai ne mano vaza, tai ___ vaza.",
     "options": [
      "Rūtos",
      "Rūta",
      "Rūtą"
     ],
     "answer": "Rūtos",
     "tr": "Это не моя ваза, это ваза Руты.",
     "note": "Kieno vaza? — Rūtos: владелец в родительном и стоит перед вещью."
    },
    {
     "q": "___ žiūri į senelio paveikslą.",
     "options": [
      "Tomas",
      "Tomo",
      "Tomą"
     ],
     "answer": "Tomas",
     "tr": "Томас смотрит на дедушкину картину.",
     "note": "Kas žiūri? — Tomas: кто действует, тот в именительном. Kieno paveikslas? — senelio."
    }
   ]
  },
  {
   "id": "u3-savybes",
   "title": "Koks daiktas? — размер, цвет, материал",
   "subtitle": "3B · Размер, качество, цена, форма, вес, восемь цветов, материалы на -inis.",
   "rule": "<p><b>Koks? Kokia?</b> Вещь описывают по семи признакам: <i lang=\"lt\">dydis</i> — размер, <i lang=\"lt\">kokybė</i> — качество, <i lang=\"lt\">spalva</i> — цвет, <i lang=\"lt\">kaina</i> — цена, <i lang=\"lt\">forma</i> — форма, <i lang=\"lt\">svoris</i> — вес, <i lang=\"lt\">medžiaga</i> — материал.</p><p>Прилагательные проще запоминать парами:</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Koks?</th><th>Какой?</th></tr><tr><td>didelis – mažas</td><td>большой – маленький</td></tr><tr><td>aukštas – žemas</td><td>высокий – низкий</td></tr><tr><td>plonas – storas</td><td>тонкий – толстый</td></tr><tr><td>ilgas – trumpas</td><td>длинный – короткий</td></tr><tr><td>geras – blogas</td><td>хороший – плохой</td></tr><tr><td>naujas – senas</td><td>новый – старый</td></tr><tr><td>minkštas – kietas</td><td>мягкий – твёрдый, жёсткий</td></tr><tr><td>brangus – pigus</td><td>дорогой – дешёвый</td></tr><tr><td>lengvas – sunkus</td><td>лёгкий – тяжёлый</td></tr><tr><td>apvalus – keturkampis</td><td>круглый – четырёхугольный</td></tr></table></div><p>Восемь цветов: <i lang=\"lt\">juodas</i> — чёрный, <i lang=\"lt\">baltas</i> — белый, <i lang=\"lt\">pilkas</i> — серый, <i lang=\"lt\">geltonas</i> — жёлтый, <i lang=\"lt\">žalias</i> — зелёный, <i lang=\"lt\">mėlynas</i> — синий, <i lang=\"lt\">raudonas</i> — красный, <i lang=\"lt\">rudas</i> — коричневый.</p><p>Суффикс <i lang=\"lt\">-inis</i> (женский род <i lang=\"lt\">-inė</i>) значит «сделанный из»: <i lang=\"lt\">medis → medinis</i> (деревянный), <i lang=\"lt\">stiklas → stiklinis</i> (стеклянный), <i lang=\"lt\">oda → odinis</i> (кожаный), <i lang=\"lt\">plastikas → plastikinis</i> (пластиковый), <i lang=\"lt\">auksas → auksinis</i> (золотой).</p><p>Запомни: <i lang=\"lt\">aukštas</i> — это и «высокий», и «этаж»; <i lang=\"lt\">talpus</i> — вместительный; <i lang=\"lt\">kokybiškas</i> — качественный.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "aukštas",
       "высокий"
      ],
      [
       "žemas",
       "низкий"
      ],
      [
       "plonas",
       "тонкий"
      ],
      [
       "storas",
       "толстый"
      ],
      [
       "ilgas",
       "длинный"
      ]
     ],
     "prompt": "Соедини пары: размер"
    },
    {
     "type": "match",
     "pairs": [
      [
       "minkštas",
       "мягкий"
      ],
      [
       "kietas",
       "твёрдый, жёсткий"
      ],
      [
       "kokybiškas",
       "качественный"
      ],
      [
       "lengvas",
       "лёгкий"
      ],
      [
       "sunkus",
       "тяжёлый"
      ]
     ],
     "prompt": "Соедини пары: качество и вес"
    },
    {
     "type": "match",
     "pairs": [
      [
       "juodas",
       "чёрный"
      ],
      [
       "baltas",
       "белый"
      ],
      [
       "geltonas",
       "жёлтый"
      ],
      [
       "mėlynas",
       "синий"
      ],
      [
       "rudas",
       "коричневый"
      ]
     ],
     "prompt": "Соедини пары: цвета"
    },
    {
     "type": "match",
     "pairs": [
      [
       "medinis",
       "деревянный"
      ],
      [
       "stiklinis",
       "стеклянный"
      ],
      [
       "auksinis",
       "золотой"
      ],
      [
       "apvalus",
       "круглый"
      ],
      [
       "keturkampis",
       "четырёхугольный"
      ]
     ],
     "prompt": "Соедини пары: материал и форма"
    },
    {
     "type": "match",
     "pairs": [
      [
       "dydis",
       "размер"
      ],
      [
       "kokybė",
       "качество"
      ],
      [
       "svoris",
       "вес"
      ],
      [
       "medžiaga",
       "материал"
      ],
      [
       "forma",
       "форма"
      ]
     ],
     "prompt": "Соедини пары: что описываем"
    },
    {
     "q": "brangus — ___",
     "options": [
      "pigus",
      "sunkus",
      "talpus"
     ],
     "answer": "pigus",
     "note": "Brangus — дорогой, pigus — дешёвый.",
     "prompt": "Антоним"
    },
    {
     "q": "ilgas — ___",
     "options": [
      "trumpas",
      "žemas",
      "plonas"
     ],
     "answer": "trumpas",
     "note": "Ilgas — длинный, trumpas — короткий. Žemas — низкий, plonas — тонкий.",
     "prompt": "Антоним"
    },
    {
     "q": "kietas — ___",
     "options": [
      "minkštas",
      "storas",
      "senas"
     ],
     "answer": "minkštas",
     "note": "Kietas — твёрдый, жёсткий; minkštas — мягкий.",
     "prompt": "Антоним"
    },
    {
     "q": "sunki — ___",
     "options": [
      "lengva",
      "pigi",
      "plona"
     ],
     "answer": "lengva",
     "note": "Sunkus, sunki — тяжёлый; lengvas, lengva — лёгкий. Женский род: sunki — lengva.",
     "prompt": "Антоним"
    },
    {
     "q": "серый",
     "options": [
      "pilkas",
      "rudas",
      "geltonas"
     ],
     "answer": "pilkas",
     "note": "Pilkas — серый; rudas — коричневый, geltonas — жёлтый.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "žalias",
     "options": [
      "зелёный",
      "жёлтый",
      "синий"
     ],
     "answer": "зелёный",
     "note": "Žalias — зелёный. Жёлтый — geltonas, синий — mėlynas.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "пластиковый стул",
     "options": [
      "plastikinė kėdė",
      "stiklinė kėdė",
      "medinė kėdė"
     ],
     "answer": "plastikinė kėdė",
     "note": "plastikas → plastikinis, женский род plastikinė: kėdė — женского рода.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Ši sofa labai ___: jos kaina didelė — 2000 eurų.",
     "options": [
      "brangi",
      "pigi",
      "minkšta"
     ],
     "answer": "brangi",
     "tr": "Этот диван очень дорогой: цена у него высокая — 2000 евро.",
     "note": "Brangus, brangi — дорогой. Sofa — женского рода, поэтому brangi."
    },
    {
     "q": "Spintoje daug vietos: ji labai ___.",
     "options": [
      "talpi",
      "plona",
      "pigi"
     ],
     "answer": "talpi",
     "tr": "В шкафу много места: он очень вместительный.",
     "note": "Talpus, talpi — вместительный: talpi spinta, talpus šaldytuvas."
    },
    {
     "q": "Sniegas yra ___.",
     "options": [
      "baltas",
      "juodas",
      "geltonas"
     ],
     "answer": "baltas",
     "tr": "Снег белый.",
     "note": "Sniegas — снег, baltas — белый."
    },
    {
     "q": "Lietuvos vėliavos spalvos — geltona, žalia ir ___.",
     "options": [
      "raudona",
      "mėlyna",
      "balta"
     ],
     "answer": "raudona",
     "tr": "Цвета флага Литвы — жёлтый, зелёный и красный.",
     "note": "Vėliava — флаг. Цвета названы в женском роде, как слово spalva: geltona, žalia, raudona."
    },
    {
     "q": "Stalas iš medžio — tai ___ stalas.",
     "options": [
      "medinis",
      "stiklinis",
      "odinis"
     ],
     "answer": "medinis",
     "tr": "Стол из дерева — это деревянный стол.",
     "note": "medis → medinis: суффикс -inis значит «сделанный из»."
    },
    {
     "q": "Sofa iš odos — tai ___ sofa.",
     "options": [
      "odinė",
      "medinė",
      "plastikinė"
     ],
     "answer": "odinė",
     "tr": "Диван из кожи — это кожаный диван.",
     "note": "oda → odinis, женский род odinė: sofa — женского рода."
    }
   ]
  },
  {
   "id": "u3-derinimas",
   "title": "Nauja sofa, patogus fotelis — согласование",
   "subtitle": "3B · Род прилагательного: -as / -a, -us / -i, -is / -ė; toks, tokia; Koks…! Kokia…!",
   "rule": "<p>Прилагательное берёт у существительного род, а окончание у него своё, по своему типу: <i lang=\"lt\">patogus fotelis, medinė spinta, graži kėdė</i>.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Koks? (м. р.)</th><th>Kokia? (ж. р.)</th></tr><tr><td>geras</td><td>gera</td></tr><tr><td>žalias</td><td>žalia</td></tr><tr><td>gražus</td><td>graži</td></tr><tr><td>medinis</td><td>medinė</td></tr><tr><td>didelis</td><td>didelė</td></tr></table></div><p>Род — литовский, а не русский: <i lang=\"lt\">butas, kambarys, paveikslas, veidrodis, fotelis, langas</i> — мужского рода; <i lang=\"lt\">sofa, kėdė, spinta, gėlė, antklodė</i> — женского.</p><p><i lang=\"lt\">Toks, tokia</i> — такой, такая: <i lang=\"lt\">Sofa tokia minkšta!</i> В восклицании — <i lang=\"lt\">koks</i> или <i lang=\"lt\">kokia</i>: <i lang=\"lt\">Koks patogus fotelis! Kokia graži vaza!</i></p><p><i lang=\"lt\">Ne-</i> пишется слитно: <i lang=\"lt\">nedidelis, nepatogus, nejaukus</i>. Короткий ответ сохраняет род слова из вопроса: <i lang=\"lt\">Ar sofa didelė? — Ne, nedidelė.</i></p><p>Ловушка: у прилагательных на <i lang=\"lt\">-us</i> женский род кончается на <i lang=\"lt\">-i</i>, а не на <i lang=\"lt\">-a</i>: <i lang=\"lt\">graži sofa, patogi kėdė</i>.</p>",
   "items": [
    {
     "q": "Miegamajame yra ___ spinta.",
     "options": [
      "medinė",
      "medinis",
      "mediniai"
     ],
     "answer": "medinė",
     "tr": "В спальне — деревянный шкаф.",
     "note": "Spinta — женского рода (ji): medinis → medinė."
    },
    {
     "q": "Prie lango yra ___ fotelis.",
     "options": [
      "žalias",
      "žalia",
      "žali"
     ],
     "answer": "žalias",
     "tr": "У окна — зелёное кресло.",
     "note": "Fotelis — мужского рода (jis): žalias fotelis."
    },
    {
     "q": "Prieškambaryje yra ___ veidrodis.",
     "options": [
      "didelis",
      "didelė",
      "dideli"
     ],
     "answer": "didelis",
     "tr": "В прихожей — большое зеркало.",
     "note": "Veidrodis — мужского рода (jis): didelis veidrodis."
    },
    {
     "q": "Ant stalo yra ___ vaza.",
     "options": [
      "stiklinė",
      "stiklinis",
      "stikliniai"
     ],
     "answer": "stiklinė",
     "tr": "На столе — стеклянная ваза.",
     "note": "Vaza — женского рода: stiklinis → stiklinė."
    },
    {
     "q": "Mano antklodė labai ___.",
     "options": [
      "stora",
      "storas",
      "stori"
     ],
     "answer": "stora",
     "tr": "Моё одеяло очень толстое.",
     "note": "Antklodė — женского рода (ji): storas → stora."
    },
    {
     "q": "Tavo lova labai ___.",
     "options": [
      "patogi",
      "patogus",
      "patogios"
     ],
     "answer": "patogi",
     "tr": "Твоя кровать очень удобная.",
     "note": "Lova — женского рода; patogus → patogi: на -i, не на -a."
    },
    {
     "q": "Tai ___ kambarys vaikui.",
     "options": [
      "idealus",
      "ideali",
      "idealūs"
     ],
     "answer": "idealus",
     "tr": "Это идеальная комната для ребёнка.",
     "note": "Kambarys — мужского рода: idealus kambarys (женский род — ideali)."
    },
    {
     "q": "Šis rankšluostis ___ minkštas!",
     "options": [
      "toks",
      "tokia",
      "tokie"
     ],
     "answer": "toks",
     "tr": "Это полотенце такое мягкое!",
     "note": "Rankšluostis — мужского рода (jis): toks minkštas."
    },
    {
     "q": "Ši kėdė ___ kieta!",
     "options": [
      "tokia",
      "toks",
      "tokie"
     ],
     "answer": "tokia",
     "tr": "Этот стул такой жёсткий!",
     "note": "Kėdė — женского рода (ji): tokia kieta."
    },
    {
     "q": "___ įdomus paveikslas!",
     "options": [
      "Koks",
      "Kokia",
      "Kokie"
     ],
     "answer": "Koks",
     "tr": "Какая интересная картина!",
     "note": "Paveikslas — мужского рода: Koks įdomus paveikslas!"
    },
    {
     "q": "Ar šis šviestuvas brangus? — Ne, ___.",
     "options": [
      "nebrangus",
      "nebrangi",
      "nebrangūs"
     ],
     "answer": "nebrangus",
     "tr": "Эта люстра дорогая? — Нет, недорогая.",
     "note": "Šviestuvas — мужского рода, и в ответе тоже: nebrangus, хотя по-русски «люстра — недорогая». Ne- пишется слитно."
    },
    {
     "q": "Ar jūsų miegamasis didelis? — Ne, ___, bet jaukus.",
     "options": [
      "nedidelis",
      "nedidelė",
      "nedideli"
     ],
     "answer": "nedidelis",
     "tr": "У вас большая спальня? — Нет, небольшая, но уютная.",
     "note": "Miegamasis — мужского рода: nedidelis, хотя по-русски «спальня — небольшая»."
    },
    {
     "q": "Ar tau patinka ši sofa? — Graži, bet ___.",
     "options": [
      "nepatogi",
      "nepatogus",
      "nepatogūs"
     ],
     "answer": "nepatogi",
     "tr": "Тебе нравится этот диван? — Красивый, но неудобный.",
     "note": "Sofa — женского рода: graži, nepatogi (мужской род — nepatogus)."
    },
    {
     "q": "Mano spinta ___, bet talpi.",
     "options": [
      "nenauja",
      "nenaujas",
      "nenauji"
     ],
     "answer": "nenauja",
     "tr": "Мой шкаф неновый, но вместительный.",
     "note": "Spinta — женского рода: nenaujas → nenauja."
    },
    {
     "q": "Šis kambarys tamsus ir ___.",
     "options": [
      "nejaukus",
      "nejauki",
      "nejaukūs"
     ],
     "answer": "nejaukus",
     "tr": "Эта комната тёмная и неуютная.",
     "note": "Kambarys — мужского рода: tamsus, nejaukus."
    }
   ]
  },
  {
   "id": "u3-kokie",
   "title": "Kokie? Kokios? — множественное число",
   "subtitle": "3B · Nauji stalai, naujos kėdės, dideli langai, aukštos lubos.",
   "rule": "<p><b>Kokie?</b> — «какие?» про слова мужского рода, <b>Kokios?</b> — про слова женского. По-русски форма одна — «новые», по-литовски их две: <i lang=\"lt\">nauji stalai, naujos kėdės</i>.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>м. р. ед. ч.</th><th>м. р. мн. ч.</th><th>ж. р. ед. ч.</th><th>ж. р. мн. ч.</th></tr><tr><td>geras</td><td>geri</td><td>gera</td><td>geros</td></tr><tr><td>žalias</td><td>žali</td><td>žalia</td><td>žalios</td></tr><tr><td>gražus</td><td>gražūs</td><td>graži</td><td>gražios</td></tr><tr><td>medinis</td><td>mediniai</td><td>medinė</td><td>medinės</td></tr><tr><td>didelis</td><td>dideli</td><td>didelė</td><td>didelės</td></tr></table></div><p>Только во множественном числе: <i lang=\"lt\">lubos, grindys, durys</i> — женского рода: <i lang=\"lt\">aukštos lubos, medinės grindys</i>, <i lang=\"lt\">Kokios aukštos lubos!</i> <i lang=\"lt\">Baldai</i> (мебель) — множественное число мужского рода: <i lang=\"lt\">nauji baldai</i>. По-русски здесь единственное число: потолок высокий, мебель новая. <i lang=\"lt\">Užuolaidos</i> (шторы) обычно тоже во множественном, женского рода: <i lang=\"lt\">naktinės užuolaidos</i>.</p><p>После чисел 2–9 прилагательное тоже во множественном: <i lang=\"lt\">du nauji stalai, dvi naujos kėdės</i> (числа — повторение 1A).</p><p>Ловушки: у типа <i lang=\"lt\">-as</i> мужской род множественного числа кончается на <i lang=\"lt\">-i</i>, а не на <i lang=\"lt\">-ai</i>, как у существительных: <i lang=\"lt\">geri stalai</i> (<i lang=\"lt\">gerai</i> — это «хорошо»); <i lang=\"lt\">gražus</i> — один, <i lang=\"lt\">gražūs</i> — несколько; <i lang=\"lt\">-inis → -iniai</i>, но <i lang=\"lt\">didelis → dideli</i>.</p>",
   "items": [
    {
     "q": "geras čiužinys → ___ čiužiniai",
     "options": [
      "geri",
      "geros",
      "gerai"
     ],
     "answer": "geri",
     "tr": "хороший матрас → хорошие матрасы",
     "note": "geras → geri. Gerai — это наречие «хорошо».",
     "prompt": "Множественное число"
    },
    {
     "q": "medinis staliukas → ___ staliukai",
     "options": [
      "mediniai",
      "medinės",
      "medinių"
     ],
     "answer": "mediniai",
     "tr": "деревянный столик → деревянные столики",
     "note": "-inis → -iniai: medinis → mediniai. Medinės — женский род.",
     "prompt": "Множественное число"
    },
    {
     "q": "patogus fotelis → ___ foteliai",
     "options": [
      "patogūs",
      "patogios",
      "patogiai"
     ],
     "answer": "patogūs",
     "tr": "удобное кресло → удобные кресла",
     "note": "-us → -ūs: patogus → patogūs. Fotelis — мужского рода.",
     "prompt": "Множественное число"
    },
    {
     "q": "didelis balkonas → ___ balkonai",
     "options": [
      "dideli",
      "didelės",
      "didelių"
     ],
     "answer": "dideli",
     "tr": "большой балкон → большие балконы",
     "note": "Исключение: didelis → dideli (не как medinis → mediniai).",
     "prompt": "Множественное число"
    },
    {
     "q": "žalia vaza → ___ vazos",
     "options": [
      "žalios",
      "žali",
      "žaliai"
     ],
     "answer": "žalios",
     "tr": "зелёная ваза → зелёные вазы",
     "note": "žalia → žalios (женский род), žalias → žali (мужской).",
     "prompt": "Множественное число"
    },
    {
     "q": "Mūsų bute labai ___ lubos.",
     "options": [
      "aukštos",
      "aukšta",
      "aukšti"
     ],
     "answer": "aukštos",
     "tr": "В нашей квартире очень высокий потолок.",
     "note": "Lubos — всегда множественное число, женский род: aukštos lubos."
    },
    {
     "q": "Rūtos virtuvėje grindys ___.",
     "options": [
      "medinės",
      "medinis",
      "mediniai"
     ],
     "answer": "medinės",
     "tr": "У Руты на кухне деревянный пол.",
     "note": "Grindys — всегда множественное число, женский род: medinės grindys."
    },
    {
     "q": "Tomo kambaryje baldai ___.",
     "options": [
      "nauji",
      "nauja",
      "naujos"
     ],
     "answer": "nauji",
     "tr": "В комнате Томаса мебель новая.",
     "note": "Baldai — множественное число, мужской род: nauji baldai."
    },
    {
     "q": "Miegamajame yra dieninės ir ___ užuolaidos.",
     "options": [
      "naktinės",
      "naktinė",
      "naktiniai"
     ],
     "answer": "naktinės",
     "tr": "В спальне есть дневные и ночные шторы.",
     "note": "Užuolaidos — женский род, множественное число: dieninės (дневные), naktinės (ночные)."
    },
    {
     "q": "Svetainėje yra du ___ kilimai.",
     "options": [
      "gražūs",
      "gražus",
      "gražios"
     ],
     "answer": "gražūs",
     "tr": "В гостиной два красивых ковра.",
     "note": "После du прилагательное во множественном: gražus → gražūs."
    },
    {
     "q": "Balkone yra dvi ___ kėdės.",
     "options": [
      "plastikinės",
      "plastikiniai",
      "plastikinė"
     ],
     "answer": "plastikinės",
     "tr": "На балконе два пластиковых стула.",
     "note": "Kėdės — женского рода: plastikinė → plastikinės (мужской род — plastikiniai)."
    },
    {
     "q": "Ant sofos yra trys ___ pagalvės.",
     "options": [
      "minkštos",
      "minkšti",
      "minkšta"
     ],
     "answer": "minkštos",
     "tr": "На диване три мягкие подушки.",
     "note": "Pagalvės — женского рода: minkšta → minkštos."
    },
    {
     "q": "___ šviesūs kambariai!",
     "options": [
      "Kokie",
      "Kokios",
      "Koks"
     ],
     "answer": "Kokie",
     "tr": "Какие светлые комнаты!",
     "note": "Kambariai — мужского рода: Kokie šviesūs kambariai!"
    },
    {
     "q": "___ jūsų buto durys? — Šarvuotos.",
     "options": [
      "Kokios",
      "Kokie",
      "Kokia"
     ],
     "answer": "Kokios",
     "tr": "Какая дверь в вашей квартире? — Бронированная.",
     "note": "Durys — всегда множественное число, женский род: Kokios? — Šarvuotos."
    },
    {
     "q": "Mūsų kaimynai labai ___.",
     "options": [
      "draugiški",
      "draugiškos",
      "draugiškas"
     ],
     "answer": "draugiški",
     "tr": "Наши соседи очень дружелюбные.",
     "note": "Kaimynai — мужского рода: draugiškas → draugiški."
    }
   ]
  },
  {
   "id": "u3-kai",
   "title": "Man patinka, kai… — что нравится в квартире",
   "subtitle": "3B · Kai — когда, per — слишком; daug и nėra с родительным; kartu и atskirai.",
   "rule": "<p><i lang=\"lt\">Man patinka, kai…</i> — мне нравится, когда… После <i lang=\"lt\">kai</i> идёт обычное предложение, перед <i lang=\"lt\">kai</i> — запятая: <i lang=\"lt\">Man patinka, kai kambaryje daug šviesos. Man nepatinka, kai virtuvė maža.</i> <i lang=\"lt\">Kai</i> — союз «когда»; вопрос «когда?» — <i lang=\"lt\">kada?</i></p><p>Что стоит внутри такого предложения:</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Слово</th><th>Падеж после него</th><th>Пример</th></tr><tr><td>yra</td><td>именительный</td><td>yra balkonas</td></tr><tr><td>nėra</td><td>родительный</td><td>nėra balkono, nėra užuolaidų</td></tr><tr><td>daug, mažai, per daug</td><td>родительный</td><td>daug šviesos, mažai paveikslų</td></tr></table></div><p>Что не считают, стоит в единственном числе: <i lang=\"lt\">daug šviesos</i>; что считают — во множественном: <i lang=\"lt\">daug paveikslų, gėlių, kilimų</i>.</p><p><i lang=\"lt\">Per</i> перед прилагательным или перед <i lang=\"lt\">daug</i> — «слишком»: <i lang=\"lt\">per brangus, per kieta, per daug baldų</i>. Это не <i lang=\"lt\">labai</i> (очень): <i lang=\"lt\">per</i> — уже жалоба.</p><p>После <i lang=\"lt\">nepatinka</i> вещь остаётся в именительном: <i lang=\"lt\">Man nepatinka šis paveikslas</i> — не родительный, как после <i lang=\"lt\">neturiu</i>.</p><p>Пригодится: <i lang=\"lt\">kartu</i> — вместе, <i lang=\"lt\">atskirai</i> — отдельно (<i lang=\"lt\">Vonia ir tualetas kartu ar atskirai?</i>); <i lang=\"lt\">po remonto</i> — после ремонта; <i lang=\"lt\">jų nėra</i> — их нет.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "per daug",
       "слишком много"
      ],
      [
       "per brangus",
       "слишком дорогой"
      ],
      [
       "kartu",
       "вместе"
      ],
      [
       "atskirai",
       "отдельно"
      ],
      [
       "po remonto",
       "после ремонта"
      ]
     ],
     "prompt": "Соедини пары: слишком, вместе, отдельно"
    },
    {
     "q": "Man patinka, kai virtuvėje daug ___.",
     "options": [
      "šviesos",
      "šviesa",
      "šviesą"
     ],
     "answer": "šviesos",
     "tr": "Мне нравится, когда на кухне много света.",
     "note": "šviesa → daug šviesos. Daug + родительный; свет не считают — единственное число."
    },
    {
     "q": "Tomo svetainėje per daug ___.",
     "options": [
      "baldų",
      "baldai",
      "baldus"
     ],
     "answer": "baldų",
     "tr": "У Томаса в гостиной слишком много мебели.",
     "note": "baldai → per daug baldų. Per daug (слишком много) + родительный."
    },
    {
     "q": "Mūsų bute mažai ___, tik du.",
     "options": [
      "paveikslų",
      "paveikslai",
      "paveikslus"
     ],
     "answer": "paveikslų",
     "tr": "В нашей квартире мало картин, только две.",
     "note": "paveikslas → mažai paveikslų. Mažai + родительный множественного."
    },
    {
     "q": "Kambarys gražus, tik vienas minusas: nėra ___.",
     "options": [
      "užuolaidų",
      "užuolaida",
      "užuolaidas"
     ],
     "answer": "užuolaidų",
     "tr": "Комната красивая, только один минус: нет штор.",
     "note": "užuolaidos → nėra užuolaidų. Nėra + родительный."
    },
    {
     "q": "Man patinka augalai, bet mūsų bute ___ nėra.",
     "options": [
      "jų",
      "juos",
      "jiems"
     ],
     "answer": "jų",
     "tr": "Мне нравятся растения, но в нашей квартире их нет.",
     "note": "jie → jų nėra (их нет). Nėra + родительный."
    },
    {
     "q": "Man patinka, kai name ___ liftas: tai didelis pliusas.",
     "options": [
      "yra",
      "nėra",
      "turi"
     ],
     "answer": "yra",
     "tr": "Мне нравится, когда в доме есть лифт: это большой плюс.",
     "note": "Liftas — именительный, значит yra. После nėra был бы родительный: nėra lifto."
    },
    {
     "q": "Man nepatinka, kai vonioje ___ lango.",
     "options": [
      "nėra",
      "yra",
      "turi"
     ],
     "answer": "nėra",
     "tr": "Мне не нравится, когда в ванной нет окна.",
     "note": "Lango — родительный (langas → lango), значит nėra."
    },
    {
     "q": "Man patinka, kai kambarys ___.",
     "options": [
      "šviesus",
      "šviesi",
      "šviesūs"
     ],
     "answer": "šviesus",
     "tr": "Мне нравится, когда комната светлая.",
     "note": "Kambarys — мужского рода: šviesus. После kai — обычное предложение."
    },
    {
     "q": "Man irgi nepatinka, kai kaimynai ___.",
     "options": [
      "triukšmingi",
      "triukšmingos",
      "triukšmingas"
     ],
     "answer": "triukšmingi",
     "tr": "Мне тоже не нравится, когда соседи шумные.",
     "note": "Kaimynai — множественное число, мужской род: triukšmingas → triukšmingi."
    },
    {
     "q": "Rūtai nepatinka mūsų ___.",
     "options": [
      "šviestuvas",
      "šviestuvą",
      "šviestuvo"
     ],
     "answer": "šviestuvas",
     "tr": "Руте не нравится наш светильник.",
     "note": "После nepatinka — именительный (kas?), а не родительный, как после neturiu."
    },
    {
     "q": "слишком мягкий",
     "options": [
      "per minkštas",
      "labai minkštas",
      "daug minkštas"
     ],
     "answer": "per minkštas",
     "note": "Per + прилагательное — слишком. Labai minkštas — очень мягкий.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Этот диван слишком жёсткий.",
     "options": [
      "Ši sofa per kieta.",
      "Ši sofa labai kieta.",
      "Ši sofa nekieta."
     ],
     "answer": "Ši sofa per kieta.",
     "note": "Per kieta — слишком жёсткая (sofa — женского рода). Labai kieta — очень жёсткая.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Kambarys per mažas.",
     "options": [
      "Комната слишком маленькая.",
      "Комната очень маленькая.",
      "Комната небольшая."
     ],
     "answer": "Комната слишком маленькая.",
     "note": "Per mažas — слишком маленький. Очень маленький — labai mažas.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "Ar vonioje yra tualetas? — Ne, tualetas ir vonia ___.",
     "options": [
      "atskirai",
      "kartu",
      "toli"
     ],
     "answer": "atskirai",
     "tr": "В ванной есть туалет? — Нет, туалет и ванная отдельно.",
     "note": "Туалета в ванной нет — значит, отдельно: atskirai. Kartu — вместе."
    },
    {
     "q": "Svetainė ir virtuvė ___: tai vienas didelis kambarys.",
     "options": [
      "kartu",
      "atskirai",
      "toli"
     ],
     "answer": "kartu",
     "tr": "Гостиная и кухня вместе: это одна большая комната.",
     "note": "Одна большая комната — значит, вместе: kartu. Atskirai — отдельно."
    },
    {
     "q": "Ar butas naujas? — Ne, senas, bet po ___.",
     "options": [
      "remonto",
      "remontas",
      "remontą"
     ],
     "answer": "remonto",
     "tr": "Квартира новая? — Нет, старая, но после ремонта.",
     "note": "remontas → po remonto. Po + родительный — после."
    }
   ]
  },
  {
   "id": "u3-kuris",
   "title": "Šis, tas, kuris, kitas — этот, тот, который",
   "subtitle": "3C · Указательные местоимения: род и число как у существительного.",
   "rule": "<p>Указательные слова ведут себя как прилагательные: берут род и число существительного.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th></th><th>м. р.</th><th>ж. р.</th><th>мн. ч. м. р.</th><th>мн. ч. ж. р.</th></tr><tr><td>этот</td><td>šis</td><td>ši</td><td>šie</td><td>šios</td></tr><tr><td>тот</td><td>tas</td><td>ta</td><td>tie</td><td>tos</td></tr><tr><td>вон тот</td><td>anas</td><td>ana</td><td>anie</td><td>anos</td></tr><tr><td>который</td><td>kuris</td><td>kuri</td><td>kurie</td><td>kurios</td></tr><tr><td>другой</td><td>kitas</td><td>kita</td><td>kiti</td><td>kitos</td></tr></table></div><ul><li><i lang=\"lt\">šis</i> — «этот», рядом с тобой; в разговоре часто <i lang=\"lt\">šitas, šita</i>. <i lang=\"lt\">tas</i> — нейтральное «тот, этот». <i lang=\"lt\">anas</i> — «вон тот», второй из двух.</li><li><i lang=\"lt\">Kuris?</i> — который из этих: <i lang=\"lt\">Kuris stalas tavo — šis ar tas?</i> <i lang=\"lt\">Koks?</i> — какой по качеству: <i lang=\"lt\">Koks stalas? — Didelis.</i></li><li><i lang=\"lt\">kitas</i> — и «другой», и «следующий»: <i lang=\"lt\">kitas butas, kita savaitė, kita stotelė</i>.</li></ul><p>Род берётся у литовского слова, а не у русского: <i lang=\"lt\">šis butas</i> (эта квартира), <i lang=\"lt\">ta spinta</i> (тот шкаф), <i lang=\"lt\">šios durys</i> (эта дверь: слово только во мн. ч.). Не путай похожие формы: <i lang=\"lt\">ši</i> — одна, <i lang=\"lt\">šie</i> и <i lang=\"lt\">šios</i> — много; так же <i lang=\"lt\">kuri — kurie</i>, <i lang=\"lt\">kita — kiti</i>.</p><p>«Это» + существительное — неизменяемое <i lang=\"lt\">tai</i>: <i lang=\"lt\">Tai mano kambarys. Tai mano raktai.</i> После глагола встретишь винительный падеж: <i lang=\"lt\">perku šį stalą, šią lempą, tą kėdę</i>.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "šis",
       "этот"
      ],
      [
       "ši",
       "эта"
      ],
      [
       "šie",
       "эти"
      ],
      [
       "anas",
       "вон тот"
      ],
      [
       "ana",
       "вон та"
      ]
     ],
     "prompt": "Этот и вон тот"
    },
    {
     "type": "match",
     "pairs": [
      [
       "kiti kambariai",
       "другие комнаты"
      ],
      [
       "tos kėdės",
       "те стулья"
      ],
      [
       "kuri lempa",
       "которая лампа"
      ],
      [
       "šie raktai",
       "эти ключи"
      ],
      [
       "anas namas",
       "вон тот дом"
      ]
     ],
     "prompt": "Какой именно предмет?"
    },
    {
     "q": "___ butas labai šviesus.",
     "options": [
      "Šis",
      "Ši",
      "Šios"
     ],
     "answer": "Šis",
     "tr": "Эта квартира очень светлая.",
     "note": "butas — мужского рода (хотя «квартира»): šis butas."
    },
    {
     "q": "___ spinta per didelė.",
     "options": [
      "Ta",
      "Tas",
      "Tie"
     ],
     "answer": "Ta",
     "tr": "Тот шкаф слишком большой.",
     "note": "spinta — женского рода (хотя «шкаф»): ta spinta."
    },
    {
     "q": "___ durys labai sunkios.",
     "options": [
      "Šios",
      "Šis",
      "Ši"
     ],
     "answer": "Šios",
     "tr": "Эта дверь очень тяжёлая.",
     "note": "durys — только мн. ч., женский род: šios durys."
    },
    {
     "q": "___ raktai ne mano.",
     "options": [
      "Tie",
      "Tas",
      "Ta"
     ],
     "answer": "Tie",
     "tr": "Те ключи не мои.",
     "note": "raktai — мн. ч., мужской род: tie raktai."
    },
    {
     "q": "___ savaitė bus labai sunki.",
     "options": [
      "Kita",
      "Kitas",
      "Kiti"
     ],
     "answer": "Kita",
     "tr": "Следующая неделя будет очень трудной.",
     "note": "savaitė — женского рода: kita savaitė — следующая неделя."
    },
    {
     "q": "___ klausimas labai lengvas.",
     "options": [
      "Kitas",
      "Kita",
      "Kiti"
     ],
     "answer": "Kitas",
     "tr": "Следующий вопрос очень лёгкий.",
     "note": "klausimas — мужского рода: kitas klausimas."
    },
    {
     "q": "Šį stalą perkame, o ___ kėdės per brangios.",
     "options": [
      "tos",
      "tie",
      "ta"
     ],
     "answer": "tos",
     "tr": "Этот стол мы покупаем, а те стулья слишком дорогие.",
     "note": "kėdės — мн. ч., женский род: tos kėdės. Šį — винительный падеж от šis."
    },
    {
     "q": "___ knygos tavo — šios ar anos?",
     "options": [
      "Kurios",
      "Kurie",
      "Kuri"
     ],
     "answer": "Kurios",
     "tr": "Какие книги твои — эти или вон те?",
     "note": "knygos — мн. ч., женский род: kurios, šios, anos."
    },
    {
     "q": "Šis fotelis brangus, o ___ pigus.",
     "options": [
      "anas",
      "ana",
      "anie"
     ],
     "answer": "anas",
     "tr": "Это кресло дорогое, а вон то дешёвое.",
     "note": "Речь о втором fotelis (мужской род, ед. ч.): anas."
    },
    {
     "q": "___ kambarys tavo — šis ar tas?",
     "options": [
      "Kuris",
      "Kuri",
      "Kurie"
     ],
     "answer": "Kuris",
     "tr": "Какая комната твоя — эта или та?",
     "note": "kambarys — мужского рода (хотя «комната»): kuris kambarys."
    },
    {
     "q": "___ baldai nauji — šie ar anie?",
     "options": [
      "Kurie",
      "Kuri",
      "Kuris"
     ],
     "answer": "Kurie",
     "tr": "Какая мебель новая — эта или вон та?",
     "note": "baldai — мн. ч., мужской род (хотя «мебель»): kurie, šie, anie."
    },
    {
     "q": "___ tavo naujas butas? — Šviesus ir šiltas.",
     "options": [
      "Koks",
      "Kuris",
      "Kokia"
     ],
     "answer": "Koks",
     "tr": "Какая у тебя новая квартира? — Светлая и тёплая.",
     "note": "В ответе — качество, значит koks? Kuris? — «который из них»: в ответе было бы šis или tas."
    },
    {
     "q": "Kuri kėdė tavo? — ___, prie lango.",
     "options": [
      "Ana",
      "Anas",
      "Anie"
     ],
     "answer": "Ana",
     "tr": "Какой стул твой? — Вон тот, у окна.",
     "note": "kėdė — женского рода (хотя «стул»), поэтому и в ответе ana."
    },
    {
     "q": "Kita stotelė — mūsų.",
     "options": [
      "следующая",
      "которая",
      "вон та"
     ],
     "answer": "следующая",
     "note": "Kita stotelė — mūsų. — Следующая остановка — наша. Kitas, kita — и «другой», и «следующий». Которая — kuri, вон та — ana.",
     "prompt": "Что здесь значит kita?",
     "optLang": "ru"
    },
    {
     "q": "Šios užuolaidos tamsios, o ___ — šviesios.",
     "options": [
      "kitos",
      "kurios",
      "kokios"
     ],
     "answer": "kitos",
     "tr": "Эти шторы тёмные, а другие — светлые.",
     "note": "kitos — другие. Kurios? (которые?) и kokios? (какие?) — вопросы."
    },
    {
     "q": "___ mūsų nauji kaimynai.",
     "options": [
      "Tai",
      "Šis",
      "Ši"
     ],
     "answer": "Tai",
     "tr": "Это наши новые соседи.",
     "note": "«Это» + существительное — неизменяемое tai. Šis и ši — ед. ч., а kaimynai — мн. ч."
    },
    {
     "q": "Aš perku šią lempą, o tu — tą.",
     "options": [
      "Я покупаю эту лампу, а ты — ту.",
      "Я покупаю эти лампы, а ты — те.",
      "Я покупаю другую лампу, а ты — эту."
     ],
     "answer": "Я покупаю эту лампу, а ты — ту.",
     "note": "šią, tą — винительный падеж от ši, ta: perku ką? — šią lempą, tą lempą.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    }
   ]
  },
  {
   "id": "u3-laips",
   "title": "Geresnis, geriausias — степени сравнения",
   "subtitle": "3C · Больше и самый большой: -esnis, -iausias, negu, pats.",
   "rule": "<p>Степени сравнения образуются суффиксами: окончание (<i lang=\"lt\">-as, -us, -is</i>) убираем и добавляем <i lang=\"lt\">-esnis</i> (сравнительная) или <i lang=\"lt\">-iausias</i> (превосходная).</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th></th><th>м. р.</th><th>ж. р.</th><th>мн. ч.</th></tr><tr><td>хороший</td><td>geras</td><td>gera</td><td>geri, geros</td></tr><tr><td>лучше</td><td>geresnis</td><td>geresnė</td><td>geresni, geresnės</td></tr><tr><td>самый лучший</td><td>geriausias</td><td>geriausia</td><td>geriausi, geriausios</td></tr></table></div><ul><li>«Чем» — <i lang=\"lt\">negu</i> (или <i lang=\"lt\">nei</i>) + именительный: <i lang=\"lt\">Šis butas didesnis negu tas.</i> <i lang=\"lt\">dar</i> + сравнительная — «ещё»: <i lang=\"lt\">dar geresnis</i>.</li><li>С превосходной степенью: <i lang=\"lt\">pats, pati</i> (самый, самая), <i lang=\"lt\">iš visų</i> (из всех), <i lang=\"lt\">visų</i> (всех); часто добавляют место: <i lang=\"lt\">pats gražiausias parkas mieste</i>, <i lang=\"lt\">visų geriausias</i>, <i lang=\"lt\">didžiausias pasaulyje</i>.</li><li>Только перед <i lang=\"lt\">-iausias</i> t → č, d → dž: <i lang=\"lt\">šiltas → šilčiausias</i>, <i lang=\"lt\">aukštas → aukščiausias</i>, <i lang=\"lt\">saldus → saldžiausias</i>; в сравнительной основа прежняя: <i lang=\"lt\">šiltesnis</i>. Запомни: <i lang=\"lt\">didelis → didesnis → didžiausias</i>, <i lang=\"lt\">naujas → naujausias</i>.</li></ul><p>Ловушки. Русское «больше» не меняется, а литовская форма согласуется с существительным: <i lang=\"lt\">butas didesnis</i>, <i lang=\"lt\">virtuvė didesnė</i>, <i lang=\"lt\">kambariai didesni</i>. «Самый красивый» — не <i lang=\"lt\">pats</i> + обычная форма: суффикс обязателен, <i lang=\"lt\">pats gražiausias</i>. А <i lang=\"lt\">geras</i>, в отличие от «хороший — лучше», правильное: <i lang=\"lt\">geresnis, geriausias</i>.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "pigesnis",
       "дешевле"
      ],
      [
       "naujesnis",
       "новее"
      ],
      [
       "geresnis",
       "лучше"
      ],
      [
       "gražesnis",
       "красивее"
      ],
      [
       "vyresnis",
       "старше"
      ]
     ],
     "prompt": "Сравнительная степень"
    },
    {
     "type": "match",
     "pairs": [
      [
       "didžiausias",
       "самый большой"
      ],
      [
       "geriausias",
       "самый лучший"
      ],
      [
       "naujausias",
       "самый новый"
      ],
      [
       "skaniausias",
       "самый вкусный"
      ],
      [
       "vyriausias",
       "самый старший"
      ]
     ],
     "prompt": "Превосходная степень"
    },
    {
     "q": "Mūsų virtuvė ___ negu svetainė.",
     "options": [
      "šviesesnė",
      "šviesi",
      "šviesiausia"
     ],
     "answer": "šviesesnė",
     "tr": "Наша кухня светлее, чем гостиная.",
     "note": "negu + второй предмет → сравнительная степень: šviesi → šviesesnė."
    },
    {
     "q": "Traukinys ___ nei autobusas.",
     "options": [
      "greitesnis",
      "greitas",
      "greičiausias"
     ],
     "answer": "greitesnis",
     "tr": "Поезд быстрее, чем автобус.",
     "note": "nei = negu — «чем», значит сравнительная степень: greitas → greitesnis."
    },
    {
     "q": "Ši sofa ___ negu fotelis.",
     "options": [
      "pigesnė",
      "pigi",
      "pigiausia"
     ],
     "answer": "pigesnė",
     "tr": "Этот диван дешевле, чем кресло.",
     "note": "Сравниваем два предмета через negu: pigi → pigesnė."
    },
    {
     "q": "Tai pats ___ telefonas parduotuvėje.",
     "options": [
      "brangiausias",
      "brangus",
      "brangesnis"
     ],
     "answer": "brangiausias",
     "tr": "Это самый дорогой телефон в магазине.",
     "note": "pats (самый) требует превосходной степени: brangus → brangiausias."
    },
    {
     "q": "Šis pyragas ___ iš visų.",
     "options": [
      "saldžiausias",
      "saldus",
      "saldesnis"
     ],
     "answer": "saldžiausias",
     "tr": "Этот пирог самый сладкий из всех.",
     "note": "iš visų — из всех → превосходная степень: saldus → saldžiausias (d → dž)."
    },
    {
     "q": "Ši gatvė visų ___.",
     "options": [
      "plačiausia",
      "plati",
      "platesnė"
     ],
     "answer": "plačiausia",
     "tr": "Эта улица шире всех.",
     "note": "visų + превосходная степень — «всех»: plati → plačiausia (t → č)."
    },
    {
     "q": "Jūsų balkonas ___ negu mūsų.",
     "options": [
      "didesnis",
      "didesnė",
      "didesni"
     ],
     "answer": "didesnis",
     "tr": "Ваш балкон больше, чем наш.",
     "note": "balkonas — мужского рода, ед. ч.: didesnis. Didelis → didesnis, -el- выпадает."
    },
    {
     "q": "Ši spinta ___ negu ta.",
     "options": [
      "siauresnė",
      "siauresnis",
      "siauresni"
     ],
     "answer": "siauresnė",
     "tr": "Этот шкаф более узкий, чем тот.",
     "note": "spinta — женского рода (хотя «шкаф»): siauresnė."
    },
    {
     "q": "Šie kambariai ___ negu anie.",
     "options": [
      "gražesni",
      "gražesnis",
      "gražesnė"
     ],
     "answer": "gražesni",
     "tr": "Эти комнаты красивее, чем вон те.",
     "note": "kambariai — мн. ч., мужской род: gražesni."
    },
    {
     "q": "Tai pati ___ kavinė mieste.",
     "options": [
      "geriausia",
      "geriausias",
      "geriausios"
     ],
     "answer": "geriausia",
     "tr": "Это самое лучшее кафе в городе.",
     "note": "kavinė — женского рода, ед. ч., поэтому pati geriausia."
    },
    {
     "q": "Šios kėdės ___ iš visų.",
     "options": [
      "patogiausios",
      "patogiausias",
      "patogiausia"
     ],
     "answer": "patogiausios",
     "tr": "Эти стулья самые удобные из всех.",
     "note": "kėdės — мн. ч., женский род: patogiausios."
    },
    {
     "q": "Svetainė šilta, bet miegamasis dar ___.",
     "options": [
      "šiltesnis",
      "šiltesnė",
      "šiltesni"
     ],
     "answer": "šiltesnis",
     "tr": "Гостиная тёплая, но спальня ещё теплее.",
     "note": "Форма согласуется со вторым предметом: miegamasis — мужского рода → šiltesnis."
    },
    {
     "q": "Šis filmas liūdnas, bet knyga dar ___.",
     "options": [
      "liūdnesnė",
      "liūdnesnis",
      "liūdnesni"
     ],
     "answer": "liūdnesnė",
     "tr": "Этот фильм грустный, но книга ещё грустнее.",
     "note": "knyga — женского рода → liūdnesnė. Dar + сравнительная степень — «ещё»."
    },
    {
     "q": "Stalas brangus, bet kėdės dar ___.",
     "options": [
      "brangesnės",
      "brangesnė",
      "brangesni"
     ],
     "answer": "brangesnės",
     "tr": "Стол дорогой, но стулья ещё дороже.",
     "note": "kėdės — мн. ч., женский род → brangesnės."
    },
    {
     "q": "Liepa — pats ___ metų mėnuo.",
     "options": [
      "šilčiausias",
      "šiltiausias",
      "šiltesnis"
     ],
     "answer": "šilčiausias",
     "tr": "Июль — самый тёплый месяц года.",
     "note": "šiltas → šilčiausias: перед -iausias t → č. В сравнительной t остаётся: šiltesnis."
    },
    {
     "q": "Vilnius — ___ Lietuvos miestas.",
     "options": [
      "didžiausias",
      "didiausias",
      "didžesnis"
     ],
     "answer": "didžiausias",
     "tr": "Вильнюс — самый большой город Литвы.",
     "note": "didelis → didesnis → didžiausias: -el- выпадает, d → dž только перед -iausias; сравнительная — didesnis."
    },
    {
     "q": "Tai pats ___ žmogus pasaulyje.",
     "options": [
      "aukščiausias",
      "aukštiausias",
      "aukščesnis"
     ],
     "answer": "aukščiausias",
     "tr": "Это самый высокий человек в мире.",
     "note": "aukštas → aukščiausias: t → č только перед -iausias; сравнительная — aukštesnis."
    },
    {
     "q": "Mūsų naujas butas didesnis ___.",
     "options": [
      "negu jūsų",
      "iš visų",
      "pasaulyje"
     ],
     "answer": "negu jūsų",
     "tr": "Наша новая квартира больше, чем ваша.",
     "note": "didesnis — сравнительная степень, ей нужно negu. Iš visų и pasaulyje идут с превосходной: didžiausias iš visų."
    },
    {
     "q": "Šis kambarys šviesiausias ___.",
     "options": [
      "iš visų",
      "negu anas",
      "dar"
     ],
     "answer": "iš visų",
     "tr": "Эта комната самая светлая из всех.",
     "note": "šviesiausias — превосходная степень: iš visų. Negu и dar идут со сравнительной: šviesesnis negu anas, dar šviesesnis."
    }
   ]
  },
  {
   "id": "u3-prielinks",
   "title": "Ant, po, prie, už — предлоги места",
   "subtitle": "3C · На, под, у, за, между, над, перед — и какой падеж.",
   "rule": "<p>Каждый предлог места требует своего падежа.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Предлог</th><th>Падеж</th><th>По-русски</th><th>Пример</th></tr><tr><td>ant</td><td>ko? род.</td><td>на</td><td>ant stalo</td></tr><tr><td>už</td><td>ko? род.</td><td>за</td><td>už namo</td></tr><tr><td>prie</td><td>ko? род.</td><td>у, возле</td><td>prie lango</td></tr><tr><td>tarp</td><td>ko? род.</td><td>между</td><td>tarp banko ir pašto</td></tr><tr><td>virš</td><td>ko? род.</td><td>над</td><td>virš stalo</td></tr><tr><td>po</td><td>kuo? тв.</td><td>под</td><td>po stalu</td></tr><tr><td>prieš</td><td>ką? вин.</td><td>перед</td><td>prieš mokyklą</td></tr><tr><td>—</td><td>kur? местн.</td><td>в, внутри</td><td>spintoje</td></tr></table></div><p>Окончания (род., тв., вин.): <i lang=\"lt\">stalas → stalo, stalu, stalą</i>; <i lang=\"lt\">lova → lovos, lova, lovą</i>; <i lang=\"lt\">kėdė → kėdės, kėde, kėdę</i>; <i lang=\"lt\">skėtis → skėčio, skėčiu, skėtį</i> (t → č перед -io, -iu).</p><p>Ловушка: по-русски после «за, между, над, перед» стоит творительный, а по-литовски — родительный (<i lang=\"lt\">už, tarp, virš</i>) или винительный (<i lang=\"lt\">prieš</i>). Творительного, как после русского «под», требует только <i lang=\"lt\">po</i>, но <i lang=\"lt\">po lova</i> выглядит как именительный.</p><p>«На» — это <i lang=\"lt\">ant</i> только про поверхность: <i lang=\"lt\">ant stalo</i>. На кухне — <i lang=\"lt\">virtuvėje</i>, на втором этаже — <i lang=\"lt\">antrame aukšte</i>.</p><p>Тот же предлог может значить и другое. С другим падежом: <i lang=\"lt\">už namo</i> (за домом) — <i lang=\"lt\">mokėti už butą</i> (за квартиру); <i lang=\"lt\">po stalu</i> (под столом) — <i lang=\"lt\">po pietų</i> (после обеда). С тем же винительным: <i lang=\"lt\">prieš namą</i> (перед домом) — <i lang=\"lt\">prieš savaitę</i> (неделю назад).</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "ant",
       "на"
      ],
      [
       "po",
       "под"
      ],
      [
       "prie",
       "у, возле"
      ],
      [
       "už",
       "за"
      ],
      [
       "tarp",
       "между"
      ]
     ],
     "prompt": "Предлоги места"
    },
    {
     "type": "match",
     "pairs": [
      [
       "po stalu",
       "под столом"
      ],
      [
       "virš lovos",
       "над кроватью"
      ],
      [
       "prieš mokyklą",
       "перед школой"
      ],
      [
       "už namo",
       "за домом"
      ],
      [
       "tarp banko ir pašto",
       "между банком и почтой"
      ]
     ],
     "prompt": "Где это?"
    },
    {
     "q": "Katinas sėdi ant ___.",
     "options": [
      "sofos",
      "sofa",
      "sofą"
     ],
     "answer": "sofos",
     "tr": "Кот сидит на диване.",
     "note": "ant + родительный (ko?): sofa → ant sofos."
    },
    {
     "q": "Mūsų garažas yra už ___.",
     "options": [
      "daugiabučio",
      "daugiabutį",
      "daugiabučiu"
     ],
     "answer": "daugiabučio",
     "tr": "Наш гараж — за многоквартирным домом.",
     "note": "už + родительный (ko?): daugiabutis → už daugiabučio (t → č)."
    },
    {
     "q": "Aš laukiu prie ___.",
     "options": [
      "rotušės",
      "rotušė",
      "rotušę"
     ],
     "answer": "rotušės",
     "tr": "Я жду у ратуши.",
     "note": "prie + родительный (ko?): rotušė → prie rotušės."
    },
    {
     "q": "Paštas yra tarp mokyklos ir ___.",
     "options": [
      "parko",
      "parku",
      "parką"
     ],
     "answer": "parko",
     "tr": "Почта находится между школой и парком.",
     "note": "tarp + родительный, оба слова: tarp mokyklos ir parko."
    },
    {
     "q": "Virš ___ kabo veidrodis.",
     "options": [
      "komodos",
      "komoda",
      "komodą"
     ],
     "answer": "komodos",
     "tr": "Над комодом висит зеркало.",
     "note": "virš + родительный (ko?): komoda → virš komodos."
    },
    {
     "q": "Kavinėje sėdime po ___.",
     "options": [
      "skėčiu",
      "skėčio",
      "skėtį"
     ],
     "answer": "skėčiu",
     "tr": "В кафе мы сидим под зонтом.",
     "note": "po + творительный (kuo?): skėtis → po skėčiu (t → č)."
    },
    {
     "q": "Vaikai stovi prieš ___.",
     "options": [
      "vitriną",
      "vitrina",
      "vitrinos"
     ],
     "answer": "vitriną",
     "tr": "Дети стоят перед витриной.",
     "note": "prieš + винительный (ką?): vitrina → prieš vitriną."
    },
    {
     "q": "Tavo telefonas guli po ___.",
     "options": [
      "kėde",
      "kėdė",
      "kėdės"
     ],
     "answer": "kėde",
     "tr": "Твой телефон лежит под стулом.",
     "note": "po + творительный (kuo?): kėdė → po kėde."
    },
    {
     "q": "Dėžė su knygomis yra ___ lova.",
     "options": [
      "po",
      "ant",
      "virš"
     ],
     "answer": "po",
     "tr": "Коробка с книгами — под кроватью.",
     "note": "lova здесь — творительный (kuo?), его требует только po. После ant и virš было бы lovos."
    },
    {
     "q": "Automobilis stovi ___ namą.",
     "options": [
      "prieš",
      "prie",
      "už"
     ],
     "answer": "prieš",
     "tr": "Машина стоит перед домом.",
     "note": "namą — винительный, значит prieš. После prie и už было бы namo."
    },
    {
     "q": "Mes gyvename ___ miesto.",
     "options": [
      "už",
      "į",
      "po"
     ],
     "answer": "už",
     "tr": "Мы живём за городом.",
     "note": "už miesto — за городом: už + родительный. Į требует винительного, а po miesto значило бы «после города»."
    },
    {
     "q": "Vaistinė yra ___ banko ir kavinės.",
     "options": [
      "tarp",
      "prieš",
      "į"
     ],
     "answer": "tarp",
     "tr": "Аптека — между банком и кафе.",
     "note": "Два места в родительном, соединённые ir, — это tarp. Prieš и į требуют винительного."
    },
    {
     "q": "Tavo kava jau ___.",
     "options": [
      "ant stalo",
      "stale",
      "ant stale"
     ],
     "answer": "ant stalo",
     "tr": "Твой кофе уже на столе.",
     "note": "На поверхности — ant + родительный: ant stalo. Местный падеж stale значил бы «внутри стола»."
    },
    {
     "q": "Vakare mes valgome ___.",
     "options": [
      "virtuvėje",
      "ant virtuvės",
      "virtuvė"
     ],
     "answer": "virtuvėje",
     "tr": "Вечером мы едим на кухне.",
     "note": "«На кухне» — местный падеж без предлога: virtuvėje. Ant — только про поверхность."
    },
    {
     "q": "Kiek jūs mokate už ___?",
     "options": [
      "butą",
      "buto",
      "butu"
     ],
     "answer": "butą",
     "tr": "Сколько вы платите за квартиру?",
     "note": "Платить за что? — už + винительный: už butą. А «за домом» — už + родительный: už namo."
    },
    {
     "q": "Po ___ einame į parką.",
     "options": [
      "pietų",
      "pietumis",
      "pietus"
     ],
     "answer": "pietų",
     "tr": "После обеда идём в парк.",
     "note": "po + родительный — «после»: po pietų. «Под» — po + творительный: po stalu."
    },
    {
     "q": "Kur mano dokumentai? — ___.",
     "options": [
      "Stalčiuje",
      "Ant stalčiaus",
      "Po stalčiumi"
     ],
     "answer": "Stalčiuje",
     "tr": "Где мои документы? — В ящике стола.",
     "note": "«В, внутри» — местный падеж без предлога: stalčius → stalčiuje. Ant stalčiaus — на ящике, po stalčiumi — под ящиком.",
     "prompt": "Ответь: «В ящике стола»"
    }
   ]
  },
  {
   "id": "u3-tar",
   "title": "Norėčiau, galėtum, būtų — условное наклонение",
   "subtitle": "3C · «Я бы хотел», «не могли бы вы», «если бы»: все лица.",
   "rule": "<p><b>Условное (сослагательное) наклонение</b> — литовское «бы». От инфинитива убираем <i lang=\"lt\">-ti</i> и добавляем окончание:</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th></th><th>norėti</th><th>būti</th></tr><tr><td>aš</td><td>norėčiau</td><td>būčiau</td></tr><tr><td>tu</td><td>norėtum</td><td>būtum</td></tr><tr><td>jis, ji, jie, jos</td><td>norėtų</td><td>būtų</td></tr><tr><td>mes</td><td>norėtume</td><td>būtume</td></tr><tr><td>jūs</td><td>norėtumėte</td><td>būtumėte</td></tr></table></div><p>У «он, она, они» одна форма. <i lang=\"lt\">norėtume</i> = <i lang=\"lt\">norėtumėme</i>. Отрицание слитно: <i lang=\"lt\">nebūčiau, nenorėčiau</i>. Основа всегда от инфинитива: <i lang=\"lt\">pirkti → pirkčiau</i>, <i lang=\"lt\">eiti → eičiau</i>, <i lang=\"lt\">skristi → skrisčiau</i>.</p><ul><li>Желание и вежливая просьба: <i lang=\"lt\">Norėčiau arbatos.</i> <i lang=\"lt\">Gal galėtum palaukti?</i> <i lang=\"lt\">Man reikėtų pagalvoti</i> — мне надо бы подумать. Так же вежливо звучат <i lang=\"lt\">pageidaučiau</i> (я бы пожелал) и <i lang=\"lt\">prašyčiau</i> (я бы попросил) + ko?</li><li>«Если бы» — <i lang=\"lt\">jeigu</i> (= <i lang=\"lt\">jei</i>), условное в обеих частях: <i lang=\"lt\">Jeigu būtų daugiau vietos, pirkčiau didelį stalą.</i></li><li>«Чтобы» — <i lang=\"lt\">kad</i> + условное: <i lang=\"lt\">Noriu, kad jis gyventų centre.</i> <i lang=\"lt\">tam, kad</i> — для того, чтобы.</li></ul><p>Ловушки. Отдельного «бы» и прошедшего времени внутри нет: «хотел бы» — одно слово <i lang=\"lt\">norėčiau</i>. Не путай <i lang=\"lt\">-čiau</i> (я бы) с будущим <i lang=\"lt\">-siu</i>, а <i lang=\"lt\">tu norėtum</i> — с <i lang=\"lt\">mes norėtume</i>. Хочу сам — инфинитив: <i lang=\"lt\">Noriu gyventi centre</i>; хочу, чтобы другой — <i lang=\"lt\">kad</i> + условное.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "norėčiau",
       "я бы хотел"
      ],
      [
       "galėtum",
       "ты мог бы"
      ],
      [
       "būtų",
       "был бы"
      ],
      [
       "reikėtų",
       "надо бы"
      ],
      [
       "žinotume",
       "мы бы знали"
      ]
     ],
     "prompt": "Условное наклонение"
    },
    {
     "q": "Mano tėvai ___ pirkti namą prie ežero.",
     "options": [
      "norėtų",
      "norėtume",
      "norėtumėte"
     ],
     "answer": "norėtų",
     "tr": "Мои родители хотели бы купить дом у озера.",
     "note": "tėvai = jie. У «он, она, они» одна форма: norėtų."
    },
    {
     "q": "Ką tu ___ daryti šeštadienį?",
     "options": [
      "norėtum",
      "norėčiau",
      "norėtume"
     ],
     "answer": "norėtum",
     "tr": "Что бы ты хотел делать в субботу?",
     "note": "tu → -tum: norėtum. Не путай с mes norėtume."
    },
    {
     "q": "Mes ___ keliauti traukiniu.",
     "options": [
      "norėtume",
      "norėtum",
      "norėtumėte"
     ],
     "answer": "norėtume",
     "tr": "Мы хотели бы путешествовать на поезде.",
     "note": "mes → -tume: norėtume (или norėtumėme)."
    },
    {
     "q": "Tu ___ puikus mokytojas.",
     "options": [
      "būtum",
      "būčiau",
      "būtų"
     ],
     "answer": "būtum",
     "tr": "Ты был бы отличным учителем.",
     "note": "būti: aš būčiau, tu būtum, jis būtų."
    },
    {
     "q": "Kur jūs ___ atostogauti vasarą?",
     "options": [
      "norėtumėte",
      "norėtume",
      "norėtų"
     ],
     "answer": "norėtumėte",
     "tr": "Где бы вы хотели отдыхать летом?",
     "note": "jūs → -tumėte: norėtumėte. Mes — norėtume, jie — norėtų."
    },
    {
     "q": "Aš ___ geras vairuotojas.",
     "options": [
      "nebūčiau",
      "nebūtum",
      "nebūtų"
     ],
     "answer": "nebūčiau",
     "tr": "Я не был бы хорошим водителем.",
     "note": "Отрицание пишется слитно: ne + būčiau → nebūčiau."
    },
    {
     "q": "Rūta, gal tu ___ palaukti penkias minutes?",
     "options": [
      "galėtum",
      "galėčiau",
      "galėtų"
     ],
     "answer": "galėtum",
     "tr": "Рута, не могла бы ты подождать пять минут?",
     "note": "Gal galėtum…? — вежливая просьба на «ты»: tu → galėtum."
    },
    {
     "q": "Ko jūs ___ — kavos ar arbatos?",
     "options": [
      "pageidautumėte",
      "pageidautume",
      "pageidautų"
     ],
     "answer": "pageidautumėte",
     "tr": "Чего бы вы желали — кофе или чая?",
     "note": "pageidauti ko? — желать. jūs → -tumėte: pageidautumėte."
    },
    {
     "q": "Jeigu būčiau jaunesnis, ___ mediciną.",
     "options": [
      "studijuočiau",
      "studijuosiu",
      "studijuoju"
     ],
     "answer": "studijuočiau",
     "tr": "Если бы я был моложе, я бы изучал медицину.",
     "note": "После jeigu būčiau и вторая часть в условном: studijuoti → studijuočiau."
    },
    {
     "q": "Jei ___ vasara, valgytume balkone.",
     "options": [
      "būtų",
      "bus",
      "buvo"
     ],
     "answer": "būtų",
     "tr": "Если бы было лето, мы бы ели на балконе.",
     "note": "«Если бы было» — jei būtų. Прошедшее buvo сюда не подходит: «бы» уже внутри формы."
    },
    {
     "q": "Jeigu žinotume jo adresą, ___ jam laišką.",
     "options": [
      "parašytume",
      "parašysime",
      "parašėme"
     ],
     "answer": "parašytume",
     "tr": "Если бы мы знали его адрес, мы бы написали ему письмо.",
     "note": "parašyti → parašytume — мы бы написали. Parašysime — напишем, parašėme — написали."
    },
    {
     "q": "Jei tu ___ lietuviškai, gautum šį darbą.",
     "options": [
      "kalbėtum",
      "kalbėtume",
      "kalbėsi"
     ],
     "answer": "kalbėtum",
     "tr": "Если бы ты говорил по-литовски, ты получил бы эту работу.",
     "note": "Условное в обеих частях: jei tu kalbėtum, gautum. Kalbėtume — это mes."
    },
    {
     "q": "Rūta nori, kad jos tėvai ___ Vilniuje.",
     "options": [
      "gyventų",
      "gyventume",
      "gyveno"
     ],
     "answer": "gyventų",
     "tr": "Рута хочет, чтобы её родители жили в Вильнюсе.",
     "note": "nori, kad (чтобы) + условное: gyventi → gyventų. Русское прошедшее «жили» сюда не переносится. Gyventume — это mes."
    },
    {
     "q": "Mama prašo, kad aš ___ duonos.",
     "options": [
      "nupirkčiau",
      "nupirktum",
      "nupirkau"
     ],
     "answer": "nupirkčiau",
     "tr": "Мама просит, чтобы я купил хлеба.",
     "note": "prašo, kad + условное: nupirkti → nupirkčiau. Nupirktum — это tu."
    },
    {
     "q": "Mes norime ___ šalia parko.",
     "options": [
      "gyventi",
      "gyventume",
      "gyvename"
     ],
     "answer": "gyventi",
     "tr": "Мы хотим жить рядом с парком.",
     "note": "Хотим мы и жить будем мы — инфинитив: norime gyventi. Если жить будет другой — kad + условное."
    },
    {
     "q": "Mokausi lietuvių kalbos tam, kad ___ čia dirbti.",
     "options": [
      "galėčiau",
      "galėjau",
      "galėsiu"
     ],
     "answer": "galėčiau",
     "tr": "Учу литовский для того, чтобы я мог здесь работать.",
     "note": "tam, kad — для того, чтобы; после него условное: galėti → galėčiau."
    },
    {
     "q": "я бы жил",
     "options": [
      "gyvenčiau",
      "gyvensiu",
      "gyvenau"
     ],
     "answer": "gyvenčiau",
     "note": "gyventi → gyvenčiau — я бы жил. Gyvensiu — буду жить, gyvenau — жил.",
     "prompt": "Выбери перевод",
     "lang": "ru"
    },
    {
     "q": "Aš pirkčiau šį kilimą.",
     "options": [
      "Я бы купил этот ковёр.",
      "Я куплю этот ковёр.",
      "Я купил этот ковёр."
     ],
     "answer": "Я бы купил этот ковёр.",
     "note": "pirkti → pirkčiau — купил бы. Pirksiu — куплю, pirkau — купил.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "Tau reikėtų paskambinti mamai.",
     "options": [
      "Тебе надо бы позвонить маме.",
      "Тебе надо было позвонить маме.",
      "Тебе надо будет позвонить маме."
     ],
     "answer": "Тебе надо бы позвонить маме.",
     "note": "reikėti → reikėtų — надо бы. Reikėjo — надо было, reikės — надо будет.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    }
   ]
  },
  {
   "id": "u3-atrodo",
   "title": "Man atrodo, kad… — мнение и просьбы",
   "subtitle": "3C · Мнение и согласие, глаголы урока, uždaryk и uždarykite, galima и negalima.",
   "rule": "<p><b>Мнение.</b> <i lang=\"lt\">Man atrodo, kad…</i> — мне кажется, что…; <i lang=\"lt\">Aš galvoju, kad…</i> — я думаю, что… В ответ: <i lang=\"lt\">Sutinku</i> (согласен) или <i lang=\"lt\">Nesutinku</i>. <i lang=\"lt\">Kaip nuostabu!</i> — как прекрасно! <i lang=\"lt\">Ką reiškia…?</i> — что значит…?</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Глагол</th><th>Что после него</th><th>Пример</th></tr><tr><td>bandyti</td><td>инфинитив</td><td>bandau atidaryti</td></tr><tr><td>klausti</td><td>ko?</td><td>klausiu kaimyno</td></tr><tr><td>paskambinti</td><td>kam?</td><td>paskambink mamai</td></tr><tr><td>patarti</td><td>kam?</td><td>patariu draugui</td></tr><tr><td>mokėti</td><td>už ką? kuo?</td><td>moku už butą kortele</td></tr><tr><td>kainuoti</td><td>kiek?</td><td>kiek kainuoja?</td></tr></table></div><p>Ещё глаголы урока: <i lang=\"lt\">siūlyti</i> — предлагать, <i lang=\"lt\">vėluoti</i> — опаздывать, <i lang=\"lt\">apžiūrėti</i> — осмотреть.</p><p><b>Просьба</b> — повелительное наклонение, как в 2B: <i lang=\"lt\">uždaryk – uždarykite</i>, <i lang=\"lt\">atidaryk – atidarykite</i>, <i lang=\"lt\">užrakink – užrakinkite</i>, <i lang=\"lt\">atrakink – atrakinkite</i>, <i lang=\"lt\">sumokėk – sumokėkite</i>. Форма на <i lang=\"lt\">-kite</i> — на «вы», после <i lang=\"lt\">Pone…</i> и когда людей несколько. Пары: <i lang=\"lt\">at-</i> открывает, <i lang=\"lt\">už-</i> закрывает; <i lang=\"lt\">rakinti</i> — ключом.</p><p><i lang=\"lt\">galima</i> + инфинитив — можно, <i lang=\"lt\">negalima</i> — нельзя: <i lang=\"lt\">Čia negalima parkuotis</i> — здесь нельзя парковаться.</p><p>Ловушка: «спросить у кого» — по-литовски без предлога, <i lang=\"lt\">klausti</i> + родительный: <i lang=\"lt\">klausiu kaimyno</i>. А «заплатить за квартиру» — <i lang=\"lt\">už</i> + винительный: <i lang=\"lt\">už butą</i>; «картой» — творительный, как в русском: <i lang=\"lt\">kortele</i>.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "galvoti",
       "думать"
      ],
      [
       "sutikti",
       "соглашаться"
      ],
      [
       "klausti",
       "спрашивать"
      ],
      [
       "siūlyti",
       "предлагать"
      ],
      [
       "patarti",
       "посоветовать"
      ]
     ],
     "prompt": "Думать и говорить"
    },
    {
     "type": "match",
     "pairs": [
      [
       "bandyti",
       "пробовать"
      ],
      [
       "vėluoti",
       "опаздывать"
      ],
      [
       "kainuoti",
       "стоить"
      ],
      [
       "apžiūrėti",
       "осмотреть"
      ],
      [
       "paskambinti",
       "позвонить"
      ]
     ],
     "prompt": "Глаголы урока"
    },
    {
     "type": "match",
     "pairs": [
      [
       "Man atrodo, kad…",
       "Мне кажется, что…"
      ],
      [
       "Aš galvoju, kad…",
       "Я думаю, что…"
      ],
      [
       "Sutinku.",
       "Согласен."
      ],
      [
       "Kaip nuostabu!",
       "Как прекрасно!"
      ],
      [
       "Ką reiškia…?",
       "Что значит…?"
      ]
     ],
     "prompt": "Фразы"
    },
    {
     "q": "Aš galvoju, kad šis rajonas labai ramus. — ___, čia daug automobilių.",
     "options": [
      "Nesutinku",
      "Sutinku",
      "Kaip nuostabu"
     ],
     "answer": "Nesutinku",
     "tr": "Я думаю, что этот район очень спокойный. — Не согласен, здесь много машин.",
     "note": "Собеседник возражает: Nesutinku — не согласен. Sutinku — согласен."
    },
    {
     "q": "Man atrodo, ___ ši sofa per didelė.",
     "options": [
      "kad",
      "kai",
      "ar"
     ],
     "answer": "kad",
     "tr": "Мне кажется, что этот диван слишком большой.",
     "note": "Man atrodo, kad… — «что» после мнения — это kad. Kai — когда, ar — ли."
    },
    {
     "q": "siūlyti",
     "options": [
      "предлагать",
      "спрашивать",
      "пробовать"
     ],
     "answer": "предлагать",
     "note": "siūlyti, siūlo, siūlė — предлагать. Спрашивать — klausti, пробовать — bandyti.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "опаздывать",
     "options": [
      "vėluoti",
      "bandyti",
      "kainuoti"
     ],
     "answer": "vėluoti",
     "note": "vėluoti, vėluoja, vėlavo — опаздывать. Bandyti — пробовать, kainuoti — стоить.",
     "prompt": "Выбери перевод",
     "lang": "ru"
    },
    {
     "q": "Už šildymą reikia ___ kiekvieną mėnesį.",
     "options": [
      "mokėti",
      "kainuoti",
      "vėluoti"
     ],
     "answer": "mokėti",
     "tr": "За отопление надо платить каждый месяц.",
     "note": "mokėti, moka, mokėjo už ką? — платить за что. Kainuoti — стоить, vėluoti — опаздывать."
    },
    {
     "q": "Mes ___, kad šis butas per mažas.",
     "options": [
      "galvojame",
      "galvoju",
      "galvoja"
     ],
     "answer": "galvojame",
     "tr": "Мы думаем, что эта квартира слишком маленькая.",
     "note": "galvoti, galvoja, galvojo: aš galvoju, mes galvojame."
    },
    {
     "q": "Vaikai ___ atrakinti duris.",
     "options": [
      "bando",
      "bandau",
      "bandome"
     ],
     "answer": "bando",
     "tr": "Дети пытаются отпереть дверь.",
     "note": "bandyti, bando, bandė + инфинитив: jie bando."
    },
    {
     "q": "Mama, ___ šaldytuvą — ten tavo tortas!",
     "options": [
      "atidaryk",
      "atidarykite",
      "atidaryti"
     ],
     "answer": "atidaryk",
     "tr": "Мама, открой холодильник — там твой торт!",
     "note": "Маме говорим «ты»: atidaryk. Atidarykite — на «вы» или нескольким людям."
    },
    {
     "q": "Pone Mantai, ___ už butą iki penktadienio.",
     "options": [
      "sumokėkite",
      "sumokėk",
      "sumokėti"
     ],
     "answer": "sumokėkite",
     "tr": "Господин Мантас, заплатите за квартиру до пятницы.",
     "note": "Pone… — обращение на «вы»: sumokėkite. Sumokėti už ką? — už butą."
    },
    {
     "q": "Vaikai, ___ garažą — aš jau prie namo!",
     "options": [
      "atrakinkite",
      "atrakink",
      "atrakinti"
     ],
     "answer": "atrakinkite",
     "tr": "Дети, отоприте гараж — я уже у дома!",
     "note": "Обращаемся к нескольким людям: -kite → atrakinkite."
    },
    {
     "q": "Sūnau, uždaryk langą ir ___ duris.",
     "options": [
      "užrakink",
      "užrakinkite",
      "užrakinti"
     ],
     "answer": "užrakink",
     "tr": "Сынок, закрой окно и запри дверь.",
     "note": "Сыну говорим «ты»: uždaryk, užrakink. Užrakinti — запереть на ключ."
    },
    {
     "q": "Tomas klausia ___ apie atostogas.",
     "options": [
      "vadovo",
      "vadovas",
      "vadovui"
     ],
     "answer": "vadovo",
     "tr": "Томас спрашивает начальника об отпуске.",
     "note": "klausti, klausia, klausė ko? — родительный: vadovas → vadovo."
    },
    {
     "q": "Ar čia galima fotografuoti? — Ne, čia ___ fotografuoti.",
     "options": [
      "negalima",
      "galima",
      "nėra"
     ],
     "answer": "negalima",
     "tr": "Здесь можно фотографировать? — Нет, здесь нельзя фотографировать.",
     "note": "galima — можно, negalima — нельзя; после них инфинитив."
    }
   ]
  },
  {
   "id": "u3-skelbimai",
   "title": "Butų skelbimai — объявления о квартирах",
   "subtitle": "3D · Площадь, этаж, цена, залог, договор; условия и что рядом.",
   "rule": "<p>Объявление (<i lang=\"lt\">skelbimas</i>) о квартире — короткий список. Его слова:</p><ul><li><b>Квартира:</b> <i lang=\"lt\">plotas</i> — площадь (<i lang=\"lt\">kv. m</i> = <i lang=\"lt\">kvadratinis metras</i>), <i lang=\"lt\">išplanavimas</i> — планировка, <i lang=\"lt\">parketas</i> — паркет, <i lang=\"lt\">židinys</i> — камин, <i lang=\"lt\">sandėliukas</i> — кладовка, <i lang=\"lt\">san. mazgas</i> (<i lang=\"lt\">sanitarinis mazgas</i>) — санузел, <i lang=\"lt\">vidinis kiemas</i> — внутренний двор, <i lang=\"lt\">signalizacija</i> — сигнализация, <i lang=\"lt\">pelėsis</i> — плесень.</li><li><b>Деньги и бумаги:</b> <i lang=\"lt\">kaina</i> — цена, <i lang=\"lt\">užstatas</i> — залог, <i lang=\"lt\">komunaliniai mokesčiai</i> — коммунальные платежи, <i lang=\"lt\">papildomi mokesčiai</i> — дополнительные платежи, <i lang=\"lt\">sąskaita</i> — счёт, <i lang=\"lt\">nuomos sutartis</i> — договор аренды, <i lang=\"lt\">deklaruoti gyvenamąją vietą</i> — задекларировать место жительства.</li><li><b>Условия:</b> <i lang=\"lt\">su baldais</i> — с мебелью, <i lang=\"lt\">be baldų</i> — без мебели, <i lang=\"lt\">su gyvūnais</i> — с животными.</li></ul><p>Строка объявления: <i lang=\"lt\">2 kambariai, 48 kv. m, trečias aukštas, po remonto, su baldais, 450 eurų per mėnesį</i> — 2 комнаты, 48 кв. м, третий этаж, после ремонта, с мебелью, 450 евро в месяц.</p><p>Падежи в этих формулах: <i lang=\"lt\">netoli</i> + родительный, без <i lang=\"lt\">nuo</i>: <i lang=\"lt\">netoli centro, netoli senamiesčio</i>. <i lang=\"lt\">Su</i> + творительный: <i lang=\"lt\">su baldais, su gyvūnais</i>. <i lang=\"lt\">Be</i> + родительный: <i lang=\"lt\">be baldų</i>.</p><p>Прилагательные о квартире (<i lang=\"lt\">šviesus, erdvus, tylus</i>…) и <i lang=\"lt\">aukštos lubos</i> — см. 3A и 3B. Новые здесь: <i lang=\"lt\">tikslus adresas</i> — точный адрес, <i lang=\"lt\">paskutinis aukštas</i> — последний этаж, <i lang=\"lt\">senamadiškas</i> — старомодный.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "skelbimas",
       "объявление"
      ],
      [
       "plotas",
       "площадь"
      ],
      [
       "kaina",
       "цена"
      ],
      [
       "nuoma",
       "аренда"
      ],
      [
       "užstatas",
       "залог"
      ]
     ]
    },
    {
     "type": "match",
     "pairs": [
      [
       "parketas",
       "паркет"
      ],
      [
       "židinys",
       "камин"
      ],
      [
       "sandėliukas",
       "кладовка"
      ],
      [
       "sanitarinis mazgas",
       "санузел"
      ],
      [
       "vidinis kiemas",
       "внутренний двор"
      ]
     ]
    },
    {
     "type": "match",
     "pairs": [
      [
       "nuomos sutartis",
       "договор аренды"
      ],
      [
       "pasirašyti sutartį",
       "подписать договор"
      ],
      [
       "sąskaita",
       "счёт"
      ],
      [
       "komunaliniai mokesčiai",
       "коммунальные платежи"
      ],
      [
       "papildomi mokesčiai",
       "дополнительные платежи"
      ]
     ]
    },
    {
     "type": "match",
     "pairs": [
      [
       "su baldais",
       "с мебелью"
      ],
      [
       "be baldų",
       "без мебели"
      ],
      [
       "su gyvūnais",
       "с животными"
      ],
      [
       "per mėnesį",
       "в месяц"
      ],
      [
       "netoli centro",
       "недалеко от центра"
      ]
     ]
    },
    {
     "q": "pelėsis",
     "options": [
      "плесень",
      "камин",
      "кладовка"
     ],
     "answer": "плесень",
     "note": "Pelėsis — мужского рода: pelėsio (нет плесени — nėra pelėsio).",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "квадратный метр",
     "options": [
      "kvadratinis metras",
      "sanitarinis mazgas",
      "vidinis kiemas"
     ],
     "answer": "kvadratinis metras",
     "note": "В объявлениях сокращают: 48 kv. m.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "deklaruoti gyvenamąją vietą",
     "options": [
      "задекларировать место жительства",
      "подписать договор аренды квартиры",
      "внести коммунальные платежи"
     ],
     "answer": "задекларировать место жительства",
     "note": "Gyvenamoji vieta — место жительства; после deklaruoti — винительный: gyvenamąją vietą.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "счёт",
     "options": [
      "sąskaita",
      "sutartis",
      "signalizacija"
     ],
     "answer": "sąskaita",
     "note": "Sutartis — договор, signalizacija — сигнализация.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Buto ___ — 52 kv. m.",
     "options": [
      "plotas",
      "kaina",
      "užstatas"
     ],
     "answer": "plotas",
     "tr": "Площадь квартиры — 52 кв. м.",
     "note": "В kv. m (kvadratiniai metrai) измеряют plotas — площадь."
    },
    {
     "q": "Nuomos ___ — 480 eurų per mėnesį.",
     "options": [
      "kaina",
      "plotas",
      "aukštas"
     ],
     "answer": "kaina",
     "tr": "Цена аренды — 480 евро в месяц.",
     "note": "Kaina — цена; nuoma → nuomos kaina. Per mėnesį — в месяц."
    },
    {
     "q": "Pirmą mėnesį mokame nuomą ir ___ — dar 500 eurų.",
     "options": [
      "užstatą",
      "plotą",
      "skelbimą"
     ],
     "answer": "užstatą",
     "tr": "В первый месяц платим аренду и залог — ещё 500 евро.",
     "note": "užstatas → užstatą (mokėti ką?). Залог платят один раз, в начале."
    },
    {
     "q": "3 kambariai, ketvirtas ___, 64 kv. m, be baldų.",
     "options": [
      "aukštas",
      "plotas",
      "užstatas"
     ],
     "answer": "aukštas",
     "tr": "3 комнаты, четвёртый этаж, 64 кв. м, без мебели.",
     "note": "Ketvirtas aukštas — четвёртый этаж. Площадь здесь — 64 kv. m.",
     "prompt": "Строка объявления"
    },
    {
     "q": "Rytoj su savininku pasirašome nuomos ___.",
     "options": [
      "sutartį",
      "kainą",
      "užstatą"
     ],
     "answer": "sutartį",
     "tr": "Завтра мы с хозяином подписываем договор аренды.",
     "note": "sutartis → sutartį (pasirašyti ką?). Nuomos sutartis — договор аренды."
    },
    {
     "q": "Koridoriuje yra mažas ___: ten stovi dėžės ir seni daiktai.",
     "options": [
      "sandėliukas",
      "židinys",
      "parketas"
     ],
     "answer": "sandėliukas",
     "tr": "В коридоре есть маленькая кладовка: там стоят коробки и старые вещи.",
     "note": "Sandėliukas — кладовка: место, где держат вещи."
    },
    {
     "q": "Buto ___ patogus: didelė svetainė ir du maži miegamieji.",
     "options": [
      "išplanavimas",
      "užstatas",
      "sandėliukas"
     ],
     "answer": "išplanavimas",
     "tr": "Планировка квартиры удобная: большая гостиная и две маленькие спальни.",
     "note": "Išplanavimas — планировка: как расположены комнаты."
    },
    {
     "q": "Kiekvieną mėnesį ateina ___ už elektrą ir vandenį.",
     "options": [
      "sąskaita",
      "sutartis",
      "nuoma"
     ],
     "answer": "sąskaita",
     "tr": "Каждый месяц приходит счёт за электричество и воду.",
     "note": "Sąskaita — счёт. За что? — už + винительный: už elektrą, už vandenį."
    },
    {
     "q": "Name yra penki aukštai. Mes gyvename ___ aukšte, virš mūsų tik stogas.",
     "options": [
      "paskutiniame",
      "pirmame",
      "vidiniame"
     ],
     "answer": "paskutiniame",
     "tr": "В доме пять этажей. Мы живём на последнем этаже, над нами только крыша.",
     "note": "paskutinis → paskutiniame (kuriame aukšte?). Paskutinis aukštas — последний этаж."
    },
    {
     "q": "Skelbime yra tik gatvė. Koks ___ adresas?",
     "options": [
      "tikslus",
      "vidinis",
      "senamadiškas"
     ],
     "answer": "tikslus",
     "tr": "В объявлении только улица. Какой точный адрес?",
     "note": "Tikslus adresas — точный адрес: улица, дом и квартира."
    },
    {
     "q": "Šis fotelis patogus, bet ___ — kaip pas močiutę.",
     "options": [
      "senamadiškas",
      "paskutinis",
      "vidinis"
     ],
     "answer": "senamadiškas",
     "tr": "Это кресло удобное, но старомодное — как у бабушки.",
     "note": "Senamadiškas — старомодный: sena mada — старая мода."
    },
    {
     "q": "Butas yra netoli ___, bet gatvė tyli.",
     "options": [
      "senamiesčio",
      "senamiestis",
      "senamiestį"
     ],
     "answer": "senamiesčio",
     "tr": "Квартира недалеко от старого города, но улица тихая.",
     "note": "senamiestis → senamiesčio (t → č). Netoli + родительный, без nuo."
    },
    {
     "q": "Ieškau buto su ___ ir buitine technika.",
     "options": [
      "baldais",
      "baldai",
      "baldų"
     ],
     "answer": "baldais",
     "tr": "Ищу квартиру с мебелью и бытовой техникой.",
     "note": "baldai → su baldais. Su + творительный; «без мебели» — be baldų (родительный)."
    }
   ]
  },
  {
   "id": "u3-kiek",
   "title": "Kiek kambarių? Daug langų — сколько и много",
   "subtitle": "3D · Kiek, daug, mažai, trūksta + родительный: kėdžių, viešbučių, durų; вопрос и ответ.",
   "rule": "<p><b>Повторение (1A, 1C):</b> 1 + именительный ед. ч., 2–9 + именительный мн. ч. (<i lang=\"lt\">du stalai, dvi kėdės; septyni langai, septynios lempos</i>), 10–20 и десятки + родительный мн. ч.; после <i lang=\"lt\">kiek, daug, mažai</i> — тоже родительный.</p><p><b>Новое:</b> родительный мн. ч. с чередованием d → dž, t → č и два особых слова — <i lang=\"lt\">durys</i> и <i lang=\"lt\">miegamasis</i>.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Kas? (ед. ч.)</th><th>Kas? (мн. ч.)</th><th>Kiek? Daug ko?</th></tr><tr><td>kėdė</td><td>kėdės</td><td>kėdžių</td></tr><tr><td>katė</td><td>katės</td><td>kačių</td></tr><tr><td>viešbutis</td><td>viešbučiai</td><td>viešbučių</td></tr><tr><td>laikrodis</td><td>laikrodžiai</td><td>laikrodžių</td></tr><tr><td>medis</td><td>medžiai</td><td>medžių</td></tr><tr><td>—</td><td>durys</td><td>durų</td></tr><tr><td>miegamasis</td><td>miegamieji</td><td>miegamųjų</td></tr></table></div><p>У мужских слов типа <i lang=\"lt\">viešbutis, medis</i> (родительный ед. ч. <i lang=\"lt\">viešbučio, medžio</i>) č и dž есть уже в именительном мн. ч.: <i lang=\"lt\">viešbučiai, medžiai</i>; у слов на -tė, -dė — только в родительном мн. ч.: <i lang=\"lt\">kėdės</i>, но <i lang=\"lt\">kėdžių</i>.</p><p>Родительный нужен и после <i lang=\"lt\">truputį</i> (немного) и <i lang=\"lt\">man trūksta</i> (мне не хватает): <i lang=\"lt\">truputį sausainių, man trūksta lentynų</i>. То, что не считают, остаётся в единственном числе: <i lang=\"lt\">daug vietos, truputį laiko</i>.</p><p>Вопрос — в родительном, ответ с числом 1–9 — в именительном: <i lang=\"lt\">Kiek kėdžių? — Keturios kėdės. Kiek miegamųjų? — Trys miegamieji.</i></p><p><b>Ловушка:</b> после <i lang=\"lt\">daug</i> именительного не бывает: <i lang=\"lt\">daug langų</i>, не «daug langai». Зато «пять столов» — это <i lang=\"lt\">penki stalai</i>: после 2–9 родительный не нужен.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "daug",
       "много"
      ],
      [
       "mažai",
       "мало"
      ],
      [
       "kiek",
       "сколько"
      ],
      [
       "truputį",
       "чуть-чуть"
      ],
      [
       "beveik",
       "почти"
      ]
     ]
    },
    {
     "q": "Kiek ___ yra šiame mieste?",
     "options": [
      "viešbučių",
      "viešbučiai",
      "viešbučius"
     ],
     "answer": "viešbučių",
     "tr": "Сколько гостиниц в этом городе?",
     "note": "viešbutis → viešbučiai → viešbučių (t → č). Kiek + родительный мн. ч."
    },
    {
     "q": "Mūsų kieme mažai ___.",
     "options": [
      "medžių",
      "medžiai",
      "medžius"
     ],
     "answer": "medžių",
     "tr": "В нашем дворе мало деревьев.",
     "note": "medis → medžiai → medžių (d → dž). Mažai + родительный."
    },
    {
     "q": "Kaimynė turi labai daug ___.",
     "options": [
      "kačių",
      "katės",
      "kates"
     ],
     "answer": "kačių",
     "tr": "У соседки очень много кошек.",
     "note": "katė → kačių (t → č). После daug — родительный, даже если глагол turi."
    },
    {
     "q": "Senelio kambaryje labai daug ___.",
     "options": [
      "laikrodžių",
      "laikrodžiai",
      "laikrodžius"
     ],
     "answer": "laikrodžių",
     "tr": "В комнате дедушки очень много часов.",
     "note": "laikrodis → laikrodžiai → laikrodžių (d → dž). Часы по-литовски считают: vienas laikrodis, daug laikrodžių."
    },
    {
     "q": "Šiame koridoriuje labai daug ___.",
     "options": [
      "durų",
      "durys",
      "duris"
     ],
     "answer": "durų",
     "tr": "В этом коридоре очень много дверей.",
     "note": "durys → durų (не «durių»). Daug + родительный."
    },
    {
     "q": "Kiek ___ yra tavo tėvų name?",
     "options": [
      "miegamųjų",
      "miegamieji",
      "miegamuosius"
     ],
     "answer": "miegamųjų",
     "tr": "Сколько спален в доме твоих родителей?",
     "note": "miegamasis → miegamieji → miegamųjų. Kiek + родительный мн. ч."
    },
    {
     "q": "Močiutės name yra septynios ___.",
     "options": [
      "lovos",
      "lovų",
      "lovas"
     ],
     "answer": "lovos",
     "tr": "В доме бабушки семь кроватей.",
     "note": "После 2–9 — именительный мн. ч.: septynios lovos. Родительный — после daug, mažai, kiek: mažai lovų."
    },
    {
     "q": "Dideliame kambaryje yra ___ lempos.",
     "options": [
      "šešios",
      "šeši",
      "šešių"
     ],
     "answer": "šešios",
     "tr": "В большой комнате шесть ламп.",
     "note": "lempa — женский род: šešios lempos. Šeši — для мужского."
    },
    {
     "q": "Hole stovi ___ foteliai.",
     "options": [
      "septyni",
      "septynios",
      "septynių"
     ],
     "answer": "septyni",
     "tr": "В холле стоят семь кресел.",
     "note": "fotelis — мужской род: septyni foteliai. Septynios — для женского."
    },
    {
     "q": "Name yra trys ___.",
     "options": [
      "miegamieji",
      "miegamųjų",
      "miegamuosius"
     ],
     "answer": "miegamieji",
     "tr": "В доме три спальни.",
     "note": "После 2–9 — именительный мн. ч.: miegamasis → trys miegamieji."
    },
    {
     "q": "Šiame viešbutyje yra penkiolika ___.",
     "options": [
      "kambarių",
      "kambariai",
      "kambarius"
     ],
     "answer": "kambarių",
     "tr": "В этой гостинице пятнадцать номеров.",
     "note": "После 10–20 — родительный мн. ч.: kambarys → kambarių (в гостинице kambarys — номер). Но: devyni kambariai."
    },
    {
     "q": "Spintoje dar daug ___.",
     "options": [
      "vietos",
      "vieta",
      "vietą"
     ],
     "answer": "vietos",
     "tr": "В шкафу ещё много места.",
     "note": "Место не считают — единственное число: vieta → daug vietos."
    },
    {
     "q": "Ant stalo dar yra truputį ___.",
     "options": [
      "sausainių",
      "sausainiai",
      "sausainius"
     ],
     "answer": "sausainių",
     "tr": "На столе ещё есть немного печенья.",
     "note": "sausainiai → sausainių. Truputį + родительный."
    },
    {
     "q": "Kiek kėdžių yra svetainėje? — Aštuonios ___.",
     "options": [
      "kėdės",
      "kėdžių",
      "kėdes"
     ],
     "answer": "kėdės",
     "tr": "Сколько стульев в гостиной? — Восемь стульев.",
     "note": "В вопросе после kiek — родительный (kėdžių), в ответе после 2–9 — именительный: aštuonios kėdės."
    },
    {
     "q": "Kiek ___ yra jūsų biure? — Devyni langai.",
     "options": [
      "langų",
      "langai",
      "langus"
     ],
     "answer": "langų",
     "tr": "Сколько окон в вашем офисе? — Девять окон.",
     "note": "langas → langų: после kiek — родительный. В ответе — именительный: devyni langai."
    },
    {
     "q": "Knygų daug, bet man trūksta ___.",
     "options": [
      "lentynų",
      "lentyna",
      "lentynas"
     ],
     "answer": "lentynų",
     "tr": "Книг много, но мне не хватает полок.",
     "note": "lentyna → lentynų. Man trūksta ko? — родительный."
    },
    {
     "q": "Grindys šaltos, o mums trūksta ___.",
     "options": [
      "kilimų",
      "kilimai",
      "kilimus"
     ],
     "answer": "kilimų",
     "tr": "Пол холодный, а нам не хватает ковров.",
     "note": "kilimas → kilimų. Kam trūksta? — mums (дательный); ko trūksta? — родительный."
    }
   ]
  },
  {
   "id": "u3-reikia",
   "title": "Man reikia šaldytuvo — мне нужно",
   "subtitle": "3D · Кому нужно — дательный, что нужно — родительный; yra — nėra — reikia.",
   "rule": "<p>«Мне нужен…» строится не так, как по-русски: <b>kam?</b> (дательный) + <i lang=\"lt\">reikia</i> + <b>ko?</b> (родительный). <i lang=\"lt\">Reikia</i> не меняется ни по лицам, ни по родам: <i lang=\"lt\">Man reikia šaldytuvo. Ko jums reikia?</i></p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>aš</th><th>tu</th><th>jis</th><th>ji</th><th>mes</th><th>jūs</th><th>jie</th><th>jos</th></tr><tr><td>man</td><td>tau</td><td>jam</td><td>jai</td><td>mums</td><td>jums</td><td>jiems</td><td>joms</td></tr></table></div><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Kas?</th><th>Ko reikia?</th></tr><tr><td>šaldytuvas</td><td>šaldytuvo</td></tr><tr><td>fotelis</td><td>fotelio</td></tr><tr><td>skėtis</td><td>skėčio</td></tr><tr><td>kambarys</td><td>kambario</td></tr><tr><td>televizorius</td><td>televizoriaus</td></tr><tr><td>lova</td><td>lovos</td></tr><tr><td>indaplovė</td><td>indaplovės</td></tr><tr><td>sutartis</td><td>sutarties</td></tr></table></div><p><i lang=\"lt\">Skėtis → skėčio</i>: t → č; так же d → dž: <i lang=\"lt\">veidrodis → veidrodžio</i>. Прилагательное стоит в том же падеже: <i lang=\"lt\">naujas → naujo, didelis → didelio, šviesus → šviesaus</i>; <i lang=\"lt\">nauja → naujos, didelė → didelės, šviesi → šviesios</i>.</p><p>Тот же падеж после <i lang=\"lt\">nėra</i>: <i lang=\"lt\">Ar kambaryje yra spinta? — Ne, spintos nėra. — Mums reikia spintos.</i></p><p>После <i lang=\"lt\">reikia</i> бывает и глагол: <i lang=\"lt\">Reikia mokėti už elektrą</i> — надо платить за электричество.</p><p><b>Ловушка:</b> «мне нужен холодильник» — не «man reikia šaldytuvas» и не «aš reikia», а <i lang=\"lt\">man reikia šaldytuvo</i>.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "man",
       "мне"
      ],
      [
       "tau",
       "тебе"
      ],
      [
       "jam",
       "ему"
      ],
      [
       "jai",
       "ей"
      ],
      [
       "mums",
       "нам"
      ]
     ]
    },
    {
     "q": "___ reikia naujos lempos.",
     "options": [
      "Man",
      "Aš",
      "Mane"
     ],
     "answer": "Man",
     "tr": "Мне нужна новая лампа.",
     "note": "Kam reikia? — дательный: aš → man. «Aš reikia» не говорят."
    },
    {
     "q": "Tomas daug dirba namie. ___ reikia patogaus stalo.",
     "options": [
      "Jam",
      "Jis",
      "Jį"
     ],
     "answer": "Jam",
     "tr": "Томас много работает дома. Ему нужен удобный стол.",
     "note": "jis → jam (kam?)."
    },
    {
     "q": "Mūsų šeima didelė. ___ reikia erdvaus buto.",
     "options": [
      "Mums",
      "Mes",
      "Mus"
     ],
     "answer": "Mums",
     "tr": "У нас большая семья. Нам нужна просторная квартира.",
     "note": "mes → mums (kam?)."
    },
    {
     "q": "Tėvai gyvena penktame aukšte. ___ reikia lifto.",
     "options": [
      "Jiems",
      "Jie",
      "Juos"
     ],
     "answer": "Jiems",
     "tr": "Родители живут на пятом этаже. Им нужен лифт.",
     "note": "jie → jiems (kam?). Liftas → lifto (ko?)."
    },
    {
     "q": "Rūta ir Lina ieško buto. ___ reikia didelės virtuvės.",
     "options": [
      "Joms",
      "Jiems",
      "Jas"
     ],
     "answer": "Joms",
     "tr": "Рута и Лина ищут квартиру. Им нужна большая кухня.",
     "note": "О женщинах: jos → joms. Jiems — о мужчинах или о смешанной группе."
    },
    {
     "q": "Ko jums reikia naujame bute? — Mums reikia ___.",
     "options": [
      "šaldytuvo",
      "šaldytuvas",
      "šaldytuvą"
     ],
     "answer": "šaldytuvo",
     "tr": "Что вам нужно в новой квартире? — Нам нужен холодильник.",
     "note": "šaldytuvas → šaldytuvo. Reikia ko? — родительный, как и в вопросе: ko reikia?"
    },
    {
     "q": "Svečių kambaryje dar reikia ___.",
     "options": [
      "lovos",
      "lova",
      "lovą"
     ],
     "answer": "lovos",
     "tr": "В гостевой комнате ещё нужна кровать.",
     "note": "lova → lovos. По-русски «нужна кровать» (именительный), по-литовски — родительный."
    },
    {
     "q": "Lauke lyja, man reikia ___.",
     "options": [
      "skėčio",
      "skėtis",
      "skėtį"
     ],
     "answer": "skėčio",
     "tr": "На улице дождь, мне нужен зонт.",
     "note": "skėtis → skėčio: t → č. Reikia ko? — родительный."
    },
    {
     "q": "Seneliams reikia didelio ___.",
     "options": [
      "televizoriaus",
      "televizorius",
      "televizorių"
     ],
     "answer": "televizoriaus",
     "tr": "Бабушке и дедушке нужен большой телевизор.",
     "note": "televizorius → televizoriaus: слова на -ius дают -iaus."
    },
    {
     "q": "Bankui reikia nuomos ___.",
     "options": [
      "sutarties",
      "sutartis",
      "sutartį"
     ],
     "answer": "sutarties",
     "tr": "Банку нужен договор аренды.",
     "note": "sutartis (ж. р.) → sutarties. Kam? — bankui; ko? — sutarties."
    },
    {
     "q": "Ačiū, čia yra viskas, ___ mums reikia.",
     "options": [
      "ko",
      "kas",
      "ką"
     ],
     "answer": "ko",
     "tr": "Спасибо, здесь есть всё, что нам нужно.",
     "note": "Reikia ko? — поэтому ko: viskas, ko reikia — всё, что нужно."
    },
    {
     "q": "Darbui man reikia ___ kompiuterio.",
     "options": [
      "naujo",
      "naujas",
      "naują"
     ],
     "answer": "naujo",
     "tr": "Для работы мне нужен новый компьютер.",
     "note": "naujas → naujo: прилагательное в том же падеже, что и kompiuterio."
    },
    {
     "q": "Miegamajame reikia ___ komodos.",
     "options": [
      "didelės",
      "didelė",
      "didelę"
     ],
     "answer": "didelės",
     "tr": "В спальне нужен большой комод.",
     "note": "komoda — женский род (а русское «комод» — мужской): didelė → didelės komodos."
    },
    {
     "q": "Studentui reikia ___ kambario.",
     "options": [
      "šviesaus",
      "šviesus",
      "šviesų"
     ],
     "answer": "šviesaus",
     "tr": "Студенту нужна светлая комната.",
     "note": "šviesus → šviesaus: у прилагательных на -us родительный на -aus."
    },
    {
     "q": "Ar svetainėje yra fotelis? — Ne, nėra. Mums reikia ___.",
     "options": [
      "fotelio",
      "fotelis",
      "fotelį"
     ],
     "answer": "fotelio",
     "tr": "В гостиной есть кресло? — Нет. Нам нужно кресло.",
     "note": "yra + именительный (fotelis), а после nėra и reikia — родительный: fotelio."
    },
    {
     "q": "Ar tavo bute yra orkaitė? — Ne. Man labai reikia ___.",
     "options": [
      "orkaitės",
      "orkaitė",
      "orkaitę"
     ],
     "answer": "orkaitės",
     "tr": "В твоей квартире есть духовка? — Нет. Мне очень нужна духовка.",
     "note": "orkaitė → orkaitės: тот же родительный, что и после nėra."
    },
    {
     "q": "Нам нужен большой стол.",
     "options": [
      "Mums reikia didelio stalo.",
      "Mums reikia didelis stalas.",
      "Mes reikia didelį stalą."
     ],
     "answer": "Mums reikia didelio stalo.",
     "note": "Kam? — mums; ko? — didelio stalo. В отличие от русского «нужен / нужна», reikia ни с чем не согласуется.",
     "prompt": "Выбери перевод",
     "lang": "ru"
    },
    {
     "q": "Užstatą reikia ___ iki pirmadienio.",
     "options": [
      "sumokėti",
      "sumoka",
      "sumokame"
     ],
     "answer": "sumokėti",
     "tr": "Залог нужно заплатить до понедельника.",
     "note": "После reikia — инфинитив: reikia sumokėti, reikia mokėti."
    }
   ]
  },
  {
   "id": "u3-skambutis",
   "title": "Skambinu pagal skelbimą — звонок хозяину",
   "subtitle": "3D · Вопросы о квартире и цене, просмотр, как доехать; сдать и снять; глаголы и падежи.",
   "rule": "<p><b>Звонок по объявлению:</b> <i lang=\"lt\">— Alio. — Klausau! — Skambinu pagal skelbimą. Kiek kainuoja per mėnesį?</i> (или <i lang=\"lt\">Kokia kaina?</i>) <i lang=\"lt\">Koks adresas? Kiek kambarių? Kelintame aukšte? — Trečiame. Ar yra liftas? — Ne, lifto nėra. Kada galėčiau apžiūrėti butą?</i></p><p><b>Вопросное слово согласуется:</b> <i lang=\"lt\">Kokiame rajone? Kokioje stotelėje? Kokio dydžio užstatas?</i> — какого размера залог? <i lang=\"lt\">Kokiu autobusu? — Penktu</i> (<i lang=\"lt\">penktas → penktu</i>).</p><p><b>Сдать или снять:</b> <i lang=\"lt\">savininkas nuomoja / išnuomoja butą</i> (kam? — кому) — владелец сдаёт; <i lang=\"lt\">nuomininkas išsinuomoja butą</i> — жилец снимает. <i lang=\"lt\">-si-</i> значит «себе», как в <i lang=\"lt\">nupirkti – nusipirkti</i>. В разговоре <i lang=\"lt\">nuomoti</i> говорят и о том, кто снимает.</p><p><b>Глаголы и падежи:</b></p><ul><li><i lang=\"lt\">persikelti iš ko? į ką?</i> — переехать: <i lang=\"lt\">iš Vilniaus į Kauną</i>;</li><li><i lang=\"lt\">sutarti su kuo?</i> — договориться, ладить: <i lang=\"lt\">su savininku</i>;</li><li><i lang=\"lt\">padėti, skambinti kam?</i> — помочь, звонить: <i lang=\"lt\">draugui</i>;</li><li><i lang=\"lt\">atvežti, suteikti, įvesti ką?</i> — привезти, предоставить, ввести: <i lang=\"lt\">įvesti kodą</i>;</li><li><i lang=\"lt\">bandyti</i> (пробовать) + инфинитив; <i lang=\"lt\">atrodyti</i> (выглядеть) + именительный: <i lang=\"lt\">Butas atrodo didelis.</i></li></ul><p><b>Готовые сочетания:</b> <i lang=\"lt\">pagal skelbimą</i> — по объявлению; <i lang=\"lt\">per mėnesį</i> — в месяц; <i lang=\"lt\">nuo stoties</i> — от вокзала; <i lang=\"lt\">ačiū už informaciją</i> — спасибо за информацию; <i lang=\"lt\">važiuoti autobusu</i> — ехать на автобусе.</p><p><b>Ловушки:</b> «звонить хозяину» — <i lang=\"lt\">skambinti savininkui</i> (<i lang=\"lt\">kam?</i>, не <i lang=\"lt\">ką?</i>); «переехать в город» — <i lang=\"lt\">į miestą</i> (<i lang=\"lt\">į</i> + винительный, не <i lang=\"lt\">mieste</i>).</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "išnuomoti",
       "сдать (квартиру)"
      ],
      [
       "išsinuomoti",
       "снять (квартиру)"
      ],
      [
       "persikelti",
       "переехать"
      ],
      [
       "sutarti",
       "договориться"
      ],
      [
       "atvežti",
       "привезти"
      ]
     ]
    },
    {
     "type": "match",
     "pairs": [
      [
       "suteikti",
       "предоставить"
      ],
      [
       "įvesti",
       "ввести"
      ],
      [
       "padėti",
       "помочь"
      ],
      [
       "atrodyti",
       "выглядеть"
      ],
      [
       "sužinoti",
       "узнать"
      ]
     ]
    },
    {
     "type": "match",
     "pairs": [
      [
       "Klausau!",
       "Слушаю!"
      ],
      [
       "Skambinu pagal skelbimą.",
       "Звоню по объявлению."
      ],
      [
       "Iki pasimatymo.",
       "До встречи."
      ],
      [
       "Koks plotas?",
       "Какая площадь?"
      ],
      [
       "Kaip ten nuvažiuoti?",
       "Как туда доехать?"
      ]
     ]
    },
    {
     "q": "Kiek kainuoja per mėnesį? — ___",
     "options": [
      "450 eurų.",
      "45 kv. m.",
      "Penktame aukšte."
     ],
     "answer": "450 eurų.",
     "tr": "Сколько стоит в месяц? — 450 евро.",
     "note": "Kiek kainuoja? — вопрос о цене. После десятков и сотен — eurų (родительный мн. ч.).",
     "prompt": "Что ответить?"
    },
    {
     "q": "Alio! Ar jūs nuomojate kambarį? — ___",
     "options": [
      "Taip, nuomoju.",
      "Ne, lifto nėra.",
      "Iki pasimatymo."
     ],
     "answer": "Taip, nuomoju.",
     "tr": "Алло! Вы сдаёте комнату? — Да, сдаю.",
     "note": "nuomoti: aš nuomoju, jūs nuomojate. Отвечает владелец.",
     "prompt": "Что ответить?"
    },
    {
     "q": "Ar priimate su gyvūnais? — ___",
     "options": [
      "Taip, su kate galima.",
      "Taip, su baldais.",
      "Taip, kiekvieną mėnesį."
     ],
     "answer": "Taip, su kate galima.",
     "tr": "Принимаете с животными? — Да, с кошкой можно.",
     "note": "Su + творительный: su gyvūnais, su kate. Galima — можно.",
     "prompt": "Что ответить?"
    },
    {
     "q": "Kokio dydžio užstatas? — ___",
     "options": [
      "Vieno mėnesio nuomos kaina.",
      "Vienas didelis miegamasis.",
      "Pirmame arba antrame aukšte."
     ],
     "answer": "Vieno mėnesio nuomos kaina.",
     "tr": "Какого размера залог? — Арендная плата за один месяц.",
     "note": "Kokio dydžio? — какого размера: dydis → dydžio (d → dž).",
     "prompt": "Что ответить?"
    },
    {
     "q": "Kaip ten nuvažiuoti? Kokiu autobusu važiuoti? — ___",
     "options": [
      "Penktu, iki stoties.",
      "Penktame aukšte.",
      "Penki kambariai."
     ],
     "answer": "Penktu, iki stoties.",
     "tr": "Как туда доехать? На каком автобусе ехать? — На пятом, до вокзала.",
     "note": "Kokiu autobusu? — творительный без предлога: penktas → penktu.",
     "prompt": "Что ответить?"
    },
    {
     "q": "___ — 48 kv. m.",
     "options": [
      "Koks plotas?",
      "Kokia kaina?",
      "Kiek kambarių?"
     ],
     "answer": "Koks plotas?",
     "tr": "Какая площадь? — 48 кв. м.",
     "note": "Plotas — площадь, её считают в kv. m. Plotas мужского рода, поэтому koks.",
     "prompt": "О чём спросили?"
    },
    {
     "q": "___ — Kitoje, prie parko.",
     "options": [
      "Kokioje stotelėje išlipti?",
      "Kiek kainuoja per mėnesį?",
      "Kada galima ateiti?"
     ],
     "answer": "Kokioje stotelėje išlipti?",
     "tr": "На какой остановке выйти? — На следующей, у парка.",
     "note": "Kokioje stotelėje? — Kitoje (stotelėje): ответ в том же падеже, что и вопрос.",
     "prompt": "О чём спросили?"
    },
    {
     "q": "Prieš metus Jonas persikėlė iš Kauno į ___.",
     "options": [
      "Vilnių",
      "Vilniuje",
      "Vilniaus"
     ],
     "answer": "Vilnių",
     "tr": "Год назад Йонас переехал из Каунаса в Вильнюс.",
     "note": "persikelti iš ko? (iš Kauno) į ką? (į Vilnių): цель — в винительном, не в местном."
    },
    {
     "q": "Rūta gerai sutaria su ___.",
     "options": [
      "kaimynais",
      "kaimynai",
      "kaimynus"
     ],
     "answer": "kaimynais",
     "tr": "Рута хорошо ладит с соседями.",
     "note": "sutarti su kuo? — творительный: kaimynai → su kaimynais. Sutarti — и «ладить», и «договориться»."
    },
    {
     "q": "Vakare Agnė skambina buto ___.",
     "options": [
      "savininkui",
      "savininką",
      "savininkas"
     ],
     "answer": "savininkui",
     "tr": "Вечером Агне звонит хозяину квартиры.",
     "note": "skambinti kam? — дательный: savininkas → savininkui."
    },
    {
     "q": "suteikti informaciją",
     "options": [
      "предоставить информацию",
      "узнать информацию",
      "ввести информацию"
     ],
     "answer": "предоставить информацию",
     "note": "Suteikti — предоставить, дать. Узнать — sužinoti, ввести — įvesti.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    },
    {
     "q": "Alio, skambinu ___ skelbimą. Kokia kaina?",
     "options": [
      "pagal",
      "po",
      "prie"
     ],
     "answer": "pagal",
     "tr": "Алло, звоню по объявлению. Какая цена?",
     "note": "«По объявлению» — pagal skelbimą (pagal + винительный). Po — «после» или «под», prie — «у»."
    },
    {
     "q": "Nuo ___ iki mūsų namo — dešimt minučių.",
     "options": [
      "stoties",
      "stotis",
      "stotį"
     ],
     "answer": "stoties",
     "tr": "От вокзала до нашего дома — десять минут.",
     "note": "stotis (ж. р.) → stoties. Nuo + родительный: nuo stoties."
    },
    {
     "q": "Skelbime butas atrodo ___.",
     "options": [
      "didelis",
      "dideliu",
      "didelį"
     ],
     "answer": "didelis",
     "tr": "В объявлении квартира выглядит большой.",
     "note": "atrodyti + именительный: butas atrodo didelis. По-русски «выглядит большой» — творительный, по-литовски здесь именительный."
    },
    {
     "q": "Savininkas nori ___ savo butą studentams.",
     "options": [
      "išnuomoti",
      "išsinuomoti",
      "persikelti"
     ],
     "answer": "išnuomoti",
     "tr": "Хозяин хочет сдать свою квартиру студентам.",
     "note": "Владелец сдаёт — išnuomoti (kam? — studentams). Išsinuomoti — снять для себя."
    },
    {
     "q": "Studentė Rūta ieško kambario. Ji nori ___ kambarį centre.",
     "options": [
      "išsinuomoti",
      "išnuomoti",
      "sutarti"
     ],
     "answer": "išsinuomoti",
     "tr": "Студентка Рута ищет комнату. Она хочет снять комнату в центре.",
     "note": "Жилец снимает — išsinuomoti: -si- значит «себе». Išnuomoti — сдать."
    },
    {
     "q": "___ rajone yra butas? — Centre, netoli parko.",
     "options": [
      "Kokiame",
      "Kokioje",
      "Kokiu"
     ],
     "answer": "Kokiame",
     "tr": "В каком районе квартира? — В центре, недалеко от парка.",
     "note": "rajonas — мужской род: kur? — kokiame rajone. Kokioje — для женского рода, kokiu — творительный."
    }
   ]
  },
  {
   "id": "u3-svarbu",
   "title": "Man svarbu, kad būtų… — мне важно, чтобы",
   "subtitle": "3D · Условное наклонение в деле: «чтобы был», вежливый вопрос по телефону, «чтобы посмотреть».",
   "rule": "<p><i lang=\"lt\">Kas tau svarbu?</i> — что для тебя важно? Ответ: <i lang=\"lt\">Man svarbu, kad</i> + условное наклонение: <i lang=\"lt\">Man svarbu, kad būtų balkonas. Man svarbu, kad gatvė būtų tyli.</i> Русское «чтобы <b>был</b>» — это <i lang=\"lt\">kad būtų</i>, а не «kad buvo».</p><p>Чего быть не должно — <i lang=\"lt\">kad nebūtų</i> + родительный: <i lang=\"lt\">kad nebūtų pelėsio, kad nebūtų triukšmo</i>. Если <i lang=\"lt\">būtų</i> только связывает слова, прилагательное остаётся в именительном: <i lang=\"lt\">kad užstatas nebūtų didelis</i>.</p><p><b>Вежливые вопросы по телефону:</b> <i lang=\"lt\">Kada galėčiau apžiūrėti butą?</i> — когда я мог бы посмотреть квартиру? <i lang=\"lt\">Gal galėtumėte pasakyti adresą?</i> — не могли бы вы сказать адрес? <i lang=\"lt\">Norėtume daugiau sužinoti apie butą.</i> — мы хотели бы узнать больше о квартире. <i lang=\"lt\">Kada galima būtų ateiti?</i> — когда можно было бы прийти?</p><p><i lang=\"lt\">Kad</i> + условное = «чтобы»: <i lang=\"lt\">Atėjau, kad apžiūrėčiau butą.</i> — я пришёл, чтобы посмотреть квартиру. <i lang=\"lt\">Paprašyk savininko, kad pasakytų adresą.</i> — попроси хозяина, чтобы сказал адрес. <i lang=\"lt\">Pasakyk jam, kad ateitų rytoj.</i> — скажи ему, чтобы пришёл завтра. А <i lang=\"lt\">kad tik</i> — «лишь бы»: <i lang=\"lt\">Kad tik butas būtų šiltas!</i></p><p>Окончания (таблица — в 3C): <i lang=\"lt\">-čiau, -tum, -tų, -tume, -tumėte</i>. «Если бы» — тоже в 3C: <i lang=\"lt\">Jeigu butas būtų pigesnis, išsinuomotume.</i></p>",
   "items": [
    {
     "q": "Seneliai ieško buto. Jiems svarbu, kad ten ___ balkonas.",
     "options": [
      "būtų",
      "buvo",
      "bus"
     ],
     "answer": "būtų",
     "tr": "Бабушка и дедушка ищут квартиру. Им важно, чтобы там был балкон.",
     "note": "«Чтобы был» — kad būtų (условное наклонение), не прошедшее buvo."
    },
    {
     "q": "Mes ieškome buto. Mums svarbu, kad virtuvė ___ didelė.",
     "options": [
      "būtų",
      "buvo",
      "bus"
     ],
     "answer": "būtų",
     "tr": "Мы ищем квартиру. Нам важно, чтобы кухня была большой.",
     "note": "После svarbu, kad — условное: būtų. Прилагательное остаётся в именительном: didelė."
    },
    {
     "q": "Rūta ieško kambario. Jai svarbu, kad ten ___ triukšmo.",
     "options": [
      "nebūtų",
      "nebuvo",
      "nebūti"
     ],
     "answer": "nebūtų",
     "tr": "Рута ищет комнату. Ей важно, чтобы там не было шума.",
     "note": "«Чтобы не было» — kad nebūtų + родительный: triukšmas → triukšmo."
    },
    {
     "q": "Ieškome buto centre. Mums svarbu, kad užstatas ___ didelis.",
     "options": [
      "nebūtų",
      "nebuvo",
      "nebus"
     ],
     "answer": "nebūtų",
     "tr": "Ищем квартиру в центре. Нам важно, чтобы залог не был большим.",
     "note": "Kad užstatas nebūtų didelis: здесь būtų — связка, прилагательное в именительном."
    },
    {
     "q": "Ieškai buto? Kas tau svarbu? — Kad butas ___ netoli darbo.",
     "options": [
      "būtų",
      "buvo",
      "būti"
     ],
     "answer": "būtų",
     "tr": "Ищешь квартиру? Что для тебя важно? — Чтобы квартира была недалеко от работы.",
     "note": "Kas tau svarbu? — что для тебя важно? В ответе — kad + условное: kad butas būtų…"
    },
    {
     "q": "Tėvams svarbu, kad name būtų ___.",
     "options": [
      "liftas",
      "lifto",
      "liftą"
     ],
     "answer": "liftas",
     "tr": "Родителям важно, чтобы в доме был лифт.",
     "note": "kad būtų + именительный (то, что должно быть): liftas."
    },
    {
     "q": "Ievai svarbu, kad vonioje ir virtuvėje nebūtų ___.",
     "options": [
      "pelėsio",
      "pelėsis",
      "pelėsį"
     ],
     "answer": "pelėsio",
     "tr": "Иеве важно, чтобы в ванной и на кухне не было плесени.",
     "note": "kad nebūtų + родительный (то, чего быть не должно): pelėsis → pelėsio."
    },
    {
     "q": "Pone Jonai, gal ___ man pasakyti tikslų adresą?",
     "options": [
      "galėtumėte",
      "galėtum",
      "galėčiau"
     ],
     "answer": "galėtumėte",
     "tr": "Господин Йонас, не могли бы вы сказать мне точный адрес?",
     "note": "Pone Jonai — обращение на «вы»: jūs galėtumėte. Gal galėtumėte…? — не могли бы вы…?"
    },
    {
     "q": "Kada aš ___ užeiti pas jus: ryte ar vakare?",
     "options": [
      "galėčiau",
      "galėtum",
      "galėtų"
     ],
     "answer": "galėčiau",
     "tr": "Когда я мог бы зайти к вам: утром или вечером?",
     "note": "aš → galėčiau. Kada galėčiau…? — когда я мог бы…?"
    },
    {
     "q": "Mes su vyru ___ apžiūrėti butą šeštadienį.",
     "options": [
      "norėtume",
      "norėčiau",
      "norėtų"
     ],
     "answer": "norėtume",
     "tr": "Мы с мужем хотели бы посмотреть квартиру в субботу.",
     "note": "mes → norėtume: вежливее, чем norime."
    },
    {
     "q": "Gal jūsų vyras ___ ateiti rytoj?",
     "options": [
      "galėtų",
      "galėčiau",
      "galėtum"
     ],
     "answer": "galėtų",
     "tr": "Может быть, ваш муж мог бы прийти завтра?",
     "note": "jūsų vyras = jis → galėtų."
    },
    {
     "q": "Laba diena! Atėjau, kad ___ butą.",
     "options": [
      "apžiūrėčiau",
      "apžiūriu",
      "apžiūrėjau"
     ],
     "answer": "apžiūrėčiau",
     "tr": "Добрый день! Я пришёл, чтобы посмотреть квартиру.",
     "note": "Цель: kad + условное. apžiūrėti → (aš) apžiūrėčiau. Дальше вежливо: Ar galėčiau užeiti? — можно мне войти?"
    },
    {
     "q": "Paprašyk savininko, kad ___ durų kodą.",
     "options": [
      "pasakytų",
      "pasako",
      "pasakė"
     ],
     "answer": "pasakytų",
     "tr": "Попроси хозяина, чтобы он сказал код от двери.",
     "note": "paprašyti ko? (savininko), kad + условное: pasakyti → (jis) pasakytų."
    },
    {
     "q": "Norėčiau apžiūrėti butą. Kada ___ būtų ateiti?",
     "options": [
      "galima",
      "galiu",
      "gali"
     ],
     "answer": "galima",
     "tr": "Я хотел бы посмотреть квартиру. Когда можно было бы прийти?",
     "note": "Galima būtų — можно было бы. Galima не меняется по лицам."
    },
    {
     "q": "Нам важно, чтобы комната была тихой.",
     "options": [
      "Mums svarbu, kad kambarys būtų tylus.",
      "Mums svarbu, kad kambarys buvo tylus.",
      "Mes svarbu, kad kambarys būtų tylus."
     ],
     "answer": "Mums svarbu, kad kambarys būtų tylus.",
     "note": "«Нам важно» — mums svarbu (дательный); «чтобы была» — kad būtų.",
     "prompt": "Выбери перевод",
     "lang": "ru"
    }
   ]
  },
  {
   "id": "u3-miestai",
   "title": "Lietuvos miestai — города Литвы",
   "subtitle": "3E · Что есть в городе и чем он известен: Vilnius, Trakai, Kėdainiai.",
   "rule": "<p>Что есть в городе — <i lang=\"lt\">Čia yra</i> + именительный: <i lang=\"lt\">Čia yra pilis ir dvi stotys.</i> После <i lang=\"lt\">daug</i> (много) и <i lang=\"lt\">nemažai</i> (немало) — родительный; у того, что можно посчитать, — множественного числа:</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Kas?</th><th>Daug ko?</th></tr><tr><td>turistai</td><td>turistų</td></tr><tr><td>ežerai</td><td>ežerų</td></tr><tr><td>kavinės</td><td>kavinių</td></tr><tr><td>viešbučiai</td><td>viešbučių</td></tr><tr><td>muziejai</td><td>muziejų</td></tr><tr><td>medžiai</td><td>medžių</td></tr><tr><td>žmonės</td><td>žmonių</td></tr></table></div><p>В названиях из двух слов родительный стоит первым: <i lang=\"lt\">autobusų stotis</i> (автовокзал), <i lang=\"lt\">geležinkelio stotis</i> (железнодорожный вокзал), <i lang=\"lt\">prekybos centras</i> (торговый центр), <i lang=\"lt\">kultūros namai</i> (дом культуры), <i lang=\"lt\">miesto centras</i> (центр города).</p><p>Повторение: <i lang=\"lt\">stotis, pilis, šalis</i> — женского рода: родительный <i lang=\"lt\">stoties, pilies, šalies</i>; где? <i lang=\"lt\">stotyje, pilyje</i>; мн. ч. <i lang=\"lt\">dvi stotys</i>.</p><p>Где? <i lang=\"lt\">Vilnius → Vilniuje</i>; названия во множественном числе: <i lang=\"lt\">Trakai → Trakuose, Kėdainiai → Kėdainiuose</i>. «На острове» — <i lang=\"lt\">saloje</i>, без предлога.</p><p>Предлоги: <i lang=\"lt\">netoli</i> + родительный, без <i lang=\"lt\">nuo</i> (<i lang=\"lt\">netoli Vilniaus</i>); <i lang=\"lt\">toli nuo</i> + родительный (<i lang=\"lt\">toli nuo centro</i>); <i lang=\"lt\">aplink</i> + винительный (<i lang=\"lt\">aplink miestą</i> — вокруг города).</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "pilis",
       "замок"
      ],
      [
       "sala",
       "остров"
      ],
      [
       "bažnyčia",
       "церковь, костёл"
      ],
      [
       "galerija",
       "галерея"
      ],
      [
       "miškas",
       "лес"
      ]
     ],
     "prompt": "Соедини пары: что посмотреть"
    },
    {
     "type": "match",
     "pairs": [
      [
       "autobusų stotis",
       "автовокзал"
      ],
      [
       "geležinkelio stotis",
       "железнодорожный вокзал"
      ],
      [
       "kelias",
       "дорога"
      ],
      [
       "pastatas",
       "здание"
      ],
      [
       "kultūros namai",
       "дом культуры"
      ]
     ],
     "prompt": "Соедини пары: транспорт и здания",
     "note": "Родительный стоит первым: autobusų stotis, kultūros namai. Stotis — женского рода."
    },
    {
     "type": "match",
     "pairs": [
      [
       "pramonė",
       "промышленность"
      ],
      [
       "prekyba",
       "торговля"
      ],
      [
       "verslas",
       "бизнес"
      ],
      [
       "įmonė",
       "предприятие"
      ],
      [
       "gyventojas",
       "житель"
      ]
     ],
     "prompt": "Соедини пары: город и экономика"
    },
    {
     "type": "match",
     "pairs": [
      [
       "sostinė",
       "столица"
      ],
      [
       "šventė",
       "праздник"
      ],
      [
       "cerkvė",
       "православная церковь"
      ],
      [
       "turistas",
       "турист"
      ],
      [
       "tradicinis patiekalas",
       "традиционное блюдо"
      ]
     ],
     "prompt": "Соедини пары: жизнь города"
    },
    {
     "q": "Mes kasmet važiuojame į Trakus.",
     "options": [
      "каждый год",
      "каждый месяц",
      "каждую неделю"
     ],
     "answer": "каждый год",
     "note": "kasmet — каждый год (metai — год): «Мы каждый год ездим в Тракай».",
     "prompt": "Что значит kasmet?",
     "optLang": "ru"
    },
    {
     "q": "торговый центр",
     "options": [
      "prekybos centras",
      "kultūros namai",
      "miesto centras"
     ],
     "answer": "prekybos centras",
     "note": "prekyba — торговля; родительный стоит первым: prekybos centras.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "дерево",
     "options": [
      "medis",
      "miškas",
      "medžiaga"
     ],
     "answer": "medis",
     "note": "medis — дерево (daug medžių); miškas — лес; medžiaga — материал.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Trakuose valgome kibinus — šis ___ čia labai populiarus.",
     "options": [
      "patiekalas",
      "pastatas",
      "paveikslas"
     ],
     "answer": "patiekalas",
     "tr": "В Тракае мы едим кибины — это блюдо здесь очень популярно.",
     "note": "kibinai — кибины, пирожки с мясом; patiekalas — блюдо; pastatas — здание; paveikslas — картина."
    },
    {
     "q": "Vasarą pilyje ___ koncertai.",
     "options": [
      "vyksta",
      "veikia",
      "važiuoja"
     ],
     "answer": "vyksta",
     "tr": "Летом в замке проходят концерты.",
     "note": "vykti, vyksta — проходить (о событии); veikti, veikia — работать (о предприятии, магазине)."
    },
    {
     "q": "Mūsų mieste ___ dvi didelės įmonės.",
     "options": [
      "veikia",
      "vyksta",
      "gyvena"
     ],
     "answer": "veikia",
     "tr": "В нашем городе работают два крупных предприятия.",
     "note": "veikti, veikia — работать, действовать: о предприятии, магазине, музее. Vyksta — о событии."
    },
    {
     "q": "Vasarą Trakuose nemažai ___.",
     "options": [
      "turistų",
      "turistai",
      "turistus"
     ],
     "answer": "turistų",
     "tr": "Летом в Тракае немало туристов.",
     "note": "nemažai, как и daug, + родительный мн. ч.: turistai → turistų."
    },
    {
     "q": "Mūsų kaimas yra toli nuo ___.",
     "options": [
      "sostinės",
      "sostinė",
      "sostinę"
     ],
     "answer": "sostinės",
     "tr": "Наша деревня находится далеко от столицы.",
     "note": "toli nuo + родительный: sostinė → sostinės."
    },
    {
     "q": "Aplink ___ yra tik miškai ir kaimai.",
     "options": [
      "miestą",
      "miesto",
      "miestas"
     ],
     "answer": "miestą",
     "tr": "Вокруг города только леса и деревни.",
     "note": "aplink + винительный: miestas → miestą. В русском здесь родительный."
    },
    {
     "q": "Mūsų viešbutis yra prie ___.",
     "options": [
      "stoties",
      "stotis",
      "stotį"
     ],
     "answer": "stoties",
     "tr": "Наша гостиница находится у вокзала.",
     "note": "prie + родительный; stotis — женского рода: stotis → stoties."
    },
    {
     "q": "Mano brolis gyvena ir dirba ___.",
     "options": [
      "Kėdainiuose",
      "Kėdainiai",
      "Kėdainių"
     ],
     "answer": "Kėdainiuose",
     "tr": "Мой брат живёт и работает в Кедайняй.",
     "note": "Kėdainiai — множественное число: kur? → Kėdainiuose, как Trakai → Trakuose."
    },
    {
     "q": "Vasarą mes gyvename mažoje ___.",
     "options": [
      "saloje",
      "sala",
      "salą"
     ],
     "answer": "saloje",
     "tr": "Летом мы живём на маленьком острове.",
     "note": "sala → saloje. «На острове» — местный падеж без предлога, как и mažoje."
    },
    {
     "q": "Šis miestas yra Lietuvos sostinė.",
     "options": [
      "Vilnius",
      "Trakai",
      "Kėdainiai"
     ],
     "answer": "Vilnius",
     "tr": "Этот город — столица Литвы.",
     "note": "sostinė — столица: Vilnius.",
     "prompt": "Какой это город?",
     "fixed": true
    },
    {
     "q": "Šiame mieste pilis stovi saloje, ežero viduryje.",
     "options": [
      "Vilnius",
      "Trakai",
      "Kėdainiai"
     ],
     "answer": "Trakai",
     "tr": "В этом городе замок стоит на острове, посреди озера.",
     "note": "pilis saloje — замок на острове: Trakai. Ežero viduryje — посреди озера.",
     "prompt": "Какой это город?",
     "fixed": true
    },
    {
     "q": "Šis miestas toli nuo Vilniaus — jis šalies viduryje.",
     "options": [
      "Vilnius",
      "Trakai",
      "Kėdainiai"
     ],
     "answer": "Kėdainiai",
     "tr": "Этот город далеко от Вильнюса — он в центре страны.",
     "note": "Не столица и не рядом с ней: Kėdainiai — в центре Литвы (Lietuvos viduryje).",
     "prompt": "Какой это город?",
     "fixed": true
    },
    {
     "q": "Trakai — labai ___ miestas.",
     "options": [
      "populiarus",
      "populiari",
      "populiarūs"
     ],
     "answer": "populiarus",
     "tr": "Тракай — очень популярный город.",
     "note": "Согласуем со словом miestas (м. р., ед. ч.), а не с названием Trakai: populiarus miestas."
    },
    {
     "q": "Vilnius — labai ___ sostinė.",
     "options": [
      "žalia",
      "žalias",
      "žali"
     ],
     "answer": "žalia",
     "tr": "Вильнюс — очень зелёная столица.",
     "note": "Согласуем со словом sostinė (ж. р.): žalia sostinė. Но: žalias miestas."
    },
    {
     "q": "Vilniuje yra ___ stotys: autobusų ir geležinkelio.",
     "options": [
      "dvi",
      "du",
      "dviejų"
     ],
     "answer": "dvi",
     "tr": "В Вильнюсе два вокзала: автобусный и железнодорожный.",
     "note": "stotis — женского рода, поэтому dvi stotys, а не du."
    }
   ]
  },
  {
   "id": "u3-gerai",
   "title": "Kaip? Gerai, gražiai, puikiai — наречия",
   "subtitle": "3E · Прилагательное описывает предмет, наречие — действие.",
   "rule": "<p><b>Koks? Kokia?</b> — прилагательное (<i lang=\"lt\">būdvardis</i>): описывает предмет и согласуется с ним. <b>Kaip?</b> — наречие (<i lang=\"lt\">prieveiksmis</i>): описывает действие и не изменяется, как знакомое <i lang=\"lt\">lietuviškai</i>.</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Koks?</th><th>Kokia?</th><th>Kaip?</th></tr><tr><td>geras</td><td>gera</td><td>gerai</td></tr><tr><td>gražus</td><td>graži</td><td>gražiai</td></tr><tr><td>saldus</td><td>saldi</td><td>saldžiai</td></tr><tr><td>didelis</td><td>didelė</td><td>—</td></tr></table></div><p><i lang=\"lt\">-as</i> → <b><i lang=\"lt\">-ai</i></b>, <i lang=\"lt\">-us</i> → <b><i lang=\"lt\">-iai</i></b>; <i lang=\"lt\">d</i> перед <i lang=\"lt\">-iai</i> даёт <i lang=\"lt\">dž</i>. У <i lang=\"lt\">didelis</i> наречия нет: «очень» — <i lang=\"lt\">labai</i>, «много» — <i lang=\"lt\">daug</i>.</p><p>Шкала оценок: <i lang=\"lt\">puikiai</i> (отлично) – <i lang=\"lt\">labai gerai</i> – <i lang=\"lt\">gerai</i> – <i lang=\"lt\">neblogai</i> (неплохо) – <i lang=\"lt\">šiaip sau</i> (так себе) – <i lang=\"lt\">blogai</i> – <i lang=\"lt\">labai blogai</i>.</p><p>«Лучше, дешевле, больше» — <b><i lang=\"lt\">-iau</i></b>: <i lang=\"lt\">gerai → geriau, pigiai → pigiau, brangiai → brangiau, daug → daugiau, greitai → greičiau</i>. «Чем» — <i lang=\"lt\">negu</i>: <i lang=\"lt\">Tomas kalba geriau negu aš.</i></p><p>Ловушки: <i lang=\"lt\">Automobilis yra brangus</i> (какой?), но <i lang=\"lt\">Automobilis kainuoja brangiai</i> (как?). <i lang=\"lt\">Geri butai</i> — «хорошие» (мн. ч.), а <i lang=\"lt\">gerai</i> — «хорошо». <i lang=\"lt\">Mažai</i> значит «мало».</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "puikiai",
       "отлично"
      ],
      [
       "labai gerai",
       "очень хорошо"
      ],
      [
       "neblogai",
       "неплохо"
      ],
      [
       "šiaip sau",
       "так себе"
      ],
      [
       "blogai",
       "плохо"
      ],
      [
       "labai blogai",
       "очень плохо"
      ]
     ],
     "prompt": "Соедини пары: шкала оценок"
    },
    {
     "type": "match",
     "pairs": [
      [
       "brangiai",
       "дорого"
      ],
      [
       "pigiai",
       "дёшево"
      ],
      [
       "patogiai",
       "удобно"
      ],
      [
       "tyliai",
       "тихо"
      ],
      [
       "greitai",
       "быстро"
      ]
     ],
     "prompt": "Соедини пары: как?",
     "note": "-us → -iai: brangus → brangiai, tylus → tyliai; -as → -ai: greitas → greitai."
    },
    {
     "q": "Jūs ___ kalbate lietuviškai!",
     "options": [
      "nuostabiai",
      "nuostabus",
      "nuostabi"
     ],
     "answer": "nuostabiai",
     "tr": "Вы чудесно говорите по-литовски!",
     "note": "Kaip kalbate? — наречие: nuostabus → nuostabiai."
    },
    {
     "q": "Kokia ___ diena!",
     "options": [
      "puiki",
      "puikus",
      "puikiai"
     ],
     "answer": "puiki",
     "tr": "Какой отличный день!",
     "note": "Kokia diena? — прилагательное, diena женского рода: puiki. Наречие puikiai описывает действие."
    },
    {
     "q": "Jie labai ___ rašo apie savo miestą.",
     "options": [
      "įdomiai",
      "įdomus",
      "įdomi"
     ],
     "answer": "įdomiai",
     "tr": "Они очень интересно пишут о своём городе.",
     "note": "Kaip rašo? — наречие: įdomus → įdomiai."
    },
    {
     "q": "Jūsų svetainė labai ___.",
     "options": [
      "šviesi",
      "šviesus",
      "šviesiai"
     ],
     "answer": "šviesi",
     "tr": "Ваша гостиная очень светлая.",
     "note": "Kokia svetainė? — прилагательное в женском роде: šviesus → šviesi."
    },
    {
     "q": "Mūsų kaimynai visada kalba labai ___.",
     "options": [
      "maloniai",
      "malonus",
      "maloni"
     ],
     "answer": "maloniai",
     "tr": "Наши соседи всегда разговаривают очень приветливо.",
     "note": "Kaip kalba? — наречие: malonus → maloniai."
    },
    {
     "q": "Mūsų kaimynas — labai ___ žmogus.",
     "options": [
      "ramus",
      "rami",
      "ramiai"
     ],
     "answer": "ramus",
     "tr": "Наш сосед — очень спокойный человек.",
     "note": "Koks žmogus? — прилагательное в мужском роде: ramus. Ramiai — «спокойно» (как?)."
    },
    {
     "q": "Svečiai ___ sėdi ant sofos.",
     "options": [
      "patogiai",
      "patogus",
      "patogi"
     ],
     "answer": "patogiai",
     "tr": "Гости удобно сидят на диване.",
     "note": "Kaip sėdi? — наречие: patogus → patogiai."
    },
    {
     "q": "Šis viešbutis yra labai ___.",
     "options": [
      "brangus",
      "brangi",
      "brangiai"
     ],
     "answer": "brangus",
     "tr": "Эта гостиница очень дорогая.",
     "note": "После yra — прилагательное; viešbutis мужского рода: brangus. Но: kainuoja brangiai."
    },
    {
     "q": "Mūsų vadovas ___ moka už darbą.",
     "options": [
      "gerai",
      "geri",
      "geros"
     ],
     "answer": "gerai",
     "tr": "Наш начальник хорошо платит за работу.",
     "note": "Kaip moka? — наречие gerai. Geri, geros — «хорошие» (мн. ч.)."
    },
    {
     "q": "Koks? — gražus. Kaip? — ___.",
     "options": [
      "gražiai",
      "graži",
      "gražūs"
     ],
     "answer": "gražiai",
     "tr": "Какой? — красивый. Как? — красиво.",
     "note": "-us → -iai: gražus → gražiai. Graži — женский род, gražūs — мн. ч."
    },
    {
     "q": "Koks? — saldus. Kaip? — ___.",
     "options": [
      "saldžiai",
      "saldi",
      "saldūs"
     ],
     "answer": "saldžiai",
     "tr": "Какой? — сладкий. Как? — сладко.",
     "note": "-us → -iai, а d перед -iai даёт dž: saldus → saldžiai."
    },
    {
     "q": "Koks? — lengvas. Kaip? — ___.",
     "options": [
      "lengvai",
      "lengvi",
      "lengvos"
     ],
     "answer": "lengvai",
     "tr": "Какой? — лёгкий. Как? — легко.",
     "note": "-as → -ai: lengvas → lengvai. Lengvi, lengvos — «лёгкие» (мн. ч.)."
    },
    {
     "q": "Rūta skaito lietuviškai ___ negu aš.",
     "options": [
      "geriau",
      "gerai",
      "geras"
     ],
     "answer": "geriau",
     "tr": "Рута читает по-литовски лучше, чем я.",
     "note": "negu — «чем», значит, нужно сравнение: gerai → geriau."
    },
    {
     "q": "Traukinys važiuoja ___ negu autobusas.",
     "options": [
      "greičiau",
      "greitai",
      "greitas"
     ],
     "answer": "greičiau",
     "tr": "Поезд едет быстрее, чем автобус.",
     "note": "greitai → greičiau: t перед -iau даёт č."
    },
    {
     "q": "Vadovas dirba ___ negu mes.",
     "options": [
      "daugiau",
      "daug",
      "didesnis"
     ],
     "answer": "daugiau",
     "tr": "Начальник работает больше, чем мы.",
     "note": "daug → daugiau — «больше» при глаголе. Didesnis — «больший» (о предмете)."
    },
    {
     "q": "так себе",
     "options": [
      "šiaip sau",
      "neblogai",
      "labai blogai"
     ],
     "answer": "šiaip sau",
     "note": "Шкала: puikiai – labai gerai – gerai – neblogai – šiaip sau – blogai – labai blogai.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Centre butai kainuoja brangiau, o toli nuo centro — pigiau.",
     "options": [
      "дешевле",
      "дёшево",
      "дороже"
     ],
     "answer": "дешевле",
     "note": "pigiai — дёшево, pigiau — дешевле; brangiai — дорого, brangiau — дороже. «В центре квартиры стоят дороже, а далеко от центра — дешевле».",
     "prompt": "Что значит pigiau?",
     "optLang": "ru"
    },
    {
     "q": "Kaip tu miegojai? — Ačiū, ___.",
     "options": [
      "neblogai",
      "neblogas",
      "nebloga"
     ],
     "answer": "neblogai",
     "tr": "Как тебе спалось? — Спасибо, неплохо.",
     "note": "На вопрос Kaip? отвечает наречие: neblogas → neblogai.",
     "prompt": "Что ответить?"
    }
   ]
  },
  {
   "id": "u3-grazu",
   "title": "Čia gražu ir ramu — красиво, спокойно, удобно",
   "subtitle": "3E · Когда нет подлежащего: čia jauku, man patogu; kaime ramiau negu mieste.",
   "rule": "<p>Когда описывать некого и нечего — в предложении нет подлежащего («здесь тихо», «мне удобно», «приятно жить»), — нужна форма без рода. Она не изменяется: <i lang=\"lt\">-us</i> → <b><i lang=\"lt\">-u</i></b> (<i lang=\"lt\">gražus → gražu, ramus → ramu, patogus → patogu</i>), <i lang=\"lt\">-as</i> → <b><i lang=\"lt\">-a</i></b> (<i lang=\"lt\">karštas → karšta, šaltas → šalta</i>).</p><ul><li>где + форма: <i lang=\"lt\">Čia ramu. Kambaryje karšta.</i></li><li>форма + инфинитив: <i lang=\"lt\">Patogu gyventi centre. Malonu čia gyventi.</i></li><li>кому + форма: <i lang=\"lt\">Man patogu. Ar jums patogu?</i></li></ul><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Пример</th><th>Что описываем</th></tr><tr><td>Butas jaukus.</td><td>какой? — квартиру</td></tr><tr><td>Bute jauku.</td><td>подлежащего нет</td></tr><tr><td>Gyvename jaukiai.</td><td>как? — действие</td></tr></table></div><p>Одно русское «уютно» — два литовских слова: <i lang=\"lt\">jauku</i> (подлежащего нет) и <i lang=\"lt\">jaukiai</i> (при глаголе).</p><p>Сравнение без подлежащего — с <i lang=\"lt\">-iau</i> (см. наречия), а не с <i lang=\"lt\">-esnis</i>: <i lang=\"lt\">Kaime ramiau negu mieste.</i> <i lang=\"lt\">Kur ramiau gyventi — kaime ar mieste?</i></p><p>Так же устроены <i lang=\"lt\">galima</i> (можно), <i lang=\"lt\">gaila</i> (жаль), <i lang=\"lt\">svarbu</i> (важно). У <i lang=\"lt\">didelis</i> и прилагательных на <i lang=\"lt\">-inis</i> такой формы нет.</p>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "ramu",
       "спокойно"
      ],
      [
       "jauku",
       "уютно"
      ],
      [
       "karšta",
       "жарко"
      ],
      [
       "šviesu",
       "светло"
      ],
      [
       "malonu",
       "приятно"
      ]
     ],
     "prompt": "Соедини пары: как здесь?"
    },
    {
     "q": "Kaime labai ___.",
     "options": [
      "gražu",
      "gražus",
      "graži"
     ],
     "answer": "gražu",
     "tr": "В деревне очень красиво.",
     "note": "Подлежащего нет (kaime — «где?»), поэтому форма без рода: gražus → gražu."
    },
    {
     "q": "Šis rajonas labai ___.",
     "options": [
      "ramus",
      "ramu",
      "rami"
     ],
     "answer": "ramus",
     "tr": "Этот район очень спокойный.",
     "note": "Есть подлежащее rajonas (м. р.) — прилагательное согласуется: ramus."
    },
    {
     "q": "Ryte svetainėje labai ___.",
     "options": [
      "šviesu",
      "šviesus",
      "šviesi"
     ],
     "answer": "šviesu",
     "tr": "Утром в гостиной очень светло.",
     "note": "Svetainėje — «где?», а не подлежащее, поэтому форма без рода: šviesus → šviesu."
    },
    {
     "q": "Ši kavinė dieną labai ___.",
     "options": [
      "tyli",
      "tylu",
      "tylus"
     ],
     "answer": "tyli",
     "tr": "Это кафе днём очень тихое.",
     "note": "Есть подлежащее kavinė (ж. р.) — прилагательное согласуется: tylus → tyli."
    },
    {
     "q": "Šiandien labai ___.",
     "options": [
      "karšta",
      "karštas",
      "karšti"
     ],
     "answer": "karšta",
     "tr": "Сегодня очень жарко.",
     "note": "Подлежащего нет: karštas → karšta — «жарко»."
    },
    {
     "q": "Žiemą mūsų rūsys labai ___.",
     "options": [
      "šaltas",
      "šalta",
      "šalti"
     ],
     "answer": "šaltas",
     "tr": "Зимой наш подвал очень холодный.",
     "note": "Есть подлежащее rūsys (м. р.) — прилагательное согласуется: šaltas. Без подлежащего: Rūsyje šalta."
    },
    {
     "q": "Centre vakare labai ___.",
     "options": [
      "triukšminga",
      "triukšmingas",
      "triukšmingi"
     ],
     "answer": "triukšminga",
     "tr": "В центре вечером очень шумно.",
     "note": "Подлежащего нет: triukšmingas → triukšminga — «шумно»."
    },
    {
     "q": "Man per ___ gyventi centre.",
     "options": [
      "brangu",
      "brangus",
      "brangi"
     ],
     "answer": "brangu",
     "tr": "Мне слишком дорого жить в центре.",
     "note": "Форма без рода + инфинитив: brangu gyventi. Per — «слишком»."
    },
    {
     "q": "Mieste ___ rasti pigų butą.",
     "options": [
      "sunku",
      "sunkus",
      "sunki"
     ],
     "answer": "sunku",
     "tr": "В городе трудно найти дешёвую квартиру.",
     "note": "Форма без рода + инфинитив: sunkus → sunku rasti."
    },
    {
     "q": "Sėskite čia. Ar jums ___?",
     "options": [
      "patogu",
      "patogus",
      "patogi"
     ],
     "answer": "patogu",
     "tr": "Садитесь сюда. Вам удобно?",
     "note": "Кому? + форма без рода: Ar jums patogu? — Man patogu."
    },
    {
     "q": "Prie ežero ___ negu centre.",
     "options": [
      "ramiau",
      "ramesnis",
      "ramu"
     ],
     "answer": "ramiau",
     "tr": "У озера спокойнее, чем в центре.",
     "note": "negu — «чем», значит, сравнение; подлежащего нет, поэтому ramiau, а не ramesnis (ramesnis rajonas)."
    },
    {
     "q": "Naktį čia ___ negu dieną.",
     "options": [
      "tyliau",
      "tylu",
      "tylus"
     ],
     "answer": "tyliau",
     "tr": "Ночью здесь тише, чем днём.",
     "note": "negu требует сравнения: tylu (тихо) → tyliau (тише)."
    },
    {
     "q": "Gyventi centre ___ negu už miesto.",
     "options": [
      "patogiau",
      "patogesnis",
      "patogu"
     ],
     "answer": "patogiau",
     "tr": "Жить в центре удобнее, чем за городом.",
     "note": "negu требует сравнения; при инфинитиве — форма без рода: patogiau, а не patogesnis."
    },
    {
     "q": "Virtuvėje ___ negu miegamajame.",
     "options": [
      "šilčiau",
      "šilta",
      "šiltas"
     ],
     "answer": "šilčiau",
     "tr": "На кухне теплее, чем в спальне.",
     "note": "šilta → šilčiau: t перед -iau даёт č."
    },
    {
     "q": "Здесь тепло.",
     "options": [
      "Čia šilta.",
      "Čia šalta.",
      "Čia karšta."
     ],
     "answer": "Čia šilta.",
     "note": "šilta — тепло, šalta — холодно, karšta — жарко.",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "Kur ramiau gyventi — kaime ar mieste?",
     "options": [
      "Где спокойнее жить — в деревне или в городе?",
      "Где лучше жить — в деревне или в городе?",
      "Где ты живёшь — в деревне или в городе?"
     ],
     "answer": "Где спокойнее жить — в деревне или в городе?",
     "note": "ramu → ramiau — спокойнее; kaimas → kaime — в деревне; mieste — в городе.",
     "prompt": "Выбери перевод",
     "optLang": "ru"
    }
   ]
  },
  {
   "id": "u3-sveciai",
   "title": "Kuo galėčiau padėti? — в агентстве и в гостях",
   "subtitle": "3E · Какая квартира нужна, бюджет и анкета; встреча, приглашение, комплименты.",
   "rule": "<p>Кто есть кто: <i lang=\"lt\">nuomininkas, nuomininkė</i> — тот, кто снимает квартиру; <i lang=\"lt\">buto šeimininkas, šeimininkė</i> — хозяин, хозяйка; <i lang=\"lt\">klientas</i> — клиент; <i lang=\"lt\">vadybininkė</i> — менеджер.</p><p>В агентстве: <i lang=\"lt\">Kuo galėčiau padėti?</i> (Чем могу помочь?) — <i lang=\"lt\">Norėčiau išsinuomoti butą.</i> (Я хотел бы снять квартиру.) <i lang=\"lt\">Su baldais ar be baldų?</i> (С мебелью или без?) — <i lang=\"lt\">Su baldais.</i> Бюджет: <i lang=\"lt\">iki 500 eurų per mėnesį, be mokesčių</i>. <i lang=\"lt\">Kada jums patogu?</i> (Когда вам удобно?) — <i lang=\"lt\">Rytoj, apie septintą valandą.</i> (Завтра, около семи часов.) <i lang=\"lt\">Prašom užpildyti anketą.</i> (Заполните, пожалуйста, анкету.)</p><p>Предлоги: <i lang=\"lt\">iki</i> + родительный — «до»: <i lang=\"lt\">iki centro, iki 500 eurų</i>; <i lang=\"lt\">be</i> + родительный — «без»: <i lang=\"lt\">be mokesčių</i> (без коммунальных платежей). <i lang=\"lt\">Su baldais, per mėnesį</i> — см. 3D.</p><p>В гостях: <i lang=\"lt\">Malonu tave matyti!</i> — <i lang=\"lt\">Man taip pat.</i> (Приятно тебя видеть! — Мне тоже.) <i lang=\"lt\">Atvažiuokite į svečius!</i> — <i lang=\"lt\">Būtinai!</i> (Приезжайте в гости! — Обязательно!) <i lang=\"lt\">Koks jaukus butas!</i> (Какая уютная квартира!) <i lang=\"lt\">Koks gražus stalas! Kur pirkai?</i> (Какой красивый стол! Где купил?)</p><p>Короткие реакции:</p><div class=\"table-wrap\"><table lang=\"lt\"><tr><th>Lietuviškai</th><th>По-русски</th></tr><tr><td>Gaila.</td><td>Жаль.</td></tr><tr><td>Žinoma.</td><td>Конечно.</td></tr><tr><td>Būtinai!</td><td>Обязательно!</td></tr><tr><td>Gali būti.</td><td>Может быть.</td></tr><tr><td>Nereikėjo!</td><td>Не стоило!</td></tr><tr><td>Kaip malonu!</td><td>Как приятно!</td></tr><tr><td>Puiku!</td><td>Отлично!</td></tr></table></div>",
   "items": [
    {
     "type": "match",
     "pairs": [
      [
       "nuomininkas",
       "квартиросъёмщик"
      ],
      [
       "buto šeimininkas",
       "хозяин квартиры"
      ],
      [
       "klientas",
       "клиент"
      ],
      [
       "vadybininkė",
       "менеджер (женщина)"
      ],
      [
       "užpildyti anketą",
       "заполнить анкету"
      ],
      [
       "elektroninis paštas",
       "электронная почта"
      ]
     ],
     "prompt": "Соедини пары: люди и анкета"
    },
    {
     "type": "match",
     "pairs": [
      [
       "Malonu tave matyti!",
       "Приятно тебя видеть!"
      ],
      [
       "Man taip pat.",
       "Мне тоже."
      ],
      [
       "Atvažiuokite į svečius!",
       "Приезжайте в гости!"
      ],
      [
       "Kur pirkai?",
       "Где ты купил(а)?"
      ],
      [
       "eiti pasivaikščioti",
       "пойти погулять"
      ]
     ],
     "prompt": "Соедини пары: в гостях"
    },
    {
     "type": "match",
     "pairs": [
      [
       "Gaila.",
       "Жаль."
      ],
      [
       "Būtinai!",
       "Обязательно!"
      ],
      [
       "Gali būti.",
       "Может быть."
      ],
      [
       "Nereikėjo!",
       "Не стоило!"
      ],
      [
       "Puiku!",
       "Отлично!"
      ]
     ],
     "prompt": "Соедини пары: короткие реакции"
    },
    {
     "q": "Laba diena! Kuo galėčiau padėti? — ___",
     "options": [
      "Norėčiau išsinuomoti kambarį centre.",
      "Rytoj, apie septintą valandą.",
      "Ačiū, man taip pat."
     ],
     "answer": "Norėčiau išsinuomoti kambarį centre.",
     "tr": "Добрый день! Чем могу помочь? — Я хотел бы снять комнату в центре.",
     "note": "Kuo galėčiau padėti? — вопрос сотрудника. Клиент говорит, что ему нужно: Norėčiau…",
     "prompt": "Что ответить?"
    },
    {
     "q": "Ar galėčiau rytoj apžiūrėti butą? — ___",
     "options": [
      "Gaila, bet butas jau išnuomotas.",
      "Nereikėjo! Kaip malonu!",
      "Šeštame aukšte, su balkonu."
     ],
     "answer": "Gaila, bet butas jau išnuomotas.",
     "tr": "Можно мне завтра посмотреть квартиру? — Жаль, но квартира уже сдана.",
     "note": "išnuomotas — сдан; gaila — «жаль»; apžiūrėti — посмотреть, осмотреть.",
     "prompt": "Что ответить?"
    },
    {
     "q": "Koks tavo kambarys bendrabutyje? — ___",
     "options": [
      "Mažas, bet šviesus ir su balkonu.",
      "Ketvirtame aukšte, lifto nėra.",
      "200 eurų per mėnesį, su internetu."
     ],
     "answer": "Mažas, bet šviesus ir su balkonu.",
     "tr": "Какая у тебя комната в общежитии? — Маленькая, но светлая и с балконом.",
     "note": "Koks? — спрашивают, какая комната: mažas, šviesus. Этаж — Kelintame aukšte?, цена — Kiek kainuoja?",
     "prompt": "Что ответить?"
    },
    {
     "q": "Labas, Rūta! Malonu tave matyti! — ___",
     "options": [
      "Man taip pat!",
      "Nereikėjo!",
      "Gali būti."
     ],
     "answer": "Man taip pat!",
     "tr": "Привет, Рута! Приятно тебя видеть! — Мне тоже!",
     "note": "Malonu tave matyti! — Man taip pat. Nereikėjo! говорят, когда получают подарок.",
     "prompt": "Что ответить?"
    },
    {
     "q": "Atvažiuokite į svečius šeštadienį! — ___",
     "options": [
      "Ačiū! Šeštadienį būtinai būsime.",
      "Ačiū, man taip pat.",
      "Taip, norėčiau su baldais."
     ],
     "answer": "Ačiū! Šeštadienį būtinai būsime.",
     "tr": "Приезжайте в гости в субботу! — Спасибо! В субботу обязательно будем.",
     "note": "būtinai — обязательно; būsime — будем (būti).",
     "prompt": "Что ответить?"
    },
    {
     "q": "Čia tau gėlės! — ___ Ačiū!",
     "options": [
      "Kaip malonu!",
      "Kaip gaila!",
      "Gali būti."
     ],
     "answer": "Kaip malonu!",
     "tr": "Это тебе цветы! — Как приятно! Спасибо!",
     "note": "Kaip malonu! — «Как приятно!»; gaila — «жаль». Можно добавить и Nereikėjo! — «Не стоило!».",
     "prompt": "Что ответить?"
    },
    {
     "q": "Чем могу помочь?",
     "options": [
      "Kuo galėčiau padėti?",
      "Kada jums patogu?",
      "Kur pirkai?"
     ],
     "answer": "Kuo galėčiau padėti?",
     "note": "padėti kuo? — помочь чем?; galėčiau — «я мог бы».",
     "prompt": "Как это по-литовски?",
     "lang": "ru"
    },
    {
     "q": "___ — Su baldais, jeigu galima.",
     "options": [
      "Su baldais ar be baldų?",
      "Kiek kambarių jums reikia?",
      "Kada jums patogu?"
     ],
     "answer": "Su baldais ar be baldų?",
     "tr": "С мебелью или без мебели? — С мебелью, если можно.",
     "note": "su + творительный: su baldais; be + родительный: be baldų.",
     "prompt": "Какой был вопрос?"
    },
    {
     "q": "___ — Rytoj, apie septintą valandą.",
     "options": [
      "Kada jums patogu?",
      "Kur pirkai?",
      "Su baldais ar be baldų?"
     ],
     "answer": "Kada jums patogu?",
     "tr": "Когда вам удобно? — Завтра, около семи часов.",
     "note": "Kada? — когда?; apie septintą valandą — около семи часов.",
     "prompt": "Какой был вопрос?"
    },
    {
     "q": "Butas kainuoja 400 eurų per mėnesį, be ___.",
     "options": [
      "mokesčių",
      "mokesčiai",
      "mokesčius"
     ],
     "answer": "mokesčių",
     "tr": "Квартира стоит 400 евро в месяц, без коммунальных платежей.",
     "note": "be + родительный: mokesčiai → mokesčių."
    },
    {
     "q": "Iš čia iki ___ tik dešimt minučių.",
     "options": [
      "centro",
      "centras",
      "centrą"
     ],
     "answer": "centro",
     "tr": "Отсюда до центра всего десять минут.",
     "note": "iki + родительный: centras → centro."
    },
    {
     "q": "Mums reikia ___ ir pigaus kambario.",
     "options": [
      "tylaus",
      "tylus",
      "tylų"
     ],
     "answer": "tylaus",
     "tr": "Нам нужна тихая и дешёвая комната.",
     "note": "reikia + родительный: tylus → tylaus, как pigus → pigaus."
    },
    {
     "q": "Rūta gyvena Jono bute ir moka jam už nuomą. Rūta — ___.",
     "options": [
      "nuomininkė",
      "buto šeimininkė",
      "vadybininkė"
     ],
     "answer": "nuomininkė",
     "tr": "Рута живёт в квартире Йонаса и платит ему за аренду. Рута — квартиросъёмщица.",
     "note": "nuomininkas, nuomininkė снимает квартиру; buto šeimininkas, šeimininkė её сдаёт."
    }
   ]
  }
 ],
 "tests": [
  {
   "id": "t-3a",
   "code": "3A",
   "title": "Namai namučiai",
   "subtitle": "Дом и комнаты, мебель и техника, прилагательные в местном падеже, этажи, глаголы и фразы дома.",
   "from": [
    "u3-namas",
    "u3-baldai",
    "u3-kokiame",
    "u3-aukstas",
    "u3-prasom"
   ]
  },
  {
   "id": "t-3b",
   "code": "3B",
   "title": "Koks jaukus tavo butas!",
   "subtitle": "Декор и текстиль, размер, цвет и материал, согласование прилагательных в роде и числе, man patinka, kai…",
   "from": [
    "u3-dekoras",
    "u3-savybes",
    "u3-derinimas",
    "u3-kokie",
    "u3-kai"
   ]
  },
  {
   "id": "t-3c",
   "code": "3C",
   "title": "Kuris geresnis?",
   "subtitle": "Šis, tas, kuris; степени сравнения, предлоги места, условное наклонение, мнение и просьбы.",
   "from": [
    "u3-kuris",
    "u3-laips",
    "u3-prielinks",
    "u3-tar",
    "u3-atrodo"
   ]
  },
  {
   "id": "t-3d",
   "code": "3D",
   "title": "Noriu gyventi čia",
   "subtitle": "Объявления о квартирах, kiek и daug, man reikia, звонок хозяину, man svarbu, kad…",
   "from": [
    "u3-skelbimai",
    "u3-kiek",
    "u3-reikia",
    "u3-skambutis",
    "u3-svarbu"
   ]
  },
  {
   "id": "t-3e",
   "code": "3E",
   "title": "Kur geriau gyventi — mieste ar kaime?",
   "subtitle": "Города Литвы, наречия, čia gražu, в агентстве и в гостях — и все задания 3A–3D вперемешку.",
   "from": [
    "u3-namas",
    "u3-baldai",
    "u3-kokiame",
    "u3-aukstas",
    "u3-prasom",
    "u3-dekoras",
    "u3-savybes",
    "u3-derinimas",
    "u3-kokie",
    "u3-kai",
    "u3-kuris",
    "u3-laips",
    "u3-prielinks",
    "u3-tar",
    "u3-atrodo",
    "u3-skelbimai",
    "u3-kiek",
    "u3-reikia",
    "u3-skambutis",
    "u3-svarbu",
    "u3-miestai",
    "u3-gerai",
    "u3-grazu",
    "u3-sveciai"
   ]
  }
 ]
});
