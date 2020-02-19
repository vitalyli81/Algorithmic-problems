/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const hash = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    hash[n] = (hash[n] || 0) + 1;
    if (hash[n - 1]) {
      max = Math.max(max, hash[n] + hash[n - 1]);
    }
    if (hash[n + 1]) {
      max = Math.max(max, hash[n] + hash[n + 1]);
    }
  }
  return max;
};
