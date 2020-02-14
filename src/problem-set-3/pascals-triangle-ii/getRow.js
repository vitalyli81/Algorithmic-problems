/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const res = [1];
  for (let i = 1; i <= rowIndex; i++) {
    res.push(1);
    for (let j = i - 1; j > 0; j--) {
      res[j] = res[j - 1] + res[j];
    }
  }
  return res;
};
