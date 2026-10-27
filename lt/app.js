(function () {
  'use strict';

  var STORE_KEY = 'lt-trainer-v1';
  var app = document.getElementById('app');

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

  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (hint.dialog.open) return;
    if (e.key === '?' && hintSection) {
      e.preventDefault();
      openHint(hintSection);
      return;
    }
    if (keyHandler) keyHandler(e);
  });
  window.addEventListener('hashchange', route);

  if (/^https?:$/.test(location.protocol)) {
    var siteLink = document.getElementById('site-link');
    if (siteLink) siteLink.hidden = false;
  }
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

  function clear(title) {
    keyHandler = null;
    hintSection = null;
    if (hint.dialog.open) closeHint();
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
    dialog.appendChild(el('div', { class: 'hint-inner' }, [el('div', { class: 'hint-head' }, [title, close]), body, back]));
    close.addEventListener('click', closeHint);
    back.addEventListener('click', closeHint);
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeHint();
    });
    document.body.appendChild(dialog);
    return { dialog: dialog, title: title, body: body, back: back };
  }

  function openHint(section) {
    hint.title.textContent = section.title;
    hint.body.innerHTML = section.rule || '<p>Для этого задания правила нет.</p>';
    if (typeof hint.dialog.showModal === 'function') hint.dialog.showModal();
    else hint.dialog.setAttribute('open', '');
    hint.dialog.querySelector('.hint-inner').scrollTop = 0;
    hint.back.focus({ preventScroll: true });
  }

  function closeHint() {
    if (typeof hint.dialog.close === 'function' && hint.dialog.open) hint.dialog.close();
    else hint.dialog.removeAttribute('open');
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

  function lastText(t) {
    var last = store.last[t.id];
    return last ? 'прошлый раз: ' + last.correct + ' из ' + last.answered : '';
  }

  function home() {
    clear();
    app.appendChild(el('h1', { text: 'Тренажёр литовского языка' }));
    app.appendChild(el('p', {
      class: 'lead',
      text: 'Выбери тему — тест начнётся сразу. Кнопка «? Подсказка» в любой момент покажет правило к заданию, ' +
        '«Стоп. Оценить результат» закончит тест и покажет ошибки.'
    }));
    var mist = mistakeItems();
    if (mist.length) {
      app.appendChild(el('div', { class: 'grid' }, [
        el('a', { class: 'tile alert', href: '#/t/mistakes' }, [
          el('b', { text: 'Работа над ошибками' }),
          el('small', { text: 'Задания, в которых были ошибки. Правильный ответ убирает задание из списка.' }),
          el('span', { class: 'meta' }, [el('span', { text: countTasks(mist.length) })])
        ])
      ]));
    }
    groups.forEach(function (g) {
      var list = (g.tests || []).filter(function (t) { return t.items.length; });
      if (!list.length) return;
      app.appendChild(el('h2', { text: g.title }));
      var grid = el('div', { class: 'grid' });
      list.forEach(function (t) {
        var meta = [el('span', { text: countTasks(t.items.length) })];
        var last = lastText(t);
        if (last) meta.push(el('span', { class: 'badge', text: last }));
        grid.appendChild(el('a', { class: 'tile', href: '#/t/' + t.id }, [
          el('b', { text: t.title }),
          t.subtitle ? el('small', { text: t.subtitle }) : null,
          el('span', { class: 'meta' }, meta)
        ]));
      });
      app.appendChild(grid);
    });
  }

  function start(test) {
    step({ test: test, queue: shuffle(test.items.slice()), index: 0, answered: 0, correct: 0, wrong: [] });
  }

  function step(state) {
    var t = state.test;
    var item = state.queue[state.index];
    clear(t.title);
    hintSection = item.section && item.section.rule ? item.section : null;
    var top = el('div', { class: 'quiz-top' }, [el('a', { class: 'back', href: '#/', text: '← Все темы' })]);
    if (hintSection) {
      var hintBtn = el('button', { class: 'hint-btn', type: 'button', 'aria-label': 'Подсказка: правило к заданию' }, [
        el('span', { class: 'q', 'aria-hidden': 'true', text: '?' }),
        el('span', { text: 'Подсказка' })
      ]);
      hintBtn.addEventListener('click', function () { openHint(hintSection); });
      top.appendChild(hintBtn);
    }
    app.appendChild(top);
    app.appendChild(el('p', { class: 'kicker', text: t.title }));
    var fill = el('i');
    fill.style.transform = 'scaleX(' + (state.index / state.queue.length) + ')';
    app.appendChild(el('div', { class: 'progress' }, [
      el('span', { text: (state.index + 1) + ' из ' + state.queue.length }),
      el('div', { class: 'bar' }, [fill])
    ]));
    var render = item.type === 'match' ? renderMatch : renderChoice;
    var card = render(item, function (ok) {
      record(item, ok);
      state.answered++;
      if (ok) state.correct++;
      else state.wrong.push(item);
      var last = state.index + 1 >= state.queue.length;
      var next = el('button', { class: 'btn primary next', type: 'button', text: last ? 'Результат' : 'Дальше' });
      next.addEventListener('click', function () {
        state.index++;
        if (state.index >= state.queue.length) finish(state);
        else step(state);
      });
      card.appendChild(next);
      next.focus({ preventScroll: true });
      next.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
    app.appendChild(card);
    var stop = el('button', { class: 'btn stop', type: 'button', text: 'Стоп. Оценить результат' });
    stop.addEventListener('click', function () { finish(state); });
    app.appendChild(el('div', { class: 'stop-row' }, [stop]));
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
        gap = el('span', { class: 'gap', text: ' ' });
        p.appendChild(gap);
      }
      p.appendChild(document.createTextNode(part));
    });
    return { node: p, gap: gap };
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
    var list = el('div', { class: 'options' + (short && options.length === 3 ? ' cols' : '') });
    var answered = false;
    var buttons = options.map(function (o, i) {
      var b = el('button', { class: 'opt', type: 'button', lang: item.optLang || 'lt' }, [
        el('span', { class: 'k', 'aria-hidden': 'true', text: String(i + 1) }),
        el('span', { text: o })
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
        if (options[i] === item.answer) x.classList.add('ok');
      });
      if (!ok) b.classList.add('bad');
      if (sent.gap) {
        sent.gap.textContent = item.answer;
        sent.gap.classList.add(ok ? 'ok' : 'bad');
      }
      var fb = el('div', { class: 'feedback ' + (ok ? 'ok' : 'bad'), role: 'status' }, [
        el('b', { text: ok ? 'Teisingai! Правильно.' : 'Neteisingai. Правильный ответ: ' + item.answer })
      ]);
      if (item.note) fb.appendChild(el('p', { class: 'note', text: item.note }));
      card.appendChild(fb);
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
      var fb = el('div', { class: 'feedback ' + (ok ? 'ok' : 'bad'), role: 'status' }, [
        el('b', { text: ok ? 'Teisingai! Все пары без ошибок.' : 'Все пары собраны. Ошибок: ' + mistakes + '.' })
      ]);
      if (item.note) fb.appendChild(el('p', { class: 'note', text: item.note }));
      card.appendChild(fb);
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
      var link = el('button', { class: 'linkbtn', type: 'button', text: '? Правило: ' + item.section.title });
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
    clear(t.title);
    app.appendChild(el('a', { class: 'back', href: '#/', text: '← Все темы' }));
    app.appendChild(el('p', { class: 'kicker', text: t.title }));
    app.appendChild(el('h1', { text: 'Результат' }));
    if (answered === 0) {
      app.appendChild(el('p', { class: 'lead', text: 'Ответов пока нет: тест остановлен до первого ответа.' }));
    } else {
      app.appendChild(el('p', { class: 'score', text: correct + ' из ' + answered }));
      app.appendChild(el('p', {
        class: 'meta-line',
        text: answered < total ? 'Отвечено ' + answered + ' из ' + total + '.' : 'Тема пройдена полностью: ' + total + ' из ' + total + '.'
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
      app.appendChild(el('h2', { text: 'Ошибки: ' + state.wrong.length }));
      app.appendChild(el('ul', { class: 'mist' }, state.wrong.map(mistakeNode)));
    }
  }
})();
