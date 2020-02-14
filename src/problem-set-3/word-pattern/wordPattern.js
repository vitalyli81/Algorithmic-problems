/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const len = pattern.length;
  const strArray = str.split(' ');
  if (len !== strArray.length) return false;
  if (len === 1) return true;
  const hashPat = {};
  const hashStr = {};
  for (let i = 0; i < len; i++) {
    const patternVal = pattern[i];
    const strVal = strArray[i];
    if (
      (hashPat[patternVal] !== undefined && hashPat[patternVal] !== strVal) ||
      (hashStr[strVal] !== undefined && hashStr[strVal] !== patternVal)
    ) {
      return false;
    }
    hashPat[patternVal] = strVal;
    hashStr[strVal] = patternVal;
  }
  return true;
};
