// Criação da classe Queue (Fila)
function Queue() {
    this.elements = [];  // Array que guarda os elementos da fila
}

// Método para adicionar um elemento ao fim da fila
Queue.prototype.enqueue = function(element) {
    this.elements.push(element);  // Adiciona o novo elemento ao final do array 'elements'
}

// Método para remover e retornar o elemento do início da fila
Queue.prototype.dequeue = function() {
    return this.elements.shift();  // Remove e retorna o primeiro elemento do array 'elements'
}

// Método para olhar o elemento no início da fila sem removê-lo
Queue.prototype.peek = function() {
    if (this.isEmpty()) {  // Verifica se a fila está vazia
        return null;  // Se estiver vazia, retorna null
    } else {
        return this.elements[0];  // Se não estiver vazia, retorna o primeiro elemento do array 'elements' (o início da fila)
    }
}

// Método para verificar se a fila está vazia
Queue.prototype.isEmpty = function() {
    return this.elements.length === 0;  // Retorna true se o array 'elements' estiver vazio (a fila está vazia), e false caso contrário
}

// Método para imprimir todos os elementos da fila
Queue.prototype.print = function() {
    for (var i = 0; i < this.elements.length; i++) {  // Para cada índice no array 'elements'...
        console.log("|",this.elements[i],"|"); // ...imprime o elemento nesse índice
        console.log("-----");
    }
}

let queue = new Queue();
queue.enqueue("X");
queue.enqueue("Y");
queue.enqueue("Z");
queue.enqueue("V");
queue.print();  // Imprime: 1 2 3
console.log(queue.dequeue());  // Imprime: 1
queue.print();  // Imprime: 2 3