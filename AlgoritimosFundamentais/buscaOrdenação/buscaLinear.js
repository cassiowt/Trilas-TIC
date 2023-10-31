function buscaLinear(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return true; // Elemento encontrado
        }
    }
    return false; // Elemento não encontrado
}

const listaNumeros = [1, 3, 5, 7, 9, 11, 13];
const numeroProcurado = 7;

if (buscaLinear(listaNumeros, numeroProcurado)) {
    console.log(`O número ${numeroProcurado} foi encontrado na lista.`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado na lista.`);
}
