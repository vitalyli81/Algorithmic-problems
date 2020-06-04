/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let level = 2; level <= n; level++) {
    for (let root = 1; root <= level; root++) {
      const left = dp[root - 1];
      const right = dp[level - root];
      dp[level] += left * right;
    }
  }

  return dp[n];
};
