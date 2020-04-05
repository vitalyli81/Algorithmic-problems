/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let zeros = arr.reduce((acc, val) => acc + (val ? 0 : 1), 0);
  const len = arr.length;
  let i = len - 1;
  let j = len - 1 + zeros;

  while (i >= 0 && j >= 0) {
    if (arr[i] === 0) {
      if (j < len) {
        arr[j] = arr[i];
      }
      j--;
      if (j < len) {
        arr[j] = arr[i];
      }
    } else {
      if (j < len) arr[j] = arr[i];
    }
    i--;
    j--;
  }
};
