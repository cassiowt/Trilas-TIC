// Define a função construtora Stack, que será usada para criar novas pilhas
function Stack() {
    this.elements = [];  // Inicia a pilha vazia. 'elements' irá armazenar todos os elementos na pilha
}
// Define o método 'push' na protótipo de Stack, que é usado para adicionar elementos à pilha
Stack.prototype.push = function(element) {
    this.elements.push(element);  // Adiciona o novo elemento ao final do array 'elements'
}
// Define o método 'pop' no protótipo de Stack, que é usado para remover e retornar o último elemento adicionado à pilha
Stack.prototype.pop = function() {
    return this.elements.pop();  // Remove e retorna o último elemento do array 'elements'
}

// Define o método 'peek' no protótipo de Stack, que é usado para olhar o elemento no topo da pilha (o último adicionado) sem removê-lo
Stack.prototype.peek = function() {
    if (this.isEmpty()) {  // Verifica se a pilha está vazia
        return null;  // Se estiver vazia, retorna null
    } else {
        return this.elements[this.elements.length - 1];  // Se não estiver vazia, retorna o último elemento do array 'elements' (o topo da pilha)
    }
}
// Define o método 'isEmpty' no protótipo de Stack, que é usado para verificar se a pilha está vazia
Stack.prototype.isEmpty = function() {
    return this.elements.length === 0;  // Retorna true se o array 'elements' estiver vazio (a pilha está vazia), e false caso contrário
}
// Método para imprimir todos os elementos da pilha
Stack.prototype.print = function() {
    for (var i = 0; i < this.elements.length; i++) { // Para cada índice no array 'elements'...
        console.log("|",this.elements[i],"|"); // ...imprime o elemento nesse índice
        console.log("-----");
    }
}


const  stack = new Stack();
stack.push("Z");
stack.push("Y");
stack.push("X");
stack.push("V");
stack.print();
console.log(stack.pop());  // Saída: 3
stack.print();
console.log(stack.peek());  // Saída: 2
stack.print();
console.log(stack.isEmpty());  // Saída: false


