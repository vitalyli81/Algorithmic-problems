/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  let min = A[0];
  let max = A[0];

  for (let i = 1; i < A.length; i++) {
    min = Math.min(min, A[i]);
    max = Math.max(max, A[i]);
  }

  return Math.max(0, max - min - 2 * K);
};
