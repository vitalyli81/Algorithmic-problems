/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const minRows = Array(rows).fill(Infinity);
  const maxCols = Array(cols).fill(0);
  const lucky = [];
  const minHash = {};

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = matrix[i][j];
      minRows[i] = Math.min(minRows[i], cell);
      maxCols[j] = Math.max(maxCols[j], cell);
    }
  }

  for (let i = 0; i < rows; i++) {
    minHash[minRows[i]] = 1;
  }
  for (let i = 0; i < cols; i++) {
    if (minHash[maxCols[i]]) {
      lucky.push(maxCols[i]);
    }
  }

  return lucky;
};
