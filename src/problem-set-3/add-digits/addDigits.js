/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return num % 9 === 0 && num > 0 ? 9 : num % 9;
};
