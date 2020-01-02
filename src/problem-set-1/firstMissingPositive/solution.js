export const firstMissingPositive = nums => {
  if (!nums.length) return 1;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur > 0 && cur <= nums.length) {
      map[cur] = 1;
    }
  }
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!map[i]) return i;
  }
};

export default firstMissingPositive;
