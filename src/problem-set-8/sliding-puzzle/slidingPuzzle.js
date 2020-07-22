/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const target = '123450';
  const cost = {};
  let min = Infinity;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c, steps) => {
    const hash = board[0].join('') + board[1].join('');

    if (cost[hash] !== undefined && steps >= cost[hash]) return;
    cost[hash] = steps;

    if (hash === target) {
      min = Math.min(min, steps);
      return;
    }

    for (let dir of dirs) {
      const newR = r + dir[0];
      const newC = c + dir[1];

      if (newR < 0 || newC < 0 || newR >= 2 || newC >= 3) continue;

      [board[r][c], board[newR][newC]] = [board[newR][newC], board[r][c]];
      dfs(newR, newC, steps + 1);
      [board[r][c], board[newR][newC]] = [board[newR][newC], board[r][c]];
    }
  };

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        dfs(i, j, 0);
        return min === Infinity ? -1 : min;
      }
    }
  }
};
