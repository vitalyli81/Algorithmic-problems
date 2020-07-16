/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  if (!nums || !nums.length) return null;

  const len = nums.length;
  const sum = Array(len + 1).fill(0);
  const left = Array(len).fill(0);
  const right = Array(len).fill(0);
  const res = [0, 0, 0];
  let max = 0;

  for (let i = 0; i < len; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }

  for (let i = k, leftMax = sum[k] - sum[0]; i < len; i++) {
    if (sum[i + 1] - sum[i - k + 1] > leftMax) {
      left[i] = i - k + 1;
      leftMax = sum[i + 1] - sum[i - k + 1];
    } else {
      left[i] = left[i - 1];
    }
  }

  right[len - k] = len - k;
  for (let i = len - k - 1, rightMax = sum[len] - sum[len - k]; i >= 0; i--) {
    if (sum[i + k] - sum[i] >= rightMax) {
      right[i] = i;
      rightMax = sum[i + k] - sum[i];
    } else {
      right[i] = right[i + 1];
    }
  }

  for (let i = k; i <= len - 2 * k; i++) {
    const l = left[i - 1];
    const r = right[i + k];
    const total =
      sum[l + k] - sum[l] + (sum[i + k] - sum[i]) + (sum[r + k] - sum[r]);

    if (total > max) {
      max = total;
      res[0] = l;
      res[1] = i;
      res[2] = r;
    }
  }

  return res;
};
