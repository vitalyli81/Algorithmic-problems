/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  for (let c of n.toString(2)) {
    if (c === '1') {
      count++;
    }
  }
  return count;
};
