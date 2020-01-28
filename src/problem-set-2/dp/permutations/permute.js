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
  prevPerms.forEach(prev => {
    for (let i = 0; i <= prev.length; i++) {
      permutations.push([...prev.slice(0, i), first, ...prev.slice(i)]);
    }
  });

  return permutations;
};
