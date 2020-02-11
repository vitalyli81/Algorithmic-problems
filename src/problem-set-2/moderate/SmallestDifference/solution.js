const smallestDiff = (a, b) => {
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);

  let m = 0;
  let n = 0;
  let min = Number.MAX_VALUE;

  while (m < a.length && n < b.length) {
    min = Math.min(min, Math.abs(a[m] - b[n]));
    if (a[m] < b[n]) {
      m++;
    } else {
      n++;
    }
  }

  return min;
};
