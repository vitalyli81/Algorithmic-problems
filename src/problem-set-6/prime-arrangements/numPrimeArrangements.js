/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  var primes = {
    2: true,
    3: true,
    5: true,
    7: true,
    11: true,
    13: true,
    17: true,
    19: true,
    23: true,
    29: true,
    31: true,
    37: true,
    41: true,
    43: true,
    47: true,
    53: true,
    59: true,
    61: true,
    67: true,
    71: true,
    73: true,
    79: true,
    83: true,
    89: true,
    97: true,
  };

  let primeCount = 0;
  let res = 1;
  const M = 10 ** 9 + 7;

  for (let i = 1; i <= n; i++) {
    if (primes[i]) {
      primeCount++;
    }
  }

  for (let i = 1; i <= primeCount; i++) {
    res = (res * i) % M;
  }

  for (let i = 1; i <= n - primeCount; i++) {
    res = (res * i) % M;
  }

  return res;
};
