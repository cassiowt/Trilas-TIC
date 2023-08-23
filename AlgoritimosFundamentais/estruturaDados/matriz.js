// Criando uma matriz 3x3
var matriz = [
    [1, 2, 3], // primeira linha
    [4, 5, 6], // segunda linha
    [7, 8, 9]  // terceira linha
];

var matriz1 = [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900]
];

// Função para imprimir uma matriz com identificadores de colunas e linhas
function imprimeMatriz(matriz) {
    var header = "   "; // Espaçamento inicial para o cabeçalho das colunas

    // Cria o cabeçalho das colunas
    for (var i = 0; i < matriz[0].length; i++) {
        header += "C" + (i + 1) + " ";
    }

    console.log(header); // Imprime o cabeçalho das colunas

    // Imprime as linhas com seus identificadores
    for (var i = 0; i < matriz.length; i++) {
        var linha = "L" + (i + 1) + ": " + matriz[i].join(" ");
        console.log(linha);
    }
}

// Testando a função com uma matriz 3x3
var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

imprimeMatriz(matriz);


// Testando a função com uma matriz 3x3
var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

imprimeMatriz(matriz);


// Imprimindo a matriz completa
console.log(matriz);
// Percorrendo todos os elementos da matriz
for(var i = 0; i < matriz.length; i++) {
    for(var j = 0; j < matriz[i].length; j++) {
        console.log('(' + (i+1) + ',' + (j+1) + ') = ' + matriz[i][j]);
    }
}

// Acessando elementos individuais da matriz
console.log(matriz[0][0]); // Imprime 1, que é o elemento na primeira linha, primeira coluna
console.log(matriz[1][1]); // Imprime 5, que é o elemento na segunda linha, segunda coluna
console.log(matriz[2][2]); // Imprime 9, que é o elemento na terceira linha, terceira coluna

// Modificando um elemento da matriz
matriz[1][1] = 10; // Modifica o elemento na segunda linha, segunda coluna para 10
console.log(matriz[1][1]); // Imprime 10

// Imprimindo a matriz depois da modificação
console.log(matriz);

function somaElementos(matriz) {
    var soma = 0; // Inicializa a soma

    // Percorre todas as linhas da matriz
    for (var i = 0; i < matriz.length; i++) {
        // Percorre todas as colunas da linha atual
        for (var j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; // Adiciona o valor atual da matriz à soma
        }
    }

    return soma; // Retorna a soma
}

console.log(somaElementos(matriz));

// Função para somar duas matrizes
function somaMatrizes(matriz1, matriz2) {
    // Verifica se as matrizes têm as mesmas dimensões
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
        return null; // Retorna null se as dimensões não forem as mesmas
    }

    var matrizSoma = []; // Inicializa a matriz de soma

    // Percorre todas as linhas
    for (var i = 0; i < matriz1.length; i++) {
        matrizSoma[i] = []; // Adiciona uma nova linha à matriz de soma
        // Percorre todas as colunas
        for (var j = 0; j < matriz1[i].length; j++) {
            matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j]; // Soma os elementos correspondentes das duas matrizes
        }
    }

    return matrizSoma; // Retorna a matriz de soma
}

imprimeMatriz(somaMatrizes(matriz, matriz1));