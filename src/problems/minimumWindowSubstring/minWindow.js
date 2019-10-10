/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  if (!s.length || !t.length) return '';

  const sHash = {};
  const tHash = {};
  const required = t.length;
  let left = 0;
  let right = 0;
  let formed = 0;

  for (let i = 0; i < required; i++) {
    const char = t[i];
    tHash[char] = (tHash[char] || 0) + 1;
  }

  while (r < s.length) {
    const char = s[r];
  }
};
