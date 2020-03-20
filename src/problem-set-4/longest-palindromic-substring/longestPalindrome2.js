/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const len = Math.max(
      expandAroundCenter(i, i, s),
      expandAroundCenter(i, i + 1, s)
    );

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};

const expandAroundCenter = (i, j, s) => {
  let left = i;
  let right = j;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
};
