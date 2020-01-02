var longestIncreasingPath = function(matrix) {
  if (matrix.length === 0) return 0;

  const memo = {};
  const rows = matrix.length;
  const cols = matrix[0].length;
  let max = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      max = Math.max(dfs(matrix, i, j, memo), max);
    }
  }

  return max;
};

const dfs = (matrix, row, col, memo) => {
  if (memo[`${row}:${col}`] !== undefined) return memo[`${row}:${col}`];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let ans = 0;
  const edges = [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1]
  ];

  edges.forEach(node => {
    const r = node[0];
    const c = node[1];

    if (r >= 0 && c >= 0 && r < rows && c < cols) {
      if (matrix[r][c] > matrix[row][col]) {
        ans = Math.max(ans, dfs(matrix, r, c, memo));
      }
    }
  });

  ans++;
  memo[`${row}:${col}`] = ans;

  return ans;
};
