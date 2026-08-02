// ════════════════════════════════════════════════════════════════
//  1. DADOS DA TABELA PERIÓDICA (118 elementos)
// ════════════════════════════════════════════════════════════════

const ELS = [
  {z:1,sym:'H',name:'Hidrogênio',mass:1.008,row:1,col:1,p:1,g:1,cat:'nonmetal'},
  {z:2,sym:'He',name:'Hélio',mass:4.003,row:1,col:18,p:1,g:18,cat:'noble'},
  {z:3,sym:'Li',name:'Lítio',mass:6.941,row:2,col:1,p:2,g:1,cat:'alkali'},
  {z:4,sym:'Be',name:'Berílio',mass:9.012,row:2,col:2,p:2,g:2,cat:'alkaline'},
  {z:5,sym:'B',name:'Boro',mass:10.81,row:2,col:13,p:2,g:13,cat:'metalloid'},
  {z:6,sym:'C',name:'Carbono',mass:12.011,row:2,col:14,p:2,g:14,cat:'nonmetal'},
  {z:7,sym:'N',name:'Nitrogênio',mass:14.007,row:2,col:15,p:2,g:15,cat:'nonmetal'},
  {z:8,sym:'O',name:'Oxigênio',mass:15.999,row:2,col:16,p:2,g:16,cat:'nonmetal'},
  {z:9,sym:'F',name:'Flúor',mass:18.998,row:2,col:17,p:2,g:17,cat:'halogen'},
  {z:10,sym:'Ne',name:'Neônio',mass:20.18,row:2,col:18,p:2,g:18,cat:'noble'},
  {z:11,sym:'Na',name:'Sódio',mass:22.99,row:3,col:1,p:3,g:1,cat:'alkali'},
  {z:12,sym:'Mg',name:'Magnésio',mass:24.305,row:3,col:2,p:3,g:2,cat:'alkaline'},
  {z:13,sym:'Al',name:'Alumínio',mass:26.982,row:3,col:13,p:3,g:13,cat:'post-transition'},
  {z:14,sym:'Si',name:'Silício',mass:28.086,row:3,col:14,p:3,g:14,cat:'metalloid'},
  {z:15,sym:'P',name:'Fósforo',mass:30.974,row:3,col:15,p:3,g:15,cat:'nonmetal'},
  {z:16,sym:'S',name:'Enxofre',mass:32.065,row:3,col:16,p:3,g:16,cat:'nonmetal'},
  {z:17,sym:'Cl',name:'Cloro',mass:35.453,row:3,col:17,p:3,g:17,cat:'halogen'},
  {z:18,sym:'Ar',name:'Argônio',mass:39.948,row:3,col:18,p:3,g:18,cat:'noble'},
  {z:19,sym:'K',name:'Potássio',mass:39.098,row:4,col:1,p:4,g:1,cat:'alkali'},
  {z:20,sym:'Ca',name:'Cálcio',mass:40.078,row:4,col:2,p:4,g:2,cat:'alkaline'},
  {z:21,sym:'Sc',name:'Escândio',mass:44.956,row:4,col:3,p:4,g:3,cat:'transition'},
  {z:22,sym:'Ti',name:'Titânio',mass:47.867,row:4,col:4,p:4,g:4,cat:'transition'},
  {z:23,sym:'V',name:'Vanádio',mass:50.942,row:4,col:5,p:4,g:5,cat:'transition'},
  {z:24,sym:'Cr',name:'Cromo',mass:51.996,row:4,col:6,p:4,g:6,cat:'transition'},
  {z:25,sym:'Mn',name:'Manganês',mass:54.938,row:4,col:7,p:4,g:7,cat:'transition'},
  {z:26,sym:'Fe',name:'Ferro',mass:55.845,row:4,col:8,p:4,g:8,cat:'transition'},
  {z:27,sym:'Co',name:'Cobalto',mass:58.933,row:4,col:9,p:4,g:9,cat:'transition'},
  {z:28,sym:'Ni',name:'Níquel',mass:58.693,row:4,col:10,p:4,g:10,cat:'transition'},
  {z:29,sym:'Cu',name:'Cobre',mass:63.546,row:4,col:11,p:4,g:11,cat:'transition'},
  {z:30,sym:'Zn',name:'Zinco',mass:65.38,row:4,col:12,p:4,g:12,cat:'transition'},
  {z:31,sym:'Ga',name:'Gálio',mass:69.723,row:4,col:13,p:4,g:13,cat:'post-transition'},
  {z:32,sym:'Ge',name:'Germânio',mass:72.63,row:4,col:14,p:4,g:14,cat:'metalloid'},
  {z:33,sym:'As',name:'Arsênio',mass:74.922,row:4,col:15,p:4,g:15,cat:'metalloid'},
  {z:34,sym:'Se',name:'Selênio',mass:78.96,row:4,col:16,p:4,g:16,cat:'nonmetal'},
  {z:35,sym:'Br',name:'Bromo',mass:79.904,row:4,col:17,p:4,g:17,cat:'halogen'},
  {z:36,sym:'Kr',name:'Criptônio',mass:83.798,row:4,col:18,p:4,g:18,cat:'noble'},
  {z:37,sym:'Rb',name:'Rubídio',mass:85.468,row:5,col:1,p:5,g:1,cat:'alkali'},
  {z:38,sym:'Sr',name:'Estrôncio',mass:87.62,row:5,col:2,p:5,g:2,cat:'alkaline'},
  {z:39,sym:'Y',name:'Ítrio',mass:88.906,row:5,col:3,p:5,g:3,cat:'transition'},
  {z:40,sym:'Zr',name:'Zircônio',mass:91.224,row:5,col:4,p:5,g:4,cat:'transition'},
  {z:41,sym:'Nb',name:'Nióbio',mass:92.906,row:5,col:5,p:5,g:5,cat:'transition'},
  {z:42,sym:'Mo',name:'Molibdênio',mass:95.95,row:5,col:6,p:5,g:6,cat:'transition'},
  {z:43,sym:'Tc',name:'Tecnécio',mass:98,row:5,col:7,p:5,g:7,cat:'transition'},
  {z:44,sym:'Ru',name:'Rutênio',mass:101.07,row:5,col:8,p:5,g:8,cat:'transition'},
  {z:45,sym:'Rh',name:'Ródio',mass:102.91,row:5,col:9,p:5,g:9,cat:'transition'},
  {z:46,sym:'Pd',name:'Paládio',mass:106.42,row:5,col:10,p:5,g:10,cat:'transition'},
  {z:47,sym:'Ag',name:'Prata',mass:107.87,row:5,col:11,p:5,g:11,cat:'transition'},
  {z:48,sym:'Cd',name:'Cádmio',mass:112.41,row:5,col:12,p:5,g:12,cat:'transition'},
  {z:49,sym:'In',name:'Índio',mass:114.82,row:5,col:13,p:5,g:13,cat:'post-transition'},
  {z:50,sym:'Sn',name:'Estanho',mass:118.71,row:5,col:14,p:5,g:14,cat:'post-transition'},
  {z:51,sym:'Sb',name:'Antimônio',mass:121.76,row:5,col:15,p:5,g:15,cat:'metalloid'},
  {z:52,sym:'Te',name:'Telúrio',mass:127.6,row:5,col:16,p:5,g:16,cat:'metalloid'},
  {z:53,sym:'I',name:'Iodo',mass:126.9,row:5,col:17,p:5,g:17,cat:'halogen'},
  {z:54,sym:'Xe',name:'Xenônio',mass:131.29,row:5,col:18,p:5,g:18,cat:'noble'},
  {z:55,sym:'Cs',name:'Césio',mass:132.91,row:6,col:1,p:6,g:1,cat:'alkali'},
  {z:56,sym:'Ba',name:'Bário',mass:137.33,row:6,col:2,p:6,g:2,cat:'alkaline'},
  {z:57,sym:'La',name:'Lantânio',mass:138.91,row:6,col:3,p:6,g:3,cat:'lanthanide'},
  {z:58,sym:'Ce',name:'Cério',mass:140.12,row:6,col:4,p:6,g:4,cat:'lanthanide'},
  {z:59,sym:'Pr',name:'Praseodímio',mass:140.91,row:6,col:5,p:6,g:5,cat:'lanthanide'},
  {z:60,sym:'Nd',name:'Neodímio',mass:144.24,row:6,col:6,p:6,g:6,cat:'lanthanide'},
  {z:61,sym:'Pm',name:'Promécio',mass:145,row:6,col:7,p:6,g:7,cat:'lanthanide'},
  {z:62,sym:'Sm',name:'Samário',mass:150.36,row:6,col:8,p:6,g:8,cat:'lanthanide'},
  {z:63,sym:'Eu',name:'Európio',mass:151.96,row:6,col:9,p:6,g:9,cat:'lanthanide'},
  {z:64,sym:'Gd',name:'Gadolínio',mass:157.25,row:6,col:10,p:6,g:10,cat:'lanthanide'},
  {z:65,sym:'Tb',name:'Térbio',mass:158.93,row:6,col:11,p:6,g:11,cat:'lanthanide'},
  {z:66,sym:'Dy',name:'Disprósio',mass:162.5,row:6,col:12,p:6,g:12,cat:'lanthanide'},
  {z:67,sym:'Ho',name:'Hólmio',mass:164.93,row:6,col:13,p:6,g:13,cat:'lanthanide'},
  {z:68,sym:'Er',name:'Érbio',mass:167.26,row:6,col:14,p:6,g:14,cat:'lanthanide'},
  {z:69,sym:'Tm',name:'Túlio',mass:168.93,row:6,col:15,p:6,g:15,cat:'lanthanide'},
  {z:70,sym:'Yb',name:'Itérbio',mass:173.05,row:6,col:16,p:6,g:16,cat:'lanthanide'},
  {z:71,sym:'Lu',name:'Lutécio',mass:174.97,row:6,col:17,p:6,g:17,cat:'lanthanide'},
  {z:72,sym:'Hf',name:'Háfnio',mass:178.49,row:6,col:4,p:6,g:4,cat:'transition'},
  {z:73,sym:'Ta',name:'Tântalo',mass:180.95,row:6,col:5,p:6,g:5,cat:'transition'},
  {z:74,sym:'W',name:'Tungstênio',mass:183.84,row:6,col:6,p:6,g:6,cat:'transition'},
  {z:75,sym:'Re',name:'Rênio',mass:186.21,row:6,col:7,p:6,g:7,cat:'transition'},
  {z:76,sym:'Os',name:'Ósmio',mass:190.23,row:6,col:8,p:6,g:8,cat:'transition'},
  {z:77,sym:'Ir',name:'Irídio',mass:192.22,row:6,col:9,p:6,g:9,cat:'transition'},
  {z:78,sym:'Pt',name:'Platina',mass:195.08,row:6,col:10,p:6,g:10,cat:'transition'},
  {z:79,sym:'Au',name:'Ouro',mass:196.97,row:6,col:11,p:6,g:11,cat:'transition'},
  {z:80,sym:'Hg',name:'Mercúrio',mass:200.59,row:6,col:12,p:6,g:12,cat:'post-transition'},
  {z:81,sym:'Tl',name:'Tálio',mass:204.38,row:6,col:13,p:6,g:13,cat:'post-transition'},
  {z:82,sym:'Pb',name:'Chumbo',mass:207.2,row:6,col:14,p:6,g:14,cat:'post-transition'},
  {z:83,sym:'Bi',name:'Bismuto',mass:208.98,row:6,col:15,p:6,g:15,cat:'post-transition'},
  {z:84,sym:'Po',name:'Polônio',mass:209,row:6,col:16,p:6,g:16,cat:'post-transition'},
  {z:85,sym:'At',name:'Ástato',mass:210,row:6,col:17,p:6,g:17,cat:'halogen'},
  {z:86,sym:'Rn',name:'Radônio',mass:222,row:6,col:18,p:6,g:18,cat:'noble'},
  {z:87,sym:'Fr',name:'Frâncio',mass:223,row:7,col:1,p:7,g:1,cat:'alkali'},
  {z:88,sym:'Ra',name:'Rádio',mass:226,row:7,col:2,p:7,g:2,cat:'alkaline'},
  {z:89,sym:'Ac',name:'Actínio',mass:227,row:7,col:3,p:7,g:3,cat:'actinide'},
  {z:90,sym:'Th',name:'Tório',mass:232.04,row:7,col:4,p:7,g:4,cat:'actinide'},
  {z:91,sym:'Pa',name:'Protactínio',mass:231.04,row:7,col:5,p:7,g:5,cat:'actinide'},
  {z:92,sym:'U',name:'Urânio',mass:238.03,row:7,col:6,p:7,g:6,cat:'actinide'},
  {z:93,sym:'Np',name:'Netúnio',mass:237,row:7,col:7,p:7,g:7,cat:'actinide'},
  {z:94,sym:'Pu',name:'Plutônio',mass:244,row:7,col:8,p:7,g:8,cat:'actinide'},
  {z:95,sym:'Am',name:'Amerício',mass:243,row:7,col:9,p:7,g:9,cat:'actinide'},
  {z:96,sym:'Cm',name:'Cúrio',mass:247,row:7,col:10,p:7,g:10,cat:'actinide'},
  {z:97,sym:'Bk',name:'Berquélio',mass:247,row:7,col:11,p:7,g:11,cat:'actinide'},
  {z:98,sym:'Cf',name:'Califórnio',mass:251,row:7,col:12,p:7,g:12,cat:'actinide'},
  {z:99,sym:'Es',name:'Einsteínio',mass:252,row:7,col:13,p:7,g:13,cat:'actinide'},
  {z:100,sym:'Fm',name:'Férmio',mass:257,row:7,col:14,p:7,g:14,cat:'actinide'},
  {z:101,sym:'Md',name:'Mendelévio',mass:258,row:7,col:15,p:7,g:15,cat:'actinide'},
  {z:102,sym:'No',name:'Nobélio',mass:259,row:7,col:16,p:7,g:16,cat:'actinide'},
  {z:103,sym:'Lr',name:'Laurêncio',mass:262,row:7,col:17,p:7,g:17,cat:'actinide'},
  {z:104,sym:'Rf',name:'Rutherfórdio',mass:267,row:7,col:4,p:7,g:4,cat:'transition'},
  {z:105,sym:'Db',name:'Dúbnio',mass:268,row:7,col:5,p:7,g:5,cat:'transition'},
  {z:106,sym:'Sg',name:'Seabórgio',mass:269,row:7,col:6,p:7,g:6,cat:'transition'},
  {z:107,sym:'Bh',name:'Bóhrio',mass:270,row:7,col:7,p:7,g:7,cat:'transition'},
  {z:108,sym:'Hs',name:'Hássio',mass:277,row:7,col:8,p:7,g:8,cat:'transition'},
  {z:109,sym:'Mt',name:'Meitnério',mass:278,row:7,col:9,p:7,g:9,cat:'transition'},
  {z:110,sym:'Ds',name:'Darmstádtio',mass:281,row:7,col:10,p:7,g:10,cat:'transition'},
  {z:111,sym:'Rg',name:'Roentgênio',mass:282,row:7,col:11,p:7,g:11,cat:'transition'},
  {z:112,sym:'Cn',name:'Copernício',mass:285,row:7,col:12,p:7,g:12,cat:'transition'},
  {z:113,sym:'Nh',name:'Nihônio',mass:286,row:7,col:13,p:7,g:13,cat:'post-transition'},
  {z:114,sym:'Fl',name:'Fleróvio',mass:289,row:7,col:14,p:7,g:14,cat:'post-transition'},
  {z:115,sym:'Mc',name:'Moscóvio',mass:290,row:7,col:15,p:7,g:15,cat:'post-transition'},
  {z:116,sym:'Lv',name:'Livermório',mass:293,row:7,col:16,p:7,g:16,cat:'post-transition'},
  {z:117,sym:'Ts',name:'Tenessino',mass:294,row:7,col:17,p:7,g:17,cat:'halogen'},
  {z:118,sym:'Og',name:'Oganessônio',mass:294,row:7,col:18,p:7,g:18,cat:'noble'}
];

