/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freqHash = {};
  let res = '';
  const bucket = Array(s.length + 1);

  for (let c of s) {
    freqHash[c] = (freqHash[c] || 0) + 1;
  }

  for (let [char, freq] of Object.entries(freqHash)) {
    bucket[freq] = bucket[freq] || [];
    bucket[freq].push(char);
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i]) {
      for (let c of bucket[i]) {
        for (let j = 0; j < freqHash[c]; j++) {
          res = c + res;
        }
      }
    }
  }

  return res;
};
