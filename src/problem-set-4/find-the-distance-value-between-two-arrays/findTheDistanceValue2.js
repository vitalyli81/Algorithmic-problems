/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  let res = 0;
  let i = 0;
  let j = 0;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      if (arr1[i] - arr2[j] > d) {
        j++;
      } else {
        i++;
      }
    } else {
      if (arr2[j] - arr1[i] > d) {
        res++;
      }
      i++;
    }
  }

  res += arr1.length - i;

  return res;
};
