/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  const hash = {};
  let res = '';

  for (let c of S) {
    hash[c] = 0;
  }

  for (let c of T) {
    if (hash[c] !== undefined) {
      hash[c]++;
    } else {
      res += c;
    }
  }

  for (let c of S) {
    if (hash[c] > 0) {
      res += c.repeat(hash[c]);
      hash[c] = 0;
    }
  }

  return res;
};
