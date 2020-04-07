/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const res = Array(2);
  const hash = Array(nums.length + 1).fill(0);

  nums.forEach((n) => {
    hash[n]++;
  });

  for (let i = 1; i < hash.length; i++) {
    if (hash[i] > 1) {
      res[0] = i;
    }
    if (hash[i] === 0) {
      res[1] = i;
    }
  }

  return res;
};
