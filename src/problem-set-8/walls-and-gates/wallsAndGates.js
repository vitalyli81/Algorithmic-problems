/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  if (!rooms || !rooms.length) return;

  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const frontier = [];
  const n = rooms.length;
  const m = rooms[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rooms[i][j] === 0) {
        frontier.push([i, j]);
      }
    }
  }

  while (frontier.length) {
    const [row, col] = frontier.shift();

    for (let i = 0; i < dir.length; i++) {
      const nextRow = dir[i][0] + row;
      const nextCol = dir[i][1] + col;

      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= n ||
        nextCol >= m ||
        rooms[nextRow][nextCol] !== 2147483647
      ) {
        continue;
      }

      rooms[nextRow][nextCol] = rooms[row][col] + 1;
      frontier.push([nextRow, nextCol]);
    }
  }
};
