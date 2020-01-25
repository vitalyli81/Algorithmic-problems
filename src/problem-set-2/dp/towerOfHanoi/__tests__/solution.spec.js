import { move } from '../solution';

describe('tower of hanoi', () => {
  const A = [1, 2, 3];
  const B = [];
  const C = [];
  const A1 = [1, 2, 3, 4];
  const B1 = [];
  const C1 = [];
  test('should pass', () => {
    move(A.length, A, C, B);
    move(A1.length, A1, C1, B1);
    expect(A).toEqual([]);
    expect(C).toEqual([1, 2, 3]);
    expect(A1).toEqual([]);
    expect(C1).toEqual([1, 2, 3, 4]);
  });
});
