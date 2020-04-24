/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  const dp = Array(nums.length);
  let max = 1;
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    let tmpMax = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        tmpMax = Math.max(tmpMax, dp[j]);
      }
    }
    dp[i] = tmpMax + 1;
    max = Math.max(max, dp[i]);
  }

  return max;
};
