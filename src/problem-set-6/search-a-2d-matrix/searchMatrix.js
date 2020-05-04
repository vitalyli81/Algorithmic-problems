/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let i = rows - 1;
  let j = 0;

  while (i >= 0 && j < cols) {
    const val = matrix[i][j];

    if (val == target) {
      return true;
    }

    if (val > target) {
      i -= 1;
    } else {
      j += 1;
    }
  }

  return false;
};
