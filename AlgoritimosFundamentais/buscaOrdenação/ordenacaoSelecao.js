function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let menorIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[menorIndex]) {
                menorIndex = j;
            }
        }

        if (menorIndex !== i) {
            // Troca os elementos se o menor elemento não estiver na posição atual
            const temp = arr[i];
            arr[i] = arr[menorIndex];
            arr[menorIndex] = temp;
        }
    }

    return arr;
}

const listaDesordenada = [64, 34, 25, 12, 22, 11, 90];
const listaOrdenada = selectionSort(listaDesordenada);

console.log("Lista ordenada: ", listaOrdenada);
