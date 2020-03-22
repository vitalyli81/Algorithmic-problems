/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const sArr = s.split('');

  for (let start = 0; start < sArr.length; start += 2 * k) {
    let i = start;
    let j = Math.min(sArr.length - 1, start + k - 1);

    while (i < j) {
      const tmp = sArr[i];
      sArr[i++] = sArr[j];
      sArr[j--] = tmp;
    }
  }

  return sArr.join('');
};
