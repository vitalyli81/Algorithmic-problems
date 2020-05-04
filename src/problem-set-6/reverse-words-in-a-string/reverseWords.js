/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (!s || !s.length) return s;
  let i = 0;
  let j = s.length - 1;
  let result = '';
  let word = '';
  const SPACE = ' ';

  while (s[i] === SPACE) {
    i++;
  }

  while (s[j] === SPACE) {
    j--;
  }

  while (i <= j) {
    if (s[i] === SPACE) {
      result = word ? `${word} ${result}` : result;
      word = '';
    } else {
      word += s[i];
    }
    i++;
  }

  if (word) {
    result = `${word} ${result}`;
  }

  return result.trim();
};
