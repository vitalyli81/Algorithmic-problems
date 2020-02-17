/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let res = '';
  let reversed = '';
  for (let c of s) {
    if (c === ' ') {
      res += res ? ` ${reversed}` : `${reversed}`;
      reversed = '';
    } else {
      reversed = `${c}${reversed}`;
    }
  }
  if (reversed.trim()) {
    res += ` ${reversed}`;
  }

  return res.trim();
};
