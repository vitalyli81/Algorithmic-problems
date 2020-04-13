/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const lHash = {};
  let res = 'aaaaaaaaaaaaaaaa';

  for (let c of licensePlate) {
    if (isNaN(c)) {
      const lower = c.toLowerCase();
      lHash[lower] = (lHash[lower] || 0) + 1;
    }
  }

  words.forEach((word) => {
    if (isValidWord(word, lHash)) {
      if (res.length > word.length) {
        res = word;
      }
    }
  });

  return res;
};

function isValidWord(word, hash) {
  const wHash = {};

  for (let c of word) {
    wHash[c] = (wHash[c] || 0) + 1;
  }

  for (let [char, count] of Object.entries(hash)) {
    if (!wHash[char] || wHash[char] < count) {
      return false;
    }
  }

  return true;
}
