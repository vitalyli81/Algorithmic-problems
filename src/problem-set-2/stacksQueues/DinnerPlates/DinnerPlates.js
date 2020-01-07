class DinnerPlates {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = new Map();
    this.current = 0;
    this.last = 0;
    this.count = 0;
  }

  push(val) {
    while (
      this.stacks.has(this.current) &&
      this.stacks.get(this.current).length === this.capacity
    ) {
      this.current++;
    }

    if (this.current === this.stacks.size) {
      this.stacks.set(this.current, []);
    }

    this.stacks.get(this.current).push(val);
    this.last = Math.max(this.current, this.last);
    this.count++;
  }

  pop() {
    if (!this.count) return -1;
    while (this.last >= 0 && !this.stacks.get(this.last).length) {
      this.last--;
    }
    this.count--;
    this.current = Math.min(this.current, this.last);
    return this.stacks.get(this.last).pop();
  }

  popAtStack(index) {
    if (!this.stacks.get(index) || !this.stacks.get(index).length) return -1;
    this.current = Math.min(index, this.current);
    this.count--;
    return this.stacks.get(index).pop();
  }
}
