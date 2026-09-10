/* Accueil et suivi du parcours choisi. */
function chapterLink(c) {
    return '<button class="content-card" type="button" onclick="openStudyChapter(\''+c.id+'\')"><span>'+escapeHtml(CESS_SUBJECTS[c.matiere].label)+' · '+escapeHtml(c.annee)+'</span><strong>'+escapeHtml(c.titre)+'</strong><small>'+chapterStatus(c.id)+'</small></button>';
}
function recentResults(limit) {
    var rows=(cessState.results||[]).slice(-limit).reverse();
    return rows.length ? '<div class="simple-list">'+rows.map(function(r){return '<div class="simple-list-item"><div class="simple-list-main"><strong>'+escapeHtml(resultLabel(r))+'</strong><small>'+new Date(r.date).toLocaleDateString('fr-BE')+'</small></div><span>'+Number(r.score)+' / '+Number(r.total)+'</span></div>';}).join('')+'</div>' : '<p class="empty-state">Tes prochaines sessions apparaîtront ici.</p>';
}
function renderHome() {
    var ch=personalChapters(), p=learningProfile(), passed=ch.filter(function(c){return getChapterProgress(c.id)>=100;}).length;
    var stats=document.getElementById('homeStats');
    if(stats) stats.innerHTML=[[ch.length,'Chapitres de mon parcours'],[passed,'Chapitres : exercices réussis'],[cessState.results.length,'Sessions réalisées'],[studyStreak(),'Jours de suite']].map(function(x){return '<div class="home-stat"><span class="home-stat-value">'+x[0]+'</span><span class="home-stat-label">'+x[1]+'</span></div>';}).join('');
    var root=document.getElementById('homeSubjects');
    if(root) root.innerHTML=profileEditor()+'<div class="subject-cards">'+p.subjects.slice(0,4).map(function(k){var list=ch.filter(function(c){return c.matiere===k;});return '<button class="subject-card" type="button" onclick="showView(\''+k+'\')"><div class="subject-icon">'+(CESS_SUBJECTS[k].icon||'📘')+'</div><h3>'+escapeHtml(CESS_SUBJECTS[k].label)+'</h3><p>'+list.filter(function(c){return getChapterProgress(c.id)>=100;}).length+' / '+list.length+' chapitres : exercices réussis</p><span>Ouvrir →</span></button>';}).join('')+'<button class="subject-card" onclick="showView(\'library\')"><h3>Toutes les matières</h3><p>Ouvrir le catalogue →</p></button><button class="subject-card" onclick="showView(\'games\')"><h3>Jeux & quiz</h3><p>Une session courte →</p></button></div>';
    var priorities=document.getElementById('homePriorities');
    if(priorities){var ongoing=ch.filter(function(c){return getChapterProgress(c.id)>0 && getChapterProgress(c.id)<100;});priorities.innerHTML=ongoing.length?ongoing.slice(0,5).map(chapterLink).join(''):'<p class="empty-state">Ouvre un chapitre puis marque-le comme lu pour le retrouver ici.</p>';}
    var activity=document.getElementById('homeActivity');if(activity)activity.innerHTML=recentResults(5);
}
function renderProgress() {
    var root=document.getElementById('progressContent');if(!root)return;
    var ch=personalChapters(), p=learningProfile(), passed=ch.filter(function(c){return getChapterProgress(c.id)>=100;}).length;
    root.innerHTML=profileEditor()+'<div class="progress-overview"><div class="progress-big-card"><strong>'+passed+' / '+ch.length+'</strong><span>Chapitres : exercices réussis</span></div><div class="progress-big-card"><strong>'+ch.filter(function(c){return getChapterProgress(c.id)>0;}).length+'</strong><span>Chapitres commencés</span></div><div class="progress-big-card"><strong>'+studyStreak()+'</strong><span>Jours de suite</span></div></div><p>Lu : lecture déclarée. À retravailler : exercices tentés. Exercices réussis : au moins 80 % sur une série d’au moins 3 questions du chapitre. Ce repère ne valide pas tout le programme.</p>'+p.subjects.map(function(k){var list=ch.filter(function(c){return c.matiere===k;});return '<details class="memo-group"><summary><strong>'+escapeHtml(CESS_SUBJECTS[k].label)+'</strong><span>'+list.filter(function(c){return getChapterProgress(c.id)>=100;}).length+' / '+list.length+'</span></summary><div class="content-grid">'+list.map(chapterLink).join('')+'</div></details>';}).join('')+'<details class="memo-group"><summary>Historique des sessions</summary>'+recentResults(30)+'</details><details class="memo-group"><summary>Mes succès</summary><div id="badgesContainer"></div></details>';
    if(typeof renderBadges==='function')renderBadges();
}
