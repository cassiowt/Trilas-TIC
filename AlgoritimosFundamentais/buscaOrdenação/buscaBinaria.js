function buscaBinaria(arr, elemento) {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (arr[meio] === elemento) {
            return true; // Elemento encontrado
        } else if (arr[meio] < elemento) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return false; // Elemento não encontrado
}

const listaOrdenada = [1, 3, 5, 7, 9, 11, 13];
const numeroProcurado = 19;

if (buscaBinaria(listaOrdenada, numeroProcurado)) {
    console.log(`O número ${numeroProcurado} foi encontrado na lista.`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado na lista.`);
}
/*
Neste exemplo, a função buscaLinear verifica 
cada elemento do array listaNumeros para ver 
se é igual ao numeroProcurado. Se  encontrar 
o número, retorna true; 
caso contrário, retorna false. 
Depois, na parte principal do código, 
verificamos se o número foi encontrado e 
exibimos uma mensagem apropriada.
*/