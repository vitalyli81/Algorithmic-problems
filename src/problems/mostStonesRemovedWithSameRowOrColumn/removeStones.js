/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  let count = { val: 0 };
  const graph = buildGraph(stones);
  const visited = {};

  for (let node in graph) {
    dfs(graph, node, visited, count);
  }

  return count.val;
};

var dfs = function(graph, node, visited, count) {
  visited[node] = true;
  const edges = graph[node];

  for (let next in edges) {
    if (!visited[next]) {
      count.val++;
      dfs(graph, next, visited, count);
    }
  }
};

var buildGraph = function(stones) {
  var graph = {};

  for (i = 0; i < stones.length; i++) {
    graph[i] = {};
  }

  for (i = 0; i < stones.length; i++) {
    const start = stones[i];

    for (let j = 0; j < stones.length; j++) {
      if (i === j) continue;
      const next = stones[j];

      if (start[0] === next[0] || start[1] === next[1]) {
        graph[i][j] = true;
      }
    }
  }

  return graph;
};
