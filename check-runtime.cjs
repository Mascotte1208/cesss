const fs=require('fs'),vm=require('vm'),assert=require('assert');
const files=[...fs.readFileSync(__dirname+'/index.html','utf8').matchAll(/<script src="([^"?]+)/g)].map(x=>x[1]);
const nodes=new Map();const element=id=>{if(!nodes.has(id))nodes.set(id,{id,innerHTML:'',textContent:'',value:'',style:{},classList:{add(){},remove(){},contains(){return false}},querySelector(){return null},querySelectorAll(){return []},prepend(){},scrollIntoView(){},addEventListener(){}});return nodes.get(id);};
const storage=new Map([['carnetCESSv4',JSON.stringify({version:1,progress:{francais_3e_1:100},results:[],mistakes:['francais_3e_1_0'],theme:'dark'})]]);
const c={console,Date,Math,Map,Set,Array,Object,Number,String,JSON,FormData:global.FormData,URL,document:{readyState:'loading',getElementById:element,querySelectorAll(){return[]},querySelector(){return null},createElement(){return element('temporary')},addEventListener(){},body:{classList:{add(){},remove(){}}}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setInterval(){return 1},clearInterval(){},setTimeout(){},alert(){},scrollTo(){},print(){}};c.window=c;vm.createContext(c);
for(const f of files){try{vm.runInContext(fs.readFileSync(__dirname+'/'+f,'utf8'),c,{filename:f});}catch(e){throw Error(f+': '+e.stack);}}
assert.equal(Object.keys(c.CESS_SUBJECTS).length,14);
const library=Object.values(c.CESS_LIBRARY_DATA).flatMap(s=>Object.values(s.data).flat());assert.equal(library.length,264);
const questions=library.flatMap(ch=>ch.exercices);assert.equal(questions.length,814);assert(questions.every(q=>q.options.length===4&&q.correct>=0&&q.correct<4&&new Set(q.options).size===4));assert(questions.every(q=>!JSON.stringify(q).includes('Une notion sans lien')));assert(library.every(ch=>ch.fiches.length&&ch.cours.includes(ch.fiches[0].term.replace(/&/g,'&amp;'))));
assert.equal(c.getChapterProgress('francais_3e_1'),25);assert.equal(c.cessState.legacyMistakes.length,1);assert.equal(c.cessState.mistakes.length,0);
c.cessState.profile={year:'3e',subjects:['francais','chimie']};assert.equal(c.personalChapters().length,12);
c.renderHome();assert(element('homePriorities').innerHTML.includes('francais_3e_1'));assert(element('homeSubjects').innerHTML.includes('Jeux & quiz'));assert(element('homeActivity').innerHTML.length);
c.showView('francais');assert(element('libraryContent').innerHTML.includes('Français'));
c.cessLibrarySearch='equilibre';c.renderLibrary();c.renderLibraryResults();assert(element('libraryResults').innerHTML.includes('lib_chimie_5e_4'));
c.ensureSubjectFlashcards();assert(c.FLASHCARDS_DATA.all.every(f=>!f.definition.startsWith('Notion étudiée')));assert.equal(c.FLASHCARDS_DATA.francais.length,24);
const q={options:['correct','wrong1','wrong2','wrong3'],correct:0};for(let i=0;i<25;i++){const shuffled=c.shuffleAnswers(q);assert.equal(shuffled.options[shuffled.correct],'correct');}assert.equal(q.correct,0);
c.saveChapterAttempt('francais_3e_1',3,3);assert.equal(c.getChapterProgress('francais_3e_1'),100);c.saveChapterAttempt('francais_3e_1',1,3);assert.equal(c.getChapterProgress('francais_3e_1'),50);
c.cessMemoMode='formules';element('memoSubject').value='all';element('memoYear').value='all';element('memoSearch').value='';c.renderMemo();assert(!element('memoContent').innerHTML.includes(' open>'));assert(element('memoContent').innerHTML.includes('memo-example'));assert(!element('memoContent').innerHTML.includes('&lt;sub&gt;'));
c.renderExamPanel();element('examSubject').value='francais';element('examYear').value='3e';element('examCount').value='10';element('examMode').value='simulation';element('examDuration').value='10';c.startExam();assert.equal(c.cessExamState.questions.length,10);assert(c.cessExamState.questions.every(q=>q.matiere==='francais'&&q.annee==='3e'));
c.answerExam(c.cessExamState.questions[0].correct);assert(!element('examFeedback').innerHTML.includes('Réponse attendue'));const score=c.cessExamState.score;c.answerExam(0);assert.equal(c.cessExamState.score,score);c.finishExam();const count=c.cessState.results.length;c.finishExam();assert.equal(c.cessState.results.length,count);assert.equal(c.cessState.results.at(-1).total,10);
c.startQuiz('mixed');assert(c.cessQuizState.questions.every(q=>['francais','chimie'].includes(q.matiere)&&q.annee==='3e'));
c.cessState.profile={year:'6e',subjects:['francais']};c.startQuiz('mixed');assert(c.cessQuizState.questions.every(q=>q.matiere==='francais'&&q.annee==='6e'));
c.startMatchingGame();assert.equal(c.matchingState.cards.length,4);for(let i=0;i<4;i++){c.chooseMatchingTerm(i);c.chooseMatchingDefinition(i);}assert(c.matchingState.finished);const afterMatch=c.cessState.results.length;c.chooseMatchingDefinition(3);assert.equal(c.cessState.results.length,afterMatch);
c.flashcardSubject='francais';element('flashYear').value='6e';element('flashChapter').value='all';element('flashCount').value='10';c.startFlashcardSession();assert.equal(c.flashcardDeck.length,6);const card=c.flashcardDeck[0];c.flipFlashcard();c.rateFlashcard(false);assert(c.cessState.flashLearning[card.id]);assert.equal(c.flashcardIndex,1);c.rateFlashcard(true);assert.equal(c.flashcardIndex,1);
c.cessSave();const saved=JSON.parse(storage.get('carnetCESSv4'));assert(saved.profile&&saved.mastery&&saved.legacyMistakes);
console.log('PASS: all scripts, 14 subjects, 264 fiches / 814 QCM, profile migration, navigation, search results, memo folders, flashcard content, answer mapping, progress, simulation and duplicate completion.');

console.log("Flashcards utiles :",c.FLASHCARDS_DATA.all.length);
