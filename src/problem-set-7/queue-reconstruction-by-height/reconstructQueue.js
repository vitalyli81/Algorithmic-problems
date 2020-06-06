/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }

    return a[0] - b[0];
  });

  const res = Array(people.length);

  for (let i = 0; i < people.length; i += 1) {
    let n = people[i][1];
    let idx = 0;

    while (n > 0 || res[idx] !== undefined) {
      if (res[idx] === undefined) {
        n -= 1;
      }
      idx += 1;
    }

    res[idx] = people[i];
  }

  return res;
};
