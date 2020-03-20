/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  const indexes = {
    start: 0,
    end: 0
  };
  const dp = {};

  dfs(0, s.length - 1, s, dp, indexes);

  return s.substring(indexes.start, indexes.end + 1);
};

const dfs = (i, j, s, dp, indexes) => {
  const key = `${i}-${j}`;

  if (dp[key] !== undefined) {
    return dp[key] === true;
  }

  if (i === j) {
    return (dp[key] = true);
  }

  if (s[i] === s[j] && (i + 1 === j || dfs(i + 1, j - 1, s, dp, indexes))) {
    if (indexes.end - indexes.start < j - i) {
      indexes.start = i;
      indexes.end = j;
    }
    return (dp[key] = true);
  }

  dp[key] = false;
  dfs(i, j - 1, s, dp, indexes);
  dfs(i + 1, j, s, dp, indexes);

  return false;
};
