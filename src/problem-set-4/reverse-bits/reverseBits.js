/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = '';
  for (let c of n.toString(2)) {
    res = c + res;
  }
  while (res.length < 32) {
    res += '0';
  }

  return parseInt(res, 2);
};
