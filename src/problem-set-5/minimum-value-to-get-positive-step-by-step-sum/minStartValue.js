/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let min = nums[0];
  let curSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, curSum + nums[i]);
    curSum += nums[i];
  }

  return min > 0 ? 1 : -1 * min + 1;
};
