
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
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8765/',{waitUntil:'networkidle'});
 const ids=await page.evaluate(()=>Object.keys(CESS_SUBJECTS).flatMap(s=>allChaps(s).map(c=>({id:c.id,subject:s}))));
 assert.equal(ids.length,380);
 for(const item of ids){
   await page.evaluate(id=>openChapter(id),item.id);
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
 await page.evaluate(()=>openChapter('lib_histoire_4e_1'));
 const link=page.locator('.history-source-links button').first();await link.click();
 await page.waitForTimeout(150);
 assert(await page.locator('.history-revision-card[open]').first().isVisible(),'History dossier hidden');
 assert.deepEqual(errors,[]);
 console.log('PASS: 380 chapter openings; 34 maths additions; desktop/mobile overflow checks; exercise feedback; history dossier navigation.');
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});
