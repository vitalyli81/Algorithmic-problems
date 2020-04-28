class FirstUnique {
  /**
   * @param {number[]} nums
   */

  constructor(nums) {
    this.map = {};
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;

    for (let n of nums) {
      this.add(n);
    }
  }

  /**
   * @param {number} value
   * @return {void}
   */

  add(value) {
    if (this.map[value]) {
      if (this.map[value] === 'NOT_UNIQUE') {
        return;
      }
      const nodeToRemove = this.map[value];
      nodeToRemove.next.prev = nodeToRemove.prev;
      nodeToRemove.prev.next = nodeToRemove.next;
      this.map[value] = 'NOT_UNIQUE';
    } else {
      const newNode = { val: value };
      this.map[value] = newNode;
      newNode.next = this.head.next;
      newNode.prev = this.head;
      this.head.next.prev = newNode;
      this.head.next = newNode;
    }
  }

  /**
   * @return {number}
   */

  showFirstUnique() {
    return this.tail.prev.val || -1;
  }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
