/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let zeros = 0;
  let max = 0;
  let prev = seats[0];

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      zeros++;
      if (i === seats.length - 1) {
        max = Math.max(max, zeros);
      }
    } else {
      const count = prev === 0 ? zeros : Math.ceil(zeros / 2);
      prev = 1;
      max = Math.max(max, count);
      zeros = 0;
    }
  }

  return max;
};
