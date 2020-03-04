/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count = 0;
  let res = 0;
  for (let c of s) {
    count += c === 'L' ? 1 : -1;
    if (count === 0) {
      res++;
    }
  }
  return res;
};
