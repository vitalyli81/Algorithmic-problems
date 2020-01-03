export const palindromePermutation1 = s => {
  const hash = [];
  let numOfOdds = 0;

  for (let c of s.toLowerCase()) {
    if (c !== ' ') {
      hash[c] = (hash[c] || 0) + 1;
    }
  }

  for (let key in hash) {
    if (hash[key] % 2) {
      numOfOdds++;
    }
  }

  return numOfOdds < 2;
};
