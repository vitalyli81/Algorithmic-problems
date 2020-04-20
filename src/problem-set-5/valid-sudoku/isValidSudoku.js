/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const hash = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        continue;
      }
      const val = board[i][j];
      const row = `r${i}-v${val}`;
      const col = `c${j}-v${val}`;
      const box = `b${Math.trunc(i / 3)}-${Math.trunc(j / 3)}-v${val}`;

      if (hash[row] || hash[col] || hash[box]) {
        return false;
      }

      hash[row] = 1;
      hash[col] = 1;
      hash[box] = 1;
    }
  }

  return true;
};
