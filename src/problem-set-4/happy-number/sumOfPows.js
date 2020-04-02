function sumOfPows(n = 0, pow = 2) {
  let res = 0;
  while (n) {
    res += (n % 10) ** pow;
    n = parseInt(n / 10);
  }
  return res;
}
