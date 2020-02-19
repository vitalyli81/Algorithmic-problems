/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let min1 = Infinity;
  let min2 = Infinity;
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  nums.forEach(num => {
    if (num <= min1) {
      [min1, min2] = [num, min1];
    } else if (num <= min2) {
      min2 = num;
    }
    if (num >= max1) {
      [max1, max2, max3] = [num, max1, max2];
    } else if (num >= max2) {
      [max2, max3] = [num, max2];
    } else if (num >= max3) {
      max3 = num;
    }
  });

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};
