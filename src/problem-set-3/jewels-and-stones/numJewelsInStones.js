/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let jHash = {};
  let count = 0;
  for (let j of J) {
    jHash[j] = (jHash[j] || 0) + 1;
  }
  for (let s of S) {
    if (jHash[s]) {
      count++;
    }
  }
  return count;
};
