/* Catalogue des matières de la bibliothèque CESS. */
function registerLibrarySubjects() {
    if (typeof CESS_LIBRARY_DATA === 'undefined') return;
    Object.keys(CESS_LIBRARY_DATA).forEach(function (key) {
        var item = CESS_LIBRARY_DATA[key];
        CESS_SUBJECTS[key] = {
            label: item.label,
            icon: item.icon,
            color: item.color,
            library: true,
            getData: function () { return item.data; }
        };
    });
}

function renderLibrary() {
    var root = document.getElementById('libraryContent');
    if (!root || typeof CESS_LIBRARY_DATA === 'undefined') return;
    var groups = {
        'Fondamentales': ['francais'],
        'Langues': ['anglais', 'neerlandais', 'latin'],
        'Sciences': ['physique', 'chimie', 'numerique'],
        'Sciences humaines': ['histoire', 'sciences_sociales', 'sciences_economiques', 'epc']
    };
    var status = {
        francais: 'Matière centrale', anglais: 'Selon la langue choisie', neerlandais: 'Selon la langue choisie', latin: 'Option',
        physique: 'Sciences selon l’option', chimie: 'Sciences selon l’option', numerique: 'Option / cours d’école',
        histoire: 'Matière centrale', sciences_sociales: 'Option', sciences_economiques: 'Option', epc: 'Selon le réseau'
    };
    var cards = function (keys) { return keys.filter(function (key) { return CESS_LIBRARY_DATA[key]; }).map(function (key) {
            var subject = CESS_LIBRARY_DATA[key];
            var count = Object.keys(subject.data).reduce(function (total, year) { return total + subject.data[year].length; }, 0);
            return '<button class="subject-card games-card" type="button" onclick="renderLibrarySubject(\'' + key + '\')">' +
                '<div class="subject-card-top"><div class="subject-icon">' + subject.icon + '</div><span class="subject-arrow">→</span></div>' +
                '<h3>' + escapeHtml(subject.label) + '</h3><p>3e à 6e secondaire · ' + count + ' chapitres</p>' +
                '<div class="subject-card-footer"><span>' + (status[key] || 'Programme à adapter') + '</span><span>→</span></div></button>';
        }).join(''); };
    root.innerHTML = '<div class="panel library-notice"><span class="eyebrow">Repère</span><h2>Choisis uniquement les matières de ton horaire</h2><p>Les options, le nombre d’heures et les programmes exacts varient selon l’école et le réseau. Le catalogue est organisé pour rester clair, pas pour tout réviser en même temps.</p></div>' +
        Object.keys(groups).map(function (group) {
            return '<section class="home-section"><div class="section-heading"><span class="eyebrow">Catalogue</span><h2>' + group + '</h2></div><div class="subject-cards library-subject-cards">' + cards(groups[group]) + '</div></section>';
        }).join('');
}

function renderLibrarySubject(subject) {
    var root = document.getElementById('libraryContent');
    var info = CESS_SUBJECTS[subject];
    if (!root || !info || !info.library) return;
    var data = info.getData();
    var years = ['3e', '4e', '5e', '6e'];
    root.innerHTML = '<div class="page-header"><div class="page-header-main"><span class="eyebrow">Bibliothèque CESS</span><h1>' + info.icon + ' ' + escapeHtml(info.label) + '</h1><p>Choisis une année puis ouvre un chapitre pour étudier le cours et t’entraîner.</p></div>' +
        '<button class="button secondary" type="button" onclick="renderLibrary()">← Toutes les matières</button></div>' +
        years.map(function (year) {
            var chapters = data[year] || [];
            return '<section class="panel" style="margin-top:18px"><div class="panel-header"><span class="eyebrow">' + year + ' secondaire</span><h2>' + chapters.length + ' chapitres</h2></div><div class="content-grid">' +
                chapters.map(function (chapter) {
                    return '<button type="button" class="content-card" style="text-align:left" onclick="openChapterBplus(\'' + chapter.id + '\')"><span class="content-icon">' + chapter.icone + '</span><div><strong>' + escapeHtml(chapter.titre) + '</strong><small>' + escapeHtml(chapter.matieres.slice(0, 3).join(' · ')) + '</small></div><span>→</span></button>';
                }).join('') + '</div></section>';
        }).join('');
}

function returnToSubject(subject) {
    if (CESS_SUBJECTS[subject] && CESS_SUBJECTS[subject].library) {
        showView('library');
        renderLibrarySubject(subject);
        return;
    }
    showView(subject);
}

function libraryActivityHtml(chapter, subject) {
    var notions = (chapter.matieres || []).slice(0, 4).map(escapeHtml).join(' · ');
    var info = CESS_SUBJECTS[subject] || {};
    var title = escapeHtml(chapter.titre || 'ce chapitre');
    var type = subject === 'francais' || subject === 'anglais' || subject === 'neerlandais' || subject === 'latin'
        ? 'langue' : (subject === 'physique' || subject === 'chimie' || subject === 'bio' ? 'science' : 'analyse');
    var task = type === 'langue'
        ? '<ol><li>Prépare un brouillon de cinq idées ou formulations utiles.</li><li>Rédige ou présente une réponse de 8 à 12 lignes / phrases adaptées à la consigne.</li><li>Relis-la : précision, connecteurs, registre, orthographe ou grammaire.</li></ol>'
        : type === 'science'
            ? '<ol><li>Formule une hypothèse liée au problème étudié.</li><li>Indique les données, unités ou observations utiles et explique la démarche.</li><li>Conclue avec une interprétation et une limite expérimentale.</li></ol>'
            : '<ol><li>Identifie le document, son contexte et son idée principale.</li><li>Mobilise deux notions du chapitre pour l’analyser.</li><li>Rédige une conclusion nuancée, appuyée par un exemple précis.</li></ol>';
    return '<section class="cours-section bplus-accordion bplus-exercises" data-index="activity">' +
        '<button type="button" class="cours-section-header bplus-accordion-button" aria-expanded="false" onclick="toggleCoursSection(this)">' +
        '<span class="bplus-section-number">★</span><span><small>ACTIVITÉ GUIDÉE</small>Appliquer sans QCM</span><span class="cours-chevron">▸</span></button>' +
        '<div class="cours-section-body bplus-accordion-body" style="display:none"><p><strong>' + title + '</strong></p><p>Notions à mobiliser : ' + notions + '.</p>' + task + '</div></section>';
}

registerLibrarySubjects();
