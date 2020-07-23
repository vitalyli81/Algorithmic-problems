/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const nums = String(n).split('');
  let i = nums.length - 2;

  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i < 0) {
    return -1;
  }

  let j = nums.length - 1;

  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }

  swap(nums, i, j);

  reverse(nums, i + 1);
  const num = parseInt(nums.join(''));

  return num < 2147483647 ? num : -1;
};

function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;

  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
