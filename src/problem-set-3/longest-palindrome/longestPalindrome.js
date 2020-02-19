/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let max = 0;
  const hash = {};
  for (let c of s) {
    hash[c] = (hash[c] || 0) + 1;
    if (hash[c] % 2 === 0) {
      max += 2;
    }
  }

  return max < s.length ? max + 1 : max;
};
