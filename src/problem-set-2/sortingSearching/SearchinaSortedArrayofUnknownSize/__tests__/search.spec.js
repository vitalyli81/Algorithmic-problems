import { search } from '../solution';

describe('test search', () => {
  test('should pass', () => {
    const nums = [1, 2, 3, 5, 6, 7];

    expect(search(nums, 3)).toBe(2);
    expect(search(nums, 6)).toBe(4);
    expect(search(nums, 4)).toBe(-1);
    expect(search(nums, 10)).toBe(-1);
  });
});
