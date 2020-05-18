/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length || !p || !s || !p.length || !s.length) return [];
  const res = [];
  let left = 0;
  let right = 0;
  let count = p.length;
  const hash = {};

  for (let c of p) {
    hash[c] = (hash[c] || 0) + 1;
  }

  while (right < s.length) {
    if (hash[s[right]] > 0) {
      count--;
    }
    hash[s[right]]--;
    right++;

    if (count === 0) {
      res.push(left);
    }
    if (right - left === p.length) {
      if (hash[s[left]] > -1) {
        count++;
      }
      hash[s[left]]++;
      left++;
    }
  }

  return res;
};
