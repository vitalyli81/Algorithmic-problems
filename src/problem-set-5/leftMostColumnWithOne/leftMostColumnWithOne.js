/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();
  let i = 0;
  let j = cols - 1;
  let res = -1;

  while (i < rows && cols >= 0) {
    if (binaryMatrix.get(i, j)) {
      res = j;
      j--;
    } else {
      i++;
    }
  }

  return res;
};
