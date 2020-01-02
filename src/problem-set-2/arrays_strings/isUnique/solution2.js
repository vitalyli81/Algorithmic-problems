export const isUnique2 = str => {
  const len = str.length;
  if (!str || len === 1) return true;

  for (let i = 0; i < len; i++) {
    const c1 = str[i];

    for (let j = 0; j < len; j++) {
      const c2 = str[j];

      if (i !== j && c1 === c2) {
        return false;
      }
    }
  }

  return true;
};
