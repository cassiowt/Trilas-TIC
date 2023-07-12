let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);

/*
Neste programa, utilizamos a função prompt() 
para solicitar ao usuário que digite dois números. 
Em seguida, esses números são convertidos 
para o tipo float usando parseFloat() e armazenados 
nas variáveis numero1 e numero2.

Em seguida, realizamos as operações de 
soma, subtração, multiplicação e divisão 
dos números e armazenamos os resultados nas 
respectivas variáveis soma, subtracao, multiplicacao e divisao.

Por fim, utilizamos o console.log() para exibir 
os resultados no console do navegador ou 
do ambiente em que o código está sendo executado.
*/

let numero = parseInt(prompt("Digite um número:"));

if (numero % 2 === 0) {
  console.log("O Numero é Par");
} else {
  console.log("O Numero é Ímpar");
}

/*
Neste programa, utilizamos a função prompt() 
para solicitar ao usuário que digite um número. 
Em seguida, esse número é convertido para o 
tipo int usando parseInt() e armazenado na variável numero.

Em seguida, utilizamos uma estrutura condicional if 
para verificar se o número é par ou ímpar.
 A condição numero % 2 === 0 verifica se o número 
 é divisível por 2 (ou seja, se é par) utilizando o 
 operador % para obter o resto da divisão. 
 Se a condição for verdadeira, o programa 
 exibirá "Par" no console. Caso contrário, exibirá "Ímpar".
*/

console.log("Numeros de 1 a 10");
for (let i = 1; i < 11; i++) {
  console.log(i);
}
/*
A linha console.log("Numeros de 1 a 10"); 
exibe a mensagem "Numeros de 1 a 10" no console.

Em seguida, temos um loop for que inicializa 
a variável i com o valor 1, define a condição i < 11
 como critério de continuação do loop e incrementa 
 o valor de i em 1 a cada iteração (i++).

Dentro do bloco de código do for, 
temos a linha console.log(i);,
 que exibe o valor atual de i no console a 
 cada iteração do loop.
 */

let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area = Math.PI * raio ** 2;

console.log("A área do círculo é: " + area);
/*
Neste programa, solicitamos o valor do raio. 
Após utilizamos a fórmula matemática para calcular
a área de um círculo: π (pi) multiplicado pelo 
raio ao quadrado (raio ** 2). 

É  o console.log() para exibir a área do círculo no console.
*/