// ── State ────────────────────────────────────────────────────────────────────
var activeDiff    = 'all';
var activeCat     = 'all';
var deck          = [];
var wrongIds      = [];
var idx           = 0;
var score         = 0;
var answered      = false;
var selectedMulti = [];
var catStats      = {};

// ── DOM helpers ───────────────────────────────────────────────────────────────
function el(id) { return document.getElementById(id); }

// ── Screen switching ──────────────────────────────────────────────────────────
var screenIds = ['screenIntro', 'screenQuiz', 'screenResults'];
function showScreen(name) {
  screenIds.forEach(function(id) {
    el(id).classList.remove('active');
  });
  el(name).classList.add('active');
  // Show back-to-filters button and score when not on intro
  var isQuizOrResults = name === 'screenQuiz' || name === 'screenResults';
  el('navBackBtn').classList[isQuizOrResults ? 'add' : 'remove']('visible');
  el('navScore').classList[name === 'screenQuiz' ? 'add' : 'remove']('visible');
}

// ── Filter chips ──────────────────────────────────────────────────────────────
function bindChips(containerId, type) {
  var wrap = el(containerId);
  var chips = wrap.querySelectorAll('.filter-chip');
  for (var i = 0; i < chips.length; i++) {
    chips[i].addEventListener('click', (function(chip) {
      return function() {
        var siblings = wrap.querySelectorAll('.filter-chip');
        for (var j = 0; j < siblings.length; j++) {
          siblings[j].classList.remove('active');
        }
        chip.classList.add('active');
        if (type === 'diff') {
          activeDiff = chip.getAttribute('data-diff');
        } else {
          activeCat = chip.getAttribute('data-cat');
        }
        updateStats();
      };
    })(chips[i]));
  }
}

function updateStats() {
  el('statQ').textContent = filterQuestions().length;
}

function filterQuestions() {
  var qs = window.questions;
  return qs.filter(function(q) {
    return (activeDiff === 'all' || q.difficulty === activeDiff) &&
           (activeCat  === 'all' || q.category   === activeCat);
  });
}

// ── Shuffle ───────────────────────────────────────────────────────────────────
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

// ── Start ─────────────────────────────────────────────────────────────────────
el('startBtn').addEventListener('click', function() {
  deck = shuffle(filterQuestions());
  if (!deck.length) {
    alert('No questions match this filter. Try different settings.');
    return;
  }
  idx = 0; score = 0; wrongIds = []; catStats = {};
  deck.forEach(function(q) {
    if (!catStats[q.category]) catStats[q.category] = { total: 0, correct: 0 };
    catStats[q.category].total++;
  });
  el('scorePts').textContent = '0';
  showScreen('screenQuiz');
  renderQuestion();
});

// ── Render question ───────────────────────────────────────────────────────────
function renderQuestion() {
  var q = deck[idx];
  answered = false;
  selectedMulti = [];

  // Progress bar
  el('progressFill').style.width = ((idx / deck.length) * 100) + '%';

  // Counter + tags
  el('qNum').textContent    = idx + 1;
  el('qTotal').textContent  = deck.length;
  el('qCatTag').textContent = q.category;
  var diffTag = el('qDiffTag');
  diffTag.textContent = q.difficulty === 'mid' ? 'Mid-Level'
    : q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
  diffTag.className = 'tag tag-diff-' + q.difficulty;

  // Type hint
  el('qTypeHint').textContent = q.type === 'multi' ? 'Multi-select question' : 'Single answer';

  // Question text
  el('qText').textContent = q.question;

  // Multi-select hint
  el('multiHint').style.display = q.type === 'multi' ? 'block' : 'none';

  // Options
  var letters = ['A', 'B', 'C', 'D', 'E'];
  var list = el('optionsList');
  list.innerHTML = '';
  q.options.forEach(function(opt, i) {
    var li  = document.createElement('li');
    var btn = document.createElement('button');
    btn.className = 'option-btn';

    var letterSpan = document.createElement('span');
    letterSpan.className = 'option-letter';
    letterSpan.textContent = letters[i];

    var textSpan = document.createElement('span');
    textSpan.textContent = opt;

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);

    btn.addEventListener('click', (function(b, index) {
      return function() { handleOptionClick(b, index, q); };
    })(btn, i));

    li.appendChild(btn);
    list.appendChild(li);
  });

  // Controls
  el('explanationBox').classList.remove('show');
  el('nextBtn').classList.remove('show');
  el('checkBtn').classList[q.type === 'multi' ? 'add' : 'remove']('show');
  el('skipBtn').style.display = 'block';
}

