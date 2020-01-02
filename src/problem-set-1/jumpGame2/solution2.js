/**
 * @param {number[]} nums
 * @return {number}
 */
export const jump = nums => {
  const memo = {};

  return jumps(nums, 0, nums.length - 1, memo);
};

const jumps = (nums, start, end, memo) => {
  if (start === end) return 0;
  if (memo[start] > 0) return memo[start];

  let min = end + 1;

  for (let i = start + 1; i <= end && i <= start + nums[start]; i++) {
    let jumpNum = jumps(nums, i, end, memo);

    if (jumpNum + 1 < min) {
      min = jumpNum + 1;
    }
  }

  memo[start] = min;

  return min;
};

export default jump;
