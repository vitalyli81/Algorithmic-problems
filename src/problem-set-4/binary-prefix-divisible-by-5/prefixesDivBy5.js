/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const res = Array(A.length);
  let sum = 0;

  A.forEach((v, i) => {
    sum = (sum * 2 + v) % 5;
    res[i] = sum === 0;
  });

  return res;
};
