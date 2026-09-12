/* Lot 1 — cohérence générale : accueil priorisé et progression lisible. */
(function () {
  var PRIORITY_SUBJECTS = ['francais', 'maths', 'bio', 'histoire', 'chimie'];

  function esc(value) {
    return typeof escapeHtml === 'function' ? escapeHtml(String(value == null ? '' : value)) : String(value || '');
  }

  function availableSubjects() {
    var profile = typeof learningProfile === 'function' ? learningProfile() : { subjects: [] };
    var keys = profile.subjects && profile.subjects.length ? profile.subjects.slice() : Object.keys(CESS_SUBJECTS || {});
    return keys.filter(function (key) { return CESS_SUBJECTS[key] && allChaps(key).length; });
  }

  function orderedSubjects() {
    var keys = availableSubjects();
    return PRIORITY_SUBJECTS.filter(function (key) { return keys.indexOf(key) >= 0; })
      .concat(keys.filter(function (key) { return PRIORITY_SUBJECTS.indexOf(key) < 0; }));
  }

  function chapterCounts(subject) {
    var chapters = allChaps(subject);
    var consulted = 0, completed = 0, active = 0;
    chapters.forEach(function (chapter) {
      var progress = getChapterProgress(chapter.id);
      var read = !!(cessState.readChapters && cessState.readChapters[chapter.id]);
      if (read || progress > 0) consulted++;
      if (progress >= 100) completed++;
      else if (progress > 0 || read) active++;
    });
    return { total: chapters.length, consulted: consulted, completed: completed, active: active };
  }

  function subjectCard(subject) {
    var info = CESS_SUBJECTS[subject] || {};
    var counts = chapterCounts(subject);
    var pct = counts.total ? Math.round(counts.completed / counts.total * 100) : 0;
    return '<article class="subject-card lot1-subject-card" style="--subject-color:' + esc(info.color || 'var(--primary)') + '">' +
      '<div class="subject-card-top"><div class="subject-icon" aria-hidden="true">' + esc(info.icon || '📘') + '</div><span class="status-pill">' + counts.active + ' en cours</span></div>' +
      '<h3>' + esc(info.label || subject) + '</h3>' +
      '<p>' + counts.completed + '/' + counts.total + ' chapitres terminés</p>' +
      '<div class="progress-line" aria-label="' + pct + '% des chapitres terminés"><span style="width:' + pct + '%"></span></div>' +
      '<div class="subject-card-footer"><span>' + counts.consulted + ' consultés</span><button type="button" onclick="showView(\'' + esc(subject) + '\')">Ouvrir →</button></div>' +
      '</article>';
  }

  window.renderHome = function () {
    var keys = orderedSubjects();
    var principal = keys.filter(function (key) { return PRIORITY_SUBJECTS.indexOf(key) >= 0; });
    var others = keys.filter(function (key) { return PRIORITY_SUBJECTS.indexOf(key) < 0; });
    var all = keys.reduce(function (list, key) { return list.concat(allChaps(key)); }, []);
    var completed = all.filter(function (chapter) { return getChapterProgress(chapter.id) >= 100; }).length;
    var consulted = all.filter(function (chapter) {
      return getChapterProgress(chapter.id) > 0 || !!(cessState.readChapters && cessState.readChapters[chapter.id]);
    }).length;
    var attempts = (cessState.results || []).length;

    var stats = document.getElementById('homeStats');
    if (stats) stats.innerHTML = [
      ['📖', consulted, 'Chapitres consultés'],
      ['✓', completed, 'Chapitres terminés'],
      ['🎯', attempts, 'Sessions réalisées'],
      ['↺', (cessState.mistakes || []).length, 'Questions à revoir']
    ].map(function (item) {
      return '<div class="home-stat"><span class="home-stat-icon" aria-hidden="true">' + item[0] + '</span><span class="home-stat-value">' + item[1] + '</span><span class="home-stat-label">' + item[2] + '</span></div>';
    }).join('');

    var subjects = document.getElementById('homeSubjects');
    if (subjects) {
      subjects.innerHTML = principal.map(subjectCard).join('') +
        (others.length ? '<details class="other-subjects"><summary>Voir les autres matières <span>' + others.length + '</span></summary><div class="subject-cards">' + others.map(subjectCard).join('') + '</div></details>' : '');
    }

    var priorities = document.getElementById('homePriorities');
    if (priorities) {
      var active = [];
      keys.forEach(function (key) {
        allChaps(key).forEach(function (chapter) {
          var progress = getChapterProgress(chapter.id);
          if (progress > 0 && progress < 100) active.push({ chapter: chapter, progress: progress, subject: key });
        });
      });
      active.sort(function (a, b) { return b.progress - a.progress; });
      priorities.innerHTML = active.length ? '<div class="simple-list">' + active.slice(0, 4).map(function (item) {
        var info = CESS_SUBJECTS[item.subject] || {};
        return '<div class="simple-list-item"><div class="simple-list-icon" aria-hidden="true">' + esc(info.icon || item.chapter.icone || '📘') + '</div><div class="simple-list-main"><strong>' + esc(item.chapter.titre || 'Chapitre') + '</strong><small>' + esc(info.label || item.subject) + ' · ' + item.progress + '% parcouru</small></div><button class="simple-list-action" type="button" onclick="openChapter(\'' + esc(item.chapter.id) + '\')">Reprendre</button></div>';
      }).join('') + '</div>' : '<div class="empty-state"><strong>Aucune révision en cours.</strong><br>Ouvre une matière principale pour commencer.</div>';
    }

    var activity = document.getElementById('homeActivity');
    if (activity) {
      var recent = (cessState.results || []).slice(-4).reverse();
      activity.innerHTML = recent.length ? '<div class="simple-list">' + recent.map(function (result) {
        var pct = Number(result.percentage || 0);
        return '<div class="simple-list-item"><div class="simple-list-icon" aria-hidden="true">' + (pct >= 70 ? '✓' : '↺') + '</div><div class="simple-list-main"><strong>' + esc(result.mode || 'Session') + '</strong><small>' + Number(result.score || 0) + '/' + Number(result.total || 0) + ' réponses correctes</small></div><span class="result-pill ' + (pct >= 70 ? 'success' : 'review') + '">' + pct + '%</span></div>';
      }).join('') + '</div>' : '<div class="empty-state">Aucune session enregistrée pour le moment.</div>';
    }
  };

  window.renderProgress = function () {
    var content = document.getElementById('progressContent');
    if (!content) return;
    var keys = orderedSubjects();
    var all = keys.reduce(function (list, key) { return list.concat(allChaps(key)); }, []);
    var consulted = all.filter(function (c) { return getChapterProgress(c.id) > 0 || !!(cessState.readChapters && cessState.readChapters[c.id]); }).length;
    var inProgress = all.filter(function (c) { var p = getChapterProgress(c.id); return p > 0 && p < 100; }).length;
    var completed = all.filter(function (c) { return getChapterProgress(c.id) >= 100; }).length;
    var correct = 0, answered = 0;
    (cessState.results || []).forEach(function (r) { correct += Number(r.score || 0); answered += Number(r.total || 0); });
    var accuracy = answered ? Math.round(correct / answered * 100) : 0;

    content.innerHTML = '<div class="progress-legend-note"><strong>Une fiche terminée n’est pas forcément maîtrisée.</strong><span>La consultation et la réussite aux exercices sont affichées séparément.</span></div>' +
      '<div class="progress-overview">' +
      '<div class="progress-big-card"><strong>' + consulted + '</strong><span>Consultés</span></div>' +
      '<div class="progress-big-card"><strong>' + inProgress + '</strong><span>En cours</span></div>' +
      '<div class="progress-big-card"><strong>' + completed + '</strong><span>Terminés</span></div>' +
      '<div class="progress-big-card"><strong>' + accuracy + '%</strong><span>Réussite aux exercices</span></div></div>' +
      '<div class="progress-subject-list">' + keys.map(function (key) {
        var info = CESS_SUBJECTS[key] || {}, counts = chapterCounts(key);
        var pct = counts.total ? Math.round(counts.completed / counts.total * 100) : 0;
        return '<article class="panel progress-subject-card"><div><span class="subject-icon" aria-hidden="true">' + esc(info.icon || '📘') + '</span><div><h2>' + esc(info.label || key) + '</h2><p>' + counts.consulted + ' consultés · ' + counts.active + ' en cours · ' + counts.completed + ' terminés</p></div></div><div class="progress-line"><span style="width:' + pct + '%"></span></div><button class="button secondary" type="button" onclick="showView(\'' + esc(key) + '\')">Ouvrir la matière</button></article>';
      }).join('') + '</div>' +
      '<div class="panel progress-method"><h2>Comment lire cette progression ?</h2><div class="learning-steps"><span><b>1</b> Consulter</span><span><b>2</b> S’entraîner</span><span><b>3</b> Réussir</span><span><b>4</b> Revoir plus tard</span></div><p>Le niveau de maîtrise deviendra fiable après plusieurs réponses réussies, pas simplement après l’ouverture d’une fiche.</p></div>';
  };

  function relabelNavigation() {
    var labels = {
      memo: 'Mémos',
      flashcards: 'Mémoriser',
      games: 'S’entraîner',
      exam: 'Se tester',
      progress: 'Progression'
    };
    Object.keys(labels).forEach(function (view) {
      document.querySelectorAll('[data-view="' + view + '"]').forEach(function (button) {
        var target = button.querySelector('span:last-child, small');
        if (target) target.textContent = labels[view];
      });
    });
  }

  relabelNavigation();
  renderHome();
})();

/* Séries courtes et lisibles sans modifier les banques de questions. */
(function () {
  var originalOpen = window.openSubjectExercises;
  if (typeof originalOpen !== 'function') return;

  window.openSubjectExercises = function (subject) {
    originalOpen(subject);
    var select = document.getElementById('subjectExerciseCount');
    if (select) {
      select.innerHTML =
        '<option value="5">Express · 5 questions · ≈ 3 min</option>' +
        '<option value="10" selected>Standard · 10 questions · ≈ 7 min</option>' +
        '<option value="20">Entraînement · 20 questions · ≈ 15 min</option>';
      select.setAttribute('aria-label', 'Durée de la série');
    }
    var summary = document.getElementById('subjectExerciseSummary');
    if (summary) {
      var guide = document.createElement('div');
      guide.className = 'session-guide';
      guide.innerHTML = '<span><strong>Express</strong> pour vérifier</span><span><strong>Standard</strong> pour réviser</span><span><strong>20 questions</strong> pour s’entraîner</span>';
      summary.parentNode.insertBefore(guide, summary);
    }
  };
})();