/**
 * @param {number[]} nums
 * @return {number}
 */
export const jump = nums => {
  return jumps(nums, 0, nums.length - 1);
};

const jumps = (nums, start, end) => {
  if (start === end) return 0;

  let min = end + 1;

  for (let i = start + 1; i <= end && i <= start + nums[start]; i++) {
    let jumpNum = jumps(nums, i, end);

    if (jumpNum + 1 < min) {
      min = jumpNum + 1;
    }
  }
  return min;
};

export default jump;
