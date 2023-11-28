let chamadasFibonacci = 0;

function fibonacciComContador(n) {
    chamadasFibonacci++;
    if (n <= 1) {
        return n;
    } else {
        return fibonacciComContador(n - 1) + fibonacciComContador(n - 2);
    }
}

// Exemplo de uso
const termo = 5;
const resultado = fibonacciComContador(termo);

console.log(`O ${termo}º termo da sequência de Fibonacci é ${resultado}.`);
console.log(`A função foi chamada ${chamadasFibonacci} vezes.`);
