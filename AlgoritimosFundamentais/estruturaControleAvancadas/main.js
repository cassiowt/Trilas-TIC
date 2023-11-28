function dividir(a, b) {
    if(b === 0) {
        throw new Error("Divisão por zero não é permitida!");
    }
    return a / b;
}

try {
    const resultado = dividir(10, 2);
    console.log(resultado);
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
} finally {
    console.log("Operação de divisão finalizada.");
}