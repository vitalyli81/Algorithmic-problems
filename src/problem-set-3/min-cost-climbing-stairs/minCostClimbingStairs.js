/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const memo = {
    0: cost[0]
  };
  return Math.min(
    dp(cost, cost.length - 1, memo),
    dp(cost, cost.length - 2, memo)
  );
};

const dp = (cost, i, memo) => {
  if (i == 0 || i == 1) return cost[i];
  if (memo[i] >= 0) {
    return memo[i];
  }
  return (memo[i] = Math.min(
    dp(cost, i - 1, memo) + cost[i],
    dp(cost, i - 2, memo) + cost[i]
  ));
};
