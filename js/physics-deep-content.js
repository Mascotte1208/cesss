/* Approfondissement éditorial de tous les chapitres de Physique, sans changer la maquette. */
(function () {
  if (typeof CESS_LIBRARY_DATA === 'undefined' || !CESS_LIBRARY_DATA.physique) return;

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"]/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char];
    });
  }

  function text(value) {
    return String(value || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function firstParagraphAfterHeading(html, heading) {
    var marker = '<h4>' + heading + '</h4>';
    var start = String(html || '').indexOf(marker);
    if (start < 0) return '';
    var match = String(html).slice(start + marker.length).match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    return match ? text(match[1]).slice(0, 440) : '';
  }

  function usefulCards(chapter) {
    var cards = Array.isArray(chapter.fiches) ? chapter.fiches : [];
    return cards.filter(function (card) {
      return card && (card.term || card.terme) && !/relation clé/i.test(card.term || card.terme);
    }).slice(0, 5);
  }

  function repairGenericCards(chapter) {
    (chapter.fiches || []).forEach(function (card) {
      if (!card || !/Notion expliquée dans le cours complet/i.test(card.definition || '')) return;
      var heading = card.term || card.terme || '';
      var found = firstParagraphAfterHeading(chapter.cours, heading);
      if (found) card.definition = found;
    });
  }

  function enrichment(chapter) {
    var cards = usefulCards(chapter);
    var terms = cards.map(function (card) { return card.term || card.terme; });
    var definitions = cards.map(function (card) {
      return '<li><strong>' + esc(card.term || card.terme) + ' :</strong> ' + esc(card.definition || 'notion à relier au modèle du chapitre') + '</li>';
    }).join('');
    var relationCard = (chapter.fiches || []).find(function (card) { return /relation clé/i.test((card && (card.term || card.terme)) || ''); });
    var relation = relationCard ? relationCard.definition : '';
    var example = cards.map(function (card) { return card.example || ''; }).find(Boolean) || chapter.desc || '';

    return '<h4>Comprendre le phénomène en profondeur</h4>' +
      '<p><strong>Idée directrice.</strong> ' + esc(chapter.desc || 'Ce chapitre construit un modèle physique à partir d’observations et de mesures.') + '</p>' +
      '<p>Pour raisonner correctement, commence par définir le système étudié et son environnement. Sépare ensuite les observations, les grandeurs mesurées et l’explication proposée. Les notions ' + esc(terms.join(', ')) + ' ne sont pas indépendantes : elles forment le vocabulaire nécessaire pour décrire le phénomène, prévoir son évolution et vérifier le modèle.</p>' +
      (definitions ? '<ul class="physics-deep-definitions">' + definitions + '</ul>' : '') +
      '<p>Une représentation — schéma, diagramme, graphique ou vecteur — doit compléter le texte dès qu’elle rend les directions, les variations ou les interactions plus faciles à comprendre.</p>' +
      '<h4>Lois, grandeurs et applications</h4>' +
      (relation ? '<p class="chem-formula"><strong>Relation à maîtriser :</strong> ' + esc(relation) + '</p>' : '<p>Repère dans le cours la relation qui relie les grandeurs du problème et précise son domaine de validité.</p>') +
      '<ol><li>Écrire les données avec leur symbole et leur unité.</li><li>Convertir les valeurs dans le Système international.</li><li>Choisir la loi et expliquer pourquoi elle s’applique.</li><li>Isoler la grandeur inconnue avant de remplacer par les nombres.</li><li>Contrôler l’unité, le signe, l’ordre de grandeur et la cohérence physique.</li></ol>' +
      '<div class="physics-worked-example"><h5>Lecture guidée d’une application</h5><p>' + esc(example) + '</p><p>Le résultat final doit être accompagné d’une phrase qui répond à la question. Une valeur isolée, même correcte, ne montre pas que le phénomène a été compris.</p></div>' +
      '<h4>Démarche scientifique</h4>' +
      '<ol><li>Formuler une question testable et une hypothèse précise.</li><li>Choisir la variable modifiée, la variable mesurée et les paramètres maintenus constants.</li><li>Préparer un protocole reproductible et identifier les risques.</li><li>Réaliser plusieurs mesures, les présenter dans un tableau et tenir compte des incertitudes.</li><li>Tracer un graphique si nécessaire, comparer aux prévisions et discuter les limites.</li></ol>' +
      '<p><strong>Sécurité :</strong> vérifier le matériel avant la manipulation, préparer les circuits hors tension, protéger les yeux et ne jamais regarder directement une source lumineuse intense ou un laser.</p>' +
      '<h4>Pièges à éviter</h4>' +
      '<ul><li>Confondre une grandeur, son symbole et son unité.</li><li>Utiliser une formule sans annoncer les hypothèses du modèle.</li><li>Arrondir trop tôt ou conserver une précision irréaliste.</li><li>Décrire une corrélation comme une cause sans justification.</li><li>Oublier qu’une mesure possède toujours une incertitude.</li></ul>' +
      '<h4>Synthèse CESS</h4>' +
      '<p>Tu maîtrises le chapitre si tu peux définir les notions clés sans support, expliquer le phénomène avec un schéma, sélectionner la bonne loi, résoudre une application avec unités et analyser de façon critique une expérience.</p>' +
      '<ol><li>Je sais nommer les grandeurs utiles.</li><li>Je sais expliquer le modèle avec mes propres mots.</li><li>Je sais justifier la relation utilisée.</li><li>Je sais présenter et interpréter un calcul.</li><li>Je sais repérer une erreur de raisonnement ou de protocole.</li></ol>';
  }

  Object.keys(CESS_LIBRARY_DATA.physique.data || {}).forEach(function (year) {
    (CESS_LIBRARY_DATA.physique.data[year] || []).forEach(function (chapter) {
      repairGenericCards(chapter);
      if (String(chapter.cours || '').indexOf('Comprendre le phénomène en profondeur') < 0) {
        chapter.cours = String(chapter.cours || '') + enrichment(chapter);
      }
      chapter.objectifs = [
        'Expliquer le phénomène et relier les notions essentielles',
        'Choisir les lois, les grandeurs et les unités adaptées',
        'Résoudre une application et analyser une démarche expérimentale'
      ];
      chapter.contentVersion = 8;
    });
  });
})();
