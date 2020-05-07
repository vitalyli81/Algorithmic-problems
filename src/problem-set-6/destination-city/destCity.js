/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const hash = {};

  for (let [a, b] of paths) {
    hash[a] = b;
  }

  for (let [a, b] of Object.entries(hash)) {
    if (!hash[b]) {
      return b;
    }
  }

  return '';
};
