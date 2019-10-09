/**
 * @param {number[]} nums
 * @return {number}
 */
export const jump = nums => {
  let frontierSize = 0;
  let edgesSize = 0;
  let level = 0;

  for (let i = 0; i < nums.length; i++) {
    frontierSize = Math.max(frontierSize, i + nums[i]);
    if (i === nums.length - 1) return level;
    if (i === edgesSize) {
      level++;
      edgesSize = frontierSize;
    }
  }

  return level;
};

export default jump;
