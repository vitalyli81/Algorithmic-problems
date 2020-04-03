/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num === 1) return true;
  if (num < 4) return false;

  while (num > 4) {
    if (num % 4 === 0) {
      num /= 4;
    } else {
      return false;
    }
  }

  return num === 4;
};
