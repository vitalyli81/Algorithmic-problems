/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const memo = {};
  memo[nums.length - 1] = true;
  return canJumpFrom(0, nums, memo);
};

const canJumpFrom = (pos, nums, memo) => {
  if (memo[pos] !== undefined) return memo[pos];

  const nextJump = Math.min(nums.length - 1, pos + nums[pos]);

  for (let nextPos = pos + 1; nextPos <= nextJump; nextPos++) {
    if (canJumpFrom(nextPos, nums, memo)) {
      memo[pos] = true;
      return true;
    }
  }

  memo[pos] = false;
  return false;
};
