/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0;
  }
  let count = 0;
  const dp = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      count += dfs(i, j, matrix, dp);
    }
  }

  return count;
};

function dfs(i, j, matrix, dp) {
  const key = `${i}:${j}`;
  if (dp[key] >= 0) {
    return dp[key];
  }

  if (matrix[i][j] > 0 && i > 0 && j > 0) {
    dp[key] =
      Math.min(
        dfs(i - 1, j - 1, matrix, dp),
        dfs(i - 1, j, matrix, dp),
        dfs(i, j - 1, matrix, dp)
      ) + 1;
  } else {
    dp[key] = matrix[i][j];
  }

  return dp[key];
}
