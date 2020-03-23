/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let sign = 1;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    sign = -1;
  }
  const absDiividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);
  if (absDivisor === 0) return Number.MAX_SAFE_INTEGER;
  if (absDiividend === 0 || absDiividend < absDivisor) return 0;
  let res = helper(absDiividend, absDivisor);
  if (res > Number.MAX_VALUE) {
    res = sign > 0 ? Number.MAX_VALUE : Number.MIN_VALUE;
  } else {
    res *= sign;
  }

  return res;
};

const helper = (dividend, divisor) => {
  if (dividend < divisor) return 0;
  let sum = divisor;
  let count = 1;
  while (sum + sum <= dividend) {
    sum += sum;
    count += count;
  }

  return count + helper(dividend - sum, divisor);
};
