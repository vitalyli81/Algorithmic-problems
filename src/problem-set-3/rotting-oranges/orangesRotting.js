/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let mins = Number.MAX_VALUE;
  const frontier = [];
  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 2) {
        frontier.push([i, j]);
      }
    });
  });
  mins = getMins(grid, frontier);
  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 1) {
        mins = -1;
      }
    });
  });
  return mins === Number.MAX_VALUE ? 0 : mins;
};

const getMins = (grid, frontier) => {
  let level = 0;
  while (frontier.length) {
    const nextList = [];
    frontier.forEach(cur => {
      const edges = getEdges(grid, cur[0], cur[1]);

      grid[cur[0]][cur[1]] = 2;
      edges.forEach(([r, c]) => {
        if (grid[r][c] === 1) {
          nextList.push([r, c]);
          grid[r][c] = 2;
        }
      });
    });

    frontier = nextList;
    if (frontier.length) {
      level++;
    }
  }

  return level;
};

const getEdges = (grid, i, j) => {
  const edges = [];

  if (isValid(grid, i + 1, j)) {
    edges.push([i + 1, j]);
  }

  if (isValid(grid, i - 1, j)) {
    edges.push([i - 1, j]);
  }

  if (isValid(grid, i, j + 1)) {
    edges.push([i, j + 1]);
  }

  if (isValid(grid, i, j - 1)) {
    edges.push([i, j - 1]);
  }
  return edges;
};

const isValid = (grid, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] !== 1
  ) {
    return false;
  }
  return true;
};
