/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;
  const patterns = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        patterns.add(dfs(grid, i, j, 'start'));
      }
    }
  }

  return patterns.size;
};

const dfs = (graph, r, c, dir) => {
  if (graph[r] && graph[r][c]) {
    graph[r][c] = 0;

    const pat =
      dir +
      dfs(graph, r + 1, c, 'u') +
      dfs(graph, r - 1, c, 'd') +
      dfs(graph, r, c + 1, 'r') +
      dfs(graph, r, c - 1, 'l') +
      'end';

    return pat;
  }

  return '';
};
