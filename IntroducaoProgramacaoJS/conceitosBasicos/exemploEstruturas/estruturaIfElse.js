let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Operador ternario
let mensagem = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem);



let possuiCarteira = false;

if (idade >= 18) {
  console.log("Você é maior de idade.");
  
  if (possuiCarteira) {
    console.log("Você pode dirigir.");
  } else {
    console.log("Você não pode dirigir.");
  }
} else {
  console.log("Você é menor de idade.");
}