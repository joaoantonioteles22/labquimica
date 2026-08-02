// ════════════════════════════════════════════════════════════════
//  5. NAVEGAÇÃO ENTRE PÁGINAS (CORRIGIDA)
// ════════════════════════════════════════════════════════════════

function goPage(id) {
  console.log('🔄 goPage chamado para:', id);
  // Esconde todas as páginas
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Mostra a página alvo
  const target = document.getElementById(id);
  if (!target) {
    console.error('❌ Página não encontrada:', id);
    return;
  }
  target.classList.add('active');
  console.log('✅ Página ativada:', id);
  // Atualiza a navegação inferior
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMap = {
    'page-home': 'nav-home',
    'page-mapa': 'nav-mapa',
    'page-lab': 'nav-lab',
    'page-exp': 'nav-exp',
    'page-admin': 'nav-admin'
  };
  const navBtn = document.getElementById(navMap[id]);
  if (navBtn) navBtn.classList.add('active');
  // Renderiza conteúdo específico (exceto mapa, que é chamado separadamente)
  if (id === 'page-home') renderHome();
  if (id === 'page-lab') renderLab();
  if (id === 'page-exp') initExp();
  if (id === 'page-admin') renderAdmin();
  window.scrollTo(0, 0);
}

// ════════════════════════════════════════════════════════════════
//  6. FUNÇÃO DA PÁGINA INICIAL (COM ANIMAÇÃO E RETRY)
// ════════════════════════════════════════════════════════════════

function explorarModulos() {
  console.log('🚀 explorarModulos() chamado');
  const foguete = document.querySelector('.home-bear svg');
  if (foguete) {
    foguete.classList.add('foguete-sobe');
    console.log('🛸 Foguete subindo...');
    setTimeout(() => {
      goPage('page-mapa');
      // Tenta renderizar o mapa com retry
      renderMapWithRetry(0);
    }, 1000);
  } else {
    console.warn('⚠️ Foguete não encontrado, indo direto para o mapa');
    goPage('page-mapa');
    renderMapWithRetry(0);
  }
}

// ════════════════════════════════════════════════════════════════
//  7. RENDERIZAÇÃO DA HOME
// ════════════════════════════════════════════════════════════════

function renderHome() {
  console.log('🏠 renderHome() chamado');
  const elMod = document.getElementById('hs-mod');
  const elXp = document.getElementById('hs-xp');
  const elProg = document.getElementById('hs-prog');
  if (elMod) elMod.textContent = done.size;
  if (elXp) elXp.textContent = xp;
  if (elProg) {
    const p = Math.min(100, Math.round(done.size / ALL.length * 100));
    elProg.textContent = p + '%';
  }
}

// ════════════════════════════════════════════════════════════════
//  8. RENDERIZAÇÃO DO MAPA (COM VERIFICAÇÃO DE ELEMENTOS)
// ════════════════════════════════════════════════════════════════

function renderMapWithRetry(tentativa) {
  console.log(`🗺️ renderMap() - tentativa ${tentativa + 1}`);
  // Verifica se os elementos necessários existem
  const containers = ['tg', 'to', 'tf'];
  const allExist = containers.every(id => document.getElementById(id) !== null);
  const progFill = document.getElementById('prog-fill');
  const progNum = document.getElementById('prog-num');
  const xpVal = document.getElementById('xp-val');
  const lvlText = document.getElementById('lvl-text');
  const bearBubble = document.getElementById('bear-bubble');
  
  if (!allExist || !progFill || !progNum || !xpVal || !lvlText || !bearBubble) {
    console.warn('⚠️ Elementos do mapa ainda não prontos. Tentativa', tentativa + 1);
    if (tentativa < 5) {
      setTimeout(() => renderMapWithRetry(tentativa + 1), 500);
    } else {
      console.error('❌ Falha ao renderizar mapa após 5 tentativas.');
    }
    return;
  }
  
  // Se chegou aqui, todos os elementos existem → renderiza
  console.log('✅ Todos os elementos encontrados. Renderizando mapa...');
  renderMap();
}

function renderMap() {
  console.log('🗺️ renderMap() executando');
  let di = 0;
  ALL.forEach((t, i) => { if (done.has(t.id)) di = i + 1; });
  
  AREAS.forEach(area => {
    const cont = document.getElementById(area.el);
    if (!cont) return;
    cont.innerHTML = area.tiles.map(t => {
      const isDone = done.has(t.id);
      const isCur = ALL.indexOf(t) === di;
      const isLock = !isDone && !isCur;
      return `<div class="tile ${isDone ? 'done' : isCur ? 'unlocked' : 'locked'}" onclick="clickTile('${t.id}',${isLock})">
        ${isDone ? '<div class="tile-check"></div>' : ''}
        ${isLock ? '<div class="tile-lock">🔒</div>' : ''}
        <div class="tile-emoji">${t.emoji}</div>
        <div class="tile-label">${t.label}</div>
        <div class="tile-sub">${t.sub}</div>
      </div>`;
    }).join('');
  });
  
  const d = done.size, total = ALL.length;
  document.getElementById('prog-fill').style.width = Math.min(100, Math.round(d / total * 100)) + '%';
  document.getElementById('prog-num').textContent = d + ' / ' + total;
  document.getElementById('xp-val').textContent = xp + ' XP';
  document.getElementById('lvl-text').textContent = d < 4 ? 'Nível 1 — Iniciante' : d < 9 ? 'Nível 2 — Intermediário' : 'Nível 3 — Avançado';
  document.getElementById('bear-bubble').textContent = ALL[di] ? 'Próximo: ' + ALL[di].label + ' ' + ALL[di].emoji : 'Tudo concluído! 🏆';
  console.log('✅ renderMap() concluído com sucesso!');
}
