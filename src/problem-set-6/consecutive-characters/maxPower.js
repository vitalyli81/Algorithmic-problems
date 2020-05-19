/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  if (!s) return 0;
  let max = 1;
  let count = 1;
  let cur = s[0];

  for (let i = 1; i < s.length; i++) {
    const c = s[i];

    if (c === cur) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 1;
      cur = s[i];
    }
  }

  return max;
};
