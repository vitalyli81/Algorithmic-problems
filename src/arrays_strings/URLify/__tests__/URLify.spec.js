import { URLify } from '../solution1';

describe('test URLify functionality', () => {
  const valid = [
    {
      s: 'Mr John Smith    ',
      len: 13,
      output: 'Mr%20John%20Smith'
    },
    {
      s: 'a b  ',
      len: 3,
      output: 'a%20b'
    }
  ];
  const invalid = [
    {
      s: 'a b  ',
      len: 3,
      output: 'a b'
    },
    {
      s: 'Mr John Smith    ',
      len: 13,
      output: 'Mr John Smith'
    }
  ];

  test('should be true', () => {
    expect.assertions(valid.length);

    valid.forEach(({ s, len, output }) => {
      expect(URLify(s, len)).toEqual(output);
    });
  });

  test('should fail', () => {
    expect.assertions(invalid.length);

    invalid.forEach(({ s, len, output }) => {
      expect(URLify(s, len)).not.toEqual(output);
    });
  });
});
