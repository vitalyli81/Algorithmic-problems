export class SimpleGraph {
  constructor() {
    this.edges = {};
  }

  getNeighbors(vertex) {
    return this.edges[vertex] || [];
  }
}

export default SimpleGraph;
