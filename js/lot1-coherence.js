/* Séries courtes et lisibles sans modifier les banques de questions. */
(function () {
  var originalOpen = window.openSubjectExercises;
  if (typeof originalOpen !== 'function') return;

  window.openSubjectExercises = function (subject) {
    originalOpen(subject);
    var select = document.getElementById('subjectExerciseCount');
    if (select) {
      select.innerHTML =
        '<option value="5">Express · 5 questions · ≈ 3 min</option>' +
        '<option value="10" selected>Standard · 10 questions · ≈ 7 min</option>' +
        '<option value="20">Entraînement · 20 questions · ≈ 15 min</option>';
      select.setAttribute('aria-label', 'Durée de la série');
    }
    var summary = document.getElementById('subjectExerciseSummary');
    if (summary) {
      var guide = document.createElement('div');
      guide.className = 'session-guide';
      guide.innerHTML = '<span><strong>Express</strong> pour vérifier</span><span><strong>Standard</strong> pour réviser</span><span><strong>20 questions</strong> pour s’entraîner</span>';
      summary.parentNode.insertBefore(guide, summary);
    }
  };
})();