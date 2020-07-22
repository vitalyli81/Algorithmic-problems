/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  const isCelebrity = (n, candidate) => {
    for (let i = 0; i < n; i++) {
      if (candidate === i) continue;
      const key1 = candidate + ':' + i;
      const key2 = i + ':' + candidate;
      const isKnown1 =
        memo[key1] !== undefined ? memo[key1] : knows(candidate, i);
      const isKnown2 =
        memo[key2] !== undefined ? memo[key2] : knows(i, candidate);
      if (isKnown1 || !isKnown2) {
        return false;
      }
    }

    return true;
  };

  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  const memo = {};

  return function (n) {
    let candidate = 0;

    for (let i = 0; i < n; i++) {
      const key = candidate + ':' + i;
      const isKnown = memo[key] !== undefined ? memo[key] : knows(candidate, i);
      if (isKnown) {
        candidate = i;
      }
    }

    if (isCelebrity(n, candidate)) {
      return candidate;
    }

    return -1;
  };
};
