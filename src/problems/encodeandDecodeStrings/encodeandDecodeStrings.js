/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = strs => {
  if (!strs.length) return;
  const char257 = String.fromCharCode(257);

  return strs.reduce((res, str) => (res += `${str}${char257}`), '');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = s => {
  if (!s) return [];
  const char257 = String.fromCharCode(257);
  const res = [];
  let str = '';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === char257) {
      res.push(str);
      str = '';
    } else {
      str += c;
    }
  }

  return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
