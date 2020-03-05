/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let j = 0;

  for (let i = 0; i < s.length && j < g.length; i++) {
    if (s[i] >= g[j]) j++;
  }

  return j;
};
