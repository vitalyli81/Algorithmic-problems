/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {
  let ans = -1;
  let hour;
  let min;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) {
        continue;
      }

      for (let k = 0; k < 4; k++) {
        if (k === i || k === j) {
          continue;
        }

        const l = 6 - i - j - k;
        const h = 10 * A[i] + A[j];
        const m = 10 * A[k] + A[l];

        if (h < 24 && m < 60) {
          ans = Math.max(ans, h * 60 + m);
        }
      }
    }
  }

  hour = Math.trunc(ans / 60);
  min = ans % 60;

  return ans >= 0
    ? `${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}`
    : '';
};
