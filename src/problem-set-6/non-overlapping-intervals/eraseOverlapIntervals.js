/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (!intervals || !intervals.length) return 0;
  let count = 1;
  let end;
  intervals.sort((a, b) => a[1] - b[1]);
  end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [startNext, endNext] = intervals[i];
    if (startNext >= end) {
      count++;
      end = endNext;
    }
  }

  return intervals.length - count;
};
