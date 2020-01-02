import StreamChecker from '../StreamChecker';

describe('StreamChecker test', () => {
  test('test object and method', () => {
    const streamChecker = new StreamChecker(['cd', 'f', 'kl']);

    expect(streamChecker.query('a')).toBe(false);
    expect(streamChecker.query('b')).toBe(false);
    expect(streamChecker.query('c')).toBe(false);
    expect(streamChecker.query('d')).toBe(true);
    expect(streamChecker.query('e')).toBe(false);
    expect(streamChecker.query('f')).toBe(true);
    expect(streamChecker.query('g')).toBe(false);
    expect(streamChecker.query('h')).toBe(false);
    expect(streamChecker.query('i')).toBe(false);
    expect(streamChecker.query('j')).toBe(false);
    expect(streamChecker.query('k')).toBe(false);
    expect(streamChecker.query('l')).toBe(true);
  });
});
