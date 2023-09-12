// Exemplo usando const
const PI = 3.14159;
 PI = 90;
console.log(PI); // Saída: 3.14159
// Erro: Tentando atribuir 
// um novo valor a uma constante

// Exemplo usando let
let idade = 25;
console.log(idade); // Saída: 25
idade = 30;
console.log(idade); // Saída: 30

// Exemplo usando var
var nome = 'João';
console.log(nome); // Saída: João
nome = 'Maria';
console.log(nome); // Saída: Maria

function exemplo() {
  var x = 10;
  let y = 20;
  const z = 30;

  console.log(x, y, z); // Saída: 10 20 30

  if (true) {
    // Mesma variável x do escopo externo
    var x = 50; 
    // Nova variável y dentro do escopo interno
    let y = 60; 

    console.log(x, y, z); // Saída: 50 60 30
  }

  console.log(x, y, z); // Saída: 50 20 30
}

exemplo();
