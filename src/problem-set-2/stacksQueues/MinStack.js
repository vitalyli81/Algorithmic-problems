/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.list = [];
    this.mins = [];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    const min = this.mins.length
      ? Math.min(x, this.mins[this.mins.length - 1])
      : x;
    this.list.push(x);
    this.mins.push(min);
  }

  /**
   * @return {void}
   */
  pop() {
    this.list.pop();
    this.mins.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.list[this.list.length - 1];
  }

  /**
   * @return {number}
   */
  getMin = function() {
    return this.mins[this.mins.length - 1];
  };
}
