/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const CHAR_DIFF = 97;
  const hash = Array(26).fill(0);
  let res = '';

  for (let c of s) {
    const code = c.charCodeAt() - CHAR_DIFF;
    hash[code]++;
  }

  while (res.length !== s.length) {
    for (let i = 0; i < hash.length; i++) {
      if (hash[i] > 0) {
        res += String.fromCharCode(i + CHAR_DIFF);
      }
      hash[i]--;
    }
    for (let i = hash.length - 1; i >= 0; i--) {
      if (hash[i] > 0) {
        res += String.fromCharCode(i + CHAR_DIFF);
      }
      hash[i]--;
    }
  }

  return res;
};
