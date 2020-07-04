/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const sorted = nums
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val);
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    const diff = Math.abs(sorted[left].val - sorted[right].val);
    const idxDiff = Math.abs(sorted[left].idx - sorted[right].idx);

    if (diff <= t && idxDiff <= k) {
      return true;
    } else if (diff > t) {
      left++;
    } else {
      right++;
    }

    if (left === right) {
      right++;
    }
  }

  return false;
};
