/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const hash = [];
  const set = new Set();

  for (let i = 0; i < words.length; i++) {
    const cur = words[i];

    for (let j = 0; j < hash.length; j++) {
      const next = hash[j];

      if (next.includes(cur)) {
        set.add(cur);
      }
      if (cur.includes(next)) {
        set.add(next);
      }
    }
    hash.push(cur);
  }

  return [...set];
};
