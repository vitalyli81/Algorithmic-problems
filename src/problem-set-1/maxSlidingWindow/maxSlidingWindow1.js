/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const maxSlidingWindow = (nums, k) => {
  if (k === 1 || nums.length === 1) return nums;
  if (k === 0) return [];

  const results = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    let max = nums[i];

    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    results.push(max);
  }

  return results;
};

export default maxSlidingWindow;
