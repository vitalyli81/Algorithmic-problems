/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let count = 0;
  for (let c of t) {
    count += c.charCodeAt();
  }

  for (let c of s) {
    count -= c.charCodeAt();
  }

  return String.fromCharCode(count);
};
