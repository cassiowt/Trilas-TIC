// Criando a classe Graph (Grafo)
function Graph() {
    this.adjacencyList = {};  // Objeto que irá armazenar a lista de adjacências
}

// Método para adicionar um novo vértice ao grafo
Graph.prototype.addVertex = function(vertex) {
    if (!this.adjacencyList[vertex]) {  // Se o vértice não existir na lista de adjacências...
        this.adjacencyList[vertex] = [];  // ...adiciona ele à lista e associa a ele uma lista vazia
    }
}

// Método para adicionar uma aresta entre dois vértices
Graph.prototype.addEdge = function(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);  // Adiciona o vértice2 à lista de adjacências do vértice1
    this.adjacencyList[vertex2].push(vertex1);  // Adiciona o vértice1 à lista de adjacências do vértice2
}

// Método para remover uma aresta entre dois vértices
Graph.prototype.removeEdge = function(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2  // Remove o vértice2 da lista de adjacências do vértice1
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1  // Remove o vértice1 da lista de adjacências do vértice2
    );
}

// Método para remover um vértice do grafo
Graph.prototype.removeVertex = function(vertex) {
    while(this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();  // Remove um vértice adjacente
        this.removeEdge(vertex, adjacentVertex);  // Remove a aresta entre os dois vértices
    }
    delete this.adjacencyList[vertex];  // Remove o vértice da lista de adjacências
}

var graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log(graph.adjacencyList);  // { A: ["B", "C"], B: ["A"], C: ["A"] }
graph.removeEdge("A", "C");
console.log(graph.adjacencyList);  // { A: ["B"], B: ["A"], C: [] }
graph.removeVertex("A");
console.log(graph.adjacencyList);  // { B: [], C: [] }
