/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let res = 0;
  let i = 0;
  let isNegative = false;

  while (str[i] === ' ') {
    i++;
  }

  if (str[i] === '+' || str[i] === '-') {
    isNegative = str[i] === '-';
    i++;
  }

  for (; i < str.length; i++) {
    const code = str.charCodeAt(i) - 48;
    if (code < 0 || code > 9) {
      break;
    }
    res *= 10;
    res += code;
  }

  if (isNegative) {
    res = -res;
  }

  return Math.max(-(2 ** 31), Math.min(res, 2 ** 31 - 1));
};
