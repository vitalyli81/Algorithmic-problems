import { setZeroes } from '../setZeroes';

describe('setZeroes test', () => {
  const valid = [
    {
      input: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
      output: [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
      ]
    },
    {
      input: [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
      ],
      output: [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]
      ]
    }
  ];

  test('should pass', () => {
    expect.assertions(valid.length);

    valid.forEach(({ input, output }) => {
      expect(setZeroes(input)).toEqual(output);
    });
  });
});
