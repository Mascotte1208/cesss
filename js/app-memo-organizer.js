/* Fiches par matière, année et dossier ; dossiers fermés par défaut. */
function memoFlatten(source){return Array.isArray(source)?source.slice():Object.keys(source||{}).reduce(function(a,k){return a.concat(Array.isArray(source[k])?source[k]:[]);},[]);}
function memoRich(text){return escapeHtml(text||'').replace(/&lt;(\/?)(sub|sup)&gt;/g,'<$1$2>');}
function memoEntries(){
    if(cessMemoMode==='formules')return memoFlatten(typeof FORMULES_DATA==='undefined'?[]:FORMULES_DATA).map(function(x){return Object.assign({},x,{subject:'maths'});});
    if(cessMemoMode==='vocab')return memoFlatten(typeof GEO_VOCAB==='undefined'?[]:GEO_VOCAB).map(function(x){return Object.assign({},x,{subject:'geo'});});
    var entries=[];
    Object.keys(CESS_SUBJECTS).forEach(function(k){allChaps(k).forEach(function(c){(c.fiches||[]).forEach(function(f){entries.push({titre:f.term,definition:f.definition,exemple:f.example,annee:c.annee,categorie:c.titre,subject:k,chapterId:c.id});});});});
    return entries;
}
function renderMemo(){
    var root=document.getElementById('memoContent');if(!root)return;
    var entries=memoEntries(), select=document.getElementById('memoSubject'), previous=select.value||'all';
    var keys=Object.keys(CESS_SUBJECTS).filter(function(k){return entries.some(function(x){return x.subject===k;});});
    select.innerHTML='<option value="all">Toutes les matières</option>'+keys.map(function(k){return '<option value="'+k+'">'+escapeHtml(CESS_SUBJECTS[k].label)+'</option>';}).join('');
    select.value=keys.indexOf(previous)>=0?previous:'all';select.style.display='';
    var year=document.getElementById('memoYear').value||'all', query=libraryNormalize(document.getElementById('memoSearch').value);
    entries=entries.filter(function(x){return (select.value==='all'||x.subject===select.value)&&(year==='all'||x.annee===year)&&(!query||libraryNormalize([x.titre,x.mot,x.terme,x.def,x.definition,x.exemple,x.categorie,x.theme].join(' ')).includes(query));});
    var category=document.getElementById('memoCategory');category.style.display='none';
    var groups={};entries.forEach(function(x){var subject=x.subject,folder=(x.annee||'Repères')+' · '+(x.categorie||x.theme||'Repères');if(!groups[subject])groups[subject]={};(groups[subject][folder]||(groups[subject][folder]=[])).push(x);});
    root.innerHTML=entries.length?'<p>'+entries.length+' fiche(s) · Ouvre une matière puis un dossier.</p>'+Object.keys(groups).map(function(k){return '<details class="memo-group"><summary><strong>'+escapeHtml(CESS_SUBJECTS[k].label)+'</strong><span>'+Object.keys(groups[k]).length+' dossiers</span></summary>'+Object.keys(groups[k]).sort().map(function(folder){return '<details class="memo-group"><summary>'+escapeHtml(folder)+'<span>'+groups[k][folder].length+' fiches</span></summary><div class="memo-grid">'+groups[k][folder].map(function(x){return '<article class="memo-card"><strong>'+escapeHtml(x.titre||x.mot||x.terme||'Repère')+'</strong><p>'+memoRich(x.definition||x.def||x.formule)+'</p>'+(x.exemple?'<div class="memo-example">'+memoRich(x.exemple)+'</div>':'')+(x.chapterId?'<button class="button secondary" onclick="openStudyChapter(\''+x.chapterId+'\')">Ouvrir le cours →</button>':'')+'</article>';}).join('')+'</div></details>';}).join('')+'</details>';}).join(''):'<p class="empty-state">Aucune fiche pour ces filtres.</p>';
}