// ── Option click ──────────────────────────────────────────────────────────────
function handleOptionClick(btn, i, q) {
  if (answered) return;

  if (q.type === 'single') {
    var allBtns = el('optionsList').querySelectorAll('.option-btn');
    allBtns.forEach(function(b) { b.classList.remove('selected'); });
    btn.classList.add('selected');
    revealSingle(i, q);
  } else {
    var pos = selectedMulti.indexOf(i);
    if (pos !== -1) {
      selectedMulti.splice(pos, 1);
      btn.classList.remove('selected');
    } else {
      selectedMulti.push(i);
      btn.classList.add('selected');
    }
  }
}

// ── Reveal single answer ──────────────────────────────────────────────────────
function revealSingle(chosen, q) {
  answered = true;
  var isCorrect = chosen === q.correct;
  var btns = el('optionsList').querySelectorAll('.option-btn');

  btns.forEach(function(b, i) {
    b.disabled = true;
    if (i === q.correct) b.classList.add('reveal-correct');
  });

  btns[chosen].classList.remove('selected', 'reveal-correct');
  btns[chosen].classList.add(isCorrect ? 'correct' : 'wrong');

  if (isCorrect) {
    score++;
    el('scorePts').textContent = score;
    catStats[q.category].correct++;
  } else {
    wrongIds.push(q.id);
    var card = el('qCard');
    card.classList.add('shake');
    setTimeout(function() { card.classList.remove('shake'); }, 350);
  }
  el('qCard').classList.add('answered');
  showExplanation(isCorrect, q.explanation);
}

// ── Check multi answer ────────────────────────────────────────────────────────
el('checkBtn').addEventListener('click', function() {
  if (answered) return;
  var q = deck[idx];
  if (selectedMulti.length === 0) return;
  answered = true;

  var correct = q.correct;
  var isCorrect = selectedMulti.length === correct.length &&
    selectedMulti.every(function(v) { return correct.indexOf(v) !== -1; }) &&
    correct.every(function(v) { return selectedMulti.indexOf(v) !== -1; });

  var btns = el('optionsList').querySelectorAll('.option-btn');
  btns.forEach(function(b, i) {
    b.disabled = true;
    if (correct.indexOf(i) !== -1) {
      b.classList.remove('selected');
      b.classList.add('reveal-correct');
    }
    if (selectedMulti.indexOf(i) !== -1 && correct.indexOf(i) === -1) {
      b.classList.remove('selected');
      b.classList.add('wrong');
    }
  });

  if (isCorrect) {
    score++;
    el('scorePts').textContent = score;
    catStats[q.category].correct++;
  } else {
    wrongIds.push(q.id);
    var card = el('qCard');
    card.classList.add('shake');
    setTimeout(function() { card.classList.remove('shake'); }, 350);
  }

  el('qCard').classList.add('answered');
  el('checkBtn').classList.remove('show');
  showExplanation(isCorrect, q.explanation);
});

// ── Show explanation ──────────────────────────────────────────────────────────
function showExplanation(isCorrect, text) {
  var header = el('expHeader');
  header.textContent = isCorrect ? '\u2713 Correct' : '\u2717 Incorrect';
  header.className = 'explanation-header ' + (isCorrect ? 'correct-head' : 'wrong-head');
  el('expText').textContent = text;
  el('explanationBox').classList.add('show');
  el('nextBtn').classList.add('show');
  el('skipBtn').style.display = 'none';
  el('checkBtn').classList.remove('show');
}

