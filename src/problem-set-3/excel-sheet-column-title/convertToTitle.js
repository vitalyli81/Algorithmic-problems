/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let res = '';
  while (n > 0) {
    let remainder = n % 26;
    let rest = Math.trunc(n / 26);
    if (remainder === 0) {
      remainder = 26;
      rest--;
    }
    res = String.fromCharCode(64 + remainder) + res;
    n = rest;
  }
  return res;
};
