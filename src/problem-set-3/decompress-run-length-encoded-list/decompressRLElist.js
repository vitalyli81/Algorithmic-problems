/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  const res = [];
  for (let i = 1; i < nums.length; i += 2) {
    const freq = nums[i - 1];
    const val = nums[i];
    for (let j = 0; j < freq; j++) {
      res.push(val);
    }
  }

  return res;
};
