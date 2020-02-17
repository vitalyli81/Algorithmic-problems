/**
 * @param {number} N
 * @return {number}
 */
const memo = {};
var fib = function(N) {
  if (N < 2) return N;
  if (memo[N] >= 0) return memo[N];
  return (memo[N] = fib(N - 1) + fib(N - 2));
};
