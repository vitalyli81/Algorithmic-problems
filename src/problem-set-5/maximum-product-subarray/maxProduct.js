/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curEl = nums[i];
    const curMax = Math.max(prevMax * curEl, curEl, prevMin * curEl);
    const curMin = Math.min(prevMax * curEl, curEl, prevMin * curEl);

    prevMax = Math.max(curMax, curMin);
    prevMin = Math.min(curMax, curMin);
    max = Math.max(prevMax, max);
  }
  return max;
};
