/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num <= 0) return false;
  let sum = 0;
  for (let i = 1; i ** 2 <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i ** 2 !== num) {
        sum += num / i;
      }
    }
  }

  return sum - num === num;
};
