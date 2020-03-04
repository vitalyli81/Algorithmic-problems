/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let res = '';
  const charOffset = 96;
  for (let i = 0; i < s.length; i++) {
    let num = Number(s[i]);
    if (s[i + 2] === '#') {
      num = Number(s[i] + s[i + 1]);
      i += 2;
    }
    res += String.fromCharCode(charOffset + num);
  }
  return res;
};
