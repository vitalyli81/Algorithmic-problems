/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
const TRY_LIMIT = 10;
const WORD_LIMIT = 6;

var findSecretWord = function(wordlist, master) {
  let group = wordlist;
  for (let l = 0; l < TRY_LIMIT; l++) {
    let currentGuess = getCommonWord(group);
    let res = master.guess(currentGuess);

    if (res === WORD_LIMIT) return;

    let tmp = [];

    for (let j = 0; j < group.length; j++) {
      if (getDiff(group[j], currentGuess) === WORD_LIMIT - res) {
        tmp.push(group[j]);
      }
    }
    group = tmp;
  }
};

function getCommonWord(wordlist) {
  const commonChars = Array.from({ length: WORD_LIMIT }, () => new Object());
  let maxPos = 0;
  let maxChar = '';
  let maxCount = 0;

  for (let i = 0; i < wordlist.length; i++) {
    for (let j = 0; j < WORD_LIMIT; j++) {
      const c = wordlist[i][j];
      commonChars[j][c] = (commonChars[j][c] || 0) + 1;
    }
  }

  for (let i = 0; i < WORD_LIMIT; i++) {
    for (let key in commonChars[i]) {
      if (maxCount < commonChars[i][key]) {
        maxPos = i;
        maxCount = commonChars[i][key];
        maxChar = key;
      }
    }
  }

  for (let i = 0; i < wordlist.length; i++) {
    if (wordlist[i][maxPos] === maxChar) return wordlist[i];
  }
}

function getDiff(w1, w2) {
  let count = 0;

  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      count++;
    }
  }

  return count;
}
