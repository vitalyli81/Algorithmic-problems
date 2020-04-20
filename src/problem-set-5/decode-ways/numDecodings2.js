/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s.length) return 0;
  const len = s.length;
  const dp = Array(len + 1).fill(0);

  dp[0] = 1;
  dp[1] = s[0] ? 1 : 0;

  for (let i = 2; i <= len; i++) {
    if (s[i - 1]) {
      dp[i] += dp[i - 1];

      if (s[i - 1] + s[i - 2] < 27) {
        dp[i] += dp[i - 2];
      }
    }
  }

  return dp[len];
};
