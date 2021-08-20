const HashTable = require("../HashTable/hashImplement");

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new HashTable();
  }


  addVertex(vertex) {
    this.adjacencyList.add(vertex, []);
  }


  addEdge(Vertex1,Vertex2) {
    if (!this.adjacencyList.contains(Vertex1) || !this.adjacencyList.contains(Vertex2)) {
      throw new Error('Invalid vertex');
    }
    const adjacencies = this.adjacencyList.get(Vertex1);
    adjacencies.push(new Edge(Vertex2));
  }


  getVertex() {
   return this.adjacencyList.entries();
  }

  
  getNeighbors(vertex){
    if(!this.adjacencyList.contains(vertex)){
      throw new Error(vertex)
    }
    return this.adjacencyList.get(vertex)
  }


  size(){
    return this.adjacencyList.size;
  }
}