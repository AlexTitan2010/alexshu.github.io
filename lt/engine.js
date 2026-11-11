(function (root) {
  'use strict';

  var PORTION = 20;
  var STRETCH = 4;
  var RUN = 6;
  var RUNS_A_PORTION = 2;
  var RETURN_GAP = 3;
  var LADDER = [1, 3, 7, 16, 35, 70];
  var DUE_MISTAKES = 10;
  var TOPICS_A_DAY = 2;
  var PLAN = 36;
  var NEW_MIN = 10;
  var NEW_MAX = 20;
  var DAY_START = 4;
  var LESSON_MISTAKES = 4;
  var MISTAKE_SESSION = 20;
  var CLOSED_STAGE = 2;
  var PASS = 5;
  var HOLD = 4;
  var GREEN_LEVEL = 3;
  var WEAK_MIN = 3;
  var SEC_CHOICE = 15;
  var SEC_BOARD = 35;
  var DAY_MS = 86400000;
  var HOUR_MS = 3600000;
  var MINUTE_MS = 60000;
  var KEY_V1 = 'lt-trainer-v1';
  var KEY_V2 = 'lt-trainer-v2';
  var APP = 'lt-trainer';
  var VERSION = 2;
  var FILE_NAME = 'lt-progress.json';
  var GAP = '___';
  var WEEKDAYS = ['в воскресенье', 'в понедельник', 'во вторник', 'в среду', 'в четверг', 'в пятницу', 'в субботу'];
  var NOTICE = 'Тренажёр обновлён: ошибки перенесены, прошлые результаты уроков не переносятся.';
  var BAD_FILE = 'Этот файл не подходит.';
  var NO_CURRENT = 'Чтобы сюда попадало новое, начни урок из списка.';
  var TITLE_TODAY = 'Сегодня';
  var TITLE_MISTAKES = 'Работа над ошибками';

  function dict() {
    return Object.create(null);
  }

  function plural(n, one, few, many) {
    var m10 = Math.abs(n) % 10;
    var m100 = Math.abs(n) % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }

  function count(n, one, few, many) {
    return n + ' ' + plural(n, one, few, many);
  }

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function inDays(n) {
    return n <= 1 ? 'завтра' : 'через ' + count(n, 'день', 'дня', 'дней');
  }

  function minutes(choice, boards) {
    return Math.ceil((choice * SEC_CHOICE + boards * SEC_BOARD) / 60);
  }

  function minutesOf(tasks) {
    var boards = 0;
    tasks.forEach(function (t) {
      if (t.type === 'match') boards++;
    });
    return minutes(tasks.length - boards, boards);
  }

  function about(n) {
    return 'около ' + count(n, 'минуты', 'минут', 'минут');
  }

  function dayNumber(ms, offsetMinutes) {
    return Math.floor((ms - (offsetMinutes || 0) * MINUTE_MS - DAY_START * HOUR_MS) / DAY_MS);
  }

  function weekday(day) {
    return (((day + 4) % 7) + 7) % 7;
  }

  function hash(text) {
    var h = 2166136261;
    var s = String(text);
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    var out = h.toString(36);
    while (out.length < 7) out = '0' + out;
    return out.slice(-6);
  }

  function taskKey(sectionId, item) {
    if (item && item.type === 'match') {
      return sectionId + ':' + hash((item.pairs || []).map(function (p) { return p[0]; }).join('|'));
    }
    return sectionId + ':' + hash(item.q + '|' + item.answer);
  }

  function lcp(a, b) {
    var p = String(a).toLowerCase();
    var q = String(b).toLowerCase();
    var i = 0;
    while (i < p.length && i < q.length && p.charAt(i) === q.charAt(i)) i++;
    return i;
  }

  function spaced(options) {
    return options.some(function (o) { return /\s/.test(o); });
  }

  function stem(options, answer, chosen) {
    if (spaced(options)) return 0;
    var n = 0;
    if (chosen === undefined || chosen === null || chosen === answer) {
      options.forEach(function (o) {
        if (o !== answer) n = Math.max(n, lcp(answer, o));
      });
      n = Math.min(n, answer.length - 1);
    } else {
      n = Math.min(lcp(answer, chosen), answer.length - 1, chosen.length - 1);
    }
    return n >= 2 ? n : 0;
  }

  function parts(word, n) {
    return { stem: word.slice(0, n), tail: word.slice(n) };
  }

  function split(options, answer, chosen) {
    var n = stem(options, answer, chosen);
    var wrong = chosen !== undefined && chosen !== null && chosen !== answer;
    return { length: n, answer: parts(answer, n), chosen: wrong ? parts(chosen, n) : null };
  }

  function recall(item) {
    if (!item || item.type === 'match' || item.optLang) return null;
    var q = String(item.q || '');
    var tr = item.tr ? String(item.tr) : '';
    var gap = q.indexOf(GAP) >= 0;
    if (tr && tr.indexOf(GAP) >= 0) {
      var m = /^(.+?) → /.exec(item.note || '');
      if (m && (item.options || []).indexOf(m[1]) >= 0) return { kind: 'base', base: m[1] };
      return null;
    }
    if (tr) return gap ? { kind: 'tr', base: null } : null;
    if (gap && /[→—]/.test(q)) return { kind: 'q', base: null };
    return null;
  }

  function advance(level, passed) {
    var next = passed ? Math.min(level + 1, LADDER.length - 1) : 0;
    return [next, LADDER[next]];
  }

  function isOpen(r) {
    return !!r && r.length > 2;
  }

  function isPending(r, day) {
    return isOpen(r) && r[3] <= day && !(r[1] >= day && r[0] !== 0);
  }

  function shuffle(list, rnd) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = list[i];
      list[i] = list[j];
      list[j] = t;
    }
    return list;
  }

  function stableSort(list, compare) {
    return list.map(function (v, i) { return { v: v, i: i }; })
      .sort(function (a, b) { return compare(a.v, b.v) || a.i - b.i; })
      .map(function (e) { return e.v; });
  }

  function seeded(seed) {
    var s = (Math.abs(Math.floor(seed)) % 2147483646) + 1;
    return function () {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  function interleave(cards, rnd) {
    var groups = dict();
    var ids = [];
    var out = [];
    var prev = null;
    var left = cards.length;
    shuffle(cards.slice(), rnd).forEach(function (c) {
      var id = c.task.section.id;
      if (!groups[id]) {
        groups[id] = [];
        ids.push(id);
      }
      groups[id].push(c);
    });
    function choose() {
      var must = null;
      var open = [];
      var weight = 0;
      ids.forEach(function (id) {
        var n = groups[id].length;
        if (!n || id === prev) return;
        if (n * 2 > left) must = id;
        open.push(id);
        weight += n;
      });
      if (must !== null) return must;
      if (!open.length) return prev;
      var roll = rnd() * weight;
      var pick = open[open.length - 1];
      open.some(function (id) {
        roll -= groups[id].length;
        if (roll < 0) pick = id;
        return roll < 0;
      });
      return pick;
    }
    while (left > 0) {
      var id = choose();
      out.push(groups[id].pop());
      prev = id;
      left--;
    }
    return out;
  }

  function makeTask(section, item, index) {
    var board = item.type === 'match';
    return {
      key: taskKey(section.id, item),
      type: board ? 'match' : 'choice',
      section: section,
      index: index,
      q: board ? '' : String(item.q || ''),
      tr: item.tr || '',
      prompt: item.prompt || '',
      note: item.note || '',
      options: board ? [] : (item.options || []).slice(),
      answer: board ? '' : item.answer,
      pairs: board ? (item.pairs || []).map(function (p) { return [p[0], p[1]]; }) : [],
      lang: item.lang || '',
      optLang: item.optLang || '',
      leftLang: item.leftLang || '',
      rightLang: item.rightLang || '',
      fixed: !!item.fixed,
      recall: recall(item),
      src: item
    };
  }

  function buildModel(data) {
    var model = {
      groups: [],
      tests: [],
      sections: [],
      tasks: [],
      testById: dict(),
      sectionById: dict(),
      taskByKey: dict()
    };
    var list = [];
    (Array.isArray(data) ? data : []).forEach(function (g, i) {
      if (g && typeof g === 'object') list.push({ g: g, i: i });
    });
    list.sort(function (a, b) { return ((a.g.order || 0) - (b.g.order || 0)) || (a.i - b.i); });
    list.forEach(function (entry) {
      (entry.g.sections || []).forEach(function (s) {
        if (!s || !s.id || model.sectionById[s.id]) return;
        var section = {
          id: s.id,
          title: s.title || '',
          subtitle: s.subtitle || '',
          rule: s.rule || '',
          gist: s.gist || '',
          tasks: [],
          tests: [],
          src: s
        };
        (s.items || []).forEach(function (item, i) {
          if (!item || typeof item !== 'object') return;
          var task = makeTask(section, item, i);
          section.tasks.push(task);
          model.tasks.push(task);
          if (!model.taskByKey[task.key]) model.taskByKey[task.key] = task;
        });
        model.sectionById[s.id] = section;
        model.sections.push(section);
      });
    });
    list.forEach(function (entry) {
      var g = entry.g;
      var group = { title: g.title || '', subtitle: g.subtitle || '', order: g.order || 0, tests: [] };
      (g.tests || []).forEach(function (t) {
        if (!t || !t.id || model.testById[t.id]) return;
        var test = {
          id: t.id,
          code: t.code || '',
          title: t.title || '',
          subtitle: t.subtitle || '',
          label: t.code ? t.code + ' · ' + t.title : (t.title || ''),
          short: t.code || t.title || '',
          sections: [],
          tasks: [],
          mix: t.mix === true,
          index: 0,
          group: group,
          src: t
        };
        (t.from || []).forEach(function (id) {
          var section = model.sectionById[id];
          if (!section || test.sections.indexOf(section) >= 0) return;
          test.sections.push(section);
          test.tasks = test.tasks.concat(section.tasks);
        });
        if (!test.tasks.length) return;
        test.sections.forEach(function (section) { section.tests.push(test); });
        test.index = model.tests.length;
        model.tests.push(test);
        model.testById[test.id] = test;
        group.tests.push(test);
      });
      if (group.tests.length) model.groups.push(group);
    });
    model.tests.forEach(function (test) {
      if (test.mix) return;
      test.mix = test.sections.every(function (section) {
        return section.tests.some(function (other) {
          return other !== test && other.sections.length < test.sections.length &&
            other.sections.every(function (s) { return test.sections.indexOf(s) >= 0; });
        });
      });
    });
    return model;
  }

  function isDay(n) {
    return typeof n === 'number' && isFinite(n) && Math.floor(n) === n;
  }

  function isIndex(i, n) {
    return isDay(i) && i >= 0 && i < n;
  }

  function boardInput(task, value) {
    var wrong = value && typeof value === 'object' ? value.wrong : null;
    var n = task.pairs.length;
    var confused = [];
    var bad = false;
    if (!Array.isArray(wrong)) return null;
    wrong.forEach(function (m) {
      if (!Array.isArray(m) || m.length !== 2 || !isIndex(m[0], n) || !isIndex(m[1], n) || m[0] === m[1]) {
        bad = true;
        return;
      }
      m.forEach(function (i) {
        if (confused.indexOf(i) < 0) confused.push(i);
      });
    });
    return bad ? null : { misses: wrong.length, confused: confused };
  }

  function strings(list) {
    var out = [];
    (Array.isArray(list) ? list : []).forEach(function (x) {
      if (typeof x === 'string' && x && out.indexOf(x) < 0) out.push(x);
    });
    return out;
  }

  function cleanOld(raw) {
    var m = raw && typeof raw === 'object' ? strings(raw.m) : [];
    var l = raw && typeof raw === 'object' ? strings(raw.l) : [];
    m = m.filter(function (k) { return /^.+:\d+$/.test(k); });
    return m.length || l.length ? { m: m, l: l } : null;
  }

  function emptyState() {
    return { v: VERSION, it: dict(), sec: dict(), cur: null, fin: null, old: null };
  }

  function cleanState(raw) {
    var s = emptyState();
    if (!raw || typeof raw !== 'object') return s;
    var it = raw.it && typeof raw.it === 'object' ? raw.it : {};
    Object.keys(it).forEach(function (k) {
      var r = it[k];
      if (!Array.isArray(r) || r.length < 2) return;
      if (!(r[0] === 0 || r[0] === 1 || r[0] === 2) || !isDay(r[1])) return;
      if (r.length >= 4 && (r[2] === 0 || r[2] === 1) && isDay(r[3])) s.it[k] = [r[0], r[1], r[2], r[3]];
      else s.it[k] = [r[0], r[1]];
    });
    var sec = raw.sec && typeof raw.sec === 'object' ? raw.sec : {};
    Object.keys(sec).forEach(function (k) {
      var e = sec[k];
      if (!Array.isArray(e) || e.length < 2 || !isDay(e[0]) || !isDay(e[1])) return;
      s.sec[k] = [Math.max(0, Math.min(LADDER.length - 1, e[0])), e[1]];
    });
    if (typeof raw.cur === 'string' && raw.cur) s.cur = raw.cur;
    if (isDay(raw.fin)) s.fin = raw.fin;
    s.old = cleanOld(raw.old);
    return s;
  }

  function packState(s) {
    var out = { v: VERSION, it: s.it, sec: s.sec };
    if (s.cur) out.cur = s.cur;
    if (s.fin !== null) out.fin = s.fin;
    if (s.old) out.old = s.old;
    return out;
  }

  function decode(text) {
    var raw = null;
    try {
      raw = JSON.parse(text);
    } catch (e) {
      return null;
    }
    if (!raw || typeof raw !== 'object') return null;
    if (typeof raw.v === 'number' && raw.v > VERSION) return { newer: true, state: null };
    return raw.v === VERSION ? { newer: false, state: cleanState(raw) } : null;
  }

  function sameRecord(a, b) {
    var i = 0;
    if (!a || !b || a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function taskCareful(mine, theirs) {
    if (theirs.length !== mine.length) return theirs.length > mine.length;
    if (theirs.length > 2 && theirs[2] !== mine[2]) return theirs[2] < mine[2];
    if (theirs.length > 2 && theirs[3] !== mine[3]) return theirs[3] < mine[3];
    return theirs[0] !== mine[0] && (theirs[0] === 0 || mine[0] === 1);
  }

  function topicCareful(mine, theirs) {
    return theirs[0] < mine[0];
  }

  function storeWins(mine, theirs, seen, careful) {
    if (!mine) return true;
    if (sameRecord(theirs, mine) || sameRecord(theirs, seen)) return false;
    if (theirs[1] !== mine[1]) return theirs[1] > mine[1];
    return sameRecord(mine, seen) || careful(mine, theirs);
  }

  function create(options) {
    var opts = options || {};
    if (typeof opts.now !== 'function' || typeof opts.random !== 'function' || typeof opts.tzOffset !== 'function') {
      throw new TypeError('LTEngine.create needs now(), random() and tzOffset()');
    }
    var model = buildModel(opts.data);
    var storage = opts.storage || null;
    var clock = opts.now;
    var random = opts.random;
    var zone = opts.tzOffset;
    var notice = null;
    var lastText = null;
    var blind = false;
    var ownCur = false;
    var state = emptyState();
    state = load();

    function today() {
      var ms = clock();
      return dayNumber(ms, zone(ms));
    }

    function read(key) {
      if (!storage) return { ok: true, value: null };
      try {
        var value = storage.getItem(key);
        return { ok: true, value: value === undefined ? null : value };
      } catch (e) {
        return { ok: false, value: null };
      }
    }

    function put(key, text) {
      if (!storage) return false;
      try {
        storage.setItem(key, text);
        return storage.getItem(key) === text;
      } catch (e) {
        return false;
      }
    }

    function drop(key) {
      if (!storage) return false;
      try {
        storage.removeItem(key);
        return true;
      } catch (e) {
        return false;
      }
    }

    function write() {
      var text = JSON.stringify(packState(state));
      if (!put(KEY_V2, text)) return false;
      lastText = text;
      return true;
    }

    function merge(other, seen) {
      var changed = false;
      function take(name, careful) {
        Object.keys(other[name]).forEach(function (k) {
          if (!storeWins(state[name][k], other[name][k], seen[name][k], careful)) return;
          state[name][k] = other[name][k];
          changed = true;
        });
      }
      take('it', taskCareful);
      take('sec', topicCareful);
      if (other.fin !== null && other.fin <= today() && (state.fin === null || other.fin > state.fin)) {
        state.fin = other.fin;
        changed = true;
      }
      if (other.cur && other.cur !== state.cur && !ownCur) {
        state.cur = other.cur;
        changed = true;
      }
      if (other.old && !state.old) state.old = other.old;
      return changed;
    }

    function absorb(text) {
      var seen = lastText === null ? null : decode(lastText);
      var got = decode(text);
      lastText = text;
      blind = !!got && got.newer;
      return !!got && !got.newer && merge(got.state, seen && seen.state ? seen.state : emptyState());
    }

    function save() {
      var got = null;
      if (!storage || blind) return false;
      got = read(KEY_V2);
      if (got.ok && got.value !== null && got.value !== lastText) absorb(got.value);
      return !blind && write();
    }

    function reload() {
      var got = read(KEY_V2);
      if (!got.ok || (got.value === lastText && !blind)) return false;
      if (got.value !== null) return absorb(got.value);
      blind = false;
      if (lastText === null) return false;
      lastText = null;
      state = emptyState();
      notice = null;
      return true;
    }

    function curTest() {
      return state.cur ? model.testById[state.cur] || null : null;
    }

    function expire() {
      if (state.fin === null || state.fin <= today()) return false;
      state.fin = null;
      return true;
    }

    function settle(day) {
      var old = state.old;
      var keep = { m: [], l: [] };
      var cur = curTest();
      if (!old) return false;
      old.m.forEach(function (k) {
        var at = k.lastIndexOf(':');
        var section = model.sectionById[k.slice(0, at)];
        var index = Number(k.slice(at + 1));
        if (!section) {
          keep.m.push(k);
          return;
        }
        section.tasks.forEach(function (t) {
          if (t.index === index && !state.it[t.key]) state.it[t.key] = [0, day, 0, day];
        });
      });
      old.l.forEach(function (id) {
        var t = model.testById[id];
        if (!t) {
          keep.l.push(id);
        } else if (!t.mix && (!cur || t.index > cur.index)) {
          state.cur = id;
          cur = t;
        }
      });
      state.old = cleanOld(keep);
      return keep.m.length !== old.m.length || keep.l.length !== old.l.length;
    }

    function load() {
      var got = read(KEY_V2);
      var parsed = null;
      var stale = false;
      if (!got.ok) {
        blind = true;
        return emptyState();
      }
      lastText = got.value;
      if (got.value === null) return migrate();
      parsed = decode(got.value);
      if (!parsed || parsed.newer) {
        blind = !!parsed;
        return emptyState();
      }
      state = parsed.state;
      stale = expire();
      if (settle(today()) || stale) save();
      return state;
    }

    function migrate() {
      var got = read(KEY_V1);
      var old = null;
      if (!got.ok || got.value === null) return emptyState();
      try {
        old = JSON.parse(got.value);
      } catch (e) {
        return emptyState();
      }
      if (!old || typeof old !== 'object') return emptyState();
      var mistakes = old.mistakes && typeof old.mistakes === 'object' ? old.mistakes : {};
      var last = old.last && typeof old.last === 'object' ? old.last : {};
      if (Object.keys(mistakes).length || Object.keys(last).length) notice = NOTICE;
      state = emptyState();
      state.old = cleanOld({ m: Object.keys(mistakes), l: Object.keys(last) });
      settle(today());
      save();
      return state;
    }

    function unseenCount(test) {
      var n = 0;
      test.tasks.forEach(function (t) {
        if (!state.it[t.key]) n++;
      });
      return n;
    }

    function answeredCount(test) {
      return test.tasks.length - unseenCount(test);
    }

    function byDue(tasks) {
      return stableSort(tasks, function (a, b) {
        var p = state.it[a.key];
        var q = state.it[b.key];
        return (p[3] - q[3]) || (p[1] - q[1]);
      });
    }

    function pendingOf(tasks, day) {
      return byDue(tasks.filter(function (t) { return isPending(state.it[t.key], day); }));
    }

    function openOf(tasks) {
      return byDue(tasks.filter(function (t) { return isOpen(state.it[t.key]); }));
    }

    function countsOf(s) {
      var out = { answered: 0, mistakes: 0, topics: 0 };
      model.tasks.forEach(function (t) {
        var r = s.it[t.key];
        if (!r) return;
        out.answered++;
        if (isOpen(r)) out.mistakes++;
      });
      model.sections.forEach(function (section) {
        if (s.sec[section.id]) out.topics++;
      });
      return out;
    }

    function buildPortion(test, day, o) {
      var rnd = o.rnd;
      var used = dict();
      var seen = dict();
      var unseen = dict();
      var answered = dict();
      var introduced = dict();
      var runs = dict();
      var cards = [];
      var mixed = [];
      var extra = [];
      var lists = [];
      var pool = [];
      var late = [];
      var unseenTotal = 0;
      var taken = 0;
      var runCount = 0;
      var blocked = false;
      var cap = 0;
      var at = 0;

      function size() {
        return cards.length + mixed.length + extra.length;
      }

      function add(task, list) {
        used[task.key] = true;
        list.push({ task: task, block: o.block, run: null, sample: false, ret: false });
      }

      function need(r) {
        return (r[1] >= day ? 2 : 0) + (r[0] === 1 ? 1 : 0);
      }

      Object.keys(o.exclude || {}).forEach(function (k) { used[k] = true; });
      test.sections.forEach(function (s) {
        var list = [];
        var n = 0;
        s.tasks.forEach(function (t) {
          if (seen[t.key]) return;
          seen[t.key] = true;
          if (state.it[t.key]) n++;
          else if (!used[t.key]) list.push(t);
        });
        unseen[s.id] = list;
        answered[s.id] = n;
        unseenTotal += list.length;
      });

      test.sections.forEach(function (s) {
        var list = unseen[s.id];
        if (test.mix || answered[s.id] >= RUN) {
          introduced[s.id] = true;
          return;
        }
        if (!list.length || blocked || runCount >= RUNS_A_PORTION) return;
        var length = Math.min(RUN, list.length);
        if (cards.length + length > o.size) {
          blocked = true;
          return;
        }
        var boards = list.filter(function (t) { return t.type === 'match'; });
        var sentences = shuffle(list.filter(function (t) { return t.type !== 'match'; }), rnd);
        boards.slice(0, 1).concat(sentences, boards.slice(1)).slice(0, length).forEach(function (t, i) {
          used[t.key] = true;
          cards.push({ task: t, block: o.block, run: i === 0 ? 'first' : 'next', sample: false, ret: false });
        });
        unseen[s.id] = list.filter(function (t) { return !used[t.key]; });
        introduced[s.id] = true;
        runs[s.id] = length;
        runCount++;
        taken += length;
      });

      cap = !o.mistakes ? 0 : unseenTotal ? LESSON_MISTAKES : o.size;
      pendingOf(test.tasks, day).forEach(function (t) {
        if (cap <= 0 || used[t.key] || size() >= o.size) return;
        cap--;
        add(t, mixed);
      });

      test.sections.forEach(function (s) {
        if (introduced[s.id] && unseen[s.id].length) lists.push(shuffle(unseen[s.id].slice(), rnd));
      });
      at = lists.length ? Math.floor(rnd() * lists.length) : 0;
      while (lists.length && size() < o.size) {
        at = at % lists.length;
        add(lists[at].pop(), mixed);
        taken++;
        if (lists[at].length) at++;
        else lists.splice(at, 1);
      }
      if (o.stretch && unseenTotal - taken > 0 && unseenTotal - taken <= STRETCH) {
        lists.forEach(function (list) {
          list.forEach(function (t) {
            add(t, mixed);
            taken++;
          });
        });
      }

      if (o.fill && unseenTotal - taken === 0 && size() < o.size) {
        test.tasks.forEach(function (t) {
          var r = state.it[t.key];
          if (!r || used[t.key]) return;
          if (r[0] === 0 && r[1] >= day) late.push(t);
          else pool.push(t);
        });
        stableSort(shuffle(pool, rnd), function (a, b) {
          var p = state.it[a.key];
          var q = state.it[b.key];
          var rank = need(p) - need(q);
          if (rank) return rank;
          return p[1] < day && q[1] < day ? p[1] - q[1] : 0;
        }).forEach(function (t) {
          if (size() < o.size) add(t, extra);
        });
        if (!size()) {
          shuffle(late, rnd).forEach(function (t) {
            if (size() < o.size) add(t, extra);
          });
        }
      }

      return { cards: cards.concat(interleave(mixed, rnd), extra), runs: runs };
    }

    function lessonOptions(exclude) {
      return { size: PORTION, exclude: exclude, mistakes: true, fill: true, stretch: true, block: 'lesson', rnd: random };
    }

    function sampleFor(section, day, used, rnd) {
      var fresh = [];
      var old = [];
      var out = [];
      var board = false;
      section.tasks.forEach(function (t) {
        var r = state.it[t.key];
        if (used[t.key]) return;
        if (!r) fresh.push(t);
        else if (r[1] < day) old.push(t);
      });
      old = stableSort(shuffle(old, rnd), function (a, b) { return state.it[a.key][1] - state.it[b.key][1]; });
      shuffle(fresh, rnd).concat(old).forEach(function (t) {
        if (out.length >= RUN) return;
        if (t.type === 'match') {
          if (board) return;
          board = true;
        }
        out.push(t);
      });
      return out.length === RUN ? out : null;
    }

    function oldTopics() {
      var cur = curTest();
      var out = [];
      if (!cur) return out;
      model.tests.forEach(function (t) {
        if (t.index >= cur.index || t.mix) return;
        t.sections.forEach(function (s) {
          if (!state.sec[s.id] && out.indexOf(s) < 0 && cur.sections.indexOf(s) < 0) out.push(s);
        });
      });
      return out;
    }

    function pickTopics(day, used, rnd) {
      var due = [];
      var out = [];
      model.sections.forEach(function (s) {
        var e = state.sec[s.id];
        if (e && e[1] <= day) due.push(s);
      });
      due = stableSort(due, function (a, b) {
        var p = state.sec[a.id];
        var q = state.sec[b.id];
        return (p[0] - q[0]) || (p[1] - q[1]);
      });
      due.concat(oldTopics()).forEach(function (s) {
        if (out.length >= TOPICS_A_DAY) return;
        var tasks = sampleFor(s, day, used, rnd);
        if (tasks) out.push({ section: s, tasks: tasks });
      });
      return out;
    }

    function reviewPlan(day, rnd) {
      var used = dict();
      var cards = [];
      var mistakes = pendingOf(model.tasks, day).slice(0, DUE_MISTAKES);
      mistakes.forEach(function (t) {
        used[t.key] = true;
        cards.push({ task: t, block: 'review', run: null, sample: false, ret: false });
      });
      var topics = pickTopics(day, used, rnd);
      topics.forEach(function (topic) {
        topic.tasks.forEach(function (t) {
          used[t.key] = true;
          cards.push({ task: t, block: 'review', run: null, sample: true, ret: false });
        });
      });
      return { mistakes: mistakes.length, topics: topics.length, cards: interleave(cards, rnd), used: used };
    }

    function todayPlan(day, rnd) {
      var review = reviewPlan(day, rnd);
      var cur = curTest();
      var fresh = { cards: [], runs: dict() };
      if (cur && unseenCount(cur) > 0) {
        fresh = buildPortion(cur, day, {
          size: Math.max(NEW_MIN, Math.min(NEW_MAX, PLAN - review.cards.length)),
          exclude: review.used,
          mistakes: false,
          fill: false,
          stretch: false,
          block: 'new',
          rnd: rnd
        });
      }
      return { review: review, fresh: fresh.cards, runs: fresh.runs, test: cur };
    }

    function tasksOf(cards) {
      return cards.map(function (c) { return c.task; });
    }

    function nearestDue(after) {
      var best = null;
      model.tasks.forEach(function (t) {
        var r = state.it[t.key];
        if (isOpen(r) && r[3] > after && (best === null || r[3] < best)) best = r[3];
      });
      model.sections.forEach(function (s) {
        var e = state.sec[s.id];
        if (e && e[1] > after && (best === null || e[1] < best)) best = e[1];
      });
      return best;
    }

    function nearestLine(day) {
      var review = reviewPlan(day + 1, seeded(day + 1));
      var when = review.cards.length ? day + 1 : nearestDue(day + 1);
      if (when === null) return null;
      var n = when - day;
      return 'Ближайшее повторение — ' + (n <= 1 ? 'завтра' : n < 7 ? WEEKDAYS[weekday(when)] : inDays(n)) + '.';
    }

    function tomorrowLine(day) {
      var review = reviewPlan(day + 1, seeded(day + 1));
      var bits = [];
      var near = null;
      if (!review.cards.length) {
        near = nearestLine(day);
        return 'Завтра по расписанию ничего нет.' + (near ? ' ' + near : '');
      }
      if (review.mistakes) bits.push(count(review.mistakes, 'ошибка', 'ошибки', 'ошибок'));
      if (review.topics) bits.push(count(review.topics, 'тема', 'темы', 'тем'));
      return 'Завтра: ' + bits.join(' и ') + ' · ' + about(minutesOf(tasksOf(review.cards))) + '.';
    }

    function button(label, action, target, arrow, primary) {
      return { label: label, action: action, target: target || null, arrow: !!arrow, primary: !!primary };
    }

    function nextLesson(test) {
      var found = null;
      if (!test) return null;
      model.tests.forEach(function (t) {
        if (!found && t.index > test.index && !t.mix && unseenCount(t) > 0) found = t;
      });
      return found;
    }

    function nextLessonButton(test) {
      var t = nextLesson(test);
      return t ? button('Следующий урок: ' + t.label, 'start', t.id, true, false) : null;
    }

    function moreButton(test) {
      if (!test) return null;
      var left = unseenCount(test);
      var n = left <= PORTION + STRETCH ? left : PORTION;
      if (!left) return nextLessonButton(test);
      return button('Ещё ' + n + ' ' + plural(n, 'новое', 'новых', 'новых') + ' из ' + test.short, 'start', test.id, true, false);
    }

    function row(test, first) {
      var answered = 0;
      var open = 0;
      var green = 0;
      var total = test.tasks.length;
      test.tasks.forEach(function (t) {
        var r = state.it[t.key];
        var e = state.sec[t.section.id];
        if (!r) return;
        answered++;
        if (isOpen(r)) open++;
        if (e && e[0] >= GREEN_LEVEL) green++;
      });
      return {
        id: test.id,
        code: test.code,
        title: test.title,
        subtitle: test.subtitle,
        mix: test.mix,
        total: total,
        answered: answered,
        count: answered ? answered + ' из ' + total : String(total),
        sr: answered
          ? 'пройдено ' + answered + ' из ' + count(total, 'задания', 'заданий', 'заданий')
          : count(total, 'задание', 'задания', 'заданий'),
        mistakes: open,
        mistakesText: open ? 'ошибок: ' + open : null,
        bar: answered ? { green: green, gold: answered - green, rest: total - answered } : null,
        current: state.cur === test.id,
        chip: !first && state.cur === test.id ? 'текущий' : null
      };
    }

    function todayCard(day) {
      var cur = curTest();
      var card = {
        state: 'plan',
        label: TITLE_TODAY,
        minutes: 0,
        lines: [],
        heading: null,
        text: null,
        button: null,
        hint: null
      };
      if (state.fin === day) {
        card.state = 'done';
        card.heading = 'На сегодня всё';
        card.text = tomorrowLine(day);
        card.button = moreButton(cur);
        return card;
      }
      var plan = todayPlan(day, seeded(day));
      var review = plan.review.cards.length;
      var fresh = plan.fresh.length;
      card.hint = cur ? null : NO_CURRENT;
      if (!review && !fresh) {
        card.state = 'idle';
        card.heading = 'Сегодня повторять нечего';
        card.text = nearestLine(day);
        card.button = nextLessonButton(cur);
        return card;
      }
      card.minutes = minutesOf(tasksOf(plan.review.cards.concat(plan.fresh)));
      card.label = TITLE_TODAY + ' · ' + about(card.minutes);
      if (review) card.lines.push({ title: 'Повторение', count: review, sub: 'ошибки и пройденные темы вперемешку' });
      if (fresh) card.lines.push({ title: cur.code ? 'Новое · ' + cur.code : 'Новое', count: fresh, sub: cur.title });
      card.button = button('Начать', 'start', 'today', true, true);
      return card;
    }

    function mistakeTile(day) {
      var open = openOf(model.tasks).length;
      var due = pendingOf(model.tasks, day).length;
      if (!open) return null;
      return {
        label: TITLE_MISTAKES,
        open: open,
        due: due,
        text: due
          ? count(due, 'задание', 'задания', 'заданий') + ' ' + plural(due, 'ждёт', 'ждут', 'ждут') + ' проверки сегодня'
          : 'На сегодня проверок нет · можно пройти досрочно',
        target: 'mistakes'
      };
    }

    function home() {
      var day = today();
      var first = countsOf(state).answered === 0;
      return {
        day: day,
        first: first,
        today: first ? null : todayCard(day),
        mistakes: mistakeTile(day),
        reset: Object.keys(state.it).length > 0 || Object.keys(state.sec).length > 0 || !!state.old,
        groups: model.groups.map(function (g) {
          return {
            title: g.title,
            subtitle: g.subtitle,
            rows: g.tests.map(function (t) { return row(t, first); })
          };
        })
      };
    }

    function applyTask(task, ok, hinted, day) {
      var r = state.it[task.key] || null;
      var info = {
        open: isOpen(r),
        pending: isPending(r, day),
        due: isOpen(r) ? r[3] : 0,
        closed: false,
        gap: 0
      };
      var step = null;
      if (!ok) {
        step = advance(0, false);
        state.it[task.key] = [0, day, step[0], day + step[1]];
      } else if (info.pending && !hinted) {
        step = advance(r[2], true);
        if (step[0] >= CLOSED_STAGE) {
          state.it[task.key] = [1, day];
          info.closed = true;
        } else {
          state.it[task.key] = [1, day, step[0], day + step[1]];
          info.gap = step[1];
        }
      } else if (info.open) {
        state.it[task.key] = [hinted ? 2 : 1, day, r[2], r[3]];
      } else {
        state.it[task.key] = [hinted ? 2 : 1, day];
      }
      return info;
    }

    function fateOf(task, day) {
      var r = state.it[task.key];
      if (!isOpen(r)) return 'closed';
      return r[2] >= 1 && r[3] > day + 1 ? 'second' : 'tomorrow';
    }

    function confusedText(task, confused) {
      return 'Перепутаны: ' + confused.map(function (i) {
        return task.pairs[i][0] + ' — ' + task.pairs[i][1];
      }).join('; ');
    }

    function eventOf(type, right, level, gap) {
      var score = right + ' из ' + RUN;
      var e = { type: type, right: right, of: RUN, level: level, gap: gap, line: '', sub: '' };
      if (type === 'intro') {
        e.line = 'Тема пройдена в первый раз. Завтра — первая проверка.';
        e.sub = 'Новая тема · первая проверка завтра';
      } else if (type === 'pass') {
        e.line = 'Тема подтверждена: ' + score + '. Следующая проверка ' + inDays(gap) + '.';
        e.sub = 'Подтверждена: ' + score + ' · следующая проверка ' + inDays(gap);
      } else if (type === 'hold') {
        e.line = 'Тема пока держится: ' + score + '. Следующая проверка ' + inDays(gap) + '.';
        e.sub = 'Пока держится: ' + score + ' · следующая проверка ' + inDays(gap);
      } else {
        e.line = 'Тема не подтверждена: ' + score + '. Вернётся завтра.';
        e.sub = 'Не подтверждена: ' + score + ' · вернётся завтра';
      }
      return e;
    }

    function startSession(kind, test) {
      var day0 = today();
      var title = kind === 'lesson' ? test.label : kind === 'today' ? TITLE_TODAY : TITLE_MISTAKES;
      var newTest = kind === 'today' ? curTest() : null;
      var queue = [];
      var current = null;
      var screen = 'task';
      var portions = [];
      var log = [];
      var runs = dict();
      var runDone = dict();
      var taken = dict();
      var sampled = dict();
      var tally = dict();
      var wrongs = dict();
      var events = dict();
      var upcoming = null;
      var stoppedFrom = null;
      var early = false;
      var first = null;
      var plan = null;
      var due = null;

      function present(c) {
        var t = c.task;
        var day = today();
        var r = state.it[t.key] || null;
        var pending = !c.ret && isPending(r, day);
        if (c.ready) return;
        c.ready = true;
        c.answered = false;
        c.hinted = false;
        c.ok = false;
        c.chosen = null;
        c.feedback = null;
        c.options = null;
        c.left = null;
        c.right = null;
        if (t.type === 'match') {
          c.left = shuffle(t.pairs.map(function (p, i) { return { text: p[0], pair: i }; }), random);
          c.right = shuffle(t.pairs.map(function (p, i) { return { text: p[1], pair: i }; }), random);
        } else {
          c.options = t.fixed ? t.options.slice() : shuffle(t.options.slice(), random);
        }
        c.check = pending ? r[2] + 1 : 0;
        c.hidden = !c.ret && !!t.recall && (c.sample || pending || (!!r && r[1] < day));
        c.revealed = !c.hidden;
        c.chip = null;
        if (c.ret) c.chip = { kind: 'indigo', text: 'Повтор ошибки' };
        else if (c.check) c.chip = { kind: 'indigo', text: 'Ошибка · проверка ' + c.check + ' из ' + CLOSED_STAGE };
        else if (c.run === 'first') c.chip = { kind: 'gold', text: 'Новая тема' };
      }

      function openPortion(portion, gapAt) {
        portions.push({ size: portion.cards.length, done: [], gapAt: gapAt });
        Object.keys(portion.runs).forEach(function (id) {
          runs[id] = portion.runs[id];
          runDone[id] = 0;
        });
        portion.cards.forEach(function (c) {
          taken[c.task.key] = true;
          if (c.sample) sampled[c.task.section.id] = true;
        });
        queue = portion.cards.slice();
        current = queue.shift() || null;
        if (current) present(current);
        screen = 'task';
      }

      function planned() {
        var n = 0;
        portions.forEach(function (p) { n += p.size; });
        return n;
      }

      function live() {
        return screen === 'task' && !!current && !current.ret && !current.answered;
      }

      function position() {
        var p = portions[portions.length - 1];
        return Math.max(1, Math.min(p.size, p.done.length + (live() ? 1 : 0)));
      }

      function trackOf(p, withNow) {
        var cells = [];
        var i = 0;
        var s = '';
        for (i = 0; i < p.size; i++) {
          s = i < p.done.length ? p.done[i] : 'todo';
          if (withNow && i === p.done.length && live()) s = 'now';
          cells.push({ state: s, gap: p.gapAt > 0 && i === p.gapAt });
        }
        return cells;
      }

      function eyebrow() {
        if (kind === 'lesson') return test.label;
        if (kind === 'mistakes') return TITLE_MISTAKES;
        if (current && current.block === 'new') return TITLE_TODAY + ' · новое' + (newTest ? ' · ' + newTest.short : '');
        return TITLE_TODAY + ' · повторение';
      }

      function lastCard() {
        return !queue.length && !(kind === 'lesson' && unseenCount(test) > 0);
      }

      function canSkip() {
        return screen === 'task' && !!current && !current.answered && queue.length > 0;
      }

      function mainButton() {
        var c = current;
        if (!c) return null;
        if (!c.answered) return c.hidden && !c.revealed ? button('Показать варианты', 'reveal', null, false, true) : null;
        return button(lastCard() ? 'Результат' : 'Дальше', 'next', null, true, true);
      }

      function cardView(c) {
        var t = c.task;
        var closed = c.hidden && !c.revealed;
        return {
          key: t.key,
          type: t.type,
          item: t,
          section: t.section,
          block: c.block,
          options: c.options ? c.options.slice() : null,
          left: c.left ? c.left.slice() : null,
          right: c.right ? c.right.slice() : null,
          recall: c.hidden,
          hidden: closed,
          placeholders: closed ? c.options.length : 0,
          caption: closed ? 'Сначала вспомни форму' : null,
          base: c.hidden && t.recall.kind === 'base' ? t.recall.base : null,
          chip: c.chip,
          topicLabel: c.run === 'next' ? 'Тема' : null,
          topicTitle: c.run ? t.section.title : null,
          isReturn: c.ret,
          check: c.check,
          hinted: c.hinted,
          answered: c.answered,
          feedback: c.feedback
        };
      }

      function checkpoint(p) {
        var right = 0;
        var hinted = 0;
        p.done.forEach(function (s) {
          if (s !== 'bad') right++;
          if (s === 'hint') hinted++;
        });
        return {
          label: 'Подход готов',
          right: right,
          total: p.size,
          score: String(right),
          of: 'из ' + p.size + ' с первой попытки',
          mono: hinted ? 'С подсказкой: ' + hinted : null,
          line: 'В уроке пройдено ' + answeredCount(test) + ' из ' + test.tasks.length + '.'
        };
      }

      function mistakeOf(e) {
        var t = e.task;
        if (t.type === 'match') {
          return {
            item: t,
            board: true,
            answer: null,
            chosen: null,
            parts: null,
            text: confusedText(t, e.confused),
            tr: '',
            note: t.note
          };
        }
        return {
          item: t,
          board: false,
          answer: t.answer,
          chosen: e.chosen,
          parts: parts(e.chosen, stem(t.options, t.answer, e.chosen)),
          text: null,
          tr: t.tr,
          note: t.note
        };
      }

      function nextStep(day) {
        var left = 0;
        var all = test ? test.tasks.length : 0;
        var fates = { closed: 0, second: 0, tomorrow: 0 };
        if (!log.length) {
          return {
            primary: null,
            secondary: button('Все уроки', 'home', null, false, false),
            line: 'Ответов пока нет: остановлено до первого ответа.'
          };
        }
        if (kind === 'lesson') {
          left = unseenCount(test) || (stoppedFrom ? planned() - log.length : 0);
          if (left > 0) {
            return {
              primary: button('Продолжить урок · осталось ' + left, stoppedFrom ? 'resume' : 'start',
                stoppedFrom ? null : test.id, true, true),
              secondary: button('Все уроки', 'home', null, false, false),
              line: tomorrowLine(day)
            };
          }
          return {
            primary: button('Готово', 'home', null, false, true),
            secondary: nextLessonButton(test),
            line: 'Урок пройден: ' + all + ' из ' + all + '. Его темы вернутся в «Сегодня» по расписанию.'
          };
        }
        if (kind === 'today') {
          left = planned() - log.length;
          if (left > 0 && stoppedFrom) {
            return {
              primary: button('Продолжить · осталось ' + left, 'resume', null, true, true),
              secondary: button('Все уроки', 'home', null, false, false),
              line: tomorrowLine(day)
            };
          }
          return {
            primary: button('Готово', 'home', null, false, true),
            secondary: moreButton(curTest()),
            line: 'На сегодня всё. ' + tomorrowLine(day)
          };
        }
        log.forEach(function (e) { fates[e.fate]++; });
        return {
          primary: button('Готово', 'home', null, false, true),
          secondary: pendingOf(model.tasks, day).length ? button('Ещё раз', 'start', 'mistakes', false, false) : null,
          line: 'Закрыто ошибок: ' + fates.closed + ' · ждут второй проверки: ' + fates.second +
            ' · вернутся завтра: ' + fates.tomorrow
        };
      }

      function result() {
        var day = today();
        var total = planned();
        var answered = log.length;
        var right = 0;
        var hinted = 0;
        var wrong = 0;
        var order = [];
        var rows = dict();
        var lists = dict();
        var track = [];
        var groups = [];
        var topics = [];
        var weak = [];
        var mono = 'С первой попытки';
        var verdict = null;
        log.forEach(function (e) {
          var id = e.task.section.id;
          if (!rows[id]) {
            rows[id] = {
              section: e.task.section,
              title: e.task.section.title,
              right: 0,
              wrong: 0,
              total: 0,
              text: '',
              rule: false,
              event: events[id] ? events[id].type : null,
              sub: events[id] ? events[id].sub : null
            };
            lists[id] = [];
            order.push(id);
          }
          rows[id].total++;
          if (e.ok) {
            right++;
            rows[id].right++;
            if (e.hinted) hinted++;
          } else {
            wrong++;
            rows[id].wrong++;
            lists[id].push(mistakeOf(e));
          }
        });
        topics = stableSort(order.map(function (id) { return rows[id]; }), function (a, b) {
          return (a.right * b.total - b.right * a.total) || (b.wrong - a.wrong);
        });
        topics.forEach(function (r) {
          r.text = r.right + ' из ' + r.total;
          r.rule = r.wrong > 0;
          if (r.wrong) groups.push({ section: r.section, title: r.title, items: lists[r.section.id] });
        });
        portions.forEach(function (p, i) {
          trackOf(p, false).forEach(function (cell, j) {
            if (i > 0 && j === 0) cell.gap = true;
            track.push(cell);
          });
        });
        if (answered < total) mono += ' · остановлено на ' + answered + ' из ' + total;
        if (hinted) mono += ' · с подсказкой: ' + hinted;
        if (answered && !wrong) verdict = 'Puiku! Без единой ошибки.';
        if (wrong) {
          weak = topics.filter(function (r) { return r.wrong > 0 && r.total >= WEAK_MIN; });
          if (!weak.length) weak = topics.filter(function (r) { return r.wrong > 0; });
          verdict = 'Больше всего ошибок: ' + weak[0].title + ', ' + weak[0].wrong + ' из ' + weak[0].total + '.';
        }
        return {
          title: 'Результат',
          empty: !answered,
          right: right,
          answered: answered,
          planned: total,
          hinted: hinted,
          wrong: wrong,
          score: String(right),
          of: 'из ' + answered,
          track: track,
          mono: answered ? mono : null,
          verdict: verdict,
          next: nextStep(day),
          topics: topics,
          mistakesTitle: wrong ? 'Ошибки: ' + wrong : null,
          mistakes: groups
        };
      }

      function view() {
        var p = portions[portions.length - 1];
        var n = position();
        var out = null;
        if (screen === 'result') {
          return { screen: 'result', kind: kind, title: title, eyebrow: title, result: result() };
        }
        out = {
          screen: screen,
          kind: kind,
          title: title,
          eyebrow: eyebrow(),
          n: n,
          total: p.size,
          counter: pad(n) + ' / ' + pad(p.size),
          sr: 'Задание ' + n + ' из ' + p.size,
          track: trackOf(p, true),
          card: null,
          checkpoint: null,
          canSkip: false,
          main: null,
          side: null
        };
        if (screen === 'checkpoint') {
          out.checkpoint = checkpoint(p);
          out.main = button('Ещё ' + upcoming.cards.length, 'more', null, true, true);
          out.side = button('К результату', 'stop', null, false, false);
          return out;
        }
        out.card = cardView(current);
        out.canSkip = canSkip();
        out.main = mainButton();
        return out;
      }

      function topicEvent(c, ok, day) {
        var id = c.task.section.id;
        var entry = state.sec[id] || null;
        var t = null;
        var step = null;
        var type = 'fail';
        if (kind === 'mistakes') return null;
        if (c.run) {
          runDone[id] = (runDone[id] || 0) + 1;
          if (runDone[id] !== runs[id] || entry) return null;
          state.sec[id] = [0, day + LADDER[0]];
          events[id] = eventOf('intro', 0, 0, LADDER[0]);
          return events[id];
        }
        if (!c.sample && runs[id] > (runDone[id] || 0)) return null;
        if (kind === 'today' && !c.sample && (c.block === 'review' || sampled[id])) return null;
        if (entry && entry[1] > day) return null;
        t = tally[id] || (tally[id] = { n: 0, right: 0, closed: false });
        if (t.closed) return null;
        t.n++;
        if (ok && !c.hinted) t.right++;
        if (t.n < RUN) return null;
        t.closed = true;
        if (t.right >= PASS) {
          type = 'pass';
          step = advance(entry ? entry[0] : 0, true);
        } else if (entry && t.right === HOLD) {
          type = 'hold';
          step = [entry[0], LADDER[entry[0]]];
        } else {
          step = advance(0, false);
        }
        state.sec[id] = [step[0], day + step[1]];
        events[id] = eventOf(type, t.right, step[0], step[1]);
        return events[id];
      }

      function monoLine(c, ok, info, event, second, day) {
        if (event) return event.line;
        if (!ok) {
          if (second) return 'Вторая ошибка в этой теме — загляни в правило';
          return c.task.type === 'match' ? 'Вернётся завтра' : 'Вернётся через три задания и завтра';
        }
        if (info.open) {
          if (!info.pending) return 'По расписанию задание вернётся ' + inDays(Math.max(1, info.due - day));
          if (c.hinted) return 'С подсказкой проверка не засчитана — спросим завтра';
          return info.closed ? 'Ошибка закрыта' : 'Осталась одна проверка — ' + inDays(info.gap);
        }
        return c.run ? null : 'Тема: ' + c.task.section.title;
      }

      function feedbackOf(c, ok, chosen, misses, confused) {
        var t = c.task;
        var board = t.type === 'match';
        var n = 0;
        var fb = {
          ok: ok,
          hinted: ok && c.hinted,
          kind: ok ? 'ok' : 'bad',
          label: ok ? 'Teisingai' + (c.hinted ? ' · с подсказкой' : '') : board ? 'Su klaidomis' : 'Neteisingai',
          text: '',
          note: null,
          rule: ok ? null : { label: 'Правило: ' + t.section.title, section: t.section },
          mono: null,
          sr: null,
          answer: board ? null : t.answer,
          chosen: chosen,
          rows: [],
          misses: misses,
          confused: confused,
          cell: null,
          event: null
        };
        if (board) {
          fb.text = ok ? 'Все пары без ошибок.'
            : 'Все пары собраны. Ошибок: ' + misses + '. ' + confusedText(t, confused) + '.';
          fb.note = t.note || null;
          return fb;
        }
        if (ok) {
          fb.text = c.ret ? 'Исправлено.' : 'Правильно.';
          fb.note = c.ret ? null : t.note || null;
        } else {
          fb.note = t.note || t.section.gist || null;
          fb.sr = 'Правильный ответ: ' + t.answer + (/[.!?…]$/.test(t.answer) ? '' : '.');
        }
        n = stem(t.options, t.answer, chosen);
        c.options.forEach(function (o, i) {
          var bits = null;
          if (o !== t.answer && o !== chosen) return;
          bits = parts(o, n);
          fb.rows.push({ option: o, index: i, state: o === t.answer ? 'ok' : 'bad', stem: bits.stem, tail: bits.tail });
        });
        return fb;
      }

      function answer(value) {
        var c = current;
        var t = c ? c.task : null;
        var input = null;
        var ok = false;
        var chosen = null;
        var misses = 0;
        var confused = [];
        var day = 0;
        var fb = null;
        var info = null;
        var event = null;
        var second = false;
        var id = '';
        if (screen !== 'task' || !c || c.answered) return null;
        if (t.type === 'match') {
          input = boardInput(t, value);
          if (!input) return null;
          misses = input.misses;
          confused = input.confused;
          ok = misses === 0;
        } else {
          if (c.hidden && !c.revealed) return null;
          chosen = typeof value === 'number' ? c.options[value] : value;
          if (c.options.indexOf(chosen) < 0) return null;
          ok = chosen === t.answer;
        }
        day = today();
        c.answered = true;
        c.ok = ok;
        c.chosen = chosen;
        fb = feedbackOf(c, ok, chosen, misses, confused);
        c.feedback = fb;
        if (c.ret) {
          fb.mono = ok ? 'Завтра спросим ещё раз' : 'Вернётся завтра';
          return view();
        }
        id = t.section.id;
        reload();
        info = applyTask(t, ok, c.hinted, day);
        if (!ok) {
          wrongs[id] = (wrongs[id] || 0) + 1;
          second = wrongs[id] === 2;
        }
        event = topicEvent(c, ok, day);
        fb.cell = ok ? (c.hinted ? 'hint' : 'ok') : 'bad';
        fb.mono = monoLine(c, ok, info, event, second, day);
        fb.event = event ? event.type : null;
        portions[portions.length - 1].done.push(fb.cell);
        log.push({
          task: t,
          ok: ok,
          hinted: c.hinted,
          chosen: chosen,
          misses: misses,
          confused: confused,
          fate: fateOf(t, day)
        });
        if (!ok && t.type !== 'match') {
          queue.splice(Math.min(RETURN_GAP, queue.length), 0, { task: t, block: c.block, run: null, sample: false, ret: true });
        }
        markDone();
        save();
        return view();
      }

      function reveal() {
        if (screen === 'task' && current && !current.answered) current.revealed = true;
        return view();
      }

      function hint() {
        if (screen === 'task' && current && !current.answered) current.hinted = true;
        return view();
      }

      function skip() {
        if (!canSkip()) return view();
        queue.push(current);
        current = queue.shift();
        present(current);
        return view();
      }

      function markDone() {
        var day = today();
        if (kind !== 'today' || !log.length || log.length < planned()) return false;
        if (state.fin !== null && state.fin >= day0 && state.fin <= day) return false;
        state.fin = Math.min(day0, day);
        return true;
      }

      function finish() {
        screen = 'result';
        stoppedFrom = null;
        if (markDone()) save();
        return view();
      }

      function next() {
        if (screen !== 'task' || !current || !current.answered) return view();
        if (queue.length) {
          current = queue.shift();
          present(current);
          return view();
        }
        if (kind === 'lesson' && unseenCount(test) > 0) {
          upcoming = buildPortion(test, today(), lessonOptions(taken));
          if (upcoming.cards.length) {
            screen = 'checkpoint';
            return view();
          }
        }
        return finish();
      }

      function more() {
        var portion = upcoming;
        if (screen !== 'checkpoint' || !portion) return view();
        upcoming = null;
        openPortion(portion, 0);
        return view();
      }

      function stop() {
        if (screen === 'result') return view();
        if (kind === 'today' && log.length && planned() === log.length) return finish();
        stoppedFrom = screen;
        screen = 'result';
        return view();
      }

      function resume() {
        var from = stoppedFrom;
        if (screen !== 'result' || !from) return view();
        stoppedFrom = null;
        screen = from;
        if (from === 'checkpoint') return more();
        if (!current || current.answered) return next();
        return view();
      }

      if (kind === 'lesson') {
        first = buildPortion(test, day0, lessonOptions(null));
        if (!first.cards.length) return null;
        openPortion(first, 0);
      } else if (kind === 'today') {
        plan = todayPlan(day0, random);
        if (!plan.review.cards.length && !plan.fresh.length) return null;
        openPortion({ cards: plan.review.cards.concat(plan.fresh), runs: plan.runs },
          plan.fresh.length ? plan.review.cards.length : 0);
      } else {
        due = pendingOf(model.tasks, day0);
        early = !due.length;
        due = early ? openOf(model.tasks) : due.slice(0, MISTAKE_SESSION);
        if (!due.length) return null;
        openPortion({
          cards: interleave(due.map(function (t) {
            return { task: t, block: 'mistakes', run: null, sample: false, ret: false };
          }), random),
          runs: dict()
        }, 0);
      }

      return {
        kind: kind,
        id: kind === 'lesson' ? test.id : kind,
        title: title,
        test: test || null,
        early: early,
        view: view,
        reveal: reveal,
        hint: hint,
        answer: answer,
        skip: skip,
        next: next,
        more: more,
        stop: stop,
        resume: resume
      };
    }

    function start(id) {
      var test = null;
      reload();
      if (id === 'today') return state.fin === today() ? null : startSession('today', null);
      if (id === 'mistakes') return startSession('mistakes', null);
      test = typeof id === 'string' ? model.testById[id] || null : null;
      if (!test) return null;
      if (!test.mix && (state.cur !== test.id || (state.old && state.old.l.length))) {
        state.cur = test.id;
        if (state.old) state.old = cleanOld({ m: state.old.m, l: [] });
        ownCur = true;
        save();
        ownCur = false;
      }
      return startSession('lesson', test);
    }

    function planInfo() {
      var day = today();
      var plan = todayPlan(day, seeded(day));
      return {
        day: day,
        mistakes: plan.review.mistakes,
        topics: plan.review.topics,
        review: plan.review.cards.length,
        fresh: plan.fresh.length,
        minutes: minutesOf(tasksOf(plan.review.cards.concat(plan.fresh))),
        test: plan.test ? plan.test.id : null,
        done: state.fin === day,
        tomorrow: tomorrowLine(day)
      };
    }

    function stats() {
      var c = countsOf(state);
      return {
        answered: c.answered,
        mistakes: c.mistakes,
        topics: c.topics,
        text: 'Заданий с ответом: ' + c.answered + ' · Ошибок: ' + c.mistakes + ' · Тем в расписании: ' + c.topics
      };
    }

    function takeNotice() {
      var text = notice;
      notice = null;
      return text;
    }

    function snapshot() {
      return JSON.parse(JSON.stringify(packState(state)));
    }

    function testOfSection(id) {
      var section = typeof id === 'string' ? model.sectionById[id] || null : null;
      return section && section.tests.length ? section.tests[0].id : null;
    }

    function exportData() {
      var data = { it: state.it, sec: state.sec, cur: state.cur, fin: state.fin };
      if (state.old) data.old = state.old;
      return { app: APP, v: VERSION, saved: today(), data: JSON.parse(JSON.stringify(data)) };
    }

    function exportText() {
      return JSON.stringify(exportData());
    }

    function readFile(file) {
      var parsed = file;
      if (typeof file === 'string') {
        try {
          parsed = JSON.parse(file);
        } catch (e) {
          return null;
        }
      }
      if (!parsed || typeof parsed !== 'object' || parsed.app !== APP || parsed.v !== VERSION) return null;
      if (!parsed.data || typeof parsed.data !== 'object') return null;
      return cleanState(parsed.data);
    }

    function fileInfo(s) {
      var c = null;
      if (!s) return { ok: false, message: BAD_FILE, answered: 0, mistakes: 0, topics: 0 };
      c = countsOf(s);
      return {
        ok: true,
        message: 'Заменить прогресс в этом браузере прогрессом из файла? В файле: ' +
          count(c.answered, 'задание', 'задания', 'заданий') + ' с ответом, ' +
          count(c.mistakes, 'ошибка', 'ошибки', 'ошибок') + '.',
        answered: c.answered,
        mistakes: c.mistakes,
        topics: c.topics
      };
    }

    function importInfo(file) {
      return fileInfo(readFile(file));
    }

    function importApply(file) {
      var s = readFile(file);
      if (s) {
        state = s;
        notice = null;
        blind = false;
        expire();
        settle(today());
        write();
      }
      return fileInfo(s);
    }

    function reset() {
      state = emptyState();
      notice = null;
      blind = false;
      lastText = null;
      if (!drop(KEY_V2)) write();
      if (!drop(KEY_V1)) put(KEY_V1, '{}');
    }

    return {
      model: model,
      fileName: FILE_NAME,
      today: today,
      home: home,
      start: start,
      plan: planInfo,
      stats: stats,
      notice: takeNotice,
      state: snapshot,
      reload: reload,
      testOfSection: testOfSection,
      exportData: exportData,
      exportText: exportText,
      importInfo: importInfo,
      importApply: importApply,
      reset: reset
    };
  }

  var api = {
    create: create,
    constants: {
      PORTION: PORTION,
      STRETCH: STRETCH,
      RUN: RUN,
      RUNS_A_PORTION: RUNS_A_PORTION,
      RETURN_GAP: RETURN_GAP,
      LADDER: LADDER.slice(),
      DUE_MISTAKES: DUE_MISTAKES,
      TOPICS_A_DAY: TOPICS_A_DAY,
      PLAN: PLAN,
      NEW_MIN: NEW_MIN,
      NEW_MAX: NEW_MAX,
      DAY_START: DAY_START,
      LESSON_MISTAKES: LESSON_MISTAKES,
      MISTAKE_SESSION: MISTAKE_SESSION,
      GREEN_LEVEL: GREEN_LEVEL,
      KEY_V1: KEY_V1,
      KEY_V2: KEY_V2
    },
    plural: plural,
    inDays: inDays,
    minutes: minutes,
    dayNumber: dayNumber,
    weekday: weekday,
    hash: hash,
    taskKey: taskKey,
    lcp: lcp,
    stem: stem,
    split: split,
    recall: recall,
    advance: advance
  };

  if (typeof module === 'object' && module && module.exports) module.exports = api;
  else root.LTEngine = api;
})(this);
