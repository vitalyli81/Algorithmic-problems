/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  return (
    (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) !==
    (points[0][0] - points[2][0]) * (points[0][1] - points[1][1])
  );
};
