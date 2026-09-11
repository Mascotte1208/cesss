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

function libraryNormalize(text) {
    return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function renderLibrary() {
    var root = document.getElementById('libraryContent');
    if(!root) return;
    root.innerHTML = '<div class="search-box"><label for="librarySearch">Recherche</label><input id="librarySearch" type="search" placeholder="Matière, chapitre, notion…" oninput="cessLibrarySearch=this.value;renderLibraryResults()"></div><div id="libraryResults" aria-live="polite"></div>';
    document.getElementById('librarySearch').value = window.cessLibrarySearch || '';
    renderLibraryResults();
}
function renderLibraryResults() {
    var root = document.getElementById('libraryResults');if(!root)return;
    var query=libraryNormalize(window.cessLibrarySearch), p=learningProfile();
    if(query){
        var matches=[];
        Object.keys(CESS_SUBJECTS).forEach(function(k){allChaps(k).forEach(function(c){if(libraryNormalize(CESS_SUBJECTS[k].label+' '+c.titre+' '+(c.matieres||[]).join(' ')).includes(query)) matches.push(c);});});
        root.innerHTML='<p>'+matches.length+' chapitre(s) trouvé(s)</p><div class="content-grid">'+matches.map(chapterLink).join('')+'</div>'+(matches.length?'':'<p class="empty-state">Essaie un autre mot ou une expression plus courte.</p>');return;
    }
    var groups={'Langue française et mathématiques':['francais','maths'],'Langues':['anglais','neerlandais','latin'],'Sciences':['bio','physique','chimie'],'Sciences humaines':['geo','histoire','sciences_sociales','sciences_economiques','epc'],'Numérique':['numerique']};
    root.innerHTML=Object.keys(groups).map(function(group){return '<section class="home-section"><h2>'+group+'</h2><div class="subject-cards">'+groups[group].filter(function(k){return !!CESS_SUBJECTS[k];}).map(function(k){return '<button class="subject-card" type="button" onclick="showView(\''+k+'\')"><div class="subject-icon">'+(CESS_SUBJECTS[k].icon||'📘')+'</div><h3>'+escapeHtml(CESS_SUBJECTS[k].label)+'</h3><p>'+allChaps(k).length+' chapitres · 3e à 6e</p><small>'+(p.subjects.indexOf(k)>=0?'Dans mon parcours':'Catalogue complet')+'</small></button>';}).join('')+'</div></section>';}).join('');
}
function renderLibrarySubject(subject) {
    var root=document.getElementById('libraryContent'),info=CESS_SUBJECTS[subject];
    if(!root||!info)return;
    if(!info.library){showView(subject);return;}
    var p=learningProfile();
    if(subject==='francais' && typeof renderFrenchMastery==='function'){
        renderFrenchMastery(root,p);return;
    }
    if(subject==='histoire' && typeof renderHistoryHub==='function'){
        renderHistoryHub(root,p);return;
    }
    root.innerHTML='<div class="page-header"><h1>'+escapeHtml(info.label)+'</h1><button class="button secondary" onclick="renderLibrary()">← Catalogue</button></div>'+['3e','4e','5e','6e'].map(function(year){var chapters=allChaps(subject).filter(function(c){return c.annee===year;});return '<details class="memo-group"'+(p.year===year?' open':'')+'><summary><strong>'+year+' secondaire</strong><span>'+chapters.length+' chapitres</span></summary><div class="content-grid">'+chapters.map(chapterLink).join('')+'</div></details>';}).join('');
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
