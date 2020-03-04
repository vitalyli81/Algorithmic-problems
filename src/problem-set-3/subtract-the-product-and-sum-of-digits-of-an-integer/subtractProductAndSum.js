/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;

  while (n > 0) {
    product *= n % 10;
    sum += n % 10;
    n = Math.trunc(n / 10);
  }

  return product - sum;
};
