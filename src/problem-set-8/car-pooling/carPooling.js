/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const hash = {};

  trips.forEach(([people, start, end]) => {
    hash[start] = (hash[start] || 0) + people;
    hash[end] = (hash[end] || 0) - people;
  });

  for (let v of Object.values(hash)) {
    capacity -= v;

    if (capacity < 0) return false;
  }

  return true;
};
