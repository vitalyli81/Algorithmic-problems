export const stringCompression1 = str => {
  let consecutiveCount = 0;
  let compressed = '';

  for (let i = 0; i < str.length; i++) {
    consecutiveCount++;

    if (i + 1 > str.length || str[i] !== str[i + 1]) {
      compressed += `${str[i]}${consecutiveCount}`;
      consecutiveCount = 0;
    }
  }

  return compressed.length < str.length ? compressed : str;
};
