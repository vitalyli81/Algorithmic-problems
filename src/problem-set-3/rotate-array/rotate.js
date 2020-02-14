/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (!nums || !nums.length || nums.length === 1) return nums;
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    const tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start++;
    end--;
  }
}
