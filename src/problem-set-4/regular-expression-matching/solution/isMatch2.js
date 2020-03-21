/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const memo = {};
  return dp(0, 0, s, p, memo);
};

const dp = (i, j, s, p, memo) => {
  const key = `${i}-${j}`;
  if (memo[key] !== undefined) return memo[key];
  let ans = false;
  if (j === p.length) {
    ans = i === s.length;
  } else {
    const firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.');

    if (j + 1 < p.length && p[j + 1] === '*') {
      ans =
        dp(i, j + 2, s, p, memo) || (firstMatch && dp(i + 1, j, s, p, memo));
    } else {
      ans = firstMatch && dp(i + 1, j + 1, s, p, memo);
    }
  }
  memo[key] = ans;
  return ans;
};
