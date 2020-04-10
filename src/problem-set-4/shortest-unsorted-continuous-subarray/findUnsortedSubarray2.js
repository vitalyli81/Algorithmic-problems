/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (!nums || !nums.length) return 0;
  const n = nums.length;
  let l = -1;
  let r = -2;
  let min = nums[n - 1];
  let max = nums[0];

  for (let i = 1; i < n; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[n - 1 - i]);
    if (nums[i] < max) {
      r = i;
    }
    if (nums[n - 1 - i] > min) {
      l = n - i - 1;
    }
  }

  return r - l + 1;
};
