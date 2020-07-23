/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
  const seen = {};
  const graph = {};
  let max = 0;

  edges.forEach(([a, b]) => {
    graph[a] = graph[a] || [];
    graph[b] = graph[b] || [];
    graph[a].push(b);
    graph[b].push(a);
  });

  const dfs = (node, graph, seen) => {
    seen[node] = true;
    let first = 0;
    let second = 0;

    for (let next of graph[node]) {
      if (seen[next] === undefined) {
        const len = dfs(next, graph, seen);

        if (len > first) {
          second = first;
          first = len;
        } else if (len > second) {
          second = len;
        }
      }
    }

    max = Math.max(max, first + second + 1);

    return first + 1;
  };

  dfs(0, graph, seen);

  return max - 1;
};
