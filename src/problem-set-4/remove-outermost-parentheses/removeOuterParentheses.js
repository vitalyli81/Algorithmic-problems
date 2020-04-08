/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let count = 0;
  let res = '';

  for (let c of S) {
    if (c === '(' && count++ > 0) {
      res += c;
    }

    if (c === ')' && count-- > 1) {
      res += c;
    }
  }

  return res;
};
