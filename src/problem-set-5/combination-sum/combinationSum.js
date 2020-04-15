/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  candidates.sort((a, b) => a - b);

  backtrack(res, [], candidates, target, 0);

  return res;
};

function backtrack(list, tempList, candidates, target, start) {
  if (target < 0) return;
  if (target === 0) {
    list.push([...tempList]);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    tempList.push(candidates[i]);
    backtrack(list, tempList, candidates, target - candidates[i], i);
    tempList.pop();
  }
}
