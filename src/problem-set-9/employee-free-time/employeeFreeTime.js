/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {
  const res = [];
  const flat = [];
  let temp;

  schedule.forEach((employee) => {
    employee.forEach((interval) => {
      flat.push(interval);
    });
  });

  flat.sort((a, b) => a.start - b.start);
  temp = flat[0];

  flat.forEach((next) => {
    if (temp.end < next.start) {
      res.push(new Interval(temp.end, next.start));
      temp = next;
    } else {
      temp = temp.end < next.end ? next : temp;
    }
  });

  return res;
};
