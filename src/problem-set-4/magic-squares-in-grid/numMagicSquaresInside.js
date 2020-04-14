/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  if (rows < 3 || cols < 3) return count;

  for (let i = 0; i < rows - 2; i++) {
    for (let j = 0; j < cols - 2; j++) {
      if (isMagic(grid, i, j)) {
        count++;
      }
    }
  }

  return count;
};

function isMagic(grid, i, j) {
  const r1 = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
  const r2 = grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2];
  const r3 = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
  const c1 = grid[i][j] + grid[i + 1][j] + grid[i + 2][j];
  const c2 = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1];
  const c3 = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2];
  const d1 = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2];
  const d2 = grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j];
  const count = {};

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const cell = grid[r + i][c + j];
      if (cell > 9 || cell < 1) return false;
      count[cell] = (count[cell] || 0) + 1;
    }
  }

  for (let c of Object.values(count)) {
    if (c !== 1) return false;
  }

  return (
    r1 === r2 &&
    r1 === r3 &&
    r1 === c1 &&
    r1 === c2 &&
    r1 === c3 &&
    r1 === d1 &&
    r1 === d2
  );
}
