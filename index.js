let botoes = document.querySelectorAll('.botao');
let divCalculo = document.querySelector('#calculo');
let divResultado = document.querySelector('#resultado');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        switch(botao.value) {
            case "C":
                divCalculo.textContent = '';
                divResultado.textContent = '';
                break;

            default:
                divCalculo.textContent = botao.value;
                divResultado.textContent = botao.value;
                break;
        }
    })
})

function operacao(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}