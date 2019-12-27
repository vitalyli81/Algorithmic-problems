import { stringCompression1 } from '../solution1';
import { stringCompression2 } from '../solution2';

describe('stringCompression test', () => {
  const valid = [
    {
      input: 'aabbccc',
      output: 'a2b2c3'
    }
  ];

  test('should pass', () => {
    expect.assertions(valid.length * 2);
    valid.forEach(({ input, output }) => {
      expect(stringCompression1(input)).toEqual(output);
      expect(stringCompression2(input)).toEqual(output);
    });
  });
});
