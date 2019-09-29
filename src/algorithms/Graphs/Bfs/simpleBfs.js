export const bfs = (graph, source) => {
  const frontier = [source];
  const cameFrom = { [source]: null };
  const distance = { [source]: 0 };

  while (frontier.length) {
    const currentNode = frontier.shift(); // regular array used as a queue: TODO: to build efficient queue

    graph.getNeighbors(currentNode).forEach(nextNode => {
      if (!cameFrom[nextNode]) {
        frontier.push(nextNode);
        cameFrom[nextNode] = currentNode;
        distance[nextNode] = distance[currentNode] + 1;
      }
    });
  }

  return {
    cameFrom,
    distance
  };
};

export const getShortestPath = (cameFrom, start, goal) => {
  let current = goal;
  const path = [];

  while (current !== start) {
    path.push(current);
    current = cameFrom[current];
  }

  path.push(start);
  return path.reverse();
};

export default { bfs, getShortestPath };
