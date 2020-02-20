/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let sIdx = 0;
  let tIdx = 0;

  while (tIdx < t.length) {
    if (s[sIdx] === t[tIdx]) {
      sIdx++;
    }
    tIdx++;
  }

  return sIdx === s.length - 1;
};