import { Queue } from '../../../dataStructures/Queue/Queue';

export class AnimalQueue {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
    this.order = 0;
  }

  enqueue(type) {
    if (type === 'dog') {
      this.dog.enqueue(this.order++);
    } else if (type === 'cat') {
      this.cat.enqueue(this.order++);
    }

    return { [type]: this.order - 1 };
  }

  dequeueAny() {
    if (!this.dog.length) {
      return this.dequeueCat();
    } else if (!this.cat.length) {
      return this.dequeueDog();
    }

    const cat = this.cat.peek();
    const dog = this.dog.peek();

    if (cat < dog) {
      return this.dequeueCat();
    } else {
      return this.dequeueDog();
    }
  }

  dequeueDog() {
    return { dog: this.dog.dequeue() };
  }

  dequeueCat() {
    return { cat: this.cat.dequeue() };
  }
}
