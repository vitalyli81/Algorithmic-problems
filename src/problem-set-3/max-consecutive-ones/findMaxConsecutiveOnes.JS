/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let tempMax = 0;
  nums.forEach(n => {
    if (n) {
      tempMax++;
      max = Math.max(max, tempMax);
    } else {
      tempMax = 0;
    }
  });
  return max;
};
