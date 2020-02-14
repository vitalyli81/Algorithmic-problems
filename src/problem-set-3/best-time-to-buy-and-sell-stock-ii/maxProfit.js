/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const diff = prices[i + 1] - prices[i];
    if (diff > 0) {
      max += diff;
    }
  }

  return max;
};