// ════════════════════════════════════════════════════════════════
//  2. FUNÇÕES DIDÁTICAS (conteúdos dos módulos)
// ════════════════════════════════════════════════════════════════

function getDid() { return `<div class="card"><div class="did-label">O que é um átomo?</div><div class="did-intro">O átomo é a menor unidade de matéria que mantém as propriedades de um elemento. É formado por núcleo (p⁺ e n⁰) e eletrosfera (e⁻).</div><div class="svg-block"><svg width="100%" viewBox="0 0 340 200" fill="none"><rect width="340" height="200" fill="#000"/><ellipse cx="110" cy="100" rx="70" ry="28" stroke="#1e3a5f" stroke-width="1" stroke-dasharray="4 3"/><ellipse cx="110" cy="100" rx="95" ry="38" stroke="#1e3a5f" stroke-width="1" stroke-dasharray="4 3"/><circle cx="110" cy="100" r="24" fill="#0d1a2e" stroke="#2563eb" stroke-width="1.5"/><circle cx="103" cy="94" r="7" fill="#ef4444"/><text x="103" y="98" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">p⁺</text><circle cx="117" cy="94" r="7" fill="#ef4444"/><text x="117" y="98" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">p⁺</text><circle cx="110" cy="107" r="7" fill="#6b7280"/><text x="110" y="111" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">n⁰</text><g style="transform-origin:110px 100px;animation:o1 2.4s linear infinite"><circle cx="180" cy="100" r="5.5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/><text x="180" y="100" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="6" font-family="monospace">e⁻</text></g><g style="transform-origin:110px 100px;animation:o2 3.6s linear infinite"><circle cx="205" cy="100" r="5.5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/></g><g style="transform-origin:110px 100px;animation:o3 3.6s linear infinite"><circle cx="205" cy="100" r="5" fill="#60a5fa" stroke="#93c5fd" stroke-width=".8"/></g><line x1="136" y1="86" x2="185" y2="48" stroke="#334155" stroke-width=".8"/><text x="188" y="44" fill="#64748b" font-size="10">Núcleo (p⁺+n⁰)</text><line x1="180" y1="118" x2="200" y2="148" stroke="#334155" stroke-width=".8"/><text x="204" y="152" fill="#64748b" font-size="10">Eletrosfera (e⁻)</text><rect x="4" y="140" width="90" height="54" rx="8" fill="#0d1a2e" stroke="#1e3a5f" stroke-width="1"/><text x="49" y="157" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="monospace">Z = p⁺</text><text x="49" y="173" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="monospace">A = p⁺+n⁰</text><text x="49" y="189" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="monospace">n⁰ = A−Z</text><style>@keyframes o1{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes o2{from{transform:rotate(120deg)}to{transform:rotate(480deg)}}@keyframes o3{from{transform:rotate(240deg)}to{transform:rotate(600deg)}}</style></svg></div><div class="did-step"><div class="step-n">1</div><div class="step-c"><h4>Partículas subatômicas</h4><p><strong>Próton (p⁺)</strong> — positivo, no núcleo<br><strong>Nêutron (n⁰)</strong> — neutro, no núcleo<br><strong>Elétron (e⁻)</strong> — negativo, na eletrosfera</p></div></div><div class="did-step"><div class="step-n">2</div><div class="step-c"><h4>Número Atômico Z e Massa A</h4><p><strong>Z</strong> = nº de prótons → define o elemento!<br><strong>A</strong> = p⁺ + n⁰ | Átomo neutro: e⁻ = p⁺</p></div></div><div class="formula">Z = p⁺ | A = p⁺ + n⁰ | n⁰ = A − Z</div></div><div class="card"><div class="did-label">Formação de íons</div><div class="svg-block"><svg width="100%" viewBox="0 0 340 170" fill="none"><rect width="340" height="170" fill="#000"/><text x="80" y="16" text-anchor="middle" fill="#64748b" font-size="10">Na neutro (11p⁺/11e⁻)</text><circle cx="80" cy="80" r="22" fill="#0d1a2e" stroke="#2563eb" stroke-width="1.2"/><text x="80" y="84" text-anchor="middle" dominant-baseline="central" fill="#93c5fd" font-size="9" font-family="monospace">11p⁺</text><ellipse cx="80" cy="80" rx="46" ry="18" stroke="#1e3a5f" stroke-width="1" stroke-dasharray="3 2" fill="none"/><ellipse cx="80" cy="80" rx="66" ry="27" stroke="#1e3a5f" stroke-width="1" stroke-dasharray="3 2" fill="none"/><circle cx="126" cy="80" r="5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/><circle cx="80" cy="53" r="5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/><circle cx="146" cy="80" r="5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/><circle cx="14" cy="80" r="5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/><circle cx="80" cy="107" r="5" fill="#22c55e" stroke="#86efac" stroke-width="1"/><text x="80" y="124" text-anchor="middle" fill="#86efac" font-size="9">valência</text><text x="185" y="72" text-anchor="middle" fill="#f97316" font-size="11">perde 1 e⁻</text><defs><marker id="ao" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#f97316" stroke-width="1.5" stroke-linecap="round"/></marker></defs><line x1="152" y1="80" x2="218" y2="80" stroke="#f97316" stroke-width="1.2" marker-end="url(#ao)"/><circle cx="180" cy="105" r="6" fill="#22c55e" stroke="#86efac" stroke-width="1"/><text x="180" y="122" text-anchor="middle" fill="#86efac" font-size="9">saiu!</text><text x="280" y="16" text-anchor="middle" fill="#f97316" font-size="10">Na⁺ (cátion) — carga +</text><circle cx="280" cy="90" r="22" fill="#1a0a00" stroke="#f97316" stroke-width="1.5"/><text x="280" y="94" text-anchor="middle" dominant-baseline="central" fill="#fb923c" font-size="9" font-family="monospace">11p⁺</text><ellipse cx="280" cy="90" rx="46" ry="18" stroke="#431407" stroke-width="1" stroke-dasharray="3 2" fill="none"/><ellipse cx="280" cy="90" rx="66" ry="27" stroke="#431407" stroke-width="1" stroke-dasharray="3 2" fill="none"/><circle cx="326" cy="90" r="5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/><circle cx="280" cy="63" r="5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/><circle cx="214" cy="90" r="5" fill="#3b82f6" stroke="#93c5fd" stroke-width=".8"/><circle cx="280" cy="117" r="6" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="2 2"/><rect x="306" y="74" width="24" height="24" rx="6" fill="#431407" stroke="#f97316" stroke-width="1.5"/><text x="318" y="90" text-anchor="middle" dominant-baseline="central" fill="#fb923c" font-size="14">+</text></svg></div><div class="did-step"><div class="step-n">3</div><div class="step-c"><h4>Íons</h4><p><strong>Cátion</strong>: perdeu e⁻ → carga positiva<br><strong>Ânion</strong>: ganhou e⁻ → carga negativa<br>Os prótons nunca mudam!</p></div></div></div><div class="card"><div class="did-label">Isótopos, Isóbaros e Isótonos</div><div class="svg-block"><svg width="100%" viewBox="0 0 340 178" fill="none"><rect width="340" height="178" fill="#000"/><text x="80" y="18" text-anchor="middle" fill="#3b82f6" font-size="13" font-weight="500">¹²C</text><circle cx="80" cy="78" r="32" fill="#0d1a2e" stroke="#2563eb" stroke-width="1.5"/><circle cx="69" cy="70" r="7" fill="#ef4444"/><text x="69" y="74" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">p⁺</text><circle cx="85" cy="70" r="7" fill="#ef4444"/><text x="85" y="74" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">p⁺</text><circle cx="69" cy="86" r="7" fill="#6b7280"/><text x="69" y="90" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">n⁰</text><circle cx="85" cy="86" r="7" fill="#6b7280"/><text x="85" y="90" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">n⁰</text><text x="80" y="124" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">Z=6, A=12</text><text x="220" y="18" text-anchor="middle" fill="#3b82f6" font-size="13" font-weight="500">¹⁴C</text><circle cx="220" cy="78" r="32" fill="#0d1a2e" stroke="#2563eb" stroke-width="1.5"/><circle cx="209" cy="66" r="7" fill="#ef4444"/><text x="209" y="70" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">p⁺</text><circle cx="225" cy="66" r="7" fill="#ef4444"/><text x="225" y="70" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="7" font-family="monospace">p⁺</text><circle cx="209" cy="80" r="7" fill="#6b7280"/><circle cx="225" cy="80" r="7" fill="#6b7280"/><circle cx="215" cy="93" r="7" fill="#6b7280"/><circle cx="229" cy="93" r="7" fill="#6b7280"/><text x="220" y="124" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">Z=6, A=14</text><path d="M112 78 Q150 42 188 78" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="4 3" fill="none"/><text x="150" y="34" text-anchor="middle" fill="#3b82f6" font-size="10">mesmo Z=6 → ISÓTOPOS</text><rect x="4" y="146" width="100" height="22" rx="6" fill="#0d1a2e"/><text x="54" y="161" text-anchor="middle" fill="#3b82f6" font-size="10" font-family="monospace">Isótopos: =Z ≠A</text><rect x="114" y="146" width="108" height="22" rx="6" fill="#0d0f1a"/><text x="168" y="161" text-anchor="middle" fill="#818cf8" font-size="10" font-family="monospace">Isóbaros: =A ≠Z</text><rect x="230" y="146" width="106" height="22" rx="6" fill="#0a1a0a"/><text x="283" y="161" text-anchor="middle" fill="#34d399" font-size="10" font-family="monospace">Isótonos: =n⁰ ≠Z</text></svg></div></div><div class="card"><div class="did-label">Modelos atômicos</div><div class="svg-block"><svg width="100%" viewBox="0 0 340 158" fill="none"><rect width="340" height="158" fill="#000"/><line x1="20" y1="80" x2="320" y2="80" stroke="#1e3a5f" stroke-width="1.5"/><circle cx="52" cy="80" r="18" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.2"/><circle cx="52" cy="80" r="9" fill="#3b82f6"/><text x="52" y="110" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="600">Dalton</text><text x="52" y="122" text-anchor="middle" fill="#475569" font-size="8" font-family="monospace">1803</text><text x="52" y="134" text-anchor="middle" fill="#334155" font-size="8">bola maciça</text><circle cx="118" cy="80" r="18" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.2"/><circle cx="118" cy="80" r="11" fill="#2563eb" opacity=".35"/><circle cx="112" cy="77" r="3" fill="#60a5fa"/><circle cx="121" cy="83" r="3" fill="#60a5fa"/><circle cx="124" cy="74" r="3" fill="#60a5fa"/><text x="118" y="110" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="600">Thomson</text><text x="118" y="122" text-anchor="middle" fill="#475569" font-size="8" font-family="monospace">1897</text><text x="118" y="134" text-anchor="middle" fill="#334155" font-size="8">pudim passas</text><circle cx="184" cy="80" r="7" fill="#ef4444" stroke="#fca5a5" stroke-width=".8"/><ellipse cx="184" cy="80" rx="18" ry="7" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3 2" fill="none"/><circle cx="202" cy="80" r="4" fill="#3b82f6"/><text x="184" y="110" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="600">Rutherford</text><text x="184" y="122" text-anchor="middle" fill="#475569" font-size="8" font-family="monospace">1911</text><text x="184" y="134" text-anchor="middle" fill="#334155" font-size="8">núcleo</text><circle cx="250" cy="80" r="5" fill="#ef4444" stroke="#fca5a5" stroke-width=".8"/><circle cx="250" cy="80" r="13" fill="none" stroke="#1e3a5f" stroke-width="1"/><circle cx="250" cy="80" r="19" fill="none" stroke="#2563eb" stroke-width="1"/><circle cx="269" cy="80" r="3.5" fill="#3b82f6"/><circle cx="250" cy="61" r="3.5" fill="#60a5fa"/><text x="250" y="110" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="600">Bohr</text><text x="250" y="122" text-anchor="middle" fill="#475569" font-size="8" font-family="monospace">1913</text><text x="250" y="134" text-anchor="middle" fill="#334155" font-size="8">órbitas fixas</text><circle cx="310" cy="80" r="5" fill="#ef4444" stroke="#fca5a5" stroke-width=".8"/><ellipse cx="310" cy="80" rx="18" ry="7" stroke="#7c3aed" stroke-width="1" stroke-dasharray="2 2" fill="none" style="transform-origin:310px 80px"/><ellipse cx="310" cy="80" rx="18" ry="7" stroke="#7c3aed" stroke-width="1" stroke-dasharray="2 2" fill="none" style="transform-origin:310px 80px;transform:rotate(60deg)"/><ellipse cx="310" cy="80" rx="18" ry="7" stroke="#a78bfa" stroke-width="1" stroke-dasharray="2 2" fill="none" style="transform-origin:310px 80px;transform:rotate(120deg)"/><text x="310" y="110" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="600">Quântico</text><text x="310" y="122" text-anchor="middle" fill="#475569" font-size="8" font-family="monospace">atual</text><text x="310" y="134" text-anchor="middle" fill="#334155" font-size="8">nuvem prob.</text><polygon points="86,74 86,86 96,80" fill="#1e3a5f"/><polygon points="152,74 152,86 162,80" fill="#1e3a5f"/><polygon points="218,74 218,86 228,80" fill="#1e3a5f"/><polygon points="280,74 280,86 290,80" fill="#1e3a5f"/></svg></div><div class="did-step"><div class="step-n">4</div><div class="step-c"><h4>Evolução dos modelos</h4><p>Cada modelo foi <strong>superado por experimentos</strong>. De bola maciça à nuvem de probabilidade. Rutherford: folha de ouro. Bohr: espectros de luz.</p></div></div></div>`; }

