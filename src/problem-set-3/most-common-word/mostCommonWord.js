/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const excludeSyms = {
    '!': 1,
    '?': 1,
    "'": 1,
    ',': 1,
    ';': 1,
    '.': 1,
    ' ': 1
  };
  const banHash = {};
  const wordHash = {};
  let maxCount = 0;
  let maxWord = '';
  let word = '';

  banned.forEach(w => {
    banHash[w] = 1;
  });
  for (let c of paragraph) {
    if (excludeSyms[c]) {
      if (word && !banHash[word]) {
        wordHash[word] = (wordHash[word] || 0) + 1;
        if (wordHash[word] > maxCount) {
          maxWord = word;
          maxCount = wordHash[word];
        }
      }
      word = '';
    } else {
      word += c.toLowerCase();
    }
  }
  if (word && !banHash[word]) {
    wordHash[word] = (wordHash[word] || 0) + 1;
    if (wordHash[word] > maxCount) {
      maxWord = word;
      maxCount = wordHash[word];
    }
  }
  return maxWord;
};
