// ════════════════════════════════════════════════════════════════
// ESTADO GLOBAL
// Progresso, XP, sistema de revisão. Carregar ANTES dos outros arquivos
// do motor (todos dependem das variáveis e funções daqui).
// ════════════════════════════════════════════════════════════════
// 3. ESTADO GLOBAL
// ════════════════════════════════════════════════════════════════
let done = new Set(JSON.parse(localStorage.getItem('lq_done') || '[]'));
let xp = parseInt(localStorage.getItem('lq_xp') || '0');
let totalAcc = parseInt(localStorage.getItem('lq_acc') || '0');
let totalResp = parseInt(localStorage.getItem('lq_resp') || '0');
let modScores = JSON.parse(localStorage.getItem('lq_scores') || '{}');
let statsPorModulo = JSON.parse(localStorage.getItem('lq_stats_mod') || '{}');
let revisaoPendentes = JSON.parse(localStorage.getItem('lq_rev_pend') || '[]');
let revisaoCooldown = JSON.parse(localStorage.getItem('lq_rev_cd') || '{}');
let isAdmin = false;
let curMod = null;
let curQ = 0;
let answers = [];

function save() {
  localStorage.setItem('lq_done', JSON.stringify([...done]));
  localStorage.setItem('lq_xp', xp);
  localStorage.setItem('lq_acc', totalAcc);
  localStorage.setItem('lq_resp', totalResp);
  localStorage.setItem('lq_scores', JSON.stringify(modScores));
}

function saveStats() {
  localStorage.setItem('lq_stats_mod', JSON.stringify(statsPorModulo));
}

// Registra uma resposta (módulo, questão certa ou errada) nas estatísticas
// gerais e por matéria. NUNCA é chamado no modo admin (ver answerQ/answerRevisao),
// então as estatísticas nunca são "sujadas" por testes do professor.
function registrarResposta(modId, acertou) {
  totalResp++;
  if (acertou) totalAcc++;
  if (!statsPorModulo[modId]) statsPorModulo[modId] = { resp: 0, acc: 0 };
  statsPorModulo[modId].resp++;
  if (acertou) statsPorModulo[modId].acc++;
  save();
  saveStats();
}

function saveRevisao() {
  localStorage.setItem('lq_rev_pend', JSON.stringify(revisaoPendentes));
  localStorage.setItem('lq_rev_cd', JSON.stringify(revisaoCooldown));
}

// Marca uma questão como certa/errada no sistema de revisão.
// Errou → entra na fila de pendentes. Acertou (vindo da fila) → some por 50 exercícios.
function processarRevisao(modId, qIdx, acertou) {
  const qid = modId + '-' + qIdx;
  if (acertou) {
    if (revisaoPendentes.includes(qid)) {
      revisaoPendentes = revisaoPendentes.filter(x => x !== qid);
      revisaoCooldown[qid] = totalResp + 50;
    }
  } else {
    if (!revisaoPendentes.includes(qid)) revisaoPendentes.push(qid);
    delete revisaoCooldown[qid];
  }
  sweepCooldown();
  saveRevisao();
}

// Libera (remove) questões cujo período de 50 exercícios já passou
function sweepCooldown() {
  Object.keys(revisaoCooldown).forEach(id => {
    if (totalResp >= revisaoCooldown[id]) delete revisaoCooldown[id];
  });
}
