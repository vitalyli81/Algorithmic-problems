const tripleSteps = n => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return tripleSteps(n - 1) + tripleSteps(n - 2) + tripleSteps(n - 3);
};
