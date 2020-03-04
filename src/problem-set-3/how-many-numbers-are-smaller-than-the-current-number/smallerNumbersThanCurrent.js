/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const count = Array(101).fill(0);
  const result = Array(nums.length);

  nums.forEach(n => {
    count[n]++;
  });

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      res[i] = 0;
    } else {
      result[i] = count[nums[i] - 1];
    }
  }

  return result;
};
