/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let ans = 0;
  const N = points.length;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        ans = Math.max(ans, area(points[i], points[j], points[k]));
      }
    }
  }
  return ans;
};

function area(a, b, c) {
  return (
    0.5 *
    Math.abs(
      a[0] * b[1] +
        b[0] * c[1] +
        c[0] * a[1] -
        b[0] * a[1] -
        c[0] * b[1] -
        a[0] * c[1]
    )
  );
}
