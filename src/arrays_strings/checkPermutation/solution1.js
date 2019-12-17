export const checkPermuation1 = (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;
  const hash = {};

  if (len1 !== len2) return false;

  for (let i = 0; i < len1; i++) {
    const c = s1[i];
    hash[c] = (hash[c] || 0) + 1;
  }

  for (let i = 0; i < len1; i++) {
    const c = s2[i];

    if (!hash[c] || --hash[c] < 0) return false;
  }

  return true;
};
