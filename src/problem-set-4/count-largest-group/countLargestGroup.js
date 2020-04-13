/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const hash = {};
  let max = 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    const sum = sumDig(i);

    hash[sum] = (hash[sum] || 0) + 1;
    max = Math.max(max, hash[sum]);
  }

  for (let v of Object.values(hash)) {
    if (v === max) {
      count++;
    }
  }

  return count;
};

function sumDig(n) {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}
