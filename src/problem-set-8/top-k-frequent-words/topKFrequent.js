/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const freqHash = {};
  let freqList;

  words.forEach((w) => {
    freqHash[w] = (freqHash[w] || 0) + 1;
  });

  freqList = Object.entries(freqHash).map(([word, freq]) => ({ word, freq }));
  freqList.sort((a, b) => {
    if (a.freq === b.freq) {
      return a.word.localeCompare(b.word);
    }

    return b.freq - a.freq;
  });

  return freqList.slice(0, k).map((el) => el.word);
};
