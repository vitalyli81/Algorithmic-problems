/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const m = board.length;
  const n = board[0].length;
  const front = [click];

  while (front.length) {
    const [row, col] = front.pop();

    if (board[row][col] === 'M') {
      board[row][col] = 'X';
    } else {
      let count = 0;

      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) continue;
          const r = row + i;
          const c = col + j;

          if (r < 0 || c < 0 || r >= m || c >= n) continue;

          if (board[r][c] === 'M' || board[r][c] === 'X') {
            count++;
          }
        }
      }

      if (count > 0) {
        board[row][col] = String(count);
      } else {
        board[row][col] = 'B';

        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) continue;
            const r = row + i;
            const c = col + j;

            if (r < 0 || c < 0 || r >= m || c >= n) continue;

            if (board[r][c] === 'E') {
              front.push([r, c]);
              board[r][c] = 'B';
            }
          }
        }
      }
    }
  }

  return board;
};
