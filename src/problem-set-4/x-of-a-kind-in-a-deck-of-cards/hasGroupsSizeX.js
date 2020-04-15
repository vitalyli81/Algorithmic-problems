/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const hash = {};
  let d = -1;

  for (let card of deck) {
    hash[card] = (hash[card] || 0) + 1;
  }

  for (let count of Object.values(hash)) {
    if (d === -1) {
      d = count;
    } else {
      d = gcd(d, count);
    }
  }
  return d > 1;
};

function gcd(x, y) {
  return x === 0 ? y : gcd(y % x, x);
}
