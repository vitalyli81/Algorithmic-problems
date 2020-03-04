/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  while (k-- > 0) {
    let prev = grid[m - 1][n - 1];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const temp = grid[i][j];
        grid[i][j] = prev;
        prev = temp;
      }
    }
  }

  return grid;
};
