/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const front = [start];
  const visited = { [start[0] + ':' + start[1]]: true };

  while (front.length > 0) {
    const node = front.pop();

    if (node[0] === destination[0] && node[1] === destination[1]) return true;

    for (let dir of dirs) {
      let i = node[0] + dir[0];
      let j = node[1] + dir[1];

      while (
        i >= 0 &&
        j >= 0 &&
        i < maze.length &&
        j < maze[0].length &&
        maze[i][j] === 0
      ) {
        i += dir[0];
        j += dir[1];
      }
      const key = i - dir[0] + ':' + (j - dir[1]);

      if (!visited[key]) {
        front.push([i - dir[0], j - dir[1]]);
        visited[key] = true;
      }
    }
  }
  console.log(visited);
  return false;
};
