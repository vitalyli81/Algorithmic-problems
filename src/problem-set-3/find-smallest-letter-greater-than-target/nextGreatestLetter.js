/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  if (!letters || !letters.length) {
    return;
  }
  let res = letters[0];
  for (let i = 0; i < letters.length; i++) {
    const c = letters[i];
    if (c.charCodeAt() > target.charCodeAt()) {
      return c;
    }
  }
  return res;
};
