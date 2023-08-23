

// Função para imprimir uma matriz no formato HTML
function imprimeMatrizHTML(matriz) {
    var saida = "";
    
    // Adiciona o topo da tabela
    saida += "-".repeat(matriz[0].length * 4 + 1) + "<br>";
    
    for (var i = 0; i < matriz.length; i++) {
        saida += "| ";
        for (var j = 0; j < matriz[i].length; j++) {
            saida += matriz[i][j] + " | ";
        }
        saida = saida.trim(); // Remove o espaço extra no final da linha
        saida += "<br>"; // Adiciona a quebra de linha
    }
    
    // Adiciona o final da tabela
    saida += "-".repeat(matriz[0].length * 4 + 1) + "<br>";
    
    // Encontra o elemento no HTML para onde a saída será enviada
    var elementoSaida = document.getElementById("myDiv");

    // Configura o HTML do elemento de saída para a string de saída que criamos
    elementoSaida.innerHTML = saida;
}

function multiplicarMatrizes(a, b) {
    let numLinhasA = a.length, numColunasA = a[0].length;
    let numLinhasB = b.length, numColunasB = b[0].length;

    if (numColunasA !== numLinhasB) {
        throw new Error('Número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz para a multiplicação.');
    }

    let produto = new Array(numLinhasA);
    for (let i = 0; i < numLinhasA; i++) {
        produto[i] = new Array(numColunasB);
        for (let j = 0; j < numColunasB; j++) {
            produto[i][j] = 0;
            for (let k = 0; k < numColunasA; k++) {
                produto[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return produto;
}

function exemplo() {
    let matrizA = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    let matrizB = [
        [7, 10],
        [9, 10],
        [11, 12]
    ];

    let produto = multiplicarMatrizes(matrizA, matrizB);
    imprimeMatrizHTML(produto);
}

exemplo();