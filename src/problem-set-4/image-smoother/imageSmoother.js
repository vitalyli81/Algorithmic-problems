/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  const rows = M.length;
  const cols = M[0].length;
  const res = Array(rows);

  for (let i = 0; i < res.length; i++) {
    res[i] = Array(cols).fill(0);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0;

      for (let r = i - 1; r <= i + 1; r++) {
        for (let c = j - 1; c <= j + 1; c++) {
          if (r >= 0 && c >= 0 && r < rows && c < cols) {
            res[i][j] += M[r][c];
            count++;
          }
        }
      }

      res[i][j] = Math.floor(res[i][j] / count);
    }
  }

  return res;
};
