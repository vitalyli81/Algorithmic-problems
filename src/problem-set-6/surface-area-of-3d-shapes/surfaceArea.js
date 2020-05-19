/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let ans = 0;
  const N = grid.length;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) {
        ans += grid[i][j] * 4 + 2;
        ans -= i - 1 >= 0 ? Math.min(grid[i][j], grid[i - 1][j]) * 2 : 0;
        ans -= j - 1 >= 0 ? Math.min(grid[i][j], grid[i][j - 1]) * 2 : 0;
      }
    }
  }

  return ans;
};
