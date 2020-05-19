/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = nums[0];
  let sum = min;

  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    sum += nums[i];
  }

  return sum - nums.length * min;
};
