/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const memo = {};

  return countWays(0, s, memo);
};

function countWays(i, s, memo) {
  let count = 0;
  if (i === s.length) return 1;
  if (memo[i] !== undefined) return memo[i];
  if (s[i] > 0) {
    count += countWays(i + 1, s, memo);

    if (s[i + 1] !== undefined && s[i] + s[i + 1] < 27) {
      count += countWays(i + 2, s, memo);
    }
  }

  return (memo[i] = count);
}
