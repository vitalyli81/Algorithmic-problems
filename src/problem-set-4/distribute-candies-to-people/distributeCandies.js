/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const res = Array(num_people).fill(0);

  for (let given = 0; candies >= 0; candies -= given) {
    res[given % num_people] += Math.min(candies, ++given);
  }
  return res;
};
