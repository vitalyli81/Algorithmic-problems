import { rotate1 } from '../rotate';

describe('rotate test', () => {
  const valid = [
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      output: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ]
    },
    {
      input: [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]
      ],
      output: [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11]
      ]
    }
  ];

  test('should pass', () => {
    expect.assertions(valid.length);

    valid.forEach(({ input, output }) => {
      rotate1(input);
      expect(input).toEqual(output);
    });
  });
});