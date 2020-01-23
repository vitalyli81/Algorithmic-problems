/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const memo = {};

  return getPaths(obstacleGrid, 0, 0, memo);
};

const getPaths = (grid, row, col, memo) => {
  const rows = grid.length;
  if (!rows) return 0;
  const cols = grid[0].length;
  if (!cols || !isValidCell(grid, row, col)) return 0;

  const key = `${row}-${col}`;
  if (memo[key]) return memo[key];
  if (isAtTarget(row, col, rows, cols)) {
    memo[key] = 1;
    return memo[key];
  }
  memo[key] =
    getPaths(grid, row + 1, col, memo) + getPaths(grid, row, col + 1, memo);

  return memo[key];
};

const isValidCell = (grid, row, col) => {
  const rows = grid.length;
  const cols = grid[0].length;
  return row < rows && col < cols && grid[row][col] !== 1;
};

const isAtTarget = (row, col, rows, cols) => {
  return row === rows - 1 && col === cols - 1;
};
