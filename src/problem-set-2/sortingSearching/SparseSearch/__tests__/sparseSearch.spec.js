import { sparseSearch } from '../solution';

describe('Test sparse search', () => {
  test('should pass', () => {
    const list = [
      'at',
      '',
      '',
      '',
      'ball',
      '',
      '',
      'car',
      '',
      '',
      'dad',
      '',
      't'
    ];
    expect(sparseSearch(list, 'at')).toBe(0);
    expect(sparseSearch(list, 'ball')).toBe(4);
    expect(sparseSearch(list, 'test')).toBe(-1);
    expect(sparseSearch(list, 'car')).toBe(7);
    expect(sparseSearch(list, 't')).toBe(12);
    expect(sparseSearch(list, '')).toBe(-1);
    expect(sparseSearch([], 'at')).toBe(-1);
  });
});
