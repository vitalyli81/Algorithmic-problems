/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  const sorted = Array(101);
  let sum = 0;
  let curSum = 0;
  const res = [];

  for (let n of nums) {
    sum += n;
    sorted[n] = (sorted[n] || 0) + 1;
  }

  for (let i = sorted.length - 1; i >= 0; i--) {
    while (sorted[i] > 0) {
      curSum += i;
      res.push(i);
      sorted[i]--;

      if (curSum > sum - curSum) {
        return res;
      }
    }
  }

  return res;
};
