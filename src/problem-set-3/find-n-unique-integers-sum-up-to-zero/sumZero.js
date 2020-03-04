/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  if (n == 1) return [0];
  const res = [];
  let sum = 0;

  for (let i = 1; i < n; i++) {
    sum += i;
    res.push(i);
  }
  res.push(-1 * sum);

  return res;
};
