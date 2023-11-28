function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemplo de uso
const termos = 10;
for (let i = 0; i < termos; i++) {   
    console.log(fibonacci(i));
}
