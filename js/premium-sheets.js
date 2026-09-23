/* Fiches de chapitre — structure simple commune à toutes les matières. */
(function () {
  function esc(value) {
    return typeof escapeHtml === 'function'
      ? escapeHtml(String(value == null ? '' : value))
      : String(value || '');
  }

  function unique(values) {
    var seen = {};
    return values.filter(function (value) {
      var key = String(value || '').trim().toLowerCase();
      if (!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function essentialItems(chapter, detail) {
    var knowledge = Array.isArray(chapter.matieres) ? chapter.matieres : [];
    var objectives = Array.isArray(chapter.objectifs) ? chapter.objectifs : [];
    var cards = Array.isArray(chapter.fiches) ? chapter.fiches.map(function (card) {
      return card.definition || card.term || card.terme || '';
    }) : [];
    var headings = Array.prototype.map.call(
      detail.querySelectorAll('.bplus-accordion-button>span:nth-child(2)'),
      function (node) {
        var clone = node.cloneNode(true);
        Array.prototype.forEach.call(clone.querySelectorAll('small'), function (small) { small.remove(); });
        return clone.textContent.trim();
      }
    );
    return unique(knowledge.concat(objectives, cards, headings)).slice(0, 4);
  }

  function subjectSymbol(subject, fallback) {
    return ({
      francais: '▤',
      maths: '∑',
      bio: '♧',
      histoire: '▥',
      chimie: '⚗',
      geo: '◎',
      physique: 'ϟ',
      anglais: 'A',
      neerlandais: 'N',
      latin: 'L',
      numerique: '01',
      sciences_sociales: '◉',
      sciences_economiques: '€',
      epc: '⚖'
    })[subject] || fallback || '◇';
  }

  function expandEditorialSections(detail) {
    var sections = detail.querySelectorAll('.bplus-accordion');
    Array.prototype.forEach.call(sections, function (section, index) {
      var button = section.querySelector('.bplus-accordion-button');
      var body = section.querySelector('.bplus-accordion-body');
      if (button) {
        var title = button.querySelector('span:nth-child(2)');
        var heading = document.createElement('h2');
        heading.className = 'editorial-section-title';
        heading.innerHTML = '<span>' + (index + 1) + '.</span>' + (title ? title.innerHTML.replace(/<small>[\s\S]*?<\/small>/, '') : 'Cours');
        button.replaceWith(heading);
      }
      section.classList.add('editorial-section');
      section.classList.remove('open');
      if (body) body.style.display = 'block';
    });
  }

  function firstExercise(chapter) {
    if(chapter.guidedExample)return chapter.guidedExample;
    return (chapter.exercices||[]).find(function(q){return q.correction&&q.correction.length>120&&!/^Quelle (notion|erreur|démarche|relation)/.test(q.question);})||null;
  }
  function chapterVigilance(chapter){
    if(chapter.vigilance)return chapter.vigilance;
    var match=String(chapter.cours||'').match(/<(?:p|div)[^>]*class="[^"]*(?:piege|warning|erreur)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/);
    return match?match[1].replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim():'';
  }

  function vigilance(subject) {
    return ({
      histoire: 'Distingue toujours le fait, sa date, ses causes et ses conséquences.',
      francais: 'Justifie chaque interprétation par un élément précis du texte.',
      maths: 'Écris les étapes du raisonnement et vérifie les conditions d’application.',
      geo: 'Nomme l’échelle, localise le phénomène et cite les indicateurs utilisés.',
      bio: 'Relie chaque structure à sa fonction et emploie le vocabulaire scientifique exact.',
      chimie: 'Vérifie les symboles, les unités et l’équilibrage avant de conclure.',
      physique: 'Note les données, les unités et la loi utilisée avant le calcul.',
      anglais: 'Réponds avec une phrase complète et réutilise le vocabulaire du chapitre.',
      neerlandais: 'Controleer de woordvolgorde en het werkwoord voordat je antwoordt.',
      latin: 'Identifie d’abord les formes et les fonctions avant de traduire.',
      numerique: 'Explique le fonctionnement, les données utilisées et les risques associés.',
      sciences_sociales: 'Sépare les observations, les hypothèses et les interprétations.',
      sciences_economiques: 'Définis les acteurs, le mécanisme et les effets attendus.',
      epc: 'Distingue les faits, les valeurs et les arguments.'
    })[subject] || 'Vérifie le vocabulaire, les étapes et la conclusion.';
  }

  function enhancePremiumSheet(id) {
    var detail = document.querySelector('.bplus-detail');
    if (!detail || detail.dataset.simpleSheet === '1') return;
    var chapter = typeof findChapter === 'function' ? findChapter(id) : null;
    if (!chapter) return;

    var subject = chapter.matiere || 'maths';
    var info = (typeof CESS_SUBJECTS !== 'undefined' && CESS_SUBJECTS[subject]) || {};
    var header = detail.querySelector('.bplus-header');
    var tabs = detail.querySelector('.premium-sheet-tabs');
    var prerequisites = detail.querySelector('.bplus-prerequisites');
    var chips = detail.querySelector('.bplus-chips');
    var intro = detail.querySelector('.bplus-intro');
    var items = essentialItems(chapter, detail);
    var exercise = firstExercise(chapter);

    detail.dataset.simpleSheet = '1';
    detail.dataset.subjectLabel = esc(info.label || subject);

    if (tabs) tabs.remove();
    if (prerequisites) prerequisites.remove();
    if (chips) chips.remove();

    if (header) {
      var icon = header.querySelector('.bplus-icon');
      if (icon) {
        icon.style.display = '';
        icon.textContent = subjectSymbol(subject, info.icon);
      }
      var kicker = header.querySelector('.bplus-kicker');
      if (kicker) kicker.textContent = info.label || 'Matière';
      var meta = header.querySelector('.bplus-meta');
      if (meta) meta.remove();

      var tabsBar = document.createElement('nav');
      tabsBar.className = 'editorial-tabs';
      tabsBar.setAttribute('aria-label', 'Ressources du chapitre');
      tabsBar.innerHTML =
        '<button class="active" type="button"><span>▤</span>Cours</button>' +
        '<button type="button" onclick="openChapterResource(\'memo\',\'' + esc(chapter.id) + '\')"><span>▧</span>Mémo</button>' +
        '<button type="button" onclick="openChapterResource(\'flashcards\',\'' + esc(chapter.id) + '\')"><span>▦</span>Flashcards</button>' +
        '<button type="button" onclick="openChapterResource(\'exercise\',\'' + esc(chapter.id) + '\')"><span>✎</span>Exercices</button>';
      header.insertAdjacentElement('afterend', tabsBar);
    }

    if (intro) {
      var title = intro.querySelector('h2');
      var label = intro.querySelector('.bplus-kicker');
      var text = intro.querySelector('p:not(.bplus-kicker)');
      if (title) title.textContent = 'Le cours';
      if (label) label.remove();
      if (text) text.remove();
    }

    var reading = detail.querySelector('.bplus-reading');
    if (reading) {
      var objective = document.createElement('section');
      objective.className = 'editorial-objective';
      objective.innerHTML = '<span aria-hidden="true">◎</span><div><h2>Objectif d’apprentissage</h2><p>' + esc((Array.isArray(chapter.objectifs) && chapter.objectifs.join(' · ')) || chapter.desc || 'Comprendre et maîtriser les notions essentielles de ce chapitre.') + '</p></div>';
      reading.insertBefore(objective, reading.firstChild);
    }

    expandEditorialSections(detail);

    var rail = detail.querySelector('.bplus-rail');
    if (rail) {
      rail.innerHTML =
        '<section class="editorial-card retain"><h2><span>♢</span>À retenir</h2><ul>' + items.map(function (item) { return '<li>' + esc(item) + '</li>'; }).join('') + '</ul></section>' +
        (exercise ? '<section class="editorial-card example"><h2><span>✓</span>Exemple corrigé</h2><h3>' + esc(exercise.question || 'Application') + '</h3><p>' + esc(exercise.correction || 'Retrouve la démarche dans le cours puis vérifie chaque étape.') + '</p></section>' : '') +
        (chapterVigilance(chapter) ? '<section class="editorial-card warning"><h2><span>!</span>Point de vigilance</h2><p>' + esc(chapterVigilance(chapter)) + '</p></section>' : '') +
        '<button class="button primary editorial-practice" onclick="openChapterResource(\'exercise\',\'' + esc(chapter.id) + '\')" type="button">S’entraîner dans cette matière →</button>';
    }

    var printZone = detail.querySelector('.bplus-print');
    if (printZone) printZone.insertAdjacentHTML('afterbegin', '<button class="button secondary editorial-done" onclick="markDone(\'' + esc(chapter.id) + '\')" type="button">✓ Marquer comme consulté</button>');
  }

  window.enhancePremiumSheet = enhancePremiumSheet;
  var originalBplus = window.openChapterBplus;
  if (typeof originalBplus === 'function') {
    window.openChapterBplus = function (id) {
      var result = originalBplus.apply(this, arguments);
      enhancePremiumSheet(id);
      return result;
    };
  }
})();
