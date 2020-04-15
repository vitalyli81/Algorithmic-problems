/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const memo = {};
  memo[nums.length - 1] = true;

  for (let i = nums.length - 2; i >= 0; i--) {
    const nextJump = Math.min(nums.length - 1, nums[i] + i);

    for (let j = i + 1; j <= nextJump; j++) {
      if (memo[j]) {
        memo[i] = true;
        break;
      }
    }
  }

  return memo[0];
};
