/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  for (let prime of [2, 3, 5]) {
    while (num % prime === 0) {
      num /= prime;
    }
  }

  return num === 1;
};
