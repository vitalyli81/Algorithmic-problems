/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const firstIdx = {};
  const lastIdx = {};
  const count = {};
  let res = nums.length;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    count[val] = (count[val] || 0) + 1;
    max = Math.max(max, count[val]);
    if (firstIdx[val] === undefined) {
      firstIdx[val] = i;
    }
    lastIdx[val] = i;
  }

  for (let [key, val] of Object.entries(count)) {
    if (val === max) {
      res = Math.min(res, lastIdx[key] - firstIdx[key] + 1);
    }
  }

  return res;
};
