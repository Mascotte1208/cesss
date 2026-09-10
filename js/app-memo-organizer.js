/* Mémos regroupés par catégorie pour éviter les longues listes. */
(function () {
    function flatten(source) {
        if (Array.isArray(source)) return source.slice();
        return Object.keys(source || {}).reduce(function (all, key) {
            var value = source[key];
            return all.concat(Array.isArray(value) ? value : (value ? [value] : []));
        }, []);
    }

    function category(item) {
        return item.categorie || item.theme || 'Sans catégorie';
    }

    function updateCategories(items) {
        var select = document.getElementById('memoCategory');
        if (!select) return 'all';
        var previous = select.value || 'all';
        var categories = items.map(category).filter(function (value, index, list) {
            return list.indexOf(value) === index;
        }).sort();
        select.innerHTML = '<option value="all">Toutes les catégories</option>' + categories.map(function (value) {
            return '<option value="' + escapeHtml(value) + '">' + escapeHtml(value) + '</option>';
        }).join('');
        select.value = categories.indexOf(previous) !== -1 ? previous : 'all';
        return select.value;
    }

    function grouped(items, card) {
        var groups = {};
        items.forEach(function (item) {
            var key = category(item);
            if (!groups[key]) groups[key] = [];
            groups[key].push(item);
        });
        return Object.keys(groups).sort().map(function (key) {
            var entries = groups[key];
            return '<details class="memo-group" open><summary><strong>' + escapeHtml(key) + '</strong><span>' + entries.length + ' mémo' + (entries.length > 1 ? 's' : '') + '</span></summary><div class="memo-grid">' + entries.map(card).join('') + '</div></details>';
        }).join('');
    }

    function formulaCard(item) {
        var title = item.titre || item.title || item.nom || 'Formule';
        var formula = item.formule || item.formula || item.expression || '';
        var description = item.definition || item.description || item.desc || '';
        return '<div class="memo-card"><strong>' + escapeHtml(title) + '</strong>' +
            (formula ? '<div class="memo-example">' + escapeHtml(formula) + '</div>' : '') +
            (description ? '<p>' + escapeHtml(description) + '</p>' : '') +
            '<span class="memo-tag">' + escapeHtml(item.annee || '') + '</span></div>';
    }

    function vocabCard(item) {
        var term = item.mot || item.terme || item.term || 'Terme';
        return '<div class="memo-card"><strong>' + escapeHtml(term) + '</strong><p>' + escapeHtml(item.def || item.definition || '') + '</p><span class="memo-tag">' + escapeHtml(item.annee || '') + '</span></div>';
    }

    function chapterNotions() {
        var selected = (document.getElementById('memoSubject') || {}).value || 'all';
        var entries = [];
        Object.keys(CESS_SUBJECTS || {}).forEach(function (key) {
            if (selected !== 'all' && selected !== key) return;
            var info = CESS_SUBJECTS[key];
            allChaps(key).forEach(function (chapter) {
                (chapter.matieres || []).forEach(function (term) {
                    entries.push({ mot: term, definition: 'À revoir dans « ' + (chapter.titre || 'ce chapitre') + ' ».', annee: chapter.annee || '', categorie: (info.label || key) + ' · ' + (chapter.titre || 'Chapitre') });
                });
            });
        });
        return entries;
    }

    function updateSubjects() {
        var select = document.getElementById('memoSubject');
        if (!select) return;
        var was = select.value || 'all';
        select.innerHTML = '<option value="all">Toutes les matières</option>' + Object.keys(CESS_SUBJECTS || {}).map(function (key) {
            return '<option value="' + key + '">' + escapeHtml((CESS_SUBJECTS[key].icon || '📘') + ' ' + CESS_SUBJECTS[key].label) + '</option>';
        }).join('');
        select.value = CESS_SUBJECTS[was] ? was : 'all';
        select.style.display = cessMemoMode === 'notions' ? '' : 'none';
    }

    window.renderMemo = function () {
        var content = document.getElementById('memoContent');
        if (!content) return;
        updateSubjects();
        var source = cessMemoMode === 'formules'
            ? (typeof FORMULES_DATA !== 'undefined' ? FORMULES_DATA : [])
            : (cessMemoMode === 'vocab' ? (typeof GEO_VOCAB !== 'undefined' ? GEO_VOCAB : []) : chapterNotions());
        var items = flatten(source);
        var search = (document.getElementById('memoSearch').value || '').toLowerCase().trim();
        var year = document.getElementById('memoYear').value || 'all';
        var selectedCategory = updateCategories(items);
        items = items.filter(function (item) {
            var matchesSearch = !search || JSON.stringify(item).toLowerCase().indexOf(search) !== -1;
            var matchesYear = year === 'all' || String(item.annee || item.year || '') === year;
            var matchesCategory = selectedCategory === 'all' || category(item) === selectedCategory;
            return matchesSearch && matchesYear && matchesCategory;
        });
        if (!items.length) {
            content.innerHTML = '<div class="empty-state">Aucun mémo trouvé avec ces filtres.</div>';
            return;
        }
        content.innerHTML = grouped(items, cessMemoMode === 'formules' ? formulaCard : vocabCard);
    };
})();
