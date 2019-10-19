const insert = (intervals, newInterval) => {
  const newInt = [...newInterval];
  let index = 0;
  const result = [];

  while (index < intervals.length && intervals[index][1] > newInt[0]) {
    result.push(intervals[index]);
    index++;
  }

  while (index < intervals.length && intervals[index][0] > newInt[1]) {
    newInt[0] = Math.min(intervals[index][0], newInt[0]);
    newInt[1] = Math.max(intervals[index][1], newInt[1]);
    index++;
  }
  result.push(newInt);

  while (index < intervals.length) {
    result.push(intervals[index]);
    index++;
  }

  return result;
};
