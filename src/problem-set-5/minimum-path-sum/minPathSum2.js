/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const memo = {};
  return dfs(grid, 0, 0, memo);
};

function dfs(grid, i, j, memo) {
  if (i === grid.length - 1 && j === grid[0].length - 1) {
    return grid[i][j];
  } else {
    const dirs = [
      [0, 1],
      [1, 0],
    ];
    const key = `${i}:${j}`;
    let min = Number.MAX_VALUE;

    if (memo[key] !== undefined) {
      return memo[key];
    }

    for (let dir of dirs) {
      const ni = i + dir[0];
      const nj = j + dir[1];

      if (ni < grid.length && nj < grid[0].length) {
        min = Math.min(min, grid[i][j] + dfs(grid, ni, nj, memo));
      }
    }

    return (memo[key] = min);
  }
}
