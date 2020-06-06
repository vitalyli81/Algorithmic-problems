/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  dfs(nums, res, [], 0);

  return res;
};

function dfs(nums, res, cur, start) {
  res.push(cur);

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }

    const newCur = [...cur];
    newCur.push(nums[i]);
    dfs(nums, res, newCur, i + 1);
  }
}