function getQuest() { return [
  { q: 'O carbono tem Z=6 e A=12. Quantos nêutrons ele possui?', opts: ['4','6','8','12'], c: 1, res: '<strong>6 nêutrons.</strong> n⁰ = A − Z = 12 − 6 = 6.' },
  { q: 'O sódio (Na, Z=11) perde 1 elétron. O íon Na⁺ possui:', opts: ['10p⁺ e 10e⁻','11p⁺ e 10e⁻','10p⁺ e 11e⁻','11p⁺ e 11e⁻'], c: 1, res: '<strong>11p⁺ e 10e⁻.</strong> Prótons não mudam; perde um elétron.' },
  { q: '¹²C e ¹⁴C são exemplos de:', opts: ['Isóbaros','Isótonos','Isótopos','Alótropos'], c: 2, res: '<strong>Isótopos.</strong> Mesmo Z, A diferente.' },
  { q: 'Qual modelo propôs o núcleo central positivo com eletrosfera vazia?', opts: ['Dalton','Thomson','Rutherford','Bohr'], c: 2, res: '<strong>Rutherford.</strong> Experimento da folha de ouro.' },
  { q: 'O cloro ³⁷Cl tem Z=17. Quantos nêutrons possui?', opts: ['17','18','20','37'], c: 2, res: '<strong>20 nêutrons.</strong> 37−17=20.' }
]; }

