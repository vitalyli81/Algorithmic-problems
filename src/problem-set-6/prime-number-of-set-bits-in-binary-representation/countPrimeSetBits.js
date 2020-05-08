/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  const primes = {
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
  };
  let count = 0;

  for (let i = L; i <= R; i++) {
    let bits = 0;
    for (let n = i; n > 0; n >>= 1) {
      bits += n & 1;
    }
    if (primes[bits]) {
      count++;
    }
  }

  return count;
};
