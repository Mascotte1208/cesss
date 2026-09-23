/* Les planches détaillées sont exécutées à l'ouverture de leur matière. */
var figureRequests=Object.create(null),figureReady=Object.create(null);
function ensureSubjectFigures(subject){
 var prefix={bio:'biology',chimie:'chemistry',physique:'physics'}[subject];if(!prefix||figureReady[subject])return Promise.resolve(false);
 if(figureRequests[subject])return figureRequests[subject];
 figureRequests[subject]=['3e','4e','5e','6e'].reduce(function(p,year){return p.then(function(){return new Promise(function(resolve,reject){var script=document.createElement('script');script.src='js/'+prefix+'-diagrams-'+year+'.js?v=1';script.onload=resolve;script.onerror=function(){script.remove();reject(new Error('Planche indisponible'));};document.head.appendChild(script);});});},Promise.resolve()).then(function(){figureReady[subject]=true;return true;}).catch(function(){delete figureRequests[subject];return false;});
 return figureRequests[subject];
}
