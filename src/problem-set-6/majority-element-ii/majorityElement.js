/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const hash = {};
  const res = [];
  const times = Math.trunc(nums.length / 3);

  for (let n of nums) {
    hash[n] = (hash[n] || 0) + 1;
  }

  for (let [key, value] of Object.entries(hash)) {
    if (value > times) {
      res.push(key);
    }
  }

  return res;
};
