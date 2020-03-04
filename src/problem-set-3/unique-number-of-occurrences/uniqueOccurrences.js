/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const hash = {};
  const countHash = {};
  arr.forEach(n => {
    hash[n] = (hash[n] || 0) + 1;
  });

  for (let [key, value] of Object.entries(hash)) {
    if (countHash[value]) {
      return false;
    }

    countHash[value] = 1;
  }

  return true;
};
