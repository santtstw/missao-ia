const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternatica = document.querySelector(".caixa-alternativa");
const caixaResultados = document.querySelector(".caixa-resultado");
const caixaResultados = document.querySelector(".texto-resultado");
const cbotaoJogarNovamente = document.querySelector(".novamente-botao");
const telaInicial = document.querySelector(".tela-inicial");
const botaoInicial = document.querySelector(".iniciar-botao");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListtener('click,iniciaJogo')