function getLigacoesDid() { return `<div class="card"><div class="did-label">Por que os átomos se ligam?</div><div class="did-intro">Os átomos formam ligações para atingir maior estabilidade — geralmente completando 8 elétrons na camada de valência (Regra do Octeto). Existem 3 tipos principais de ligação química.</div><div class="svg-block"><svg width="100%" viewBox="0 0 340 120" fill="none"><rect width="340" height="120" fill="#000"/><rect x="8" y="14" width="98" height="92" rx="8" fill="#050d1f" stroke="#7c3aed" stroke-width="1"/><text x="57" y="28" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700" font-family="monospace">IÔNICA</text><circle cx="38" cy="62" r="16" fill="#1a0a2e" stroke="#7c3aed" stroke-width="1.2"/><text x="38" y="58" text-anchor="middle" fill="#c4b5fd" font-size="7" font-family="monospace" font-weight="700">Na</text><text x="38" y="68" text-anchor="middle" fill="#c4b5fd" font-size="6" font-family="monospace">11e⁻</text><circle cx="78" cy="62" r="16" fill="#1a000a" stroke="#db2777" stroke-width="1.2"/><text x="78" y="58" text-anchor="middle" fill="#f9a8d4" font-size="7" font-family="monospace" font-weight="700">Cl</text><text x="78" y="68" text-anchor="middle" fill="#f9a8d4" font-size="6" font-family="monospace">17e⁻</text><circle cx="50" cy="62" r="4" fill="#fbbf24"/><text x="57" y="92" text-anchor="middle" fill="#475569" font-size="7">doação de e⁻</text><text x="57" y="102" text-anchor="middle" fill="#475569" font-size="7">Na⁺ + Cl⁻ → NaCl</text><rect x="122" y="14" width="98" height="92" rx="8" fill="#050d1f" stroke="#2563eb" stroke-width="1"/><text x="171" y="28" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="700" font-family="monospace">COVALENTE</text><circle cx="152" cy="62" r="16" fill="#0d1a2e" stroke="#2563eb" stroke-width="1.2"/><text x="152" y="58" text-anchor="middle" fill="#93c5fd" font-size="7" font-family="monospace" font-weight="700">H</text><text x="152" y="68" text-anchor="middle" fill="#93c5fd" font-size="6" font-family="monospace">1e⁻</text><circle cx="191" cy="62" r="16" fill="#0d1a2e" stroke="#2563eb" stroke-width="1.2"/><text x="191" y="58" text-anchor="middle" fill="#93c5fd" font-size="7" font-family="monospace" font-weight="700">H</text><text x="191" y="68" text-anchor="middle" fill="#93c5fd" font-size="6" font-family="monospace">1e⁻</text><line x1="168" y1="62" x2="175" y2="62" stroke="#60a5fa" stroke-width="2.5"/><text x="171" y="92" text-anchor="middle" fill="#475569" font-size="7">compartilhamento</text><text x="171" y="102" text-anchor="middle" fill="#475569" font-size="7">H−H → H₂</text><rect x="236" y="14" width="98" height="92" rx="8" fill="#050d1f" stroke="#16a34a" stroke-width="1"/><text x="285" y="28" text-anchor="middle" fill="#86efac" font-size="9" font-weight="700" font-family="monospace">METÁLICA</text><circle cx="258" cy="52" r="10" fill="#001a0a" stroke="#16a34a" stroke-width="1"/><circle cx="285" cy="52" r="10" fill="#001a0a" stroke="#16a34a" stroke-width="1"/><circle cx="312" cy="52" r="10" fill="#001a0a" stroke="#16a34a" stroke-width="1"/><circle cx="258" cy="75" r="10" fill="#001a0a" stroke="#16a34a" stroke-width="1"/><circle cx="285" cy="75" r="10" fill="#001a0a" stroke="#16a34a" stroke-width="1"/><circle cx="312" cy="75" r="10" fill="#001a0a" stroke="#16a34a" stroke-width="1"/><circle cx="270" cy="60" r="3" fill="#fbbf24" opacity=".8"/><circle cx="298" cy="66" r="3" fill="#fbbf24" opacity=".8"/><circle cx="275" cy="80" r="3" fill="#fbbf24" opacity=".8"/><text x="285" y="100" text-anchor="middle" fill="#475569" font-size="7">mar de elétrons livres</text></svg></div><div class="did-step"><div class="step-n">1</div><div class="step-c"><h4>Ligação Iônica</h4><p>Ocorre entre <strong>metal + não-metal</strong>. Um átomo <strong>doa</strong> elétrons e o outro <strong>recebe</strong>, formando íons.<br>Ex: NaCl (sal de cozinha), MgO, CaCl₂</p></div></div><div class="did-step"><div class="step-n">2</div><div class="step-c"><h4>Ligação Covalente</h4><p>Ocorre entre <strong>não-metal + não-metal</strong>. Os átomos <strong>compartilham</strong> pares de elétrons.<br>Ex: H₂O, CO₂, CH₄, NH₃, H₂</p></div></div><div class="did-step"><div class="step-n">3</div><div class="step-c"><h4>Ligação Metálica</h4><p>Ocorre entre <strong>metais</strong>. Elétrons de valência ficam livres, formando um "mar de elétrons".</p></div></div></div>`; }

