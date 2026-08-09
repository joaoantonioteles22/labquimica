// ════════════════════════════════════════════════════════════════
// MOTOR DO APP (navegação, estado, laboratório, experimentos, admin)
// Depende de: dados-elementos.js (ELS) e modulos-conteudo.js (AREAS, ALL)
// carregados ANTES deste arquivo no index.html.
// ════════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════════
// 3. ESTADO GLOBAL
// ════════════════════════════════════════════════════════════════
let done = new Set(JSON.parse(localStorage.getItem('lq_done') || '[]'));
let xp = parseInt(localStorage.getItem('lq_xp') || '0');
let totalAcc = parseInt(localStorage.getItem('lq_acc') || '0');
let totalResp = parseInt(localStorage.getItem('lq_resp') || '0');
let modScores = JSON.parse(localStorage.getItem('lq_scores') || '{}');
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

// ════════════════════════════════════════════════════════════════
// 5. NAVEGAÇÃO (CORRIGIDA)
// ════════════════════════════════════════════════════════════════
function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const map = {'page-home':'nav-home','page-mapa':'nav-mapa','page-lab':'nav-lab','page-exp':'nav-exp','page-admin':'nav-admin'};
  const ni = document.getElementById(map[id]);
  if (ni) ni.classList.add('active');
  if (id === 'page-mapa') renderMap();
  if (id === 'page-home') { renderHome(); resetHomeBear(); }
  if (id === 'page-lab') renderLab();
  if (id === 'page-exp') initExp();
  if (id === 'page-admin') renderAdmin();
  window.scrollTo(0,0);
}

// ════════════════════════════════════════════════════════════════
// 6. EXPLORAR MÓDULOS (COM ANIMAÇÃO)
// ════════════════════════════════════════════════════════════════
function resetHomeBear() {
  const foguete = document.querySelector('.home-bear svg');
  if (foguete) foguete.classList.remove('foguete-sobe');
}

function explorarModulos() {
  const foguete = document.querySelector('.home-bear svg');
  if (foguete) {
    foguete.classList.add('foguete-sobe');
    setTimeout(() => {
      goPage('page-mapa');
    }, 1000);
  } else {
    goPage('page-mapa');
  }
}

// ════════════════════════════════════════════════════════════════
// 7. RENDERIZAÇÃO DA HOME
// ════════════════════════════════════════════════════════════════
function renderHome() {
  document.getElementById('hs-mod').textContent = done.size;
  document.getElementById('hs-xp').textContent = xp;
  const p = Math.min(100, Math.round(done.size / ALL.length * 100));
  document.getElementById('hs-prog').textContent = p + '%';
}

