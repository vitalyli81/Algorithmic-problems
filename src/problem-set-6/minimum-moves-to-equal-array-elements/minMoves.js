/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = nums[0];
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] - min;
  }

  return count;
};
