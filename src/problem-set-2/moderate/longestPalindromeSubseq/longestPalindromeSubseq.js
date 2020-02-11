/**
 * @param {string} s
 * @return {string}
 */
const longestPalindromeSubseq = s => {
  const memo = {};
  if (s.length < 2) return s.length;
  return helper(s, 0, s.length - 1, memo);
};

const helper = (str, i, j, memo) => {
  if (i > j) return 0;
  const key = `${i}-${j}`;
  if (memo[key] >= 0) {
    return memo[key];
  }
  if (i === j) return 1;
  if (str[i] === str[j]) {
    memo[key] = helper(str, i + 1, j - 1, memo) + 2;
  } else {
    memo[key] = Math.max(
      helper(str, i + 1, j, memo),
      helper(str, i, j - 1, memo)
    );
  }

  return memo[key];
};
