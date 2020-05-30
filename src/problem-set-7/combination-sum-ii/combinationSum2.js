/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  dfs(candidates, target, 0, [], res);

  return res;
};

function dfs(candidates, target, index, temp, res) {
  if (target < 0) {
    return;
  }

  if (target === 0) {
    res.push([...temp]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) {
      continue;
    }
    temp.push(candidates[i]);
    dfs(candidates, target - candidates[i], i + 1, temp, res);
    temp.pop();
  }
}
