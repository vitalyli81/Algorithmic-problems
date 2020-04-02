/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 1 || n === 7) return true;
  var sum = 0;

  while (n > 9) {
    n = sumOfPows(n, 2);
  }

  return n == 1 || n == 7;
};

function sumOfPows(n = 0, pow = 2) {
  let res = 0;
  while (n) {
    res += (n % 10) ** pow;
    n = parseInt(n / 10);
  }
  return res;
}
