/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const memo = {};
  return dfs(coins, amount, memo);
};

const dfs = (coins, amount, memo) => {
  if (amount < 0) return -1;
  if (amount === 0) return 0;
  if (memo[amount - 1]) return memo[amount - 1];
  let min = Number.MAX_VALUE;
  coins.forEach(coin => {
    const res = dfs(coins, amount - coin, memo);
    if (res >= 0 && res < min) {
      min = res + 1;
    }
  });

  return (memo[amount - 1] = min === Number.MAX_VALUE ? -1 : min);
};
