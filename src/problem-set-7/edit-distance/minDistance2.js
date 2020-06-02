/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const m = word1.length;
  const n = word2.length;
  const dp = Array(m + 1);

  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1);
    dp[i][0] = i;
  }

  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word1[i] === word2[j]) {
        dp[i + 1][j + 1] = dp[i][j];
      } else {
        const insert = dp[i][j + 1];
        const del = dp[i + 1][j];
        const replace = dp[i][j];
        dp[i + 1][j + 1] = Math.min(insert, del, replace) + 1;
      }
    }
  }

  return dp[m][n];
};
