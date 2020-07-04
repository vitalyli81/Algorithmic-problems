/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  const len = S.length;
  let res = Array(S.length);
  const hash = {};
  let idx = 1;

  for (let c of S) {
    hash[c] = (hash[c] || 0) + 1;
  }

  const counts = Object.entries(hash).map(([char, count]) => ({ char, count }));

  counts.sort((a, b) => a.count - b.count);

  for (let i = 0; i < counts.length; i++) {
    const { char, count } = counts[i];

    if (count > Math.floor((len + 1) / 2)) {
      return '';
    }

    for (let j = 0; j < count; j++) {
      if (idx >= len) {
        idx = 0;
      }
      res[idx] = char;
      idx += 2;
    }
  }

  return res.join('');
};
