/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  let countSet = new Set();

  A.forEach((s) => {
    count = Array(52).fill(0);

    for (let i = 0; i < s.length; i++) {
      const code = s[i].charCodeAt() - 97 + 26 * (i % 2);
      count[code]++;
    }

    countSet.add(count.join(''));
  });

  return countSet.size;
};
