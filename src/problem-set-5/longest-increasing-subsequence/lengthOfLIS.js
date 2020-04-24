/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const memo = {};
  return dpLis(nums, -1, 0, memo);
};

function dpLis(nums, prev, cur, memo) {
  if (cur === nums.length) return 0;

  const key = `${prev + 1}:${cur}`;

  if (memo[key] !== undefined) return memo[key];
  let take = 0;
  let notake = 0;

  if (prev < 0 || nums[cur] > nums[prev]) {
    take = 1 + dpLis(nums, cur, cur + 1, memo);
  }

  notake = dpLis(nums, prev, cur + 1, memo);

  return (memo[key] = Math.max(take, notake));
}
