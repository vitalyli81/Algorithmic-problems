/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const sorted = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return sorted == 0 ? '0' : sorted;
};
