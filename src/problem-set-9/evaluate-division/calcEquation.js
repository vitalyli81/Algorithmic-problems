/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = buildGraph(equations, values);
  const res = [];

  queries.forEach((query) => {
    res.push(calc(query, graph));
  });

  return res;
};

const calc = (query, graph) => {
  const [start, end] = query;
  if (!graph[start] || !graph[end]) return -1;
  if (start === end) return 1;

  const visited = {};
  const front = [...graph[start]];

  while (front.length) {
    const [cur, weight] = front.pop();

    if (cur === end) return weight;

    visited[cur] = true;

    for (let [next, nextWeight] of graph[cur]) {
      if (visited[next]) continue;
      front.push([next, nextWeight * weight]);
    }
  }

  return -1;
};

const buildGraph = (equations, values) => {
  const graph = {};

  equations.forEach(([a, b]) => {
    graph[a] = [];
    graph[b] = [];
  });

  equations.forEach(([a, b], i) => {
    graph[a].push([b, values[i]]);
    graph[b].push([a, 1 / values[i]]);
  });

  return graph;
};
