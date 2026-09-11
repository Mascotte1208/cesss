/* Retours communs : le texte et le symbole complètent toujours la couleur. */
function feedbackTitle(good, state) {
    if (state) state.correctStreak = good ? (state.correctStreak || 0) + 1 : 0;
    if (!good) return '↺ À revoir — tu peux comprendre cette erreur';
    var streak = state ? state.correctStreak : 0;
    return streak >= 3 ? '✓ ' + streak + ' bonnes réponses d’affilée !' : '✓ Bien joué, bonne réponse !';
}
function feedbackMarkup(good, explanation, label, action, state) {
    return '<div class="feedback-box '+(good?'feedback-success':'feedback-retry')+'" role="status"><strong>'+escapeHtml(feedbackTitle(good,state))+'</strong><p>'+escapeHtml(explanation || '')+'</p>'+
      (action?'<button class="button primary" onclick="'+escapeHtml(action)+'">'+escapeHtml(label)+'</button>':'')+'</div>';
}
function rewardBanner(score,total) {
    var perfect=total>0 && score===total, good=total>0 && score/total>=.8;
    var title=perfect?'★ Sans faute !':good?'✓ Belle réussite !':'◆ Série terminée, tu avances';
    return '<div class="reward-banner '+(perfect?'reward-perfect':good?'reward-success':'reward-complete')+'" role="status"><strong>'+title+'</strong><span>'+Number(score)+' / '+Number(total)+' bonnes réponses</span><p>'+(perfect?'Tous les exercices de cette série sont réussis.':good?'Garde cet élan et regarde les dernières corrections.':'Repère une correction utile avant ta prochaine série.')+'</p></div>';
}
