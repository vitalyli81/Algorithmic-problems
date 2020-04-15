/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const res = Array(len);
  let R = 1;

  res[0] = 1;

  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  for (let i = len - 1; i >= 0; i--) {
    res[i] *= R;
    R *= nums[i];
  }

  return res;
};
