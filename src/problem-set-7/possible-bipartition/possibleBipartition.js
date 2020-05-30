/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {
  const graph = Array(N + 1);
  const groups = {};

  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }

  dislikes.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  for (let i = 1; i <= N; i++) {
    if (groups[i] === undefined && !dfs(i, 1, groups, graph)) {
      return false;
    }
  }

  return true;
};

function dfs(node, group, groups, graph) {
  if (groups[node] !== undefined) {
    return groups[node] === group;
  }

  groups[node] = group;

  for (let next of graph[node]) {
    if (!dfs(next, -group, groups, graph)) {
      return false;
    }
  }

  return true;
}
