/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const rowsA = [0, 0, 0];
  const colsA = [0, 0, 0];
  const rowsB = [0, 0, 0];
  const colsB = [0, 0, 0];
  let diagA1 = 0;
  let diagA2 = 0;
  let diagB1 = 0;
  let diagB2 = 0;

  for (let i = 0; i < moves.length; i++) {
    const row = moves[i][0];
    const col = moves[i][1];

    if (i % 2 === 0) {
      if (
        ++rowsA[row] === 3 ||
        ++colsA[col] === 3 ||
        (row === col && ++diagA1 === 3) ||
        (row + col === 2 && ++diagA2 === 3)
      ) {
        return 'A';
      }
    } else {
      if (
        ++rowsB[row] === 3 ||
        ++colsB[col] === 3 ||
        (row === col && ++diagB1 === 3) ||
        (row + col === 2 && ++diagB2 === 3)
      ) {
        return 'B';
      }
    }
  }

  return moves.length === 9 ? 'Draw' : 'Pending';
};
