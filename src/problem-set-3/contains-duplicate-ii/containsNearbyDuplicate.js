/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (hash[cur] !== undefined && Math.abs(hash[cur] - i) <= k) {
      return true;
    }

    hash[cur] = i;
  }
  return false;
};
