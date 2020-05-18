/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  let max = -Infinity;
  let curMax = 0;
  let min = Infinity;
  let curMin = 0;
  let sum = 0;

  A.forEach((n) => {
    curMax = Math.max(n, curMax + n);
    max = Math.max(max, curMax);
    curMin = Math.min(n, curMin + n);
    min = Math.min(min, curMin);
    sum += n;
  });

  return max > 0 ? Math.max(max, sum - min) : max;
};
