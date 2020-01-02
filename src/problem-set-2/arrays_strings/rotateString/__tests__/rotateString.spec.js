import { rotateString } from '../rotateString';

describe('rotateString test', () => {
  const valid = [
    {
      s1: 'abcde',
      s2: 'cdeab'
    }
  ];

  const invalid = [
    {
      s1: 'abcde',
      s2: 'abced'
    }
  ];

  test('should pass', () => {
    expect.assertions(valid.length);
    valid.forEach(({ s1, s2 }) => {
      expect(rotateString(s1, s2)).toBe(true);
    });
  });

  test('should fail', () => {
    expect.assertions(invalid.length);
    invalid.forEach(({ s1, s2 }) => {
      expect(rotateString(s1, s2)).toBe(false);
    });
  });
});
