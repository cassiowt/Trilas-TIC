

// ** 3
// Escrever uma função que receba dois números como argumentos e retorne o maior deles.
function encontrarMaiorNumero(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

var numeroA = 10;
var numeroB = 20;
var maiorNumero = encontrarMaiorNumero(numeroA, numeroB);
console.log("O maior número é: " + maiorNumero);

// ** 4
// Escreva um programa que calcule o fatorial de um número inteirofunction calcularFatorial(numero) {
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

// Exemplo de uso do programa
let numero = 6
let fatorial = calcularFatorial(numero);
console.log("O fatorial de " + numero + " é: " + fatorial);


// ** 5
//Escreva uma função que receba uma lista de números e retorne a média aritmética.
const calcularMediaAritmetica = numeros => {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    const media = soma / numeros.length;
    return media;
}

function calcularMediaAritmetica1(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    let media = soma / numeros.length;
    return media;
}

function calcularMediaAritmetica2(numeros) {
    let soma = 0;
    numeros.forEach(numero => {
        soma += numero;
    });
    let media = soma / numeros.length;
    return media;
}

// Exemplo de uso da função
const listaNumeros = [2, 4, 6, 8, 10];
const media = calcularMediaAritmetica(listaNumeros);
const media1 = calcularMediaAritmetica1(listaNumeros);
const media2 = calcularMediaAritmetica2(listaNumeros);
console.log("A média aritmética é: ", media1, media2, media);