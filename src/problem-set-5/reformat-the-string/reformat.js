/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const nums = [];
  const letters = [];
  let res = '';

  for (let c of s) {
    if (c.charCodeAt() < 97) {
      nums.push(c);
    } else {
      letters.push(c);
    }
  }

  if (Math.abs(nums.length - letters.length) > 1) {
    return res;
  }

  const big = nums.length > letters.length ? nums : letters;
  const small = nums.length > letters.length ? letters : nums;

  while (big.length) {
    res += big.pop();
    if (small.length) {
      res += small.pop();
    }
  }

  return res;
};
