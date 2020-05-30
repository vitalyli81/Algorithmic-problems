/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const res = Array(n);
  let num = 1;
  let top = 0;
  let down = n - 1;
  let left = 0;
  let right = n - 1;

  for (let i = 0; i < n; i++) {
    res[i] = Array(n);
  }

  while (top <= down) {
    for (let i = left; i <= right; i++) {
      res[top][i] = num++;
    }
    top++;

    for (let i = top; i <= down; i++) {
      res[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      res[down][i] = num++;
    }
    down--;

    for (let i = down; i >= top; i--) {
      res[i][left] = num++;
    }
    left++;
  }

  return res;
};
