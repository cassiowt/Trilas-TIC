function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let chave = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = chave;
    }

    return arr;
}

const listaDesordenada = [42, 8, 16, 15, 48, 23];
const listaOrdenada = insertionSort(listaDesordenada);

console.log("Lista ordenada: ", listaOrdenada);
