/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const memo = {};
  return dpRob(nums, nums.length - 1, memo);
};

const dpRob = (nums, i, memo) => {
  if (i < 0) {
    return 0;
  }
  if (memo[i] >= 0) {
    return memo[i];
  }

  return (memo[i] = Math.max(
    dpRob(nums, i - 2, memo) + nums[i],
    dpRob(nums, i - 1, memo)
  ));
};
