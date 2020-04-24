/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (s.length < k) return 0;
  const hash = {};

  for (let c of s) {
    hash[c] = (hash[c] || 0) + 1;
  }

  for (let [char, count] of Object.entries(hash)) {
    if (count < k) {
      const arr = s.split(char);
      let res = 0;

      for (let w of arr) {
        if (w) {
          res = Math.max(res, longestSubstring(w, k));
        }
      }
      return res;
    }
  }

  return s.length;
};
