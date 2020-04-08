/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const hash = Array(N + 1).fill(0);

  trust.forEach((count) => {
    hash[count[0]]--;
    hash[count[1]]++;
  });

  for (let i = 1; i < hash.length; i++) {
    if (hash[i] === N - 1) {
      return i;
    }
  }
  return -1;
};
