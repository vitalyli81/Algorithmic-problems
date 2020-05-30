/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = Array(Math.min(numRows, s.length)).fill('');
  let res = '';
  let dirDown = false;
  let row = 0;

  for (let c of s) {
    rows[row] += c;

    if (row === 0 || row === rows.length - 1) {
      dirDown = !dirDown;
    }

    row += dirDown ? 1 : -1;
  }

  for (let i = 0; i < rows.length; i++) {
    res += rows[i];
  }

  return res;
};
