import { removeDups } from '../solution1';
import { removeDups2 } from '../solution2';

describe('test remove duplicates from linkedlist', () => {
  let valid;

  beforeEach(() => {
    valid = [
      {
        input: {
          val: 1,
          next: {
            val: 5,
            next: { val: 1, next: { val: 9, next: { val: 5, next: null } } }
          }
        },
        output: {
          val: 1,
          next: {
            val: 5,
            next: { val: 9, next: null }
          }
        }
      }
    ];
  });

  test('should be true', () => {
    expect.assertions(valid.length);

    valid.forEach(({ input, output }) => {
      removeDups(input);
      expect(input).toEqual(output);
    });
  });

  test('should be true', () => {
    expect.assertions(valid.length);

    valid.forEach(({ input, output }) => {
      removeDups2(input);
      expect(input).toEqual(output);
    });
  });
});
