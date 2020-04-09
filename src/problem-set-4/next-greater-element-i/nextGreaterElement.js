/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const hash = {};
  const stack = [];

  nums2.forEach((n) => {
    while (stack.length && stack[stack.length - 1] < n) {
      hash[stack.pop()] = n;
    }
    stack.push(n);
  });

  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i];
    nums1[i] = hash[n1] || -1;
  }

  return nums1;
};
