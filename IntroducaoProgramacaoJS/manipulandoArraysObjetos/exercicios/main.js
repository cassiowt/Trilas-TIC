// Função para obter o maior número da lista
function obterMaiorNumero(lista) {
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return maior;
}

// Função para obter o menor número da lista
function obterMenorNumero(lista) {
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return menor;
}

const numeros = [11, 202, 32, 54, 509, 16, 347]

// Chamar as funções para obter o maior e o menor número da lista
let maiorNumero = obterMaiorNumero(numeros);
let menorNumero = obterMenorNumero(numeros);

// Exibir os resultados
console.log("Maior número:", maiorNumero);
console.log("Menor número:", menorNumero);

/*
Neste programa, utilizamos duas funções: 
obterMaiorNumero(lista) e obterMenorNumero(lista). 
Ambas as funções percorrem a lista de números iniciandio 
a comparação com o valor que esta na primeira posição até
encontrar o maior e o menor número, respectivamente.

Definimos a lista de numero = [11,202,32,54,509,16,347]

Na sequencia o programa chama as funções obterMaiorNumero() 
e obterMenorNumero() passando a lista de numeros.
Os resultados são armazenados nas variáveis maiorNumero 
e menorNumero, respectivamente. Por fim, os resultados
são exibidos no console usando console.log().
*/

// Função para contar a quantidade de letras com e sem espaço
function contarLetras(texto) {
    const letrasSemEspaco = texto.replace(/\s/g, '').length;
    const letrasComEspaco = texto.length;
  
    return {
      letrasSemEspaco,
      letrasComEspaco
    };
  }
  
  // Texto a ser contado
  const texto = 'Batatinha quando nasce esparrama pelo chão..';
  
  // Chamar a função para contar as letras
  const resultado = contarLetras(texto);
  
  // Exibir o resultado
  console.log('Quantidade de letras sem espaço:', resultado.letrasSemEspaco);
  console.log('Quantidade de letras com espaço:', resultado.letrasComEspaco);
  
/*
Neste programa a função contarLetras(texto) recebe 
um texto como entrada. Utilizamos a função replace() 
com a expressão regular /\s/g para substituir todos 
os espaços em branco pelo caractere vazio, 
removendo-os do texto. Em seguida, utilizamos 
a propriedade length para contar a quantidade de 
letras sem espaço e a quantidade total de letras.

O programa chama a função contarLetras() passando 
o texto desejado como argumento. O resultado 
é armazenado na variável resultado, que é um objeto
contendo as quantidades de letras com e sem espaço.

Por fim, os resultados são exibidos no console 
usando console.log(), mostrando a quantidade 
de letras sem espaço e a quantidade total de letras no texto
*/

// Função para realizar operações aritméticas entre arrays
const somas = [];
const subtracoes = [];
const multiplicacoes = [];
const divisoes = [];

function operacoesAritmeticas(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      console.log("Os arrays devem ter o mesmo tamanho.");
      return;
    }
     
    let resultado = [];
  
    for (let i = 0; i < arr1.length; i++) {
      let soma = arr1[i] + arr2[i];
      let subtracao = arr1[i] - arr2[i];
      let multiplicacao = arr1[i] * arr2[i];
      let divisao = arr1[i] / arr2[i];
      
      somas.push(soma);
      subtracoes.push(subtracao);
      multiplicacoes.push(multiplicacao);
      divisoes.push(divisao);

      resultado.push({
        soma,
        subtracao,
        multiplicacao,
        divisao
      });
    }
  
    return resultado;
  }
  
  // Criar os arrays numéricos
  let array1 = [5, 10, 15, 20];
  let array2 = [2, 4, 5, 10];
  
  // Realizar as operações aritméticas
  let resultadoOperacoes = operacoesAritmeticas(array1, array2);
   
  console.log(array1);
  console.log(array2);
  console.log("Array Somas ", somas);
  console.log("Array Subtração ", subtracoes);
  console.log("Array Mutiplicação ", multiplicacoes);
  console.log("Array Divisão ", divisoes);

  // Imprimir o resultado
  console.log("Resultado das operações aritméticas:");
  for (let i = 0; i < resultadoOperacoes.length; i++) {
    console.log(`Índice ${i}:`, resultadoOperacoes[i]);
  }
  
/*
O programa executa em primeiro lugar a declaração 
de quatro arrays vazios para armazenar 
os resultados das operações aritméticas: 
somas, subtracoes, multiplicacoes e divisoes

Na sequencia cria a função operacoesAritmeticas qu
e recebe dois arrays, arr1 e arr2, e realiza operações 
aritméticas entre os elementos correspondentes desses arrays.
A função começa verificando se arr1 e arr2 têm o mesmo 
tamanho usando uma condição if. Se os arrays tiverem 
tamanhos diferentes, a função exibirá uma mensagem 
de erro no console e retorna.
Em seguida, há um loop for que percorre os elementos dos 
arrays. Para cada iteração, a função calcula a soma, 
subtração, multiplicação e divisão dos elementos 
correspondentes de arr1 e arr2.

Os resultados dessas operações são armazenados nos arrays 
somas, subtracoes, multiplicacoes e divisoes 
usando o método push().

O código declara e inicializa   array1 e array2 e
chama a função operacoesAritmeticas(array1, array2);
Em seguida, o código imprime no console os arrays 
originais (array1 e array2) e os resultados das 
operações aritméticas 
*/

// Array de objetos de usuários
let usuarios = [
    {
      nome: "Maria",
      dataNascimento: "1990-05-15",
      sexo: "Feminino",
      profissao: "Engenheira"
    },
    {
      nome: "João",
      dataNascimento: "1985-09-20",
      sexo: "Masculino",
      profissao: "Professor"
    },
    {
      nome: "Ana",
      dataNascimento: "1992-12-10",
      sexo: "Feminino",
      profissao: "Advogada"
    },
    // Adicione mais objetos de usuários conforme necessário
  ];
  
  // Iterar sobre o array de usuários e imprimir os dados de cada usuário
  for (let i = 0; i < usuarios.length; i++) {
    console.log("Usuário " + (i + 1) + ":");
    console.log("Nome:", usuarios[i].nome);
    console.log("Data de Nascimento:", usuarios[i].dataNascimento);
    console.log("Sexo:", usuarios[i].sexo);
    console.log("Profissão:", usuarios[i].profissao);
    console.log("--------------------");
  }
/*
O programa cria um array usuarios contém objetos
que representam usuários. 
Cada objeto tem as propriedades nome, 
dataNascimento, sexo e profissao.

Usando um loop for, percorremos o array usuarios 
e imprimimos os dados de cada usuário no console. 
Cada iteração do loop imprime as informações do 
usuário atual, incluindo o nome, data de nascimento,
sexo e profissão.
*/