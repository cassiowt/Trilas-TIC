function nomeDaFuncao(parametro1, parametro2, parametroN) {
    // Corpo da função (bloco de código)
    // Instruções a serem executadas
    // Pode incluir declaração de variáveis, loops, condicionais, etc.
    return resultado
}

function velocidadeMedia(distancia, tempo) {
    let velocidadeMedia = distancia / tempo;
    console.log("A Velocidade Média foi de", velocidadeMedia, "de metros por minuto");
}

// Arrow Function
const _velocidadeMedia = (distancia, tempo) => {
    let velocidadeMedia = distancia / tempo;
    console.log('Arrow Function ---->')
    console.log("A Velocidade Média foi de", velocidadeMedia, "metros por minuto");
  };

let numero1 = parseFloat(prompt("Digite a distancia (metros)"));
let numero2 = parseFloat(prompt("Digite o tempo (minutos)"));

_velocidadeMedia(numero1, numero2);
velocidadeMedia(numero1, numero2); 