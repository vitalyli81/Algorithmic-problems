/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - k;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (x - arr[mid] > arr[mid + k] - x) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return arr.slice(l, l + k);
};
