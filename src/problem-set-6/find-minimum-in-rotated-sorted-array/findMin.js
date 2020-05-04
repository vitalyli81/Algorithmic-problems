/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let start = 0;
  let end = nums.length - 1;

  if (nums[end] > nums[0]) {
    return nums[0];
  }

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return nums[start];
};