function getLigacoesQuest() { return [
  { q: 'Qual tipo de ligação ocorre entre Na e Cl para formar o NaCl?', opts: ['Covalente apolar','Covalente polar','Iônica','Metálica'], c: 2, res: '<strong>Iônica.</strong> Metal + não-metal.' },
  { q: 'Na molécula de H₂O, o tipo de ligação entre H e O é:', opts: ['Iônica','Covalente polar','Covalente apolar','Metálica'], c: 1, res: '<strong>Covalente polar.</strong> Diferença de eletronegatividade.' },
  { q: 'O que caracteriza a ligação metálica?', opts: ['Doação de elétrons','Compartilhamento','Mar de elétrons livres','Atração entre íons'], c: 2, res: '<strong>Mar de elétrons livres.</strong>' },
  { q: 'A ligação dupla (como em O=O) é composta por:', opts: ['2 sigma','1 sigma e 1 pi','2 pi','1 sigma e 2 pi'], c: 1, res: '<strong>1 sigma + 1 pi.</strong>' },
  { q: 'O CO₂ tem ligações covalentes polares, mas a molécula é apolar. Por quê?', opts: ['Mesma eletronegatividade','Geometria linear cancela dipolos','Não há pares livres','É um gás'], c: 1, res: '<strong>Geometria linear cancela os dipolos.</strong>' }
]; }

