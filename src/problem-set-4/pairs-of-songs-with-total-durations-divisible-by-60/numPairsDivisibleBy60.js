/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  const hash = {};
  let res = 0;

  time.forEach(t => {
    if (hash[(600 - t) % 60]) {
      res += hash[(600 - t) % 60];
    }
    hash[t % 60] = (hash[t % 60] || 0) + 1;
  });

  return res;
};
