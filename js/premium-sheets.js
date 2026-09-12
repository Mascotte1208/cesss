/* Fiches premium — amélioration progressive du modèle commun. */
(function(){
  function esc(value){return typeof escapeHtml==='function'?escapeHtml(String(value==null?'':value)):String(value||'');}
  function enhancePremiumSheet(id){
    var detail=document.querySelector('.bplus-detail');
    if(!detail||detail.dataset.premium==='1')return;
    var chapter=typeof findChapter==='function'?findChapter(id):null;
    if(!chapter)return;
    detail.dataset.premium='1';
    var subject=chapter.matiere||'maths';
    var info=(typeof CESS_SUBJECTS!=='undefined'&&CESS_SUBJECTS[subject])||{};
    var header=detail.querySelector('.bplus-header');
    if(header){
      var tabs=document.createElement('nav');
      tabs.className='premium-sheet-tabs';
      tabs.setAttribute('aria-label','Outils de la fiche');
      tabs.innerHTML=
        '<button class="premium-sheet-tab active" type="button" data-premium-action="course">▣ Cours</button>'+
        '<button class="premium-sheet-tab" type="button" data-premium-action="memo">▤ Mémo</button>'+
        '<button class="premium-sheet-tab" type="button" data-premium-action="flash">▧ Flashcards</button>'+
        '<button class="premium-sheet-tab" type="button" data-premium-action="exercise">✎ Exercices</button>';
      header.insertAdjacentElement('afterend',tabs);
      tabs.addEventListener('click',function(event){
        var button=event.target.closest('[data-premium-action]');
        if(!button)return;
        var action=button.dataset.premiumAction;
        if(action==='course'){
          var reading=detail.querySelector('.bplus-reading');
          if(reading)reading.scrollIntoView({behavior:'smooth',block:'start'});
        }else if(action==='memo'){
          if(typeof showView==='function')showView('memo');
        }else if(action==='flash'){
          if(typeof showView==='function')showView('flashcards');
          if(typeof selectFlashcardSubject==='function')setTimeout(function(){selectFlashcardSubject(subject);},0);
        }else if(action==='exercise'&&typeof openSubjectExercises==='function'){
          openSubjectExercises(subject);
        }
      });
    }
    var objective=detail.querySelector('.bplus-prerequisites strong');
    if(objective)objective.textContent="Objectif d’apprentissage";
    var objectiveIcon=detail.querySelector('.bplus-prerequisites>span');
    if(objectiveIcon)objectiveIcon.textContent='◎';
    var readingTitle=detail.querySelector('.bplus-intro h2');
    if(readingTitle)readingTitle.textContent='Comprendre l’essentiel';
    var readingText=detail.querySelector('.bplus-intro p');
    if(readingText)readingText.textContent='Avance partie par partie. Les exemples, points essentiels et erreurs fréquentes sont mis en évidence pour faciliter la lecture.';
    var progressLabel=detail.querySelector('.bplus-rail section:first-child>small');
    if(progressLabel)progressLabel.textContent='FICHE CONSULTÉE';
    var markButton=detail.querySelector('.bplus-rail section:first-child .button');
    if(markButton)markButton.innerHTML='✓ Marquer comme consulté';
    var subjectLabel=esc(info.label||subject);
    detail.setAttribute('data-subject-label',subjectLabel);
  }
  var original=window.openChapter;
  if(typeof original==='function'){
    window.openChapter=function(id){
      var result=original.apply(this,arguments);
      enhancePremiumSheet(id);
      return result;
    };
  }
})();