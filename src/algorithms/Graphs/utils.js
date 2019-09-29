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
  getGridShortestPath
};
