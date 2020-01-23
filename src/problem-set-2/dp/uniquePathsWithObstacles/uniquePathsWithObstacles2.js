/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const rows = obstacleGrid.length;
  if (!rows) return 0;
  const cols = obstacleGrid[0].length;
  if (
    !cols ||
    obstacleGrid[0][0] === 1 ||
    obstacleGrid[rows - 1][cols - 1] === 1
  )
    return 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 'x';
      }
    }
  }

  obstacleGrid[0][0] = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (isValidCell(obstacleGrid, i, j, rows, cols)) {
        if (isValidCell(obstacleGrid, i - 1, j, rows, cols)) {
          obstacleGrid[i][j] += obstacleGrid[i - 1][j];
        }

        if (isValidCell(obstacleGrid, i, j - 1, rows, cols)) {
          obstacleGrid[i][j] += obstacleGrid[i][j - 1];
        }
      }
    }
  }

  return obstacleGrid[rows - 1][cols - 1];
};

const isValidCell = (grid, row, col, rows, cols) => {
  return (
    row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] !== 'x'
  );
};
