export function search(nums, target) {
  let index = 1;

  while (nums[index] !== undefined && nums[index] < target) {
    index *= 2;
  }

  let low = index / 2;
  let high = index;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const middle = nums[mid];
    if (middle === target) return mid;

    if (middle > target || middle === undefined) {
      high = mid - 1;
    } else if (middle < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
