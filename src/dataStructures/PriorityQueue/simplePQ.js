export class SimplePQ {
  constructor() {
    this.queue = [];
  }

  add(node, priority) {
    this.queue.push({
      node,
      priority
    });

    this.queue.sort((a, b) => b.priority - a.priority);
  }

  extract() {
    const min = this.queue.pop();
    return min.node;
  }

  length() {
    return this.queue.length;
  }
}

export default SimplePQ;
