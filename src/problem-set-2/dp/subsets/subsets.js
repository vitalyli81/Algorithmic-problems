/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  dfs([], 0, result, nums);
  return result;
};

const dfs = (currentSet, nextInd, result, nums) => {
  result.push(currentSet);
  for (let i = nextInd; i < nums.length; i++) {
    dfs([...currentSet, nums[i]], i + 1, result, nums);
  }
};
