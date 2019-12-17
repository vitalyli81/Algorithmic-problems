import { checkPermuation1 } from '../solution1';
import { checkPermuation2 } from '../solution2';

describe('test checkPermuation functionality', () => {
  const valid = [
    {
      s1: 'abc',
      s2: 'bca'
    }
  ];
  const invalid = [
    {
      s1: 'adc',
      s2: 'bca'
    },
    {
      s1: 'axbwc',
      s2: 'bca'
    }
  ];

  test('should be true', () => {
    expect.assertions(valid.length * 2);

    valid.forEach(({ s1, s2 }) => {
      expect(checkPermuation1(s1, s2)).toBe(true);
      expect(checkPermuation2(s1, s2)).toBe(true);
    });
  });

  test('should fail', () => {
    expect.assertions(invalid.length * 2);

    invalid.forEach(({ s1, s2 }) => {
      expect(checkPermuation1(s1, s2)).toBe(false);
      expect(checkPermuation2(s1, s2)).toBe(false);
    });
  });
});
