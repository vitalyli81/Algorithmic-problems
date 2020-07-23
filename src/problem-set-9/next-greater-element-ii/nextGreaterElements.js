/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const stack = [];
  const res = Array(n).fill(-1);

  for (let i = 0; i < 2 * n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      res[stack.pop()] = nums[i % n];
    }

    stack.push(i % n);
  }

  return res;
};
