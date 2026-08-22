// ════════════════════════════════════════════════════════════════
// MAPA E MÓDULO/QUESTÕES
// Trilha de módulos, sistema de perguntas/respostas/pontuação,
// e a tabela periódica mostrada dentro da parte didática do módulo.
// Depende de: estado.js, dados-elementos.js (ELS), modulos-conteudo.js (AREAS, ALL)
// ════════════════════════════════════════════════════════════════
// 8. RENDERIZAÇÃO DO MAPA
// ════════════════════════════════════════════════════════════════
let nivelAtual = 'medio';
let subareaAtual = 'ano1';

// ════════════════════════════════════════════════════════════════
// INTERRUPTOR TEMPORÁRIO — deixe true enquanto quiser que TODO MUNDO
// (não só o Admin) veja todos os módulos destravados, sem precisar
// completar nada antes. Quando quiser voltar à regra normal (só o
// 1º módulo do 1º Ano liberado, indo bloco por bloco), troque para
// false — é a única linha que precisa mudar.
// ════════════════════════════════════════════════════════════════
const DESBLOQUEIO_TOTAL_TEMPORARIO = true;

// Ordem em que Ensino Médio e Faculdade destravam, bloco por bloco.
// Um bloco só destrava depois que TODOS os módulos do bloco anterior
// estiverem concluídos. Avançado não entra aqui — ele é tratado à parte.
const ORDEM_PROGRESSAO = [
  { nivel: 'medio', subarea: 'ano1' },
  { nivel: 'medio', subarea: 'ano2' },
  { nivel: 'medio', subarea: 'ano3' },
  { nivel: 'faculdade', subarea: 'analitica' },
  { nivel: 'faculdade', subarea: 'organicaAv' },
  { nivel: 'faculdade', subarea: 'inorganica' },
  { nivel: 'faculdade', subarea: 'fqAv' },
  { nivel: 'faculdade', subarea: 'bioquimica' },
  { nivel: 'faculdade', subarea: 'quantica' }
];

function subareaCompleta(nivelId, subareaId) {
  const nivel = NIVEIS.find(n => n.id === nivelId);
  const s = nivel.subareas.find(x => x.id === subareaId);
  return s.tiles.length === 0 || s.tiles.every(t => done.has(t.id));
}

// Todos os blocos ANTES do índice dado (0..index-1) já foram concluídos?
function blocosAnterioresCompletos(index) {
  for (let i = 0; i < index; i++) {
    const b = ORDEM_PROGRESSAO[i];
    if (!subareaCompleta(b.nivel, b.subarea)) return false;
  }
  return true;
}

// Faculdade inteira concluída = todo o Ensino Médio + toda a Faculdade
// concluídos (já que a Faculdade só destrava depois do Médio).
function faculdadeInteiraCompleta() {
  return blocosAnterioresCompletos(ORDEM_PROGRESSAO.length);
}

function subareaDestravada(nivelId, subareaId) {
  if (DESBLOQUEIO_TOTAL_TEMPORARIO) return true;
  if (nivelId === 'avancado') return faculdadeInteiraCompleta();
  const idx = ORDEM_PROGRESSAO.findIndex(b => b.nivel === nivelId && b.subarea === subareaId);
  if (idx === -1) return true; // segurança: se não estiver na lista, não bloqueia
  return blocosAnterioresCompletos(idx);
}

function selecionarNivel(nivelId) {
  nivelAtual = nivelId;
  const nivel = NIVEIS.find(n => n.id === nivelId);
  subareaAtual = nivel.subareas[0].id;
  renderMap();
}

function selecionarSubarea(subareaId) {
  subareaAtual = subareaId;
  renderMap();
}

