/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function (s, dict) {
  const OPENING_TAG = '<b>';
  const CLOSIONG_TAG = '</b>';
  let intervals = getIntervals(s, dict);

  return applyTags(s, intervals, OPENING_TAG, CLOSIONG_TAG);
};

const getIntervals = (s, dict) => {
  let intervals = [];

  dict.forEach((word) => {
    let index = -1;
    index = s.indexOf(word, index);

    while (index !== -1) {
      intervals.push([index, index + word.length]);
      index += 1;
      index = s.indexOf(word, index);
    }
  });

  intervals = mergeIntervals(intervals);

  return intervals;
};

const mergeIntervals = (intervals) => {
  if (intervals.length < 2) {
    return intervals;
  }

  let res = [];

  intervals.sort((a, b) => a[0] - b[0]);
  res.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1];
    const cur = intervals[i];

    if (last[1] < cur[0]) {
      res.push(cur);
    } else {
      last[1] = Math.max(cur[1], last[1]);
    }
  }

  return res;
};

const applyTags = (s, intervals, openTag, closeTag) => {
  let res = '';
  let prev = 0;

  for (let i = 0; i < intervals.length; i++) {
    res += s.substring(prev, intervals[i][0]);
    res += openTag;
    res += s.substring(intervals[i][0], intervals[i][1]);
    res += closeTag;
    prev = intervals[i][1];
  }

  if (prev < s.length) {
    res += s.substring(prev);
  }

  return res;
};
