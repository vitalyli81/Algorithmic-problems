/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] > nums[start]) {
      if (target < nums[mid] && target >= nums[start]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    } else if (nums[mid] < nums[start]) {
      if (target > nums[mid] && target < nums[start]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    } else {
      start++;
    }
  }

  return false;
};
