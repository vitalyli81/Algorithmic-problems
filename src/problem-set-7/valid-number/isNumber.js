/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim();
  let numSeen = false;
  let numAfterE = true;
  let eSeen = false;
  let pointSeen = false;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if ('0' <= c && c <= '9') {
      numSeen = true;
      numAfterE = true;
    } else if (c === 'e') {
      if (eSeen || !numSeen) {
        return false;
      }
      eSeen = true;
      numAfterE = false;
    } else if (c === '.') {
      if (pointSeen || eSeen) {
        return false;
      }
      pointSeen = true;
    } else if (c === '-' || c === '+') {
      if (i > 0 && s[i - 1] !== 'e') {
        return false;
      }
    } else {
      return false;
    }
  }

  return numSeen && numAfterE;
};