function renderMap() {
  const nivel = NIVEIS.find(n => n.id === nivelAtual) || NIVEIS[0];
  document.getElementById('nivel-tabs').innerHTML = NIVEIS.map(n =>
    `<button class="nivel-tab ${n.id === nivelAtual ? 'active' : ''}" onclick="selecionarNivel('${n.id}')">${n.label}</button>`
  ).join('');

  const subarea = nivel.subareas.find(s => s.id === subareaAtual) || nivel.subareas[0];
  subareaAtual = subarea.id;
  document.getElementById('subarea-tabs').innerHTML = nivel.subareas.map(s =>
    `<button class="subarea-tab ${s.id === subareaAtual ? 'active' : ''}" onclick="selecionarSubarea('${s.id}')">${s.label}</button>`
  ).join('');

  const tilesCont = document.getElementById('tiles-container');
  const destravada = subareaDestravada(nivel.id, subarea.id);

  if (subarea.tiles.length === 0) {
    tilesCont.innerHTML = `<div class="card" style="text-align:center;padding:28px 18px;margin-top:4px"><div style="font-size:28px;margin-bottom:8px">🚧</div><div class="did-intro" style="margin:0">Módulos de "${subarea.label}" em construção. Em breve!</div></div>`;
  } else if (!destravada) {
    tilesCont.innerHTML = `<div class="tiles-grid">` + subarea.tiles.map(t =>
      `<div class="tile locked" onclick="clickTile('${t.id}',true)">
        <div class="tile-lock">🔒</div>
        <div class="tile-emoji">${t.emoji}</div>
        <div class="tile-label">${t.label}</div>
        <div class="tile-sub">${t.sub}</div>
      </div>`
    ).join('') + `</div><div class="did-intro" style="margin-top:12px;text-align:center">🔒 Complete a etapa anterior por completo pra desbloquear esta área.</div>`;
  } else {
    tilesCont.innerHTML = `<div class="tiles-grid">` + subarea.tiles.map((t, i) => {
      const isDone = done.has(t.id);
      const isLock = !DESBLOQUEIO_TOTAL_TEMPORARIO && !isDone && !(i === 0 || done.has(subarea.tiles[i - 1].id));
      return `<div class="tile ${isDone ? 'done' : isLock ? 'locked' : 'unlocked'}" onclick="clickTile('${t.id}',${isLock})">
        ${isDone ? '<div class="tile-check"></div>' : ''}
        ${isLock ? '<div class="tile-lock">🔒</div>' : ''}
        <div class="tile-emoji">${t.emoji}</div>
        <div class="tile-label">${t.label}</div>
        <div class="tile-sub">${t.sub}</div>
      </div>`;
    }).join('') + `</div>`;
  }

  const d = done.size, total = ALL.length;
  document.getElementById('prog-fill').style.width = Math.min(100, Math.round(d / total * 100)) + '%';
  document.getElementById('prog-num').textContent = d + ' / ' + total;
  document.getElementById('xp-val').textContent = xp + ' XP';
  document.getElementById('lvl-text').textContent = d < 4 ? 'Nível 1 — Iniciante' : d < 9 ? 'Nível 2 — Intermediário' : 'Nível 3 — Avançado';

  const proximo = subarea.tiles.find(t => !done.has(t.id));
  document.getElementById('bear-bubble').textContent = !destravada
    ? '🔒 Área bloqueada até terminar a etapa anterior'
    : proximo
    ? 'Próximo: ' + proximo.label + ' ' + proximo.emoji
    : (subarea.tiles.length ? 'Concluído aqui! 🏆' : 'Em construção 🚧');
}

function clickTile(id, locked) {
  if (locked) { showToast('Complete o anterior primeiro! 🔒'); return; }
  const t = ALL.find(x => x.id === id);
  if (t) openModule(t);
}

// ════════════════════════════════════════════════════════════════
// 9. MÓDULO E QUESTÕES
// ════════════════════════════════════════════════════════════════
function openModule(t) {
  curMod = t;
  curQ = 0;
  answers = new Array(t.quest.length).fill(null);
  document.getElementById('mod-title').textContent = t.emoji + ' ' + t.label;
  document.getElementById('mod-sub').textContent = t.sub;
  document.getElementById('tab-did-content').innerHTML = t.did;
  setTimeout(buildModTable, 50);
  document.getElementById('mod-did-view').style.display = 'block';
  document.getElementById('mod-quest-view').style.display = 'none';
  const btn = document.getElementById('btn-go-quest');
  if (t.quest.length === 0 && isAdmin) {
    btn.textContent = '✓ Marcar como concluído (Admin)';
    btn.onclick = markDone;
  } else {
    btn.textContent = '✏️ Ir para as questões →';
    btn.onclick = goToQuest;
  }
  goPage('page-modulo');
}

function goToQuest() {
  document.getElementById('mod-did-view').style.display = 'none';
  document.getElementById('mod-quest-view').style.display = 'block';
  renderQuestion();
  window.scrollTo(0,0);
}

