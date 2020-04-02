/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const hash = {};
  while (true) {
    let k = n;
    n = 0;
    while (k) {
      n += (k % 10) ** 2;
      k = Math.trunc(k / 10);
    }
    if (n === 1) {
      return true;
    }
    if (n in hash) {
      return false;
    }
    hash[n] = 1;
  }
};
