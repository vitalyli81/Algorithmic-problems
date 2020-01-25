/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  const resultSets = [];
  dfs({
    currentSet: [],
    nextIndex: 0,
    resultSets,
    nums
  });
  return resultSets;
};

const dfs = ({ currentSet, nextIndex, resultSets, nums }) => {
  resultSets.push(currentSet);
  for (let i = nextIndex; i < nums.length; i++) {
    dfs({
      currentSet: [...currentSet, nums[i]],
      nextIndex: i + 1,
      resultSets,
      nums
    });
  }
};
