/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  const n = M.length;
  const visited = {};
  const graph = {};
  let count = 0;

  for (let i = 0; i < n; i++) {
    graph[i] = [];

    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] === 1) {
        graph[i].push(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited);
      count++;
    }
  }

  return count;
};

const dfs = (node, graph, visited) => {
  visited[node] = true;

  for (let i = 0; i < graph[node].length; i++) {
    const next = graph[node][i];

    if (!visited[next]) {
      dfs(next, graph, visited);
    }
  }
};
