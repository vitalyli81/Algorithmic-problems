/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const visited = {};
  const graph = {};
  let count = 0;

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    dfs(i, graph, visited);
    count++;
  }

  return count;
};

const dfs = (node, graph, visited) => {
  visited[node] = true;
  const nextList = graph[node];

  for (let i = 0; i < nextList.length; i++) {
    if (visited[nextList[i]]) continue;

    dfs(nextList[i], graph, visited);
  }
};
