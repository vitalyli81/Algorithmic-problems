/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let step1 = 0;
  let step2 = 0;

  for (let i = 0; i < cost.length; i++) {
    const step0 = cost[i] + Math.min(step1, step2);
    step2 = step1;
    step1 = step0;
  }

  return Math.min(step1, step2);
};
