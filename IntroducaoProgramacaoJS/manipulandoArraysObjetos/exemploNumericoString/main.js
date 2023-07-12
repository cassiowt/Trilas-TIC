// Declaração de um array de números
let numeros = [1, 2, 3, 4, 5];
// Acessando elementos do array
console.log(numeros[0]); // Saída: 1
console.log(numeros[2]); // Saída: 3
// Modificando um elemento
numeros[1] = 10;
console.log(numeros); // Saída: [1, 10, 3, 4, 5]
// Adicionando elementos
numeros.push(6);
console.log(numeros); // Saída: [1, 10, 3, 4, 5, 6]
// Removendo elementos
numeros.pop();
console.log(numeros); // Saída: [1, 10, 3, 4, 5]
// Tamanho 
console.log(numeros.length);
// Limpando os elementos.
numeros = [];
console.log(numeros);



// Criando um array vazio para Strings
var frutas = [];
// Adicionando elementos ao array
frutas.push("maçã");
frutas.push("banana");
frutas.push("laranja");
// Acessando elementos do array
console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "laranja"
// Alterando um elemento do array
frutas[1] = "uva";
console.log(frutas); // ["maçã", "uva", "laranja"]
// Obtendo o tamanho do array
console.log(frutas.length); // 3
// Removendo elementos do array
frutas.pop(); // remove o último elemento
console.log(frutas); // ["maçã", "uva"]
// Verificando se um elemento existe no array
console.log(frutas.includes("maçã")); // true
console.log(frutas.includes("banana")); // false

