/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    }
    max = Math.max(max, nums[i] + i);
    if (max >= nums.length - 1) {
      return true;
    }
  }

  return false;
};