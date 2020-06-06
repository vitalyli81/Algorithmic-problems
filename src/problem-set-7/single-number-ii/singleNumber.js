/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hash = {};
  nums.forEach((n) => (hash[n] = (hash[n] || 0) + 1));
  hash = Object.entries(hash);

  for (let i = 0; i < hash.length; i++) {
    if (hash[i][1] === 1) {
      return hash[i][0];
    }
  }
};
