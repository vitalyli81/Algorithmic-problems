/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = candies.reduce((a, n) => (n > a ? n : a), 0);
  const res = [];

  for (let n of candies) {
    res.push(n + extraCandies >= max);
  }

  return res;
};
