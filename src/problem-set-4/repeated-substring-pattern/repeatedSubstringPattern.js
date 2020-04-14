/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const doubleS = s + s;
  return doubleS.substring(1, doubleS.length - 1).includes(s);
};
