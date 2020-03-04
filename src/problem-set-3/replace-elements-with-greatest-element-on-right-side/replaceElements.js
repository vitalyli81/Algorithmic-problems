/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  const len = arr.length;
  let max = arr[len - 1];
  arr[len - 1] = -1;

  for (let i = len - 2; i >= 0; i--) {
    const tmp = arr[i];
    arr[i] = max;
    max = Math.max(tmp, max);
  }
  return arr;
};
