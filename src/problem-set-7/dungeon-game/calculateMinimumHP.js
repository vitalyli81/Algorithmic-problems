/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const n = dungeon.length;
  const m = dungeon[0].length;
  const memo = Array(n);

  function dp(i, j) {
    if (i === n - 1 && j === m - 1) {
      return dungeon[i][j] >= 0 ? 1 : 1 - dungeon[i][j];
    }

    if (i >= n || j >= m) {
      return Infinity;
    }

    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }

    const res = Math.min(dp(i + 1, j), dp(i, j + 1));
    memo[i][j] = dungeon[i][j] - res >= 0 ? 1 : -(dungeon[i][j] - res);

    return memo[i][j];
  }

  for (let i = 0; i < n; i++) {
    memo[i] = new Array(m);
  }

  return dp(0, 0);
};
