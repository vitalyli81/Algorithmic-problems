/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  if (x >= 0 && x < 10) {
    return true;
  }
  let reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  return x === reverseNum || x === Math.trunc(reverseNum / 10);
};
