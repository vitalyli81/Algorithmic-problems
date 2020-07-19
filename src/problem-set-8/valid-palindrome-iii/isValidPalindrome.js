/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function (s, k) {
  const longest = longestPalindrome(s);
  return s.length - longest <= k;
};

const longestPalindrome = (s) => {
  if (s.length < 2) return s.length;
  const memo = {};

  return lps(s, 0, s.length - 1, memo);
};

const lps = (s, i, j, memo) => {
  if (i > j) return 0;

  const key = i + ':' + j;

  if (memo[key] >= 0) return memo[key];

  if (i === j) return 1;

  if (s[i] === s[j]) {
    memo[key] = lps(s, i + 1, j - 1, memo) + 2;
  } else {
    memo[key] = Math.max(lps(s, i + 1, j, memo), lps(s, i, j - 1, memo));
  }

  return memo[key];
};
