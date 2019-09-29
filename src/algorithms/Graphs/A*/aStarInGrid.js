import PQ from '../../../dataStructures/PriorityQueue/simplePQ';

export const aStar = (graph, source, goal) => {
  const sourceStr = JSON.stringify(source);
  const frontier = new PQ();
  frontier.add(source, 0);
  const cameFrom = { [sourceStr]: null };
  const distance = { [sourceStr]: 0 };

  while (frontier.length()) {
    const currentNode = frontier.extract();
    const currentNodeStr = JSON.stringify(currentNode);

    if (currentNodeStr === JSON.stringify(goal)) break;
    graph.getNeighbors(currentNode).forEach(nextNode => {
      const nextNodeStr = JSON.stringify(nextNode);
      const newDistance = distance[currentNodeStr] + graph.getWeight(nextNode);

      if (!(nextNodeStr in cameFrom) || newDistance < distance[nextNodeStr]) {
        const priority = newDistance + gridHeuristic(goal, nextNode);

        frontier.add(nextNode, priority);
        cameFrom[nextNodeStr] = currentNode;
        distance[nextNodeStr] = newDistance;
      }
    });
  }

  return {
    cameFrom,
    distance
  };
};

const gridHeuristic = (a, b) => {
  const { row: row1, col: col1 } = a;
  const { row: row2, col: col2 } = b;

  return Math.abs(row1 - row2) + Math.abs(col1 - col2);
};

export default {
  aStar
};
