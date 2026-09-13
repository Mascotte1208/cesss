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
      physique: 'ϟ'
    })[subject] || fallback || '◇';
  }

  function keepOneSectionOpen(detail) {
    var sections = detail.querySelectorAll('.bplus-accordion');
    Array.prototype.forEach.call(sections, function (section, index) {
      var button = section.querySelector('.bplus-accordion-button');
      var body = section.querySelector('.bplus-accordion-body');
      var chevron = section.querySelector('.cours-chevron');
      var open = index === 0;
      section.classList.toggle('open', open);
      if (button) button.setAttribute('aria-expanded', String(open));
      if (body) body.style.display = open ? 'block' : 'none';
      if (chevron) chevron.textContent = open ? '▾' : '▸';
    });
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

      var essential = document.createElement('section');
      essential.className = 'simple-essential';
      essential.setAttribute('aria-labelledby', 'simpleEssentialTitle');
      essential.innerHTML =
        '<h2 id="simpleEssentialTitle">L’essentiel</h2>' +
        '<div class="simple-essential-grid">' +
        items.map(function (item, index) {
          return '<article><span aria-hidden="true">' + (index + 1) + '</span><p>' + esc(item) + '</p></article>';
        }).join('') +
        '</div>';
      header.insertAdjacentElement('afterend', essential);
    }

    if (intro) {
      var title = intro.querySelector('h2');
      var label = intro.querySelector('.bplus-kicker');
      var text = intro.querySelector('p:not(.bplus-kicker)');
      if (title) title.textContent = 'Le cours';
      if (label) label.remove();
      if (text) text.remove();
    }

    keepOneSectionOpen(detail);

    var progressLabel = detail.querySelector('.bplus-rail section:first-child>small');
    if (progressLabel) progressLabel.textContent = 'PROGRESSION';
    var markButton = detail.querySelector('.bplus-rail section:first-child .button');
    if (markButton) markButton.textContent = '✓ Marquer comme consulté';
    var exerciseTitle = detail.querySelector('.bplus-rail section:nth-child(2) h3');
    if (exerciseTitle) exerciseTitle.textContent = 'Exercices de ' + (info.label || 'la matière');
    var exerciseText = detail.querySelector('.bplus-rail section:nth-child(2) p');
    if (exerciseText) exerciseText.textContent = 'Entraîne-toi sur l’ensemble de la matière et retrouve ce chapitre dans les filtres.';
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
