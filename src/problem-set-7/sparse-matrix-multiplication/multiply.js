/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function (A, B) {
  const aRows = A.length;
  const aCols = A[0].length;
  const bRows = B.length;
  const bCols = B[0].length;
  const C = Array(aRows);

  for (let i = 0; i < aRows; i++) {
    C[i] = Array(bCols);
  }

  if (aCols !== bRows) {
    return [];
  }

  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      C[i][j] = 0;
      for (let k = 0; k < aCols; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
};
