/* Structure éditoriale commune aux 28 chapitres de Biologie. */
(function () {
  if (typeof BIO_CHAPITRES === 'undefined') return;

  function splitCourse(html) {
    var source = String(html || '');
    var parts = source.split(/<h4>([\s\S]*?)<\/h4>/i);
    var result = { preamble: (parts[0] || '').trim(), sections: {} };
    for (var index = 1; index < parts.length; index += 2) {
      result.sections[String(parts[index] || '').replace(/<[^>]*>/g, '').trim()] = (parts[index + 1] || '').trim();
    }
    return result;
  }

  function section(title, body) {
    return '<h4>' + title + '</h4>' + (body || '<p>Cette partie est reliée aux notions et au mécanisme présentés dans le chapitre.</p>');
  }

  function rebuild(chapter) {
    var parsed = splitCourse(chapter.cours);
    var source = parsed.sections;
    var notions = parsed.preamble + (source['Le mécanisme en un coup d’œil'] || '');
    var mechanism = source['Comprendre le mécanisme'] || '';
    var applications = source['Ce que tu dois savoir faire'] || '';
    var method = source['Observer, expérimenter, raisonner'] || '';
    var traps = source['Point de vigilance'] || '';
    var synthesis = source['Auto-contrôle'] || '';

    chapter.cours =
      section('Notions essentielles', notions) +
      section('Mécanismes du vivant', mechanism) +
      section('Schémas et applications', applications +
        '<div class="bio-application-method"><h5>Comment exploiter le schéma</h5><ol><li>Donner un titre précis au mécanisme.</li><li>Nommer les structures et les acteurs biologiques.</li><li>Orienter les flèches et expliquer chaque transformation.</li><li>Relier la structure observée à sa fonction.</li><li>Appliquer le modèle à une situation nouvelle.</li></ol></div>') +
      section('Démarche scientifique', method +
        '<div class="bio-experiment-check"><h5>Contrôle expérimental</h5><ul><li>Question et hypothèse clairement séparées.</li><li>Variable modifiée, variable mesurée et paramètres constants identifiés.</li><li>Témoin pertinent et mesures répétées.</li><li>Résultats décrits avant leur interprétation.</li><li>Conclusion limitée à ce que les données permettent d’affirmer.</li></ul></div>') +
      section('Pièges à éviter', traps) +
      section('Synthèse CESS', synthesis +
        '<p><strong>Je maîtrise le chapitre si je peux :</strong> définir les notions, refaire le mécanisme sans support, interpréter un schéma, analyser une expérience et justifier une conclusion avec un vocabulaire biologique précis.</p>');

    chapter.objectifs = [
      'Expliquer le mécanisme biologique et relier chaque structure à sa fonction',
      'Lire, compléter et interpréter un schéma scientifique',
      'Analyser une expérience et construire une conclusion fondée sur les résultats'
    ];
    chapter.contentVersion = 10;
  }

  Object.keys(BIO_CHAPITRES).forEach(function (year) {
    (BIO_CHAPITRES[year] || []).forEach(rebuild);
  });
})();