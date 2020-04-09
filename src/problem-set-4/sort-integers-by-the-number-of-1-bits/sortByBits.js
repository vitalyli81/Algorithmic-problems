/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
  return arr;
};

function countBits(n) {
  let count = 0;

  for (let c of n.toString(2)) {
    count += c === '1' ? 1 : 0;
  }

  return count;
}
