(function () {
  'use strict';

  var ROUND_SIZE = 10;
  var STORE_KEY = 'lt-trainer-v1';
  var app = document.getElementById('app');

  var groups = (window.LT_DATA || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  var sections = {};
  var itemsByKey = {};

  groups.forEach(function (g) {
    g.sections.forEach(function (s) {
      s.group = g;
      sections[s.id] = s;
      (s.items || []).forEach(function (it, i) {
        it.key = s.id + ':' + i;
        itemsByKey[it.key] = it;
      });
    });
  });
  groups.forEach(function (g) {
    g.sections.forEach(function (s) {
      if (!s.from) return;
      s.items = [];
      s.from.forEach(function (id) {
        if (sections[id] && !sections[id].from) s.items = s.items.concat(sections[id].items);
      });
    });
  });

  var store = readStore();
  var keyHandler = null;

  document.addEventListener('keydown', function (e) {
    if (keyHandler && !e.altKey && !e.ctrlKey && !e.metaKey) keyHandler(e);
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
        data.best = data.best || {};
        data.mistakes = data.mistakes || {};
        return data;
      }
    } catch (e) {
      return { best: {}, mistakes: {} };
    }
    return { best: {}, mistakes: {} };
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
    app.textContent = '';
    document.title = title ? title + ' — тренажёр литовского' : 'Тренажёр литовского языка';
    window.scrollTo(0, 0);
  }

  function mistakeItems() {
    return Object.keys(store.mistakes)
      .map(function (k) { return itemsByKey[k]; })
      .filter(Boolean);
  }

  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var id = parts[1];
    if (parts[0] === 's' && id === 'mistakes') {
      var items = mistakeItems();
      if (items.length) return play({ id: 'mistakes', title: 'Работа над ошибками', items: items }, false);
      return home();
    }
    if (parts[0] === 's' && sections[id] && sections[id].items.length) {
      if (parts[2] === 'play') return play(sections[id], parts[3] === 'all');
      return showSection(sections[id]);
    }
    return home();
  }

  function bestText(s) {
    var best = store.best[s.id];
    return best ? 'лучший результат: ' + best.score + ' из ' + best.total : '';
  }

  function home() {
    clear();
    app.appendChild(el('h1', { text: 'Тренажёр литовского языка' }));
    app.appendChild(el('p', {
      class: 'lead',
      text: 'Выбери раздел. В раунде ' + ROUND_SIZE + ' заданий; во всех заданиях ответ выбирается из вариантов.'
    }));
    var mist = mistakeItems();
    if (mist.length) {
      app.appendChild(el('div', { class: 'grid' }, [
        el('a', { class: 'tile alert', href: '#/s/mistakes' }, [
          el('b', { text: 'Работа над ошибками' }),
          el('small', { text: 'Задания, в которых были ошибки. Правильный ответ убирает задание из списка.' }),
          el('span', { class: 'meta' }, [el('span', { text: countTasks(mist.length) })])
        ])
      ]));
    }
    groups.forEach(function (g) {
      app.appendChild(el('h2', { text: g.title }));
      if (g.subtitle) app.appendChild(el('p', { class: 'lead', text: g.subtitle }));
      var grid = el('div', { class: 'grid' });
      g.sections.forEach(function (s) {
        if (!s.items.length) return;
        var meta = [el('span', { text: countTasks(s.items.length) })];
        var best = bestText(s);
        if (best) meta.push(el('span', { class: 'badge', text: best }));
        grid.appendChild(el('a', { class: 'tile', href: '#/s/' + s.id }, [
          el('b', { text: s.title }),
          s.subtitle ? el('small', { text: s.subtitle }) : null,
          el('span', { class: 'meta' }, meta)
        ]));
      });
      app.appendChild(grid);
    });
  }

  function showSection(s) {
    clear(s.title);
    var n = s.items.length;
    var best = bestText(s);
    app.appendChild(el('a', { class: 'back', href: '#/', text: '← Все разделы' }));
    app.appendChild(el('p', { class: 'kicker', text: s.group.title }));
    app.appendChild(el('h1', { text: s.title }));
    if (s.subtitle) app.appendChild(el('p', { class: 'lead', text: s.subtitle }));
    app.appendChild(el('p', { class: 'meta-line', text: countTasks(n) + (best ? ' · ' + best : '') }));
    var acts = el('div', { class: 'actions' });
    acts.appendChild(el('a', {
      class: 'btn primary',
      href: '#/s/' + s.id + '/play',
      text: n > ROUND_SIZE ? 'Начать раунд' : 'Начать'
    }));
    if (n > ROUND_SIZE) {
      acts.appendChild(el('a', { class: 'btn', href: '#/s/' + s.id + '/play/all', text: 'Все задания подряд' }));
    }
    app.appendChild(acts);
    if (s.rule) {
      app.appendChild(el('h2', { text: 'Правило' }));
      app.appendChild(el('div', { class: 'card rule', html: s.rule }));
    }
  }

  function play(section, all) {
    var pool = shuffle(section.items.slice());
    var queue = all ? pool : pool.slice(0, ROUND_SIZE);
    step({ section: section, queue: queue, index: 0, correct: 0, wrong: [], all: all });
  }

  function step(state) {
    var s = state.section;
    var item = state.queue[state.index];
    clear(s.title);
    var backHref = s.id === 'mistakes' ? '#/' : '#/s/' + s.id;
    app.appendChild(el('a', { class: 'back', href: backHref, text: '← ' + (s.id === 'mistakes' ? 'Все разделы' : s.title) }));
    var fill = el('i');
    fill.style.transform = 'scaleX(' + (state.index / state.queue.length) + ')';
    app.appendChild(el('div', { class: 'progress' }, [
      el('span', { text: (state.index + 1) + ' из ' + state.queue.length }),
      el('div', { class: 'bar' }, [fill])
    ]));
    var render = item.type === 'match' ? renderMatch : renderChoice;
    var card = render(item, function (ok) {
      record(item, ok);
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
  }

  function record(item, ok) {
    if (!item.key) return;
    if (ok) delete store.mistakes[item.key];
    else store.mistakes[item.key] = 1;
    writeStore();
  }

  function sentenceNode(text, answer, ok) {
    var p = el('p', { class: 'sentence', lang: 'lt' });
    var parts = String(text).split('___');
    var gap = null;
    parts.forEach(function (part, i) {
      if (i > 0) {
        gap = el('span', { class: 'gap' + (answer ? (ok ? ' ok' : ' bad') : '') , text: answer || ' ' });
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
    return 'Стоит перечитать правило раздела и пройти раунд снова.';
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
    return li;
  }

  function finish(state) {
    var s = state.section;
    var total = state.queue.length;
    var score = state.correct;
    if (s.id !== 'mistakes') {
      var prev = store.best[s.id];
      var better = !prev || score / total > prev.score / prev.total ||
        (score / total === prev.score / prev.total && total > prev.total);
      if (better) store.best[s.id] = { score: score, total: total };
      writeStore();
    }
    clear(s.title);
    var backHref = s.id === 'mistakes' ? '#/' : '#/s/' + s.id;
    app.appendChild(el('a', { class: 'back', href: backHref, text: '← ' + (s.id === 'mistakes' ? 'Все разделы' : s.title) }));
    app.appendChild(el('h1', { text: 'Результат' }));
    app.appendChild(el('p', { class: 'score', text: score + ' из ' + total }));
    app.appendChild(el('p', { class: 'lead', text: verdict(score, total) }));
    var again = el('button', { class: 'btn primary', type: 'button', text: s.id === 'mistakes' ? 'Ещё раз' : 'Ещё раунд' });
    again.addEventListener('click', function () {
      if (s.id === 'mistakes') {
        var items = mistakeItems();
        if (items.length) play({ id: 'mistakes', title: s.title, items: items }, false);
        else home();
      } else {
        play(s, state.all);
      }
    });
    var acts = el('div', { class: 'actions' }, [again]);
    acts.appendChild(el('a', { class: 'btn', href: '#/', text: 'Все разделы' }));
    app.appendChild(acts);
    if (state.wrong.length) {
      app.appendChild(el('h2', { text: 'Ошибки' }));
      app.appendChild(el('ul', { class: 'mist' }, state.wrong.map(mistakeNode)));
    }
  }
})();
