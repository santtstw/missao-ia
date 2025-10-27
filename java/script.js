const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultados = document.querySelector(".caixa-resultado");
const caixaResultados = document.querySelector(".texto-resultado");
const cbotaoJogarNovamente = document.querySelector(".novamente-botao");
const telaInicial = document.querySelector(".tela-inicial");
const botaoInicial = document.querySelector(".iniciar-botao");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListtener('click,iniciaJogo');
function inciaJogo (){
atual = 0;
historiaFinal = "";
telaInicial.computedStyleMap.display = "none";
caixaPerguntas.classList.remove("mostrar");
caixaAlternativas.classList.remove("mostrar");
caixaResultados.classList.remove("mostrar");
mostraPergunta();
}
function mostraPergunta (){
    if (atual >=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alalternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);

 }
function mostraAfirmacoes(){
    for(const Afirmacoes of perguntaAtual.afirmacoes){

    }
}
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes =aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + "";
    if (opcaoSelecionada.proxima !== undefined){
        atual = opcaoSelecionada.proxima;
    }else{
        mosstraResultado();
        return;
}
mostraPergunta();
}
function mosstraResultado(){
    caixaPerguntas.textContent = 'Em 2050,${nome}';
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultados.classList.add("mostra");
    botaoJogarNovamente.addEventListener("click", jogaNovamente)
}
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}
function substituiNome(){
    for (const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();    