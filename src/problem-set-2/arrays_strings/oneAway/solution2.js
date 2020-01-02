export const oneAway2 = (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;

  if (len1 === len2) {
    return oneReplace(s1, s2);
  } else if (len1 + 1 === len2) {
    return oneInsert(s1, s2);
  } else if (len1 - 1 === len2) {
    return oneInsert(s2, s1);
  }
  return false;
};

const oneReplace = (s1, s2) => {
  let foundDiff = false;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (foundDiff) return false;
      foundDiff = true;
    }
  }

  return true;
};

const oneInsert = (s1, s2) => {
  let ind1 = 0;
  let ind2 = 0;

  while (ind1 < s1.length && ind2 < s2.length) {
    if (s1[ind1] !== s2[ind2]) {
      if (ind1 !== ind2) return false;
    } else {
      ind1++;
    }

    ind2++;
  }

  return true;
};
