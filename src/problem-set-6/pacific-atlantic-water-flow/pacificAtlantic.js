/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return [];
  }

  const res = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const pacific = Array(rows);
  const atlantic = Array(rows);
  const pFrontier = [];
  const aFrontier = [];

  for (let i = 0; i < rows; i++) {
    pacific[i] = Array(cols);
  }

  for (let i = 0; i < rows; i++) {
    atlantic[i] = Array(cols);
  }

  for (let i = 0; i < rows; i++) {
    pFrontier.push([i, 0]);
    aFrontier.push([i, cols - 1]);
    pacific[i][0] = true;
    atlantic[i][cols - 1] = true;
  }

  for (let i = 0; i < cols; i++) {
    pFrontier.push([0, i]);
    aFrontier.push([rows - 1, i]);
    pacific[0][i] = true;
    atlantic[rows - 1][i] = true;
  }

  bfs(matrix, pFrontier, pacific);
  bfs(matrix, aFrontier, atlantic);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

function bfs(matrix, frontier, visited) {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const rows = matrix.length;
  const cols = matrix[0].length;

  while (frontier.length) {
    const [cur1, cur2] = frontier.pop();

    for (let [dir1, dir2] of dir) {
      const x = cur1 + dir1;
      const y = cur2 + dir2;

      if (
        x < 0 ||
        y < 0 ||
        x >= rows ||
        y >= cols ||
        visited[x][y] ||
        matrix[x][y] < matrix[cur1][cur2]
      ) {
        continue;
      }

      visited[x][y] = true;
      frontier.push([x, y]);
    }
  }
}
