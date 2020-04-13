/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let count = 0;
  let max = 0;
  const hash = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;
    if (hash[count] !== undefined) {
      max = Math.max(max, i - hash[count]);
    } else {
      hash[count] = i;
    }
  }

  return max;
};
