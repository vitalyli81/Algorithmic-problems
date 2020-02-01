/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const memo = {};
  return dfs(amount, coins, 0, memo);
};

const dfs = (amount, coins, index, memo) => {
  if (amount === 0) return 1;
  if (index >= coins.length || amount < 0) return 0;
  const key = `${amount}-${index}`;
  if (memo[key] >= 0) return memo[key];
  return (memo[key] =
    dfs(amount - coins[index], coins, index, memo) +
    dfs(amount, coins, index + 1, memo));
};
