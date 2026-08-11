// ════════════════════════════════════════════════════════════════
// LABORATÓRIO
// Tabela periódica interativa em tela cheia (página Laboratório).
// Depende de: dados-elementos.js (ELS), mapa-modulo.js (CAT_L, CAT_C)
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

