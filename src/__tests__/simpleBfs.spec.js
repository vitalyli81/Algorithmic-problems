import simpleGraph from '../dataStructures/Graph/simpleGraph';
import { bfs, getShortestPath } from '../algorithms/Graphs/Bfs/simpleBfs';

describe('simpleBfs test', () => {
  const graph = new simpleGraph();
  graph.edges = {
    A: ['B'],
    B: ['A', 'C', 'D'],
    C: ['A'],
    D: ['E', 'A'],
    E: ['B']
  };

  const { cameFrom, distance } = bfs(graph, 'A');

  test('simple directed graph', () => {
    const expectedCameFrom = { A: 'B', B: 'A', C: 'B', D: 'B', E: 'D' };
    const expectedDistance = { A: 2, B: 1, C: 2, D: 2, E: 3 };

    expect(expectedCameFrom).toEqual(cameFrom);
    expect(expectedDistance).toEqual(distance);
  });

  test('shortest path', () => {
    const expectedPath = ['A', 'B', 'D', 'E'];
    const path = getShortestPath(cameFrom, 'A', 'E');

    expect(expectedPath).toEqual(path);
  });
});