function getTabelaDid() { return `<div class="card"><div class="did-label">O que é a Tabela Periódica?</div><div class="did-intro">A Tabela Periódica organiza os 118 elementos conhecidos por ordem crescente de número atômico (Z). Criada por Mendeleev em 1869, ela revela padrões e propriedades dos elementos.</div><div id="mod-periodic-wrap" style="overflow-x:auto;padding:12px;background:#fff;border-radius:16px;box-shadow:0 0 0 2px #2563eb,0 0 0 4px #bfdbfe,0 8px 32px rgba(37,99,235,.15);margin:12px 0"><div id="mod-periodic-grid" style="display:grid;grid-template-columns:repeat(18,minmax(24px,1fr));gap:2px;min-width:480px"></div></div><div id="mod-el-detail" style="display:none;background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:16px;margin-bottom:14px"></div><div class="did-step"><div class="step-n">1</div><div class="step-c"><h4>Períodos (linhas horizontais)</h4><p>Existem <strong>7 períodos</strong>. O número do período indica a quantidade de <strong>camadas eletrônicas</strong> do elemento.</p></div></div><div class="did-step"><div class="step-n">2</div><div class="step-c"><h4>Grupos/Famílias (colunas verticais)</h4><p>Existem <strong>18 grupos</strong>. Elementos do mesmo grupo têm o mesmo número de <strong>elétrons de valência</strong> e propriedades químicas parecidas.</p></div></div><div class="formula">Período = nº de camadas | Grupo = elétrons de valência</div></div><div class="card"><div class="did-label">Famílias importantes</div><div class="did-step"><div class="step-n">1</div><div class="step-c"><h4>Metais Alcalinos — Grupo 1 (IA)</h4><p>Li, Na, K, Rb, Cs, Fr<br><strong>1 elétron de valência</strong> → muito reativos.</p></div></div><div class="did-step"><div class="step-n">2</div><div class="step-c"><h4>Halogênios — Grupo 17 (VIIA)</h4><p>F, Cl, Br, I, At<br><strong>7 elétrons de valência</strong> → precisam de 1 e⁻ para completar o octeto.</p></div></div><div class="did-step"><div class="step-n">3</div><div class="step-c"><h4>Gases Nobres — Grupo 18 (VIIIA)</h4><p>He, Ne, Ar, Kr, Xe, Rn<br><strong>8 elétrons de valência</strong> (He tem 2) → inertes.</p></div></div><div class="did-step"><div class="step-n">4</div><div class="step-c"><h4>Metais de Transição — Grupos 3–12</h4><p>Fe, Cu, Zn, Ag, Au, Pt...<br>Camada d incompleta.</p></div></div></div>`; }

