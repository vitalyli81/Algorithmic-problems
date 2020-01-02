/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = (times, N, K) => {
  const graph = buildGraph(times, N);
  const frontier = [K];
  const cost = {
    [K]: 0
  };
  let result = 0;
  let count = 0;

  while (frontier.length) {
    const cur = frontier.pop();

    (graph[cur] || []).forEach(next => {
      const newCost = next.time + cost[cur];
      if (cost[next.to] === undefined || newCost < cost[next.to]) {
        frontier.push(next.to);
        cost[next.to] = newCost;
      }
    });
  }
  for (key in cost) {
    result = Math.max(result, cost[key]);
    count++;
  }

  return result && count === N ? result : -1;
};

const buildGraph = (times, N, K) => {
  const graph = {};

  times.forEach(element => {
    const from = element[0];
    const to = element[1];
    const time = element[2];

    if (from <= N) {
      if (!graph[from]) {
        graph[from] = [];
      }
      graph[from].push({ to, time });
    }
  });

  return graph;
};
