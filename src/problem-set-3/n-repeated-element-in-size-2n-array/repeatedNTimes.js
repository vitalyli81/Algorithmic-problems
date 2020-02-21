/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const hash = {};
  A.forEach(a => {
    hash[a] = (hash[a] || 0) + 1;
  });
  for (let [key, val] of Object.entries(hash)) {
    if (val > 1) {
      return key;
    }
  }
  return null;
};
