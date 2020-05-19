/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let ans = 0;
  const N = grid.length;

  for (let i = 0; i < N; i++) {
    let maxY = 0;
    let maxZ = 0;

    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) {
        ans++;
      }
      maxY = Math.max(maxY, grid[i][j]);
      maxZ = Math.max(maxZ, grid[j][i]);
    }

    ans += maxY + maxZ;
  }

  return ans;
};
