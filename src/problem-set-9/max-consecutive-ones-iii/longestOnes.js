/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let zeros = 0;
  let max = 0;
  let left = 0;

  for (let right = 0; right < A.length; right++) {
    if (A[right] === 0) {
      zeros++;
    }

    while (zeros > K) {
      if (A[left] === 0) {
        zeros--;
      }

      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};
