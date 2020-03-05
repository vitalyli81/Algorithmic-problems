/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const memo = {
    0: 0,
    1: 1,
    2: 1
  };

  return fib(n, memo);
};

const fib = (n, memo) => {
  if (n in memo) {
    return memo[n];
  }
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo) + fib(n - 3, memo));
};
