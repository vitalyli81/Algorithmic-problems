import { palindromePermutation1 } from '../solution1';
import { palindromePermutation2 } from '../solution2';

describe('test palindromePermutation', () => {
  const valid = ['Tact Coa', 'aab', 'carerac'];

  const invalid = ['code', 'abc'];

  test('should be true', () => {
    expect.assertions(valid.length * 2);

    valid.forEach(val => {
      expect(palindromePermutation1(val)).toBe(true);
      expect(palindromePermutation2(val)).toBe(true);
    });
  });

  test('should fail', () => {
    expect.assertions(invalid.length * 2);

    invalid.forEach(val => {
      expect(palindromePermutation1(val)).toBe(false);
      expect(palindromePermutation2(val)).toBe(false);
    });
  });
});
