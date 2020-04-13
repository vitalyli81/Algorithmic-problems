/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  return Math.min([...new Set(candies)].length, candies.length / 2);
};

var distributeCandies = function (candies) {
  let count = 0;
  candies.sort((a, b) => a - b);
  for (let i = 1; i < candies.length && count < candies.length / 2; i++) {
    if (candies[i] > candies[i - 1]) {
      count++;
    }
  }

  return count;
};
