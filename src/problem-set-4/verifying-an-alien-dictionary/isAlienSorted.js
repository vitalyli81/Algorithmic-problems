/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderHash = {};

  for (let i = 0; i < order.length; i++) {
    orderHash[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    if (orderHash[w1[0]] > orderHash[w2[0]]) {
      return false;
    } else if (orderHash[w1[0]] === orderHash[w2[0]]) {
      let j = 1;

      while (orderHash[w1[j]] === orderHash[w2[j]]) {
        j++;
      }

      if (w2[j] === undefined || orderHash[w1[j]] > orderHash[w2[j]]) {
        return false;
      }
    }
  }

  return true;
};
