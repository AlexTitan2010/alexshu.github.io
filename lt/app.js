(function () {
  'use strict';

  var MAIN_GUARD = 250;
  var FADE_OUT = 90;
  var FOLD = 180;
  var MISS_FLASH = 450;
  var TRACK_LINE = 40;
  var TRACK_DENSE = 50;
  var TRACK_SOLID = 110;
  var FILE_LIMIT = 2097152;
  var URL_LIFE = 40000;
  var GAP = '___';
  var HOW = [
    'Выбери урок — задания начнутся сразу. Ответ выбирается касанием, печатать по-литовски не нужно.',
    'Урок идёт подходами по 20 заданий. Новая тема сначала идёт шестью заданиями подряд, потом вперемешку с остальными.',
    'Ошибка возвращается через три задания, на следующий день и ещё раз через три дня. ' +
      'После двух верных ответов в разные дни она закрыта.',
    'Пройденная тема возвращается шестью заданиями через 1, 3, 7, 16, 35 и 70 дней. ' +
      'В повторении варианты открываются по нажатию: сначала вспомни форму сам.',
    'В задании: «?» — правило, кнопка со стрелкой — другой вопрос, «Стоп» — итог и ошибки. ' +
      'Ответ с подсказкой засчитывается, но тему не подтверждает.',
    'Всё хранится только в этом браузере. Прогресс можно сохранить в файл и загрузить на другом устройстве.'
  ];
  var app = document.getElementById('app');
  var onSite = /^https?:$/.test(location.protocol);
  var SITE_LINKS = [
    ['Home', '/'],
    ['Expertise', '/#expertise'],
    ['Work', '/#signature'],
    ['About', '/#about'],
    ['Results', '/#results'],
    ['Lithuanian trainer', '#/'],
    ['Contact', 'mailto:al.shulyakovskiy@gmail.com']
  ];

  var SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ' +
    'aria-hidden="true" focusable="false" ';
  var ICONS = {
    ok: SVG + 'stroke-width="2.2"><polyline points="4 12.5 9.5 18 20 6.5"/></svg>',
    bad: SVG + 'stroke-width="2.2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    skip: SVG + 'stroke-width="2"><path d="M5 5l10 7-10 7z"/><path d="M19 5v14"/></svg>',
    reset: SVG + 'stroke-width="2"><path d="M3.5 12a8.5 8.5 0 1 0 2.5-6L3 8"/><path d="M3 3.5V8h4.5"/></svg>'
  };
  var ORBITS = '<svg viewBox="0 0 800 400" focusable="false">' +
    '<g fill="none" stroke="currentColor" stroke-width="1.2">' +
    '<ellipse cx="400" cy="200" rx="380" ry="118" stroke-opacity=".45"/>' +
    '<ellipse cx="400" cy="200" rx="300" ry="164" stroke-opacity=".3" transform="rotate(-14 400 200)"/>' +
    '<circle cx="400" cy="200" r="196" stroke-opacity=".2"/>' +
    '</g><circle cx="780" cy="200" r="3.5" fill="currentColor"/><circle class="cool" cx="560" cy="88" r="2.5"/></svg>';

  var engine = window.LTEngine.create({
    data: window.LT_DATA || [],
    storage: readStorage(),
    now: function () { return Date.now(); },
    random: Math.random,
    tzOffset: function (ms) { return new Date(ms).getTimezoneOffset(); }
  });
  var session = null;
  var stage = null;
  var shown = '';
  var homeDay = 0;
  var flash = '';
  var quiet = 0;
  var boards = {};
  var fromHome = false;
  var kept = false;
  var stale = false;
  var hint = buildHintDialog();
  var confirmBox = buildConfirmDialog();
  var filePick = buildFilePick();
  var siteNav = onSite ? buildSiteNav() : null;

  buildFootLinks();
  app.addEventListener('click', swallow, true);
  document.addEventListener('keydown', onKey);
  window.addEventListener('hashchange', route);
  window.addEventListener('storage', function (e) {
    if (e.key !== null && e.key !== window.LTEngine.constants.KEY_V2) return;
    refreshHome();
  });
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) refreshHome();
  });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) refreshHome();
  });
  route();

  function readStorage() {
    try {
      return window.localStorage;
    } catch (e) {
      return null;
    }
  }

  function refreshHome() {
    var changed = engine.reload();
    if (shown !== 'home' || !(changed || engine.today() !== homeDay)) return;
    if (dialogOpen()) stale = true;
    else home();
  }

  function dialogOpen() {
    return hint.dialog.open || confirmBox.dialog.open || (!!siteNav && siteNav.dialog.open);
  }

  function settleHome() {
    if (stale && shown === 'home' && !dialogOpen()) home();
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') node.className = v;
        else if (k === 'text') node.textContent = v;
        else if (k === 'html') node.innerHTML = v;
        else node.setAttribute(k, v === true ? '' : v);
      });
    }
    (children || []).forEach(function (c) {
      if (c === null || c === undefined) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function langOf(text) {
    return /[а-яё]/i.test(text) ? null : 'lt';
  }

  function tooSoon(since) {
    var age = Date.now() - since;
    return age >= 0 && age < MAIN_GUARD;
  }

  function hush() {
    quiet = Date.now();
  }

  function swallow(e) {
    if (!tooSoon(quiet)) return;
    e.preventDefault();
    e.stopPropagation();
  }

  function reducedMotion() {
    return !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function siteMenu() {
    if (!siteNav) return null;
    var button = el('button', {
      class: 'site-menu',
      type: 'button',
      'aria-label': 'Меню alexshu.com',
      'aria-haspopup': 'dialog',
      'aria-expanded': 'false'
    }, [el('span'), el('span'), el('span')]);
    button.addEventListener('click', function () { openSiteNav(button); });
    return button;
  }

  function buildSiteNav() {
    var dialog = el('dialog', { class: 'site-nav', 'aria-label': 'Меню alexshu.com' });
    var close = el('button', { class: 'nav-close', type: 'button', 'aria-label': 'Закрыть меню', text: '×' });
    var list = el('nav', { class: 'nav-list' }, SITE_LINKS.map(function (link, i) {
      var a = el('a', { href: link[1], style: '--k:' + i, 'aria-current': link[1] === '#/' ? 'page' : null }, [
        el('span', { class: 'k', 'aria-hidden': 'true', text: pad(i + 1) }),
        link[0]
      ]);
      a.addEventListener('click', function (e) {
        closeDialog(dialog);
        if (link[1] === '#/' && shown !== 'home') leave(e);
      });
      return a;
    }));
    dialog.appendChild(el('div', { class: 'nav-inner' }, [
      el('div', { class: 'nav-head' }, [el('span', { class: 'label', text: 'alexshu.com' }), close]),
      list
    ]));
    close.addEventListener('click', function () { closeDialog(dialog); });
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeDialog(dialog);
    });
    dialog.addEventListener('close', function () {
      if (siteNav.opener) {
        siteNav.opener.setAttribute('aria-expanded', 'false');
        siteNav.opener.focus({ preventScroll: true });
      }
      settleHome();
    });
    document.body.appendChild(dialog);
    return { dialog: dialog, list: list, opener: null };
  }

  function openSiteNav(button) {
    var r = button.getBoundingClientRect();
    siteNav.opener = button;
    siteNav.dialog.style.right = Math.max(8, document.documentElement.clientWidth - Math.round(r.right) - 12) + 'px';
    siteNav.dialog.style.top = Math.max(8, Math.round(r.top) - 12) + 'px';
    button.setAttribute('aria-expanded', 'true');
    openDialog(siteNav.dialog);
    siteNav.list.querySelector('a').focus({ preventScroll: true });
  }

  function backLink() {
    var a = el('a', { class: 'back', href: '#/', text: '← Все уроки' });
    a.addEventListener('click', leave);
    return a;
  }

  function leave(e) {
    if (e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    goHome();
  }

  function dropStage() {
    if (stage && stage.timer) clearTimeout(stage.timer);
    stage = null;
  }

  function clear(title) {
    dropStage();
    hush();
    shown = '';
    closeDialog(hint.dialog);
    closeDialog(confirmBox.dialog);
    if (siteNav) closeDialog(siteNav.dialog);
    app.textContent = '';
    document.body.classList.remove('in-session');
    document.title = title ? title + ' — тренажёр литовского' : 'Тренажёр литовского языка';
    window.scrollTo(0, 0);
  }

  function buildHintDialog() {
    var dialog = el('dialog', { class: 'hint', 'aria-labelledby': 'hint-title' });
    var label = el('span', { class: 'label' });
    var title = el('h2', { id: 'hint-title' });
    var close = el('button', { class: 'hint-close', type: 'button', 'aria-label': 'Закрыть', text: '×' });
    var taskText = el('span', { class: 'hint-task-text' });
    var task = el('div', { class: 'hint-task' }, [el('span', { class: 'label', text: 'Задание' }), taskText]);
    var body = el('div', { class: 'rule' });
    var back = el('button', { class: 'btn primary hint-back', type: 'button' });
    var head = el('div', { class: 'hint-head' }, [el('div', { class: 'hint-titles' }, [label, title]), close]);
    var scroll = el('div', { class: 'sheet-scroll' }, [head, task, body]);
    var box = {
      dialog: dialog,
      label: label,
      title: title,
      task: task,
      taskText: taskText,
      body: body,
      scroll: scroll,
      back: back,
      since: 0
    };
    dialog.appendChild(el('div', { class: 'sheet' }, [scroll, el('div', { class: 'sheet-foot' }, [back])]));
    close.addEventListener('click', function () { shut(box); });
    back.addEventListener('click', function () { shut(box); });
    closeOutside(box);
    dialog.addEventListener('close', function () {
      var s = stage;
      settleHome();
      if (!s) return;
      if (!s.main.hidden) s.main.focus({ preventScroll: true });
      else s.card.focus({ preventScroll: true });
    });
    document.body.appendChild(dialog);
    return box;
  }

  function buildConfirmDialog() {
    var dialog = el('dialog', { class: 'hint confirm', 'aria-labelledby': 'confirm-title', 'aria-describedby': 'confirm-text' });
    var box = {
      dialog: dialog,
      label: el('span', { class: 'label' }),
      title: el('h2', { id: 'confirm-title' }),
      text: el('p', { id: 'confirm-text', class: 'confirm-text' }),
      stats: el('p', { class: 'confirm-stats label' }),
      cancel: el('button', { class: 'btn', type: 'button' }),
      ok: el('button', { class: 'btn danger', type: 'button' }),
      run: null,
      since: 0
    };
    dialog.appendChild(el('div', { class: 'hint-inner' }, [
      el('div', { class: 'hint-titles' }, [box.label, box.title]),
      box.text,
      box.stats,
      el('div', { class: 'confirm-actions' }, [box.cancel, box.ok])
    ]));
    box.cancel.addEventListener('click', function () { shut(box); });
    box.ok.addEventListener('click', function () {
      var run = box.run;
      if (tooSoon(box.since)) return;
      closeDialog(dialog);
      if (run) run();
    });
    closeOutside(box);
    dialog.addEventListener('close', settleHome);
    document.body.appendChild(dialog);
    return box;
  }

  function closeOutside(box) {
    box.dialog.addEventListener('click', function (e) {
      if (e.target === box.dialog) shut(box);
    });
  }

  function shut(box) {
    if (!tooSoon(box.since)) closeDialog(box.dialog);
  }

  function openDialog(dialog) {
    if (dialog.open) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }

  function closeDialog(dialog) {
    var open = dialog.open || dialog.hasAttribute('open');
    if (typeof dialog.close !== 'function') dialog.removeAttribute('open');
    else if (dialog.open) dialog.close();
    if (open) hush();
    settleHome();
  }

  function openSheet(o) {
    hint.dialog.classList.toggle('rule-sheet', !!o.rule);
    hint.label.textContent = o.label;
    hint.title.textContent = o.title;
    hint.task.hidden = !o.task;
    hint.taskText.textContent = o.task || '';
    hint.taskText.setAttribute('lang', o.lang || 'lt');
    hint.back.textContent = o.back;
    hint.since = Date.now();
    openDialog(hint.dialog);
    hint.scroll.scrollTop = 0;
    hint.back.focus({ preventScroll: true });
  }

  function openHint(section, task, back, lang) {
    hint.body.innerHTML = section.rule;
    openSheet({ rule: true, label: 'Подсказка · правило', title: section.title, task: task, lang: lang, back: back });
  }

  function openTaskHint() {
    var card = stage && !stage.timer && stage.view ? stage.view.card : null;
    if (!session || !card || !card.section.rule) return;
    session.hint();
    openHint(card.section, card.type === 'match' ? '' : card.item.q, 'Вернуться к заданию', card.item.lang);
  }

  function openRule(section) {
    openHint(section, '', 'Закрыть');
  }

  function openHow() {
    hint.body.textContent = '';
    HOW.forEach(function (text) {
      hint.body.appendChild(el('p', { text: text }));
    });
    openSheet({ rule: false, label: 'Тренажёр · A1–A2', title: 'Как устроен тренажёр', task: '', back: 'Закрыть' });
  }

  function ask(o) {
    confirmBox.label.textContent = o.label;
    confirmBox.title.textContent = o.title;
    confirmBox.text.textContent = o.text || '';
    confirmBox.text.hidden = !o.text;
    confirmBox.stats.textContent = o.stats || '';
    confirmBox.stats.hidden = !o.stats;
    confirmBox.cancel.textContent = o.cancel;
    confirmBox.ok.textContent = o.ok || '';
    confirmBox.ok.hidden = !o.ok;
    confirmBox.run = o.run || null;
    confirmBox.since = Date.now();
    openDialog(confirmBox.dialog);
    confirmBox.cancel.focus({ preventScroll: true });
  }

  function askReset() {
    ask({
      label: 'Сброс данных',
      title: 'Сбросить данные?',
      text: 'Сотрутся ответы по всем заданиям, расписание повторений и список «Работа над ошибками». Отменить сброс нельзя.',
      stats: engine.stats().text,
      cancel: 'Отмена',
      ok: 'Сбросить',
      run: resetData
    });
  }

  function resetData() {
    engine.reset();
    goHome('Данные сброшены');
  }

  function buildFilePick() {
    var input = el('input', { class: 'sr', type: 'file', accept: '.json,application/json', tabindex: '-1', 'aria-hidden': 'true' });
    input.addEventListener('change', function () {
      var file = input.files && input.files[0];
      var reader = null;
      if (!file) return;
      if (file.size > FILE_LIMIT || typeof window.FileReader !== 'function') {
        askFile('');
        return;
      }
      reader = new window.FileReader();
      reader.onload = function () { askFile(typeof reader.result === 'string' ? reader.result : ''); };
      reader.onerror = function () { askFile(''); };
      reader.readAsText(file);
    });
    document.body.appendChild(input);
    return input;
  }

  function buildFootLinks() {
    var foot = document.querySelector('.foot');
    var links = [
      ['Как устроен тренажёр', openHow],
      ['Сохранить прогресс в файл', saveFile],
      ['Загрузить из файла', pickFile]
    ];
    if (!foot) return;
    foot.addEventListener('click', swallow, true);
    foot.appendChild(el('div', { class: 'foot-links' }, links.map(function (link) {
      var b = el('button', { class: 'linkbtn', type: 'button', text: link[0] });
      b.addEventListener('click', link[1]);
      return b;
    })));
  }

  function saveFile() {
    var text = '';
    var url = '';
    var a = null;
    refreshHome();
    text = engine.exportText();
    try {
      url = window.URL.createObjectURL(new window.Blob([text], { type: 'application/json' }));
    } catch (e) {
      url = 'data:application/json;charset=utf-8,' + encodeURIComponent(text);
    }
    a = el('a', { href: url, download: engine.fileName, hidden: true });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (url.indexOf('blob:') === 0) setTimeout(function () { window.URL.revokeObjectURL(url); }, URL_LIFE);
  }

  function pickFile() {
    filePick.value = '';
    filePick.click();
  }

  function askFile(text) {
    var info = engine.importInfo(text);
    if (!info.ok) {
      ask({ label: 'Загрузить из файла', title: info.message, cancel: 'Закрыть' });
      return;
    }
    ask({
      label: 'Загрузить из файла',
      title: 'Заменить прогресс?',
      text: info.message,
      cancel: 'Отмена',
      ok: 'Заменить',
      run: function () { loadFile(text); }
    });
  }

  function loadFile(text) {
    var info = engine.importApply(text);
    if (info.ok) goHome('Прогресс загружен из файла');
    else askFile('');
  }

  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var id = parts[1] || '';
    var target = null;
    var same = kept;
    kept = false;
    if (parts[0] === 't' && id) {
      boards = {};
      session = engine.start(id);
      if (session) {
        markEntry(same);
        dropStage();
        show(session.view(), 'card');
        return;
      }
      location.replace('#/');
      return;
    }
    if (parts[0] === 's' && id) {
      target = engine.testOfSection(id);
      if (target) {
        location.replace('#/t/' + target);
        return;
      }
    }
    home();
  }

  function markEntry(same) {
    var state = null;
    try {
      state = window.history.state;
      if (state && state.lt) {
        fromHome = !!state.home;
        return;
      }
      fromHome = same ? fromHome : shown === 'home';
      window.history.replaceState({ lt: 1, home: fromHome }, '');
    } catch (e) {
      fromHome = false;
    }
  }

  function goHome(note) {
    flash = note || '';
    if (shown === 'home' || location.hash === '#/') home();
    else if (fromHome) window.history.back();
    else location.replace('#/');
  }

  function act(b) {
    var hash = '';
    if (!b) return;
    if (b.action === 'home') {
      goHome();
      return;
    }
    if (b.action === 'start') {
      hash = '#/t/' + b.target;
      kept = shown === 'result';
      if (location.hash === hash) route();
      else if (kept) location.replace(hash);
      else location.hash = hash;
      return;
    }
    if (!session || typeof session[b.action] !== 'function') return;
    show(session[b.action](), b.action === 'reveal' ? 'reveal' : 'card');
  }

  function setLabel(node, b) {
    node.textContent = '';
    node.appendChild(document.createTextNode(b.label));
    if (b.arrow) node.appendChild(el('span', { 'aria-hidden': 'true', text: '→' }));
  }

  function actionButton(b) {
    var node = el('button', { class: 'btn' + (b.primary ? ' primary' : ''), type: 'button' });
    setLabel(node, b);
    node.addEventListener('click', function () { act(b); });
    return node;
  }

  function ruleButton(label, name) {
    return el('button', { class: 'linkbtn', type: 'button', 'aria-label': name || null }, [
      el('span', { class: 'q-mini', 'aria-hidden': 'true', text: '?' }),
      label
    ]);
  }

  function barNode(name, parts) {
    return el('span', { class: name, 'aria-hidden': 'true' }, parts.map(function (p) {
      return el('i', { class: p[0], style: 'flex-grow:' + p[1] });
    }));
  }

  function todayCard(t) {
    var box = el('section', { class: 'card today' + (t.state === 'plan' ? '' : ' calm'), 'aria-label': 'Сегодня' }, [
      el('span', { class: 'label today-label', text: t.label })
    ]);
    if (t.heading) box.appendChild(el('h2', { class: 'today-heading', text: t.heading }));
    if (t.text) box.appendChild(el('p', { class: 'today-text', text: t.text }));
    t.lines.forEach(function (l) {
      box.appendChild(el('div', { class: 'plan-line' }, [
        el('span', { class: 'plan-main' }, [
          el('span', { class: 'plan-title', text: l.title }),
          l.sub ? el('span', { class: 'plan-sub', lang: langOf(l.sub), text: l.sub }) : null
        ]),
        el('span', { class: 'plan-count', text: String(l.count) })
      ]));
    });
    if (t.button) box.appendChild(actionButton(t.button));
    if (t.hint) box.appendChild(el('p', { class: 'today-hint', text: t.hint }));
    return box;
  }

  function toolsRow(data) {
    var tools = el('div', { class: 'tools' + (data.mistakes ? '' : ' solo') });
    var reset = null;
    if (data.mistakes) {
      tools.appendChild(el('a', { class: 'alert', href: '#/t/' + data.mistakes.target }, [
        el('span', { class: 'alert-text' }, [
          el('span', { class: 'label', text: data.mistakes.label }),
          el('span', { text: data.mistakes.text })
        ]),
        el('span', { class: 'arrow', 'aria-hidden': 'true', text: '→' })
      ]));
    }
    if (data.reset) {
      reset = el('button', { class: 'reset', type: 'button' }, [
        el('span', { class: 'ic', 'aria-hidden': 'true', html: ICONS.reset }),
        el('span', { class: 'txt', text: 'Сброс данных' })
      ]);
      reset.addEventListener('click', askReset);
      tools.appendChild(reset);
    }
    return tools;
  }

  function lessonRow(r) {
    return el('a', { class: 'row', href: '#/t/' + r.id }, [
      r.code ? el('span', { class: 'code', text: r.code }) : el('span', { class: 'code none', 'aria-hidden': 'true' }),
      el('span', { class: 'row-main' }, [
        el('span', { class: 'row-title', text: r.title }),
        r.chip ? el('span', { class: 'chip gold', text: r.chip }) : null,
        r.subtitle ? el('span', { class: 'row-sub', text: r.subtitle }) : null,
        r.bar ? barNode('row-bar', [['is-ok', r.bar.green], ['is-gold', r.bar.gold], [null, r.bar.rest]]) : null
      ]),
      el('span', { class: 'row-meta' }, [
        el('span', null, [
          el('span', { 'aria-hidden': 'true', text: r.count }),
          el('span', { class: 'sr', text: r.sr })
        ]),
        r.mistakesText ? el('span', { class: 'row-mist', text: r.mistakesText }) : null
      ])
    ]);
  }

  function home() {
    var data = null;
    var notice = flash;
    var orbits = el('div', { class: 'orbits', 'aria-hidden': 'true' });
    clear();
    session = null;
    shown = 'home';
    stale = false;
    flash = '';
    data = engine.home();
    homeDay = data.day;
    orbits.innerHTML = ORBITS;
    app.appendChild(orbits);
    app.appendChild(el('div', { class: 'hero' + (data.first ? '' : ' short') }, [
      el('div', { class: 'hero-top' }, [el('p', { class: 'eyebrow label', text: 'Тренажёр · A1–A2' }), siteMenu()]),
      el('h1', { class: 'title', lang: 'lt' }, [el('span', { text: 'Lietuvių' }), el('span', { class: 'accent', text: 'kalba' })]),
      data.first ? el('p', { class: 'lead' }, [
        'Выбери урок — задания начнутся сразу. Ответ выбирается из вариантов, печатать по-литовски не нужно. ' +
          'В задании: «?» — правило, ',
        el('span', { class: 'inline-ic', 'aria-hidden': 'true', html: ICONS.skip }),
        el('span', { class: 'sr', text: 'кнопка пропуска' }),
        ' — другой вопрос, «Стоп» — итог и ошибки.'
      ]) : null
    ]));
    [notice, engine.notice()].forEach(function (text) {
      if (text) app.appendChild(el('p', { class: 'notice label', role: 'status', text: text }));
    });
    if (data.today) app.appendChild(todayCard(data.today));
    if (data.mistakes || data.reset) app.appendChild(toolsRow(data));
    data.groups.forEach(function (g) {
      app.appendChild(el('section', { class: 'group' }, [el('h2', { text: g.title })].concat(g.rows.map(lessonRow))));
    });
    if (notice) app.focus({ preventScroll: true });
  }

  function show(view, how) {
    if (!view) return;
    if (view.screen === 'result') {
      renderResult(view);
      return;
    }
    if (!stage) buildStage(view);
    paint(view, how);
  }

  function buildStage(view) {
    var s = { view: null, next: null, timer: null, live: null, mainButton: null, mainSig: '', mainSince: 0 };
    clear(view.title);
    shown = 'stage';
    document.body.classList.add('in-session');
    s.eyebrow = el('p', { class: 'stage-eyebrow label' });
    s.stop = el('button', { class: 'stop', type: 'button', text: 'Стоп. Оценить результат' });
    s.sr = el('span', { class: 'sr' });
    s.counter = el('span', { 'aria-hidden': 'true' });
    s.track = el('div', { class: 'track', 'aria-hidden': 'true' });
    s.body = el('div', { class: 'card-body' });
    s.card = el('div', { class: 'card stage-card', tabindex: '-1' }, [s.body]);
    s.skip = el('button', {
      class: 'icon-btn dock-skip',
      type: 'button',
      title: 'Пропустить: другой вопрос',
      'aria-label': 'Пропустить вопрос и показать другой',
      html: ICONS.skip
    });
    s.hint = el('button', { class: 'hint-btn dock-hint', type: 'button', 'aria-label': 'Подсказка: правило к заданию' }, [
      el('span', { class: 'q', 'aria-hidden': 'true', text: '?' }),
      el('span', { class: 'hint-text', text: 'Подсказка' })
    ]);
    s.side = el('button', { class: 'btn dock-side', type: 'button' });
    s.main = el('button', { class: 'btn primary dock-main', type: 'button' });
    s.keys = el('p', { class: 'keys label' });
    s.stop.addEventListener('click', function () { act({ action: 'stop' }); });
    s.skip.addEventListener('click', skipTask);
    s.hint.addEventListener('click', openTaskHint);
    s.side.addEventListener('click', function () {
      if (stage && stage.view) act(stage.view.side);
    });
    s.main.addEventListener('click', pressMain);
    app.appendChild(el('div', { class: 'stage' }, [
      el('div', { class: 'stage-top' }, [backLink(), siteMenu()]),
      el('div', { class: 'stage-head' }, [s.eyebrow, s.stop]),
      el('div', { class: 'stage-progress' }, [s.sr, s.counter, s.track]),
      s.card,
      el('div', { class: 'dock' }, [s.skip, s.hint, s.side, s.main]),
      s.keys
    ]));
    stage = s;
  }

  function paint(view, how) {
    var s = stage;
    hush();
    s.view = view;
    s.eyebrow.textContent = view.eyebrow;
    s.sr.textContent = view.sr;
    s.counter.textContent = view.counter;
    drawTrack(s.track, view.track);
    paintDock(view);
    if (how === 'answer' && s.live && view.card && view.card.feedback) {
      s.live.answered(view.card.feedback);
      if (!s.main.hidden) s.main.focus({ preventScroll: true });
      return;
    }
    if (how === 'reveal' && s.live && view.card && !view.card.hidden) {
      s.live.reveal(view.card);
      s.card.focus({ preventScroll: true });
      return;
    }
    swapCard(view);
  }

  function drawTrack(box, cells) {
    var n = cells.length;
    box.textContent = '';
    box.className = 'track' + (n > TRACK_SOLID ? ' solid' : n > TRACK_DENSE ? ' dense' : '');
    cells.forEach(function (c) {
      box.appendChild(el('i', { class: 'is-' + c.state + (c.gap ? ' sep' : '') }));
    });
  }

  function trackNode(cells) {
    var box = el('div', { class: 'track', 'aria-hidden': 'true' });
    drawTrack(box, cells);
    return box;
  }

  function resultTrack(cells) {
    var lines = [];
    var line = null;
    var width = 0;
    if (cells.length <= TRACK_LINE) return trackNode(cells);
    cells.forEach(function (c) {
      if (!line || c.gap || line.length >= TRACK_LINE) {
        line = [];
        lines.push(line);
      }
      line.push({ state: c.state, gap: false });
    });
    lines.forEach(function (l) { width = Math.max(width, l.length); });
    lines.forEach(function (l) {
      while (l.length < width) l.push({ state: 'none', gap: false });
    });
    return el('div', { class: 'tracks', 'aria-hidden': 'true' }, lines.map(trackNode));
  }

  function legend(view) {
    var card = view.card;
    var parts = [];
    if (view.screen === 'task' && card) {
      if (card.hidden) {
        parts.push('Enter — показать варианты');
      } else {
        if (card.type !== 'match') parts.push('1–' + card.options.length + ' — ответ');
        parts.push('Enter — дальше');
      }
      if (card.section.rule) parts.push('H — правило');
      parts.push('S — пропустить');
    } else {
      parts.push('Enter — дальше');
    }
    return parts.join(' · ');
  }

  function paintDock(view) {
    var s = stage;
    var card = view.screen === 'task' ? view.card : null;
    var b = view.main;
    var sig = '';
    s.skip.hidden = !card || !view.canSkip;
    s.hint.hidden = !card || !card.section.rule;
    s.hint.classList.toggle('round', !!b);
    s.side.hidden = !view.side;
    if (view.side) setLabel(s.side, view.side);
    s.keys.textContent = legend(view);
    if (!b) {
      if (document.activeElement === s.main) s.main.blur();
      s.main.hidden = true;
      s.mainButton = null;
      s.mainSig = '';
      return;
    }
    sig = [view.screen, card ? card.key : '', card && card.isReturn ? 'r' : '', b.action, b.label].join('|');
    if (sig !== s.mainSig) {
      s.mainSig = sig;
      s.mainSince = Date.now();
      setLabel(s.main, b);
    }
    s.mainButton = b;
    s.main.hidden = false;
  }

  function pressMain() {
    var s = stage;
    if (!s || !s.mainButton || s.main.hidden) return;
    if (tooSoon(s.mainSince)) return;
    act(s.mainButton);
  }

  function skipTask() {
    if (!session || !stage || stage.timer || !stage.view || !stage.view.canSkip) return;
    show(session.skip(), 'card');
  }

  function swapCard(view) {
    var s = stage;
    if (s.live) s.live.close();
    s.live = null;
    s.next = view;
    if (s.timer) return;
    if (!s.body.firstChild || reducedMotion()) {
      fillCard();
      return;
    }
    s.body.classList.add('out');
    s.timer = setTimeout(fillCard, FADE_OUT);
  }

  function fillCard() {
    var s = stage;
    var view = s.next;
    var body = s.body;
    var active = document.activeElement;
    hush();
    s.timer = null;
    s.next = null;
    body.textContent = '';
    body.className = 'card-body';
    if (view.screen === 'checkpoint') s.live = fillCheckpoint(body, view.checkpoint);
    else if (view.card.type === 'match') s.live = fillMatch(body, view.card);
    else s.live = fillChoice(body, view.card);
    void body.offsetWidth;
    body.classList.add('in');
    if (!active || active === document.body || active === s.main || active === s.skip || s.card.contains(active)) {
      s.card.focus({ preventScroll: true });
    }
  }

  function labelRow(card) {
    if (!card.chip && !card.topicTitle) return null;
    return el('div', { class: 'card-labels' }, [
      card.chip ? el('span', { class: 'chip ' + card.chip.kind, text: card.chip.text }) : null,
      card.topicLabel ? el('span', { class: 'label topic-label', text: card.topicLabel }) : null,
      card.topicTitle ? el('span', { class: 'topic-title', text: card.topicTitle }) : null
    ]);
  }

  function sentenceNode(text, base) {
    var p = el('p', { class: 'sentence', lang: 'lt' });
    var gaps = [];
    String(text).split(GAP).forEach(function (part, i) {
      var gap = null;
      if (i > 0) {
        gap = el('span', { class: 'gap', text: ' ' });
        gaps.push(gap);
        p.appendChild(gap);
        if (base && i === 1) {
          p.appendChild(document.createTextNode(' '));
          p.appendChild(el('span', { class: 'base', text: '(' + base + ')' }));
        }
      }
      p.appendChild(document.createTextNode(part));
    });
    return { node: p, gaps: gaps };
  }

  function wordNode(bits, word, lang) {
    if (bits && bits.stem) {
      return el('span', { class: 'word', lang: lang }, [
        el('span', { class: 'stem', text: bits.stem }),
        el('span', { class: 'tail', text: bits.tail })
      ]);
    }
    return el('span', { class: 'word', lang: lang }, [el('span', { class: 'whole', text: word })]);
  }

  function feedbackNode(fb) {
    var text = [fb.text, fb.note].filter(Boolean).join(' ');
    var rule = null;
    var box = el('div', { class: 'feedback ' + fb.kind, role: 'status' }, [
      el('span', { class: 'label', lang: langOf(fb.label), text: fb.label })
    ]);
    if (text) box.appendChild(el('p', { class: 'fb-text', text: text }));
    if (fb.sr) box.appendChild(el('span', { class: 'sr', text: fb.sr }));
    if (fb.rule && fb.rule.section.rule) {
      rule = ruleButton(fb.rule.label);
      rule.addEventListener('click', openTaskHint);
      box.appendChild(rule);
    }
    if (fb.mono) box.appendChild(el('span', { class: 'fb-mono', text: fb.mono }));
    return box;
  }

  function fold(node, instant) {
    if (instant || reducedMotion()) {
      node.hidden = true;
      return;
    }
    node.style.height = node.offsetHeight + 'px';
    void node.offsetHeight;
    node.classList.add('fold');
    node.style.height = '0px';
    setTimeout(function () { node.hidden = true; }, FOLD + 20);
  }

  function fillChoice(body, card) {
    var item = card.item;
    var lang = item.optLang || 'lt';
    var sent = sentenceNode(item.q, card.base);
    var answer = el('div', { class: 'answer' });
    var labels = labelRow(card);
    var short = card.options.every(function (o) { return o.length <= 14; });
    var cols = short && (card.options.length === 2 || card.options.length === 3);
    var layout = 'options' + (cols ? ' cols' : '') + (cols && card.options.length === 2 ? ' two' : '');
    var list = null;
    var buttons = [];
    var closed = false;

    function choose(i) {
      var view = null;
      if (closed || !session) return;
      view = session.answer(i);
      if (view) show(view, 'answer');
    }

    function options(fresh) {
      list = el('div', { class: layout + (fresh ? ' fresh' : '') });
      buttons = card.options.map(function (o, i) {
        var b = el('button', { class: 'opt', type: 'button', lang: lang }, [
          el('span', { class: 'k', 'aria-hidden': 'true', text: pad(i + 1) }),
          el('span', { class: 'opt-text', text: o }),
          el('span', { class: 'ic', 'aria-hidden': 'true' })
        ]);
        b.addEventListener('click', function () { choose(i); });
        list.appendChild(b);
        return b;
      });
      answer.appendChild(list);
    }

    function placeholders() {
      var middle = Math.floor((card.placeholders - 1) / 2);
      var box = el('div', { class: layout });
      var i = 0;
      for (i = 0; i < card.placeholders; i++) {
        box.appendChild(i === middle
          ? el('span', { class: 'ph', text: card.caption })
          : el('span', { class: 'ph', 'aria-hidden': 'true' }));
      }
      answer.appendChild(box);
    }

    function answered(fb, instant) {
      var keep = {};
      var stacked = window.getComputedStyle(list).display !== 'grid';
      closed = true;
      fb.rows.forEach(function (r) { keep[r.index] = r; });
      buttons.forEach(function (b, i) {
        var r = keep[i];
        var text = b.querySelector('.opt-text');
        if (document.activeElement === b) b.blur();
        b.disabled = true;
        if (!r) {
          if (stacked) fold(b, instant);
          return;
        }
        b.classList.add(r.state);
        b.querySelector('.ic').innerHTML = ICONS[r.state];
        text.textContent = '';
        text.appendChild(wordNode(r, r.option, lang));
      });
      sent.gaps.forEach(function (gap) {
        gap.textContent = fb.answer;
        gap.classList.add('ok');
      });
      answer.appendChild(feedbackNode(fb));
    }

    if (labels) body.appendChild(labels);
    if (item.prompt) body.appendChild(el('p', { class: 'prompt', text: item.prompt }));
    if (item.lang) sent.node.setAttribute('lang', item.lang);
    body.appendChild(sent.node);
    if (item.tr) body.appendChild(el('p', { class: 'tr', lang: 'ru', text: item.tr }));
    body.appendChild(answer);
    if (card.hidden) placeholders();
    else options(false);
    if (card.feedback && list) answered(card.feedback, true);

    return {
      pick: function (n) {
        if (n >= 1 && n <= buttons.length) choose(n - 1);
      },
      reveal: function (now) {
        card = now;
        answer.textContent = '';
        options(true);
      },
      answered: function (fb) { answered(fb, false); },
      close: function () { closed = true; }
    };
  }

  function fillMatch(body, card) {
    var item = card.item;
    var total = item.pairs.length;
    var colL = el('div', { class: 'col' });
    var colR = el('div', { class: 'col' });
    var box = el('div', { class: 'match' }, [colL, colR]);
    var answer = el('div', { class: 'answer' }, [box]);
    var labels = labelRow(card);
    var prompt = el('p', {
      class: 'prompt',
      text: item.prompt || 'Соедини пары: нажми слово слева, потом его пару справа.'
    });
    var keep = boards[card.key] || (boards[card.key] = { solved: [], wrong: [] });
    var tiles = { L: [], R: [] };
    var selected = null;
    var solved = keep.solved;
    var wrong = keep.wrong;
    var closed = false;

    function tile(entry, side, col) {
      var lang = side === 'L' ? (item.leftLang || 'lt') : (item.rightLang || 'ru');
      var b = el('button', { class: 'tilebtn', type: 'button', lang: lang, text: entry.text });
      tiles[side][entry.pair] = b;
      b.addEventListener('click', function () { pick({ b: b, pair: entry.pair, side: side }); });
      col.appendChild(b);
    }

    function settle(b) {
      if (document.activeElement === b) b.blur();
      b.classList.remove('sel');
      b.classList.remove('miss');
      b.classList.add('done');
      b.disabled = true;
    }

    function finish() {
      var view = session ? session.answer({ wrong: wrong }) : null;
      closed = true;
      if (view) show(view, 'answer');
    }

    function pick(p) {
      var a = selected;
      if (closed || p.b.disabled) return;
      if (!a) {
        selected = p;
        p.b.classList.add('sel');
        return;
      }
      if (a.b === p.b) {
        p.b.classList.remove('sel');
        selected = null;
        return;
      }
      if (a.side === p.side) {
        a.b.classList.remove('sel');
        selected = p;
        p.b.classList.add('sel');
        return;
      }
      selected = null;
      a.b.classList.remove('sel');
      if (a.pair === p.pair) {
        settle(a.b);
        settle(p.b);
        solved.push(p.pair);
        if (solved.length === total) finish();
        return;
      }
      wrong.push(a.side === 'L' ? [a.pair, p.pair] : [p.pair, a.pair]);
      [a.b, p.b].forEach(function (x) {
        x.classList.add('miss');
        setTimeout(function () { x.classList.remove('miss'); }, MISS_FLASH);
      });
    }

    function answered(fb) {
      closed = true;
      prompt.hidden = true;
      box.textContent = '';
      box.className = 'match solved';
      solved.forEach(function (i) {
        box.appendChild(tiles.L[i]);
        box.appendChild(tiles.R[i]);
      });
      answer.appendChild(feedbackNode(fb));
    }

    if (labels) body.appendChild(labels);
    body.appendChild(prompt);
    body.appendChild(answer);
    card.left.forEach(function (e) { tile(e, 'L', colL); });
    card.right.forEach(function (e) { tile(e, 'R', colR); });
    if (card.feedback) {
      item.pairs.forEach(function (p, i) {
        if (solved.indexOf(i) < 0) solved.push(i);
      });
    }
    solved.forEach(function (i) {
      settle(tiles.L[i]);
      settle(tiles.R[i]);
    });
    if (card.feedback) answered(card.feedback);

    return {
      pick: null,
      reveal: null,
      answered: answered,
      close: function () { closed = true; }
    };
  }

  function fillCheckpoint(body, c) {
    body.classList.add('checkpoint');
    body.appendChild(el('span', { class: 'label checkpoint-label', text: c.label }));
    body.appendChild(el('p', { class: 'score' }, [c.score, ' ', el('small', { text: c.of })]));
    if (c.mono) body.appendChild(el('p', { class: 'meta-line', text: c.mono }));
    body.appendChild(el('p', { class: 'lead', text: c.line }));
    return null;
  }

  function onKey(e) {
    var s = stage;
    var enter = e.key === 'Enter' || e.key === ' ' || e.code === 'Space';
    var n = 0;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (dialogOpen()) return;
    if (!s || !s.view) return;
    if (e.repeat) {
      if (enter) e.preventDefault();
      return;
    }
    if (enter) {
      if (e.target && e.target.closest && e.target.closest('button, a, input, select, textarea')) return;
      e.preventDefault();
      pressMain();
      return;
    }
    if (e.code === 'KeyH' || e.key === '?' || (e.code === 'Slash' && e.shiftKey)) {
      e.preventDefault();
      openTaskHint();
      return;
    }
    if (e.code === 'KeyS') {
      e.preventDefault();
      skipTask();
      return;
    }
    n = parseInt(e.key, 10);
    if (n >= 1 && s.live && s.live.pick && !s.timer) {
      e.preventDefault();
      s.live.pick(n);
    }
  }

  function verdictNode(r) {
    var text = r.verdict;
    var title = '';
    var at = -1;
    r.topics.forEach(function (t) {
      var i = text.indexOf(t.title);
      if (i >= 0 && t.title.length > title.length) {
        title = t.title;
        at = i;
      }
    });
    if (at < 0) return el('p', { class: 'lead', text: text });
    return el('p', { class: 'lead' }, [text.slice(0, at), el('b', { text: title }), text.slice(at + title.length)]);
  }

  function topicRow(t) {
    var rule = null;
    var row = el('div', { class: 'topic' }, [
      el('div', { class: 'topic-top' }, [
        el('span', { class: 'topic-name', text: t.title }),
        el('span', { class: 'topic-count', text: t.text })
      ]),
      barNode('topic-bar', [['is-ok', t.right], ['is-bad', t.wrong]])
    ]);
    if (t.rule && t.section.rule) {
      rule = ruleButton('Правило', 'Правило: ' + t.title);
      rule.addEventListener('click', function () { openRule(t.section); });
      row.appendChild(rule);
    }
    if (t.sub) row.appendChild(el('span', { class: 'fb-mono', text: t.sub }));
    return row;
  }

  function mistakeNode(m) {
    var item = m.item;
    var lang = item.optLang || 'lt';
    var li = el('li');
    var q = null;
    var cut = [];
    if (m.board) {
      li.appendChild(el('span', { class: 'mist-q', text: m.text }));
      if (m.note) li.appendChild(el('span', { class: 'sub', text: m.note }));
      return li;
    }
    q = el('span', { class: 'mist-q', lang: item.lang || 'lt' });
    cut = String(item.q).split(GAP);
    if (cut.length > 1) {
      cut.forEach(function (part, i) {
        if (i > 0) q.appendChild(el('span', { class: 'ans', lang: lang, text: m.answer }));
        q.appendChild(document.createTextNode(part));
      });
    } else {
      q.appendChild(document.createTextNode(item.q + ' → '));
      q.appendChild(el('span', { class: 'ans', lang: lang, text: m.answer }));
    }
    li.appendChild(q);
    li.appendChild(el('span', { class: 'mist-yours' }, ['Твой ответ: ', wordNode(m.parts, m.chosen, lang)]));
    if (m.tr) li.appendChild(el('span', { class: 'sub', lang: 'ru', text: m.tr }));
    if (m.note) li.appendChild(el('span', { class: 'sub', lang: 'ru', text: m.note }));
    return li;
  }

  function mistakeGroup(g) {
    var rule = null;
    var head = el('div', { class: 'mist-head' }, [el('h3', { class: 'mist-title', text: g.title })]);
    if (g.section.rule) {
      rule = el('button', { class: 'linkbtn', type: 'button', 'aria-label': 'Правило: ' + g.title, text: '? Правило' });
      rule.addEventListener('click', function () { openRule(g.section); });
      head.appendChild(rule);
    }
    return el('section', { class: 'mist-group' }, [head, el('ul', { class: 'mist' }, g.items.map(mistakeNode))]);
  }

  function renderResult(view) {
    var r = view.result;
    var page = el('div', { class: 'result' });
    var acts = el('div', { class: 'actions' });
    clear(view.title);
    shown = 'result';
    page.appendChild(el('div', { class: 'quiz-top' }, [backLink(), siteMenu()]));
    page.appendChild(el('p', { class: 'eyebrow label', text: view.eyebrow }));
    page.appendChild(el('h1', { class: 'result-title', text: r.title }));
    if (r.next.primary) acts.appendChild(actionButton(r.next.primary));
    if (r.next.secondary) acts.appendChild(actionButton(r.next.secondary));
    if (r.empty) {
      page.appendChild(el('p', { class: 'lead', text: r.next.line }));
      page.appendChild(acts);
      app.appendChild(page);
      app.focus({ preventScroll: true });
      return;
    }
    page.appendChild(el('p', { class: 'score' }, [r.score, ' ', el('small', { text: r.of })]));
    page.appendChild(resultTrack(r.track));
    if (r.mono) page.appendChild(el('p', { class: 'meta-line', text: r.mono }));
    if (r.verdict) page.appendChild(verdictNode(r));
    page.appendChild(el('h2', { class: 'list-title', text: 'Что дальше' }));
    if (acts.firstChild) page.appendChild(acts);
    if (r.next.line) page.appendChild(el('p', { class: 'next-line', text: r.next.line }));
    if (r.topics.length) {
      page.appendChild(el('h2', { class: 'list-title', text: 'По темам' }));
      page.appendChild(el('div', { class: 'topics' }, r.topics.map(topicRow)));
    }
    if (r.mistakesTitle) {
      page.appendChild(el('h2', { class: 'list-title', text: r.mistakesTitle }));
      r.mistakes.forEach(function (g) { page.appendChild(mistakeGroup(g)); });
    }
    app.appendChild(page);
    app.focus({ preventScroll: true });
  }
})();
