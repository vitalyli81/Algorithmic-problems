export class SimpleGraph {
  constructor(verticies) {
    this.verticies = verticies;
  }

  getEdges(vertex) {
    return this.verticies[vertex] || [];
  }

  addVertex(vertex) {
    this.verticies[vertex] = [];
  }

  addEdge(from, to) {}
}

export default SimpleGraph;
