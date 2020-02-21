/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const res = [];
  const hash = {};
  A.split(' ').forEach(w => {
    hash[w] = (hash[w] || 0) + 1;
  });
  B.split(' ').forEach(w => {
    hash[w] = (hash[w] || 0) + 1;
  });
  for (let [key, value] of Object.entries(hash)) {
    if (value === 1) {
      res.push(key);
    }
  }

  return res;
};
