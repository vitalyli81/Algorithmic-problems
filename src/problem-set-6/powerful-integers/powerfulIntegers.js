/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  const hash = {};

  for (let i = 1; i <= bound; i *= x) {
    for (let j = 1; j + i <= bound; j *= y) {
      hash[j + i] = 1;
      if (y === 1) break;
    }
    if (x === 1) break;
  }

  return Object.keys(hash);
};
