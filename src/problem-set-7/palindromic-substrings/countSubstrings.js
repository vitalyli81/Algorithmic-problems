/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let count = 1;

  function checkPalindrome(s, start, end) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      count++;
      start--;
      end++;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    checkPalindrome(s, i, i);
    checkPalindrome(s, i, i + 1);
  }

  return count;
};
