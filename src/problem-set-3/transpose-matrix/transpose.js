/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const R = A.length;
  const C = A[0].length;
  const ans = Array(C);
  for (let i = 0; i < C; i++) {
    ans[i] = Array(A);
  }
  for (let r = 0; r < R; r++)
    for (let c = 0; c < C; c++) {
      ans[c][r] = A[r][c];
    }
  return ans;
};
