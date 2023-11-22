
// Deckarando as variaveis 
 
const botaoCardapio = document.querySelectorAll('.botaoMenu');
const conteudo = document.querySelectorAll('.menu');



// estrutura para executar as funções e adicionar um numero no index pra ir passando proximo a proximo( foreach )
botaoCardapio.forEach((botaoMenu, indice) => {
    botaoMenu.addEventListener('click' , () => {
        desativarBotaoSelecionado();

        selecionarBotaoCardapio(botaoMenu);

        esconderConteudo();
         
        mostrarConteudo(indice);

    })
})


// Criando as funções para ser chamadas na estrutura

function mostrarConteudo(indice) {
    conteudo[indice].classList.add('ativa');

}

function selecionarBotaoCardapio(botaoMenu) {
    botaoMenu.classList.add('selecionado');
}

function esconderConteudo() {
    const conteudoAtivo = document.querySelector('.ativa');
    conteudoAtivo.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado')
}

window.onload = function() {
    document.getElementById('btn_comidas').focus();
}