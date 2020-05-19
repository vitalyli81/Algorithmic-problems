/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
  const stones = [a, b, c];
  stones.sort((a, b) => a - b);

  if (stones[2] - stones[0] === 2) {
    return [0, 0];
  }

  return [
    Math.min(stones[1] - stones[0], stones[2] - stones[1]) <= 2 ? 1 : 2,
    stones[2] - stones[0] - 2,
  ];
};
