let divCalculo = document.querySelector('#calculo');
let divResultado = document.querySelector('#resultado');
let botoes = document.querySelectorAll('#botao');
let n1 = null;
let n2 = null;
let res = null;
let operadorSelecionado = null;
let operadores = ['+', '-', 'x', '/'];

botoes.forEach(btn => {
    btn.addEventListener('click', () => {btnClick(btn.innerHTML)})
})

function btnClick(n) {
    if (n === 'C') {
        divCalculo.innerHTML = '0';
        
        n1 = null;
        n2 = null;
        res = null;
        operadorSelecionado = null;
        return;
    }

    if (operadores.includes(n)) {
        if (!operadorSelecionado) {
            operadorSelecionado = n;
            divCalculo.innerHTML += n; 
            return;
        }
        return;
    }

    if (n === '=') {
        if (n1 & operadorSelecionado & n2) {
            res = calcular(parseFloat(n1), parseFloat(n2), operadorSelecionado)
            exibirResultado(res);
            n1 = null;
            n2 = null;
            res = null;
            operadorSelecionado = null;
        }
    }

    if (divCalculo.innerHTML === '0') {
        n1 = n.toString();
        divCalculo.innerHTML = n; 
        return
    }

    if (!operadorSelecionado) {
        n1 = n1 + n.toString();
    } else {
        n2 = n2 + n.toString();
    }

    divCalculo.innerHTML += n;
}

function calcular(a,b,op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

function exibirResultado(x) {
    if (x !== '') {
        divResultado.innerHTML = x;
        divResultado.classList.remove('vazio');
        return;
    }

    divResultado.innerHTML = '0';
    divResultado.classList.add('vazio');
}