let botoes = document.querySelectorAll('.botao');
let divCalculo = document.querySelector('#calculo');
let divResultado = document.querySelector('#resultado');
let a = '';
let b = '';
let op = '';

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        switch(botao.value) {
            case "C":
                divCalculo.innerHTML = '0';
                divResultado.innerHTML = '0';
                divResultado.classList.add('vazio');
                a = '';
                b = '';
                break;

            case "=":
                if (op !== '') {
                    divResultado.innerHTML = operacao(a,b,op);
                    divResultado.classList.remove('vazio');
                    divCalculo.innerHTML = 0;
                }
                break;

            default:
                addChar(botao.value);
        }
    })
})

function operacao(n1, n2, op) {
    switch (op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
    }
}

function addChar(n) {
  if (divCalculo.innerHTML === '0') {
    divCalculo.innerHTML = n;
    return;
  } else {
    if (/[+\-*/]/.test(n)) {
      if (!/[+\-*/]/.test(divCalculo.innerHTML)) {
        divCalculo.innerHTML += n;
        op = n;
        return;
      }
    } else {
      divCalculo.innerHTML += n;
      if (!/[+\-*/]/.test(divCalculo.innerHTML)){a = a + n.toString()}
      else {b = b + n.toString()}
    }
  }
  console.log(a);
  console.log(b);
  console.log(op);
}