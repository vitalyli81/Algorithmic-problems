/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const charsHash = {};
  let count = 0;

  for (let c of chars) {
    charsHash[c] = (charsHash[c] || 0) + 1;
  }

  words.forEach(w => {
    const cHashCopy = { ...charsHash };
    let valid = true;
    for (let c of w) {
      if (!cHashCopy[c]) {
        valid = false;
        break;
      } else {
        cHashCopy[c]--;
      }
    }
    if (valid) {
      count += w.length;
    }
  });

  return count;
};
