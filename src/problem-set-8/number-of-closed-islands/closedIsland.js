/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;

  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        if (dfs(grid, i, j)) res++;
      }
    }
  }

  return res;
};

const dfs = (grid, r, c) => {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return false;

  if (grid[r][c] === 1) return true;

  grid[r][c] = 1;

  let res = true;

  res =
    res &
    dfs(grid, r + 1, c) &
    dfs(grid, r - 1, c) &
    dfs(grid, r, c + 1) &
    dfs(grid, r, c - 1);

  return res;
};
