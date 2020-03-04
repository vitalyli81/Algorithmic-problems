/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let time = 0;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const cur = points[i];
    const x = Math.abs(cur[0] - prev[0]);
    const y = Math.abs(cur[1] - prev[1]);
    time += Math.max(x, y);
  }
  return time;
};
