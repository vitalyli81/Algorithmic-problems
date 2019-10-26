/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix.length) return 0;

  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;
  let maxSize = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 1) {
        maxSize = Math.max(maxSize, getRectSize(matrix, i, j));
      }
    }
  }

  return maxSize;
};

function getRectSize(matrix, row, col) {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;
  let maxSize = 0;
  let minCols = Infinity;

  for (let i = row; i < rows && matrix[i][col] == 1; i++) {
    let colCount = 0;
    for (let j = col; j < cols && matrix[i][j] == 1; j++) {
      colCount++;
    }
    minCols = Math.min(minCols, colCount);
    maxSize = Math.max(maxSize, minCols * (i - row + 1));
  }

  return maxSize;
}
