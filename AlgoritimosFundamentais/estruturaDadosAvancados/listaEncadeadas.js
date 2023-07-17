// Criação da classe Node
function Node(value) {
    this.value = value;  // Atributo que guarda o valor que o nodo armazena
    this.next = null;  // Atributo que guarda a referência para o próximo nodo na lista
}
// Definição da estrutura da LinkedList
function LinkedList() {
    this.head = null;  // Inicializa o início (ponta) da lista como nulo
    this.tail = null;  // Inicializa o final (cauda) da lista como nulo
}

// Método para adicionar um elemento ao final da lista
LinkedList.prototype.append = function(value) {
    var newNode = new Node(value);  // Cria um novo Node com o valor fornecido

    // Se a lista está vazia, o novo nodo é tanto a ponta quanto a cauda
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        // Caso contrário, adicione o novo nodo ao final da lista e atualize a cauda
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

// Método para adicionar um elemento ao início da lista
LinkedList.prototype.prepend = function(value) {
    var newNode = new Node(value);  // Cria um novo Node com o valor fornecido

    // Se a lista está vazia, o novo nodo é tanto a cabeça quanto a cauda
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        // Caso contrário, adicione o novo nodo no início da lista e atualize a cabeça
        newNode.next = this.head;
        this.head = newNode;
    }
}

// Método para remover um elemento da lista
LinkedList.prototype.delete = function(value) {
    // Se a lista está vazia, não há nada para remover
    if (!this.head) {
        return;
    }

    // Remova o elemento do início da lista, se necessário
    while (this.head && this.head.value === value) {
        this.head = this.head.next;
    }

    // Procure pelo elemento no resto da lista e o remova, se encontrado
    var currentNode = this.head;
    while (currentNode.next) {
        if (currentNode.next.value === value) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    // Se o valor do nodo cauda é o que estamos procurando, atualize a cauda
    if (this.tail.value === value) {
        this.tail = currentNode;
    }
}

// Método para imprimir todos os elementos da lista
LinkedList.prototype.print = function() {
    var currentNode = this.head;  // Começa pela cabeça
    var values = [];  // Para armazenar todos os valores

    // Atravessa a lista, adicionando cada valor ao array de valores
    while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }

    // Imprime todos os valores, separados por ' -> '
    console.log(values.join(' -> '));
}


const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();  // Saída: 1 -> 2 -> 3
list.prepend(0);
list.print();  // Saída: 0 -> 1 -> 2 -> 3
list.delete(2);
list.print();  // Saída: 0 -> 1 -> 3

