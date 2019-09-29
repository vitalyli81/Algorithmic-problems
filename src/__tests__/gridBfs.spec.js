import Grid from '../dataStructures/Grid/Grid';
import { gridBfs, getGridShortestPath } from '../algorithms/Graphs/Bfs/GridBfs';

describe('grid bfs test', () => {
  const graph = new Grid(10, 10);
  const source = { row: 0, col: 0 };
  const goal = { row: 3, col: 3 };

  graph.addWall({ row: 1, col: 0 });
  graph.addWall({ row: 1, col: 1 });

  const { cameFrom, distance } = gridBfs(graph, source, goal);

  const shortestPath = getGridShortestPath(cameFrom, source, goal);

  test('grid bfs traversal', () => {
    const expectedPath = [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 1, col: 2 },
      { row: 2, col: 2 },
      { row: 3, col: 2 },
      { row: 3, col: 3 }
    ];
    console.log('!!! shortestPath ', shortestPath);
    expect(shortestPath).toEqual(expectedPath);
  });
});
