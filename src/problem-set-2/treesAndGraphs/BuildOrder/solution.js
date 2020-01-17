export const buildOrder = (projects, dependencies) => {
  const order = [];
  const edges = buildEdges(dependencies);
  const visited = {};

  projects.forEach(current => {
    if (!visited[current]) {
      dfs(current, edges, order, visited);
    }
  });

  return order.reverse();
};

const dfs = (node, edges, order, visited) => {
  visited[node] = 1;

  (edges[node] || []).forEach(next => {
    if (!visited[next]) {
      visited[next] = 1;
      dfs(next, edges, order, visited);
    }
  });
  order.push(node);
};

const buildEdges = deps => {
  const edges = {};
  deps.forEach(([a, b]) => {
    if (!edges[a]) {
      edges[a] = [];
    }

    edges[a].push(b);
  });

  return edges;
};
