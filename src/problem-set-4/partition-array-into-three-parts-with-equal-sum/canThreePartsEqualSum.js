/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  const avg = parseInt(A.reduce((acc, v) => acc + v, 0) / 3);
  let sum = 0;
  let count = 0;

  A.forEach((n, i) => {
    sum += n;
    if (sum === avg) {
      count++;
      sum = 0;
    }
  });
  return count >= 3 && sum % 2 === 0;
};
