class Queue {
  constructor() {
    this.data = {};
    this.length = 0;
    this.tail = 0;
    this.head = 0;
  }

  enqueue(value) {
    this.tail++;
    this.data[this.tail] = value;
    this.length++;
  }

  dequeue() {
    if (this.length < 1) return;

    this.head++;
    var elem = this.data[this.head];

    delete this.data[this.head];

    this.length--;

    if (this.length === 0) {
      this.tail = 0;
      this.head = 0;
    }

    return elem;
  }

  peek() {
    return this.data[this.head + 1];
  }

  size() {
    return this.length;
  }
}

class RecentCounter {
  constructor() {
    this.q = new Queue();
  }

  ping(t) {
    this.q.enqueue(t);
    while (this.q.peek() < t - 3000) {
      this.q.dequeue();
    }
    return this.q.size();
  }
}
