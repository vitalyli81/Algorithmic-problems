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
  let ways = 0;
  const coinValue = coins[index];
  for (let i = 0; i * coinValue <= amount; i++) {
    const remainingAmount = amount - i * coinValue;
    ways += dfs(remainingAmount, coins, index + 1, memo);
  }

  return (memo[key] = ways);
};
