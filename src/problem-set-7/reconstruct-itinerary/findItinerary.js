/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = {};
  const res = [];

  tickets.forEach((ticket) => {
    const origin = ticket[0];
    const dest = ticket[1];

    graph[origin] = graph[origin] || [];
    graph[origin].push(dest);
  });

  Object.keys(graph).forEach((origin) => {
    graph[origin].sort();
    graph[origin].reverse();
  });

  dfs('JFK', graph, res);

  return res.reverse();
};

const dfs = (origin, graph, res) => {
  if (graph[origin]) {
    const next = graph[origin];

    while (next.length) {
      dfs(next.pop(), graph, res);
    }
  }
  res.push(origin);
};
