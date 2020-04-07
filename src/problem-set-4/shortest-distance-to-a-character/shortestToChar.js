/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  const len = S.length;
  const res = Array(len).fill(len);
  let prev = -Infinity;

  for (let i = 0; i < len; i++) {
    if (S[i] === C) {
      prev = i;
    }
    res[i] = i - prev;
  }

  prev = Infinity;
  for (let i = len - 1; i >= 0; i--) {
    if (S[i] === C) {
      prev = i;
    }
    res[i] = Math.min(res[i], prev - i);
  }

  return res;
};
