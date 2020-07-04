/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const hash = {};
  const res = [];

  for (let i = 0; i + 9 < s.length; i++) {
    const str = s.substring(i, i + 10);
    hash[str] = (hash[str] || 0) + 1;
  }

  Object.entries(hash).forEach(([key, val]) => {
    if (val > 1) {
      res.push(key);
    }
  });

  return res;
};
