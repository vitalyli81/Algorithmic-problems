/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let sum = 0;
  const len = costs.length / 2;

  for (let i = 0; i < len; i++) {
    sum += costs[i][0] + costs[i + len][1];
  }

  return sum;
};
