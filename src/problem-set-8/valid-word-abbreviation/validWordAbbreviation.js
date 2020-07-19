/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (word[i] === abbr[j]) {
      i++;
      j++;
      continue;
    }

    if (abbr[j] <= '0' || abbr[j] > '9') return false;

    let start = j;

    while (j < abbr.length && !isNaN(abbr[j])) {
      j++;
    }

    const num = Number(abbr.substring(start, j));
    i += num;
  }

  return i === word.length && j === abbr.length;
};
