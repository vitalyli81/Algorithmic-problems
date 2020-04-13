/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  const set = new Set(words);
  let res = '';

  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    let key = '';
    let isValid = true;

    if (cur.length < res.length || (cur.length === res.length && res < cur)) {
      continue;
    }

    for (let c of cur) {
      key += c;
      if (!set.has(key)) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      res = key;
    }
  }

  return res;
};
