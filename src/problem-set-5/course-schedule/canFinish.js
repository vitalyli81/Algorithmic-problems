/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const edges = buildGraph(numCourses, prerequisites);
  const visited = {};

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i, edges, visited)) {
      return false;
    }
  }

  return true;
};

function dfs(v, edges, visited) {
  if (visited[v] === 1) {
    return false;
  }

  if (visited[v] === 2) {
    return true;
  }

  visited[v] = 1;

  for (let next of edges[v]) {
    if (!dfs(next, edges, visited)) {
      return false;
    }
  }

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
