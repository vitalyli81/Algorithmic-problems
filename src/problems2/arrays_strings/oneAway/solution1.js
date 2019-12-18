export const oneAway1 = (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 > len2) {
    return oneAway1(s2, s1);
  }
  const diff = len2 - len1;
  if (diff > 1) return false;

  let ind1 = 0;
  let ind2 = 0;
  let foundDiff = false;

  while (ind1 < len1 && ind2 < len2) {
    if (s1[ind1] !== s2[ind2]) {
      if (foundDiff) return false;
      foundDiff = true;
      if (len1 === len2) {
        ind1++;
      }
    } else {
      ind1++;
    }
    ind2++;
  }

  return true;
};
