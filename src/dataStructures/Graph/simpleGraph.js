export class SimpleGraph {
  constructor() {
    this.edges = {};
  }

  getNeighbors(vertex) {
    return this.edges[vertex] || [];
  }

  // TODO add rest of the methods
}

export default SimpleGraph;
