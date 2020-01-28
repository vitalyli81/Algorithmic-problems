/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  if (!nums) return null;
  const permutations = [];
  if (nums.length === 0) {
    permutations.push([]);
    return permutations;
  }

  const first = nums[0];
  const remainder = nums.slice(1);
  const prevPerms = permute(remainder);
  prevPerms.forEach(prevPerm => {
    for (let i = 0; i <= prevPerm.length; i++) {
      permutations.push(insertAt(prevPerm, first, i));
    }
  });

  return permutations;
};

const insertAt = (nums, val, index) => {
  const start = nums.slice(0, index);
  start.push(val);
  const end = nums.slice(index);
  return [...start, ...end];
};
