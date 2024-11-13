let botoes = document.querySelectorAll('.botao');
let divCalculo = document.querySelector('#calculo');
let divResultado = document.querySelector('#resultado');
let n1 = 0;
let n1a = 0;
let n2 = 0;
let n2a = 0;
let op = '';
let res = null;
let operadores = ['+', '-', '*', '/'];

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        switch(botao.value) {
            case "C":
                divCalculo.innerHTML = '0';
                divCalculo.value = "";

                divResultado.innerHTML = '0';
                divResultado.value = "";

                n1 = 0;
                n2 = 0;
                x = null;

                break;

            case "=":
                if (n1 !== '' && op !== '' && n2 !== '') {
                    res = operacao(n1, n2, op);
                    divResultado.innerHTML = res;
                    divResultado.classList.remove('vazio');
                    a = '';
                    b = '';
                }
                break;

            default:
                addChar(botao.value);
        }
    })
})

function operacao(x, y, op) {
    switch (op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
    }
}

function addChar(n) {
  if (operadores.includes(n)) {

  } else {
    if (!divCalculo.value) {
      divCalculo.innerHTML = n;
      a = n;
      divCalculo.value = true;
    } else {
      a = parseInt(a + n.toString());
      divCalculo.innerHTML += n;
    }
    
  }
  
}