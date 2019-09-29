import PQ from '../../../dataStructures/PriorityQueue/simplePQ';

export const dijkstra = (graph, source, goal) => {
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
        frontier.add(nextNode, newDistance);
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

export default {
  dijkstra
};
