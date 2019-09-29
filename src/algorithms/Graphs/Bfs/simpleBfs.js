export const Bfs = (graph, source, goal) => {
  const frontier = [];
  const cameFrom = { source: null };
  const distance = { source: 0 };

  while (frontier.length) {
    const currentNode = frontier.shift(); // regular array used as a queue: TODO: to build efficient queue

    if (source === goal) return;

    graph.getEdges(currentNode).forEach(nextNode => {
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
