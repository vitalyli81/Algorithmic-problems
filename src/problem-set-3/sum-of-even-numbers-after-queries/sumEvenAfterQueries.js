/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  const ans = [];
  let sum = 0;
  A.forEach(val => {
    if (val % 2 === 0) {
      sum += val;
    }
  });
  queries.forEach(([val, idx]) => {
    if (A[idx] % 2 === 0) sum -= A[idx];
    A[idx] += val;
    if (A[idx] % 2 === 0) sum += A[idx];
    ans.push(sum);
  });
  return ans;
};
