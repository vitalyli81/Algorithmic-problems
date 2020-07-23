/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p === '*' || p === s) return true;
  if (!p || !s) return false;
  return dp(0, 0, s, p, {});
};

const dp = (i, j, s, p, memo) => {
  const key = i + ':' + j;
  if (memo[key] !== undefined) return memo[key];

  if (i === s.length) {
    while (j < p.length && p[j] === '*') {
      j++;
    }

    return j === p.length;
  }

  if (s[i] === p[j] || p[j] === '?') {
    memo[key] = dp(i + 1, j + 1, s, p, memo);
  } else if (p[j] === '*') {
    memo[key] = dp(i, j + 1, s, p, memo) || dp(i + 1, j, s, p, memo);
  } else {
    memo[key] = false;
  }

  return memo[key];
};
