import decodeString from '../decodeString';

describe('decodeString test', () => {
  test('test decoding is correct', () => {
    const s1 = '3[a]2[bc]';
    const expected1 = 'aaabcbc';
    const s2 = '3[a2[c]]';
    const expected2 = 'accaccacc';
    const s3 = '2[abc]3[cd]ef';
    const expected3 = 'abcabccdcdcdef';

    expect(decodeString(s1)).toBe(expected1);
    expect(decodeString(s2)).toBe(expected2);
    expect(decodeString(s3)).toBe(expected3);
  });
});
