export const isUnique = str => {
  if (!str || str.length === 1) return true;
  const hash = {};

  for (let char of str) {
    hash[char] = (hash[char] || 0) + 1;
    if (hash[char] > 1) return false;
  }
  return true;
};
