const memo = {};
const tripleSteps = n => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (memo[n]) return memo[n];
  memo[n] = tripleSteps(n - 1) + tripleSteps(n - 2) + tripleSteps(n - 3);
  return memo[n];
};
