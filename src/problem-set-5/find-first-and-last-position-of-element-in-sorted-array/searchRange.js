/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  const range = [-1, -1];

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  if (nums[l] !== target) return range;
  range[0] = l;
  r = len - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2) + 1;
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }

  range[1] = r;

  return range;
};
