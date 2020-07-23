/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const memo = [];
  const durations = [1, 7, 30];
  const dp = (i) => {
    if (i >= days.length) return 0;
    if (memo[i] !== undefined) return memo[i];
    let res = Infinity;

    let j = i;

    for (let k = 0; k < 3; k++) {
      while (j < days.length && days[j] < days[i] + durations[k]) {
        j++;
      }

      res = Math.min(res, dp(j) + costs[k]);
    }

    return (memo[i] = res);
  };

  return dp(0);
};
