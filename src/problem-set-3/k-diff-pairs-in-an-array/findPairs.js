/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (!nums.length || k < 0) return 0;
  const hash = {};
  let count = 0;

  nums.forEach(n => {
    hash[n] = (hash[n] || 0) + 1;
  });

  for (let [key, value] of Object.entries(hash)) {
    if (k === 0) {
      if (value) count++;
    } else {
      if (hash[1 * key + k]) count++;
    }
  }
  return count;
};