function getTabelaQuest() { return [
  { q: 'O sódio (Na) está no Período 3 da tabela periódica. O que isso indica?', opts: ['Tem 3 prótons','Tem 3 elétrons de valência','Tem 3 camadas eletrônicas','Pertence ao grupo 3'], c: 2, res: '<strong>3 camadas eletrônicas.</strong> O período indica o número de camadas.' },
  { q: 'Elementos do mesmo grupo (família) têm em comum:', opts: ['Mesmo número de prótons','Mesmo número de nêutrons','Mesma quantidade de elétrons de valência','Mesma massa atômica'], c: 2, res: '<strong>Mesma quantidade de elétrons de valência.</strong>' },
  { q: 'Qual família é conhecida por ser praticamente inerte (não reage)?', opts: ['Metais alcalinos','Halogênios','Calcogênios','Gases nobres'], c: 3, res: '<strong>Gases nobres.</strong> Camada de valência completa.' },
  { q: 'A eletronegatividade de um elemento indica:', opts: ['Sua massa atômica','Capacidade de atrair elétrons','Número de prótons','Tamanho do raio atômico'], c: 1, res: '<strong>Capacidade de atrair elétrons.</strong>' },
  { q: 'O cloro (Cl, Z=17) precisa de quantos elétrons para completar o octeto?', opts: ['1 elétron','2 elétrons','7 elétrons','8 elétrons'], c: 0, res: '<strong>1 elétron.</strong> Grupo 17 → 7 e⁻ de valência, precisa de 1.' }
]; }

