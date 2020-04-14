/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        return (
          capturePawns(board, i, j, 0, 1) +
          capturePawns(board, i, j, 0, -1) +
          capturePawns(board, i, j, 1, 0) +
          capturePawns(board, i, j, -1, 0)
        );
      }
    }
  }

  return 0;
};

function capturePawns(board, r, c, dirR, dirC) {
  while (
    r >= 0 &&
    r < board.length &&
    c >= 0 &&
    c < board[r].length &&
    board[r][c] !== 'B'
  ) {
    if (board[r][c] === 'p') {
      return 1;
    }

    r += dirR;
    c += dirC;
  }

  return 0;
}
