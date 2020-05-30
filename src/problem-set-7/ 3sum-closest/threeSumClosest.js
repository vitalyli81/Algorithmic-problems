/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = nums[0] + nums[1] + nums[nums.length - 1];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];

      if (sum > target) {
        end--;
      } else {
        start++;
      }

      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
    }
  }

  return res;
};
