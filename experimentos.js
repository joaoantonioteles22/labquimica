// ════════════════════════════════════════════════════════════════
// EXPERIMENTOS
// Chat guiado: consulta de elementos e montagem de compostos simples.
// Depende de: dados-elementos.js (ELS)
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

