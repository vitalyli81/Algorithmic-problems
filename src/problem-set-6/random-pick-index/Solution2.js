/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let index = -1;
  let count = 0;

  for (let i = 0; i < this.nums.length; i++) {
    if (target === this.nums[i]) {
      count++;

      const probe = Math.trunc(Math.random() * count) + 1;
      if (count === probe) {
        index = i;
      }
    }
  }

  return index;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
