/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let count = 0;
  while (count < n) {
    count++;
    n -= count;
  }
  return count;
};
