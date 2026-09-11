// ════════════════════════════════════════════════════════════════
// MONTAGEM DA ESTRUTURA (níveis → subáreas → módulos)
// Este arquivo é só "montagem" — não tem conteúdo de módulo aqui.
// O conteúdo de verdade está em modulos-medio.js, modulos-faculdade.js
// e modulos-avancado.js (carregados ANTES deste arquivo).
//
// Pra adicionar um módulo: vá no arquivo do nível certo, escreva
// getXxxDid()/getXxxQuest() e adicione o tile no array TILES_XXX de lá.
// Só crie uma SUBÁREA nova aqui (isso é raro).
// ════════════════════════════════════════════════════════════════
const NIVEIS = [
  { id: 'medio', label: 'Ensino Médio', subareas: [
    { id: 'ano1', label: '1º Ano', tiles: TILES_ANO1 },
    { id: 'ano2', label: '2º Ano', tiles: TILES_ANO2 },
    { id: 'ano3', label: '3º Ano', tiles: TILES_ANO3 }
  ]},
  { id: 'faculdade', label: 'Faculdade', subareas: [
    { id: 'analitica', label: 'Química Analítica', tiles: TILES_ANALITICA },
    { id: 'organicaAv', label: 'Orgânica Avançada', tiles: TILES_ORGANICA_AV },
    { id: 'inorganica', label: 'Inorgânica', tiles: TILES_INORGANICA },
    { id: 'fqAv', label: 'Físico-Química Avançada', tiles: TILES_FQ_AV },
    { id: 'bioquimica', label: 'Bioquímica', tiles: TILES_BIOQUIMICA },
    { id: 'quantica', label: 'Quântica / Espectroscopia', tiles: TILES_QUANTICA }
  ]},
  { id: 'avancado', label: 'Avançado', subareas: [
    { id: 'professor', label: 'Professor de Química', tiles: TILES_PROFESSOR },
    { id: 'tecnico', label: 'Técnico Químico', tiles: TILES_TECNICO },
    { id: 'vigilancia', label: 'Vigilância Sanitária', tiles: TILES_VIGILANCIA },
    { id: 'engenharia', label: 'Engenharia Ambiental', tiles: TILES_ENGENHARIA }
  ]}
];

const ALL = NIVEIS.flatMap(n => n.subareas.flatMap(s => s.tiles));
