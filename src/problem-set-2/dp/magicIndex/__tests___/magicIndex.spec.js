import { magicIndex } from '../magicIndex';
import { magicIndex2 } from '../magicIndex2';

describe('magic index', () => {
  const list1 = [-10, -5, 0, 3, 7];
  const output1 = 3;
  const list2 = [0, 2, 5, 8, 17];
  const output2 = 0;
  const list3 = [-10, -5, 3, 4, 7, 9];
  const output3 = -1;
  const list4 = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
  const output4 = 7;

  const list5 = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13];
  const output5 = 2;
  test('distinct', () => {
    expect(magicIndex(list1)).toBe(output1);
    expect(magicIndex(list2)).toBe(output2);
    expect(magicIndex(list3)).toBe(output3);
    expect(magicIndex(list4)).toBe(output4);
  });
  test('duplicates allowed', () => {
    expect(magicIndex2(list1)).toBe(output1);
    expect(magicIndex2(list2)).toBe(output2);
    expect(magicIndex2(list3)).toBe(output3);
    expect(magicIndex2(list4)).toBe(output4);
    expect(magicIndex2(list5)).toBe(output5);
  });
});
