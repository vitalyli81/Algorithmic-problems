export const rotateString = (A, B) => {
  return A.length === B.length && `${A}${A}`.includes(B);
};
