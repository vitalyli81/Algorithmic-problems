/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  if (start > destination) {
    return distanceBetweenBusStops(distance, destination, start);
  }
  let dist = 0;
  let total = 0;

  distance.forEach((weight, idx) => {
    if (idx >= start && idx < destination) {
      dist += weight;
    }
    total += weight;
  });

  return Math.min(dist, total - dist);
};
