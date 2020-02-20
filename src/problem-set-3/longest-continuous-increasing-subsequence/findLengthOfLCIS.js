/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums || !nums.length) return 0;
  if (nums.length === 1) return 1;
  let max = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    max = Math.max(max, count);
  }

  return max;
};
