/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += Math.pow(26, i) * (s[s.length - 1 - i].charCodeAt() - 64);
  }
  return res;
};
