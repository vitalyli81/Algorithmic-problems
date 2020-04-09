export class MaxPriorityQueue {
  constructor(A) {
    this.A = A;
    this.heapSize = A.length;
    this.buildMaxHeap(this.A);
  }

  getHeapMax() {
    if (this.heapSize < 1) return;
    return this.A[0];
  }

  heapExtractMax() {
    if (this.heapSize < 1) return;
    let max;

    max = this.A[0];
    this.A[0] = this.A[this.heapSize - 1];
    this.heapSize--;
    this.maxHeapify(0);

    return max;
  }

  heapIncrease(ind, key) {
    if (this.heapSize < 1) return;

    let parent = Math.floor(ind / 2); // parent index
    let index = ind;

    if (key < this.A[index]) return;

    this.A[index] = key;

    while (index > 0 && this.A[parent] < this.A[index]) {
      this.swap(this.A, parent, index);
      index = parent; // changing i to parent index
      parent = Math.floor(index / 2); // new parent index
    }
  }

  heapInsert(key) {
    this.heapSize++;
    this.A[this.heapSize - 1] = Number.NEGATIVE_INFINITY;
    this.heapIncrease(this.heapSize - 1, key);
  }

  swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }

  buildMaxHeap() {
    for (let i = Math.floor(this.A.length / 2); i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  maxHeapify(index) {
    let leftIndex = index === 0 ? 1 : 2 * index;
    let rightIndex = index === 0 ? 2 : 2 * index + 1;
    let largest = index;

    if (leftIndex < this.heapSize && this.A[leftIndex] > this.A[index]) {
      largest = leftIndex;
    }

    if (rightIndex < this.heapSize && this.A[rightIndex] > this.A[largest]) {
      largest = rightIndex;
    }

    if (largest !== index) {
      this.swap(this.A, largest, index);
      this.maxHeapify(largest);
    }
  }
}

export default MaxPriorityQueue;
/**
 *
 * var maxPQ = new MaxPriorityQueue([1,4,7,9,5,2,7,9,23,98]);
 * maxPQ.getHeapMax(); // 98
 * maxPQ.heapExtractMax(); // 98
 * maxPQ.heapExtractMax(); // 23
 * maxPQ.heapIncrease(4, 100);
 * maxPQ.heapInsert(200);
 *
 */
