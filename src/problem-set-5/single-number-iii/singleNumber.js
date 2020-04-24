/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const hash = {};
  const res = [];

  for (let n of nums) {
    hash[n] = (hash[n] || 0) + 1;
  }

  for (let [key, val] of Object.entries(hash)) {
    if (val === 1) {
      res.push(key);
    }
  }

  return res;
};
