/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.shuffled = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const len = this.shuffled.length;

  for (let i = 0; i < len; i++) {
    const randIdx = Math.floor(Math.random() * len);
    const temp = this.shuffled[i];
    this.shuffled[i] = this.shuffled[randIdx];
    this.shuffled[randIdx] = temp;
  }

  return this.shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
