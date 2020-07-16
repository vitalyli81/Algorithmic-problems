/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
  const memo = {};
  return topDown(steps, arrLen, 0, memo);
};

const topDown = (steps, arrLen, index, memo) => {
  if (index < 0 || index >= arrLen || steps < 0) return 0;
  if (steps === 0 && index === 0) return 1;

  const key = steps + ':' + index;

  if (memo[key] !== undefined) {
    return memo[key];
  }

  return (memo[key] =
    (topDown(steps - 1, arrLen, index, memo) +
      topDown(steps - 1, arrLen, index + 1, memo) +
      topDown(steps - 1, arrLen, index - 1, memo)) %
    1000000007);
};
