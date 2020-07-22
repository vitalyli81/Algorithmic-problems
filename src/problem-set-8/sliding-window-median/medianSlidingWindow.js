/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  let window = [];
  const res = [];
  let left = 0;

  for (let i = 0; i < k; i++) {
    window.push(nums[i]);
  }

  res.push(getMedian(window));

  for (let i = k; i < nums.length; i++) {
    const removeIdx = binarySearch(window, nums[left]);
    window[removeIdx] = nums[i];
    res.push(getMedian(window));
    left++;
  }

  return res;
};

const binarySearch = (list, target) => {
  let i = 0;
  let j = list.length - 1;

  while (i < j) {
    const mid = Math.floor((i + j) / 2);

    if (list[mid] < target) {
      i = mid + 1;
    } else if (list[mid] > target) {
      j = mid;
    } else {
      return mid;
    }
  }

  if (i === j) {
    return list[i] === target ? i : i + 1;
  }
};

const getMedian = (list) => {
  const n = list.length;
  const mid = Math.floor(n / 2);
  list.sort((a, b) => a - b);

  if (n % 2 === 0) {
    return (list[mid] + list[mid - 1]) / 2;
  }

  return list[mid];
};
