/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  if (!ops || !ops.length) {
    return m * n;
  }
  let row = Infinity;
  let col = Infinity;

  ops.forEach(([r, c]) => {
    row = Math.min(row, r);
    col = Math.min(col, c);
  });

  return row * col;
};
