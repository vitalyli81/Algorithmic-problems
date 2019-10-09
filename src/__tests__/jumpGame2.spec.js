import jumpGame2Solution1 from '../problems/jumpGame2/solution1';
import jumpGame2Solution2 from '../problems/jumpGame2/solution2';
import jumpGame2Solution3 from '../problems/jumpGame2/solution3';

describe('Jump game 2', () => {
  test('test all solutions', () => {
    const nums = [2, 3, 1, 1, 4];
    const expected = 2;

    expect(jumpGame2Solution1(nums)).toBe(expected);
    expect(jumpGame2Solution2(nums)).toBe(expected);
    expect(jumpGame2Solution3(nums)).toBe(expected);
  });
});
