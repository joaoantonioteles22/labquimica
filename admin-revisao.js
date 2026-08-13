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
  statsPorModulo = {};
  revisaoPendentes = [];
  revisaoCooldown = {};
  save();
  saveStats();
  saveRevisao();
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
  const cont = document.getElementById('revisao-content');
  if (!cont) return;

  let qid, modo;
  if (revisaoPendentes.length > 0) {
    qid = revisaoPendentes[0];
    modo = 'pendente';
  } else {
    const mod = ALL[Math.floor(Math.random() * ALL.length)];
    const idx = Math.floor(Math.random() * mod.quest.length);
    qid = mod.id + '-' + idx;
    modo = 'livre';
  }

  const sep = qid.lastIndexOf('-');
  const modId = qid.substring(0, sep);
  const qIdx = parseInt(qid.substring(sep + 1));
  const mod = ALL.find(m => m.id === modId);
  if (!mod || !mod.quest[qIdx]) {
    if (modo === 'pendente') revisaoPendentes.shift();
    saveRevisao();
    renderRevisao();
    return;
  }
  const q = mod.quest[qIdx];
  const L = ['A', 'B', 'C', 'D'];
  const opts = q.opts.map((op, i) => `<button class="opt" onclick="answerRevisao('${qid}',${i})"><div class="opt-l">${L[i]}</div>${op}</button>`).join('');
  const legenda = modo === 'pendente'
    ? `${mod.emoji} ${mod.label} · ${revisaoPendentes.length} pendente${revisaoPendentes.length > 1 ? 's' : ''} de revisão`
    : `${mod.emoji} ${mod.label} · prática livre`;
  cont.innerHTML = `<div style="font-size:11px;color:var(--muted2);font-family:var(--mono);margin-bottom:10px">${legenda}</div><div class="q-card"><div class="q-text">${q.q}</div><div class="opts" id="rev-opts">${opts}</div><div class="res-box" id="rev-res"></div></div>`;
}

function answerRevisao(qid, i) {
  const sep = qid.lastIndexOf('-');
  const modId = qid.substring(0, sep);
  const qIdx = parseInt(qid.substring(sep + 1));
  const mod = ALL.find(m => m.id === modId);
  if (!mod) return;
  const q = mod.quest[qIdx];
  const acertou = i === q.c;
  if (!isAdmin) {
    registrarResposta(modId, acertou);
    processarRevisao(modId, qIdx, acertou);
  }

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

// ════════════════════════════════════════════════════════════════
// ESTATÍSTICAS
// No modo admin, sempre mostra 100% de acerto e nenhum erro —
// os testes do professor nunca "sujam" os dados reais do aluno.
// ════════════════════════════════════════════════════════════════
function renderEstatisticas() {
  const cont = document.getElementById('estat-content');
  if (!cont) return;

  let accPct, errPct, resp, acc;
  if (isAdmin) {
    accPct = 100; errPct = 0; resp = 0; acc = 0;
  } else {
    resp = totalResp;
    acc = totalAcc;
    accPct = resp > 0 ? Math.round((acc / resp) * 100) : 0;
    errPct = resp > 0 ? 100 - accPct : 0;
  }

  const semDados = !isAdmin && resp === 0;
  const pieBg = semDados
    ? 'var(--bg3)'
    : `conic-gradient(#22c55e 0% ${accPct}%, #ef4444 ${accPct}% 100%)`;

  let materiasHtml;
  if (isAdmin) {
    materiasHtml = `<div class="did-intro" style="margin-top:14px">Modo admin: as estatísticas não são registradas enquanto você testa o app.</div>`;
  } else if (semDados) {
    materiasHtml = `<div class="did-intro" style="margin-top:14px">Responda alguns exercícios pra ver aqui suas matérias com mais dificuldade.</div>`;
  } else {
    const linhas = ALL.map(m => {
      const s = statsPorModulo[m.id];
      if (!s || s.resp === 0) return null;
      return { mod: m, errPctMod: Math.round((1 - s.acc / s.resp) * 100), resp: s.resp };
    }).filter(Boolean).sort((a, b) => b.errPctMod - a.errPctMod).slice(0, 6);

    if (linhas.length === 0) {
      materiasHtml = `<div class="did-intro" style="margin-top:14px">Responda alguns exercícios pra ver aqui suas matérias com mais dificuldade.</div>`;
    } else {
      materiasHtml = `<div class="did-label" style="margin-top:20px">Matérias com mais dificuldade</div>` + linhas.map(l =>
        `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)"><span style="font-size:12px;color:var(--text)">${l.mod.emoji} ${l.mod.label}</span><span style="font-size:12px;font-family:var(--mono);color:${l.errPctMod >= 40 ? '#fca5a5' : 'var(--muted2)'}">${l.errPctMod}% erro</span></div>`
      ).join('');
    }
  }

  cont.innerHTML = `
    <div class="card" style="text-align:center">
      <div class="did-label" style="text-align:center">Desempenho geral</div>
      <div style="display:flex;justify-content:center;margin:18px 0">
        <div style="position:relative;width:140px;height:140px;border-radius:50%;background:${pieBg}">
          <div style="position:absolute;inset:14px;border-radius:50%;background:var(--card);display:flex;flex-direction:column;align-items:center;justify-content:center">
            <div style="font-size:22px;font-weight:800;font-family:var(--mono);color:${semDados ? 'var(--muted2)' : 'var(--al)'}">${semDados ? '—' : accPct + '%'}</div>
            <div style="font-size:9px;color:var(--muted2);font-family:var(--mono);letter-spacing:1px">${semDados ? 'SEM DADOS' : 'ACERTO'}</div>
          </div>
        </div>
      </div>
      ${semDados ? '' : `<div style="display:flex;justify-content:center;gap:18px;font-size:11px;font-family:var(--mono)">
        <span style="color:#86efac">● ${accPct}% acerto</span>
        <span style="color:#fca5a5">● ${errPct}% erro</span>
      </div>
      ${!isAdmin && resp > 0 ? `<div style="font-size:10px;color:var(--muted2);font-family:var(--mono);margin-top:10px">${acc} de ${resp} respostas certas no total</div>` : ''}`}
    </div>
    ${materiasHtml}
  `;
}
