/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  s = s.trim();
  if (!s) return 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (i === 0 || (c !== ' ' && s[i - 1] === ' ')) {
      count++;
    }
  }
  return count;
};
