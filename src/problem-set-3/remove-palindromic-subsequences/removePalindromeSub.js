/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  if (!s) {
    return 0;
  }
  if (isPalindrome(s)) {
    return 1;
  }
  return 2;
};

var isPalindrome = function(s) {
  var reversed = s
    .split('')
    .reverse()
    .join('');

  return s.toLowerCase() == reversed.toLowerCase();
};
