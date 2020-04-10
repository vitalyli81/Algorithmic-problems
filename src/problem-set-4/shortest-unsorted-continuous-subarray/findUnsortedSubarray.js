/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (!nums || !nums.length) return 0;
  let l = nums.length;
  let r = 0;
  const copy = [...nums];
  copy.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== copy[i]) {
      l = Math.min(l, i);
      r = Math.max(r, i);
    }
  }
  return r - l > 0 ? r - l + 1 : 0;
};
