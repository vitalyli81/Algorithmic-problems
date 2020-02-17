/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const mHash = {};
  for (let c of magazine) {
    mHash[c] = (mHash[c] || 0) + 1;
  }
  for (let c of ransomNote) {
    if (mHash[c]) {
      mHash[c]--;
    } else {
      return false;
    }
  }
  return true;
};
