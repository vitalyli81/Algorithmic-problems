export const palindromePermutation2 = s => {
  const hash = [];
  let numOfOdds = 0;

  for (let c of s.toLowerCase()) {
    if (c !== ' ') {
      hash[c] = (hash[c] || 0) + 1;

      if (hash[c] % 2) {
        numOfOdds++;
      } else {
        numOfOdds--;
      }
    }
  }

  return numOfOdds < 2;
};
