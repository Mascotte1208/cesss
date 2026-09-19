/* Croisement des 24 chapitres principaux avec les 178 dossiers d'Histoire. */
(function () {
  if (typeof CESS_LIBRARY_DATA === 'undefined' || !CESS_LIBRARY_DATA.histoire) return;
  var dossiers = Array.isArray(window.HISTORY_REVISION_DATA) ? window.HISTORY_REVISION_DATA : [];

  var routes = {
    'lib_histoire_3e_1': /source|critique|historien|chronolog|périodis|document/i,
    'lib_histoire_3e_2': /chute de l'empire romain|empire byzantin|royaumes germaniques|mérovingiens|charlemagne|carolingien|verdun/i,
    'lib_histoire_3e_3': /féodalité|société médiévale|monde paysan|seigneur|église médiévale|ordres monastiques|croisades/i,
    'lib_histoire_3e_4': /qu'est-ce que la renaissance|artistes de la renaissance|humanis|imprimerie/i,
    'lib_histoire_3e_5': /grandes découvertes géographiques|conséquences des découvertes|exploration|premiers empires|colonies anglaises en amérique/i,
    'lib_histoire_3e_6': /causes de la réforme|luther|calvin|contre-réforme|guerres de religion|protestant|conflits confessionnels/i,
    'lib_histoire_4e_1': /absolut|monarchie|louis xiv|ancien régime|révolutions anglaises/i,
    'lib_histoire_4e_2': /lumières|encyclopédie|despotisme éclairé/i,
    'lib_histoire_4e_3': /france en 1789|déroulement de la révolution|principes de 1789|révolution française|révolutions atlantiques|indépendance américaine|haïtienne|terreur|directoire/i,
    'lib_histoire_4e_4': /napoléon|du général au consul|réformes napoléoniennes|europe napoléonienne|congrès de vienne|waterloo/i,
    'lib_histoire_4e_5': /industrialis|question sociale|mouvement ouvrier|charbon|machine/i,
    'lib_histoire_4e_6': /révolution belge|1830|constitution belge|piliers|question linguistique|démocratisation/i,
    'lib_histoire_5e_1': /impérialisme|partage de l'afrique|conférence de berlin|congo belge|résistances anticoloniales/i,
    'lib_histoire_5e_2': /première guerre|1914|nationalisme|tranchées|causes de la guerre|déroulement de la guerre|bilan de la guerre|traité de versailles/i,
    'lib_histoire_5e_3': /entre-deux-guerres|crise de 1929|fascisme|nazisme|stalin|dictature/i,
    'lib_histoire_5e_4': /seconde guerre|shoah|génocide|belgique pendant la seconde guerre|occupation allemande de la belgique/i,
    'lib_histoire_5e_5': /naissance de la guerre froide|grandes crises de la guerre froide|monde bipolaire|otan|pacte de varsovie|onu, nuremberg/i,
    'lib_histoire_5e_6': /décolonisation|indépendance|bandung|non-align|algérie|inde/i,
    'lib_histoire_6e_1': /construction européenne|origines à l'union européenne|institutions européennes|ceca|cee|belgique fédérale|communautés|régions/i,
    'lib_histoire_6e_2': /fin de la guerre froide|1989|mur de berlin|gorbatchev|nouvel ordre mondial/i,
    'lib_histoire_6e_3': /mondialisation|économie mondiale|échanges|crise financière|multinationale/i,
    'lib_histoire_6e_4': /terrorisme international|11 septembre|montée en puissance de la chine|géopolitique contemporaine/i,
    'lib_histoire_6e_5': /migrations contemporaines|état social|nouveaux droits|mémoire, histoire|réchauffement climatique|réponses politiques et sociales|démocratie menacée/i,
    'lib_histoire_6e_6': /comprendre la question d'examen|structure d'une réponse|erreurs à éviter|dissertation|essai historique/i
  };

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"]/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char];
    });
  }

  function clean(value) {
    return String(value || '').replace(/\*\*/g, '').replace(/#+\s*/g, '').replace(/\s+/g, ' ').trim();
   }

  function selectDossiers(chapter) {
    var route = routes[chapter.id] || /./;
    var selected = [], seen = {};
    dossiers.forEach(function (dossier) {
      var label = clean(dossier.title || '');
      var key = clean(dossier.title || label).toLowerCase();
      if (!route.test(label) || seen[key]) return;
      seen[key] = true;
      selected.push(dossier);
    });
    return selected;
  }

  function removeExerciseBlocks(markdown) {
    return String(markdown || '')
      .replace(/####\s*(Exercices?|Atelier CESS|Questions?[^\n]*)[\s\S]*?(?=\n####|$)/gi, '')
      .replace(/####\s*(Corrigé|Correction)[^\n]*[\s\S]*?(?=\n####|$)/gi, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function markdownToHtml(markdown) {
    var source = removeExerciseBlocks(markdown);
    var lines = source.split(/\n/), html = '', list = null;
    function closeList() { if (list) { html += '</' + list + '>'; list = null; } }
    lines.forEach(function (raw) {
      var line = raw.trim();
      if (!line) { closeList(); return; }
      var heading = line.match(/^#{2,6}\s+(.+)/);
      if (heading) { closeList(); html += '<h5>' + esc(clean(heading[1])) + '</h5>'; return; }
      var bullet = line.match(/^[-*]\s+(.+)/);
      if (bullet) { if (list !== 'ul') { closeList(); list = 'ul'; html += '<ul>'; } html += '<li>' + esc(clean(bullet[1])) + '</li>'; return; }
      var ordered = line.match(/^\d+[.)]\s+(.+)/);
      if (ordered) { if (list !== 'ol') { closeList(); list = 'ol'; html += '<ol>'; } html += '<li>' + esc(clean(ordered[1])) + '</li>'; return; }
      closeList();
      html += '<p>' + esc(clean(line)) + '</p>';
    });
    closeList();
    return html;
  }

  function dossierHtml(dossier) {
    return '<article class="history-crossed-source"><h5>' + esc(dossier.title || dossier.theme || 'Dossier croisé') + '</h5>' +
      (dossier.sourceLabel ? '<p class="physics-source-label">' + esc(dossier.sourceLabel) + '</p>' : '') +
      markdownToHtml(dossier.markdown) + '</article>';
  }

  function buildCourse(chapter, selected) {
    var notions = Array.isArray(chapter.matieres) ? chapter.matieres : [];
    var sourceContent = selected.map(dossierHtml).join('');
    return '<h4>Notions et acteurs</h4>' +
      '<p><strong>Question centrale :</strong> comment situer, expliquer et interpréter « ' + esc(String(chapter.titre || '').replace(/^\d+\.\s*/, '')) + ' » à partir de faits et de sources ?</p>' +
      '<p>Les notions indispensables sont les suivantes. Il faut pouvoir les définir, les dater, les relier à des acteurs et les employer dans une explication.</p>' +
      '<ul>' + notions.map(function (notion) { return '<li><strong>' + esc(notion) + '</strong></li>'; }).join('') + '</ul>' +
      '<h4>Contexte et évolutions</h4>' +
      (sourceContent || '<p>' + esc(chapter.desc || '') + '</p>') +
      '<h4>Repères et documents</h4>' +
      '<ul><li>Construis une frise avec les dates de rupture, mais distingue événement ponctuel et transformation longue.</li><li>Pour chaque acteur, précise ses objectifs, ses moyens d’action et ses limites.</li><li>Pour chaque document, identifie la nature, l’auteur, la date, le destinataire et le contexte de production.</li><li>Confronte le document aux connaissances : une source fournit un point de vue situé, jamais toute la réalité.</li></ul>' +
      '<h4>Méthode historique</h4>' +
      '<ol><li>Lire le verbe de consigne : identifier, comparer, expliquer, justifier ou critiquer.</li><li>Situer le sujet dans le temps et l’espace.</li><li>Sélectionner les informations pertinentes et les classer par thèmes.</li><li>Construire une relation entre causes, processus, acteurs et conséquences.</li><li>Citer brièvement les documents, expliquer chaque preuve et terminer par une conclusion nuancée.</li></ol>' +
      '<h4>Pièges à éviter</h4>' +
      '<ul><li>Réciter une chronologie sans expliquer les enchaînements.</li><li>Présenter une cause unique pour un phénomène complexe.</li><li>Juger le passé uniquement avec les valeurs actuelles sans contextualiser.</li><li>Confondre ce qu’affirme une source avec un fait déjà vérifié.</li><li>Employer des mots comme « toujours », « tous » ou « uniquement » sans preuve.</li></ul>' +
      '<h4>Synthèse CESS</h4>' +
      '<p>Tu maîtrises ce chapitre si tu peux situer les principaux repères, définir les notions, identifier les acteurs, expliquer plusieurs causes et conséquences, analyser une source et formuler une réponse argumentée.</p>' +
      '<ol><li>Je situe la période et ses ruptures.</li><li>Je relie les acteurs à leurs intérêts.</li><li>Je distingue causes, déclencheur et conséquences.</li><li>Je critique les sources avant de les utiliser.</li><li>Je conclus en répondant directement à la problématique.</li></ol>';
  }

  Object.keys(CESS_LIBRARY_DATA.histoire.data || {}).forEach(function (year) {
    (CESS_LIBRARY_DATA.histoire.data[year] || []).forEach(function (chapter) {
      var selected = selectDossiers(chapter);
      chapter.cours = buildCourse(chapter, selected);
      chapter.objectifs = [
        'Situer les faits et les transformations dans leur contexte',
        'Relier acteurs, causes, processus et conséquences',
        'Analyser et confronter des sources dans une réponse argumentée'
      ];
      chapter.fiches = (chapter.matieres || []).map(function (notion) {
        return { term: notion, definition: 'Notion à définir, contextualiser et relier aux faits du chapitre.', example: String(chapter.titre || '').replace(/^\d+\.\s*/, '') };
      });
      chapter.historySources = selected.map(function (dossier) { return dossier.id; });
      chapter.contentVersion = 9;
    });
  });
})();