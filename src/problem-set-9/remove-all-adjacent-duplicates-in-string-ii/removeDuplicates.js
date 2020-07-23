/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  let res = s;
  let count = Array(res.length).fill(0);
  let i = 0;

  while (i < res.length) {
    if (i === 0 || res[i] !== res[i - 1]) {
      count[i] = 1;
    } else {
      count[i] = count[i - 1] + 1;

      if (count[i] === k) {
        res = res.substring(0, i - k + 1) + res.substring(i + 1);
        i -= k;
      }
    }
    i++;
  }

  return res;
};
