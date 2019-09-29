import Queue from '../../../dataStructures/Queue/Queue';

export const gridBfs = (graph, source = {}, goal = {}) => {
  const sourceStr = JSON.stringify(source);
  const frontier = new Queue();
  frontier.enqueue(source);
  const cameFrom = { [sourceStr]: null };
  const distance = { [sourceStr]: 0 };

  while (frontier.length) {
    const currentNode = frontier.dequeue(); // regular array used as a queue: TODO: to build efficient queue
    const currentNodeStr = JSON.stringify(currentNode);

    if (currentNodeStr === JSON.stringify(goal)) break;

    graph.getNeighbors(currentNode).forEach(nextNode => {
      const nextNodeStr = JSON.stringify(nextNode);

      if (!cameFrom[nextNodeStr]) {
        frontier.enqueue(nextNode);
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

export default { gridBfs };
