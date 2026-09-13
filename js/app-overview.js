/* Accueil et suivi du parcours choisi. */
function chapterLink(c) {
    return '<button class="content-card" type="button" onclick="openStudyChapter(\''+c.id+'\')"><span>'+escapeHtml(CESS_SUBJECTS[c.matiere].label)+' · '+escapeHtml(c.annee)+'</span><strong>'+escapeHtml(c.titre)+'</strong><small>'+chapterStatus(c.id)+'</small></button>';
}
function recentResults(limit) {
    var rows=(cessState.results||[]).slice(-limit).reverse();
    return rows.length ? '<div class="simple-list">'+rows.map(function(r){return '<div class="simple-list-item"><div class="simple-list-main"><strong>'+escapeHtml(resultLabel(r))+'</strong><small>'+new Date(r.date).toLocaleDateString('fr-BE')+'</small></div><span>'+Number(r.score)+' / '+Number(r.total)+'</span></div>';}).join('')+'</div>' : '<p class="empty-state">Tes prochaines sessions apparaîtront ici.</p>';
}
function homeSubjectClass(key) {
    return ({francais:'francais',maths:'maths',bio:'bio',histoire:'histoire',chimie:'chimie'})[key] || 'default';
}
function homeSubjectCard(key, chapters) {
    var info=CESS_SUBJECTS[key], list=chapters.filter(function(c){return c.matiere===key;}), total=0;
    list.forEach(function(c){total+=getChapterProgress(c.id);});
    var percent=list.length?Math.round(total/list.length):0;
    var current=list.find(function(c){return getChapterProgress(c.id)>0&&getChapterProgress(c.id)<100;}) || list[0];
    return '<button class="home-subject-card subject-'+homeSubjectClass(key)+'" type="button" onclick="showView(\''+key+'\')">'+
        '<div class="home-subject-title"><span>'+(info.icon||'📘')+'</span><h3>'+escapeHtml(info.label)+'</h3></div>'+
        '<div class="progress-line"><span style="width:'+percent+'%"></span></div>'+
        '<div class="home-subject-progress"><span>Progression</span><strong>'+percent+' %</strong></div>'+
        '<small>'+(current?'À poursuivre · '+escapeHtml(current.titre):list.length+' chapitres disponibles')+'</small>'+
        '<b><span>Continuer</span><span>→</span></b></button>';
}
function renderHome() {
    var ch=personalChapters(), p=learningProfile(), passed=ch.filter(function(c){return getChapterProgress(c.id)>=100;}).length;
    var ongoing=ch.filter(function(c){return getChapterProgress(c.id)>0 && getChapterProgress(c.id)<100;});
    var current=ongoing[0] || ch.find(function(c){return getChapterProgress(c.id)<100;}) || ch[0];
    var weeklyTarget=Math.min(12,Math.max(3,ch.length));
    var weeklyDone=Math.min(passed,weeklyTarget);
    var weeklyPercent=Math.round(weeklyDone/weeklyTarget*100);
    var stats=document.getElementById('homeStats');
    if(stats) stats.innerHTML=
        '<section class="focus-card focus-mission"><div class="focus-card-head"><span>◎</span><div><h2>Mission du jour</h2><p>'+(current?'Avance sur '+escapeHtml(current.titre)+' ('+escapeHtml(current.annee)+').':'Choisis une matière pour démarrer ton parcours.')+'</p></div></div><div class="focus-meta"><span>Lire le cours · faire les exercices · valider le quiz</span><strong>'+passed+' réussi'+(passed>1?'s':'')+'</strong></div><button class="button" type="button" '+(current?'onclick="openStudyChapter(\''+current.id+'\')"':'onclick="showView(\'library\')"')+'>'+(current?'Commencer maintenant':'Choisir une matière')+' →</button></section>'+
        '<section class="focus-card focus-series"><div class="focus-card-head"><span>▮▮</span><div><h2>Série en cours</h2><p>'+(current?escapeHtml(CESS_SUBJECTS[current.matiere].label)+' · '+escapeHtml(current.annee):'Ton parcours CESS')+'</p></div></div><strong>'+(current?escapeHtml(current.titre):'Aucun chapitre commencé')+'</strong><div class="progress-line"><span style="width:'+(current?getChapterProgress(current.id):0)+'%"></span></div><div class="focus-meta"><span>Progression</span><strong>'+(current?getChapterProgress(current.id):0)+' %</strong></div><button class="button" type="button" '+(current?'onclick="openStudyChapter(\''+current.id+'\')"':'onclick="showView(\'library\')"')+'>Continuer →</button></section>'+
        '<section class="focus-card focus-week"><div class="focus-card-head"><span>▥</span><div><h2>Objectif hebdo</h2><p>'+p.subjects.length+' matières · '+weeklyTarget+' étapes</p></div></div><div class="progress-line"><span style="width:'+weeklyPercent+'%"></span></div><div class="focus-meta"><span>Bonne progression</span><strong>'+weeklyDone+' / '+weeklyTarget+'</strong></div><button class="button" type="button" onclick="showView(\'progress\')">Voir mon parcours →</button></section>';
    var streak=document.getElementById('homeStreak');
    if(streak) streak.innerHTML='🔥 <span>'+studyStreak()+' jour'+(studyStreak()>1?'s':'')+' consécutif'+(studyStreak()>1?'s':'')+' !</span>';
    var root=document.getElementById('homeSubjects');
    if(root) {
        var preferred=['francais','maths','bio','histoire','chimie'];
        var visible=preferred.filter(function(k){return p.subjects.indexOf(k)>=0&&CESS_SUBJECTS[k];});
        p.subjects.forEach(function(k){if(visible.length<5&&visible.indexOf(k)<0)visible.push(k);});
        root.innerHTML=visible.slice(0,5).map(function(k){return homeSubjectCard(k,ch);}).join('');
    }
    var priorities=document.getElementById('homePriorities');
    if(priorities){var next=ongoing.length?ongoing:ch.filter(function(c){return getChapterProgress(c.id)<100;});priorities.innerHTML=next.length?next.slice(0,4).map(chapterLink).join(''):'<p class="empty-state">Tout est à jour : beau travail !</p>';}
    var activity=document.getElementById('homeActivity');if(activity)activity.innerHTML=recentResults(5);
}
function renderProgress() {
    var root=document.getElementById('progressContent');if(!root)return;
    var ch=personalChapters(), p=learningProfile(), passed=ch.filter(function(c){return getChapterProgress(c.id)>=100;}).length;
    root.innerHTML=profileEditor()+'<div class="progress-overview"><div class="progress-big-card"><strong>'+passed+' / '+ch.length+'</strong><span>Chapitres : exercices réussis</span></div><div class="progress-big-card"><strong>'+ch.filter(function(c){return getChapterProgress(c.id)>0;}).length+'</strong><span>Chapitres commencés</span></div><div class="progress-big-card"><strong>'+studyStreak()+'</strong><span>Jours de suite</span></div></div><p>Lu : lecture déclarée. À retravailler : exercices tentés. Exercices réussis : au moins 80 % sur une série d’au moins 3 questions du chapitre. Ce repère ne valide pas tout le programme.</p>'+p.subjects.map(function(k){var list=ch.filter(function(c){return c.matiere===k;});return '<details class="memo-group"><summary><strong>'+escapeHtml(CESS_SUBJECTS[k].label)+'</strong><span>'+list.filter(function(c){return getChapterProgress(c.id)>=100;}).length+' / '+list.length+'</span></summary><div class="content-grid">'+list.map(chapterLink).join('')+'</div></details>';}).join('')+'<details class="memo-group"><summary>Historique des sessions</summary>'+recentResults(30)+'</details><details class="memo-group"><summary>Mes succès</summary><div id="badgesContainer"></div></details>';
    if(typeof renderBadges==='function')renderBadges();
}
