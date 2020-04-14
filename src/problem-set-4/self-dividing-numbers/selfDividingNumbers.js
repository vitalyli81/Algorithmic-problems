/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const res = [];

  for (let i = left; i <= right; i++) {
    if (selfDividing(i)) {
      res.push(i);
    }
  }

  return res;
};

function selfDividing(n) {
  let x = n;
  while (x > 0) {
    let d = x % 10;
    x = Math.trunc(x / 10);
    if (d === 0 || n % d > 0) {
      return false;
    }
  }

  return true;
}
