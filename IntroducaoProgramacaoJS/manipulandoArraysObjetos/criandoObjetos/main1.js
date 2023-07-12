
//função para inserir no HTML
function insertValueIntoDiv(value) {
    const divElement = document.getElementById('myDiv');

    if (divElement) {
        divElement.innerText += value + "\n";
    } else {
        console.log('Div não encontrada no HTML.');
    }
}

// Função para gerar um número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array para armazenar as pessoas
let pessoas = [];

// Gerar 10 objetos pessoa
for (let i = 0; i < 10; i++) {
    let pessoa = {
        nome: "Pessoa " + (i + 1),
        idade: getRandomNumber(20, 60),
        peso: getRandomNumber(50, 100)
    };
    pessoas.push(pessoa);
}

// Imprimir os objetos pessoa
for (let i = 0; i < pessoas.length; i++)  {
   console.log(pessoas[i]);
   console.log("--------------------");
}

console.log(pessoas[2]);
console.log(pessoas[9].peso);
console.log(pessoas[0].idade);

for (let i = 0; i < pessoas.length; i++) {
    insertValueIntoDiv("Pessoa " + (i + 1) + ":");
    insertValueIntoDiv("Nome: " + pessoas[i].nome);
    insertValueIntoDiv("Idade: " + pessoas[i].idade);
    insertValueIntoDiv("Peso: " + pessoas[i].peso);
    insertValueIntoDiv("--------------------");
}