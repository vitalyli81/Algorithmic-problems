/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const curPrice = prices[i];
    minPrice = Math.min(minPrice, curPrice);
    maxProfit = Math.max(maxProfit, curPrice - minPrice);
  }
  return maxProfit;
};
