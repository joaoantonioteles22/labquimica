// ════════════════════════════════════════════════════════════════
// NAVEGAÇÃO E HOME
// goPage() decide qual página mostrar e chama a renderização certa
// de cada arquivo (mapa-modulo.js, laboratorio.js, etc).
// Depende de: estado.js
// ════════════════════════════════════════════════════════════════
// 5. NAVEGAÇÃO (CORRIGIDA)
// ════════════════════════════════════════════════════════════════
function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const map = {'page-home':'nav-home','page-mapa':'nav-mapa','page-lab':'nav-lab','page-exp':'nav-exp','page-revisao':'nav-revisao','page-admin':'nav-admin'};
  const ni = document.getElementById(map[id]);
  if (ni) ni.classList.add('active');
  if (id === 'page-mapa') renderMap();
  if (id === 'page-home') { renderHome(); resetHomeBear(); }
  if (id === 'page-lab') renderLab();
  if (id === 'page-exp') initExp();
  if (id === 'page-revisao') renderRevisao();
  if (id === 'page-estatisticas') renderEstatisticas();
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
