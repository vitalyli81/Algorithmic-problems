/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderHash = { undefined: Number.MIN_VALUE };

  for (let i = 0; i < order.length; i++) {
    orderHash[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    const len = Math.max(words[i].length, words[i + 1].length);

    for (let j = 0; j < len; j++) {
      if (words[i + 1] === undefined) return true;
      const c1 = orderHash[words[i][j]];
      const c2 = orderHash[words[i + 1][j]];

      if (c2 < c1) {
        return false;
      } else if (c2 > c1) {
        break;
      }
    }
  }

  return true;
};
