/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
  let i = 0;

  A.sort((a, b) => a - b);

  while (K) {
    A[i] = -A[i];
    if (i < A.length - 1 && A[i] > A[i + 1]) {
      i++;
    }
    K--;
  }

  return A.reduce((acc, v) => acc + v, 0);
};
