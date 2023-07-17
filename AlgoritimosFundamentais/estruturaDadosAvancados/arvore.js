// Criação da classe Node (Nó)
function Node(data) {
    this.data = data;  // Atributo que guarda o valor que o nó armazena
    this.left = null;  // Atributo que guarda a referência para o nó filho à esquerda
    this.right = null;  // Atributo que guarda a referência para o nó filho à direita
}

// Criação da classe BinaryTree (Árvore Binária)
function BinaryTree() {
    this.root = null;  // Atributo que guarda a referência para o nó raiz da árvore
}

// Método para adicionar um novo nó à árvore
BinaryTree.prototype.add = function(data) {
    var node = new Node(data);  // Cria um novo nó com o dado fornecido
    if(this.root === null) {  // Se a árvore estiver vazia...
        this.root = node;  // ...adiciona o novo nó como raiz
    } else {  // Se a árvore não estiver vazia...
        insertNode(this.root, node);  // ...chama a função auxiliar para inserir o novo nó na posição correta
    }
}

// Função auxiliar para inserir um novo nó na posição correta
function insertNode(node, newNode) {
    if(newNode.data < node.data) {  // Se o dado do novo nó for menor que o dado do nó atual...
        if(node.left === null) {  // ...e se o nó atual não tiver um filho à esquerda...
            node.left = newNode;  // ...adiciona o novo nó como filho à esquerda do nó atual
        } else {  // ...e se o nó atual já tiver um filho à esquerda...
            insertNode(node.left, newNode);  // ...repete o processo para o filho à esquerda
        }
    } else {  // Se o dado do novo nó for maior que o dado do nó atual...
        if(node.right === null) {  // ...e se o nó atual não tiver um filho à direita...
            node.right = newNode;  // ...adiciona o novo nó como filho à direita do nó atual
        } else {  // ...e se o nó atual já tiver um filho à direita...
            insertNode(node.right, newNode);  // ...repete o processo para o filho à direita
        }
    }
}

// Função para imprimir a árvore binária
function printTree(node, prefix = '', isLeft = null) {
    if(node != null) {
        printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
        console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.data);
        printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true);
    }
}

// Usando a função para imprimir a árvore
var tree = new BinaryTree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(1);
tree.add(2);
tree.add(0);
tree.add(4);
tree.add(4.5);
tree.add(3.5);
tree.add(6);
tree.add(5);
tree.add(6.5);
tree.add(10);
tree.add(12);
tree.add(9);


printTree(tree.root);
