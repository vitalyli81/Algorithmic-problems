/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let open = 0;
  let close = 0;

  for (let c of s) {
    open += c === '(' ? 1 : -1;
    close += c !== ')' ? 1 : -1;
    if (close < 0) break;
    open = Math.max(open, 0);
  }

  return open === 0;
};
