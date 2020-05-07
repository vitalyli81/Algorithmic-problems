/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (this.nums[n] === undefined) {
      this.nums[n] = [];
    }
    this.nums[n].push(i);
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const nums = this.nums[target];
  const idx = Math.trunc(Math.random() * nums.length);

  return nums[idx];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
