/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalindromeRange(s, l + 1, r) || isPalindromeRange(s, l, r - 1);
    }
    l++;
    r--;
  }
  return true;
};

const isPalindromeRange = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};
