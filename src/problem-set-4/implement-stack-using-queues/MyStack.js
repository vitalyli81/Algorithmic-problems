import Queue from '../../dataStructures/Queue/Queue';

class MyStack {
  constructor() {
    this.q = new Queue();
  }

  push(x) {
    this.q.enqueue(x);
    let size = this.q.size();

    while (size > 1) {
      this.q.enqueue(this.q.dequeue());
      size--;
    }
  }

  pop() {
    return this.q.dequeue();
  }

  top() {
    return this.empty() ? null : this.q.peek();
  }

  empty() {
    return !this.q.size();
  }
}
