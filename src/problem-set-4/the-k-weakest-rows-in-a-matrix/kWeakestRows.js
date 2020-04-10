/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const indexes = [];
  const res = [];

  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[0].length; j++) {
      count += mat[i][j];
    }
    indexes.push({ i, count });
  }

  indexes.sort((a, b) => {
    const cmp = a.count - b.count;
    if (cmp !== 0) return cmp;
    return a.i - b.i;
  });

  for (let i = 0; i < k; i++) {
    res.push(indexes[i].i);
  }

  return res;
};
