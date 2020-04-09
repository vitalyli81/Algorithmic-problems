/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let count = 0;
  let binX = x.toString(2);
  let binY = y.toString(2);
  let i = binX.length - 1;
  let j = binY.length - 1;

  while (i >= 0 || j >= 0) {
    if (
      (binX[i] !== binY[j] && i >= 0 && j >= 0) ||
      (binX[i] === '1' && j < 0) ||
      (binY[j] === '1' && i < 0)
    ) {
      count++;
    }
    i--;
    j--;
  }

  return count;
};
