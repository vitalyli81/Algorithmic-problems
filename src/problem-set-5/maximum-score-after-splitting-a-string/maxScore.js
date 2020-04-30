/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  if (!s) return 0;
  let zeros = 0;
  let ones = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      ones++;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '1') {
      ones--;
    } else {
      zeros++;
    }

    max = Math.max(max, zeros + ones);
  }

  return max;
};
