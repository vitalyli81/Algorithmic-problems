/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let count = shift.reduce(
    (acc, s) => (s[0] === 0 ? acc - s[1] : acc + s[1]),
    0
  );
  let curShift = count > 0 ? 1 : 0;
  let res = s;
  count = Math.abs(count) % s.length;

  if (count === 0) return res;

  while (count--) {
    if (curShift === 0) {
      res = res.substring(1) + res[0];
    } else {
      res = res[res.length - 1] + res.substring(0, res.length - 1);
    }
  }

  return res;
};
