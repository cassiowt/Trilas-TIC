// Declaração de um vetor vazio
var vetor = [];

// Adiciona elementos ao final do vetor
vetor.push("Maçã");  // vetor agora é ["Maçã"]
vetor.push("Banana");  // vetor agora é ["Maçã", "Banana"]

console.log(vetor);  // Imprime ["Maçã", "Banana"]

// Adiciona um elemento no início do vetor
vetor.unshift("Morango");  // vetor agora é ["Morango", "Maçã", "Banana"]

console.log(vetor);  // Imprime ["Morango", "Maçã", "Banana"]

// Remove um elemento do final do vetor
var ultimoElemento = vetor.pop();  // remove e retorna "Banana", vetor agora é ["Morango", "Maçã"]

console.log(ultimoElemento);  // Imprime "Banana"
console.log(vetor);  // Imprime ["Morango", "Maçã"]

// Remove um elemento do início do vetor
var primeiroElemento = vetor.shift();  // remove e retorna "Morango", vetor agora é ["Maçã"]

console.log(primeiroElemento);  // Imprime "Morango"
console.log(vetor);  // Imprime ["Maçã"]

// Acessa um elemento do vetor pelo índice
console.log(vetor[0]);  // Imprime "Maçã"

// Modifica um elemento do vetor pelo índice
vetor[0] = "Pêssego";  // vetor agora é ["Pêssego"]

console.log(vetor);  // Imprime ["Pêssego"]
