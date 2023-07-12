function exemplo() {
    let respostas = '';

    respostas += "Exemplo de operadores aritméticos<br>";
    let a = 5;
    let b = 2;

    let soma = a + b; // Soma: 5 + 2 = 7
    respostas += soma + "<br>";

    let subtracao = a - b; // Subtração: 5 - 2 = 3
    respostas += subtracao + "<br>";

    let multiplicacao = a * b; // Multiplicação: 5 * 2 = 10
    respostas += multiplicacao + "<br>";

    let divisao = a / b; // Divisão: 5 / 2 = 2.5
    respostas += divisao + "<br>";

    let modulo = a % b; // Módulo: 5 % 2 = 1
    respostas += modulo + "<br>";

    let incremento = 3;
    incremento++; // Incremento: 3 + 1 = 4
    respostas += incremento + "<br>";

    let decremento = 7;
    decremento--; // Decremento: 7 - 1 = 6
    respostas += decremento + "<br>";

    respostas += "Exemplo de operadores de atribuição<br>";
    let x = 10;
    x += 5; // Atribuição com soma: x = x + 5 => x = 10 + 5 => x = 15
    respostas += x + "<br>";

    x -= 3; // Atribuição com subtração: x = x - 3 => x = 15 - 3 => x = 12
    respostas += x + "<br>";

    x *= 2; // Atribuição com multiplicação: x = x * 2 => x = 12 * 2 => x = 24
    respostas += x + "<br>";

    x /= 4; // Atribuição com divisão: x = x / 4 => x = 24 / 4 => x = 6
    respostas += x + "<br>";

    return respostas;
}

function msg(texto) {
    let divMsg = document.getElementById('msg');
    divMsg.innerHTML = texto;
}

// Chamando a função exemplo e passando as respostas para a função msg
let respostas = exemplo();
msg(respostas);
