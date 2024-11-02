let botoes = document.querySelectorAll('.botao');
let tela = document.querySelector('#tela');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let n = botao.value;
        tela.innerHTML = n;
        console.log('Cliquei no botão ' + n);
    })
})