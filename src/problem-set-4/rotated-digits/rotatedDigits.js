/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (isValid(i)) count++;
  }

  return count;
};

function isValid(n) {
  let valid = false;
  while (n) {
    const a = n % 10;
    if (a === 3 || a === 4 || a === 7) return false;
    if (a === 2 || a === 5 || a === 6 || a === 9) {
      valid = true;
    }
    n = Math.trunc(n / 10);
  }

  return valid;
}
