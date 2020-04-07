/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  let wordIndex = 1;
  let res = '';
  let word = '';
  const SPACE = ' ';

  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    if (c === SPACE) {
      res += (res ? SPACE : '') + transformWord(word, wordIndex++);
      word = '';
    } else {
      word += c;
    }
  }

  return (res ? res + SPACE : '') + transformWord(word, wordIndex);
};

function transformWord(word, count) {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };
  const MA = 'ma';
  const A = 'a';
  let res = '';

  if (vowels[word[0]]) {
    res = word + MA;
  } else {
    res = word.substring(1) + word[0] + MA;
  }

  return res + A.repeat(count);
}
