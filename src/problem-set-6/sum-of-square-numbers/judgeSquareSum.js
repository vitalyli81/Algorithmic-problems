/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  if (c < 3) return true;
  const hash = {};

  for (let i = 0; i ** 2 <= c; i++) {
    const sqr = i ** 2;
    const compl = c - sqr;

    if (hash[compl] || sqr * 2 === c) {
      return true;
    }

    hash[i ** 2] = 1;
  }

  return false;
};
