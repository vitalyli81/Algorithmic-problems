import { oneAway1 } from '../solution1';
import { oneAway2 } from '../solution2';

describe('test one away', () => {
  const valid = [
    {
      s1: 'pale',
      s2: 'ple'
    },
    {
      s1: 'pales',
      s2: 'pale'
    },
    {
      s1: 'pale',
      s2: 'bale'
    }
  ];
  const invalid = [
    {
      s1: 'pale',
      s2: 'bae'
    }
  ];

  test('should be true', () => {
    expect.assertions(valid.length * 2);

    valid.forEach(({ s1, s2 }) => {
      expect(oneAway1(s1, s2)).toBe(true);
      expect(oneAway2(s1, s2)).toBe(true);
    });
  });

  test('should fail', () => {
    expect.assertions(invalid.length * 2);

    invalid.forEach(({ s1, s2 }) => {
      expect(oneAway1(s1, s2)).toBe(false);
      expect(oneAway2(s1, s2)).toBe(false);
    });
  });
});
