/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = n;
  let fast = n;

  do {
    slow = sumOfPows(slow, 2);
    fast = sumOfPows(fast, 2);
    fast = sumOfPows(fast, 2);
  } while (slow !== fast);
  if (slow === 1) return true;
  return false;
};

function sumOfPows(n = 0, pow = 2) {
  let res = 0;
  while (n) {
    res += (n % 10) ** pow;
    n = parseInt(n / 10);
  }
  return res;
}
