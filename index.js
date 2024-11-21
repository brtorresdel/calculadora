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
        exibirResultado('');
        
        n1 = null;
        n2 = null;
        res = null;
        operadorSelecionado = null;
        return;
    }

    if (n === '=') {
        if (n1 !== null & operadorSelecionado !== null & n2 !== null) {
            res = calcular(parseFloat(n1), parseFloat(n2), operadorSelecionado);
            exibirResultado(res);
            n1 = null;
            n2 = null;
            operadorSelecionado = null;
            return;
        }
        return;
    }

    if (n == '.') {
        if (!operadorSelecionado) {
            if (!n1.includes('.')) {
                if (n1 === null) {
                    n1 = n1 + '0.';
                    divCalculo.innerHTML = '0.';
                } else {
                    n1 = n1 + '.';
                    divCalculo.innerHTML += '.';
                }
                return;
            }
        } else {
            if (!n2.includes('.')) {
                if (n2 === null) {
                    n2 = '0.';
                    divCalculo.innerHTML += '0.';
                } else {
                    n2 = n2 + '.';
                    divCalculo.innerHTML += '.';
                }
                return;
            }
        }
        return;
    }

    if (operadores.includes(n)) {
        if (res !== null) {
            n1 = res;
            operadorSelecionado = n;
            res = null;
            exibirResultado('');
            divCalculo.innerHTML = n1.toString() + operadorSelecionado;
            return;
        }

        if (!operadorSelecionado) {
            operadorSelecionado = n;
            divCalculo.innerHTML += n; 
            return;
        }
        return;
    }

    if (!operadorSelecionado) {
        if (!n1) {
            n1 = n.toString();
            divCalculo.innerHTML = n;
            return;
        } else {
            n1 = n1 + n.toString();
        }
        
    } else {
        if (!n2) {
            n2 = n.toString();
        } else {
            n2 = n2 + n.toString();
        }
    }

    divCalculo.innerHTML += n;
}

function calcular(a,b,op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case 'x': return a * b;
        case '/': return a / b;
    }
}

function exibirResultado(x) {
    x = x.toString();
    if (x.length > 8) {
        divResultado.innerHTML = 'Err';
        divResultado.classList.remove('vazio');
        return false;
    }

    if (x !== '') {
        divResultado.innerHTML = x;
        divResultado.classList.remove('vazio');
        divCalculo.innerHTML = '0';
        return true;
    }

    divResultado.innerHTML = '0';
    divResultado.classList.add('vazio');
    return false; 
}