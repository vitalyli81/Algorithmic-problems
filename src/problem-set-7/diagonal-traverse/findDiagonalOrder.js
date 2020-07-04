/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;
  const res = Array(m * n);
  let r = 0;
  let c = 0;

  for (let i = 0; i < res.length; i++) {
    res[i] = matrix[r][c];

    if ((r + c) % 2 === 0) {
      if (c === n - 1) {
        r++;
      } else if (r === 0) {
        c++;
      } else {
        r--;
        c++;
      }
    } else {
      if (r === m - 1) {
        c++;
      } else if (c === 0) {
        r++;
      } else {
        c--;
        r++;
      }
    }
  }

  return res;
};
