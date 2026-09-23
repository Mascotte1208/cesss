
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=process.cwd();
const server=http.createServer((req,res)=>{
 const file=path.join(root,decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\//,'')||'index.html');
 if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end();return;}res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':'application/octet-stream');res.end(data)});
});
(async()=>{
 await new Promise(resolve=>server.listen(8765,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true});
 try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('dialog',dialog=>dialog.accept());
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8765/',{waitUntil:'networkidle'});
 const ids=await page.evaluate(()=>Object.keys(CESS_SUBJECTS).flatMap(s=>allChaps(s).map(c=>({id:c.id,subject:s}))));
 assert.equal(ids.length,380);
 for(const item of ids){
   await page.evaluate(item=>{showView(item.subject);openChapter(item.id);},item);
   assert.equal(await page.locator('.bplus-detail').count()>0,true,'Chapter missing '+item.id);
   if(item.subject==='maths'){
     assert.equal(await page.locator('.bplus-maths .maths-precision').count(),1,'Maths block missing '+item.id);
     assert.equal(await page.locator('.bplus-maths .maths-check').isVisible(),true,'Check hidden '+item.id);
   }
 }
 for(const width of [390,1440]){
   await page.setViewportSize({width,height:900});
   for(const id of ['3e_pythagore','6e_probabilites_conditionnelles','lib_histoire_4e_1']){
     await page.evaluate(id=>{showView(id.startsWith('lib_')?'histoire':'maths');openChapter(id);},id);
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);
     assert.equal(overflow,false,'Horizontal overflow '+width+' '+id);
     await page.screenshot({path:'audit-'+width+'-'+id+'.png',fullPage:true});
   }
 }
 await page.evaluate(()=>openSubjectExercises('maths'));
 await page.locator('#subjectExerciseYear').selectOption('3e');
 await page.locator('#subjectExerciseChapter').selectOption('3e_pythagore');
 await page.getByRole('button',{name:'Commencer',exact:true}).click();
 await page.locator('#subjectExerciseSession .quiz-option').first().click();
 assert(await page.locator('#subjectExerciseFeedback').innerText());
 await page.evaluate(()=>{showView('histoire');openChapter('lib_histoire_4e_1');});
 const link=page.locator('.history-source-links button').first();await link.click();
 await page.waitForTimeout(150);
 assert(await page.locator('.history-revision-card[open]').first().isVisible(),'History dossier hidden');
 await page.evaluate(()=>openSubjectExercises('histoire'));
 await page.locator('#subjectExerciseYear').selectOption('4e');
 await page.locator('#subjectExerciseLevel').selectOption('Rédaction guidée');
 await page.getByRole('button',{name:'Commencer',exact:true}).click();
 await page.locator('#subjectWrittenAnswer').fill('Je distingue les faits et leur interprétation.');
 await page.getByRole('button',{name:'Voir la correction',exact:true}).click();
 assert.equal(await page.locator('#subjectExerciseFeedback li').count(),3);
 assert.equal(await page.locator('#subjectWrittenAnswer').inputValue(),'Je distingue les faits et leur interprétation.');
 for(const [subject,id] of [['physique','lib_physique_4e_4'],['chimie','lib_chimie_4e_1']]){
  for(const width of [390,1440]){
   await page.setViewportSize({width,height:900});
   await page.evaluate(async({subject,id})=>{await ensureSubjectFigures(subject);showView(subject);openChapter(id);},{subject,id});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false,'Scientific figure overflow '+id);
   await page.screenshot({path:'audit-'+width+'-'+id+'.png',fullPage:true});
  }
 }
 // Reprise réelle après rechargement, suivi des réponses ouvertes et filtres contextuels.
 await page.evaluate(()=>{cessState.sessions={};cessSave();openSubjectExercises('francais','francais_3e_1');});
 assert.equal(await page.locator('#subjectExerciseYear').inputValue(),'3e');
 assert.equal(await page.locator('#subjectExerciseChapter').inputValue(),'francais_3e_1');
 await page.locator('#subjectExerciseLevel').selectOption('Rédaction guidée');
 await page.getByRole('button',{name:'Commencer',exact:true}).click();
 await page.locator('#subjectWrittenAnswer').fill('Mon brouillon conservé après rechargement.');
 await page.reload({waitUntil:'networkidle'});
 await page.evaluate(()=>resumeSubjectExercises());
 assert.equal(await page.locator('#subjectWrittenAnswer').inputValue(),'Mon brouillon conservé après rechargement.');
 await page.getByRole('button',{name:'Voir la correction',exact:true}).click();
 await page.getByRole('button',{name:'↺ Je dois revoir',exact:true}).click();
 const failedId=await page.evaluate(()=>cessState.sessions.subject.cards[0].id);
 await page.evaluate(()=>{cessState.sessions={};cessSave();openMistakeReview();});
 await page.getByRole('button',{name:'Commencer',exact:true}).click();
 assert(await page.evaluate(id=>cessState.sessions.subject.cards.some(c=>c.id===id),failedId));
 // Toutes les positions de réponse apparaissent, et l'ordre sauvegardé survit au rechargement.
 const positions=await page.evaluate(()=>{var row=Object.values(CESS_QUESTION_REGISTRY).find(r=>r.chapter.id==='3e_pythagore'&&r.exercise.options.length);var set=new Set();for(var i=0;i<60;i++)set.add(shuffleAnswers(row.exercise).correct);return set.size;});
 assert.equal(positions,4);
 await page.evaluate(()=>openStudyChapter('lib_chimie_4e_2'));
 await page.locator('.editorial-tabs button').filter({hasText:'Exercices'}).click();
 assert.equal(await page.locator('#subjectExerciseChapter').inputValue(),'lib_chimie_4e_2');
 await page.goto('http://127.0.0.1:8765/#chapter/francais_3e_1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>document.querySelector('.bplus-detail')?.textContent.includes('Lecture accompagnée'));
 await page.evaluate(()=>showView('progress'));
 assert(await page.getByRole('button',{name:'Télécharger ma sauvegarde',exact:true}).isVisible());
 const backup=await page.evaluate(()=>JSON.stringify(backupPayload()));
 assert.equal(await page.evaluate(raw=>validateLearningBackup(raw).format,backup),'carnet-cess-backup');
 assert.deepEqual(errors,[]);
 console.log('PASS: 380 chapter openings; 34 maths additions; desktop/mobile overflow checks; exercise feedback; history dossier navigation.');
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});

