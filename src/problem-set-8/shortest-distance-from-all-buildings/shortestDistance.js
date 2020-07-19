/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
  if (!grid.length || !grid[0].length) return -1;

  const m = grid.length;
  const n = grid[0].length;
  const distance = Array(m);
  const reach = Array(m);
  let minDist = Infinity;
  let buildings = 0;

  for (let i = 0; i < m; i++) {
    distance[i] = Array(n).fill(0);
    reach[i] = Array(n).fill(0);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        buildings++;
        bfs(grid, distance, [[i, j]], m, n, reach);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0 && reach[i][j] === buildings) {
        minDist = Math.min(minDist, distance[i][j]);
      }
    }
  }

  return minDist === Infinity ? -1 : minDist;
};

const bfs = (grid, distance, front, m, n, reach) => {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let level = 1;
  const visited = Array(m);

  for (let i = 0; i < m; i++) {
    visited[i] = Array(n);
  }

  while (front.length) {
    const next = [];

    for (let i = 0; i < front.length; i++) {
      const [row, col] = front[i];

      dirs.forEach(([r, c]) => {
        const nextRow = row + r;
        const nextCol = col + c;

        if (
          nextRow >= 0 &&
          nextCol >= 0 &&
          nextRow < m &&
          nextCol < n &&
          grid[nextRow][nextCol] === 0 &&
          !visited[nextRow][nextCol]
        ) {
          distance[nextRow][nextCol] += level;
          visited[nextRow][nextCol] = true;
          reach[nextRow][nextCol]++;
          next.push([nextRow, nextCol]);
        }
      });
    }

    level += 1;
    front = next;
  }
};
