/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;
  let first = -1;
  let second = -1;

  if (A === B) {
    const hash = Array(26);
    for (let c of A) {
      const i = c.charCodeAt() - 97;
      hash[i] = (hash[i] || 0) + 1;
    }

    for (let i = 0; i < 26; i++) {
      if (hash[i] > 1) {
        return true;
      }
    }
    return false;
  } else {
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        if (first === -1) {
          first = i;
        } else if (second === -1) {
          second = i;
        } else {
          return false;
        }
      }
    }
  }

  return first !== -1 && A[first] === B[second] && A[second] === B[first];
};
