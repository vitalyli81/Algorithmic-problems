/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const hash = {};

  target.forEach((n) => {
    hash[n] = (hash[n] || 0) + 1;
  });

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]--) {
      return false;
    }
  }

  return true;
};
