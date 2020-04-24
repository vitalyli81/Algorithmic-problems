/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return randomizedSelect(nums, 0, nums.length - 1, k);
};

function randomizedSelect(nums, start, end, k) {
  if (start === end) {
    return nums[start];
  }

  const pivot = randomizedPartition(nums, start, end);
  const mid = end - pivot + 1;

  if (mid === k) {
    return nums[pivot];
  }

  if (mid > k) {
    return randomizedSelect(nums, pivot + 1, end, k);
  }

  return randomizedSelect(nums, start, pivot - 1, k - mid);
}

function randomizedPartition(nums, start, end) {
  const rand = Math.floor(Math.random() * (end - start + 1)) + start;
  swap(nums, rand, end);

  return partition(nums, start, end);
}

function partition(nums, start, end) {
  let pivot = start;
  for (let i = start; i < end; i++) {
    if (nums[i] <= nums[end]) {
      swap(nums, i, pivot++);
    }
  }

  swap(nums, pivot, end);

  return pivot;
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
