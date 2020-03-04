/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const search = {
    a: 1,
    b: 1,
    l: 2,
    o: 2,
    n: 1
  };
  const hash = {};
  let res = Number.MAX_VALUE;

  for (let c of text) {
    hash[c] = (hash[c] || 0) + 1;
  }

  for (let [key, value] of Object.entries(search)) {
    const count = hash[key] ? Math.trunc(hash[key] / value) : 0;
    res = Math.min(res, count);
  }

  return res;
};
