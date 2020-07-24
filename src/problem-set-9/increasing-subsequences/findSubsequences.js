/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = [];
  dfs([], 0, nums, res);
  return res;
};

const dfs = (list, index, nums, res) => {
  if (list.length > 1) res.push([...list]);
  const seen = {};

  for (let i = index; i < nums.length; i++) {
    if (seen[nums[i]] !== undefined) continue;

    if (list.length === 0 || nums[i] >= list[list.length - 1]) {
      seen[nums[i]] = true;
      list.push(nums[i]);
      dfs(list, i + 1, nums, res);
      list.pop();
    }
  }
};
