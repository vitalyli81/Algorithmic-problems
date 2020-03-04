/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const t = Math.trunc(arr.length / 4);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + t]) {
      return arr[i];
    }
  }

  return -1;
};
