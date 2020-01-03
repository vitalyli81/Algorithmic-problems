import { isUnique } from '../solution1';
import { isUnique2 } from '../solution2';

describe('test isUnique functionality', () => {
  const valid = ['abc', 'qwert', '', 'a'];
  const invalid = ['aaqqq', 'abvcc', 'abcc'];

  test('should be true', () => {
    expect.assertions(valid.length * 2);

    valid.forEach(val => {
      expect(isUnique(val)).toBe(true);
      expect(isUnique2(val)).toBe(true);
    });
  });

  test('should fail', () => {
    expect.assertions(invalid.length * 2);

    invalid.forEach(val => {
      expect(isUnique(val)).toBe(false);
      expect(isUnique2(val)).toBe(false);
    });
  });
});
