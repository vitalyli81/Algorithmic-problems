/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let count = 0;
  const m = grid.length;
  const n = grid[0].length;
  let r = m - 1;
  let c = 0;

  while (r >= 0 && c < n) {
    if (grid[r][c] < 0) {
      r--;
      count += n - c;
    } else {
      c++;
    }
  }

  return count;
};
