/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let count = 0;
  nums.forEach(n => {
    count += getLen(n) % 2 === 0 ? 1 : 0;
  });
  return count;
};

const getLen = n => {
  let len = 0;
  while (n > 0) {
    n = Math.trunc(n / 10);
    len++;
  }
  return len;
};
