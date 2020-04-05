/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let res = 0;
  let prev = 0;
  let cur = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      res += Math.min(cur, prev);
      prev = cur;
      cur = 1;
    } else {
      cur++;
    }
  }

  return res + Math.min(cur, prev);
};