function renderQuestion() {
  const cont = document.getElementById('tab-quest-content');
  if (!curMod || curMod.quest.length === 0) {
    cont.innerHTML = `<div class="card"><div class="did-label">Em breve</div><div class="did-intro">Questões sendo preparadas.</div><button class="btn-main" onclick="markDone()" style="margin-top:14px">Marcar como concluído ✓</button></div>`;
    return;
  }
  if (curQ >= curMod.quest.length) { renderScore(); return; }
  const q = curMod.quest[curQ];
  const ans = answers[curQ];
  const L = ['A','B','C','D'];
  const dots = curMod.quest.map((_, i) => {
    let c = 'q-dot';
    if (answers[i] !== null) c += ' done';
    else if (i === curQ) c += ' cur';
    return `<div class="${c}"></div>`;
  }).join('');
  const opts = q.opts.map((op, i) => {
    let c = 'opt', d = '';
    if (ans !== null) {
      d = 'disabled';
      if (i === q.c) c += ' correct';
      else if (i === ans) c += ' wrong';
    }
    return `<button class="${c}" ${d} onclick="answerQ(${i})"><div class="opt-l">${L[i]}</div>${op}</button>`;
  }).join('');
  const res = ans !== null ? `<div class="res-box show"><div class="res-label">✦ Resolução</div><p>${q.res}</p></div>` : '';
  const isLast = curQ === curMod.quest.length - 1;
  const allAns = answers.every(a => a !== null);
  const nextBtn = isLast && allAns ? `<button class="btn-main" onclick="renderScore()">Ver resultado 🏆</button>` :
    isLast ? `<button class="btn-main" disabled>Responda para continuar</button>` :
    `<button class="btn-main" ${ans === null ? 'disabled' : ''} onclick="nextQ()">Próxima →</button>`;
  cont.innerHTML = `<div class="q-dots">${dots}</div><div class="q-card"><div class="q-num">Questão ${curQ+1} de ${curMod.quest.length}</div><div class="q-text">${q.q}</div><div class="opts">${opts}</div>${res}</div><div class="nav-row"><button class="btn-ghost" ${curQ===0?'disabled':''} onclick="prevQ()">← Anterior</button>${nextBtn}</div>`;
}

function answerQ(i) {
  if (answers[curQ] !== null) return;
  const q = curMod.quest[curQ];
  answers[curQ] = i;
  if (!isAdmin) {
    registrarResposta(curMod.id, i === q.c);
    processarRevisao(curMod.id, curQ, i === q.c);
  }
  renderQuestion();
}

function nextQ(){ curQ++; renderQuestion(); }
function prevQ(){ curQ--; renderQuestion(); }

function renderScore() {
  const correct = answers.filter((a,i) => a === curMod.quest[i]?.c).length;
  const total = curMod.quest.length;
  const pct = Math.round(correct / total * 100);
  const passed = correct >= 3 || isAdmin;
  const stars = pct === 100 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';
  const msg = pct === 100 ? 'Perfeito! Dominou o módulo!' : passed ? 'Muito bem! Você passou!' : 'Ainda não foi dessa vez...';
  modScores[curMod.id] = correct;
  save();
  const cont = document.getElementById('tab-quest-content');
  const action = passed ?
    `<button class="btn-main" onclick="markDone()" style="margin-bottom:10px">Concluir e voltar ao mapa ✓</button>` :
    `<div class="card score-fail">⚠️ Precisa de pelo menos 3 acertos para desbloquear o próximo módulo.</div>`;
  cont.innerHTML = `<div class="card score-wrap"><div class="score-stars">${stars}</div><div class="score-num">${correct}/${total}</div><div class="score-sub">${pct}% de acerto</div><div class="score-msg">${msg}</div>${passed && !isAdmin ? `<div class="score-xp">+${curMod.xp} XP</div>` : ''}${passed && isAdmin ? `<div class="score-xp" style="color:#f59e0b">✓ Admin: aprovado</div>` : ''}</div>${action}<button class="btn-ghost" onclick="curQ=0;answers=new Array(curMod.quest.length).fill(null);renderQuestion()" style="margin-top:8px">🔄 Refazer</button>`;
}