// ── Advance ───────────────────────────────────────────────────────────────────
function advance() {
  idx++;
  if (idx >= deck.length) {
    showResults();
  } else {
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

el('nextBtn').addEventListener('click', advance);
el('skipBtn').addEventListener('click', function() {
  wrongIds.push(deck[idx].id);
  advance();
});

// ── Results ───────────────────────────────────────────────────────────────────
function showResults() {
  el('progressFill').style.width = '100%';
  showScreen('screenResults');

  var total = deck.length;
  var pct   = Math.round((score / total) * 100);
  el('resScore').textContent = pct + '%';

  var trophy, title, tierClass, tierText;
  if (pct >= 90) {
    trophy = '\uD83C\uDFC6'; title = 'Outstanding Performance';
    tierClass = 'tier-gold';   tierText = 'Senior Level Ready';
  } else if (pct >= 75) {
    trophy = '\uD83E\uDD48'; title = 'Strong Performance';
    tierClass = 'tier-silver'; tierText = 'Mid-Level Proficient';
  } else if (pct >= 55) {
    trophy = '\uD83E\uDD49'; title = 'Good Foundation';
    tierClass = 'tier-bronze'; tierText = 'Junior Level \u2014 Keep Going';
  } else {
    trophy = '\uD83D\uDCDA'; title = 'Keep Studying';
    tierClass = 'tier-try';    tierText = 'Needs More Practice';
  }

  el('resTrophy').textContent = trophy;
  el('resTitle').textContent  = title;
  el('resTier').className     = 'results-tier ' + tierClass;
  el('resTier').textContent   = tierText;

  // Category breakdown
  var catColors = {
    'KPIs & Metrics':         '#e8a630',
    'Creative Formats':       '#22c55e',
    'Testing & Strategy':     '#e8a630',
    'Creative Fatigue':       '#fb923c',
    'Tools & Platforms':      '#38bdf8',
    'Production Workflow':    '#e879f9',
    'Strategy & Scenarios':   '#f87171',
    'Bidding & Algorithms':   '#e8a630',
    'iOS Attribution':        '#38bdf8',
    'Creative Metrics':       '#22c55e',
    'Incrementality':         '#fb923c',
    'Monetization & LTV':     '#e8a630',
    'Advanced Platforms':     '#f87171',
    'Advanced Analytics':     '#a78bfa'
  };

  var breakList = el('breakdownList');
  breakList.innerHTML = '';
  Object.keys(catStats).forEach(function(cat) {
    var data = catStats[cat];
    if (data.total === 0) return;
    var p     = Math.round((data.correct / data.total) * 100);
    var color = catColors[cat] || '#6c63ff';
    var row   = document.createElement('div');
    row.className = 'breakdown-row';

    var catDiv = document.createElement('div');
    catDiv.className = 'breakdown-cat';
    catDiv.textContent = cat;

    var barWrap = document.createElement('div');
    barWrap.className = 'breakdown-bar-wrap';

    var bar = document.createElement('div');
    bar.className = 'breakdown-bar';
    bar.style.width = '0%';
    bar.setAttribute('data-target', p);
    barWrap.appendChild(bar);

    var pctDiv = document.createElement('div');
    pctDiv.className = 'breakdown-pct';
    pctDiv.textContent = p + '%';

    row.appendChild(catDiv);
    row.appendChild(barWrap);
    row.appendChild(pctDiv);
    breakList.appendChild(row);
  });

  // Animate bars
  setTimeout(function() {
    var bars = breakList.querySelectorAll('.breakdown-bar');
    bars.forEach(function(b) {
      b.style.width = b.getAttribute('data-target') + '%';
    });
  }, 50);

  // Retry wrong button
  var retryBtn = el('retryWrongBtn');
  if (wrongIds.length > 0) {
    retryBtn.style.display = 'block';
    retryBtn.textContent = 'Retry ' + wrongIds.length + ' Missed Question' + (wrongIds.length > 1 ? 's' : '');
  } else {
    retryBtn.style.display = 'none';
  }
}

// ── Restart / Retry ───────────────────────────────────────────────────────────
el('restartBtn').addEventListener('click', function() {
  el('startBtn').click();
});

el('retryWrongBtn').addEventListener('click', function() {
  var missedSet = wrongIds.slice();
  deck = shuffle(window.questions.filter(function(q) {
    return missedSet.indexOf(q.id) !== -1;
  }));
  idx = 0; score = 0; wrongIds = []; catStats = {};
  deck.forEach(function(q) {
    if (!catStats[q.category]) catStats[q.category] = { total: 0, correct: 0 };
    catStats[q.category].total++;
  });
  el('scorePts').textContent = '0';
  showScreen('screenQuiz');
  renderQuestion();
});

function goToFilters() {
  el('progressFill').style.width = '0%';
  showScreen('screenIntro');
}

el('backToMenuBtn').addEventListener('click', goToFilters);
el('navBackBtn').addEventListener('click', goToFilters);

// ── Init ──────────────────────────────────────────────────────────────────────
bindChips('diffFilters', 'diff');
bindChips('catFilters', 'cat');
updateStats();
