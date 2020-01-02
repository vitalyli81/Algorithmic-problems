export const checkPermuation2 = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let s1Sorted = s1.split('');
  let s2Sorted = s2.split('');
  s1Sorted.sort();
  s2Sorted.sort();

  return s1Sorted.join('') === s2Sorted.join('');
};
