/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  const res = [];
  let min = Number.MAX_VALUE;
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, Math.abs(arr[i - 1] - arr[i]));
  }

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) === min) {
      res.push([arr[i - 1], arr[i]]);
    }
  }

  return res;
};
