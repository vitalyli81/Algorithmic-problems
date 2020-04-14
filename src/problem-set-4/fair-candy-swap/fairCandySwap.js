/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const sumA = A.reduce((sum, val) => sum + val, 0);
  const sumB = B.reduce((sum, val) => sum + val, 0);
  const delta = (sumB - sumA) / 2;
  const hashB = {};

  B.forEach((val) => (hashB[val] = 1));

  for (let i = 0; i < A.length; i++) {
    if (hashB[delta + A[i]]) {
      return [A[i], delta + A[i]];
    }
  }
};
