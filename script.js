// ════════════════════════════════════════════════════════════════
// 1. DADOS DA TABELA PERIÓDICA (118 ELEMENTOS)
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
// 2. FUNÇÕES DIDÁTICAS
// ════════════════════════════════════════════════════════════════
function getDid(){return`<div class="card"><div class="did-label">O que é um átomo?</div><div class="did-intro">O átomo é a menor unidade de matéria que mantém as propriedades de um elemento. É formado por núcleo (p⁺ e n⁰) e eletrosfera (e⁻).</div><div class="did-step"><div class="step-n">1</div><div class="step-c"><h4>Partículas subatômicas</h4><p><strong>Próton (p⁺)</strong> — positivo, no núcleo<br><strong>Nêutron (n⁰)</strong> — neutro, no núcleo<br><strong>Elétron (e⁻)</strong> — negativo, na eletrosfera</p></div></div><div class="did-step"><div class="step-n">2</div><div class="step-c"><h4>Número Atômico Z e Massa A</h4><p><strong>Z</strong> = nº de prótons → define o elemento!<br><strong>A</strong> = p⁺ + n⁰ | Átomo neutro: e⁻ = p⁺</p></div></div><div class="formula">Z = p⁺ | A = p⁺ + n⁰ | n⁰ = A − Z</div></div><div class="card"><div class="did-label">Formação de íons</div><div class="did-step"><div class="step-n">3</div><div class="step-c"><h4>Íons</h4><p><strong>Cátion</strong>: perdeu e⁻ → carga positiva<br><strong>Ânion</strong>: ganhou e⁻ → carga negativa<br>Os prótons nunca mudam!</p></div></div></div><div class="card"><div class="did-label">Isótopos, Isóbaros e Isótonos</div><div class="did-step"><div class="step-n">4</div><div class="step-c"><h4>Definições</h4><p><strong>Isótopos:</strong> mesmo Z, diferente A.<br><strong>Isóbaros:</strong> mesmo A, diferente Z.<br><strong>Isótonos:</strong> mesmo número de nêutrons.</p></div></div></div><div class="card"><div class="did-label">Modelos atômicos</div><div class="did-step"><div class="step-n">5</div><div class="step-c"><h4>Evolução</h4><p>Dalton (bola maciça) → Thomson (pudim passas) → Rutherford (núcleo) → Bohr (órbitas) → Quântico (nuvem de probabilidade).</p></div></div></div>`;}

function getQuest(){return[{q:'O carbono tem Z=6 e A=12. Quantos nêutrons ele possui?',opts:['4','6','8','12'],c:1,res:'<strong>6 nêutrons.</strong> n⁰ = A − Z = 12 − 6 = 6.'},{q:'O sódio (Na, Z=11) perde 1 elétron. O íon Na⁺ possui:',opts:['10p⁺ e 10e⁻','11p⁺ e 10e⁻','10p⁺ e 11e⁻','11p⁺ e 11e⁻'],c:1,res:'<strong>11p⁺ e 10e⁻.</strong> Prótons não mudam; perde um elétron.'},{q:'¹²C e ¹⁴C são exemplos de:',opts:['Isóbaros','Isótonos','Isótopos','Alótropos'],c:2,res:'<strong>Isótopos.</strong> Mesmo Z, A diferente.'},{q:'Qual modelo propôs o núcleo central positivo com eletrosfera vazia?',opts:['Dalton','Thomson','Rutherford','Bohr'],c:2,res:'<strong>Rutherford.</strong> Experimento da folha de ouro.'},{q:'O cloro ³⁷Cl tem Z=17. Quantos nêutrons possui?',opts:['17','18','20','37'],c:2,res:'<strong>20 nêutrons.</strong> 37−17=20.'}];}

function getLigacoesDid(){return`<div class="card"><div class="did-label">Por que os átomos se ligam?</div><div class="did-intro">Os átomos formam ligações para atingir maior estabilidade — geralmente completando 8 elétrons na camada de valência (Regra do Octeto). Existem 3 tipos principais de ligação química.</div><div class="did-step"><div class="step-n">1</div><div class="step-c"><h4>Ligação Iônica</h4><p>Ocorre entre <strong>metal + não-metal</strong>. Um átomo <strong>doa</strong> elétrons e o outro <strong>recebe</strong>, formando íons.<br>Ex: NaCl (sal de cozinha), MgO, CaCl₂</p></div></div><div class="did-step"><div class="step-n">2</div><div class="step-c"><h4>Ligação Covalente</h4><p>Ocorre entre <strong>não-metal + não-metal</strong>. Os átomos <strong>compartilham</strong> pares de elétrons.<br>Ex: H₂O, CO₂, CH₄, NH₃, H₂</p></div></div><div class="did-step"><div class="step-n">3</div><div class="step-c"><h4>Ligação Metálica</h4><p>Ocorre entre <strong>metais</strong>. Elétrons de valência ficam livres, formando um "mar de elétrons".</p></div></div></div>`;}

