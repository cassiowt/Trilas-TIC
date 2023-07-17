// Criando uma matriz 3x3
var matriz = [
    [1, 2, 3], // primeira linha
    [4, 5, 6], // segunda linha
    [7, 8, 9]  // terceira linha
];
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

