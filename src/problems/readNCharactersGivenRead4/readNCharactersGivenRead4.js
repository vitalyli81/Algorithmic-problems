/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */

  const tempBuf = [];

  return function(buf, n) {
    while (buf.length < n) {
      if (tempBuf.length === 0) {
        read4(tempBuf);
      }
      if (tempBuf.length === 0) {
        break;
      }
      if (tempBuf.length > 0) {
        buf.push(tempBuf.shift());
      }
    }

    return buf.length;
  };
};
