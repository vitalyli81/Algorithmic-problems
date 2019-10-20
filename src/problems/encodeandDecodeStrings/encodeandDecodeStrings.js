/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = strs => {
  if (!strs.length) return;

  return strs.reduce((res, str) => (res += `${str.length}/${str}`), '');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = s => {
  // TODO
  return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
