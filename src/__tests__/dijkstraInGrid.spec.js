import Grid from '../dataStructures/Grid/Grid';
import {
  dijkstra,
  getGridShortestPath
} from '../algorithms/Graphs/Dijkstra/dijkstra';

describe('grid bfs test', () => {
  const graph = new Grid(10, 10);
  const source = { row: 0, col: 0 };
  const goal = { row: 4, col: 4 };

  graph.addWall({ row: 1, col: 0 });
  graph.addWall({ row: 1, col: 1 });

  graph.addWeight({ row: 1, col: 2 }, 5);
  graph.addWeight({ row: 2, col: 3 }, 5);
  graph.addWeight({ row: 0, col: 4 }, 5);

  const { cameFrom, distance } = dijkstra(graph, source, goal);

  const shortestPath = getGridShortestPath(cameFrom, source, goal);

  test('grid bfs traversal', () => {
    const expectedPath = [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 0, col: 3 },
      { row: 1, col: 3 },
      { row: 1, col: 4 },
      { row: 2, col: 4 },
      { row: 3, col: 4 },
      { row: 4, col: 4 }
    ];
    console.log('!!!~! ', shortestPath);
    expect(shortestPath).toEqual(expectedPath);
  });
});
