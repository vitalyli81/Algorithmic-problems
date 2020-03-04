/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  for (let a = 0; a < n; a++) {
    const b = n - a;
    if (!String(a).includes('0') && !String(b).includes('0')) {
      return [a, b];
    }
  }
  return [n];
};
