/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let maxInd = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxInd]) {
      maxInd = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== maxInd && nums[i] * 2 > nums[maxInd]) {
      return -1;
    }
  }

  return maxInd;
};
