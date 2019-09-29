export const gridBfs = (graph, source = {}, goal = {}) => {
  const sourceStr = JSON.stringify(source);
  const frontier = [source];
  const cameFrom = { [sourceStr]: null };
  const distance = { [sourceStr]: 0 };

  while (frontier.length) {
    const currentNode = frontier.shift(); // regular array used as a queue: TODO: to build efficient queue
    const currentNodeStr = JSON.stringify(currentNode);

    if (currentNodeStr === JSON.stringify(goal)) break;

    graph.getNeighbors(currentNode).forEach(nextNode => {
      const nextNodeStr = JSON.stringify(nextNode);

      if (!cameFrom[nextNodeStr]) {
        frontier.push(nextNode);
        cameFrom[nextNodeStr] = currentNode;
        distance[nextNodeStr] = distance[currentNodeStr] + 1;
      }
    });
  }

  return {
    cameFrom,
    distance
  };
};

export const getGridShortestPath = (cameFrom, start, goal) => {
  const startStr = JSON.stringify(start);
  let current = JSON.stringify(goal);
  const path = [];

  while (current !== startStr) {
    path.push(JSON.parse(current));
    current = JSON.stringify(cameFrom[current]);
  }

  path.push(start);
  return path.reverse();
};

export default { gridBfs, getGridShortestPath };
