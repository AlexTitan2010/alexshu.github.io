(function () {
  'use strict';

  var STORE_KEY = 'lt-trainer-v1';
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

  var groups = (window.LT_DATA || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  var sections = {};
  var tests = {};
  var itemsByKey = {};

  groups.forEach(function (g) {
    (g.sections || []).forEach(function (s) {
      sections[s.id] = s;
      (s.items || []).forEach(function (it, i) {
        it.key = s.id + ':' + i;
        it.section = s;
        itemsByKey[it.key] = it;
      });
    });
  });
  groups.forEach(function (g) {
    (g.tests || []).forEach(function (t) {
      t.items = [];
      t.from.forEach(function (id) {
        if (sections[id]) t.items = t.items.concat(sections[id].items);
      });
      tests[t.id] = t;
    });
  });

  var store = readStore();
  var keyHandler = null;
  var hintSection = null;
  var hint = buildHintDialog();
  var confirmBox = buildConfirmDialog();
  var siteNav = onSite ? buildSiteNav() : null;

  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (hint.dialog.open || confirmBox.dialog.open || (siteNav && siteNav.dialog.open)) return;
    if (e.key === '?' && hintSection) {
      e.preventDefault();
      openHint(hintSection);
      return;
    }
    if (keyHandler) keyHandler(e);
  });
  window.addEventListener('hashchange', route);
  route();

  function readStore() {
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      var data = raw ? JSON.parse(raw) : null;
      if (data && typeof data === 'object') {
        data.last = data.last || {};
        data.mistakes = data.mistakes || {};
        return data;
      }
    } catch (e) {
      return { last: {}, mistakes: {} };
    }
    return { last: {}, mistakes: {} };
  }

  function writeStore() {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (e) {
      return;
    }
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

  function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = list[i];
      list[i] = list[j];
      list[j] = t;
    }
    return list;
  }

  function plural(n, one, few, many) {
    var m10 = n % 10;
    var m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }

  function countTasks(n) {
    return n + ' ' + plural(n, 'задание', 'задания', 'заданий');
  }

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function testLabel(t) {
    return t.code ? t.code + ' · ' + t.title : t.title;
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
      a.addEventListener('click', function () { closeDialog(dialog); });
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
      if (!siteNav.opener) return;
      siteNav.opener.setAttribute('aria-expanded', 'false');
      siteNav.opener.focus({ preventScroll: true });
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
    return el('a', { class: 'back', href: '#/', text: '← Все темы' });
  }

  function clear(title) {
    keyHandler = null;
    hintSection = null;
    closeDialog(hint.dialog);
    closeDialog(confirmBox.dialog);
    if (siteNav) closeDialog(siteNav.dialog);
    app.textContent = '';
    document.title = title ? title + ' — тренажёр литовского' : 'Тренажёр литовского языка';
    window.scrollTo(0, 0);
  }

  function buildHintDialog() {
    var dialog = el('dialog', { class: 'hint', 'aria-labelledby': 'hint-title' });
    var title = el('h2', { id: 'hint-title' });
    var close = el('button', { class: 'hint-close', type: 'button', 'aria-label': 'Закрыть подсказку', text: '×' });
    var body = el('div', { class: 'rule' });
    var back = el('button', { class: 'btn primary hint-back', type: 'button', text: 'Вернуться к заданию' });
    var head = el('div', { class: 'hint-head' }, [
      el('div', { class: 'hint-titles' }, [el('span', { class: 'label', text: 'Подсказка · правило' }), title]),
      close
    ]);
    dialog.appendChild(el('div', { class: 'hint-inner' }, [head, body, back]));
    close.addEventListener('click', closeHint);
    back.addEventListener('click', closeHint);
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeHint();
    });
    document.body.appendChild(dialog);
    return { dialog: dialog, title: title, body: body, back: back };
  }

  function buildConfirmDialog() {
    var dialog = el('dialog', { class: 'hint confirm', 'aria-labelledby': 'confirm-title', 'aria-describedby': 'confirm-text' });
    var stats = el('p', { class: 'confirm-stats label' });
    var cancel = el('button', { class: 'btn', type: 'button', text: 'Отмена' });
    var ok = el('button', { class: 'btn danger', type: 'button', text: 'Сбросить' });
    dialog.appendChild(el('div', { class: 'hint-inner' }, [
      el('div', { class: 'hint-titles' }, [
        el('span', { class: 'label', text: 'Сброс данных' }),
        el('h2', { id: 'confirm-title', text: 'Сбросить данные?' })
      ]),
      el('p', {
        id: 'confirm-text',
        class: 'confirm-text',
        text: 'Сотрутся результаты пройденных тем и список «Работа над ошибками». Отменить сброс нельзя.'
      }),
      stats,
      el('div', { class: 'confirm-actions' }, [cancel, ok])
    ]));
    cancel.addEventListener('click', function () { closeDialog(dialog); });
    ok.addEventListener('click', resetData);
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeDialog(dialog);
    });
    document.body.appendChild(dialog);
    return { dialog: dialog, stats: stats, cancel: cancel };
  }

  function openDialog(dialog) {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }

  function closeDialog(dialog) {
    if (typeof dialog.close !== 'function') dialog.removeAttribute('open');
    else if (dialog.open) dialog.close();
  }

  function openHint(section) {
    hint.title.textContent = section.title;
    hint.body.innerHTML = section.rule || '<p>Для этого задания правила нет.</p>';
    openDialog(hint.dialog);
    hint.dialog.querySelector('.hint-inner').scrollTop = 0;
    hint.back.focus({ preventScroll: true });
  }

  function closeHint() {
    closeDialog(hint.dialog);
  }

  function askReset() {
    confirmBox.stats.textContent = 'Тем с результатом: ' + Object.keys(store.last).length +
      ' · Ошибок: ' + mistakeItems().length;
    openDialog(confirmBox.dialog);
    confirmBox.cancel.focus({ preventScroll: true });
  }

  function resetData() {
    store = { last: {}, mistakes: {} };
    writeStore();
    home('Данные сброшены');
    app.focus({ preventScroll: true });
  }

  function mistakeItems() {
    return Object.keys(store.mistakes)
      .map(function (k) { return itemsByKey[k]; })
      .filter(Boolean);
  }

  function testOfSection(id) {
    var found = null;
    groups.forEach(function (g) {
      (g.tests || []).forEach(function (t) {
        if (!found && t.from.indexOf(id) >= 0) found = t;
      });
    });
    return found;
  }

  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var id = parts[1];
    if (parts[0] === 't' && id === 'mistakes') {
      var items = mistakeItems();
      if (items.length) return start({ id: 'mistakes', title: 'Работа над ошибками', items: items });
      return home();
    }
    if (parts[0] === 't' && tests[id] && tests[id].items.length) return start(tests[id]);
    if (parts[0] === 's' && sections[id]) {
      var t = testOfSection(id);
      if (t) {
        location.replace('#/t/' + t.id);
        return undefined;
      }
    }
    return home();
  }

  function home(notice) {
    clear();
    var orbits = el('div', { class: 'orbits', 'aria-hidden': 'true' });
    orbits.innerHTML = ORBITS;
    app.appendChild(orbits);
    app.appendChild(el('div', { class: 'hero' }, [
      el('div', { class: 'hero-top' }, [el('p', { class: 'eyebrow label', text: 'Тренажёр · A1–A2' }), siteMenu()]),
      el('h1', { class: 'title', lang: 'lt' }, [el('span', { text: 'Lietuvių' }), el('span', { class: 'accent', text: 'kalba' })]),
      el('p', { class: 'lead' }, [
        'Выбери тему — тест начнётся сразу. Ответ выбирается из вариантов, печатать по-литовски не нужно. ' +
          'В задании: «?» — правило, ',
        el('span', { class: 'inline-ic', 'aria-hidden': 'true', html: ICONS.skip }),
        el('span', { class: 'sr', text: 'кнопка пропуска' }),
        ' — другой вопрос, «Стоп» — итог и ошибки.'
      ])
    ]));
    var mist = mistakeItems();
    var stored = Object.keys(store.last).length + Object.keys(store.mistakes).length;
    if (notice) app.appendChild(el('p', { class: 'notice label', role: 'status', text: notice }));
    if (mist.length || stored) {
      var tools = el('div', { class: 'tools' + (mist.length ? '' : ' solo') });
      if (mist.length) {
        tools.appendChild(el('a', { class: 'alert', href: '#/t/mistakes' }, [
          el('span', { class: 'alert-text' }, [
            el('span', { class: 'label', text: 'Работа над ошибками' }),
            el('span', { text: countTasks(mist.length) + ' ' + plural(mist.length, 'ждёт', 'ждут', 'ждут') + ' повторения' })
          ]),
          el('span', { class: 'arrow', 'aria-hidden': 'true', text: '→' })
        ]));
      }
      var reset = el('button', { class: 'reset', type: 'button' }, [
        el('span', { class: 'ic', 'aria-hidden': 'true', html: ICONS.reset }),
        el('span', { class: 'txt', text: 'Сброс данных' })
      ]);
      reset.addEventListener('click', askReset);
      tools.appendChild(reset);
      app.appendChild(tools);
    }
    groups.forEach(function (g) {
      var list = (g.tests || []).filter(function (t) { return t.items.length; });
      if (!list.length) return;
      var box = el('section', { class: 'group' }, [el('h2', { text: g.title })]);
      list.forEach(function (t) {
        var n = t.items.length;
        var last = store.last[t.id];
        box.appendChild(el('a', { class: 'row', href: '#/t/' + t.id }, [
          t.code ? el('span', { class: 'code', text: t.code }) : el('span', { class: 'code none', 'aria-hidden': 'true' }),
          el('span', { class: 'row-main' }, [
            el('span', { class: 'row-title', text: t.title }),
            t.subtitle ? el('span', { class: 'row-sub', text: t.subtitle }) : null
          ]),
          el('span', { class: 'row-meta' }, [
            el('span', null, [String(n), el('span', { class: 'sr', text: ' ' + plural(n, 'задание', 'задания', 'заданий') })]),
            last ? el('span', { class: 'row-last', title: 'Прошлый раз: ' + last.correct + ' из ' + last.answered }, [
              el('span', { class: 'sr', text: 'прошлый раз: ' }),
              last.correct + ' / ' + last.answered
            ]) : null
          ])
        ]));
      });
      app.appendChild(box);
    });
  }

  function start(test) {
    step({ test: test, queue: shuffle(test.items.slice()), index: 0, answered: 0, correct: 0, wrong: [] });
  }

  function step(state) {
    var t = state.test;
    var item = state.queue[state.index];
    var total = state.queue.length;
    clear(testLabel(t));
    hintSection = item.section && item.section.rule ? item.section : null;
    var actions = el('div', { class: 'quiz-actions' });
    var skip = null;
    if (total - state.index > 1) {
      skip = el('button', {
        class: 'icon-btn',
        type: 'button',
        title: 'Пропустить: другой вопрос',
        'aria-label': 'Пропустить вопрос и показать другой',
        html: ICONS.skip
      });
      skip.addEventListener('click', function () {
        state.queue.push(state.queue.splice(state.index, 1)[0]);
        step(state);
      });
      actions.appendChild(skip);
    }
    if (hintSection) {
      var hintBtn = el('button', { class: 'hint-btn', type: 'button', 'aria-label': 'Подсказка: правило к заданию' }, [
        el('span', { class: 'q', 'aria-hidden': 'true', text: '?' }),
        el('span', { class: 'hint-text', text: 'Подсказка' })
      ]);
      hintBtn.addEventListener('click', function () { openHint(hintSection); });
      actions.appendChild(hintBtn);
    }
    var menuBtn = siteMenu();
    if (menuBtn) actions.appendChild(menuBtn);
    app.appendChild(el('div', { class: 'quiz-top' }, [backLink(), actions]));
    app.appendChild(el('p', { class: 'eyebrow label', text: testLabel(t) }));
    var fill = el('i');
    fill.style.transform = 'scaleX(' + (state.index / total) + ')';
    app.appendChild(el('div', { class: 'progress' }, [
      el('span', { class: 'sr', text: 'Задание ' + (state.index + 1) + ' из ' + total }),
      el('span', { 'aria-hidden': 'true', text: pad(state.index + 1) + ' / ' + pad(total) }),
      el('div', { class: 'bar' }, [fill])
    ]));
    var stopRow = el('div', { class: 'stop-row' });
    var render = item.type === 'match' ? renderMatch : renderChoice;
    var card = render(item, function (ok) {
      if (skip) skip.hidden = true;
      record(item, ok);
      state.answered++;
      if (ok) state.correct++;
      else state.wrong.push(item);
      var last = state.index + 1 >= total;
      var next = el('button', { class: 'btn primary next', type: 'button' }, [
        last ? 'Результат' : 'Дальше',
        el('span', { 'aria-hidden': 'true', text: '→' })
      ]);
      next.addEventListener('click', function () {
        state.index++;
        if (state.index >= total) finish(state);
        else step(state);
      });
      app.insertBefore(next, stopRow);
      next.focus({ preventScroll: true });
      next.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
    app.appendChild(card);
    var stop = el('button', { class: 'btn stop', type: 'button', text: 'Стоп. Оценить результат' });
    stop.addEventListener('click', function () { finish(state); });
    stopRow.appendChild(stop);
    app.appendChild(stopRow);
  }

  function record(item, ok) {
    if (!item.key) return;
    if (ok) delete store.mistakes[item.key];
    else store.mistakes[item.key] = 1;
    writeStore();
  }

  function sentenceNode(text) {
    var p = el('p', { class: 'sentence', lang: 'lt' });
    var parts = String(text).split('___');
    var gap = null;
    parts.forEach(function (part, i) {
      if (i > 0) {
        gap = el('span', { class: 'gap', text: ' ' });
        p.appendChild(gap);
      }
      p.appendChild(document.createTextNode(part));
    });
    return { node: p, gap: gap };
  }

  function feedback(ok, label, parts, note) {
    var text = el('p', { class: 'fb-text' }, parts);
    if (note) text.appendChild(document.createTextNode(' ' + note));
    return el('div', { class: 'feedback ' + (ok ? 'ok' : 'bad'), role: 'status' }, [
      el('span', { class: 'label', lang: 'lt', text: label }),
      text
    ]);
  }

  function mark(button, kind) {
    button.classList.add(kind);
    button.querySelector('.ic').innerHTML = ICONS[kind];
  }

  function renderChoice(item, done) {
    var card = el('div', { class: 'card' });
    if (item.prompt) card.appendChild(el('p', { class: 'prompt', text: item.prompt }));
    var sent = sentenceNode(item.q);
    if (item.lang) sent.node.setAttribute('lang', item.lang);
    card.appendChild(sent.node);
    if (item.tr) card.appendChild(el('p', { class: 'tr', lang: 'ru', text: item.tr }));
    var options = item.fixed ? item.options.slice() : shuffle(item.options.slice());
    var short = options.every(function (o) { return o.length <= 14; });
    var cols = short && (options.length === 2 || options.length === 3);
    var list = el('div', { class: 'options' + (cols ? ' cols' : '') + (cols && options.length === 2 ? ' two' : '') });
    var answered = false;
    var buttons = options.map(function (o, i) {
      var b = el('button', { class: 'opt', type: 'button', lang: item.optLang || 'lt' }, [
        el('span', { class: 'k', 'aria-hidden': 'true', text: pad(i + 1) }),
        el('span', { text: o }),
        el('span', { class: 'ic', 'aria-hidden': 'true' })
      ]);
      b.addEventListener('click', function () { choose(o, b); });
      list.appendChild(b);
      return b;
    });
    card.appendChild(list);
    keyHandler = function (e) {
      var n = parseInt(e.key, 10);
      if (n >= 1 && n <= buttons.length) {
        e.preventDefault();
        buttons[n - 1].click();
      }
    };

    function choose(o, b) {
      if (answered) return;
      answered = true;
      keyHandler = null;
      var ok = o === item.answer;
      buttons.forEach(function (x, i) {
        x.disabled = true;
        if (options[i] === item.answer) mark(x, 'ok');
      });
      if (!ok) mark(b, 'bad');
      if (sent.gap) {
        sent.gap.textContent = item.answer;
        sent.gap.classList.add(ok ? 'ok' : 'bad');
      }
      card.appendChild(ok
        ? feedback(true, 'Teisingai', ['Правильно.'], item.note)
        : feedback(false, 'Neteisingai', [
          'Правильный ответ: ',
          el('b', { class: 'ans', lang: item.optLang || 'lt', text: item.answer }),
          '.'
        ], item.note));
      done(ok);
    }
    return card;
  }

  function renderMatch(item, done) {
    var card = el('div', { class: 'card' });
    card.appendChild(el('p', { class: 'prompt', text: item.prompt || 'Соедини пары: нажми слово слева, потом его пару справа.' }));
    var pairs = item.pairs;
    var left = shuffle(pairs.map(function (p, i) { return { t: p[0], i: i }; }));
    var right = shuffle(pairs.map(function (p, i) { return { t: p[1], i: i }; }));
    var selected = null;
    var matched = 0;
    var mistakes = 0;
    var finished = false;
    var colL = el('div', { class: 'col' });
    var colR = el('div', { class: 'col' });

    function tile(entry, side, col) {
      var lang = side === 'L' ? (item.leftLang || 'lt') : (item.rightLang || 'ru');
      var b = el('button', { class: 'tilebtn', type: 'button', lang: lang, text: entry.t });
      b.addEventListener('click', function () { pick({ b: b, i: entry.i, side: side }); });
      col.appendChild(b);
    }
    left.forEach(function (e) { tile(e, 'L', colL); });
    right.forEach(function (e) { tile(e, 'R', colR); });
    card.appendChild(el('div', { class: 'match' }, [colL, colR]));

    function pick(p) {
      if (finished || p.b.disabled) return;
      if (!selected) {
        selected = p;
        p.b.classList.add('sel');
        return;
      }
      if (selected.b === p.b) {
        p.b.classList.remove('sel');
        selected = null;
        return;
      }
      if (selected.side === p.side) {
        selected.b.classList.remove('sel');
        selected = p;
        p.b.classList.add('sel');
        return;
      }
      var a = selected;
      selected = null;
      a.b.classList.remove('sel');
      if (a.i === p.i) {
        [a.b, p.b].forEach(function (x) {
          x.classList.add('done');
          x.disabled = true;
        });
        matched++;
        if (matched === pairs.length) complete();
        return;
      }
      mistakes++;
      [a.b, p.b].forEach(function (x) {
        x.classList.add('miss');
        setTimeout(function () { x.classList.remove('miss'); }, 450);
      });
    }

    function complete() {
      finished = true;
      var ok = mistakes === 0;
      card.appendChild(ok
        ? feedback(true, 'Teisingai', ['Все пары без ошибок.'], item.note)
        : feedback(false, 'Su klaidomis', ['Все пары собраны. Ошибок: ' + mistakes + '.'], item.note));
      done(ok);
    }
    return card;
  }

  function verdict(score, total) {
    var r = score / total;
    if (r === 1) return 'Puiku! Без единой ошибки.';
    if (r >= 0.8) return 'Labai gerai! Почти всё верно.';
    if (r >= 0.5) return 'Neblogai. Посмотри ошибки ниже и попробуй ещё раз.';
    return 'Стоит открыть подсказки к ошибкам ниже и пройти тему снова.';
  }

  function mistakeNode(item) {
    if (item.type === 'match') {
      return el('li', null, [
        el('span', { text: item.prompt || 'Пары' }),
        el('span', { class: 'sub', text: item.pairs.map(function (p) { return p[0] + ' — ' + p[1]; }).join(' · ') })
      ]);
    }
    var q = String(item.q);
    var li = el('li', { lang: item.lang || 'lt' });
    if (q.indexOf('___') >= 0) {
      var parts = q.split('___');
      parts.forEach(function (part, i) {
        if (i > 0) li.appendChild(el('span', { class: 'ans', lang: item.optLang || 'lt', text: item.answer }));
        li.appendChild(document.createTextNode(part));
      });
    } else {
      li.appendChild(document.createTextNode(q + ' → '));
      li.appendChild(el('span', { class: 'ans', lang: item.optLang || 'lt', text: item.answer }));
    }
    if (item.tr) li.appendChild(el('span', { class: 'sub', lang: 'ru', text: item.tr }));
    if (item.note) li.appendChild(el('span', { class: 'sub', lang: 'ru', text: item.note }));
    if (item.section && item.section.rule) {
      var link = el('button', { class: 'linkbtn', type: 'button', lang: 'ru' }, [
        el('span', { class: 'q-mini', 'aria-hidden': 'true', text: '?' }),
        'Правило: ' + item.section.title
      ]);
      link.addEventListener('click', function () { openHint(item.section); });
      li.appendChild(link);
    }
    return li;
  }

  function finish(state) {
    var t = state.test;
    var total = state.queue.length;
    var answered = state.answered;
    var correct = state.correct;
    if (t.id !== 'mistakes' && answered > 0) {
      store.last[t.id] = { correct: correct, answered: answered, total: total };
      writeStore();
    }
    clear(testLabel(t));
    app.appendChild(el('div', { class: 'quiz-top' }, [backLink(), siteMenu()]));
    app.appendChild(el('p', { class: 'eyebrow label', text: testLabel(t) }));
    app.appendChild(el('h1', { class: 'result-title', text: 'Результат' }));
    if (answered === 0) {
      app.appendChild(el('p', { class: 'lead', text: 'Ответов пока нет: тест остановлен до первого ответа.' }));
    } else {
      app.appendChild(el('p', { class: 'score' }, [String(correct), ' ', el('small', { text: 'из ' + answered })]));
      app.appendChild(el('p', {
        class: 'meta-line',
        text: answered < total ? 'Отвечено ' + answered + ' из ' + total : 'Тема пройдена полностью: ' + total + ' из ' + total
      }));
      app.appendChild(el('p', { class: 'lead', text: verdict(correct, answered) }));
    }
    var again = el('button', { class: 'btn primary', type: 'button', text: t.id === 'mistakes' ? 'Ещё раз' : 'Пройти заново' });
    again.addEventListener('click', function () {
      if (t.id === 'mistakes') {
        var items = mistakeItems();
        if (items.length) start({ id: 'mistakes', title: t.title, items: items });
        else home();
      } else {
        start(t);
      }
    });
    var acts = el('div', { class: 'actions' }, [again]);
    acts.appendChild(el('a', { class: 'btn', href: '#/', text: 'Все темы' }));
    app.appendChild(acts);
    if (state.wrong.length) {
      app.appendChild(el('h2', { class: 'list-title', text: 'Ошибки: ' + state.wrong.length }));
      app.appendChild(el('ul', { class: 'mist' }, state.wrong.map(mistakeNode)));
    }
  }
})();
