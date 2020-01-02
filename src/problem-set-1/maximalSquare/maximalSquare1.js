export const maximalSquare = matrix => {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;
  let maxSqrLen = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === '1') {
        maxSqrLen = Math.max(maxSqrLen, getSqlCount(matrix, row, col));
      }
    }
  }

  return maxSqrLen * maxSqrLen;
};

var getSqlCount = function(matrix, row, col) {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;
  let flag = true;
  let sqrLen = 1;

  while (flag && row + sqrLen < rows && col + sqrLen < cols) {
    for (i = col; i <= col + sqrLen; i++) {
      if (matrix[row + sqrLen][i] === '0') {
        flag = false;
        break;
      }
    }

    for (let i = row; i <= row + sqrLen; i++) {
      if (matrix[i][col + sqrLen] === '0') {
        flag = false;
        break;
      }
    }

    if (flag) {
      sqrLen++;
    }
  }

  return sqrLen;
};

export default maximalSquare;
