/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
  const binary = N.toString(2);
  let prev = -1;
  let i = 0;
  let max = 0;

  while (binary[i] !== '1' && i < binary.length) {
    i++;
  }
  prev = i;
  i++;

  while (i < binary.length) {
    if (binary[i] === '1') {
      max = Math.max(max, i - prev);
      prev = i;
    }
    i++;
  }

  return max;
};
