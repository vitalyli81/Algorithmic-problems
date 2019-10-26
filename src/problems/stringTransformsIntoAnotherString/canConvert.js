/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;

  const sMap = {};

  for (let i = 0; i < str1.length; i++) {
    const c1 = str1[i];
    const c2 = str2[i];

    if ((sMap[c1] || c2) != c2) return false;

    sMap[c1] = c2;
  }

  return new Set(str2).size < 26;
};
