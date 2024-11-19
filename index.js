let divCalculo = document.querySelector('#calculo');
let divResultado = document.querySelector('#resultado');
let botoes = document.querySelectorAll('#botao');

botoes.forEach(btn => {
    btn.addEventListener('click', () => console.log('Click!'))
})