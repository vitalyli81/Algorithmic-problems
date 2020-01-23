/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const rows = n;
  const cols = m;
  const grid = makeGrid(n, m);
  grid[rows - 1][cols - 1] = 1;

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (isValidCell(i + 1, j, rows, cols)) {
        grid[i][j] += grid[i + 1][j];
      }
      if (isValidCell(i, j + 1, rows, cols)) {
        grid[i][j] += grid[i][j + 1];
      }
    }
  }

  return grid[0][0];
};

const isValidCell = (row, col, rows, cols) => {
  return row < rows && row >= 0 && col < cols && col >= 0;
};

const makeGrid = (rows, cols) => {
  const grid = Array(rows);
  for (let i = 0; i < rows; i++) {
    grid[i] = Array(cols).fill(0);
  }

  return grid;
};
