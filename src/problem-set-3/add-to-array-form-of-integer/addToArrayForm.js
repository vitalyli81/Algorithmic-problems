/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = A.length;
  let curK = K;
  const res = [];

  while (--i >= 0 || curK > 0) {
    if (i >= 0) {
      curK += A[i];
    }
    res.push(curK % 10);
    curK = Math.trunc(curK / 10);
  }

  res.reverse();
  return res;
};
