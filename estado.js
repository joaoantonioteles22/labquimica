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
  updateRevisaoBadge();
}

// Libera (remove) questões cujo período de 50 exercícios já passou
function sweepCooldown() {
  Object.keys(revisaoCooldown).forEach(id => {
    if (totalResp >= revisaoCooldown[id]) delete revisaoCooldown[id];
  });
}

function updateRevisaoBadge() {
  const btn = document.getElementById('nav-revisao');
  if (!btn) return;
  let dot = btn.querySelector('.rev-dot');
  if (revisaoPendentes.length > 0) {
    if (!dot) {
      dot = document.createElement('span');
      dot.className = 'rev-dot';
      dot.style.cssText = 'position:absolute;top:8px;right:22%;width:7px;height:7px;border-radius:50%;background:#ef4444;box-shadow:0 0 4px #ef4444';
      btn.style.position = 'relative';
      btn.appendChild(dot);
    }
  } else if (dot) {
    dot.remove();
  }
}

