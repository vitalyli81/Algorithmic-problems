/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let S = A;
  let count = 1;
  while (S.length < B.length) {
    count++;
    S += A;
  }
  if (S.includes(B)) {
    return count;
  }
  S += A;

  if (S.includes(B)) {
    return count + 1;
  }
  return -1;
};
