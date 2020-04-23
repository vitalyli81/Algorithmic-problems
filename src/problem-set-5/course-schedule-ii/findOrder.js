/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const edges = buildGraph(numCourses, prerequisites);
  const visited = {};
  const order = [];

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i, edges, visited, order)) {
      return [];
    }
  }

  return order;
};

function dfs(v, edges, visited, order) {
  if (visited[v] === 1) return false;
  if (visited[v] === 2) return true;

  visited[v] = 1;

  for (let next of edges[v]) {
    if (!dfs(next, edges, visited, order)) {
      return false;
    }
  }
  order.push(v);
  visited[v] = 2;
  return true;
}

function buildGraph(numCourses, prerequisites) {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let [from, to] of prerequisites) {
    graph[from].push(to);
  }

  return graph;
}