// ════════════════════════════════════════════════════════════════
// 8. RENDERIZAÇÃO DO MAPA
// ════════════════════════════════════════════════════════════════
function renderMap() {
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
  totalResp++;
  if (i === q.c) totalAcc++;
  save();
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

// ════════════════════════════════════════════════════════════════
// 11. LABORATÓRIO
// ════════════════════════════════════════════════════════════════
function renderLab() {
  if (document.getElementById('periodic-grid').innerHTML !== '') return;
  const grid = document.getElementById('periodic-grid');
  const ROWS = 9, COLS = 18;
  const cells = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  ELS.forEach(el => { if (el.row <= ROWS && el.col <= COLS) cells[el.row-1][el.col-1] = el; });
  let html = '';
  for (let r = 0; r < ROWS; r++) {
    if (r === 7) { for (let c = 0; c < COLS; c++) html += `<div class="el empty" style="height:4px;min-height:4px"></div>`; }
    for (let c = 0; c < COLS; c++) {
      const el = cells[r][c];
      if (el) {
        html += `<div class="el ${el.cat}" onclick="showEl(${el.z})" title="${el.name}"><div class="el-num">${el.z}</div><div class="el-sym">${el.sym}</div><div class="el-name">${el.name.length > 8 ? el.name.substring(0,7) + '…' : el.name}</div></div>`;
      } else {
        html += `<div class="el empty"></div>`;
      }
    }
  }
  grid.innerHTML = html;
  document.getElementById('el-legend').innerHTML = Object.entries(CAT_L).map(([k,v]) => `<div class="el-leg-item"><div class="el-leg-dot" style="background:${CAT_C[k]};border:1px solid ${CAT_C[k]}"></div>${v}</div>`).join('');
}

function showEl(z) {
  const el = ELS.find(e => e.z === z);
  if (!el) return;
  const n = Math.round(el.mass) - el.z;
  const panel = document.getElementById('el-detail');
  panel.className = 'el-detail-panel show';
  const c = CAT_C[el.cat] || '#2563eb';
  panel.innerHTML = `<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px"><div style="display:flex;align-items:center;gap:14px"><div style="width:56px;height:56px;border-radius:12px;background:${c}44;border:2px solid ${c};display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0"><div style="font-size:7px;color:${c};font-family:var(--mono)">${el.z}</div><div style="font-size:20px;font-weight:800;color:var(--text);font-family:var(--mono);line-height:1">${el.sym}</div></div><div><div style="font-size:16px;font-weight:700;color:var(--text)">${el.name}</div><div style="font-size:11px;color:${c};font-family:var(--mono);margin-top:2px">${CAT_L[el.cat] || el.cat}</div></div></div><button onclick="closeEl()" style="background:var(--bg3);border:1px solid var(--border2);border-radius:8px;width:32px;height:32px;color:var(--muted2);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0">✕</button></div><div class="el-detail-row"><div class="el-detail-item"><div class="label">Nº atômico (Z)</div><div class="value">${el.z}</div></div><div class="el-detail-item"><div class="label">Massa atômica</div><div class="value">${el.mass} u</div></div><div class="el-detail-item"><div class="label">Prótons (p⁺)</div><div class="value">${el.z}</div></div><div class="el-detail-item"><div class="label">Nêutrons (n⁰)</div><div class="value">≈ ${n}</div></div><div class="el-detail-item"><div class="label">Elétrons (e⁻)</div><div class="value">${el.z}</div></div><div class="el-detail-item"><div class="label">Período / Grupo</div><div class="value">${el.p} / ${el.g}</div></div></div>`;
  setTimeout(() => panel.scrollIntoView({ behavior:'smooth', block:'start' }), 50);
}

function closeEl() {
  const panel = document.getElementById('el-detail');
  panel.className = 'el-detail-panel';
  panel.innerHTML = '';
}

// ════════════════════════════════════════════════════════════════
// 12. EXPERIMENTOS
// ════════════════════════════════════════════════════════════════
let expState = 'menu';
let compEl1 = null;

const VALENCIAS = {
  H:1,Li:1,Na:1,K:1,Rb:1,Cs:1,Ag:1,F:1,Cl:1,Br:1,I:1,
  Be:2,Mg:2,Ca:2,Sr:2,Ba:2,Zn:2,Cu:2,Ni:2,Co:2,Mn:2,Pb:2,Sn:2,Hg:2,Pt:2,O:2,S:2,Se:2,Te:2,
  B:3,Al:3,N:3,P:3,As:3,Sb:3,Fe:3,Au:3,Cr:3,
  C:4,Si:4,Ti:4,Ge:4
};

function initExp() {
  showMenu();
}

function showMenu() {
  const chat = document.getElementById('exp-chat');
  chat.innerHTML = '';
  expState = 'menu';
  compEl1 = null;
  addBearMsg('Oi! Eu sou o mascote do LabQ 🐻 O que você quer explorar hoje?');
  showOpts([
    { label: '🔎 Consultar um elemento', onClick: askEl },
    { label: '🧬 Montar um composto simples', onClick: askComp }
  ]);
}

function addBearMsg(t) {
  const chat = document.getElementById('exp-chat');
  const div = document.createElement('div');
  div.className = 'exp-msg bear';
  div.innerHTML = t;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function addUserMsg(t) {
  const chat = document.getElementById('exp-chat');
  const div = document.createElement('div');
  div.className = 'exp-msg user';
  div.textContent = t;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showOpts(opts) {
  const wrap = document.getElementById('exp-options-wrap');
  document.getElementById('exp-input-row').style.display = 'none';
  wrap.innerHTML = '';
  opts.forEach(o => {
    const btn = document.createElement('button');
    btn.className = 'exp-opt';
    btn.textContent = o.label;
    btn.onclick = o.onClick;
    wrap.appendChild(btn);
  });
}

function showInp(ph) {
  document.getElementById('exp-options-wrap').innerHTML = '';
  const row = document.getElementById('exp-input-row');
  row.style.display = 'flex';
  const inp = document.getElementById('exp-input');
  inp.placeholder = ph || 'Símbolo ou nome (ex: Na, Sódio)...';
  inp.value = '';
  setTimeout(() => inp.focus(), 50);
}

function askEl() {
  expState = 'ask-el';
  addBearMsg('Beleza! Digite o símbolo ou o nome do elemento (ex: Na, Sódio):');
  showInp();
}

function askComp() {
  expState = 'ask-comp1';
  compEl1 = null;
  addBearMsg('Vamos montar um composto! Digite o símbolo ou nome do primeiro elemento:');
  showInp();
}

function normalizarTexto(s) {
  return s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function findEl(s) {
  const q = normalizarTexto(s);
  return ELS.find(e => normalizarTexto(e.sym) === q || normalizarTexto(e.name) === q);
}

function expSubmit() {
  const inp = document.getElementById('exp-input');
  const val = inp.value.trim();
  if (!val) return;
  addUserMsg(val);
  document.getElementById('exp-input-row').style.display = 'none';
  inp.value = '';

  if (expState === 'ask-el') {
    const el = findEl(val);
    if (!el) {
      addBearMsg('Não encontrei esse elemento 🤔 Tenta o símbolo (ex: Fe) ou o nome (ex: Ferro):');
      showInp();
      return;
    }
    showElInfo(el);
  } else if (expState === 'ask-comp1') {
    const el = findEl(val);
    if (!el) {
      addBearMsg('Não encontrei esse elemento 🤔 Tenta de novo:');
      showInp();
      return;
    }
    compEl1 = el;
    expState = 'ask-comp2';
    addBearMsg(`Show, ${el.name}! Agora digite o segundo elemento:`);
    showInp();
  } else if (expState === 'ask-comp2') {
    const el = findEl(val);
    if (!el) {
      addBearMsg('Não encontrei esse elemento 🤔 Tenta de novo:');
      showInp();
      return;
    }
    autoCompound(compEl1, el);
  }
}

function showElInfo(el) {
  const n = Math.round(el.mass) - el.z;
  addBearMsg(`<strong>${el.name} (${el.sym})</strong><br>Número atômico (Z): ${el.z}<br>Prótons: ${el.z} p⁺<br>Nêutrons: ≈ ${n} n⁰<br>Elétrons: ${el.z} e⁻<br>Massa atômica: ${el.mass} u<br>Período: ${el.p} | Grupo: ${el.g}`);
  expState = 'menu';
  showOpts([
    { label: '🔎 Consultar outro elemento', onClick: askEl },
    { label: '🧬 Montar um composto', onClick: askComp },
    { label: '⬅️ Voltar ao menu', onClick: showMenu }
  ]);
}

function getValences(el) {
  return VALENCIAS[el.sym] || null;
}

function mmc(a, b) {
  const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
  return (a * b) / gcd(a, b);
}

function autoCompound(el1, el2) {
  const v1 = getValences(el1);
  const v2 = getValences(el2);
  if (!v1 || !v2) {
    addBearMsg(`Ainda não sei calcular o composto entre ${el1.name} e ${el2.name} 🧪 Mas você pode ver os dados de cada um no Laboratório!`);
  } else {
    let sub1 = v2, sub2 = v1;
    const divisor = (function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); })(sub1, sub2);
    sub1 = sub1 / divisor;
    sub2 = sub2 / divisor;
    const formula = `${el1.sym}${sub1 > 1 ? sub1 : ''}${el2.sym}${sub2 > 1 ? sub2 : ''}`;
    addBearMsg(`Combinando ${el1.name} (valência ${v1}) com ${el2.name} (valência ${v2}), a fórmula fica:<br><strong style="font-size:16px">${formula}</strong><br><span style="font-size:10px;opacity:.7">(regra do X cruzado, simplificada)</span>`);
  }
  expState = 'menu';
  showOpts([
    { label: '🧬 Montar outro composto', onClick: askComp },
    { label: '🔎 Consultar um elemento', onClick: askEl },
    { label: '⬅️ Voltar ao menu', onClick: showMenu }
  ]);
}

document.addEventListener('keydown', e => { if (document.activeElement === document.getElementById('exp-input') && e.key === 'Enter') expSubmit(); });

// ════════════════════════════════════════════════════════════════
// 13. ADMIN
// ════════════════════════════════════════════════════════════════
const ADMIN_PW = '1234'; // troque para a senha que quiser

function openAdminOverlay() {
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

renderHome();
