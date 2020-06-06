/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.w = w;

  for (let i = 1; i < this.w.length; i++) {
    this.w[i] += this.w[i - 1];
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const len = this.w.length;
  const rand = Math.floor(Math.random() * this.w[len - 1]);
  let left = 0;
  let right = len - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (this.w[mid] > rand) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
