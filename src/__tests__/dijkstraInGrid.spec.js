import Grid from '../dataStructures/Grid/Grid';
import { dijkstra } from '../algorithms/Graphs/Dijkstra/dijkstraInGrid';
import { getGridShortestPath } from '../algorithms/Graphs/utils';

describe('grid bfs test', () => {
  const graph = new Grid(15, 15);
  const source = { row: 12, col: 0 };
  const goal = { row: 1, col: 11 };

  graph.addWall({ row: 2, col: 5 });
  graph.addWall({ row: 2, col: 6 });
  graph.addWall({ row: 2, col: 7 });
  graph.addWall({ row: 2, col: 8 });
  graph.addWall({ row: 2, col: 9 });
  graph.addWall({ row: 2, col: 10 });
  graph.addWall({ row: 2, col: 11 });
  graph.addWall({ row: 2, col: 12 });
  graph.addWall({ row: 3, col: 12 });
  graph.addWall({ row: 4, col: 12 });
  graph.addWall({ row: 5, col: 12 });
  graph.addWall({ row: 6, col: 12 });
  graph.addWall({ row: 7, col: 12 });
  graph.addWall({ row: 8, col: 12 });
  graph.addWall({ row: 9, col: 12 });
  graph.addWall({ row: 10, col: 12 });
  graph.addWall({ row: 11, col: 12 });
  graph.addWall({ row: 12, col: 12 });
  graph.addWall({ row: 12, col: 11 });
  graph.addWall({ row: 12, col: 10 });
  graph.addWall({ row: 12, col: 9 });
  graph.addWall({ row: 12, col: 8 });
  graph.addWall({ row: 12, col: 7 });
  graph.addWall({ row: 12, col: 6 });
  graph.addWall({ row: 12, col: 5 });
  graph.addWall({ row: 12, col: 4 });
  graph.addWall({ row: 12, col: 3 });
  graph.addWall({ row: 12, col: 2 });

  graph.addWeight({ row: 1, col: 2 }, 5);
  graph.addWeight({ row: 2, col: 3 }, 5);
  graph.addWeight({ row: 0, col: 4 }, 5);

  const { cameFrom, distance } = dijkstra(graph, source, goal);

  const shortestPath = getGridShortestPath(cameFrom, source, goal);

  test('grid bfs traversal', () => {
    const expectedPath = [
      { row: 12, col: 0 },
      { row: 11, col: 0 },
      { row: 10, col: 0 },
      { row: 9, col: 0 },
      { row: 8, col: 0 },
      { row: 7, col: 0 },
      { row: 6, col: 0 },
      { row: 6, col: 1 },
      { row: 5, col: 1 },
      { row: 5, col: 2 },
      { row: 4, col: 2 },
      { row: 4, col: 3 },
      { row: 3, col: 3 },
      { row: 3, col: 4 },
      { row: 2, col: 4 },
      { row: 1, col: 4 },
      { row: 1, col: 5 },
      { row: 1, col: 6 },
      { row: 1, col: 7 },
      { row: 1, col: 8 },
      { row: 1, col: 9 },
      { row: 1, col: 10 },
      { row: 1, col: 11 }
    ];

    console.log('!!! steps ', Object.keys(distance).length);
    console.log('!!!~! ', shortestPath);
    expect(shortestPath).toEqual(expectedPath);
  });
});
