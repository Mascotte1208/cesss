/* Accueil et suivi du parcours choisi. */
function chapterLink(c) {
    return '<button class="content-card" type="button" onclick="openStudyChapter(\''+c.id+'\')"><span>'+escapeHtml(CESS_SUBJECTS[c.matiere].label)+' · '+escapeHtml(c.annee)+'</span><strong>'+escapeHtml(c.titre)+'</strong><small>'+chapterStatus(c.id)+'</small></button>';
}
function recentResults(limit) {
    var rows=(cessState.results||[]).slice(-limit).reverse();
    return rows.length ? '<div class="simple-list">'+rows.map(function(r){return '<div class="simple-list-item"><div class="simple-list-main"><strong>'+escapeHtml(resultLabel(r))+'</strong><small>'+new Date(r.date).toLocaleDateString('fr-BE')+'</small></div><span>'+Number(r.score)+' / '+Number(r.total)+'</span></div>';}).join('')+'</div>' : '<p class="empty-state">Tes prochaines sessions apparaîtront ici.</p>';
}
function homeResultPassed(r) {
    return Number(r.total)>0 && Number(r.score)/Number(r.total)>=.8;
}
function homeWeekCount(now) {
    var start=new Date(now); start.setHours(0,0,0,0);
    start.setDate(start.getDate()-(start.getDay()+6)%7);
    return (cessState.results||[]).filter(function(r){
        var date=new Date(r.date);
        return Number(r.total)>0 && date>=start && date<=now;
    }).length;
}
function setHomeGoal(value) {
    var goal=Number(value);
    if([3,5,7,10].indexOf(goal)<0)return;
    cessState.weeklyGoal=goal;cessSave();renderHome();
}
function homeSearch() {
    showView('library');
    var input=document.getElementById('librarySearch');
    if(input)input.focus();
}
function homeProgress(chapters) {
    var read=chapters.filter(function(c){return getChapterProgress(c.id)>0;}).length;
    return read+' / '+chapters.length+' cours consultés';
}
function renderHome() {
    var chapters=personalChapters(), profile=learningProfile();
    var ongoing=chapters.filter(function(c){var p=getChapterProgress(c.id);return p>0&&p<100;});
    ongoing.sort(function(a,b){
        return new Date(((cessState.mastery||{})[b.id]||{}).date||0)-new Date(((cessState.mastery||{})[a.id]||{}).date||0);
    });
    var current=ongoing[0];
    var suggestion=chapters.find(function(c){return getChapterProgress(c.id)===0;});
    var goal=[3,5,7,10].indexOf(Number(cessState.weeklyGoal))>=0?Number(cessState.weeklyGoal):5;
    var done=homeWeekCount(new Date());
    function openButton(c,label) {
        return c?'<button class="button" type="button" onclick="openStudyChapter(\''+c.id+'\')">'+label+' →</button>':
            '<button class="button" type="button" onclick="showView(\'library\')">Explorer les cours →</button>';
    }
    document.getElementById('homeStats').innerHTML=
        '<section class="focus-card focus-mission"><h2>À découvrir</h2><p>'+(suggestion?escapeHtml(suggestion.titre):'Choisis un cours à revoir dans le catalogue.')+'</p>'+openButton(suggestion,'Découvrir')+'</section>'+
        '<section class="focus-card focus-series"><h2>Reprendre un cours</h2><p>'+(current?escapeHtml(current.titre):'Aucun cours en cours dans ton parcours.')+'</p>'+(current?'<small>'+escapeHtml(chapterStatus(current.id))+'</small>':'')+openButton(current,'Reprendre')+'</section>'+
        '<section class="focus-card focus-week"><h2>Objectif de la semaine</h2><p>'+done+' session(s) terminée(s) depuis lundi</p><label>Objectif <select aria-label="Objectif hebdomadaire" onchange="setHomeGoal(this.value)">'+[3,5,7,10].map(function(n){return '<option value="'+n+'"'+(n===goal?' selected':'')+'>'+n+' sessions</option>';}).join('')+'</select></label><div class="progress-line"><span style="width:'+Math.min(100,done/goal*100)+'%"></span></div><p>'+done+' / '+goal+' sessions'+(done>=goal?' · Objectif atteint ✓':'')+'</p></section>';
    var streak=studyStreak();
    document.getElementById('homeStreak').textContent=streak?streak+' jour(s) de suite':'Ta première session t’attend';
    var preferred=['francais','maths','bio','histoire','chimie'];
    var keys=preferred.filter(function(k){return profile.subjects.indexOf(k)>=0;});
    profile.subjects.forEach(function(k){if(keys.indexOf(k)<0)keys.push(k);});
    document.getElementById('homeSubjects').innerHTML=keys.slice(0,5).map(function(k){
        var list=chapters.filter(function(c){return c.matiere===k;});
        var next=ongoing.find(function(c){return c.matiere===k;})||list.find(function(c){return getChapterProgress(c.id)===0;});
        var passed=list.filter(function(c){return getChapterProgress(c.id)>=100;}).length;
        return '<article class="home-subject-card subject-'+(preferred.indexOf(k)>=0?k:'default')+'"><div class="home-subject-title"><h3>'+escapeHtml(CESS_SUBJECTS[k].label)+'</h3></div><p>'+homeProgress(list)+'</p><p>'+passed+' / '+list.length+' chapitres : exercices réussis</p><small>'+(next?escapeHtml(next.titre):'Aucun cours à reprendre pour cette année.')+'</small>'+openButton(next,'Ouvrir le cours')+'</article>';
    }).join('');
    var next=ongoing.length?ongoing:chapters.filter(function(c){return getChapterProgress(c.id)===0;});
    document.getElementById('homePriorities').innerHTML=next.slice(0,4).map(chapterLink).join('')||'<p>Aucun cours à reprendre dans ce parcours.</p>';
    var results=(cessState.results||[]).slice(-5).reverse();
    document.getElementById('homeActivity').innerHTML=results.length?'<div class="simple-list">'+results.map(function(r){
        var valid=Number(r.total)>0, passed=valid&&homeResultPassed(r);
        return '<div class="simple-list-item '+(passed?'result-success':'result-review')+'"><div class="simple-list-main"><strong>'+escapeHtml(resultLabel(r))+'</strong><small>'+Number(r.score||0)+' / '+Number(r.total||0)+'</small></div><span>'+(passed?'Réussi ✓':valid?'À revoir':'Session terminée')+'</span></div>';
    }).join('')+'</div>':'<p>Les résultats de tes prochaines sessions apparaîtront ici.</p>';
}
function renderProgress() {
    var root=document.getElementById('progressContent');if(!root)return;
    var ch=personalChapters(), p=learningProfile(), passed=ch.filter(function(c){return getChapterProgress(c.id)>=100;}).length;
    root.innerHTML=profileEditor()+'<div class="progress-overview"><div class="progress-big-card"><strong>'+passed+' / '+ch.length+'</strong><span>Chapitres : exercices réussis</span></div><div class="progress-big-card"><strong>'+ch.filter(function(c){return getChapterProgress(c.id)>0;}).length+'</strong><span>Chapitres commencés</span></div><div class="progress-big-card"><strong>'+studyStreak()+'</strong><span>Jours de suite</span></div></div><p>Lu : lecture déclarée. À retravailler : exercices tentés. Exercices réussis : au moins 80 % sur une série d’au moins 3 questions du chapitre. Ce repère ne valide pas tout le programme.</p>'+p.subjects.map(function(k){var list=ch.filter(function(c){return c.matiere===k;});return '<details class="memo-group"><summary><strong>'+escapeHtml(CESS_SUBJECTS[k].label)+'</strong><span>'+list.filter(function(c){return getChapterProgress(c.id)>=100;}).length+' / '+list.length+'</span></summary><div class="content-grid">'+list.map(chapterLink).join('')+'</div></details>';}).join('')+'<details class="memo-group"><summary>Historique des sessions</summary>'+recentResults(30)+'</details><details class="memo-group"><summary>Mes succès</summary><div id="badgesContainer"></div></details>';
    if(typeof renderBadges==='function')renderBadges();
}
