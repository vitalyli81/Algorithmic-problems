/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board.length) return;
  const rows = board.length;
  const cols = board[0].length;
  const LETTER_O = 'O';
  const LETTER_X = 'X';

  for (let i = 0; i < rows; i++) {
    if (board[i][0] === LETTER_O) {
      check(board, i, 0, rows, cols);
    }

    if (cols > 1 && board[i][cols - 1] === LETTER_O) {
      check(board, i, cols - 1, rows, cols);
    }
  }

  for (let j = 0; j < cols; j++) {
    if (board[0][j] === LETTER_O) {
      check(board, 0, j, rows, cols);
    }

    if (rows > 1 && board[rows - 1][j] === LETTER_O) {
      check(board, rows - 1, j, rows, cols);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === LETTER_O) {
        board[i][j] = LETTER_X;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === '1') {
        board[i][j] = LETTER_O;
      }
    }
  }
};

function check(grid, i, j, rows, cols) {
  if (grid[i][j] === 'O') {
    grid[i][j] = '1';

    if (i > 1) {
      check(grid, i - 1, j, rows, cols);
    }

    if (j > 1) {
      check(grid, i, j - 1, rows, cols);
    }

    if (i < rows - 1) {
      check(grid, i + 1, j, rows, cols);
    }

    if (j < cols - 1) {
      check(grid, i, j + 1, rows, cols);
    }
  }
}
