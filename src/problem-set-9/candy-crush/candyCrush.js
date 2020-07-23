/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function (board) {
  const m = board.length;
  const n = board[0].length;
  let found = true;

  while (found) {
    found = false;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n - 2; j++) {
        const v = Math.abs(board[i][j]);

        if (
          v > 0 &&
          v === Math.abs(board[i][j + 1]) &&
          v === Math.abs(board[i][j + 2])
        ) {
          board[i][j] = board[i][j + 1] = board[i][j + 2] = -v;
          found = true;
        }
      }
    }

    for (let i = 0; i < m - 2; i++) {
      for (let j = 0; j < n; j++) {
        const v = Math.abs(board[i][j]);

        if (
          v > 0 &&
          v === Math.abs(board[i + 1][j]) &&
          v === Math.abs(board[i + 2][j])
        ) {
          board[i][j] = board[i + 1][j] = board[i + 2][j] = -v;
          found = true;
        }
      }
    }

    for (let j = 0; j < n; j++) {
      let r = m - 1;

      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] >= 0) {
          board[r][j] = board[i][j];
          r--;
        }
      }

      for (let i = r; i >= 0; i--) {
        board[i][j] = 0;
      }
    }
  }

  return board;
};
