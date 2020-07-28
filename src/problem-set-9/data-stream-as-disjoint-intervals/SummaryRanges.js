/**
 * Initialize your data structure here.
 */
var SummaryRanges = function () {
  this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  this.arr[val] = true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  let start = -1;
  const res = [];

  for (let i = 0; i < this.arr.length; i++) {
    if (start === -1) {
      if (this.arr[i]) {
        start = i;
        continue;
      }
    } else {
      if (!this.arr[i]) {
        res.push([start, i - 1]);
        start = -1;
        continue;
      }
    }
  }

  if (start !== -1) {
    res.push([start, this.arr.length - 1]);
  }

  return res;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
