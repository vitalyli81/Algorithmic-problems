/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  const memo = {};
  let count = 0;

  function helper(sum, i) {
    if (i === nums.length) {
      if (S === sum) {
        count++;
      }
      return;
    }
    helper(sum + nums[i], i + 1);
    helper(sum - nums[i], i + 1);
  }

  helper(0, 0);

  return count;
};