function getLigacoesQuest(){return[{q:'Qual tipo de ligação ocorre entre Na e Cl para formar o NaCl?',opts:['Covalente apolar','Covalente polar','Iônica','Metálica'],c:2,res:'<strong>Iônica.</strong> Metal + não-metal.'},{q:'Na molécula de H₂O, o tipo de ligação entre H e O é:',opts:['Iônica','Covalente polar','Covalente apolar','Metálica'],c:1,res:'<strong>Covalente polar.</strong> Diferença de eletronegatividade.'},{q:'O que caracteriza a ligação metálica?',opts:['Doação de elétrons','Compartilhamento','Mar de elétrons livres','Atração entre íons'],c:2,res:'<strong>Mar de elétrons livres.</strong>'},{q:'A ligação dupla (como em O=O) é composta por:',opts:['2 sigma','1 sigma e 1 pi','2 pi','1 sigma e 2 pi'],c:1,res:'<strong>1 sigma + 1 pi.</strong>'},{q:'O CO₂ tem ligações covalentes polares, mas a molécula é apolar. Por quê?',opts:['Mesma eletronegatividade','Geometria linear cancela dipolos','Não há pares livres','É um gás'],c:1,res:'<strong>Geometria linear cancela os dipolos.</strong>'}];}

function getTabelaDid(){return`<div class="card"><div class="did-label">O que é a Tabela Periódica?</div><div class="did-intro">A Tabela Periódica organiza os 118 elementos conhecidos por ordem crescente de número atômico (Z). Criada por Mendeleev em 1869, ela revela padrões e propriedades dos elementos.</div><div id="mod-periodic-wrap" style="overflow-x:auto;padding:12px;background:#fff;border-radius:16px;box-shadow:0 0 0 2px #2563eb,0 0 0 4px #bfdbfe,0 8px 32px rgba(37,99,235,.15);margin:12px 0"><div id="mod-periodic-grid" style="display:grid;grid-template-columns:repeat(18,minmax(24px,1fr));gap:2px;min-width:480px"></div></div><div id="mod-el-detail" style="display:none;background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:16px;margin-bottom:14px"></div><div class="did-step"><div class="step-n">1</div><div class="step-c"><h4>Períodos (linhas horizontais)</h4><p>Existem <strong>7 períodos</strong>. O número do período indica a quantidade de <strong>camadas eletrônicas</strong> do elemento.</p></div></div><div class="did-step"><div class="step-n">2</div><div class="step-c"><h4>Grupos/Famílias (colunas verticais)</h4><p>Existem <strong>18 grupos</strong>. Elementos do mesmo grupo têm o mesmo número de <strong>elétrons de valência</strong> e propriedades químicas parecidas.</p></div></div><div class="formula">Período = nº de camadas | Grupo = elétrons de valência</div></div><div class="card"><div class="did-label">Famílias importantes</div><div class="did-step"><div class="step-n">3</div><div class="step-c"><h4>Metais Alcalinos — Grupo 1 (IA)</h4><p>Li, Na, K, Rb, Cs, Fr<br><strong>1 elétron de valência</strong> → muito reativos.</p></div></div><div class="did-step"><div class="step-n">4</div><div class="step-c"><h4>Halogênios — Grupo 17 (VIIA)</h4><p>F, Cl, Br, I, At<br><strong>7 elétrons de valência</strong> → precisam de 1 e⁻ para completar o octeto.</p></div></div><div class="did-step"><div class="step-n">5</div><div class="step-c"><h4>Gases Nobres — Grupo 18 (VIIIA)</h4><p>He, Ne, Ar, Kr, Xe, Rn<br><strong>8 elétrons de valência</strong> (He tem 2) → inertes.</p></div></div></div>`;}

function getTabelaQuest(){return[{q:'O sódio (Na) está no Período 3 da tabela periódica. O que isso indica?',opts:['Tem 3 prótons','Tem 3 elétrons de valência','Tem 3 camadas eletrônicas','Pertence ao grupo 3'],c:2,res:'<strong>3 camadas eletrônicas.</strong> O período indica o número de camadas.'},{q:'Elementos do mesmo grupo (família) têm em comum:',opts:['Mesmo número de prótons','Mesmo número de nêutrons','Mesma quantidade de elétrons de valência','Mesma massa atômica'],c:2,res:'<strong>Mesma quantidade de elétrons de valência.</strong>'},{q:'Qual família é conhecida por ser praticamente inerte (não reage)?',opts:['Metais alcalinos','Halogênios','Calcogênios','Gases nobres'],c:3,res:'<strong>Gases nobres.</strong> Camada de valência completa.'},{q:'A eletronegatividade de um elemento indica:',opts:['Sua massa atômica','Capacidade de atrair elétrons','Número de prótons','Tamanho do raio atômico'],c:1,res:'<strong>Capacidade de atrair elétrons.</strong>'},{q:'O cloro (Cl, Z=17) precisa de quantos elétrons para completar o octeto?',opts:['1 elétron','2 elétrons','7 elétrons','8 elétrons'],c:0,res:'<strong>1 elétron.</strong> Grupo 17 → 7 e⁻ de valência, precisa de 1.'}];}

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
// 4. DEFINIÇÃO DOS MÓDULOS
// ════════════════════════════════════════════════════════════════
const AREAS = [
  {el:'tg', tiles:[{id:'atom', emoji:'⚛️', label:'Átomo', sub:'prótons, nêutrons, elétrons', xp:10, did:getDid(), quest:getQuest()}]},
  {el:'to', tiles:[{id:'ligacoes', emoji:'🔗', label:'Ligações Químicas', sub:'iônica, covalente, metálica', xp:10, did:getLigacoesDid(), quest:getLigacoesQuest()}]},
  {el:'tf', tiles:[{id:'tabela', emoji:'📊', label:'Tabela Periódica', sub:'períodos, grupos, propriedades', xp:10, did:getTabelaDid(), quest:getTabelaQuest()}]}
];
const ALL = AREAS.flatMap(a => a.tiles);

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

function findEl(s) {
  const q = s.trim().toLowerCase();
  return ELS.find(e => e.sym.toLowerCase() === q || e.name.toLowerCase() === q);
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
