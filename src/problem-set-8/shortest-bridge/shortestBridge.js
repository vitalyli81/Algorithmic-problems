/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function (A) {
  if (!A || !A.length || !A[0].length) {
    return -1;
  }
  const m = A.length;
  const n = A[0].length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = {};
  let front = [];
  let found = false;
  let level = 0;

  for (let i = 0; i < m; i++) {
    if (found) {
      break;
    }

    for (let j = 0; j < n; j++) {
      if (A[i][j] === 1) {
        dfs(A, front, i, j, visited, dirs);
        found = true;
        break;
      }
    }
  }

  while (front.length) {
    const next = [];

    while (front.length) {
      const cur = front.pop();

      for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        const nextI = cur[0] + dir[0];
        const nextJ = cur[1] + dir[1];

        if (
          nextI >= 0 &&
          nextJ >= 0 &&
          nextI < m &&
          nextJ < n &&
          !visited[nextI + ':' + nextJ]
        ) {
          if (A[nextI][nextJ] === 1) {
            return level;
          }

          visited[nextI + ':' + nextJ] = true;
          next.push([nextI, nextJ]);
        }
      }
    }

    front = next;
    level++;
  }

  return -1;
};

const dfs = (A, front, i, j, visited, dirs) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= A.length ||
    j >= A[0].length ||
    visited[i + ':' + j] ||
    A[i][j] === 0
  ) {
    return;
  }

  visited[i + ':' + j] = true;
  front.push([i, j]);

  dirs.forEach(([nextI, nextJ]) => {
    dfs(A, front, i + nextI, j + nextJ, visited, dirs);
  });
};
