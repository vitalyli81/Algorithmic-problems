/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let a = Math.trunc(Math.sqrt(area));

  while (area % a !== 0) {
    a--;
  }

  return [area / a, a];
};
