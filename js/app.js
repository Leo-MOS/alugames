/* **Alugames - A plataforma de aluguel de jogos da Alura!**

Olá, seja bem-vindo a mais um projeto desenvolvido por mim, Leandro, durante a minha jornada de aprendizado em Programação.

Este projeto foi desenvolvido como parte do curso de Lógica de Programação da Alura.

O projeto apresentou um site de aluguem de jogo (index.html) e o objetivo era manipular as classes dos objetos em tela para indicar aqueles que estavam alugados ou disponíveis. 

Durante o projeto não lidamos com questões de estoque ou disponibilidade dos jogos, apenas a mudança de status de alugado para disponíveis e vice-versa.

Foi um projeto simples, mas que acabou dando diversos insights sobre a manipulação dos elementos HTML, aprofundou a manipulação de classes e lapidou a forma de interagir com o usuário.

Sugestões e desafios que complementem este projeto podem ser enviados para souza.leandro78@gmail.com

Obrigado!
*/

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`); //recupera todo o elemento clicado, esse elemento contém tanto o botão como a imagem
    let imgClicada = gameClicado.querySelector('div');
    let btnClicado = gameClicado.querySelector('a');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    //Analisar se o jogo está alugado ou não

    if (imgClicada.classList.contains('dashboard__item__img--rented')) { //o jogo está alugado
        
        if (confirm(`Tem certeza que deseja devolver o jogo ${nomeJogo}?`)) {
            imgClicada.classList.remove('dashboard__item__img--rented'); //remove efeito de opacidade
            btnClicado.classList.remove('dashboard__item__button--return'); //altera o botão para permitir aluguel
            btnClicado.innerHTML = 'Alugar';
            console.log(`${nomeJogo} devolvido.`);
        }

    } else { //não está alugado
        
        if (confirm(`Tem certeza que deseja alugar o jogo ${nomeJogo}?`)) {
            imgClicada.classList.add('dashboard__item__img--rented');
            btnClicado.classList.add('dashboard__item__button--return');
            btnClicado.innerHTML = 'Devolver';
            console.log(`${nomeJogo} alugado.`);
        }
    }
}

function alugados() {
    //Esta função foi desenvolvida depois de um desafio proposto pelo curso. A proposta era desenvolver uma função que exibisse quantos jogos estavam alugados. Na ocasião, desenvolvi uma função que fosse chamada no console, visto que o foco era desenvolver a lógica.

    let contador = 0;
    for (i = 1; i <= 3 ;i++) {
        jogo = document.getElementById(`game-${i}`);
        jogo.querySelector('a').textContent == 'Devolver' ? contador++ : '';
    }

    let fraseJogo;
    contador > 1 ? fraseJogo = 'jogos estão alugados' : fraseJogo = 'jogo está alugado';
    contador == 0 ? console.log('Nenhum jogo alugado.') : console.log(`${contador} ${fraseJogo}.`);
}