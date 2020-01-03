import { setZeroes } from '../setZeroes';
import { setZeroes2 } from '../setZeroes2';
import { setZeroes3 } from '../setZeroes3';

describe('setZeroes test', () => {
  let valid;

  beforeEach(() => {
    valid = [
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
      },
      {
        input: [
          [0, 0, 0, 5],
          [4, 3, 1, 4],
          [0, 1, 1, 4],
          [1, 2, 1, 3],
          [0, 0, 1, 1]
        ],
        output: [
          [0, 0, 0, 0],
          [0, 0, 0, 4],
          [0, 0, 0, 0],
          [0, 0, 0, 3],
          [0, 0, 0, 0]
        ]
      }
    ];
  });

  test('should pass setZeroes', () => {
    expect.assertions(valid.length);

    valid.forEach(({ input, output }) => {
      setZeroes(input);
      expect(input).toEqual(output);
    });
  });

  test('should pass setZeroes2', () => {
    expect.assertions(valid.length);

    valid.forEach(({ input, output }) => {
      setZeroes2(input);
      expect(input).toEqual(output);
    });
  });

  test('should pass setZeroes3', () => {
    expect.assertions(valid.length);

    valid.forEach(({ input, output }) => {
      setZeroes3(input);
      expect(input).toEqual(output);
    });
  });
});
