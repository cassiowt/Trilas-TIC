const numbers = [1, 2, 3, 4, 5, 6, -1, 7, 8, 9, 10, 0, 11];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue; // Ignora números negativos
}

    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < 0) {
            continue; // Ignora números negativos
        }

        if (numbers[i] + numbers[j] === 10) {
            console.log(`Pares que somam 10: ${numbers[i]}, ${numbers[j]}`);
            break; // Sai do loop interno assim que encontrar um par
        }
    }
}
