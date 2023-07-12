
function exemplo() {
    let respostas = '';

    let a = 5;
    let b = 3;

    // Operador de igualdade (==)
    respostas += "Operador de igualdade (==): " + a + " == " + b + " = " + (a == b) + "<br>";

    // Operador de desigualdade (!=)
    respostas += "Operador de desigualdade (!=): " + a + " != " + b + " = " + (a != b) + "<br>";

    // Operador de estritamente igual (===)
    respostas += "Operador de estritamente igual (===): " + a + " === " + b + " = " + (a === b) + "<br>";

    // Operador de estritamente diferente (!==)
    respostas += "Operador de estritamente diferente (!==): " + a + " !== " + b + " = " + (a !== b) + "<br>";

    // Operador maior que (>)
    respostas += "Operador maior que (>): " + a + " > " + b + " = " + (a > b) + "<br>";

    // Operador menor que (<)
    respostas += "Operador menor que (<): " + a + " < " + b + " = " + (a < b) + "<br>";

    // Operador maior ou igual que (>=)
    respostas += "Operador maior ou igual que (>=): " + a + " >= " + b + " = " + (a >= b) + "<br>";

    // Operador menor ou igual que (<=)
    respostas += "Operador menor ou igual que (<=): " + a + " <= " + b + " = " + (a <= b) + "<br>";

    return respostas;
}

function exibirRespostas() {
    let respostas = exemplo();
    let divMsg = document.getElementById('msg');
    divMsg.innerHTML = respostas;
}

// Chama a função exibirRespostas para exibir as respostas na <div>
exibirRespostas();
