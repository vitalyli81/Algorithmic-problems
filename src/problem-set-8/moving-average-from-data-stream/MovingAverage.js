/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.list = [];
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.list.length === this.size) {
    const removed = this.list.shift();
    this.sum -= removed;
  }

  this.list.push(val);
  this.sum += val;

  return this.sum / this.list.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
