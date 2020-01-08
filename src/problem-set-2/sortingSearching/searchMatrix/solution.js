/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rows = matrix.length;
  if (!rows) return false;
  let cols = matrix[0].length;
  if (!cols) return false;

  let row = rows - 1;
  let col = 0;

  while (row >= 0 && col < cols) {
    const current = matrix[row][col];
    if (current === target) return true;
    if (current > target) {
      row--;
    } else {
      col++;
    }
  }

  return false;
};
