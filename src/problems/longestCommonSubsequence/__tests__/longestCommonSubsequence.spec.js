import lcs from '../lcs';

describe('Longest Common Subsequence', () => {
  test('lcs test case 1', () => {
    const text1 = 'abcde';
    const text2 = 'ace';
    const result = 3;

    expect(lcs(text1, text2)).toBe(result);
  });

  test('lcs test case 2', () => {
    const text1 = 'abc';
    const text2 = 'abc';
    const result = 3;

    expect(lcs(text1, text2)).toBe(result);
  });
});
