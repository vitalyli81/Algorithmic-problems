/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
  let count = 1;
  const res = [];
  let range = [0, 0];

  for (let i = 1; i < S.length; i++) {
    if (S[i] === S[i - 1]) {
      range[1] = i;
      count++;
    } else {
      if (count > 2) {
        range[1] = i - 1;
        res.push(range);
      }

      range = [i, i];
      count = 1;
    }
  }
  if (count > 2) {
    res.push(range);
  }

  return res;
};
