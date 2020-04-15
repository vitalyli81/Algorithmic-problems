/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return '0';
  let res = '';
  let n = Math.abs(num);

  while (n) {
    res = (n % 7) + res;
    n = Math.trunc(n / 7);
  }

  return num < 0 ? '-' + res : res;
};
