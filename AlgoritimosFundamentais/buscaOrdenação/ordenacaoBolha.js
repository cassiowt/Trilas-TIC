function bubbleSort(arr) {
    const n = arr.length;
    let trocou;

    do {
        trocou = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca os elementos se estiverem fora de ordem
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                trocou = true;
            }
        }
    } while (trocou);

    return arr;
}

const listaDesordenada = [64, 34, 25, 12, 22, 11, 90];
const listaOrdenada = bubbleSort(listaDesordenada);

console.log("Lista ordenada: ", listaOrdenada);