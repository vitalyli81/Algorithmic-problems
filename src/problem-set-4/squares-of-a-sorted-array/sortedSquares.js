/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  const N = A.length;
  const sqr = Array(N);

  let start = 0;
  let end = N - 1;

  for (let i = end; i >= 0; i--) {
    const sq1 = A[start] ** 2;
    const sq2 = A[end] ** 2;

    if (sq1 > sq2) {
      sqr[i] = sq1;
      start++;
    } else {
      sqr[i] = sq2;
      end--;
    }
  }

  return sqr;
};