// ════════════════════════════════════════════════════════════════
//  3. ESTADO E CONFIGURAÇÕES
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
//  4. DEFINIÇÃO DOS MÓDULOS
// ════════════════════════════════════════════════════════════════

const AREAS = [
  { el: 'tg', tiles: [{ id: 'atom', emoji: '⚛️', label: 'Átomo', sub: 'prótons, nêutrons, elétrons', xp: 10, did: getDid(), quest: getQuest() }] },
  { el: 'to', tiles: [{ id: 'ligacoes', emoji: '🔗', label: 'Ligações Químicas', sub: 'iônica, covalente, metálica', xp: 10, did: getLigacoesDid(), quest: getLigacoesQuest() }] },
  { el: 'tf', tiles: [{ id: 'tabela', emoji: '📊', label: 'Tabela Periódica', sub: 'períodos, grupos, propriedades', xp: 10, did: getTabelaDid(), quest: getTabelaQuest() }] }
];
const ALL = AREAS.flatMap(a => a.tiles);

// ════════════════════════════════════════════════════════════════
//  5. NAVEGAÇÃO ENTRE PÁGINAS
// ════════════════════════════════════════════════════════════════

function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const map = {
    'page-home': 'nav-home',
    'page-mapa': 'nav-mapa',
    'page-lab': 'nav-lab',
    'page-exp': 'nav-exp',
    'page-admin': 'nav-admin'
  };
  const ni = document.getElementById(map[id]);
  if (ni) ni.classList.add('active');
  
  // ⚠️ REMOVI a chamada automática do renderMap() aqui para evitar conflito
  if (id === 'page-home') renderHome();
  if (id === 'page-lab') renderLab();
  if (id === 'page-exp') initExp();
  if (id === 'page-admin') renderAdmin();
  
  window.scrollTo(0, 0);
}

// ════════════════════════════════════════════════════════════════
//  6. FUNÇÃO DA PÁGINA INICIAL (COM ANIMAÇÃO DO FOGUETE)
// ════════════════════════════════════════════════════════════════

function explorarModulos() {
  const foguete = document.querySelector('.home-bear svg');
  if (foguete) {
    foguete.classList.add('foguete-sobe');
    setTimeout(() => {
      goPage('page-mapa');
      // Aguarda um instante para a página ser exibida e depois renderiza o mapa
      setTimeout(() => {
        renderMap();
      }, 300);
    }, 1000);
  } else {
    goPage('page-mapa');
    setTimeout(() => {
      renderMap();
    }, 300);
  }
}

// ════════════════════════════════════════════════════════════════
//  7. RENDERIZAÇÃO DA HOME
// ════════════════════════════════════════════════════════════════

function renderHome() {
  document.getElementById('hs-mod').textContent = done.size;
  document.getElementById('hs-xp').textContent = xp;
  const p = Math.min(100, Math.round(done.size / ALL.length * 100));
  document.getElementById('hs-prog').textContent = p + '%';
}

// ════════════════════════════════════════════════════════════════
//  8. RENDERIZAÇÃO DO MAPA
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
//  9. MÓDULO E QUESTÕES (igual ao que você já tem)
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
  window.scrollTo(0, 0);
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
  const L = ['A', 'B', 'C', 'D'];
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
  cont.innerHTML = `
    <div class="q-dots">${dots}</div>
    <div class="q-card">
      <div class="q-num">Questão ${curQ + 1} de ${curMod.quest.length}</div>
      <div class="q-text">${q.q}</div>
      <div class="opts">${opts}</div>
      ${res}
    </div>
    <div class="nav-row">
      <button class="btn-ghost" ${curQ === 0 ? 'disabled' : ''} onclick="prevQ()">← Anterior</button>
      ${nextBtn}
    </div>
  `;
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

function nextQ() { curQ++; renderQuestion(); }
function prevQ() { curQ--; renderQuestion(); }

function renderScore() {
  const correct = answers.filter((a, i) => a === curMod.quest[i]?.c).length;
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
  cont.innerHTML = `
    <div class="card score-wrap">
      <div class="score-stars">${stars}</div>
      <div class="score-num">${correct}/${total}</div>
      <div class="score-sub">${pct}% de acerto</div>
      <div class="score-msg">${msg}</div>
      ${passed && !isAdmin ? `<div class="score-xp">+${curMod.xp} XP</div>` : ''}
      ${passed && isAdmin ? `<div class="score-xp" style="color:#f59e0b">✓ Admin: aprovado</div>` : ''}
    </div>
    ${action}
    <button class="btn-ghost" onclick="curQ=0;answers=new Array(curMod.quest.length).fill(null);renderQuestion()" style="margin-top:8px">🔄 Refazer</button>
  `;
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
//  10 a 14 — LAB, EXPERIMENTOS, ADMIN, TOAST, ETC (mantido igual)
// ════════════════════════════════════════════════════════════════
// [Aqui vem todo o resto do seu código que eu já tinha te passado antes,
//  mas para não alongar, vou manter o que já estava funcionando.]

// ════════════════════════════════════════════════════════════════
//  15. INICIALIZAÇÃO
// ════════════════════════════════════════════════════════════════

renderHome();
// ⚠️ NÃO chamo renderMap() aqui porque ele será chamado quando o usuário clicar em "Explorar módulos"
