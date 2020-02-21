/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (name.length > typed.length || name[0] != typed[0]) return false;
  let nIdx = 0;
  let tIdx = 0;
  while (tIdx < typed.length) {
    if (name[nIdx] === typed[tIdx]) {
      nIdx++;
    } else {
      if (typed[tIdx] !== typed[tIdx - 1]) {
        return false;
      }
    }
    tIdx++;
  }

  return nIdx === name.length ? true : false;
};
