export const stringCompression2 = str => {
  let consecutiveCount = 0;
  const compressed = [];

  for (let i = 0; i < str.length; i++) {
    consecutiveCount++;

    if (i + 1 > str.length || str[i] !== str[i + 1]) {
      compressed.push(str[i]);
      for (let n of String(consecutiveCount)) {
        compressed.push(n);
      }
      consecutiveCount = 0;
    }
  }

  return compressed.length < str.length ? compressed.join('') : str;
};
