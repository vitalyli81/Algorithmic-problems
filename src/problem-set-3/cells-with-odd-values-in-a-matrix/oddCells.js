/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  const grid = Array(n);
  let count = 0;

  for (let i = 0; i < n; i++) {
    grid[i] = Array(m).fill(0);
  }

  for (let i = 0; i < indices.length; i++) {
    const row = indices[i][0];
    const col = indices[i][1];
    for (let j = 0; j < n; j++) {
      grid[j][col] += 1;
    }
    for (let j = 0; j < m; j++) {
      grid[row][j] += 1;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
};
