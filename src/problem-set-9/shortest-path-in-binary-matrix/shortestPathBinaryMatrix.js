/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ];
  let front = [[0, 0]];
  const visited = { '0:0': true };
  let level = 0;

  if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) return -1;

  while (front.length) {
    const next = [];

    for (let i = 0; i < front.length; i++) {
      const [r, c] = front[i];

      if (r === m - 1 && c === n - 1) {
        return level + 1;
      }

      dirs.forEach(([row, col]) => {
        const nextR = row + r;
        const nextC = col + c;
        const key = nextR + ':' + nextC;
        if (
          nextR >= 0 &&
          nextR < m &&
          nextC >= 0 &&
          nextC < n &&
          !visited[key] &&
          grid[nextR][nextC] === 0
        ) {
          next.push([nextR, nextC]);
          visited[key] = true;
        }
      });
    }

    front = next;
    level += 1;
  }

  return -1;
};
