/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let caps = 0;
  let lowers = 0;
  for (let c of word) {
    if (isCap(c)) {
      caps++;
      if (lowers) {
        return false;
      }
    } else {
      lowers++;
      if (caps > 1) {
        return false;
      }
    }
  }

  return true;
};

const isCap = c => c === c.toUpperCase();
