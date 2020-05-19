/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  const visited = {};
  const res = Array(R * C);
  let level = 0;
  const frontier = [[r0, c0]];

  while (frontier.length) {
    const cur = frontier.shift();
    const [r, c] = cur;
    const key = `${r}:${c}`;

    if (r < 0 || c < 0 || r >= R || c >= C || visited[key]) {
      continue;
    }
    res[level] = cur;
    level++;
    visited[key] = true;
    frontier.push([r, c - 1]);
    frontier.push([r, c + 1]);
    frontier.push([r - 1, c]);
    frontier.push([r + 1, c]);
  }

  return res;
};
