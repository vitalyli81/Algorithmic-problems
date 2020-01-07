import { sortStack } from '../sortStack';

describe('test sortStack', () => {
  test('should pass', () => {
    expect(sortStack([4, 6, 3, 1, 2, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
