/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let start = 0;
  let i = 0;
  let end = nums.length - 1;

  while (i <= end) {
    if (nums[i] === 0) {
      const tmp = nums[i];
      nums[i] = nums[start];
      nums[start++] = tmp;
      i++;
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      const tmp = nums[i];
      nums[i] = nums[end];
      nums[end--] = tmp;
    }
  }
};
