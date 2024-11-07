let botoes = document.querySelectorAll('.botao');
let divCalculo = document.querySelector('#calculo');
let divResultado = document.querySelector('#resultado');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let n = botao.value;
        divCalculo.innerHTML = n;
        console.log('Cliquei no botão ' + n);
    })
})