import simpleGraph from '../dataStructures/Graph/simpleGraph';
import Bfs from '../algorithms/Graphs/Bfs/simpleBfs';

describe('simpleBfs test', () => {
  test('simple directed graph', () => {
    const graph = new simpleGraph();
    graph.edges = {
      A: ['B'],
      B: ['A', 'C', 'D'],
      C: ['A'],
      D: ['E', 'A'],
      E: ['B']
    };

    const expectedCameFrom = { A: 'B', B: 'A', C: 'B', D: 'B', E: 'D' };
    const expectedDistance = { A: 2, B: 1, C: 2, D: 2, E: 3 };

    const { cameFrom, distance } = Bfs(graph, 'A');

    expect(expectedCameFrom).toEqual(cameFrom);
    expect(expectedDistance).toEqual(distance);
  });
});
