// ** 1
// Certamente! Aqui está um exemplo de programa simples em JavaScript que recebe duas notas de um aluno e calcula a média:
// Recebendo as notas do aluno
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

// Calculando a média
let media = (nota1 + nota2) / 2;

// Exibindo o resultado
console.log("A média do aluno é: " + media);

// **  2
// Escrever um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa. em js
// Recebendo o peso e a altura da pessoa
var peso = parseFloat(prompt("Digite o peso (em kg):"));
var altura = parseFloat(prompt("Digite a altura (em metros):"));

// Calculando o IMC
var imc = peso / (altura * altura);

// Exibindo o resultado
console.log("O IMC da pessoa é: " + imc.toFixed(2));


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
let numero = 4
let fatorial = calcularFatorial(numero);
console.log("O fatorial de " + numero + " é: " + fatorial);
