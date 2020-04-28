/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const memo = {};
  return lcs(text1, text2, 0, 0, memo);
};

function lcs(text1, text2, i, j, memo) {
  if (i >= text1.length || j > text2.length) {
    return 0;
  }

  const key = `${i}:${j}`;

  if (memo[key] !== undefined) {
    return memo[key];
  }

  if (text1[i] === text2[j]) {
    memo[key] = lcs(text1, text2, i + 1, j + 1, memo) + 1;
  } else {
    memo[key] = Math.max(
      lcs(text1, text2, i + 1, j, memo),
      lcs(text1, text2, i, j + 1, memo)
    );
  }

  return memo[key];
}
