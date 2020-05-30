var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let count = 1;

  while (
    this.stack.length &&
    this.stack[this.stack.length - 1].price <= price
  ) {
    count += this.stack.pop().count;
  }

  this.stack.push({ count, price });

  return count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
