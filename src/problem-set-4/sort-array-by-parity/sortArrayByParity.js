/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let i = 0;
  let j = A.length - 1;

  while (i < j) {
    if (A[i] % 2 === 0) {
      i++;
    } else {
      const tmp = A[j];
      A[j] = A[i];
      A[i] = tmp;
      j--;
    }
  }

  return A;
};
