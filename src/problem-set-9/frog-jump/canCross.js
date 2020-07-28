/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  const memo = {};

  return helper(stones, 0, 0, memo);
};

const helper = (stones, idx, size, memo) => {
  const key = idx + ':' + size;

  if (memo[key] !== undefined) return memo[key];

  for (let i = idx + 1; i < stones.length; i++) {
    const diff = stones[i] - stones[idx];

    if (diff >= size - 1 && diff <= size + 1) {
      if (helper(stones, i, diff, memo)) {
        memo[key] = true;
        return true;
      }
    }
  }

  memo[key] = idx === stones.length - 1;
  return memo[key];
};
