/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const L = Array(len);
  const R = Array(len);
  const res = [];

  L[0] = 1;
  R[len - 1] = 1;

  for (let i = 1; i < len; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }

  for (let i = len - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < len; i++) {
    res.push(L[i] * R[i]);
  }

  return res;
};
