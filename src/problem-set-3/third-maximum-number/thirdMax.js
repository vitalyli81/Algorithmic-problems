/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  let third = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === first || num === second || num === third) continue;
    if (num > first) {
      [first, second, third] = [num, first, second];
    } else if (num > second) {
      [second, third] = [num, second];
    } else if (num > third) {
      third = num;
    }
  }

  return third === Number.NEGATIVE_INFINITY ? first : third;
};