function markDone() {
  if (!done.has(curMod.id)) {
    done.add(curMod.id);
    if (!isAdmin) xp += curMod.xp;
    save();
  }
  const bear = document.getElementById('map-bear');
  if (bear) {
    bear.classList.add('pop');
    setTimeout(() => bear.classList.remove('pop'), 800);
  }
  showToast(isAdmin ? '✓ Admin: ' + curMod.label + ' desbloqueado' : '+' + curMod.xp + ' XP — ' + curMod.label + ' concluído! 🎉');
  goPage('page-mapa');
}

// ════════════════════════════════════════════════════════════════
// 10. TABELA PERIÓDICA NA DIDÁTICA
// ════════════════════════════════════════════════════════════════
function buildModTable() {
  const grid = document.getElementById('mod-periodic-grid');
  if (!grid || grid.innerHTML !== '') return;
  const ROWS = 9, COLS = 18;
  const cells = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  ELS.forEach(el => { if (el.row <= ROWS && el.col <= COLS) cells[el.row-1][el.col-1] = el; });
  let html = '';
  for (let r = 0; r < ROWS; r++) {
    if (r === 7) { for (let c = 0; c < COLS; c++) html += '<div style="height:3px"></div>'; }
    for (let c = 0; c < COLS; c++) {
      const el = cells[r][c];
      if (el) {
        const col = CAT_C[el.cat] || '#2563eb';
        html += `<div style="border-radius:3px;padding:2px 1px;text-align:center;cursor:pointer;background:${col};min-width:24px;transition:transform .15s" onclick="showModEl(${el.z})" title="${el.name}" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform=''"><div style="font-size:6px;font-family:monospace;color:rgba(255,255,255,.7)">${el.z}</div><div style="font-size:8px;font-weight:700;font-family:monospace;color:#fff;line-height:1.1">${el.sym}</div></div>`;
      } else {
        html += '<div style="min-width:24px"></div>';
      }
    }
  }
  grid.innerHTML = html;
}

const CAT_L = { alkali:'Metal alcalino', alkaline:'Metal alcalino-terroso', transition:'Metal de transição', 'post-transition':'Metal pós-transição', metalloid:'Semimetal', nonmetal:'Não-metal', halogen:'Halogênio', noble:'Gás nobre', lanthanide:'Lantanídeo', actinide:'Actinídeo' };
const CAT_C = { alkali:'#7c3aed', alkaline:'#d97706', transition:'#2563eb', 'post-transition':'#16a34a', metalloid:'#ca8a04', nonmetal:'#dc2626', halogen:'#db2777', noble:'#9333ea', lanthanide:'#0d9488', actinide:'#b91c1c' };

function showModEl(z) {
  const el = ELS.find(e => e.z === z);
  if (!el) return;
  const n = Math.round(el.mass) - el.z;
  const panel = document.getElementById('mod-el-detail');
  if (!panel) return;
  panel.style.display = 'block';
  const c = CAT_C[el.cat] || '#2563eb';
  panel.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px"><div style="display:flex;gap:12px;align-items:center"><div style="width:48px;height:48px;border-radius:10px;background:${c};display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0"><div style="font-size:6px;color:rgba(255,255,255,.7);font-family:monospace">${el.z}</div><div style="font-size:18px;font-weight:800;color:#fff;font-family:monospace;line-height:1">${el.sym}</div></div><div><div style="font-size:14px;font-weight:700;color:var(--text)">${el.name}</div><div style="font-size:10px;color:${c};font-family:monospace">${CAT_L[el.cat] || el.cat}</div></div></div><button onclick="closeModEl()" style="background:var(--bg3);border:1px solid var(--border2);border-radius:8px;width:28px;height:28px;color:var(--muted2);font-size:14px;cursor:pointer">✕</button></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">${['Prótons|'+el.z+' p⁺','Nêutrons|≈'+n+' n⁰','Elétrons|'+el.z+' e⁻','Massa|'+el.mass+' u','Período|'+el.p,'Grupo|'+el.g].map(x => { const [l,v] = x.split('|'); return `<div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:10px"><div style="font-size:8px;color:var(--muted2);font-family:monospace;letter-spacing:1px;text-transform:uppercase;margin-bottom:3px">${l}</div><div style="font-size:16px;font-weight:700;font-family:monospace;color:var(--text)">${v}</div></div>`; }).join('')}</div>`;
  setTimeout(() => panel.scrollIntoView({ behavior:'smooth', block:'nearest' }), 50);
}

function closeModEl() {
  const p = document.getElementById('mod-el-detail');
  if (p) p.style.display = 'none';
}
