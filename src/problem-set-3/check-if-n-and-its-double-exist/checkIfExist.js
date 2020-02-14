/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (hash[cur * 2] !== undefined || hash[cur / 2] !== undefined) {
      return true;
    }
    hash[cur] = i;
  }

  return false;
};
