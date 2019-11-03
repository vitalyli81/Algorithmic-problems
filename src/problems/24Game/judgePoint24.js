/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  if (nums.length === 1) {
    const val = Math.round(nums[0] * 100) / 100;
    return val == 24;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      const smallest = Math.min(i, j);
      const largest = Math.max(i, j);
      const iVal = nums[i];
      const jVal = nums[j];
      const newNums = nums.slice();
      let isValid = false;
      newNums.splice(largest, 1);
      newNums.splice(smallest, 1);
      isValid = isValid || judgePoint24([iVal + jVal, ...newNums]);
      isValid = isValid || judgePoint24([iVal - jVal, ...newNums]);
      isValid = isValid || judgePoint24([iVal * jVal, ...newNums]);
      if (jVal !== 0) {
        isValid = isValid || judgePoint24([iVal / jVal, ...newNums]);
      }
      if (isValid) {
        return true;
      }
    }
  }

  return false;
};
