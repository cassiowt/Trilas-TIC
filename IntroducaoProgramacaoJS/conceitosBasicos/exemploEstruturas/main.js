function insertValueIntoDiv(value) {
  const divElement = document.getElementById('myDiv');

  if (divElement) {
    divElement.innerText += value + "\n";
  } else {
    console.log('Div não encontrada no HTML.');
  }
}

function exemplo() {
  insertValueIntoDiv("----- Exemplo IF/ELSE ----")
  let idade = 16;

  if (idade >= 18) {
    insertValueIntoDiv("Você é maior de idade.");
  } else {
    insertValueIntoDiv("Você é menor de idade.");
  }

  insertValueIntoDiv("----- Exemplo Operador TERNARIO ----")
  let mensagem = idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE.";
  insertValueIntoDiv(mensagem);

  insertValueIntoDiv("----- Exemplo Operador IF ENCADEADO ----")
  idade = 21
  let possuiCarteira = true;
  if (idade >= 18) {
    insertValueIntoDiv("Você é maior de idade.");

    if (possuiCarteira) {
      insertValueIntoDiv("Você pode dirigir.");
    } else {
      insertValueIntoDiv("Você não pode dirigir.");
    }
  } else {
    insertValueIntoDiv("Você é menor de idade.");
  }
}

function exemploLoops() {
insertValueIntoDiv("----- Exemplo FOR ----")
for (let i = 0; i < 5; i++) {
  insertValueIntoDiv(i)
  console.log(i);
}

let i = 0;
insertValueIntoDiv("----- Exemplo WHILE ----")
while (i < 5) {
 insertValueIntoDiv(i);
  i++;
}

i = 0;
insertValueIntoDiv("----- Exemplo DO WHILE ----")
do {
  insertValueIntoDiv(i);
  i++;
} while (i < 5);
}

exemplo();
exemploLoops()
