/* Parcours personnel et progression fondée sur les exercices. */
function learningProfile() {
    var p = cessState.profile || {};
    return {year: ['3e','4e','5e','6e'].indexOf(p.year) >= 0 ? p.year : 'all', subjects: Array.isArray(p.subjects) ? p.subjects.filter(function(k){return !!CESS_SUBJECTS[k];}) : Object.keys(CESS_SUBJECTS)};
}
function personalChapters() {
    var p = learningProfile();
    return p.subjects.reduce(function(a,k){return a.concat(allChaps(k));},[]).filter(function(c){return p.year === 'all' || c.annee === p.year;});
}
function chapterStatus(id) {
    var m = (cessState.mastery || {})[id];
    if (m && m.total >= 3 && m.score / m.total >= .8) return 'Exercices réussis';
    if (m) return 'À retravailler';
    if ((cessState.readChapters || {})[id] || (cessState.progress || {})[id]) return 'Lu';
    return 'À découvrir';
}
function getChapterProgress(id) {
    var status = chapterStatus(id);
    return status === 'Exercices réussis' ? 100 : status === 'À retravailler' ? 50 : status === 'Lu' ? 25 : 0;
}
function saveChapterAttempt(id, score, total) {
    if (!id || !findChapter(id) || !total) return;
    cessState.mastery = cessState.mastery || {};
    var previous=cessState.mastery[id];
    if(total<3 && previous && previous.total>=3) return;
    cessState.mastery[id] = {score:score,total:total,date:new Date().toISOString()};
}
function noteQuizAttempts(state) {
    var groups = {};
    (state.questions || []).forEach(function(q,i){
        if (!q.chapterId || !state.responses || state.responses[i] === undefined) return;
        var g = groups[q.chapterId] || (groups[q.chapterId]={score:0,total:0});
        g.total++; if (state.responses[i] === q.correct) g.score++;
    });
    Object.keys(groups).forEach(function(id){saveChapterAttempt(id,groups[id].score,groups[id].total);});
}
function shuffleAnswers(q) {
    var ordered = shuffle(q.options.map(function(text,index){return {text:text,index:index};}));
    return Object.assign({},q,{options:ordered.map(function(x){return x.text;}),correct:ordered.findIndex(function(x){return x.index === q.correct;})});
}
function balancedQuestions(questions, count) {
    var buckets = {};
    shuffle(questions).forEach(function(q){(buckets[q.matiere] || (buckets[q.matiere]=[])).push(q);});
    var keys = shuffle(Object.keys(buckets)), selected = [];
    while(selected.length < count && keys.length) {
        keys.forEach(function(k){if(selected.length < count && buckets[k].length) selected.push(buckets[k].pop());});
        keys = keys.filter(function(k){return buckets[k].length;});
    }
    return selected.map(shuffleAnswers);
}
function studyStreak() {
    var days = new Set((cessState.results || []).map(function(r){return new Date(r.date).toDateString();}));
    var d = new Date(), count = 0;
    if(!days.has(d.toDateString())) d.setDate(d.getDate()-1);
    while(days.has(d.toDateString())){count++;d.setDate(d.getDate()-1);}
    return count;
}
function profileEditor() {
    var p = learningProfile();
    return '<details class="memo-group"><summary>Mon parcours · année et matières</summary><form id="learningProfileForm" class="panel" onsubmit="saveLearningProfile(event)"><label>Mon année <select name="year">' + ['all','3e','4e','5e','6e'].map(function(y){return '<option value="'+y+'"'+(p.year===y?' selected':'')+'>'+(y==='all'?'Toutes les années':y+' secondaire')+'</option>';}).join('')+'</select></label><fieldset class="profile-options"><legend>Mes matières</legend>'+Object.keys(CESS_SUBJECTS).map(function(k){return '<label><input type="checkbox" name="subject" value="'+k+'"'+(p.subjects.indexOf(k)>=0?' checked':'')+'> '+escapeHtml(CESS_SUBJECTS[k].label)+'</label>';}).join('')+'</fieldset><p>Le suivi et les séries mixtes utilisent ce parcours. Le catalogue complet reste accessible.</p><button class="button primary" type="submit">Enregistrer mon parcours</button><p id="profileMessage" role="status"></p></form></details>';
}
function saveLearningProfile(event) {
    event.preventDefault();
    var form = document.getElementById('learningProfileForm'), data = new FormData(form), selected = data.getAll('subject');
    if(!selected.length){document.getElementById('profileMessage').textContent='Choisis au moins une matière.';return;}
    cessState.profile = {year:data.get('year'),subjects:selected};cessSave();
    if(document.getElementById('progress').classList.contains('active')) renderProgress();else renderHome();
}
function openStudyChapter(id) {var c=findChapter(id);if(!c)return;showView(c.matiere);openChapterBplus(id);}
function resultLabel(r) {
    var key = String(r.mode || '').replace(/^exam-/, '');
    return (r.contentVersion === 2 ? '' : 'Historique antérieur · ') + (CESS_SUBJECTS[key] ? CESS_SUBJECTS[key].label : ({chapter:'Quiz de chapitre',all:'Série mixte',mistakes:'Révision des erreurs',simulation:'Simulation'}[key] || key || 'Entraînement'));
}
