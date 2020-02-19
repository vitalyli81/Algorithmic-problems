/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let changed = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
        nums[i] = nums[i - 1];
      }
      changed++;
    }
    if (changed > 1) return false;
  }
  return true;
};
