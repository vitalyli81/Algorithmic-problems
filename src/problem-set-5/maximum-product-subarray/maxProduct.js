/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
    const curMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);
    prevMax = curMax;
    prevMin = curMin;
    max = Math.max(prevMax, max);
  }
  return max;
};
