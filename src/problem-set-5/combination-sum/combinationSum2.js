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
  if (target < 0 || start >= candidates.length) return;
  if (target === 0) {
    list.push([...tempList]);
    return;
  }
  tempList.push(candidates[start]);
  backtrack(list, tempList, candidates, target - candidates[start], start);
  tempList.pop();
  backtrack(list, tempList, candidates, target, start + 1);
}
