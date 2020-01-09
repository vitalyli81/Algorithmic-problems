/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var peaksAndValeys = function(nums) {
  for (let i = 1; i < nums.length; i += 2) {
    const maxInd = maxIndex(nums, i - 1, i, i + 1);
    if (i !== maxInd) {
      swap(nums, i, maxInd);
    }
  }
};

function maxIndex(nums, a, b, c) {
  const len = nums.length;
  const aVal = a >= 0 && a < len ? nums[a] : Number.MIN_VALUE;
  const bVal = a >= 0 && a < len ? nums[b] : Number.MIN_VALUE;
  const cVal = a >= 0 && a < len ? nums[c] : Number.MIN_VALUE;
  const max = Math.max(aVal, bVal, cVal);

  if (aVal === max) return a;
  if (bVal === max) return b;
  return c;
}

function swap(list, a, b) {
  const tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;
}
