/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let start = matrix[0][0];
  let end = matrix[n - 1][n - 1];

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const minMax = [matrix[0][0], matrix[n - 1][n - 1]];
    const count = getCount(mid, matrix, minMax);

    if (count === k) return minMax[0];

    if (count < k) {
      start = minMax[1];
    } else {
      end = minMax[0];
    }
  }

  return start;
};

const getCount = (mid, matrix, minMax) => {
  let count = 0;
  const n = matrix.length;
  let row = n - 1;
  let col = 0;

  while (row >= 0 && col < n) {
    if (matrix[row][col] > mid) {
      minMax[1] = Math.min(minMax[1], matrix[row][col]);
      row--;
    } else {
      minMax[0] = Math.max(minMax[0], matrix[row][col]);
      count += row + 1;
      col++;
    }
  }

  return count;
};
