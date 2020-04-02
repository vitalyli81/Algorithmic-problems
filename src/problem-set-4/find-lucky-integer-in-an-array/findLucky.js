/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const hash = Array(501);

  arr.forEach(el => {
    hash[el] = (hash[el] || 0) + 1;
  });

  for (let i = hash.length - 1; i >= 0; i--) {
    if (hash[i] === i) {
      return i;
    }
  }

  return -1;
};
