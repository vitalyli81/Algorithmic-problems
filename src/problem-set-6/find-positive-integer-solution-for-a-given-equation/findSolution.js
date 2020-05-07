/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
  let x = 1;
  let y = 100;
  const res = [];

  while (x < 101 && y > 0) {
    const val = customfunction.f(x, y);
    if (val > z) {
      y--;
    } else if (val < z) {
      x++;
    } else {
      res.push([x++, y++]);
    }
  }

  return res;
};
