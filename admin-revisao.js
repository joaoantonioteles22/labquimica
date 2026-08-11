// ════════════════════════════════════════════════════════════════
// ADMIN, TOAST, REVISÃO E INICIALIZAÇÃO
// Painel do professor, aviso (toast), fila de revisão de erros,
// e a chamada final que inicializa o app.
// Depende de: estado.js, mapa-modulo.js (ALL)
// Deve ser o ÚLTIMO script carregado (faz a inicialização final).
// ════════════════════════════════════════════════════════════════
// 13. ADMIN
// ════════════════════════════════════════════════════════════════
const ADMIN_PW = '1234'; // troque para a senha que quiser

function openAdminOverlay() {
  if (isAdmin) {
    goPage('page-admin');
    return;
  }
  document.getElementById('overlay-admin').classList.add('show');
  document.getElementById('admin-pw').value = '';
  document.getElementById('admin-err').style.display = 'none';
  setTimeout(() => document.getElementById('admin-pw').focus(), 100);
}

function closeAdminOverlay() {
  document.getElementById('overlay-admin').classList.remove('show');
}

function checkAdmin() {
  const pw = document.getElementById('admin-pw').value;
  if (pw === ADMIN_PW) {
    isAdmin = true;
    closeAdminOverlay();
    goPage('page-admin');
  } else {
    document.getElementById('admin-err').style.display = 'block';
  }
}

function adminLogout() {
  isAdmin = false;
  goPage('page-home');
}

function adminUnlockAll() {
  ALL.forEach(t => done.add(t.id));
  save();
  showToast('✓ Todos os módulos desbloqueados');
  renderAdmin();
}

function adminResetAll() {
  if (!confirm('Tem certeza? Isso apaga todo o progresso.')) return;
  done = new Set();
  xp = 0;
  totalAcc = 0;
  totalResp = 0;
  modScores = {};
  save();
  showToast('🗑 Progresso resetado');
  renderAdmin();
}

function toggleResetList() {
  const el = document.getElementById('reset-list');
  const showing = el.style.display === 'flex';
  el.style.display = showing ? 'none' : 'flex';
  if (!showing) {
    el.innerHTML = ALL.map(t => `<button class="admin-btn" onclick="adminResetModule('${t.id}')">${t.emoji} ${t.label}${done.has(t.id) ? ' ✓' : ''}</button>`).join('');
  }
}

function adminResetModule(id) {
  done.delete(id);
  delete modScores[id];
  save();
  showToast('🔄 Módulo resetado');
  toggleResetList();
  toggleResetList();
  renderAdmin();
}

function saveApiKey() {
  const input = document.getElementById('api-key-input');
  const key = input.value.trim();
  if (!key) return;
  localStorage.setItem('lq_api_key', key);
  input.value = '';
  document.getElementById('api-key-status').textContent = '✓ Chave salva neste dispositivo';
}

function removeApiKey() {
  localStorage.removeItem('lq_api_key');
  document.getElementById('api-key-status').textContent = 'Chave removida';
}

function renderAdmin() {
  const cont = document.getElementById('admin-modules');
  cont.innerHTML = ALL.map(t => {
    const score = modScores[t.id];
    const status = done.has(t.id) ? `✓ concluído${score !== undefined ? ' (' + score + '/' + t.quest.length + ')' : ''}` : 'não iniciado';
    return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:12px;font-family:var(--mono)"><span>${t.emoji} ${t.label}</span><span style="color:var(--muted2)">${status}</span></div>`;
  }).join('');
  const hasKey = !!localStorage.getItem('lq_api_key');
  document.getElementById('api-key-status').textContent = hasKey ? '✓ Chave salva neste dispositivo' : '';
}

// ════════════════════════════════════════════════════════════════
// 14. TOAST E INICIALIZAÇÃO
// ════════════════════════════════════════════════════════════════
function showToast(m) {
  const t = document.getElementById('toast');
  t.textContent = m;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ════════════════════════════════════════════════════════════════
// 15. REVISÃO (questões erradas voltam aqui até acertar)
// ════════════════════════════════════════════════════════════════
function renderRevisao() {
  sweepCooldown();
  saveRevisao();
  updateRevisaoBadge();
  const cont = document.getElementById('revisao-content');
  if (!cont) return;
  if (revisaoPendentes.length === 0) {
    cont.innerHTML = `<div class="card" style="text-align:center;padding:32px 18px"><div style="font-size:34px;margin-bottom:10px">🎉</div><div class="did-label" style="text-align:center">Tudo em dia!</div><div class="did-intro">Nenhuma questão pendente de revisão agora. Continue estudando os módulos — se errar algo, aparece aqui pra você reforçar.</div></div>`;
    return;
  }
  const qid = revisaoPendentes[0];
  const sep = qid.lastIndexOf('-');
  const modId = qid.substring(0, sep);
  const qIdx = parseInt(qid.substring(sep + 1));
  const mod = ALL.find(m => m.id === modId);
  if (!mod || !mod.quest[qIdx]) {
    revisaoPendentes.shift();
    saveRevisao();
    renderRevisao();
    return;
  }
  const q = mod.quest[qIdx];
  const L = ['A', 'B', 'C', 'D'];
  const opts = q.opts.map((op, i) => `<button class="opt" onclick="answerRevisao('${qid}',${i})"><div class="opt-l">${L[i]}</div>${op}</button>`).join('');
  cont.innerHTML = `<div style="font-size:11px;color:var(--muted2);font-family:var(--mono);margin-bottom:10px">${mod.emoji} ${mod.label} · ${revisaoPendentes.length} pendente${revisaoPendentes.length > 1 ? 's' : ''}</div><div class="q-card"><div class="q-text">${q.q}</div><div class="opts" id="rev-opts">${opts}</div><div class="res-box" id="rev-res"></div></div>`;
}

function answerRevisao(qid, i) {
  const sep = qid.lastIndexOf('-');
  const modId = qid.substring(0, sep);
  const qIdx = parseInt(qid.substring(sep + 1));
  const mod = ALL.find(m => m.id === modId);
  if (!mod) return;
  const q = mod.quest[qIdx];
  const acertou = i === q.c;
  totalResp++;
  if (acertou) totalAcc++;
  save();
  processarRevisao(modId, qIdx, acertou);

  const optsEl = document.getElementById('rev-opts');
  [...optsEl.children].forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.c) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('wrong');
  });
  const resEl = document.getElementById('rev-res');
  resEl.className = 'res-box show';
  resEl.innerHTML = `<div class="res-label">✦ Resolução</div><p>${q.res}</p>`;
  setTimeout(renderRevisao, 1800);
}

