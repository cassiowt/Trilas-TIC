function fatorialComContadorEncapsulado(n) {
    let chamadas = 0;

    function fatorial(n) {
        chamadas++;
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * fatorial(n - 1);
        }
    }

    const resultado = fatorial(n);

    return {
        resultado: resultado,
        chamadas: chamadas
    };
}

// Exemplo de uso
const numero2 = 50;
const { resultado: resultadoFatorial2, chamadas: chamadasFatorial2 } = fatorialComContadorEncapsulado(numero2);

console.log(`O fatorial de ${numero2} é ${resultadoFatorial2}.`);
console.log(`A função foi chamada ${chamadasFatorial2} vezes.`);
