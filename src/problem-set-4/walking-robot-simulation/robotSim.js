/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const set = new Set(obstacles.map((v) => v[0] + ':' + v[1]));
  let max = 0;
  let x = 0;
  let y = 0;
  let dir = 0;

  for (let c of commands) {
    if (c === -1) {
      dir = (dir + 1) % 4;
    } else if (c === -2) {
      dir = (dir + 3) % 4;
    } else {
      const [dx, dy] = dirs[dir];
      for (let i = 0; i < c; i++) {
        x += dx;
        y += dy;
        if (set.has(x + ':' + y)) {
          x -= dx;
          y -= dy;
          break;
        }
      }

      max = Math.max(max, x ** 2 + y ** 2);
    }
  }

  return max;
};
