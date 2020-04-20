/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let open = 0;
  let close = 0;

  for (let c of s) {
    if (c === '(') {
      open++;
      close++;
    } else if (c === ')') {
      if (open > 0) {
        open--;
      }
      close--;
    } else {
      if (open > 0) {
        open--;
      }
      close++;
    }
    if (close < 0) return false;
  }

  return open === 0;
};
