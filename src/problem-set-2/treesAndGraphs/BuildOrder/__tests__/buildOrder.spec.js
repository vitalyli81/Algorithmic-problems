import { buildOrder } from '../solution';

describe('build order test', () => {
  const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
  const dependencies = [
    ['a', 'd'],
    ['f', 'b'],
    ['b', 'd'],
    ['f', 'a'],
    ['d', 'c']
  ];
  const output = ['f', 'e', 'b', 'a', 'd', 'c'];
  test('should pass', () => {
    expect(buildOrder(projects, dependencies)).toEqual(output);
  });
});
