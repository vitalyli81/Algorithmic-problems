/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let radius = 0;
  let i = 0;

  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  houses.forEach(house => {
    while (
      i < heaters.length - 1 &&
      Math.abs(house - heaters[i + 1]) <= Math.abs(house - heaters[i])
    ) {
      i++;
    }
    radius = Math.max(radius, Math.abs(house - heaters[i]));
  });

  return radius;
};
